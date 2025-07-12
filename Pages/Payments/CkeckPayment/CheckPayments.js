// app/components/CheckPaymentStatus.js
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStateContext } from '@/contexts/ContextProvider';
import {
  AAMARPAY_GET_USER_DATA_FROM_DATABASE,
  PAYPAL_GET_USER_DATA_FROM_DATABASE,
  SSL_COMMERZ_GET_USER_DATA_FROM_DATABASE
} from '@/assets/URL\'s/AllUrl';


export const CheckPaymentStatus = () => {
  const { setUserPaymentStatusCheck } = useStateContext();
  const [userEmail, setuserEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    // alert("checking status")
    const fetchEmailAndCheckStatus = async () => {
      const email = await AsyncStorage.getItem('userEmail');
      if (!email) return;
      setuserEmail(email);

      const fetchPaymentStatus = async (url, callback) => {
        try {
          const token = await AsyncStorage.getItem("loginToken");
          if (!token) return;

          const response = await fetch(url + email, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });

          const data = await response.json();
          console.log(data);

          if (data?.data?.length > 0) {
            data.data.forEach((user) => {
              if (!user.isExpire) {
                callback(user.productName);
              }
            });
          }

        } catch (error) {
          console.error(error);
          const message = error?.message || '';
          if (message.includes("Unauthorized") || message.includes("401")) {
            await AsyncStorage.multiRemove([
              'userName',
              'userEmail',
              'loginToken',
              'setCountry',
              'setCountryFlag'
            ]);
            Alert.alert('Session Expired', 'Redirecting to login...');
            router.replace('/login');
          }
        }
      };

      await fetchPaymentStatus(SSL_COMMERZ_GET_USER_DATA_FROM_DATABASE, setUserPaymentStatusCheck);
      await fetchPaymentStatus(AAMARPAY_GET_USER_DATA_FROM_DATABASE, setUserPaymentStatusCheck);
      await fetchPaymentStatus(PAYPAL_GET_USER_DATA_FROM_DATABASE, setUserPaymentStatusCheck);
    };

    fetchEmailAndCheckStatus();
    // alert("checked..")
  }, []);

  return null;
};

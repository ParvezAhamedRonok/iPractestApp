import React, { useEffect } from 'react';
import { useStateContext } from '@/contexts/ContextProvider';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import URLs
import {
  LISTENING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA,
  READING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA,
  WRITING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA,
  SPEAKING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA
} from '@assets/URL\'s/AllUrl';

const DateGetAPI = () => {
  const { setArray } = useStateContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const useremail = await AsyncStorage.getItem('userEmail');
        const token = await AsyncStorage.getItem('loginTOken');

        if (!useremail || !token) {
          console.warn('Missing userEmail or token');
          return;
        }

        const headers = {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        };

        const endpoints = [
          LISTENING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA,
          READING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA,
          SPEAKING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA,
          WRITING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA
        ];

        for (let endpoint of endpoints) {
          const response = await fetch(endpoint + useremail, { method: 'GET', headers });
          const data = await response.json();

          if (data?.data) {
            data.data.forEach(item => {
              const obj = {
                id: item.id,
                date: moment.utc(item.createdAt).format('MM/DD/YYYY')
              };
              setArray(prev => [...prev, obj]);
            });
          }
        }

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return null; // This is a logic-only component
};

export default DateGetAPI;

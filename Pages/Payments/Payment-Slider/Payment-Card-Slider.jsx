import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ScrollView, Dimensions, TouchableOpacity, Modal, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, usePathname } from 'expo-router';
import Carousel from 'react-native-reanimated-carousel';
import { useStateContext } from '../../../contexts/ContextProvider';

import Card_1 from "../_Data/_CardsDetails/_card1"
import Card_2 from "../_Data/_CardsDetails/_card2"
import Card_3 from "../_Data/_CardsDetails/_card3"
import Card_4 from "../_Data/_CardsDetails/_card4"
import Card_5 from "../_Data/_CardsDetails/_card5"

import PaymentScreen from '../SSL-Commerz/index';
import PaypalCheckoutPage from '../Paypal/checkoutPage';
import { CheckoutButton } from '../Stripe/Checkout';


import {
    AAMARPAY_GET_USER_DATA_FROM_DATABASE,
    PAYPAL_GET_USER_DATA_FROM_DATABASE,
    SSL_COMMERZ_GET_USER_DATA_FROM_DATABASE
} from '@/assets/URL\'s/AllUrl';


const { width: screenWidth } = Dimensions.get('window');
let store_payMethod = '';

const TestimonialSlider = () => {
    const navigation = useRouter();
    const screenPathName = usePathname();

    const [userEmail, setUserEmail] = useState('');
    const [userCountry, setUserCountry] = useState('');
    const [showPaypalPopup, setShowPaypalPopup] = useState(false);
    const [showSSLCommerz, setShowSSLCommerz] = useState(false);
    const [productName, setProductName] = useState('');
    const [makingAmount, setMakingAmount] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paymentPageExists, setPaymentPageExists] = useState(true); // dynamic check
    const carouselRef = React.useRef();

    const {
        userPaymentStatusCheck,
        OpenClose_LogSign_Popup,
        setOpenClose_LogSign_Popup,
        registerFunction
    } = useStateContext();

    useEffect(() => {
        //if user is not loggedin make sure i am getting the country by this 
        //const countryInfo = await AsyncStorage.getItem('CountryInfo')
        const fetchData = async () => {
            const email = await AsyncStorage.getItem('userEmail');
            const country = await AsyncStorage.getItem('setCountry');
            setUserEmail(email || 'mdpervez');
            setUserCountry(country || 'Bangladesh');
            // alert(country)
            // // Dynamically check for payment page existence
            // const pageExists = true; // you can fetch or calculate this
            // setPaymentPageExists(pageExists);
        };
        fetchData();
    }, []);

    const toggleLogin = () => {
        registerFunction(updateUserFreeAccess);
        setOpenClose_LogSign_Popup("Same-Login");
    };

    const updateUserFreeAccess = async () => {
        const email = await AsyncStorage.getItem('userEmail');
        const token = await AsyncStorage.getItem('loginTOken');
        const endpoints = [
            SSL_COMMERZ_GET_USER_DATA_FROM_DATABASE,
            AAMARPAY_GET_USER_DATA_FROM_DATABASE,
            PAYPAL_GET_USER_DATA_FROM_DATABASE,
        ];

        let isPaid = false;
        let paidProductName = '';

        for (const endpoint of endpoints) {
            try {
                const response = await fetch(`${endpoint}${email}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const res = await response.json();
                if (res?.data?.some(e => !e.isExpire)) {
                    isPaid = true;
                    paidProductName = res.data[0].productName;
                    break;
                }
            } catch (e) {
                console.error(e);
            }
        }

        if (isPaid) {
            Alert.alert('Success', `You already paid for ${paidProductName}`);
            navigation.push('Home');
        } else {
            if (userCountry === 'Bangladesh') setShowSSLCommerz(true);
            else if (store_payMethod === 'Paypal') setShowPaypalPopup(true);
            else CheckoutButton(Pname, userPaymentStatusCheck, navigation);
        }
    };
    const passDataFunc = (Pname, amount, method) => {
        setProductName(Pname);
        setMakingAmount(amount);

        AsyncStorage.getItem('loginToken') // <-- corrected key
            .then(token => {
                if (token) {
                    if (userCountry === 'Bangladesh') setShowSSLCommerz(true);
                    else if (method === 'Paypal') setShowPaypalPopup(true);
                    else CheckoutButton(Pname, userPaymentStatusCheck, navigation);
                    // alert("token found")
                } else {
                    store_payMethod = method;
                    toggleLogin();
                }
            })
            .catch(() => {
                store_payMethod = method;
                toggleLogin();
            });
    };


    const cards = [
        { component: Card_1, condition: !userPaymentStatusCheck },
        { component: Card_2, condition: ['', 'Starter'].includes(userPaymentStatusCheck) },
        { component: Card_3, condition: userCountry === 'Bangladesh' },
        { component: Card_4, condition: userCountry === 'Bangladesh' },
        { component: Card_5, condition: userCountry === 'Bangladesh' },
    ].filter(c => c.condition);

    return (
        <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: 'white' }}>
            <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginVertical: 20 }}>
                Get Your Package Now
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 12, marginBottom: 10 }}>
                Unlock premium access and enjoy our modules with a simple step-by-step guide.
            </Text>

            {!screenPathName.includes("Payment-Pages") ? (
                <View style={{ alignItems: 'center' }}>
                    <Carousel
                        ref={carouselRef}
                        width={screenWidth * 0.9}
                        height={700}
                        data={cards}
                        onSnapToItem={setCurrentIndex}
                        renderItem={({ item }) => (
                            <item.component userCountry={userCountry} passDataFunc={passDataFunc} />
                        )}
                        loop
                        autoPlay
                        autoPlayInterval={10000}
                        scrollAnimationDuration={1000}
                        style={{ alignSelf: 'center' }}
                    />
                </View>
            ) : (
                cards.map((item, index) => (
                    <View key={index} style={{ marginBottom: 20 }}>
                        <item.component userCountry={userCountry} passDataFunc={passDataFunc} />
                    </View>
                ))
            )}

            < >
                {
                    showSSLCommerz && (
                        <PaymentScreen
                            setAmerPayPayment={setShowSSLCommerz}
                            productName={productName}
                            makingAmount={makingAmount}
                        />
                    )
                }
            </>


            <>
                <PaypalCheckoutPage productName={productName} />
            </>
        </ScrollView>
    );
};

export default TestimonialSlider;

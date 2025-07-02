
import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // React Navigation v6+

import Carousel from "react-multi-carousel";
import "../Payment-Cards-Page/index.css"
import SSL_Commerz_Payment_Checkout_Page from "../SSL-Commerz/index";
import PaypalCheckoutPage from "..//Paypal/PaypalCheckoutButton"
import { useRouter } from 'next/navigation';
import { useStateContext } from '../../../contexts/ContextProvider';
import { AAMARPAY_GET_USER_DATA_FROM_DATABASE, PAYPAL_GET_USER_DATA_FROM_DATABASE, SSL_COMMERZ_GET_USER_DATA_FROM_DATABASE } from "../../../assets/URL's/AllUrl";
import { CheckoutButton } from '../Stripe/Checkout';
import Card_1 from "../_Data/_CardsDetails/_card1"
import Card_2 from "../_Data/_CardsDetails/_card2"
import Card_3 from "../_Data/_CardsDetails/_card3"
import Card_4 from "../_Data/_CardsDetails/_card4"
import Card_5 from "../_Data/_CardsDetails/_card5"



let store_payMethod = ""
const TestimonialHomeTwo = () => {
    const history = useRouter();
    const { userPaymentStatusCheck, OpenClose_LogSign_Popup, setOpenClose_LogSign_Popup, registerFunction } = useStateContext();
    const [userEmail, setUserEmail] = useState("");
    const [show_PaypalPopUp, setShow_PaypalPopUp] = useState(false);
    const [userCountry, setcountryInfo] = useState("");
    const [AmerPayPayment, setAmerPayPayment] = useState("");
    const [productName, setproductName] = useState("");
    const [makingAmount, setMakingAmount] = useState();


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate function when user clicks to pay
                // funForWhenUserClickToPay("_firstPage");

                const localDataInfo = await AsyncStorage.getItem('CountryInfo');
                const getCountryInfo = localDataInfo ? JSON.parse(localDataInfo) : null;

                const storedCountry = await AsyncStorage.getItem('setCountry');
                if (storedCountry) {
                    // Alert.alert('Login country'); // Optional
                    setCountryInfo(storedCountry);
                } else if (getCountryInfo && getCountryInfo.countryName) {
                    // Alert.alert('First country'); // Optional
                    setCountryInfo(getCountryInfo.countryName);
                }

                const email = await AsyncStorage.getItem('userEmail');
                if (email) {
                    setUserEmail(email);
                }
            } catch (error) {
                console.error('Error fetching data from storage:', error);
            }
        };

        fetchData();
    }, []);







    //login and signup pages opne and close globally..
    const toggleLogin = () => {
        //store function globally for run after complete login / signUp because this will be same page redirecting 
        registerFunction(updateUserFreeAccess);
        //open the login Pages
        setOpenClose_LogSign_Popup("same_Login")

    };





    const updateUserFreeAccess = async () => {
        const navigation = useNavigation();
        let local_email_get = '';
        let local_Token_get = '';

        try {
            // ✅ Get stored credentials
            const email = await AsyncStorage.getItem('userEmail');
            const token = await AsyncStorage.getItem('loginTOken');

            if (email) local_email_get = email;
            if (token) local_Token_get = token;

            const paymentCheckEndpoints = [
                SSL_COMMERZ_GET_USER_DATA_FROM_DATABASE,
                AAMARPAY_GET_USER_DATA_FROM_DATABASE,
                PAYPAL_GET_USER_DATA_FROM_DATABASE,
            ];

            let store_PaidName;
            let isPaid = false;

            // ✅ Check each payment source
            for (const endpoint of paymentCheckEndpoints) {
                try {
                    const response = await fetch(`${endpoint}${local_email_get}`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${local_Token_get}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    const res = await response.json();

                    if (res.data && res.data.length > 0) {
                        const validPayment = res.data.some((e) => {
                            const isExpired = e.isExpire;
                            store_PaidName = e.productName;
                            return isExpired == null || isExpired === '' || isExpired === undefined;
                        });

                        if (validPayment) {
                            isPaid = true;
                            break;
                        }
                    }
                } catch (err) {
                    console.error(`Error fetching from ${endpoint}:`, err);
                }
            }

            // ✅ After loop, handle result
            if (isPaid) {
                if (store_PaidName === 'Starter' || store_PaidName === 'Expert') {
                    Alert.alert('Payment Success', `You Bought ${store_PaidName}. Reloading the page for upgrade.`);
                } else {
                    Alert.alert('Info', 'You are already paid.');
                }

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }], // Assuming 'Home' is your screen
                });
            } else {
                // ✅ Show payment options
                if (userCountry === 'Bangladesh') {
                    setAmerPayPayment(true);
                } else {
                    if (store_payMethod === 'Paypal') {
                        setShow_PaypalPopUp(true);
                    } else {
                        CheckoutButton(productName, isPaid);
                    }
                }
            }
        } catch (error) {
            console.error('Error checking payment status:', error);
        }
    };




    const passDataFunc = (Pname, amount, Pay_Method) => {
        let local_Token_get = "";
        if (typeof window !== 'undefined') {
            local_Token_get = localStorage.getItem("loginTOken");
        }
        setproductName(Pname);
        setMakingAmount(amount);

        if (local_Token_get) {
            if (userCountry == "Bangladesh") {
                setAmerPayPayment(true);
            } else {
                if (Pay_Method === "Paypal") {
                    //open Paypal Checkout Page
                    setShow_PaypalPopUp(true);
                } else {
                    //open Stripe Checkout Page
                    CheckoutButton(Pname, userPaymentStatusCheck)
                }
            }

        } else {
            //store Payment Methods , when user is not logged in and try to make login 
            store_payMethod = Pay_Method
            toggleLogin()
        }

    }



    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 570 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 570, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <div>
            <div className="parent sm:p-[50px] p-[20px] translate-y-[-50px] bg-white">
                <div className="relative text-center grid justify-center font-bold text-black text-2xl sm:text-4xl align-middle pt-7 pb-2 translate-y-[-25px] sm:translate-y-[-38px]">
                    Get Your Package Now <br />
                    <p className="text-[11px] mt-2">
                        Unlock premium access and enjoy our modules with a simple step-by-step guide.
                    </p>
                </div>

                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={15000}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                >
                    {
                        !userPaymentStatusCheck && (
                            <Card_1
                                userCountry={userCountry}
                                userPaymentStatusCheck={userPaymentStatusCheck}
                                passDataFunc={passDataFunc}
                            />
                        )
                    }
                    {
                        ["", "Starter"].includes(userPaymentStatusCheck) && (
                            <Card_2
                                userCountry={userCountry}
                                userPaymentStatusCheck={userPaymentStatusCheck}
                                passDataFunc={passDataFunc}
                            />
                        )
                    }


                    {
                        userCountry == "Bangladesh" && (
                            <Card_3
                                passDataFunc={passDataFunc}
                            />


                        )
                    }
                    {
                        userCountry == "Bangladesh" && (
                            <Card_4
                                passDataFunc={passDataFunc}
                            />
                        )
                    }

                    {
                        userCountry == "Bangladesh" && (
                            <Card_5
                                passDataFunc={passDataFunc}
                            />

                        )
                    }
                </Carousel>
            </div>
            {
                AmerPayPayment && (<>
                    <SSL_Commerz_Payment_Checkout_Page
                        setAmerPayPayment={setAmerPayPayment}
                        productName={productName}
                        makingAmount={makingAmount}
                    />
                </>)
            }

            {
                show_PaypalPopUp && (
                    <div className=" fixed inset-0 z-[1472384632746700000] flex items-center justify-center bg-black bg-opacity-50">
                        <div className="w-[90%] sm:w-[50%] bg-white rounded-md shadow-lg p-4 min-h-[300px] max-h-[80vh] overflow-auto relative">
                            <div className='absolute top-1 right-2 rounded-[50%] text-white p-1 w-[30px] h-[30px] bg-red-500 text-center cursor-pointer' onClick={() => { setShow_PaypalPopUp(false) }}>
                                X
                            </div>
                            <section className="w-full p-3  ">

                                <PaypalCheckoutPage productName={productName} />
                            </section>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default TestimonialHomeTwo;




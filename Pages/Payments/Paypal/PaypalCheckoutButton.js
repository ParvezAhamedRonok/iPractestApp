// "use client"
// import React, { useEffect, useState } from 'react';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { useStateContext } from "@/contexts/ContextProvider";
// import { PAYPAL_POST_FOR_OPEN_CHECKOUTPAGE, PAYPAL_POST_FOR_UPGRADE_USER_PAYMENT_INFO_WITH_AMOUNT } from "@assets/URL's/AllUrl"
// import { CheckPaymentStatus } from "@/components/Payments/CkeckPayment/CheckPayments";

// //END OF THE IMPORTING......







// let mainPrice = 0;
// const asianCountries = [
//     "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", 
//     "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq", 
//     "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", 
//     "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", 
//     "Pakistan", "Palestine", "Philippines", "Qatar", "Saudi Arabia", "Singapore", 
//     "South Korea", "Sri Lanka", "Syria", "Tajikistan", "Thailand", "Timor-Leste", 
//     "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"
// ];
// const PaypalCheckoutButton = ({ productName }) => {
//     const { notify, userPaymentStatusCheck } = useStateContext();
//     const history = useRouter();

//     const [paidFor, setPaidFor] = useState(false);
//     const [error, setError] = useState(null);

//     //all locaStorags data store into those states.....
//     const [userCountry, setuserCountry] = useState('')
//     const [userEmail, setuserEmail] = useState('');
//     const [userName, setuserName] = useState('')
//     const [userLoginToken, setUserLoginToken] = useState('');

//     CheckPaymentStatus();

//     useEffect(() => {
//         let localDataInfo = localStorage.getItem("CountryInfo");
//         let getCountryInfo = JSON.parse(localDataInfo)

//         if (localStorage.getItem("setCountry")) {
//             setuserCountry(localStorage.getItem("setCountry"));
//         } else {
//             setuserCountry(getCountryInfo.countryName);
//         }

//         setuserName(localStorage.getItem('userName') && localStorage.getItem('userName'));
//         setuserEmail(localStorage.getItem("userEmail") && localStorage.getItem("userEmail"));
//         setUserLoginToken(localStorage.getItem("loginTOken") && localStorage.getItem("loginTOken"))

//     }, [])


//     if (userPaymentStatusCheck) {
//         if (asianCountries.includes(userCountry)) {
//             mainPrice = 3
//         } else {
//             mainPrice = 2
//         }

//     } else {
//         if (productName == "Starter") {
//             if (asianCountries.includes(userCountry)) {
//                 mainPrice = 4.5
//             } else {
//                 mainPrice = 6.5
//             }

//         } else if (productName == "Expert") {
//             if (asianCountries.includes(userCountry)) {
//                 mainPrice = 6.5
//             } else {
//                 mainPrice = 9.5
//             }
//         }
//     }


//     //with data-datas
//     // orderID: "4S578650NF6954412"
//     const handleApprove = (data, order) => {
//         // setPaidFor(true);
//         let userInfo = {
//             userName: userName,
//             payName: order.payer.name.given_name + order.payer.name.surname,
//             userEmail: userEmail,
//             payEmail: order.payer.email_address,
//             country: userCountry,
//             payCountryCode: order.payer.address.country_code,
//             price: mainPrice,
//             orderId: data.orderID,
//             paymentId: data.paymentID,
//             payMethod: data.paymentSource,
//             productName: productName,
//         }
//         if (userPaymentStatusCheck) {
//             axios({
//                 method: "post",
//                 // url: "http://localhost:8080/api/user/PaypalPay",
//                 url: PAYPAL_POST_FOR_UPGRADE_USER_PAYMENT_INFO_WITH_AMOUNT,
//                 data: userInfo,
//             })
//                 .then((res) => {
//                     console.log(res);

//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//         } else {
//             axios({
//                 method: "post",
//                 url: PAYPAL_POST_FOR_OPEN_CHECKOUTPAGE,
//                 data: userInfo,
//             })
//                 .then((res) => {
//                     console.log(res);


//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//         }



//         notify();
//         // localStorage.setItem("productID/Payment", "PaySuccess");
//         setTimeout(() => {
//             history.push(`/Payment-Pages/Payment-Success`);
//             localStorage.removeItem("productID");
//         }, 2000);
//     }





//     //if need we can use this also is use when successfully payment done or not--
//     if (paidFor) {
//         alert("Thank You for purchasing from iPractest.com");
//     }
//     if (error) {
//         alert(error);
//     }


//     console.log(productName)

//     const initialOptions = {
//         // clientId: "AZJDmyOtPi5c5Tw4eGZzPzNLF9-vkq6mqiqEbMZmXfG1GWeqbohHx22dLsHsGdwd14rhd8qkBxwNAKid",
//         // clientId: "AdlRJfFdEhhhmMGtvJ6UbD0xbrAWLsH9FGY5XCcdyuWflngPxuXc5uzQ_2k0M87lNwlXaQB4dbDtsThx",
//         // clientId: "AX_JFvAVryz-c4Ihz_iR4iTYN-z8IYLm0MwMPAt6N_ek8HSGtv7m2GKyZLOieda9YF19lJMOZoGGgvoR",
//         clientId: "AX_JFvAVryz-c4Ihz_iR4iTYN-z8IYLm0MwMPAt6N_ek8HSGtv7m2GKyZLOieda9YF19lJMOZoGGgvoR",
//         currency: "USD",
//         intent: "capture",
//     };

//     return (
//         <PayPalScriptProvider options={initialOptions}>
//             <PayPalButtons
//                 // style={{
//                 //     layout: 'vertical',
//                 //     color: 'blue',
//                 //     shape: 'rect',
//                 //     label: 'paypal'
//                 // }}
//                 className='w-full'
//                 onClick={(data, actions) => {
//                     // const hasAlreadyBoughtCourse = false;
//                     // if(hasAlreadyBoughtCourse){
//                     //     setError("You Already bough this course");
//                     //     return actions.reject();
//                     // }else{
//                     //     return actions.resolve();
//                     // }
//                 }}
//                 createOrder={(data, actions) => {
//                     return actions.order.create({
//                         purchase_units: [
//                             {
//                                 description: "this is for 3 months description",
//                                 amount: {
//                                     // value: product.price.toFixed(2),
//                                     value: mainPrice,
//                                 },
//                             },
//                         ],
//                     });
//                 }}
//                 onApprove={async (data, action) => {
//                     const order = await action.order.capture();
//                     // console.log("order", order);
//                     handleApprove(data, order);
//                     // console.log(data.orderID);
//                 }}
//                 onCancel={() => { alert("Payment has been cancel") }}
//                 onError={(err) => {
//                     setError(err);
//                     console.log("PayPal Checkout onError", err);
//                 }}
//             />
//         </PayPalScriptProvider>
//     )
// }

// export default PaypalCheckoutButton
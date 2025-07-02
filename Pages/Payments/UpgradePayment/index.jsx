"use client"
import React, { useEffect, useState, Suspense } from 'react';
import PaypalCheckoutPage from "./Paypal/checkoutPage"
import { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import Axios from "axios";
import Img1 from "@assets/images/otherImgs/masterCard.png"
import Img3 from "@assets/images/otherImgs/bkash2.webp"
import Img4 from "@assets/images/otherImgs/nogod2.jpeg";
import Professonal_img_1 from "@assets/images/Payments/Professona_img-1.png"
import { useRouter } from 'next/navigation';
import { CheckPaymentStatus } from "@/components/Payments/CkeckPayment/CheckPayments.js";
import { useStateContext } from "@/contexts/ContextProvider";
import SSL_Commerz_Payment_Checkout_Page from "./Updrade-SSL-Pay/index";
import {
    AAMARPAY_POST_REQUEST_FOR_UPGRADE_USER_PAYMENT_INFO,
    SSL_COMMERZ_POST_FOR_UPGRADE_USER_PAYMENT_INFO_WITH_AMOUNT
} from "@assets/URL's/AllUrl";
import Loader from "@/Helper/Loader";
//end of the importing..........


function Index() {
    const history = useRouter();
    const { userPaymentStatusCheck, setuserPaymentStatusCheck } = useStateContext();

    //all locaStorags data store into those states.....
    const [userCountry, setuserCountry] = useState('')
    const [userEmail, setuserEmail] = useState('');
    const [makingAmount, setMakingAmount] = useState()

    const [toggleSwitch, setSwitchValue] = useState("");

    const [AmerPayPayment, setAmerPayPayment] = useState("");
    const [productName, setproductName] = useState("");


    //check payment user is paid or not..
    CheckPaymentStatus()
    //Save user who clicked for payment but they don't pay............
    useEffect(() => {
        //get all user localstorages data here && store them into a state
        setuserCountry(localStorage.getItem("setCountry"))
        setuserEmail(localStorage.getItem("userEmail"))

    }, []);


    // const handleSubmit = async (Product_data) => {
    //     const data =
    //     {
    //         "currency": "BDT",
    //         "userEmail": userEmail,
    //         "productName": Product_data
    //     }
    //     // const url = "https://node-js-express-login-example.onrender.com/api/user/SSL-Commerz-Payment-Gateway-Upgrade-Url"; 
    //     const url = SSL_COMMERZ_POST_FOR_UPGRADE_USER_PAYMENT_INFO_WITH_AMOUNT;
    //     try {
    //         const res = await Axios.post(url, data);
    //         window.location.replace(res.data.redirect);
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };


    // console.log(userPaymentStatusCheck)
    return (
        <>
            <Suspense fallback={<div className='w-[100%] h-[100vh] flex justify-center align-middle'>
                {<Loader />}
            </div>}>
                {
                    !AmerPayPayment && (
                        <section className='w-full bg-[#e7dddb] p-4'>
                            <div className='sm:p-[50px] w-full'>
                                <div className='p-0 sm:p-4 w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-2 '>
                                    <div className='grid w-full justify-center sm:justify-start align-middle gap-3 sm:gap-0 translate-x-[-14px] sm:translate-x-[10px]'>
                                        <strong className='text-2xl sm:text-4xl font-sans'>Choose your plans</strong>
                                        <div>

                                            <p className=' font-serif block sm:hidden'>Unlock Your IELTS Potential with
                                                Our  <br /> Flexible and Affordable Pricing Plans </p>
                                            <p className=' font-serif hidden sm:block'>Unlock Your IELTS Potential with
                                                Our   Flexible and <br /> Affordable Pricing Plans </p>
                                        </div>


                                    </div>
                                    <div className='appie-pricing-2-area translate-y-[-20px] sm:translate-x-[-10px]'>
                                        <div className='w-full h-full  flex justify-center sm:justify-end align-middle'>
                                            <div className="appie-section-title text-center">
                                                <div className="appie-pricing-tab-btn">
                                                    {
                                                        userPaymentStatusCheck == "Starter" && (
                                                            <ul
                                                                className="nav nav-pills mb-3"
                                                                id="pills-tab"
                                                                role="tablist"
                                                            >
                                                                <li
                                                                    className={`nav-item ${toggleSwitch == "Expert" || toggleSwitch == "" ? 'on' : 'off'}`}
                                                                    role="presentation"
                                                                >
                                                                    <a
                                                                        onClick={(e) => setSwitchValue("Expert")}
                                                                        className={`nav-link  ${toggleSwitch === "Expert" || toggleSwitch == "" ? 'bg-purple-600 text-white' : ''
                                                                            }`}
                                                                        href="#"
                                                                        type="button"
                                                                        role="tab"
                                                                    >
                                                                        Expert
                                                                    </a>
                                                                </li>
                                                                {
                                                                    userCountry == "Bangladesh" && (
                                                                        <li
                                                                            className={`nav-item ${toggleSwitch == "full_Guide" ? 'on' : 'off'}`}
                                                                            role="presentation"
                                                                        >
                                                                            <a
                                                                                onClick={(e) => setSwitchValue("full_Guide")}
                                                                                className={`nav-link  ${toggleSwitch == "full_Guide" ? 'bg-purple-600 text-white' : ''
                                                                                    }`}
                                                                                href="#"
                                                                                type="button"
                                                                                role="tab"
                                                                            >
                                                                                full Guide
                                                                            </a>
                                                                        </li>
                                                                    )
                                                                }

                                                            </ul>
                                                        )
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*This is for Pc view*/}

                                <div className='w-full h-full justify-center align-middle hidden sm:block'>
                                    <div className='m-auto bg-[rgba(255,255,255,0.55)] p-5 rounded-[20px]'>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="w-full m-auto flex flex-wrap gap-4 justify-center align-middle">
                                                {/* Card 2 */}
                                                {
                                                    userPaymentStatusCheck == "Starter" && (
                                                        <div className={`${toggleSwitch == "Expert" || toggleSwitch == "" && "border-1 border-blue-600 rounded-[25px]"} w-full md:w-[48%] lg:w-[30%] translate-y-[-20px] sm:translate-y-[0px]`}
                                                            onMouseEnter={() => {
                                                                setSwitchValue("Expert");
                                                            }}
                                                        >
                                                            <div className="pricing-one__single pricing-one__single_2 animated fadeInLeft bg-blue-600 relative">
                                                                <div className='absolute top-3 right-5'>
                                                                    <button className='p-1 text-center rounded-[20px] w-[130px] bg-purple-600 text-white text-[12px]'>Most Popular</button>
                                                                </div>
                                                                <div className="pricig-heading">
                                                                    <div className="price-range">
                                                                        <sup>{userCountry == "Bangladesh" ? "৳" : "$"}</sup>
                                                                        <span>{userCountry == "Bangladesh" ? 100 : 2}</span>
                                                                        <p className='translate-x-[8px]'>{userCountry == "Bangladesh" ? "/Per Month" : "/Three months"}</p>
                                                                    </div>
                                                                    <h6 className='flex gap-2'>Expert <button className='p-1 rounded-[20px] text-[12px] bg-gradient-to-r from-blue-600 to-fuchsia-500 w-[180px] text-white'>Improvement Guarantee </button></h6>
                                                                    <p>Perfect for dedicated learners aiming to improve their IELTS scores with full access to our resources.</p>
                                                                </div>
                                                                <div className="pricig-body">
                                                                    <ul>
                                                                        <li><i className="fal fa-check" />Personal mentor for IELTS guidance.</li>
                                                                        <li><i className="fal fa-check" />40+ Speaking Mock Test.</li>
                                                                        <li><i className="fal fa-check" />48 Reading and Listening Mock Test.</li>
                                                                        <li><i className="fal fa-check" />400+ Writing Evaluation and Mock Test.</li>
                                                                        <li><i className="fal fa-check" />400+ writing feedback.</li>
                                                                        <li><i className="fal fa-check" />Get all Reading Explanations.</li>
                                                                        <li><i className="fal fa-check" />Unlimited SOP creation with AI.</li>
                                                                    </ul>
                                                                    <div className="p-3">
                                                                        {userCountry == "Bangladesh" ? (
                                                                            <div className="w-full bg-purple-600 cursor-pointer rounded-[20px] translate-y-[10px] text-white p-2 text-[14px] text-center"
                                                                                onClick={() => {
                                                                                    setAmerPayPayment(true);
                                                                                    setMakingAmount(300)
                                                                                    setproductName("Expert");
                                                                                }}
                                                                            >
                                                                                Start Practicing
                                                                            </div>
                                                                        ) : (
                                                                            <Suspense fallback={<div className='w-full h-full m-auto justify-center'>Loading...</div>}>
                                                                                <PaypalCheckoutPage productName={"Expert"} />
                                                                            </Suspense>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }


                                                {/* Card 3 - New Card */}
                                                {
                                                    userCountry == "Bangladesh" && (
                                                        <div className={`w-full md:w-[48%] lg:w-[30%] translate-y-[0px] ${toggleSwitch == "full_Guide" && "border-1 border-blue-600 rounded-[25px]"}`}
                                                            onMouseEnter={() => {
                                                                setSwitchValue("full_Guide");
                                                            }}
                                                        >

                                                            <div className="pricing-one__single pricing-one__single_2 animated fadeInLeft bg-blue-600 relative">
                                                                <div className='absolute top-0 right-0'>
                                                                    <Image src={Professonal_img_1} alt='Professonal_img_showing-1' className='w-[80px] rounded-[50%]' />
                                                                </div>
                                                                <div className="pricig-heading">
                                                                    <div className="price-range">
                                                                        <sup>৳</sup> <span>
                                                                            {
                                                                                userPaymentStatusCheck == "Starter" && "3800"
                                                                            }
                                                                            {
                                                                                userPaymentStatusCheck == "Expert" && "3500"
                                                                            }
                                                                        </span>
                                                                        <p className='translate-x-[8px] font-bold'>/Full Course</p>
                                                                    </div>
                                                                    <h6 className='flex'>Full Guide</h6>
                                                                    <p>Designed for professionals seeking to enhance their skills with advanced tools.</p>
                                                                </div>
                                                                <div className="pricig-body">
                                                                    <ul>
                                                                        <li className='' style={{ fontSize: "13px", fontWeight: "bold" }}><i className="fal fa-check" /> 12 IELTS Online Live Classes</li>
                                                                        <li className='' style={{ fontSize: "13px", fontWeight: "bold" }}><i className="fal fa-check" /> How to get Offer Letter from a University.</li>
                                                                        <li className='' style={{ fontSize: "13px", fontWeight: "bold" }}><i className="fal fa-check" /> Full Mock Tests with a Teacher</li>
                                                                        <li><i className="fal fa-check" /> Unlimited Speaking Mock Tests.</li>
                                                                        <li><i className="fal fa-check" /> 60+ Reading and Listening Tests.</li>
                                                                        <li><i className="fal fa-check" /> 600+ Writing Feedback.</li>
                                                                        <li><i className="fal fa-check" /> Premium SOP and Essay Creation.</li>
                                                                        <li><i className="fal fa-check" /> Full access to AI tools and analytics.</li>
                                                                    </ul>

                                                                    <div className="p-3">
                                                                        <div className="w-full bg-green-600 cursor-pointer rounded-[20px] translate-y-[10px] text-white p-2 text-[14px] text-center"
                                                                            onClick={() => {
                                                                                setAmerPayPayment(true);
                                                                                setproductName("full_Guide");
                                                                                {
                                                                                    userPaymentStatusCheck == "Starter" && setMakingAmount(3800)
                                                                                }
                                                                                {
                                                                                    userPaymentStatusCheck == "Expert" && setMakingAmount(3500)
                                                                                }
                                                                            }}
                                                                        >
                                                                            Continue
                                                                        </div>
                                                                    </div>



                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*This is for Mobile view*/}
                                <br />
                                <div className='w-full h-full justify-center align-middle block sm:hidden'>
                                    {/* <strong className='text-[14px] font-bold translate-y-[-70px]'>Improvement Guarantee</strong> */}
                                    <div className='m-auto rounded-[20px]'>

                                        <div className="tab-content" id="pills-tabContent">

                                            <div className="w-full m-auto justify-content-center flex gap-4 justify-center align-middle">
                                                <div className='gird sm:flex gap-4 w-full m-auto'>
                                                    {/* card-2 for Expert */}
                                                    {
                                                        userPaymentStatusCheck == "Starter" && (<>
                                                            {
                                                                (toggleSwitch == "Expert" || toggleSwitch == "") && (<div className="w-full translate-y-[-35px] sm:translate-y-[0px]">
                                                                    <div
                                                                        className="
                        pricing-one__single pricing-one__single_2
                        animated
                        fadeInLeft bg-blue-600 relative
                      "
                                                                    >
                                                                        <div className='absolute top-3 right-5'>
                                                                            <button className='p-1 text-center rounded-[20px] w-[130px] bg-purple-600 text-white text-[12px]'>Most Popular</button>
                                                                        </div>

                                                                        <div className="pricig-heading">
                                                                            <div className="price-range">
                                                                                <sup> {userCountry == "Bangladesh" ? "৳" : "$"}</sup> <span>{
                                                                                    userCountry == "Bangladesh" ? 100 : 2
                                                                                }</span>
                                                                                <p className='translate-x-[8px]'>{userCountry == "Bangladesh" ? "/Per Month" : "/Three months"}</p>
                                                                            </div>
                                                                            <h6 className='flex gap-2'>Expert <button className='p-1 rounded-[20px] text-[12px] bg-gradient-to-r from-blue-600 to-fuchsia-500 w-[180px] text-white'>Improvement Guarantee </button></h6>
                                                                            <p>Perfect for dedicated learners aiming to improve their IELTS scores with full access to our resources.</p>
                                                                        </div>
                                                                        <div className="pricig-body">
                                                                            <ul>
                                                                                <li>
                                                                                    <i className="fal fa-check text-[11px]" />Personal mentor for IELTS personalised guidance.
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fal fa-check" /> 40+ Speaking Mock Test.
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fal fa-check text-[14px]" /> 48 Reading and Listening Mock Test
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fal fa-check" />400+ Writing Evaluation and Mock Test.
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fal fa-check" /> 400+ writing feedback.
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fal fa-check" /> Get all Reading Explanations.
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fal fa-check" /> Unlimited SOP creation with AI.
                                                                                </li>
                                                                            </ul>

                                                                            <div className="p-3">
                                                                                {
                                                                                    userCountry == "Bangladesh" ? (
                                                                                        <div className="w-full bg-purple-600 cursor-pointer rounded-[20px] translate-y-[10px] text-white p-2 text-[14px] text-center"
                                                                                            onClick={() => {
                                                                                                setMakingAmount(300)
                                                                                                setAmerPayPayment(true);
                                                                                                setproductName("Expert");
                                                                                            }}
                                                                                        >
                                                                                            Start Practicing
                                                                                        </div>
                                                                                    ) : (
                                                                                        <div className='translate-x-[-15px]' >
                                                                                            <Suspense fallback={<div className='w-full h-full m-auto justify-center '>Loading... </div>}>
                                                                                                <PaypalCheckoutPage
                                                                                                    productName={"Expert"}
                                                                                                />
                                                                                            </Suspense>

                                                                                        </ div>
                                                                                    )
                                                                                }

                                                                            </div>

                                                                            <div className='w-full h-full grid justify-center align-middle'>
                                                                                {
                                                                                    userCountry == "Bangladesh" && (
                                                                                        <div className='flex gap-2 justify-center align-bottom p-2 mt-auto'>
                                                                                            <div className='p-2 w-auto rounded-[15px] bg-gray-300 translate-x-[-2px] flex justify-center align-middle gap-3 translate-y-[15px]'>
                                                                                                <Image src={Img1} className='m-auto h-[34px] rounded-[3px]' />
                                                                                                <Image src={Img3} className='m-auto w-[50px] h-[34px] rounded-[10px]' />
                                                                                                <Image src={Img4} className='m-auto w-[50px] h-[40px] rounded-[10px]' />
                                                                                            </div>

                                                                                        </div>
                                                                                    )
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>)
                                                            }
                                                        </>)
                                                    }

                                                    {/* card-3 for Professonal */}
                                                    {
                                                        userCountry == "Bangladesh" && (<>
                                                            <>
                                                                {
                                                                    userPaymentStatusCheck == "Expert" ? <>
                                                                        <div className="w-full translate-y-[-35px] sm:translate-y-[0px]">
                                                                            <div
                                                                                className="
                                                                                        pricing-one__single pricing-one__single_2
                                                                                        animated
                                                                                        fadeInLeft bg-blue-600 relative
                                                                                    "
                                                                            >
                                                                                <div className='absolute top-0 right-0'>
                                                                                    <Image src={Professonal_img_1} alt='Professonal_img_showing-1' className='w-[80px] rounded-[50%]' />
                                                                                </div>

                                                                                <div className="pricig-heading">
                                                                                    <div className="price-range">
                                                                                        <sup>৳</sup> <span>
                                                                                            {
                                                                                                userPaymentStatusCheck == "Starter" && "3800"
                                                                                            }
                                                                                            {
                                                                                                userPaymentStatusCheck == "Expert" && "3500"
                                                                                            }
                                                                                        </span>
                                                                                        <p className='translate-x-[8px] font-bold'>/Full Course</p>
                                                                                    </div>
                                                                                    <h6 className='flex'>Full Guide</h6>
                                                                                    <p>Perfect for dedicated learners aiming to improve their IELTS scores with full access to our resources.</p>
                                                                                </div>
                                                                                <div className="pricig-body">
                                                                                    <ul>
                                                                                        <li className='' style={{ fontSize: "13px", fontWeight: "bold" }}><i className="fal fa-check" /> 12 IELTS Online Live Classes</li>
                                                                                        <li className='' style={{ fontSize: "13px", fontWeight: "bold" }}><i className="fal fa-check" /> How to get Offer Letter from a University.</li>
                                                                                        <li className='' style={{ fontSize: "13px", fontWeight: "bold" }}><i className="fal fa-check" /> Full Mock Tests in Live with a Teacher</li>
                                                                                        <li><i className="fal fa-check" /> Unlimited Speaking Mock Tests.</li>
                                                                                        <li><i className="fal fa-check" /> 60+ Reading and Listening Tests.</li>
                                                                                        <li><i className="fal fa-check" /> 600+ Writing Feedback.</li>
                                                                                        <li><i className="fal fa-check" /> Premium SOP and Essay Creation.</li>
                                                                                        <li><i className="fal fa-check" /> Full access to AI tools and analytics.</li>
                                                                                    </ul>

                                                                                    <div className="p-3">
                                                                                        <div className="w-full bg-green-600 cursor-pointer rounded-[20px] translate-y-[10px] text-white p-2 text-[14px] text-center"
                                                                                            onClick={() => {
                                                                                                setAmerPayPayment(true);
                                                                                                setproductName("full_Guide");
                                                                                                {
                                                                                                    userPaymentStatusCheck == "Starter" && setMakingAmount(3800)
                                                                                                }
                                                                                                {
                                                                                                    userPaymentStatusCheck == "Expert" && setMakingAmount(3500)
                                                                                                }
                                                                                            }}
                                                                                        >
                                                                                            Continue
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className='w-full h-full grid justify-center align-middle'>
                                                                                        {
                                                                                            userCountry == "Bangladesh" && (
                                                                                                <div className='flex gap-2 justify-center align-bottom p-2 mt-auto'>
                                                                                                    <div className='p-2 w-auto rounded-[15px] bg-gray-300 translate-x-[-2px] flex justify-center align-middle gap-3 translate-y-[15px]'>
                                                                                                        <Image src={Img1} className='m-auto h-[34px] rounded-[3px]' />
                                                                                                        <Image src={Img3} className='m-auto w-[50px] h-[34px] rounded-[10px]' />
                                                                                                        <Image src={Img4} className='m-auto w-[50px] h-[40px] rounded-[10px]' />
                                                                                                    </div>

                                                                                                </div>
                                                                                            )
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </> : <>
                                                                        {
                                                                            toggleSwitch == "full_Guide" && (<div className="w-full translate-y-[-35px] sm:translate-y-[0px]">
                                                                                <div
                                                                                    className="
                        pricing-one__single pricing-one__single_2
                        animated
                        fadeInLeft bg-blue-600 relative
                      "
                                                                                >
                                                                                    <div className='absolute top-0 right-0'>
                                                                                        <Image src={Professonal_img_1} alt='Professonal_img_showing-1' className='w-[80px] rounded-[50%]' />
                                                                                    </div>

                                                                                    <div className="pricig-heading">
                                                                                        <div className="price-range">
                                                                                            <sup>৳</sup> <span>
                                                                                                {
                                                                                                    userPaymentStatusCheck == "Starter" && "3800"
                                                                                                }
                                                                                                {
                                                                                                    userPaymentStatusCheck == "Expert" && "3500"
                                                                                                }
                                                                                            </span>
                                                                                            <p className='translate-x-[8px] font-bold'>/Full Course</p>
                                                                                        </div>
                                                                                        <h6 className='flex'>Full Guide</h6>
                                                                                        <p>Perfect for dedicated learners aiming to improve their IELTS scores with full access to our resources.</p>
                                                                                    </div>
                                                                                    <div className="pricig-body">
                                                                                        <ul>
                                                                                            <li><i className="fal fa-check" /> 12 IELTS Online Live Classes</li>
                                                                                            <li><i className="fal fa-check" /> 1 University Admission Tactics Class</li>
                                                                                            <li><i className="fal fa-check" /> Full Mock Tests with a Teacher</li>
                                                                                            <li><i className="fal fa-check" /> Unlimited Speaking Mock Tests.</li>
                                                                                            <li><i className="fal fa-check" /> 60+ Reading and Listening Tests.</li>
                                                                                            <li><i className="fal fa-check" /> 600+ Writing Feedback.</li>
                                                                                            <li><i className="fal fa-check" /> Premium SOP and Essay Creation.</li>
                                                                                            <li><i className="fal fa-check" /> Full access to AI tools and analytics.</li>
                                                                                        </ul>

                                                                                        <div className="p-3">
                                                                                            <div className="w-full bg-green-600 cursor-pointer rounded-[20px] translate-y-[10px] text-white p-2 text-[14px] text-center"
                                                                                                onClick={() => {
                                                                                                    setAmerPayPayment(true);
                                                                                                    setproductName("full_Guide");
                                                                                                    {
                                                                                                        userPaymentStatusCheck == "Starter" && setMakingAmount(3800)
                                                                                                    }
                                                                                                    {
                                                                                                        userPaymentStatusCheck == "Expert" && setMakingAmount(3500)
                                                                                                    }
                                                                                                }}
                                                                                            >
                                                                                                Continue
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className='w-full h-full grid justify-center align-middle'>
                                                                                            {
                                                                                                userCountry == "Bangladesh" && (
                                                                                                    <div className='flex gap-2 justify-center align-bottom p-2 mt-auto'>
                                                                                                        <div className='p-2 w-auto rounded-[15px] bg-gray-300 translate-x-[-2px] flex justify-center align-middle gap-3 translate-y-[15px]'>
                                                                                                            <Image src={Img1} className='m-auto h-[34px] rounded-[3px]' />
                                                                                                            <Image src={Img3} className='m-auto w-[50px] h-[34px] rounded-[10px]' />
                                                                                                            <Image src={Img4} className='m-auto w-[50px] h-[40px] rounded-[10px]' />
                                                                                                        </div>

                                                                                                    </div>
                                                                                                )
                                                                                            }
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>)
                                                                        }
                                                                    </>
                                                                }
                                                            </>
                                                        </>)
                                                    }

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div >
                        </section >
                    )}



                <Toaster position="top-right"
                    reverseOrder={false} />
                {
                    AmerPayPayment && (<>
                        <SSL_Commerz_Payment_Checkout_Page
                            setAmerPayPayment={setAmerPayPayment}
                            productName={productName}
                            makingAmount={makingAmount}
                        />
                    </>)
                }

            </Suspense >

        </>
    );
}



export default Index
















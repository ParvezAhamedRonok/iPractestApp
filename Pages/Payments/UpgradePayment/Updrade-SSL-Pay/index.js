"use client";
import React, { useState, useEffect } from "react";
import "./index.css"; // Ensure this path is correct for your styles
import { MdOutlineCancel } from "react-icons/md";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import Img1 from "@assets/images/otherImgs/masterCard.png";
import Img3 from "@assets/images/otherImgs/bkash2.webp";
import Img4 from "@assets/images/otherImgs/nogod2.jpeg";
import { isMobile } from "react-device-detect"
import { SSL_COMMERZ_POST_FOR_UPGRADE_USER_PAYMENT_INFO_WITH_AMOUNT } from "@assets/URL's/AllUrl";



function Index({ setAmerPayPayment, productName, makingAmount }) {
  const router = useRouter();
  const [userCountry, setUserCountry] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [referredID, setReferredID] = useState("");
  //store Proffessonal User batch Value state ...
  const [Storen_Batch_time, setStore_Batch_Time] = useState([])


  const [userInfo, setUserInfo] = useState({
    cus_name: "",
    cus_email: userEmail,
    cus_phone: "",
    currency: "BDT",
    Country: "Bangladesh",
    city: "",
    postcode: "",
    referID: referredID || "",
    productName: productName,
    BatchName: ""
  });

  useEffect(() => {
    setUserCountry(localStorage.getItem("setCountry") || "");
    setUserEmail(localStorage.getItem("userEmail") || "");
    setReferredID(localStorage.getItem("referID") || "");


    axios({
      method: "get",
      url: "https://node-js-express-login-example.onrender.com/Batch-Table/Get-students-Batches-data",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      console.log(res.data)
      //set all batch data into a state..
      setStore_Batch_Time(res.data.data);
    }).catch((err) => { console.log(err) })
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data =
    {
      "makingAmount": makingAmount,
      "currency": userInfo.currency,
      "address": userInfo.city,
      "city": userInfo.city,
      "cus_name": userInfo.cus_name,
      "cus_email": userEmail,
      "cus_phone": userInfo.cus_phone,
      "Country": userInfo.Country,
      "productName": userInfo.productName,
      "referID": userInfo.referID,
      "BatchName": userInfo.BatchName
    }

    const url = SSL_COMMERZ_POST_FOR_UPGRADE_USER_PAYMENT_INFO_WITH_AMOUNT;
    try {
      const res = await axios.post(url, data);
      window.location.replace(res.data.redirect);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="Result-PopUp pt-[60px] fixed top-0 left-0 w-full z-[12375431]">
      <div className="grid w-full h-auto justify-center">
        <section className="grid gap-4 sm:flex translate-y-[-40px] rounded-lg justify-center w-full sm:w-[770px] h-[95vh] overflow-auto bg-white shadow-2xl relative p-6">
          <div
            className="w-full sm:w-[30%] h-full hidden sm:flex justify-center rounded-l-lg"
            style={{
              background: "linear-gradient(109.6deg, rgb(72, 200, 160) 11.2%, rgb(32, 40, 48) 91.3%)",
            }}
          >
            <div className="grid gap-3 m-auto text-white text-center">
              <label className="text-[20px] font-semibold">To Pay</label>
              <p className="flex gap-2 text-[50px] justify-center text-white">
                <span className="text-[60px] mt-[-2px]">৳</span>
                {makingAmount}
              </p>

            </div>
          </div>

          {/* From value fill for user  */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 w-full sm:w-[70%] h-full overflow-auto bg-white rounded-lg shadow-lg">

            <div className="flex justify-end">
              <button
                style={{ color: "rgb(153, 171, 180)" }}
                className="text-2xl hover:drop-shadow-xl rounded-full p-2 sm:mr-5 mr-2 hover:bg-light-gray w-[43px] h-[43px] flex justify-center"
                onClick={() => setAmerPayPayment(false)}
              >
                <MdOutlineCancel />
              </button>
            </div>
            <h2 className="text-3xl font-bold mt-4 text-gray-800 text-center">Checkout</h2>
            <p className="text-sm text-gray-600 text-center mb-6">Please fill in your billing information</p>
            <div className="flex w-full justify-center align-middle"><button className='p-1 rounded-[20px] translate-y-[-15px] text-[12px] bg-gradient-to-r from-blue-600 to-fuchsia-500 w-[180px] text-white'>3 Months Package</button></div>
            {
              isMobile && (<p className="font-bold text-[12px] text-center translate-y-[-15px]">
                have to Pay:৳ {makingAmount}
              </p>)
            }
            <hr className="my-2" />

            <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mb-4">
              <div className="flex-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</label>
                <input
                  required
                  name="cus_name"
                  className="rounded-lg text-base text-black bg-gray-100 p-2 placeholder:text-gray-400 opacity-75 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 transition duration-200 w-full"
                  placeholder="Enter Your Full Name"
                  onChange={handleInput}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
                <input
                  required
                  type="email"
                  name="cus_email"
                  value={userEmail}
                  className="rounded-lg bg-gray-100 p-2 text-base text-black placeholder:text-gray-400 opacity-75 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 transition duration-200 w-full"
                  readOnly
                />
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mb-4">
              <div className="flex-1">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                <input
                  type="number"
                  className="rounded-lg text-base text-black bg-gray-100 p-2 placeholder:text-gray-400 opacity-75 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 transition duration-200 w-full"
                  placeholder="Enter your Number"
                  name="cus_phone"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="Country" className="text-sm font-semibold text-gray-700">Country</label>
                <input
                  type="text"
                  className="rounded-lg bg-gray-100 text-base text-black p-2 placeholder:text-gray-400 opacity-75 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 transition duration-200 w-full"
                  placeholder="Enter your Country"
                  name="Country"
                  value={userCountry}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mb-4">
              <div className="flex-1">
                <label htmlFor="city" className="text-sm font-semibold text-gray-700">City</label>
                <input
                  type="text"
                  className="rounded-lg bg-gray-100 p-2 text-base text-black placeholder:text-gray-400 opacity-75 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 transition duration-200 w-full"
                  placeholder="Enter your city"
                  name="city"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="currency" className="text-sm font-semibold text-gray-700">Currency</label>
                <select
                  name="currency"
                  className="rounded-lg text-base text-black bg-gray-100 p-2 cursor-pointer border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 transition duration-200 w-full"
                  onChange={handleInput}
                  required
                >
                  <option value="BDT">BDT</option>
                  {/* <option value="USD">USD</option> */}
                </select>
              </div>
            </div>

            {
              productName == "full_Guide" && (
                <div className="w-full grid justify-between mb-4">
                  <div className="flex-1">
                    <label htmlFor="batch-select" className="text-sm font-semibold text-gray-700">
                      * Please Select Your Batch Time
                    </label>
                    <select
                      id="batch-select"
                      name="BatchName"
                      className="rounded-lg text-base text-black bg-gray-100 p-2 cursor-pointer border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 transition duration-200 w-full"
                      onChange={handleInput}
                      required
                    >
                      {/* Placeholder option */}
                      <option value="" disabled selected>

                      </option>
                      {/* Dynamically render batch times */}
                      {Storen_Batch_time.map((item, index) =>
                        Number(item.StudentCount) <= 15 && (
                          <option key={index} value={item.BatchName}>
                            {item.BatchName}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
              )
            }
            <div>

              <div className="grid justify-center text-center">
                <p className="simple-reg-terms">
                  <label className='text-[10px] sm:text-[13px] flex gap-[2px]'>
                    <span className="checkbox">
                      {/* <input title="Please tick" name="accept_terms" type="checkbox"  className="required translate-y-[2px]" id="js-accept-terms" required /> */}
                      <label class="container">
                        <input title="Please tick" name="accept_terms" type="checkbox"
                          className="required translate-y-[2px]" id="js-accept-terms" required />
                        <div class="checkmark"></div>
                      </label>
                    </span>
                    <div className='flex translate-y-[-2px]'>
                      <span
                        title="Please tick">I accept the </span> <a style={{ display: 'inline-block' }} target="_blank" href="https://ipractest.com/Policy-Pages/Privacy-Policy"
                          title="Opens in a new tab">Privacy Policy</a> &amp; <a target="_blank" href="https://ipractest.com/Policy-Pages/Term-Conditions"
                            title="Opens in a new tab">Terms &amp; Conditions</a>
                    </div>
                  </label>
                </p>
                <p className="simple-reg-terms">
                  <label className=' text-[10px] sm:text-[13px] flex gap-[2px]'>
                    <span className="checkbox">
                      <label class="container">
                        <input title="Please tick" name="accept_terms" type="checkbox"
                          className="required translate-y-[2px]" id="js-accept-terms" required />
                        <div class="checkmark"></div>
                      </label>
                    </span>
                    <div className='flex translate-y-[-2px]'>
                      <span
                        title="Please tick">I accept the </span> <a style={{ display: 'inline-block' }} target="_blank" href="https://ipractest.com/Policy-Pages/Refund-Policy"
                          title="Opens in a new tab">Refunds Policy
                      </a> &amp; <a target="_blank" href="https://ipractest.com/Policy-Pages/Canclation-Policy"
                        title="Opens in a new tab">Cancellation Policy</a>
                    </div>
                  </label>
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 rounded-md text-white bg-blue-600 p-2 w-full hover:bg-blue-700 transition duration-200"
            >
              Pay Now
            </button>

            <div className="flex justify-center items-center mt-4">
              <div className="flex gap-4">
                <Image
                  src={Img1}
                  width={120}
                  height={30}
                  alt="Master Card"
                  className="transition-transform transform hover:scale-110 hover:shadow-lg"
                />
                <Image
                  src={Img3}
                  width={35}
                  height={37}
                  alt="Bkash"
                  className="transition-transform transform hover:scale-110 hover:shadow-lg"
                />
                <Image
                  src={Img4}
                  width={40}
                  height={50}
                  alt="Nogod"
                  className="transition-transform transform hover:scale-110 hover:shadow-lg"
                />
              </div>
            </div>

          </form>


        </section>
      </div>
    </div>


  );
}

export default Index;

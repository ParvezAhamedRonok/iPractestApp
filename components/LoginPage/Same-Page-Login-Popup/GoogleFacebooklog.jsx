"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios"
import { ClockLoader } from "react-spinners";
import Timer from "@/components/Writing-Module/Writing-main/Important/Pages/Timer";
import { isMobile } from "react-device-detect"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useStateContext } from "@/contexts/ContextProvider";

import { LOGIN_URL, SIGNUP_URL, GET_OTP_REQUEST_API_TO_CHECK_USER_HAVE_NUMBER_OR_NOT, POST_OTP_ADD_USER_TO_DATABASE_AFTER_SUCCESSFULL_VARIFICATION } from "@assets/URL's/AllUrl";
import GetBDUserNumber from '../Get-BD-User-Number';


// END OF THE IMPORTING-----











let store_Decorded_Obj_Data;
function GoogleFacebooklog({ finalFuncAfterLogInorSignUp, closePOpUp }) {
  const { setWritingText } = useStateContext();
  const history = useRouter();

  //all user localstorages data storing states.......
  const [userCountryInfo, setUserCountryInfo] = useState();
  const [usersCountryName, setuserCountryName] = useState("");
  const [DeviceNumber, setUserDeviceName] = useState("")
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [refferDID, setRefferdID] = useState("")



  const [loadingMsg, setLoadingMsg] = useState(false);
  //state for checking localStorage --
  const [DeviceNo, setDeviceNo] = useState("");

  //get user number state when user want's to take test-1 sec-2 & sec-3
  const [Store_user_Number, setStore_user_Number] = useState("");
  const [OTP_Popup, setOTP_Popup] = useState(false);

  //Code below is for checking localStorage status
  useEffect(() => {
    //user all localstorage storing into states into this useEffect below...
    let countryInfo = localStorage.getItem("CountryInfo");
    setUserCountryInfo(countryInfo && JSON.parse(countryInfo));
    setUserDeviceName(localStorage.getItem('DeviceNo'));
    setRefferdID(localStorage.getItem("referID") && localStorage.getItem("referID"))


    //check device numbers...
    if (!DeviceNumber || DeviceNumber == "null" || DeviceNumber == "undefined") {
      setDeviceNo("")
    } else {
      setDeviceNo("anyThing")
    }
  }, [])

  const nextPath = (path) => {
    history.push(path);
  }






  const GoogleOnSuccessFunc = (decodedres) => {
    let userName = decodedres.name;
    let email = decodedres.email;
    let password = userName + "32/2sda/zxwxzX";
    console.log(decodedres.name);
    localStorage.setItem("UserProfileImg", decodedres.picture);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    // refreshTokenSetup(res);
    if (decodedres) {
      setLoadingMsg(true);
      axios({
        method: "post",
        url: SIGNUP_URL,
        // url: "http://localhost:8080/api/auth/signup",
        data: {
          "username": userName,
          "email": email,
          "password": password,
          "country": userCountryInfo ? userCountryInfo.countryName : "",
          "countryFlag": userCountryInfo ? userCountryInfo.countryFlag : "",
          "StoreUserNumber": Store_user_Number ? Store_user_Number : "",
          "referID": refferDID ? refferDID : "",
          "roles": ["user"]
        },
      })
        .then((res) => {
          console.log(res);
          if (res) {
            // setsignUpMsg(true);
            localStorage.setItem('loginTOken', res.data.token);
            localStorage.setItem('userName', res.data.username);
            localStorage.setItem('userEmail', res.data.email);
            localStorage.setItem("setCountry", res.data.country);
            localStorage.setItem("setCountryFlag", res.data.countryFlag)
            if (res.data.referID != "") { localStorage.setItem("referID", res.data.referID) }
            localStorage.setItem('DeviceNo', res.data.Devices)
            setTimeout(() => {
              setLoadingMsg(false);
              finalFuncAfterLogInorSignUp();
              closePOpUp()
            }, 1000);

          }

        })
        .catch((e) => {
          console.log(e)
          if (e) {
            axios({
              method: "post",
              url: LOGIN_URL,
              // url: "http://localhost:8080/api/auth/signin",
              data: {
                "username": userName,
                "password": password,
                "Devices": DeviceNo != "" ? DeviceNumber : "",
                "country": userCountryInfo ? userCountryInfo.countryName : "",
                "countryFlag": userCountryInfo ? userCountryInfo.countryFlag : "",
              },
            })
              .then((res) => {
                if (Store_user_Number) {
                  saveUserNumberIntoDatabase(res.data.username, res.data.email, res.data.token)
                }
                localStorage.setItem('loginTOken', res.data.token);
                localStorage.setItem('userName', res.data.username);
                localStorage.setItem('userEmail', res.data.email);
                localStorage.setItem('setCountry', res.data.country);
                localStorage.setItem('setCountryFlag', res.data.countryFlag);
                if (res.data.referID != "") { localStorage.setItem("referID", res.data.referID) }
                if (res.data.Devices != "" || res.data.Devices != "undefined") {
                  localStorage.setItem('DeviceNo', res.data.Devices)
                }

                if (res) {
                  setTimeout(() => {
                    setLoadingMsg(false);
                    finalFuncAfterLogInorSignUp();
                    closePOpUp()
                  }, 1000);
                }
              })
              .catch((e) => {
                console.log(e);
                setLoadingMsg(false);
                if (e.response.data.message == "Too many devices") {
                  alert("Access blocked ,  You have logged in  with too many devices or Too many browers! please login with your previous device or browser that you have used or Contact us")
                }
              })
          }
        })
    }

  };




  const check_OTP_Function = (decodedData) => {
    axios({
      method: "get",
      url: GET_OTP_REQUEST_API_TO_CHECK_USER_HAVE_NUMBER_OR_NOT + decodedData.email,
    })
      .then((res) => {
        if (res.data.data[0]) {
          GoogleOnSuccessFunc(decodedData);
        } else {
          store_Decorded_Obj_Data = decodedData;
          setOTP_Popup(true);
        }
      })
      .catch((e) => {
        console.log(e);
        store_Decorded_Obj_Data = decodedData;
        setOTP_Popup(true);
      });


  }


  const saveUserNumberIntoDatabase = (userLoginName, userloginemail, userloginTOken) => {
    axios({
      method: "post",
      url: POST_OTP_ADD_USER_TO_DATABASE_AFTER_SUCCESSFULL_VARIFICATION,
      headers: {
        "Authorization": `Bearer ${userloginTOken}`,
        'Content-Type': 'application/json'
      },
      data: {
        "userName": userLoginName,
        "userEmail": userloginemail,
        "userNumber": Store_user_Number
      }
    })
      .then((res) => {
        console.log(res.data);;
      })
      .catch((e) => {
        console.log(e);
      })
  }








  return (
    <>
      <div className={`mainGoogleAuth flex pt-[3px]  rounded justify-center align-middle cursor-pointer`}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            const decoded = jwtDecode(credentialResponse.credential);
            // console.log(decoded);
            let Country_N = userCountryInfo ? userCountryInfo.countryName == "Bangladesh" : ""
            Country_N ? check_OTP_Function(decoded) : GoogleOnSuccessFunc(decoded);
           // GoogleOnSuccessFunc(decoded)

          }}
          onError={() => {
            console.log('Login Failed');
          }} />

      </div>
      {/* for loading after successfully login */}
      {loadingMsg && <section className="fixed top-2 left-2 w-[90%] sm:w-[100%] box-border overflow-y-scroll p-4 h-[90vh]  text-black z-[100000] grid-cols-1 grid-rows-5">
        <div className="fixed top-[30%]  left-[26%] z-[200000] sm:left-[45%] w-[100vw] h-[100vh]">
          <div className="flex opacity-6 justify-center align-middle w-[150px]  h-auto rounded-[20px]  box-border pt-[40px]">
            <div className="bg-white rounded-[15px] p-3 h-auto">
              <ClockLoader size={100} color="#36d7b7" />
              <div className="w-full flex justify-center p-1 mt-1 bg-sky-300 text-white"
                style={{ borderTopLeftRadius: "27px", borderTopRightRadius: "27px" }}
              >
                <Timer Second={20} />
              </div>
            </div>

          </div>
        </div>
      </section>
      }



      {/* This pop will want to get user number if user from in bangladesh
            othere wise they can not get access into test-1 section-2 & Section-3 */}
      {
        OTP_Popup && (
          <GetBDUserNumber
            setOTP_Popup={setOTP_Popup}
            user_Obj_Data={store_Decorded_Obj_Data}
            after_Passed_func={GoogleOnSuccessFunc}
            setStore_user_Number={setStore_user_Number}
          />
        )
      }







    </>
  )
}

export default GoogleFacebooklog
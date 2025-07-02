"use client";
import React, { useEffect, useState } from 'react';
import "../TestAllStyles/SubmitReading.css";
import Axios from 'axios';
import { useRouter } from 'next/navigation';
import { MdOutlineCancel } from "react-icons/md";
import { READING_POST_FOR_SET_SCORES } from "@assets/URL's/AllUrl";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useStateContext } from "@/contexts/ContextProvider";
// Global counters
let RightCount = 0;
let WrongCount = 0;
let ReadingRate = 0;

function SubmitReading({ handleReadingUsersData, UserData, AnswersData, setPassComment, testName }) {
     const router = useRouter();
     const { Open_MarketingOffer, setOpen_MarketingOffer } = useStateContext();

     const [ModulesListening, setModulesListening] = useState("");
     const [userCountry, setUserCountry] = useState("");
     const [userLoginToken, setUserLoginToken] = useState("");
     const [userLoginEmail, setUserLoginEmail] = useState("");
     const [userLoginName, setUserLoginName] = useState("");
     const [count, setCount] = useState(0);
     const [forClosePopUp, setForClosePopup] = useState(false);
     const [TOELF_Score, setTOELF_Score] = useState("")



     useEffect(() => {
          setModulesListening(localStorage.getItem("ModulesListening") || "");
          setUserCountry(localStorage.getItem("setCountry") || "");
          setUserLoginToken(localStorage.getItem("loginTOken") || "");
          setUserLoginEmail(localStorage.getItem("userEmail") || "");
          setUserLoginName(localStorage.getItem("userName") || "");
     }, []);



     const calculateAnswers = () => {
          return AnswersData.map((data, index) => {
               const filteredAnswers = data.filter(e => e !== "/");
               const userQuestion = UserData[`ques${index + 1}`];
               return filteredAnswers.filter(e => e === userQuestion);
          });
     };

     const Answers = calculateAnswers();

     useEffect(() => {
          RightCount = Answers.filter(answer => answer.length > 0).length;
          ReadingRate = parseFloat((RightCount * 0.225).toFixed(1));
     }, [Answers]);

     useEffect(() => {
          const userQuestions = Object.values(UserData).slice(0, 40);
          WrongCount = Answers.reduce((wrongCount, answer, index) => {
               if (userQuestions[index] !== "" && answer.length === 0) {
                    return wrongCount + 1;
               }
               return wrongCount;
          }, 0);
     }, [Answers, UserData]);

     const PostReadingScores = () => {
          const storeIeltsScore = ReadingRate;
          Axios.post(READING_POST_FOR_SET_SCORES, {
               username: userLoginName,
               userEmail: userLoginEmail,
               rightAns: RightCount,
               wrongAns: WrongCount,
               ieltsRate: storeIeltsScore,
               SectionName: testName,
          }, {
               headers: {
                    "Authorization": `Bearer ${userLoginToken}`,
                    "Content-Type": "application/json"
               }
          }).then(res => console.log(res.data))
               .catch(e => console.error(e));
     };

     useEffect(() => {
          if (ReadingRate > 0 && userLoginName && userLoginEmail) {
               PostReadingScores();
               if (ModulesListening >= 1 && ModulesListening <= 12) {
                    localStorage.setItem(`L_OkmoduleNo${ModulesListening}`, `Test${ModulesListening}_Ok`);
                    localStorage.setItem(`L_ScorModuleNo${ModulesListening}`, ReadingRate.toFixed(1));
               } else if (ModulesListening.includes("cambridge-")) {
                    const cambridgeModuleNo = ModulesListening.split("-")[1];
                    if (cambridgeModuleNo >= 1 && cambridgeModuleNo <= 12) {
                         localStorage.setItem(`L_Okcambridge${cambridgeModuleNo}`, `Okcambridge_${cambridgeModuleNo}`);
                         localStorage.setItem(`L_ScorOkcambridge${cambridgeModuleNo}`, ReadingRate.toFixed(1));
                    }
               }
          }
     }, [ReadingRate, ModulesListening, userLoginName, userLoginEmail]);

     useEffect(() => {
          setCount(Object.values(UserData).filter(value => value !== "").length);
     }, [UserData]);

     useEffect(() => {
          const getToeflAndIeltsScore = (score) => {
               const scoreMapping = [
                    { TOEFL: 30, IELTS: 9 },
                    { TOEFL: 29, IELTS: 8.5 },
                    { TOEFL: 28, IELTS: 8 },
                    { TOEFL: 27.5, IELTS: 7.5 },
                    { TOEFL: 25, IELTS: 7 },
                    { TOEFL: 21, IELTS: 6.5 },
                    { TOEFL: 15.5, IELTS: 6 },
                    { TOEFL: 10, IELTS: 5.5 },
                    { TOEFL: 5.5, IELTS: 5 },
                    { TOEFL: 3, IELTS: 4.5 },
                    { TOEFL: 1, IELTS: "0-4" },
               ];

               // Find the closest TOEFL score
               let closest = scoreMapping[0];
               let minDiff = Math.abs(score - closest.TOEFL);  // Initialize with the first element

               // Loop through the scoreMapping array to find the closest match
               scoreMapping.forEach(s => {
                    const diff = Math.abs(score - s.TOEFL);
                    if (diff < minDiff) {
                         closest = s;
                         minDiff = diff;
                    }
               });

               return closest;  // Return the closest match
          };

          // Check if ReadingRate is valid
          if (ReadingRate > 0) {
               //  alert("Inside=" + ReadingRate);
               console.log("ReadingRate:", ReadingRate); // Debugging to confirm the value of ReadingRate

               // Pass the rounded ReadingRate value to the score mapping function
               const scores = getToeflAndIeltsScore(Math.round(ReadingRate * 10) / 10);  // Round ReadingRate to 1 decimal place

               // Show TOEFL and IELTS scores with a slight delay
               setTimeout(() => {
                    setTOELF_Score(scores.TOEFL)
                    // alert(`TOEFL: ${scores.TOEFL}, IELTS: ${scores.IELTS}`);
               }, 1000);
          } else {
               console.log("ReadingRate is zero or undefined."); // Additional check
          }
     }, [ReadingRate]);


     return (
          <section className='fixed top-2 left-0 sm:left-2 w-full h-screen  '>
               <div className="grid w-full h-full justify-center relative">
                    <div className='absolute inset-0 bg-transparent z-50 ' onClick={handleReadingUsersData}></div>
                    <div className='mt-2 rounded w-screen sm:w-[600px] p-4  h-[300px] bg-blue-200 shadow-xl z-50'>
                         <div className='w-full flex justify-between'>
                              <div>
                                   <div className='p-2 bg-gray-700 w-[100px] rounded-full flex justify-center'>
                                        <span className='text-xl sm:text-2xl text-white'>{count}</span>
                                        <span className='text-2xl sm:text-3xl text-white'>/40</span>
                                   </div>
                                   <br />
                                   <p className='text-black text-[11px] font-bold'>Your Given Answers</p>
                              </div>
                              <div className='mr-3'>
                                   <button
                                        className={`text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray ${forClosePopUp && "submitAnimationForButton bg-red-300 text-white rounded-full"}`}
                                        onClick={handleReadingUsersData}>
                                        <strong onClick={() => { setOpen_MarketingOffer(prev => !prev) }}>
                                             <MdOutlineCancel />
                                        </strong>
                                   </button>
                              </div>
                         </div>
                         <div className='w-full ml-3 flex justify-center mt-[-10px] sm:mt-[-40px]'>
                              <div className='pt-3 text-center'>
                                   <div className='flex gap-2'>
                                        <p className='text-black font-bold mt-2'>Your Right Answers: </p>
                                        <span className='text-2xl sm:text-3xl ml-1 text-green-400'>{RightCount}</span>
                                   </div>
                                   <div className='flex gap-2'>
                                        <p className='text-black font-bold mt-2'>Your Wrong Answers:</p>
                                        <span className='text-2xl sm:text-3xl ml-1 text-red-500'>{WrongCount}</span>
                                   </div>


                                   <div className='w-full ml-1 flex justify-around gap-8 p-2'>
                                        <div style={{ width: "70px", height: "70px" }}>
                                             <CircularProgressbar
                                                  value={ReadingRate}
                                                  maxValue={9}
                                                  text={`${ReadingRate.toFixed(1)}`}
                                                  styles={buildStyles({
                                                       textColor: "blue",
                                                       pathColor: "blue",
                                                       trailColor: "#d6d6d6",

                                                  })}
                                             />
                                             <p className='text-center font-bold mt-2 text-[9px]'>IELTS Score</p>
                                        </div>
                                        <div style={{ width: "70px", height: "70px" }}>
                                             <CircularProgressbar
                                                  value={Number(TOELF_Score)}
                                                  maxValue={30}
                                                  text={`${Number(TOELF_Score)}`}
                                                  styles={buildStyles({
                                                       textColor: "blue",
                                                       pathColor: "blue",
                                                       trailColor: "#d6d6d6"
                                                  })}
                                             />
                                             <p className='text-center font-bold mt-2 text-[9px]'>TOEFL Score</p>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default SubmitReading;

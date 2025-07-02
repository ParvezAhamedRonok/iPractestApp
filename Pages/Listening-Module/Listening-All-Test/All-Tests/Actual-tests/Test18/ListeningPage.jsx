"use client"
import React, { useRef } from 'react'
import "../../../Styles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import img1 from "@assets/images/listening-images/Actual-test5-image1.jpg"
import { useStateContext } from "@/contexts/ContextProvider";
import Image from 'next/image';
import Select_input from '../../Inputs/Select_input';
import Text_inputs from '../../Inputs/Text_inputs';
import { makeEditableAndHighlight } from '@/components/Reading-Module/Reading-All-Tests/Important/TextChangeFunc';



function ListeningPage({ handleValueChange, AllAnswersData, UserData }) {
      // let testItems = localStorage.getItem("ShowAnsByTest");
      const { ListeningShowAnswer, setListeningShowAnswer } = useStateContext();
      // for show and hide all notePad----   
      const [forNotePad1, setForNotePad1] = useState(false);
      const [forNotePad2, setForNotePad2] = useState(false);
      const [forNotePad3, setForNotePad3] = useState(false);
      const [forNotePad4, setForNotePad4] = useState(false);


      // function for handle audio by all audio-buttons make them realif--------->
      function updateAudiotime(changePath) {
            const player = document.getElementsByTagName("audio")[0];
            player.pause();
            player.setAttribute('src', changePath);
            player.load();
            player.play();
      }


      // rewind-buttons------------
      const incressRewind = () => {
            const player = document.getElementsByTagName("audio")[0];
            player.currentTime = player.currentTime + 10
            console.log(player)
      }
      const decressRewind = () => {
            const player = document.getElementsByTagName("audio")[0];
            player.currentTime = player.currentTime - 10
            console.log(player)
      }








      //  submitted answers for showing at submit popup---------->>             
      let LAllAnswersData = [
            // Section 1
            ["Camden"], ["Green"], ["7434"], ["1976"], ["06634 982 746"],
            ["A"], ["A"], ["A"], ["free"], ["$6", "6 dollars", "six dollars"],
            // Section 2
            ["accidents", "burns"], ["heart surgery", "organ transplants"], ["patients with leukaemia", "cancer"], 
            ["premature babies"], ["Carrying", "carry oxygen"], ["immune", "defence system"], 
            ["carrying", "carry", "carries"], ["Outpatients"], ["4.30pm"], ["17 years"],
            // Section 3
            ["staff"], ["library"], ["2 hours"], ["in pen"], ["biology"], 
            ["tray"], ["nothing", "free"], ["A"], ["B"], ["C"],
            // Section 4
            ["1964"], ["fastest average speed"], ["12 seconds"], ["most important stations"], ["all stations"],
            ["centralized", "centralised power system"], ["flimsy"], ["brake"], 
            ["magnetic Induction"], ["semiconductor technologies"]
        ];
        

      AllAnswersData(LAllAnswersData)











      // main work----------->
      return (
            <section className='ContainerListener ' onMouseDown={() => { makeEditableAndHighlight("green") }}>
                  {/* AudioPlayer component add  */}
                  <div className="AudioPlayerClass">
                        <div className='w-screen sm:w-[550px] text-white'>
                              <AudioPlayer
                                    // className='w-screen sm:w-[550px] rounded bg-[#d4dae0] text-white'
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-18-Section1.mp3" />
                              <div className="rewinds w-full mt-[-50px] text-white flex justify-center align-middle gap-[50px]">
                                    <div className='text-3xl border-[1px] rounded-full bg-gray-400 text-white z-[33] cursor-pointer'
                                          onClick={decressRewind}
                                    ><BsFillRewindCircleFill /></div>
                                    <div className='text-3xl border-[1px] rounded-full bg-gray-400 text-white z-[33] cursor-pointer'
                                          onClick={incressRewind}
                                    ><BsFillFastForwardCircleFill /></div>
                              </div>
                        </div>
                  </div>

                  <div className="forAllDivs section-1 bg-sky-100 rounded mb-1">
                        <>
                              <div className='mb-3 grid grid-cols-1 justify-center w-[90vw] sm:w-full mt-[70px] sm:mt-0'>
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice  IELTS Listening Test 18</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("AudioPlayer") }}
                                                      className='p-2 bg-red-300 rounded w-[120px] hover:bg-blue-300'>Listen</button>
                                          </div>
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { setForNotePad1(!forNotePad1) }}
                                                      className='p-2 bg-blue-300 rounded w-[120px] hover:bg-red-300'>Show NotePad</button>
                                          </div>
                                    </div>
                              </div>
                        </>

                        {/* 1-10 Questions */}
                        <div className="">
                              <div className="Q-articles font-bold">
                                    <h4>SECTION 1 </h4> <br />
                                    Questions 1-5<br />
                                    Complete the form below.<br />
                                    Write NO MORE THAN ONE WORD OR A NUMBER for each answer. <br /> <br />
                                    <h5 className='text-center mt-2 text-inherit'>WESTLEY PUBLIC LIBRARYMEMBERSHIP APPLICATION FORM</h5> <br />
                              </div>
                              <div className="Questions">
                                    <div className="flex flex-col gap-2 p-4">
                                          <div className="flex justify-between border border-gray-500 p-2 text-sm">
                                                <span className="font-semibold">FULL NAME</span>
                                                <div className="flex flex-wrap">
                                                      <span className='Numbers'>1</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques1"
                                                            TestName={"Actual-test-18"}
                                                            AnswerData={LAllAnswersData[0]}
                                                            userAnswerQN={UserData.ques1}
                                                      />
                                                </div>
                                          </div>

                                          <div className="flex justify-between border border-gray-500 p-2 text-sm">
                                                <span className="font-semibold">ADDRESS</span>
                                                <div className='flex flex-wrap'>Flat 5 53    <span className='Numbers'>2</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques2"
                                                            TestName={"Actual-test-18"}
                                                            AnswerData={LAllAnswersData[1]}
                                                            userAnswerQN={UserData.ques2}
                                                      /> Street Finsbury</div>
                                          </div>

                                          <div className="flex justify-between border border-gray-500 p-2 text-sm">
                                                <span className="font-semibold">POSTCODE</span>
                                                <div className="flex flex-wrap">
                                                      <span className='Numbers'>3</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques3"
                                                            TestName={"Actual-test-18"}
                                                            AnswerData={LAllAnswersData[2]}
                                                            userAnswerQN={UserData.ques3}
                                                      />
                                                </div>
                                          </div>

                                          <div className="flex justify-between border border-gray-500 p-2 text-sm">
                                                <span className="font-semibold">DATE OF BIRTH</span>
                                                <div className='flex flex-wrap'>8th July    <span className='Numbers'>4</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques4"
                                                            TestName={"Actual-test-18"}
                                                            AnswerData={LAllAnswersData[3]}
                                                            userAnswerQN={UserData.ques4}
                                                      /></div>
                                          </div>

                                          <div className="flex justify-between border border-gray-500 p-2 text-sm">
                                                <span className="font-semibold">HOME TEL</span>
                                                <span>none</span>
                                          </div>

                                          <div className="flex justify-between border border-gray-500 p-2 text-sm">
                                                <span className="font-semibold">MOBILE TEL</span>
                                                <div className="flex flex-wrap">
                                                      <span className='Numbers'>5</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques5"
                                                            TestName={"Actual-test-18"}
                                                            AnswerData={LAllAnswersData[4]}
                                                            userAnswerQN={UserData.ques5}
                                                      />
                                                </div>
                                          </div>

                                          <div className="flex justify-between border border-gray-500 p-2 text-sm">
                                                <span className="font-semibold">PROOF OF RESIDENCE PROVIDED</span>
                                                <span>a letter</span>
                                          </div>
                                    </div>


                              </div>

                              <div className="Q-articles font-bold mt-5">
                                    <h4 className='mb-2'>Questions 6-8</h4>
                                    Choose Three answer from (6 - 8)<br /> <br />
                                    <h4>What type of books does Peter like?</h4>
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques6"
                                                TestName="Actual-test-18"
                                                AnswerData={LAllAnswersData[5]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques6}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "Wildlife books",
                                                      BData: "Romance books",
                                                      CData: "face-to-face interviews."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques7"
                                                TestName="Actual-test-18"
                                                AnswerData={LAllAnswersData[6]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques7}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "Historical novels",
                                                      BData: "Travel books",
                                                      CData: "take some work home."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques8"
                                                TestName="Actual-test-18"
                                                AnswerData={LAllAnswersData[7]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques8}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "Mystery books",
                                                      BData: "Science Fiction novels",
                                                      CData: "three appendices."
                                                }}
                                          />

                                    </div>



                              </div>
                              <div className="Q-articles font-bold mt-5">
                                    <h4 className='mb-2'>Questions 9-10</h4>
                                    Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.<br /> <br />
                              </div>
                              <div className="Questions">
                                    <div className="flex flex-wrap">
                                          How much does it cost to join the library? <span className='Numbers'>9</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques9"
                                                TestName={"Actual-test-18"}
                                                AnswerData={LAllAnswersData[8]}
                                                userAnswerQN={UserData.ques9}
                                          />
                                    </div>
                                    <div className="flex flex-wrap">
                                          How much does it cost to rent a DVD? <span className='Numbers'>10</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques10"
                                                TestName={"Actual-test-18"}
                                                AnswerData={LAllAnswersData[9]}
                                                userAnswerQN={UserData.ques10}
                                          />
                                    </div>
                              </div>
                        </div>










                  </div>

                  {/* section-2 */}

                  <div className="forAllDivs section-1 bg-sky-100 rounded mt-4">
                        <>
                              <div className='mb-3 grid grid-cols-1 justify-center w-[90vw] sm:w-full mt-[70px] sm:mt-0'>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-2</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad2 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-18-Section2.mp3") }}
                                                      className='p-2 bg-red-300 rounded w-[120px] hover:bg-blue-300'>Listen</button>
                                          </div>
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { setForNotePad2(!forNotePad2) }}
                                                      className='p-2 bg-blue-300 rounded w-[120px] hover:bg-red-300'>Show NotePad</button>
                                          </div>
                                    </div>
                              </div>
                        </>

                        {/* 11-20 Questions */}

                        <div className="">
                              {/* Section 2 Header */}
                              <div className="articles font-bold">
                                    <div className="font-bold text-xl">SECTION 2</div> <br />
                                    <div className="font-semibold">Questions 11-14</div> <br />
                                    <p>List FOUR reasons given for people needing blood transfusions.</p> <br />
                                    <p>Write <span className="font-semibold">NO MORE THAN THREE WORDS OR A NUMBER</span> for each answer.</p> <br />
                                    <p>Write your answers in boxes 11-14 on your answer sheet.</p>
                              </div> <br />


                              {/* Questions 11-14 */}

                              <div className="mt-2 space-y-2">
                                    <div className="flex items-center gap-2">
                                          <span className="Numbers">11</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques11"
                                                TestName="Actual-test-18"
                                                AnswerData={LAllAnswersData[10]}
                                                userAnswerQN={UserData.ques11}
                                          />
                                    </div>

                                    <div className="flex items-center gap-2">
                                          <span className="Numbers">12</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques12"
                                                TestName="Actual-test-18"
                                                AnswerData={LAllAnswersData[11]}
                                                userAnswerQN={UserData.ques12}
                                          />
                                    </div>

                                    <div className="flex items-center gap-2">
                                          <span className="Numbers">13</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques13"
                                                TestName="Actual-test-18"
                                                AnswerData={LAllAnswersData[12]}
                                                userAnswerQN={UserData.ques13}
                                          />
                                    </div>

                                    <div className="flex items-center gap-2">
                                          <span className="Numbers">14</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques14"
                                                TestName="Actual-test-18"
                                                AnswerData={LAllAnswersData[13]}
                                                userAnswerQN={UserData.ques14}
                                          />
                                    </div>
                              </div>



                              {/* Questions 15-20 */}
                              <div className="p-2 mt-4 font-bold">
                                    <div className="font-semibold text-xl">Questions 15-20</div>
                                    <p>Complete the 2 sets of notes below.</p>
                                    <p>Write <span className="font-semibold">NO MORE THAN THREE WORDS OR A NUMBER</span> for each answer.</p>
                              </div> <br />

                              {/* Blood Types Section */}
                              <div className="border border-gray-500 p-2">
                                    <p className="font-semibold">Blood</p>
                                    <p><span className="font-semibold">Types of Blood:</span> O, A, B + AB</p>
                              </div>

                              {/* Component Parts Table */}
                              <div className=" p-2">
                                    <p className="font-semibold">Component Parts</p>
                                    <div className="flex flex-col gap-1">
                                          <div className="flex justify-between border border-gray-500">
                                                <span>PART</span>
                                                <span>USED FOR</span>
                                          </div>
                                          <div className="flex justify-between border border-gray-500">
                                                <span>red blood cells</span>
                                                <div className='flex flex-wrap'> <span className="Numbers">15</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques15"
                                                            TestName="Actual-test-18"
                                                            AnswerData={LAllAnswersData[14]}
                                                            userAnswerQN={UserData.ques15}
                                                      /> to cells</div>
                                          </div>
                                          <div className="flex justify-between border border-gray-500">
                                                <span>white blood cells</span>
                                                <div className='flex flex-wrap'>help patients’  <span className="Numbers">16</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques16"
                                                            TestName="Actual-test-18"
                                                            AnswerData={LAllAnswersData[15]}
                                                            userAnswerQN={UserData.ques16}
                                                      /></div>
                                          </div>
                                          <div className="flex justify-between border border-gray-500">
                                                <span>platelets</span>
                                                <span>blood clotting</span>
                                          </div>
                                          <div className="flex justify-between border border-gray-500">
                                                <span>plasma</span>
                                                <div className='flex flex-wrap'> <span className="Numbers">17</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques17"
                                                            TestName="Actual-test-18"
                                                            AnswerData={LAllAnswersData[16]}
                                                            userAnswerQN={UserData.ques17}
                                                      /> the other blood parts</div>
                                          </div>
                                    </div>
                              </div>

                              {/* Giving Blood Days Section */}
                              <div className="border border-gray-500 p-2">
                                    <p className="font-semibold">GIVING BLOOD DAYS</p>
                                    <p>Wednesday + next 2 days</p>
                              </div>

                              {/* Location and Time Section */}
                              <div className="border border-gray-500 p-2">
                                    <p><span className="font-semibold">WHERE:</span> Westley General Hospital. 18………….. Department</p>
                                    <p className='flex flex-wrap'><span className="font-semibold">WHEN:</span> Between 9.00am and  <span className="Numbers">19</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName="Actual-test-18"
                                                AnswerData={LAllAnswersData[18]}
                                                userAnswerQN={UserData.ques19}
                                          /></p>
                              </div>

                              {/* Requirements Section */}
                              <div className="border border-gray-500 p-2">
                                    <p className="font-semibold">– MUST be healthy</p>
                                    <p className='flex flex-wrap'>– be  <span className="Numbers">20</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName="Actual-test-18"
                                                AnswerData={LAllAnswersData[19]}
                                                userAnswerQN={UserData.ques20}
                                          /> or over</p>
                                    <p>– weigh more than 110 pounds</p>
                                    <p>– have had no tattoos this year</p>
                                    <p>– not have donated blood within past 56 days</p>
                              </div>
                        </div>


                  </div>

                  {/* section-3*/}

                  <div className="forAllDivs section-1 bg-sky-100 rounded mt-4">
                        <>
                              <div className='mb-3 grid grid-cols-1 justify-center w-[90vw] sm:w-full mt-[70px] sm:mt-0'>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-3</h5>
                              </div>

                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad3 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-18-Section3.mp3") }}
                                                      className='p-2 bg-red-300 rounded w-[120px] hover:bg-blue-300'>Listen</button>
                                          </div>
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { setForNotePad3(!forNotePad3) }}
                                                      className='p-2 bg-blue-300 rounded w-[120px] hover:bg-red-300'>Show NotePad</button>
                                          </div>
                                    </div>
                              </div>
                        </>

                        {/* 20-30 Questions */}

                        <div className="">
                              {/* Section 3 Header */}
                              <div className="font-bold text-xl">SECTION 3</div>

                              {/* Questions 21-27 */}
                              <div className=" font-bold">
                                    <div className="font-semibold">Questions 21-27</div>
                                    <p>Complete the notes below.</p>
                                    <p>Write <span className="font-semibold">NO MORE THAN THREE WORDS OR A NUMBER</span> for each answer.</p> <br />
                                    <p className="font-semibold font-xl text-center">Computer Labs</p>
                              </div>

                              {/* Computer Labs Info */}
                              <div className="Questions">
                                    <div className="border border-gray-500 p-2">
                                          <p>The 4 labs below can be used by undergraduates.</p>
                                          <p className='flex flex-wrap'>Other computer labs can only be used by postgraduates and  <span className="Numbers">21</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques21"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[20]}
                                                      userAnswerQN={UserData.ques21}
                                                /></p>
                                    </div>

                                    {/* Lab Locations */}
                                    <div className="border border-gray-500 p-2 flex justify-between">
                                          <p className="font-semibold">Lab Locations</p>
                                          <p>Wimborne</p>
                                    </div>
                                    <div className="p-2 flex justify-between border border-gray-500">
                                          <p>Johnson Building</p>
                                          <p>Franklin</p>
                                          <p>Computer Sciences Building</p>
                                    </div>
                                    <div className="p-2 flex justify-between border border-gray-500">
                                          <p>Salisbury</p>
                                          <div className="flex flex-wrap">
                                                <span className="Numbers">22</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques22"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[21]}
                                                      userAnswerQN={UserData.ques22}
                                                />
                                          </div>
                                    </div>
                                    <div className="p-2 flex justify-between border border-gray-500">
                                          <p>Court</p>
                                          <p>Johnson Building</p>
                                    </div>


                                    {/* Reservations Section */}
                                    <div className="border border-gray-500 p-2">
                                          <p className="font-semibold">Reservations</p> <br />

                                          <p className='flex flex-wrap'> <span className="Numbers">23</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques23"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[22]}
                                                      userAnswerQN={UserData.ques23}
                                                /> a day unless computers are free</p>
                                          <p className='flex flex-wrap'>Write reservation in book  <span className="Numbers">24</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques24"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[23]}
                                                      userAnswerQN={UserData.ques24}
                                                /></p>
                                          <p className="text-red-500">(Penalty for erasing someone else’s reservation – 1 year ban)</p>
                                    </div>

                                    {/* User Name & Password */}
                                    <div className="border border-gray-500 p-2 flex justify-between">
                                          <p className="font-semibold">User Name</p>
                                          <p>jamessmith2</p>
                                    </div>
                                    <div className="border border-gray-500 p-2 flex justify-between">
                                          <p className="font-semibold">Password</p>
                                          <p className='flex flex-wrap'> <span className="Numbers">25</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques25"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[24]}
                                                      userAnswerQN={UserData.ques25}
                                                /></p>
                                    </div>

                                    {/* Printing Section */}
                                    <div className="border border-gray-500 p-2">
                                          <p className="font-semibold">Printing</p>
                                          <p className='flex flex-wrap'>Pick up print outs from  <span className="Numbers">26</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques26"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[25]}
                                                      userAnswerQN={UserData.ques26}
                                                /> in Franklin</p>
                                    </div>

                                    {/* Costs Section */}
                                    <div className="border border-gray-500 p-2 flex justify-between">
                                          <p className="font-semibold">Costs</p>
                                          <div className="flex flex-wrap">
                                                <span className="Numbers">27</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques27"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[26]}
                                                      userAnswerQN={UserData.ques27}
                                                />
                                          </div>
                                    </div>
                              </div> <br /> <br />
                              <div className=" font-bold">
                                    <div className="font-bold text-xl">Questions 28-30</div>
                                    <p>Choose the correct letters A, B, C.</p><br /> <br />
                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques28"
                                          TestName="Actual-test-18"
                                          AnswerData={LAllAnswersData[27]} // Adjusted index
                                          userAnswerQN={UserData.ques28}
                                          contentsObj={{
                                                Title: "The introductory computer course that James decides to take is…",
                                                AData: "beginner",
                                                BData: "intermediate",
                                                CData: "advanced"
                                          }}
                                    />
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques29"
                                          TestName="Actual-test-18"
                                          AnswerData={LAllAnswersData[28]} // Adjusted index
                                          userAnswerQN={UserData.ques29}
                                          contentsObj={{
                                                Title: "The computer laboratory for James’ introductory computer course is in…",
                                                AData: "Wimborne",
                                                BData: "Franklin",
                                                CData: "Court"
                                          }}
                                    />
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques30"
                                          TestName="Actual-test-18"
                                          AnswerData={LAllAnswersData[29]} // Adjusted index
                                          userAnswerQN={UserData.ques30}
                                          contentsObj={{
                                                Title: "James will take his introductory computer course…",
                                                AData: "on Thursday at 2.00pm",
                                                BData: "on Tuesday at 4.30pm.",
                                                CData: "on Tuesday at 5.00pm"
                                          }}
                                    />


                              </div>

                        </div>



                  </div>

                  {/* section-4*/}

                  <div className="forAllDivs section-1 bg-sky-100 pb-[30px] rounded mt-4">
                        <>
                              <div className='mb-3 grid grid-cols-1 justify-center w-[90vw] sm:w-full mt-[70px] sm:mt-0'>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-4</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad4 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-18-Section4.mp3") }}
                                                      className='p-2 bg-red-300 rounded w-[120px] hover:bg-blue-300'>Listen</button>
                                          </div>
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { setForNotePad4(!forNotePad4) }}
                                                      className='p-2 bg-blue-300 rounded w-[120px] hover:bg-red-300'>Show NotePad</button>
                                          </div>
                                    </div>
                              </div>
                        </>

                        {/* 1-10 Questions */}

                        <div className="">
                              <div className="w-full">
                                    <h2 className="text-2xl font-bold mb-4">SECTION 4</h2>
                                    <h3 className="text-lg font-semibold">Questions 31-35</h3>
                                    <p className="mb-4">Complete the notes below</p>
                                    <p className="mb-4">Write <span className="font-bold">NO MORE THAN THREE WORDS OR A NUMBER</span> for each answer.</p>

                                    <h3 className="text-lg font-semibold">The Shinkansen or Bullet Train</h3>
                                    <ul className="list-disc pl-5 mb-4">
                                          <li className='flex flex-wrap'><span className="font-semibold">Safety</span>: No deaths (bar 1 from passenger misadventure) since its launch in <span className="Numbers">31</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques31"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[30]}
                                                      userAnswerQN={UserData.ques31}
                                                /></li>
                                          <li className='flex flex-wrap'><span className="font-semibold">Speed</span>: Holds world train record for the <span className="Numbers">32</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques32"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[31]}
                                                      userAnswerQN={UserData.ques32}
                                                /> of 261.8 kph.</li>
                                          <li>500 series Nozumi’s fastest speed is 300kph.</li>
                                          <li><span className="font-semibold">Punctuality</span>: Punctual to within the second.</li>
                                          <li className='flex flex-wrap'>All bullet trains for 1 year were a total of <span className="Numbers">33</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques33"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[32]}
                                                      userAnswerQN={UserData.ques33}
                                                /> late.</li>
                                          <li className='flex flex-wrap'><span className="font-semibold">History</span>: First used on Tokyo to Osaka route. Old models have now been retired. 300, 500 and 700 are recent models.</li>
                                          <li><span className="font-semibold">Services</span>: Nozomi trains stop at the <span className="Numbers">34</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques34"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[33]}
                                                      userAnswerQN={UserData.ques34}
                                                /> Hikari stop more frequently.</li>
                                          <li className='flex flex-wrap'>Kodama trains stop at <span className="Numbers">35</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques35"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[34]}
                                                      userAnswerQN={UserData.ques35}
                                                /></li>
                                    </ul>

                                    <h3 className="text-lg font-semibold">Questions 36-40</h3>
                                    <p className="mb-4">Complete the sentences below.</p>
                                    <p className="mb-4">Write <span className="font-bold">NO MORE THAN THREE WORDS</span> for each answer.</p>

                                    <ul className="list-disc pl-5">
                                          <li className='flex flex-wrap'>French TGV locomotives pull the T6V trains from both ends using a <span className="Numbers">36</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques36"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[35]}
                                                      userAnswerQN={UserData.ques36}
                                                /></li>
                                          <li className='flex flex-wrap'>Japanese ground is unsuitable for the TGV type of train because it is <span className="Numbers">37</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques37"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[36]}
                                                      userAnswerQN={UserData.ques37}
                                                /> and the tracks frequently curve horizontally and vertically.</li>
                                          <li className='flex flex-wrap'>An extra advantage of the Japanese electric car system is that it can act as a <span className="Numbers">38</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques38"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[37]}
                                                      userAnswerQN={UserData.ques38}
                                                /></li>
                                          <li className='flex flex-wrap'>Even after the power supply is cut off in the electric car system, electricity is still produced by <span className="Numbers">39</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques39"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[38]}
                                                      userAnswerQN={UserData.ques39}
                                                /></li>
                                          <li className='flex flex-wrap'>Huge improvements in power, operability and safety administration have been made possible by advances in <span className="Numbers">40</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques40"
                                                      TestName="Actual-test-18"
                                                      AnswerData={LAllAnswersData[39]}
                                                      userAnswerQN={UserData.ques40}
                                                /></li>
                                    </ul>
                              </div>
                        </div>



                  </div>


            </section >
      )
}



export default ListeningPage
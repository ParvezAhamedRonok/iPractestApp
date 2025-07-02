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
            ["80"],
            ["garage"],
            ["the supermarket"],
            ["petrol"],
            ["space heater"],
            ["toaster"],
            ["kitchen"],
            ["1 June"  , "June 1st"],
            ["Friday evening" , "Friday night"],
            ["an exam"],
          
            // Section 2
            ["money"],
            ["schools"],
            ["B"],
            ["E"],
            ["F"],
            ["A"],
            ["A"],
            ["A"],
            ["B"],
            ["A"],
          
            // Section 3
            ["student loans"],
            ["Finance Office"],
            ["smoking"],
            ["supermarket"],
            ["natural medicine"],
            ["Careers Office"],
            ["email attachment"],
            ["5 November" ,"November 5th"],
            ["data analysis"],
            ["presentation"],
          
            // Section 4
            ["law offices"],
            ["cigar"],
            ["footprints"],
            ["light"],
            ["grass"],
            ["nature"],
            ["air-conditioning"],
            ["lungs"],
            ["clubroom"],
            ["city"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-10-Section1.mp3" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 10</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-10-Section1.mp3") }}
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

                        <div className="w-full">
                              <h2 className="text-2xl font-bold mb-6">SECTION 1</h2>
                              <h3 className="text-xl font-semibold mb-4">Questions 1-10</h3>
                              <p className="mb-6">Complete the notes below.</p>
                              <p className="mb-6">Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.</p>

                              <div className="space-y-6 Questions">
                                    <div>
                                          <p className="font-medium">PLAN FOR SHARING ACCOMMODATION</p>
                                    </div>

                                    <div className="mt-4">
                                          <div className="flex items-center font-bold">
                                                <span className="mr-2">The discussion topic:</span>
                                                lease for next year
                                          </div>
                                    </div>

                                    {/* Question 1 */}
                                    <div className="mt-4">
                                          <p>The total rent:</p>
                                          <div className="flex items-center">
                                                <span className="mr-2">Peter £ 110 & Jim £</span>
                                                <span className='Numbers'>1</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques1"
                                                      TestName={"Actual-test-10"}
                                                      AnswerData={LAllAnswersData[0]}
                                                      userAnswerQN={UserData.ques1}
                                                />
                                          </div>
                                    </div>

                                    {/* Question 2 */}
                                    <div className="mt-4">
                                          <p>Car parking:</p>
                                          <div className="flex items-center">
                                                <span className="mr-2">in the</span>
                                                <span className='Numbers'>2</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques2"
                                                      TestName={"Actual-test-10"}
                                                      AnswerData={LAllAnswersData[1]}
                                                      userAnswerQN={UserData.ques2}
                                                />
                                          </div>
                                    </div>

                                    {/* Question 3 */}
                                    <div className="mt-4">
                                          <p>A place to buy things:</p>
                                          <div className="flex items-center">
                                                <span className="mr-2">because Jim works there.</span>
                                                <span className='Numbers'>3</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques3"
                                                      TestName={"Actual-test-10"}
                                                      AnswerData={LAllAnswersData[2]}
                                                      userAnswerQN={UserData.ques3}
                                                />
                                          </div>
                                    </div>

                                    {/* Question 4 */}
                                    <div className="mt-4">
                                          <p>The fees they should share:</p>
                                          <div className="flex items-center">
                                                <span className="mr-2">fees</span>
                                                <span className='Numbers'>4</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques4"
                                                      TestName={"Actual-test-10"}
                                                      AnswerData={LAllAnswersData[3]}
                                                      userAnswerQN={UserData.ques4}
                                                />
                                          </div>
                                    </div>

                                    {/* Question 5 */}
                                    <div className="mt-4">
                                          <p>The appliances needed:</p>
                                          <ul className="list-disc ml-6">
                                                <li>The landlord will provide the microwave.</li>
                                                <li> <div className='flex'>The
                                                      <span className='Numbers'>5</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques5"
                                                            TestName={"Actual-test-10"}
                                                            AnswerData={LAllAnswersData[4]}
                                                            userAnswerQN={UserData.ques5}
                                                      />
                                                </div>  is needed in the kitchen.</li>
                                                <li>Peter will bring some dining room and living room furniture.</li>
                                                <li>  <div className='flex'>Jim will buy a
                                                      <span className='Numbers'>6</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques6"
                                                            TestName={"Actual-test-10"}
                                                            AnswerData={LAllAnswersData[5]}
                                                            userAnswerQN={UserData.ques6}
                                                      />
                                                </div> at the store.</li>
                                          </ul>
                                    </div>

                                    {/* Question 6 */}
                                    <div className="mt-4">
                                          <p>Location of the telephone:</p>
                                          <div className="flex items-center">
                                                <span className="mr-2">in the</span>
                                                <span className='Numbers'>7</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques7"
                                                      TestName={"Actual-test-10"}
                                                      AnswerData={LAllAnswersData[6]}
                                                      userAnswerQN={UserData.ques7}
                                                />
                                          </div>
                                    </div>

                                    {/* Question 7 */}
                                    <div className="mt-4">
                                          <div className="flex items-center">
                                                <p>Move-in date:</p>
                                                <span className='Numbers'>8</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques8"
                                                      TestName={"Actual-test-10"}
                                                      AnswerData={LAllAnswersData[7]}
                                                      userAnswerQN={UserData.ques8}
                                                />
                                          </div>
                                    </div>

                                    {/* Question 8 */}
                                    <div className="mt-4">
                                          <p>Watching the game together:</p>
                                          <div className="flex items-center">
                                                <span className="mr-2">on</span>
                                                <span className='Numbers'>9</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques9"
                                                      TestName={"Actual-test-10"}
                                                      AnswerData={LAllAnswersData[8]}
                                                      userAnswerQN={UserData.ques9}
                                                />
                                          </div>
                                    </div>

                                    {/* Question 9 */}
                                    <div className="mt-4">
                                          <p>What Jim needs to do before move-in:</p>
                                          <div className="flex items-center">
                                                <span className="mr-2">take</span>
                                                <span className='Numbers'>10</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques10"
                                                      TestName={"Actual-test-10"}
                                                      AnswerData={LAllAnswersData[9]}
                                                      userAnswerQN={UserData.ques10}
                                                />
                                                <span className="mr-2">in the morning</span>
                                          </div>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-10-Section2.mp3") }}
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
                        <div className="Questions">
                              <div className="Q-articles">
                                    <h4>PART 2 </h4> <br />
                                    Questions 11-12<br /><br />
                                    Complete the sentences below.<br /> <br />
                                    Write ONE WORD ONLY for each answer. <br /> <br />
                              </div>
                              <div className='Questions'>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          The program is made for travelers to make
                                          <span className='Numbers'>11</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques11"
                                                TestName={"Actual-test-10"}
                                                AnswerData={LAllAnswersData[10]}
                                                userAnswerQN={UserData.ques11}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          The program operates in cooperation with the
                                          <span className='Numbers'>12</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques12"
                                                TestName={"Actual-test-10"}
                                                AnswerData={LAllAnswersData[11]}
                                                userAnswerQN={UserData.ques12}
                                          />
                                    </div>
                              </div>

                              <div className="Q-articles font-bold">
                                    Questions 13-16<br /><br />
                                    What is the internship stipulation of each country below?<br /> <br />
                                    Choose FOUR answers from the box and write the correct letter, A-F, next to questions 13-16.<br /> <br />
                              </div>


                              <div className='p-1 w-[80%] border-[2px] rounded border-gray-300'>
                                    <h5>Internship Stipulation</h5>
                                    <p><span className='font-bold mr-2'>A</span> home stay</p>
                                    <p><span className='font-bold mr-2'>B</span> no summer program</p>
                                    <p><span className='font-bold mr-2'>C</span> minimum time requirement</p>
                                    <p><span className='font-bold mr-2'>D</span> formal report required</p>
                                    <p><span className='font-bold mr-2'>E</span> specific time period</p>
                                    <p><span className='font-bold mr-2'>F</span> agriculture</p>
                                    <br />
                              </div> <br />
                              <h5>Country</h5> <br />
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>13</span>
                                          USA
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques13"
                                                TestName={"Actual-test-10"}
                                                AnswerData={LAllAnswersData[12]}
                                                userAnswerQN={UserData.ques13}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>14</span>
                                          Australia
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques14"
                                                TestName={"Actual-test-10"}
                                                AnswerData={LAllAnswersData[13]}
                                                userAnswerQN={UserData.ques14}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>15</span>
                                          South Africa
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques15"
                                                TestName={"Actual-test-10"}
                                                AnswerData={LAllAnswersData[14]}
                                                userAnswerQN={UserData.ques15}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>16</span>
                                          India
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques16"
                                                TestName={"Actual-test-10"}
                                                AnswerData={LAllAnswersData[15]}
                                                userAnswerQN={UserData.ques16}
                                          />
                                    </div>

                              </div>
                              <div className="Q-articles mt-4">
                                    <h4>Questions 17-20</h4> <br />
                                    <h6>Choose the correct letter, A, B or C.</h6> <br />
                              </div>
                              <div className='Questions'>
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques17"
                                          TestName="Actual-test-10"
                                          AnswerData={LAllAnswersData[16]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques17}
                                          contentsObj={{
                                                Title: "What should you do to get the Global Traveling Certificate?",
                                                AData: "record activity everyday",
                                                BData: "formal report",
                                                CData: "talk the experience with the assessor"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques18"
                                          TestName="Actual-test-10"
                                          AnswerData={LAllAnswersData[17]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques18}
                                          contentsObj={{
                                                Title: "You can apply for the certificate",
                                                AData: "only after you come back.",
                                                BData: "while on the trip.",
                                                CData: "before you leave."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques19"
                                          TestName="Actual-test-10"
                                          AnswerData={LAllAnswersData[18]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques19}
                                          contentsObj={{
                                                Title: "When should you pay the final installment?",
                                                AData: "the day before you leave",
                                                BData: "one month before you return",
                                                CData: "before you get your plane ticket"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques20"
                                          TestName="Actual-test-10"
                                          AnswerData={LAllAnswersData[19]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques20}
                                          contentsObj={{
                                                Title: "Before your application, you need",
                                                AData: "to take a health check.",
                                                BData: "to attend the workshop.",
                                                CData: "to meet people with whom you will work."
                                          }}
                                    />

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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-10-Section3.mp3") }}
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
                        <div className="Q-articles">
                              <h5>PART 3 </h5> <br />
                              Questions 21-30<br />
                              Complete the table.<br /> <br />
                              <h5 className='mt-3 mb-3 text-center'>Write NO MORE THAN TWO WORDS for each answer.</h5>
                        </div>
                        <div className=" mx-auto p-4">
                              <table className="min-w-full border-collapse table-auto text-sm border border-gray-300">
                                    <thead>
                                          <tr>
                                                <th colSpan="2" className="px-2 py-1 text-center bg-gray-200 border border-gray-300">Group Presentation Assignment</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          <tr>
                                                <td className="px-2 py-1 font-bold border border-gray-300">Topic</td>
                                                <td className="px-2 py-1 border border-gray-300">Information source</td>
                                          </tr>
                                          <tr>
                                                <td className="px-2 py-1 font-bold border border-gray-300 flex"><span className='Numbers'>21</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques21"
                                                            TestName={"Actual-test-10"}
                                                            AnswerData={LAllAnswersData[20]}
                                                            userAnswerQN={UserData.ques21}
                                                      /></td>
                                                <td className=" border border-gray-300">check at the <span className='Numbers'>22</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques22"
                                                            TestName={"Actual-test-10"}
                                                            AnswerData={LAllAnswersData[21]}
                                                            userAnswerQN={UserData.ques22}
                                                      /></td>
                                          </tr>
                                          <tr>
                                                <td className="px-2 py-1 font-bold border border-gray-300">Views on <span className='Numbers'>23</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques23"
                                                            TestName={"Actual-test-10"}
                                                            AnswerData={LAllAnswersData[22]}
                                                            userAnswerQN={UserData.ques23}
                                                      /></td>
                                                <td className="px-2 py-1 border border-gray-300">interview the manager of <span className='Numbers'>24</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques24"
                                                            TestName={"Actual-test-10"}
                                                            AnswerData={LAllAnswersData[23]}
                                                            userAnswerQN={UserData.ques24}
                                                      /></td>
                                          </tr>
                                          <tr>
                                                <td className="px-2 py-1 font-bold border border-gray-300">Practice of <span className='Numbers'>25</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques25"
                                                            TestName={"Actual-test-10"}
                                                            AnswerData={LAllAnswersData[24]}
                                                            userAnswerQN={UserData.ques25}
                                                      /></td>
                                                <td className="px-2 py-1 border border-gray-300">find relevant information from the <span className='Numbers'>26</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques26"
                                                            TestName={"Actual-test-10"}
                                                            AnswerData={LAllAnswersData[25]}
                                                            userAnswerQN={UserData.ques26}
                                                      /></td>
                                          </tr>
                                          <tr>
                                                <td className="px-2 py-1 font-bold border border-gray-300">How to deliver the plan:</td>
                                                <td className="px-2 py-1 border border-gray-300">as an <div className='flex'><span className='Numbers'>27</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques27"
                                                            TestName={"Actual-test-10"}
                                                            AnswerData={LAllAnswersData[26]}
                                                            userAnswerQN={UserData.ques27}
                                                      /></div></td>
                                          </tr>
                                          <tr>
                                                <td className="px-2 py-1 font-bold border border-gray-300">Date of giving the presentation:</td>
                                                <td className="px-2 py-1 border border-gray-300">on <div className='flex'><span className='Numbers'>28</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques28"
                                                            TestName={"Actual-test-10"}
                                                            AnswerData={LAllAnswersData[27]}
                                                            userAnswerQN={UserData.ques28}
                                                      /></div></td>
                                          </tr>
                                          <tr>
                                                <td className="px-2 py-1 font-bold border border-gray-300">Schedule of items due:</td>
                                                <td className="px-2 py-1 border border-gray-300 flex flex-wrap">First Phase: <span className='Numbers'>29</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques29"
                                                            TestName={"Actual-test-10"}
                                                            AnswerData={LAllAnswersData[28]}
                                                            userAnswerQN={UserData.ques29}
                                                      />   Final Phase: Group <span className='Numbers'>30</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques30"
                                                            TestName={"Actual-test-10"}
                                                            AnswerData={LAllAnswersData[29]}
                                                            userAnswerQN={UserData.ques30}
                                                      /> </td>
                                          </tr>
                                    </tbody>
                              </table>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-10-Section4.mp3") }}
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



                        <div className="w-full">
                              <h1 className="text-3xl font-bold  mb-6 text-gray-800">SECTION 4</h1>
                              <h2 className="text-xl  mb-4 text-gray-700">Questions 31-40</h2>
                              <p className="text-base mb-8 text-gray-600">Complete the notes below. Write ONE WORD ONLY for each answer.</p>

                              <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-gray-800">The Gherkin Building</h3>

                                    <div className=" rounded-lg ">
                                          <div className="mb-4">
                                                <span className="font-medium text-gray-700">Commissioned by:</span>
                                                <p className="text-gray-600 ml-2 flex"><span className='Numbers'>31</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques31"
                                                            TestName={"Actual-test-10"}
                                                            AnswerData={LAllAnswersData[30]}
                                                            userAnswerQN={UserData.ques31}
                                                      /> firm called Foster and Partners</p>
                                          </div>

                                          <div className="mb-4">
                                                <span className="font-medium text-gray-700">The features of its appearance:</span>
                                                <ul className="list-none pl-4 space-y-2 mt-2">
                                                      <li>
                                                            <span className="font-medium text-gray-600">• Its shape is like a</span>
                                                            <p className="text-gray-600 ml-2 flex"><span className='Numbers'>32</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques32"
                                                                        TestName={"Actual-test-10"}
                                                                        AnswerData={LAllAnswersData[31]}
                                                                        userAnswerQN={UserData.ques32}
                                                                  /></p>
                                                      </li>
                                                      <li>
                                                            <span className="font-medium text-gray-600">• It can reduce the carbon</span>
                                                            <p className="text-gray-600 ml-2 flex"><span className='Numbers'>33</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques33"
                                                                        TestName={"Actual-test-10"}
                                                                        AnswerData={LAllAnswersData[32]}
                                                                        userAnswerQN={UserData.ques33}
                                                                  />of the city's.</p>
                                                      </li>
                                                      <li>
                                                            <span className="font-medium text-gray-600">• It lets</span>
                                                            <p className="text-gray-600 ml-2 flex flex-wrap"><span className='Numbers'>34</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques34"
                                                                        TestName={"Actual-test-10"}
                                                                        AnswerData={LAllAnswersData[34]}
                                                                        userAnswerQN={UserData.ques34}
                                                                  /> pass through the building, both reducing heating costs and brightening up the workspace</p>
                                                      </li>
                                                      <li>
                                                            <span className="font-medium text-gray-600">• One false story claimed that the exterior of the building is partly made of</span>
                                                            <p className="text-gray-600 ml-2 flex flex-wrap"><span className='Numbers'>35</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques35"
                                                                        TestName={"Actual-test-10"}
                                                                        AnswerData={LAllAnswersData[34]}
                                                                        userAnswerQN={UserData.ques35}
                                                                  /></p>
                                                      </li>
                                                </ul>
                                          </div>

                                          <div className="mb-4">
                                                <span className="font-medium text-gray-700">Architectural concept:</span>
                                                <ul className="list-none pl-4 space-y-2 mt-2">
                                                      <li>
                                                            <span className="font-medium text-gray-600">• links</span>
                                                            <p className="text-gray-600 ml-2 flex flex-wrap"><span className='Numbers'>36</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques36"
                                                                        TestName={"Actual-test-10"}
                                                                        AnswerData={LAllAnswersData[35]}
                                                                        userAnswerQN={UserData.ques36}
                                                                  /> with the workplace.</p>
                                                      </li>
                                                      <li>
                                                            <span className="font-medium text-gray-600">• relies less on</span>
                                                            <p className="text-gray-600 ml-2 flex flex-wrap"><span className='Numbers'>37</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques37"
                                                                        TestName={"Actual-test-10"}
                                                                        AnswerData={LAllAnswersData[36]}
                                                                        userAnswerQN={UserData.ques37}
                                                                  /> for temperature control than other similar buildings.</p>
                                                      </li>
                                                </ul>
                                          </div>

                                          <div className="mb-4">
                                                <span className="font-medium text-gray-700">The features of its interior:</span>
                                                <ul className="list-none pl-4 space-y-2 mt-2">
                                                      <li>
                                                            <span className="font-medium text-gray-600">• The atria that let fresh air pass through the interior are known as</span>
                                                            <p className="text-gray-600 ml-2 flex flex-wrap"><span className='Numbers'>38</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques38"
                                                                        TestName={"Actual-test-10"}
                                                                        AnswerData={LAllAnswersData[37]}
                                                                        userAnswerQN={UserData.ques38}
                                                                  /></p>
                                                      </li>
                                                      <li>
                                                            <span className="font-medium text-gray-600">• There is a place for entertainment called the</span>
                                                            <p className="text-gray-600 ml-2 flex flex-wrap"><span className='Numbers'>39</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques39"
                                                                        TestName={"Actual-test-10"}
                                                                        AnswerData={LAllAnswersData[38]}
                                                                        userAnswerQN={UserData.ques39}
                                                                  /> at the top of the building.</p>
                                                      </li>
                                                </ul>
                                          </div>

                                          <div className="mb-4">
                                                <span className="font-medium text-gray-700">The future of urban planning and architecture:</span>
                                                <ul className="list-none pl-4 space-y-2 mt-2">
                                                      <li>
                                                            <span className="font-medium text-gray-600">• It is likely that the entire</span>
                                                            <p className="text-gray-600 ml-2 flex flex-wrap"><span className='Numbers'>40</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques40"
                                                                        TestName={"Actual-test-10"}
                                                                        AnswerData={LAllAnswersData[39]}
                                                                        userAnswerQN={UserData.ques40}
                                                                  /> will be designed with more similarly eco-friendly buildings in future.</p>
                                                      </li>
                                                      <li>
                                                            <span className="font-medium text-gray-600">• A new building will be constructed aiming to produce zero waste and remove carbon dioxide from us as much as possible.</span>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                        </div>



                  </div>


            </section >
      )
}



export default ListeningPage
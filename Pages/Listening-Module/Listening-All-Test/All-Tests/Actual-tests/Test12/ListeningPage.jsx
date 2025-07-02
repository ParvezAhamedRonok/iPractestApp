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
            ["B"], ["D"], ["A"], ["A"], ["C"],
            ["C"], ["deposit"], ["invitations"], ["transport", "transportation"], ["gifts", "presents"],
            // Section 2
            ["March 19th", "19 March"], ["70,000"], ["5"], ["this Sunday"], ["electricity"],
            ["racing car"], ["B"], ["C"], ["C"], ["A"],
            // Section 3
            ["B"], ["B"], ["A"], ["A"], ["B"],
            ["C"], ["A"], ["March"], ["secretary"], ["computer"],
            // Section 4
            ["an attack"], ["mammals"], ["breathe"], ["on edge"], ["bones"],
            ["sleeping problems"], ["memories"], ["learning"], ["rats"], ["genetic structure"],
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-12-Section1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Listening Practice Test 12</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-12-Section1.mp3?_=1") }}
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
                        <div className="Questions">
                              <div className="Q-articles">
                                    <h4>PART 1 </h4> <br />
                                    Questions 1-6<br />
                                    Which hotels have the following facilities? <br />
                                    <h5 className=' mt-2 text-inherit'>Write the correct letter, A, B, C, or D next to questions 1-6.</h5> <br />
                                    <div class="space-y-2 border-[2px] border-gray-400 p-2">
                                          <div class="flex items-center">
                                                <span class="font-bold text-lg">A</span>
                                                <span class="ml-2">Royal Hotel</span>
                                          </div>

                                          <div class="flex items-center">
                                                <span class="font-bold text-lg">B</span>
                                                <span class="ml-2">Star Hotel</span>
                                          </div>

                                          <div class="flex items-center">
                                                <span class="font-bold text-lg">C</span>
                                                <span class="ml-2">Winchester Hotel</span>
                                          </div>

                                          <div class="flex items-center">
                                                <span class="font-bold text-lg">D</span>
                                                <span class="ml-2">All Three Hotels</span>
                                          </div>
                                    </div>

                              </div>
                              <div className="Questions">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className="Numbers">1</span> Sea view
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques1"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[0]}
                                                userAnswerQN={UserData.ques1}
                                          />
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className="Numbers">2</span> Handicap accessibility
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques2"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[1]}
                                                userAnswerQN={UserData.ques2}
                                          />
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className="Numbers">3</span> Multiple meal options
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques3"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[2]}
                                                userAnswerQN={UserData.ques3}
                                          />
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className="Numbers">4</span> Private dining
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques4"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[3]}
                                                userAnswerQN={UserData.ques4}
                                          />
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className="Numbers">5</span> Group discount
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques5"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[4]}
                                                userAnswerQN={UserData.ques5}
                                          />
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className="Numbers">6</span> Children’s play area
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques6"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[5]}
                                                userAnswerQN={UserData.ques6}
                                          />
                                    </div>
                              </div>

                              <div className="Q-articles mt-5">
                                    <h5 className='mb-2'>Questions 7-10</h5>
                                    Choose the correct letter, A, B, or C.<br /> <br />
                              </div>
                              <div className="Questions">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          The man needs to send his    <span className="Numbers">7</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques7"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[6]}
                                                userAnswerQN={UserData.ques7}
                                          />
                                          to the hotel.
                                    </div>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          He also needs to make    <span className="Numbers">8</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques8"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[7]}
                                                userAnswerQN={UserData.ques8}
                                          />
                                          immediately.
                                    </div>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          The hotel must be alerted in advance if guests will need help with   <span className="Numbers">9</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques9"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[8]}
                                                userAnswerQN={UserData.ques9}
                                          />
                                    </div>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          There is no need to prepare   <span className="Numbers">10</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques10"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[9]}
                                                userAnswerQN={UserData.ques10}
                                          />
                                          for hotel drivers.
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-12-Section2.mp3?_=2") }}
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
                        <div class="Questions">
                              <div className="Q-articles font-bold">
                                    <h5>PART 2 </h5> <br />
                                    Questions 11-16<br /><br />
                                    Complete the form below.<br /> <br />
                                    Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer. <br /> <br />

                              </div>

                              <div class="mt-4 overflow-x-auto">
                                    <h4 className='text-center'>Durham County Car Show</h4> <br />
                                    <table class="min-w-full table-auto text-sm border-collapse">
                                          <thead className='bg-gray-200'>
                                                <tr>
                                                      <th class="px-4 py-2 text-left border-b">Question</th>
                                                      <th class="px-4 py-2 text-left border-b">Answer</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr>
                                                      <td class="px-4 py-2"> Public grand opening date:</td>
                                                      <td class="px-4 py-2 flex">
                                                            <span className="Numbers">11</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques11"
                                                                  TestName="Actual-test-12"
                                                                  AnswerData={LAllAnswersData[10]}
                                                                  userAnswerQN={UserData.ques11}
                                                            />
                                                      </td>
                                                </tr>
                                                <tr>
                                                      <td class="px-4 py-2"> Number of viewers:</td>
                                                      <td class="px-4 py-2 flex">
                                                            <span className="Numbers">12</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques12"
                                                                  TestName="Actual-test-12"
                                                                  AnswerData={LAllAnswersData[11]}
                                                                  userAnswerQN={UserData.ques12}
                                                            />
                                                      </td>
                                                </tr>
                                                <tr>
                                                      <td class="px-4 py-2 "> Off-peak day price: £10 for adults,  £ <span className="Numbers">13</span><Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques13"
                                                            TestName="Actual-test-12"
                                                            AnswerData={LAllAnswersData[12]}
                                                            userAnswerQN={UserData.ques13}
                                                      /> for children</td>

                                                </tr>
                                                <tr>
                                                      <td class="px-4 py-2"> Best day to visit:</td>
                                                      <td class="px-4 py-2 flex"><span className="Numbers">14</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques14"
                                                                  TestName="Actual-test-12"
                                                                  AnswerData={LAllAnswersData[13]}
                                                                  userAnswerQN={UserData.ques14}
                                                            />
                                                      </td>
                                                </tr>
                                                <tr>
                                                      <td class="px-4 py-2"> New car category:</td>
                                                      <td class="px-4 py-2 flex"><span className="Numbers">15</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques15"
                                                                  TestName="Actual-test-12"
                                                                  AnswerData={LAllAnswersData[14]}
                                                                  userAnswerQN={UserData.ques15}
                                                            />
                                                      </td>
                                                </tr>
                                                <tr>
                                                      <td class="px-4 py-2"> Entertainment included:</td>
                                                      <td class="px-4 py-2 flex"> <span className="Numbers">16</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques16"
                                                                  TestName="Actual-test-12"
                                                                  AnswerData={LAllAnswersData[15]}
                                                                  userAnswerQN={UserData.ques16}
                                                            />
                                                      </td>
                                                </tr>
                                          </tbody>
                                    </table>
                              </div>


                              <h3 class="text-lg font-semibold mt-8">Questions 17-20</h3>
                              <p class="mt-2">When were the following features included in an auto show? Write the correct letter, A, B, or C next to questions 17-20.</p>
                              <div class="border rounded-lg p-2 w-[70%] bg-gray-100">
                                    <div class="flex flex-col space-y-2">
                                          <div class="flex items-center space-x-2">
                                                <span class="font-bold">A</span>
                                                <span>last year</span>
                                          </div>
                                          <div class="flex items-center space-x-2">
                                                <span class="font-bold">B</span>
                                                <span>this year</span>
                                          </div>
                                          <div class="flex items-center space-x-2">
                                                <span class="font-bold">C</span>
                                                <span>both</span>
                                          </div>
                                    </div>
                              </div>


                              <div class="mt-4 space-y-2">
                                    <div class="flex items-center">
                                          <span class="Numbers">17</span> Higher number of seats
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[16]}
                                                userAnswerQN={UserData.ques17}
                                          />
                                    </div>
                                    <div class="flex items-center">
                                          <span class="Numbers">18</span> Fun for children
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[17]}
                                                userAnswerQN={UserData.ques18}
                                          />
                                    </div>
                                    <div class="flex items-center">
                                          <span class="Numbers">19</span> 4×4 test drive
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[18]}
                                                userAnswerQN={UserData.ques19}
                                          />
                                    </div>
                                    <div class="flex items-center">
                                          <span class="Numbers">20</span> Lucky draw for car
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[19]}
                                                userAnswerQN={UserData.ques20}
                                          />
                                    </div>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-12-Section3.mp3?_=3") }}
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
                        <div className="Questions">
                              <div className="Q-articles font-bold">
                                    <h5>PART 3 </h5> <br />
                                    Questions 21-23<br />
                                    Complete the table.<br /> <br />
                                    <h5 className='mt-2 mb-3 '>Which THREE factors should the student consider while selecting courses?</h5>
                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques21"
                                          TestName="Actual-test-12"
                                          AnswerData={LAllAnswersData[20]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques21}
                                          contentsObj={{
                                                Title: "",
                                                AData: "class time",
                                                BData: "course topic",
                                                CData: "amount of homework"
                                          }}
                                    />
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques22"
                                          TestName="Actual-test-12"
                                          AnswerData={LAllAnswersData[21]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques22}
                                          contentsObj={{
                                                Title: "",
                                                AData: "ease of course",
                                                BData: "relevant to future career",
                                                CData: "are expected."
                                          }}
                                    />
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques23"
                                          TestName="Actual-test-12"
                                          AnswerData={LAllAnswersData[22]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques23}
                                          contentsObj={{
                                                Title: "",
                                                AData: " course structure",
                                                BData: "professor reputation",
                                                CData: "not granted"
                                          }}
                                    />

                              </div>
                              <div className="Q-articles mt-5 font-bold">
                                    <h4 className='mb-2'>Questions 24-27 </h4>
                                    Choose the correct letter, A, B or C<br /> <br />
                              </div>
                              <div className="Questions">
                                    {/* Question 24 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">

                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques24"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[23]} // Adjusted index
                                                userAnswerQN={UserData.ques24}
                                                contentsObj={{
                                                      Title: "The tutor recommends against taking Human Physiology because it would not be the best",
                                                      AData: "time management.",
                                                      BData: "chance at earning an A.",
                                                      CData: "topic for a research paper."
                                                }}
                                          />
                                    </div>

                                    {/* Question 25 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques25"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[24]} // Adjusted index
                                                userAnswerQN={UserData.ques25}
                                                contentsObj={{
                                                      Title: "The student decides to do a dissertation because",
                                                      AData: "he takes it to boost his GPA.",
                                                      BData: "he likes to develop more supportive details.",
                                                      CData: "he wants to conduct more interviews."
                                                }}
                                          />
                                    </div>

                                    {/* Question 26 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques26"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[25]} // Adjusted index
                                                userAnswerQN={UserData.ques26}
                                                contentsObj={{
                                                      Title: "The student thought the research paper was",
                                                      AData: "already completed.",
                                                      BData: "worth finishing.",
                                                      CData: "too complicated."
                                                }}
                                          />
                                    </div>

                                    {/* Question 27 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques27"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[26]} // Adjusted index
                                                userAnswerQN={UserData.ques27}
                                                contentsObj={{
                                                      Title: "The method of data collection was",
                                                      AData: "interviews",
                                                      BData: "lab studies.",
                                                      CData: "questionnaires."
                                                }}
                                          />
                                    </div>
                              </div>
                              <div className="Q-articles mt-5 font-bold">
                                    <h4 className='mb-2'>Questions 28-30 </h4>
                                    Complete the sentences below.<br /> <br />
                                    Write ONE WORD ONLY for each answer.<br /> <br />
                              </div>
                              <div className="Questions">
                                    {/* Question 28 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          First draft should be finished by the end of      <span className="Numbers">28</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques28"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[27]} // Adjusted index
                                                userAnswerQN={UserData.ques28}
                                          />
                                    </div>

                                    {/* Question 29 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          Dissertation should be registered with the    <span className="Numbers">29</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques29"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[28]} // Adjusted index
                                                userAnswerQN={UserData.ques29}
                                          />
                                          in the Department Office.
                                    </div>

                                    {/* Question 30 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          The student can get the relevant database from the          <span className="Numbers">30</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques30"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[29]} // Adjusted index
                                                userAnswerQN={UserData.ques30}
                                          />
                                          Office.
                                    </div>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-12-Section4.mp3?_=4") }}
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
                        <div className="Questions">
                              <h2 className="text-xl font-semibold mt-4">SECTION 4</h2>
                              <h3 className="text-lg font-semibold mt-2">Questions 31-40</h3>
                              <p className="mt-2">Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.</p>

                              {/* The role of sleep in humans and animals */}
                              <div className="mt-4">
                                    <h4 className="font-semibold">Importance of sleep in animals</h4>

                                    {/* Question 31 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          Compared to those without food, animals without sleep are more likely to suffer from
                                          <span className="Numbers">31</span><Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques31"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[30]} // Adjusted index
                                                userAnswerQN={UserData.ques31}
                                          />
                                    </div>

                                    {/* Question 32 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          Sleep is necessary for all animals, whether they are reptiles,
                                          <span className="Numbers">32</span><Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques32"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[31]} // Adjusted index
                                                userAnswerQN={UserData.ques32}
                                          />
                                          or fish.
                                    </div>

                                    <h4 className="font-semibold mt-4">Differences in animals’ sleep and reasons for their ways of resting</h4>

                                    {/* Question 33 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          Dolphins swim to the surface when sleeping, because they need to
                                          <span className="Numbers">33</span> <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques33"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[32]} // Adjusted index
                                                userAnswerQN={UserData.ques33}
                                          />
                                    </div>

                                    {/* Question 34 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          Birds are constantly          <span className="Numbers">34</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques34"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[33]} // Adjusted index
                                                userAnswerQN={UserData.ques34}
                                          />
                                          in the presence of numerous predators.
                                    </div>

                                    {/* Question 35 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          Horses do most of their sleeping standing up. Lying in one position for a long time could well injure a horse, because their  <span className="Numbers">35</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques35"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[34]} // Adjusted index
                                                userAnswerQN={UserData.ques35}
                                          />
                                          are delicate.
                                    </div>

                                    <h4 className="font-semibold mt-4">Potential problems encountering</h4>

                                    {/* Question 36 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          Animals can also have            <span className="Numbers">36</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques36"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[35]} // Adjusted index
                                                userAnswerQN={UserData.ques36}
                                          />
                                          , the same as humans.
                                    </div>

                                    <h4 className="font-semibold mt-4">Importance of sleep in humans</h4>

                                    {/* Question 37 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          It helps us to organise our      <span className="Numbers">37</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques37"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[36]} // Adjusted index
                                                userAnswerQN={UserData.ques37}
                                          />
                                          of the day.
                                    </div>

                                    {/* Question 38 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          It plays a key role in    <span className="Numbers">38</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques38"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[37]} // Adjusted index
                                                userAnswerQN={UserData.ques38}
                                          />
                                    </div>

                                    <h4 className="font-semibold mt-4">e.g.</h4>

                                    {/* Question 39 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          Because of the similar sleeping pattern to that in humans,    <span className="Numbers">39</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques39"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[38]} // Adjusted index
                                                userAnswerQN={UserData.ques39}
                                          />
                                          are studied in order to increase our knowledge of human physiology.
                                    </div>

                                    {/* Question 40 */}
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          Scientists choose to study the   <span className="Numbers">40</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques40"
                                                TestName="Actual-test-12"
                                                AnswerData={LAllAnswersData[39]} // Adjusted index
                                                userAnswerQN={UserData.ques40}
                                          />
                                          of the fruit fly in order to know the function of the human gene and understand developmental processes in humans.
                                    </div>
                              </div>
                        </div>



                  </div>


            </section >
      )
}



export default ListeningPage
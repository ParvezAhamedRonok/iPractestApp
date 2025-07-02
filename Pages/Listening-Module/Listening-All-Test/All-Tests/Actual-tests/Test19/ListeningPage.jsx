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
            ["19"], ["40 minutes", "forty minutes"], ["balcony"], ["tennis courts"], ["fish dishes"],
            ["piano"], ["Cretan garden"], ["helicopter"], ["fireworks"], ["cable car"],

            // Section 2
            ["B"], ["C"], ["B"], ["A"], ["A"], ["A"],
            ["popular"], ["tastes"], ["feedback"], ["speed"],

            // Section 3
            ["B"], ["C"], ["B"], ["C"], ["B"],
            ["A"], ["A"], ["D"], ["B"], ["E"],

            // Section 4
            ["genetic"], ["observation"], ["tools"], ["open"], ["stone"],
            ["symbols"], ["river"], ["density"], ["B"], ["A"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-19-Section1.mp3" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Listening Practice Test 19</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-19-Section1.mp3") }}
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
                              <h2 className="text-xl font-bold mb-4">SECTION 1</h2>
                              <p className="text-lg font-semibold">Questions 1-4</p>
                              <p className="mb-4">Complete the notes below.</p>
                              <p className="italic">Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.</p>

                              <div className="">
                                    <h3 className="text-lg font-bold mb-2">NOTES ON ISLAND HOTEL</h3>
                                    <p>
                                          <strong>Example</strong>
                                          <br /> Answer: <span className="font-semibold">double room</span>
                                    </p>

                                    <div className="mt-4">
                                          <h4 className="font-semibold">Time</h4>
                                          <ul className="list-disc list-inside">
                                                <li>The length of stay: approx <span className="font-semibold">2 weeks</span></li>
                                                <li>Starting date: <span className="font-semibold">25th April</span></li>
                                          </ul>
                                    </div>

                                    <div className="mt-4">
                                          <h4 className="font-semibold">Temperature</h4>
                                          <ul className="list-disc list-inside">
                                                <li className='flex flex-wrap'>Daytime: up to <span className='Numbers'>1</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques1"
                                                            TestName={"Actual-test-19"}
                                                            AnswerData={LAllAnswersData[0]}
                                                            userAnswerQN={UserData.ques1}
                                                      />°C</li>
                                                <li>Erratic weather</li>
                                          </ul>
                                    </div>

                                    <div className="mt-4">
                                          <h4 className="font-semibold">Transport</h4>
                                          <ul className="list-disc list-inside">
                                                <li>Pick-up service is provided.</li>
                                                <li className='flex-wrap flex'>Normally transferring to the airport takes about <span className='Numbers'>2</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques2"
                                                            TestName={"Actual-test-19"}
                                                            AnswerData={LAllAnswersData[1]}
                                                            userAnswerQN={UserData.ques2}
                                                      /></li>
                                          </ul>
                                    </div>

                                    <div className="mt-4">
                                          <h4 className="font-semibold">Facilities</h4>
                                          <ul className="list-disc list-inside">
                                                <li className='flex flex-wrap'>En-suite facilities and a <span className='Numbers'>3</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques3"
                                                            TestName={"Actual-test-19"}
                                                            AnswerData={LAllAnswersData[2]}
                                                            userAnswerQN={UserData.ques3}
                                                      /></li>
                                                <li>Gym and spa facilities</li>
                                                <li>A large outdoor swimming pool</li>
                                                <li>Three standard <span className='Numbers'>4</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques4"
                                                            TestName={"Actual-test-19"}
                                                            AnswerData={LAllAnswersData[3]}
                                                            userAnswerQN={UserData.ques4}
                                                      /></li>
                                          </ul>
                                    </div>
                              </div>
                        </div>



                        <div className="w-full overflow-auto">
                              <div className="border border-gray-400 p-2 text-sm">
                                    <h4 className=" font-bold border-b border-gray-400 p-2">Complete the table below</h4>
                                    <p className="p-2 border-b border-gray-400">Write <span className="font-bold">NO MORE THAN TWO WORDS</span> for each answer.</p>
                                    <table className="w-full border-collapse border border-gray-400">
                                          <thead>
                                                <tr className="bg-gray-200">
                                                      <th className="border border-gray-400 p-2">Day</th>
                                                      <th className="border border-gray-400 p-2">Entertainment activities</th>
                                                      <th className="border border-gray-400 p-2">Transportation</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr>
                                                      <td className="border border-gray-400 p-2">Tuesdays</td>
                                                      <td className="border border-gray-400 p-2 flex flex-wrap">• learning to make <span className='Numbers'>5</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques5"
                                                                  TestName={"Actual-test-19"}
                                                                  AnswerData={LAllAnswersData[4]}
                                                                  userAnswerQN={UserData.ques5}
                                                            /><br />• having a <span className='Numbers'>6</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques6"
                                                                  TestName={"Actual-test-19"}
                                                                  AnswerData={LAllAnswersData[5]}
                                                                  userAnswerQN={UserData.ques6}
                                                            /> in-house concert</td>
                                                      <td className="border border-gray-400 p-2">• mini bus</td>
                                                </tr>
                                                <tr>
                                                      <td className="border border-gray-400 p-2">Wednesdays</td>
                                                      <td className="border border-gray-400 p-2 flex flex-wrap">• enjoying mountain view<br />• exploring a tropical <span className='Numbers'>7</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques7"
                                                                  TestName={"Actual-test-19"}
                                                                  AnswerData={LAllAnswersData[6]}
                                                                  userAnswerQN={UserData.ques7}
                                                            /><br />• <span className='Numbers'>8</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques8"
                                                                  TestName={"Actual-test-19"}
                                                                  AnswerData={LAllAnswersData[7]}
                                                                  userAnswerQN={UserData.ques8}
                                                            /></td>
                                                      <td className="border border-gray-400 p-2">• shuttle bus</td>
                                                </tr>
                                                <tr>
                                                      <td className="border border-gray-400 p-2">Thursdays</td>
                                                      <td className="border border-gray-400 p-2 flex flex-wrap">• having a fancy dinner<br />• watching a spectacular display of <span className='Numbers'>9</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques9"
                                                                  TestName={"Actual-test-19"}
                                                                  AnswerData={LAllAnswersData[8]}
                                                                  userAnswerQN={UserData.ques9}
                                                            /></td>
                                                      <td className="border border-gray-400 p-2 flex flex-wrap"><span className='Numbers'>10</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques10"
                                                                  TestName={"Actual-test-19"}
                                                                  AnswerData={LAllAnswersData[9]}
                                                                  userAnswerQN={UserData.ques10}
                                                            /></td>
                                                </tr>
                                          </tbody>
                                    </table>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-19-Section2.mp3") }}
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
                                    <h4>Section 2 </h4> <br />
                                    Questions 11-14<br /><br />
                                    Choose the correct letter, A, B or C..<br /> <br />
                                    <h5>Online Exchange Business</h5> <br /> <br />
                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques11"
                                          TestName="Actual-test-19"
                                          AnswerData={LAllAnswersData[10]}
                                          userAnswerQN={UserData.ques11}
                                          contentsObj={{
                                                Title: "The website is organised by",
                                                AData: "family members.",
                                                BData: "friends",
                                                CData: "businessmen"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques12"
                                          TestName="Actual-test-19"
                                          AnswerData={LAllAnswersData[11]}
                                          userAnswerQN={UserData.ques12}
                                          contentsObj={{
                                                Title: "How long has the website been operated?",
                                                AData: "about 3 weeks",
                                                BData: "about 3 months",
                                                CData: "about 6 months"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques13"
                                          TestName="Actual-test-19"
                                          AnswerData={LAllAnswersData[12]}
                                          userAnswerQN={UserData.ques13}
                                          contentsObj={{
                                                Title: "How many registered users are there in the website?",
                                                AData: "1,000",
                                                BData: "1,500",
                                                CData: "2,000"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques14"
                                          TestName="Actual-test-19"
                                          AnswerData={LAllAnswersData[13]}
                                          userAnswerQN={UserData.ques14}
                                          contentsObj={{
                                                Title: "Which country has the most users in the website?",
                                                AData: "Ireland",
                                                BData: "UK",
                                                CData: "Canada"
                                          }}
                                    />
                              </div> <br /> <br />
                              <div className="Q-articles font-bold">
                                    <h4> Questions 15-16</h4><br />
                                    <h5>Which TWO things are most popular among users?</h5> <br /> <br />
                              </div>
                              <div className='Questions'>
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques15"
                                          TestName="Actual-test-19"
                                          AnswerData={LAllAnswersData[14]}
                                          userAnswerQN={UserData.ques15}
                                          contentsObj={{
                                                Title: "",
                                                AData: " children’s books",
                                                BData: " textbooks",
                                                CData: "businessmen"
                                          }}
                                    />
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques16"
                                          TestName="Actual-test-19"
                                          AnswerData={LAllAnswersData[15]}
                                          userAnswerQN={UserData.ques16}
                                          contentsObj={{
                                                Title: "",
                                                AData: "computer games",
                                                BData: "toys",
                                                CData: "tools"
                                          }}
                                    />
                              </div> <br />

                              <div className="">
                                    <h4 className="text-xl font-bold mb-4">Questions 17-20</h4>
                                    <p className="mb-2">Complete the sentences below.</p>
                                    <p className="font-semibold mb-4">Write ONE WORD ONLY for each answer.</p>

                                    <div className="space-y-4">
                                          <p className='flex flex-wrap'>The website will sort out <span className='Numbers'>17</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques17"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[16]}
                                                      userAnswerQN={UserData.ques17}
                                                /> items to help those who can’t decide what to exchange.</p>
                                          <p className='flex flex-wrap'>Do not bother because people’s <span className='Numbers'>18</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques18"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[17]}
                                                      userAnswerQN={UserData.ques18}
                                                /> are different.</p>
                                          <p className='flex flex-wrap'>Users will give <span className='Numbers'>19</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques19"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[18]}
                                                      userAnswerQN={UserData.ques19}
                                                /> on the completion of exchanges.</p>
                                    </div>

                                    <h3 className="text-lg font-bold mt-6">Criteria</h3>
                                    <ul className="list-disc list-inside mt-2 space-y-1">
                                          <li>the quality of the item</li>
                                          <li>the ease of communication</li>
                                          <li className='flex flex-wrap'>the <span className='Numbers'>20</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques20"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[19]}
                                                      userAnswerQN={UserData.ques20}
                                                /> of delivering</li>
                                    </ul>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-19-Section3.mp3") }}
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
                              <div className="Q-articles">
                                    <h4>PART 3 </h4> <br />
                                    Questions 21-26<br />
                                    Choose the correct letter, A, B or C.<br /> <br />
                                    <h5 className='mt-3 mb-3 text-center'>Reflective Journal Assignment</h5>
                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques21"
                                          TestName="Actual-test-19"
                                          AnswerData={LAllAnswersData[20]}
                                          userAnswerQN={UserData.ques21}
                                          contentsObj={{
                                                Title: "",
                                                AData: "topics he is going to talk about",
                                                BData: "study aims for the module",
                                                CData: "suggestions from others"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques22"
                                          TestName="Actual-test-19"
                                          AnswerData={LAllAnswersData[21]}
                                          userAnswerQN={UserData.ques22}
                                          contentsObj={{
                                                Title: "",
                                                AData: "a lot of friends to help her",
                                                BData: "several books that may be useful",
                                                CData: "sufficient resources showing that she is a good technology user"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques23"
                                          TestName="Actual-test-19"
                                          AnswerData={LAllAnswersData[22]}
                                          userAnswerQN={UserData.ques23}
                                          contentsObj={{
                                                Title: "",
                                                AData: "He worked as a waiter in a restaurant",
                                                BData: "He got an offer to lead a team",
                                                CData: "He became the chairman of the Student Union"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques24"
                                          TestName="Actual-test-19"
                                          AnswerData={LAllAnswersData[23]}
                                          userAnswerQN={UserData.ques24}
                                          contentsObj={{
                                                Title: "",
                                                AData: "do it by himself",
                                                BData: "find a tutor",
                                                CData: "listen to others"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques25"
                                          TestName="Actual-test-19"
                                          AnswerData={LAllAnswersData[24]}
                                          userAnswerQN={UserData.ques25}
                                          contentsObj={{
                                                Title: "",
                                                AData: "He thinks it is useless",
                                                BData: "He is looking forward to doing the assignment",
                                                CData: "He feels uncertain about it"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques26"
                                          TestName="Actual-test-19"
                                          AnswerData={LAllAnswersData[25]}
                                          userAnswerQN={UserData.ques26}
                                          contentsObj={{
                                                Title: "",
                                                AData: "self-awareness",
                                                BData: "mistakes",
                                                CData: "achievements"
                                          }}
                                    />


                              </div>
                              <div className="Q-articles mt-5">
                                    <h4 className='mb-2'>Questions 27-30 </h4>
                                    Questions 27-30<br />
                                    What is the woman’s attitude toward each of the following activities of study?<br /> <br />
                                    Choose FOUR answers from the box and write the correct letter, A-E, next to questions 27-30. <br /> <br />

                                    <div className='p-3'>
                                          <h4>Attitude</h4> <br />
                                          <p><span className='font-bold mr-2'>A</span> define a problem</p>
                                          <p><span className='font-bold mr-2'>B</span> independent learning</p>
                                          <p><span className='font-bold mr-2'>C</span> develop study skills</p>
                                          <p><span className='font-bold mr-2'>D</span> gain confidence</p>
                                          <p><span className='font-bold mr-2'>E</span> find it difficult</p>
                                    </div> <br />


                                    <div className="Questions">
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>27</span>
                                                <label htmlFor="ques27">writing an essay</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques27"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[26]}
                                                      userAnswerQN={UserData.ques27}
                                                // ExplainDataObj={{
                                                //     number: 1,
                                                //     Ans1: "",
                                                //     mainAns: "DW30 7YZ",
                                                //     hiddenWord: "Paragraph A, lines 4-5",
                                                //     hiddenWord2: "",
                                                //     hiddenWord3: "",
                                                //     keyWords: "",
                                                //     explain: "(Paragraph A, lines 4-5) Michael Krauss argues that linguistic diversity is important, stating, The world would be less beautiful and less interesting without linguistic diversity"
                                                // }}
                                                />
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>28</span>
                                                <label htmlFor="ques28"> taking exams</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques28"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[27]}
                                                      userAnswerQN={UserData.ques28}
                                                // ExplainDataObj={{
                                                //     number: 1,
                                                //     Ans1: "",
                                                //     mainAns: "DW30 7YZ",
                                                //     hiddenWord: "Paragraph A, lines 4-5",
                                                //     hiddenWord2: "",
                                                //     hiddenWord3: "",
                                                //     keyWords: "",
                                                //     explain: "(Paragraph A, lines 4-5) Michael Krauss argues that linguistic diversity is important, stating, The world would be less beautiful and less interesting without linguistic diversity"
                                                // }}
                                                />
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>29</span>
                                                <label htmlFor="ques29"> making class notes</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques29"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[28]}
                                                      userAnswerQN={UserData.ques29}
                                                // ExplainDataObj={{
                                                //     number: 1,
                                                //     Ans1: "",
                                                //     mainAns: "DW30 7YZ",
                                                //     hiddenWord: "Paragraph A, lines 4-5",
                                                //     hiddenWord2: "",
                                                //     hiddenWord3: "",
                                                //     keyWords: "",
                                                //     explain: "(Paragraph A, lines 4-5) Michael Krauss argues that linguistic diversity is important, stating, The world would be less beautiful and less interesting without linguistic diversity"
                                                // }}
                                                />
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>30</span>
                                                <label htmlFor="ques30">taking presentation notes</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques30"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[29]}
                                                      userAnswerQN={UserData.ques30}
                                                // ExplainDataObj={{
                                                //     number: 1,
                                                //     Ans1: "",
                                                //     mainAns: "DW30 7YZ",
                                                //     hiddenWord: "Paragraph A, lines 4-5",
                                                //     hiddenWord2: "",
                                                //     hiddenWord3: "",
                                                //     keyWords: "",
                                                //     explain: "(Paragraph A, lines 4-5) Michael Krauss argues that linguistic diversity is important, stating, The world would be less beautiful and less interesting without linguistic diversity"
                                                // }}
                                                />
                                          </div>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-19-Section4.mp3") }}
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
                              <div className="">
                                    <h2 className="text-xl font-bold mb-4">SECTION 4</h2>
                                    <h3 className="text-xl font-semibold mb-6">Questions 31-38</h3>
                                    <p className="mb-4">Complete the notes below.</p>
                                    <p className="mb-6">Write ONE WORD ONLY for each answer.</p>

                                    <h4 className="font-semibold mb-2">Chimpanzee behaviours</h4>
                                    <h5 className="font-bold mb-2">Species</h5>
                                    <ul className="list-disc pl-6 mb-4">
                                          <li>We can find Pan or Pan Troglodytes in West and Central Africa.</li>
                                          <li>The Bonobo or Pan Paniscus are found in Democratic Republic of Congo.</li>
                                    </ul>

                                    <h5 className="font-bold mb-2">Current research</h5>
                                    <ul className="list-disc pl-6 mb-4">
                                          <li className='flex flex-wrap'>rule out <span className='Numbers'>31</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques31"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[30]}
                                                      userAnswerQN={UserData.ques31}
                                                /> and biological factors</li>
                                          <li className='flex flex-wrap'>learn through <span className='Numbers'>32</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques32"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[31]}
                                                      userAnswerQN={UserData.ques32}
                                                /> of other chimps’ behaviour</li>
                                    </ul>

                                    <h5 className="font-bold mb-2">Discoveries</h5>
                                    <ul className="list-disc pl-6 mb-4">
                                          <li>The book The Third Chimpanzee by James Diamond discusses some physical features of chimpanzees.</li>
                                          <li className='flex flex-wrap'>The discovery reported by Jane Goodall suggests that chimpanzees know how to use <span className='Numbers'>33</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques33"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[32]}
                                                      userAnswerQN={UserData.ques33}
                                                /></li>
                                    </ul>

                                    <h5 className="font-bold mb-2">Chimpanzees in Senegal</h5>
                                    <ul className="list-disc pl-6 mb-4">
                                          <li>use spears sharpened with their teeth</li>
                                          <li className='flex flex-wrap'>can <span className='Numbers'>34</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques34"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[33]}
                                                      userAnswerQN={UserData.ques34}
                                                /> the shell of a coconut</li>
                                          <li className='flex flex-wrap'>use a <span className='Numbers'>35</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques35"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[34]}
                                                      userAnswerQN={UserData.ques35}
                                                /> hammer to crash nuts</li>
                                          <li className='flex flex-wrap'>are capable of learning <span className='Numbers'>36</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques36"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[35]}
                                                      userAnswerQN={UserData.ques36}
                                                /> and understanding human language</li>
                                    </ul>

                                    <h5 className="font-bold mb-2">Sub-species</h5>
                                    <ul className="list-disc pl-6 mb-4">
                                          <li className='flex flex-wrap'>Bonobos live on the other side of a <span className='Numbers'>37</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques37"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[36]}
                                                      userAnswerQN={UserData.ques37}
                                                /></li>
                                          <li className='flex flex-wrap'>Both of them are reducing alarmingly in population <span className='Numbers'>38</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques38"
                                                      TestName={"Actual-test-19"}
                                                      AnswerData={LAllAnswersData[37]}
                                                      userAnswerQN={UserData.ques38}
                                                /></li>
                                    </ul>
                              </div>
                        </div>



                        <div className="Questions mt-2">
                              <div className="Q-articles font-bold">
                                    <h4>  Questions 39-40 </h4> <br />
                                    Which TWO topics about chimpanzees will the students discuss next week?<br /><br />
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques39"
                                                TestName="Actual-test-19"
                                                AnswerData={LAllAnswersData[38]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques39}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "They are slower than human in different ways.",
                                                      BData: "They learn things by copying humans’ behaviour.",
                                                      CData: "were more interesting places."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques40"
                                                TestName="Actual-test-19"
                                                AnswerData={LAllAnswersData[39]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques40}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "They develop behaviours generation by generation.",
                                                      BData: " They have very strong ability of logical thinking.",
                                                      CData: "They could be modified to adapt to the environment."
                                                }}
                                          />

                                    </div>
                              </div>

                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
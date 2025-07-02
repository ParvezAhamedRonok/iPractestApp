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
            ["04196570156"], ["post"], ["39 dollars"], ["bed"], ["kitchen"], ["heater"],
            ["microwave"], ["airport"], ["49"], ["Australia"],

            // Section 2
            ["harvested"], ["opened"], ["cleaned"], ["expanded"], ["cooled"], ["sealed"],
            ["B"], ["D"], ["C"], ["A"],

            // Section 3
            ["A"], ["A"], ["C"], ["B"], ["C"], ["B"], ["A"], ["B"], ["F"], ["E"],

            // Section 4
            ["sun’s position"], ["animals"], ["religions"], ["the government"], ["North Africa"],
            ["varied"], ["temperature"], ["sandglasses", "sandglass"], ["limited"], ["time"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-16-Section1.mp3" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 16</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-16-Section1.mp3") }}
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
                              <h4 className="text-xl font-bold mb-4">SECTION 1</h4>
                              <p className="text-lg font-semibold">Questions 1-10</p>
                              <p className="mb-4">Complete the notes below.</p>
                              <p className="mb-4">Write <span className="">ONE WORD AND/OR A NUMBER</span> for each answer.</p>

                              <div className="space-y-3">
                                    <p><span className="">Car Rental Inquiry</span></p>
                                    <p><span className="">Example</span></p>
                                    <p>Nationality: <span className="font-semibold">American</span></p>
                                    <p className='flex flex-wrap'>Contact number: <span className="Numbers">1</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques1" TestName="Actual-test-16" AnswerData={LAllAnswersData[0]} userAnswerQN={UserData.ques1} /></p>
                                    <p className='flex flex-wrap'>Send written quote by: <span className="Numbers">2</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques2" TestName="Actual-test-16" AnswerData={LAllAnswersData[1]} userAnswerQN={UserData.ques2} /></p>
                                    <p className='flex flex-wrap'>Price for renting: <span className="Numbers">3</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques3" TestName="Actual-test-16" AnswerData={LAllAnswersData[2]} userAnswerQN={UserData.ques3} /> daily</p>
                              </div>

                              <div className="mt-4">
                                    <p className="font-semibold">Special requirements for the room:</p>
                                    <ul className="list-disc pl-6">
                                          <li className='flex flex-wrap'>an extra <span className="Numbers">4</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques4" TestName="Actual-test-16" AnswerData={LAllAnswersData[3]} userAnswerQN={UserData.ques4} /></li>
                                          <li className='flex flex-wrap'>most important facility: <span className="Numbers">5</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques5" TestName="Actual-test-16" AnswerData={LAllAnswersData[4]} userAnswerQN={UserData.ques5} /></li>
                                    </ul>
                              </div>

                              <div className="mt-4">
                                    <p className="font-semibold">Extra equipment:</p>
                                    <ul className="list-disc pl-6">
                                          <li className='flex flex-wrap'>they should have a <span className="Numbers">6</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques6" TestName="Actual-test-16" AnswerData={LAllAnswersData[5]} userAnswerQN={UserData.ques6} /></li>
                                          <li className='flex flex-wrap'>as well as a <span className="Numbers">7</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques7" TestName="Actual-test-16" AnswerData={LAllAnswersData[6]} userAnswerQN={UserData.ques7} /></li>
                                    </ul>
                              </div>

                              <div className="mt-4">
                                    <p className='flex flex-wrap'>Pick them up from the <span className="Numbers">8</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques8" TestName="Actual-test-16" AnswerData={LAllAnswersData[7]} userAnswerQN={UserData.ques8} /></p>
                                    <p className='flex flex-wrap'>The caravan driver’s age: <span className="Numbers">9</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques9" TestName="Actual-test-16" AnswerData={LAllAnswersData[8]} userAnswerQN={UserData.ques9} /></p>
                                    <p className='flex flex-wrap'>The registered licence issued in: <span className="Numbers">10</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques10" TestName="Actual-test-16" AnswerData={LAllAnswersData[9]} userAnswerQN={UserData.ques10} /></p>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-16-Section2.mp3") }}
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

                        <div className="w-full">
                              <h2 className="text-2xl font-bold mb-6">SECTION 2</h2>
                              <h3 className="text-lg font-semibold mb-4">Questions 11-16</h3>
                              <p className=" mb-4">Complete the flow-chart below.</p>
                              <p className=" font-semibold mb-4">Write <span className="text-red-500">ONE WORD ONLY</span> for each answer.</p>

                              <div className="w-full ">
                                    <h4 className='text-center'>Harvesting and Processing Cocoa Beans</h4> <br />
                                    <div className="flex flex-col items-center space-y-6">
                                          <div className="text-center p-4 border flex border-gray-400 rounded-lg w-full">
                                                Chocolate beans are <span className="Numbers">11</span> <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques11"
                                                      TestName={"Actual-test-16"}
                                                      AnswerData={LAllAnswersData[10]}
                                                      userAnswerQN={UserData.ques11}
                                                /> and then bags are shipped.
                                          </div>

                                          <div className="w-1 h-6 bg-gray-400"></div>

                                          <div className="text-center p-4 border flex border-gray-400 rounded-lg w-full">
                                                Bags are then <span className="Numbers">12</span> <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques12"
                                                      TestName={"Actual-test-16"}
                                                      AnswerData={LAllAnswersData[11]}
                                                      userAnswerQN={UserData.ques12}
                                                /> and weighed by machines.
                                          </div>

                                          <div className="w-1 h-6 bg-gray-400"></div>

                                          <div className="text-center p-4 flex border border-gray-400 rounded-lg w-full">
                                                Next, chocolate beans are <span className="Numbers">13</span> <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques13"
                                                      TestName={"Actual-test-16"}
                                                      AnswerData={LAllAnswersData[12]}
                                                      userAnswerQN={UserData.ques13}
                                                /> in a hopper.
                                          </div>

                                          <div className="w-1 h-6 bg-gray-400"></div>

                                          <div className="text-center p-4 border border-gray-400 rounded-lg w-full">
                                                After being roasted at a high temperature
                                          </div>

                                          <div className="w-1 h-6 bg-gray-400"></div>

                                          <div className="text-center p-4 flex border border-gray-400 rounded-lg w-full">
                                                Boiled chocolate beans are <span className="Numbers">14</span> <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques14"
                                                      TestName={"Actual-test-16"}
                                                      AnswerData={LAllAnswersData[13]}
                                                      userAnswerQN={UserData.ques14}
                                                /> and cracked.
                                          </div>

                                          <div className="w-1 h-6 bg-gray-400"></div>

                                          <div className="text-center p-4 flex border border-gray-400 rounded-lg w-full">
                                                Roasted beans need to be <span className="Numbers">15</span> <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques15"
                                                      TestName={"Actual-test-16"}
                                                      AnswerData={LAllAnswersData[14]}
                                                      userAnswerQN={UserData.ques15}
                                                />
                                          </div>

                                          <div className="w-1 h-6 bg-gray-400"></div>

                                          <div className="text-center flex p-4 border border-gray-400 rounded-lg w-full">
                                                Roasted beans are <span className="Numbers">16</span> <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques16"
                                                      TestName={"Actual-test-16"}
                                                      AnswerData={LAllAnswersData[15]}
                                                      userAnswerQN={UserData.ques16}
                                                /> in the pocket.
                                          </div>
                                    </div>
                              </div>
                        </div> <br />

                        <div className="">
                              <div className="Q-articles font-bold">
                                    <h4>Questions 16-20</h4><br />
                                    What does each type of coffee taste like?<br /> <br />
                                    Write the correct letter, A-D, next to Questions 17-20. <br /> <br />

                              </div>
                              <div className='p-2 rounded border-[2px] border-gray-300'>
                                    <p><span className='font-bold mr-2'>A</span> intense</p>
                                    <p><span className='font-bold mr-2'>B</span> mild</p>
                                    <p><span className='font-bold mr-2'>C</span>chocolaty</p>
                                    <p><span className='font-bold mr-2'>D</span> smoky</p> <br />
                              </div> <br />
                              <div className="Questions">
                                    <h4>Types of coffee</h4> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>17</span>  First Crack
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName={"Actual-test-16"}
                                                AnswerData={LAllAnswersData[16]}
                                                userAnswerQN={UserData.ques17}
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
                                          <span className='Numbers'>18</span> Green Beans
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName={"Actual-test-16"}
                                                AnswerData={LAllAnswersData[17]}
                                                userAnswerQN={UserData.ques18}
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
                                          <span className='Numbers'>19</span> French Roast
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName={"Actual-test-16"}
                                                AnswerData={LAllAnswersData[18]}
                                                userAnswerQN={UserData.ques19}
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
                                          <span className='Numbers'>20</span> Espresso Smoky
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName={"Actual-test-16"}
                                                AnswerData={LAllAnswersData[19]}
                                                userAnswerQN={UserData.ques20}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-16-Section3.mp3") }}
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
                                    <h4>SECTION 3 </h4> <br />
                                    Questions 21-26<br />
                                    Complete the table.<br />
                                    <h5 className='mt-3 mb-3'>Choose the correct letter, A, B or C.</h5>
                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques21"
                                          TestName="Actual-test-16"
                                          AnswerData={LAllAnswersData[20]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques21}
                                          contentsObj={{
                                                Title: "What is the thing that makes the Moa similar to dinosaur?",
                                                AData: "Both are of interest to the public.",
                                                BData: "Both are extinct at similar time.",
                                                CData: "Both left lots of fossil remains."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques22"
                                          TestName="Actual-test-16"
                                          AnswerData={LAllAnswersData[21]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques22}
                                          contentsObj={{
                                                Title: "What is the difference between Moa and other birds?",
                                                AData: "no wing bones",
                                                BData: "a long tail",
                                                CData: "a smaller head"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques23"
                                          TestName="Actual-test-16"
                                          AnswerData={LAllAnswersData[22]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques23}
                                          contentsObj={{
                                                Title: "What’s the special feature of their chicks?",
                                                AData: "They never return to the nests.",
                                                BData: "Most of them die within two months after birth.",
                                                CData: "They can find food by themselves."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques24"
                                          TestName="Actual-test-16"
                                          AnswerData={LAllAnswersData[23]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques24}
                                          contentsObj={{
                                                Title: "What is the tutor’s opinion on male hatching the eggs?",
                                                AData: "He doubts whether it is true or possible.",
                                                BData: "He thinks it may be true.",
                                                CData: "He can say with certainty that it is true."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques25"
                                          TestName="Actual-test-16"
                                          AnswerData={LAllAnswersData[24]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques25}
                                          contentsObj={{
                                                Title: "What is the male student’s response after hearing some people see a Moa recently?",
                                                AData: "He is surprised.",
                                                BData: "He is worried.",
                                                CData: "He is amused."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques26"
                                          TestName="Actual-test-16"
                                          AnswerData={LAllAnswersData[25]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques26}
                                          contentsObj={{
                                                Title: "Why did the Moa become extinct?",
                                                AData: "climate change",
                                                BData: "human interference",
                                                CData: "competitions with other animals"
                                          }}
                                    />

                              </div>

                              <div className="Q-articles mt-5">
                                    <h4 className='mb-2'>Questions 27-30 </h4>
                                    Choose FOUR answers from the box and write the correct letter, A-F, next to Questions 27-30..<br /> <br />

                                    <div className='p-3 border-2 border-gray-300'>
                                          <p><span className='font-bold mr-2'>A</span> the much taller female</p>
                                          <p><span className='font-bold mr-2'>B</span> less fossils left</p>
                                          <p><span className='font-bold mr-2'>C</span> the biggest eggs</p>
                                          <p><span className='font-bold mr-2'>D</span> feeding at night</p>
                                          <p><span className='font-bold mr-2'>E</span> better vocal sound</p>
                                          <p><span className='font-bold mr-2'>F</span> poor eyesight</p>
                                    </div>
                                    <br />


                                    <div className="Questions">
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>27</span>
                                                <label htmlFor="ques27">the North Island Giant Moa</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques27"
                                                      TestName={"Actual-test-16"}
                                                      AnswerData={LAllAnswersData[26]}
                                                      userAnswerQN={UserData.ques27}
                                                />
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>28</span>
                                                <label htmlFor="ques28">the Crested Moa</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques28"
                                                      TestName={"Actual-test-16"}
                                                      AnswerData={LAllAnswersData[27]}
                                                      userAnswerQN={UserData.ques28}
                                                />
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>29</span>
                                                <label htmlFor="ques29">the Stout-legged Moa</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques29"
                                                      TestName={"Actual-test-16"}
                                                      AnswerData={LAllAnswersData[28]}
                                                      userAnswerQN={UserData.ques29}
                                                />
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>30</span>
                                                <label htmlFor="ques30">the Eastern Moa</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques30"
                                                      TestName={"Actual-test-16"}
                                                      AnswerData={LAllAnswersData[29]}
                                                      userAnswerQN={UserData.ques30}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-16-Section4.mp3") }}
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

                        <div className="p-2">
                              <div className="space-y-8">
                                    {/* SECTION 4 */}
                                    <div>
                                          <h2 className="text-2xl font-bold mb-4">SECTION 4</h2>
                                          <p className="text-lg font-semibold mb-4">Questions 31-35</p>
                                          <p className="mb-4">Complete the notes below.</p>
                                          <p className="mb-8">Write NO MORE THAN TWO WORDS for each answer.</p>

                                          <div className="space-y-4">
                                                <p><strong>History of time-measurement</strong></p>
                                                <p>Primitive measurements by observing</p>

                                                <p>Two time keepers:</p>
                                                <ul className="list-disc pl-6 space-y-2">
                                                      <li className='flex flex-wrap'>• The  <span className='Numbers'>31</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques31"
                                                                  TestName={"Actual-test-16"}
                                                                  AnswerData={LAllAnswersData[30]}
                                                                  userAnswerQN={UserData.ques31}
                                                            /></li>
                                                      <li className='flex flex-wrap'>• Natural events, such as winds and rains, rivers flooding, plants flowering, and the cycles of breeding or <span className='Numbers'>32</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques32"
                                                                  TestName={"Actual-test-16"}
                                                                  AnswerData={LAllAnswersData[31]}
                                                                  userAnswerQN={UserData.ques32}
                                                            /> behaviour.</li>
                                                </ul>

                                                <p className="mt-4">Precise measurements</p>
                                                <p>They became important for organising activities for:</p>
                                                <ul className="list-disc pl-6 space-y-2">
                                                      <li className='flex flex-wrap'>• <span className='Numbers'>33</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques33"
                                                                  TestName={"Actual-test-16"}
                                                                  AnswerData={LAllAnswersData[32]}
                                                                  userAnswerQN={UserData.ques33}
                                                            /></li>
                                                      <li className='flex flex-wrap'>• <span className='Numbers'>34</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques34"
                                                                  TestName={"Actual-test-16"}
                                                                  AnswerData={LAllAnswersData[33]}
                                                                  userAnswerQN={UserData.ques34}
                                                            /></li>
                                                </ul>

                                                <p className="mt-4 flex flex-wrap">The oldest time keepers were discovered in Mesopotamia and <span className='Numbers'>35</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques35"
                                                            TestName={"Actual-test-16"}
                                                            AnswerData={LAllAnswersData[34]}
                                                            userAnswerQN={UserData.ques35}
                                                      /></p>
                                          </div>
                                    </div>

                                    <div>
                                          <p className="text-lg font-semibold mb-4">Questions 36-40</p>
                                          <p className="mb-4">Complete the table below.</p>
                                          <p className="mb-8">Write ONE WORD ONLY for each answer.</p>

                                          <div className="space-y-6">
                                                <table className="min-w-full table-auto text-sm">
                                                      <thead>
                                                            <tr>
                                                                  <th className="border-b px-4 py-2">Time Keeper</th>
                                                                  <th className="border-b px-4 py-2">Disadvantages</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            <tr>
                                                                  <td className="border-b px-4 py-2">The sundial</td>
                                                                  <td className="border-b px-4 py-2 flex flex-wrap">
                                                                        In different parts of the year, the time for day <span className='Numbers'>36</span>
                                                                        <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques36"
                                                                              TestName={"Actual-test-16"}
                                                                              AnswerData={LAllAnswersData[35]}
                                                                              userAnswerQN={UserData.ques36}
                                                                        />
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td className="border-b px-4 py-2">The clepsydra (Water clock)</td>
                                                                  <td className="border-b px-4 py-2 flex flex-wrap">
                                                                        The changing pressure and <span className='Numbers'>37</span>
                                                                        <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques37"
                                                                              TestName={"Actual-test-16"}
                                                                              AnswerData={LAllAnswersData[36]}
                                                                              userAnswerQN={UserData.ques37}
                                                                        /> were what the flow of water still relied on.
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td className="border-b px-4 py-2 flex flex-wrap">The <span className='Numbers'>38</span>
                                                                        <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques38"
                                                                              TestName={"Actual-test-16"}
                                                                              AnswerData={LAllAnswersData[37]}
                                                                              userAnswerQN={UserData.ques38}
                                                                        /></td>
                                                                  <td className="border-b px-4 py-2 flex-wrap flex">
                                                                        The time duration was <span className='Numbers'>39</span>
                                                                        <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques39"
                                                                              TestName={"Actual-test-16"}
                                                                              AnswerData={LAllAnswersData[38]}
                                                                              userAnswerQN={UserData.ques39}
                                                                        />
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td className="border-b px-4 py-2">Fire candle clock</td>
                                                                  <td className="border-b px-4 py-2 flex flex-wrap">
                                                                        The burning <span className='Numbers'>40</span>
                                                                        <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques40"
                                                                              TestName={"Actual-test-16"}
                                                                              AnswerData={LAllAnswersData[39]}
                                                                              userAnswerQN={UserData.ques40}
                                                                        /> or the rate of burning, was subject to the candle's wax.
                                                                  </td>
                                                            </tr>
                                                      </tbody>
                                                </table>
                                          </div>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
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
            ["August"], ["77.50", "77.5"], ["1 month"], ["breakfast"], ["towels"], ["books"], ["games"], ["internet"], ["shells"], ["bicycles"],

            // Section 2
            ["B"], ["A"], ["C"], ["A"], ["C"], ["B"], ["F"], ["C"], ["E"], ["A"],

            // Section 3
            ["weather"], ["electricity"], ["explode"], ["C"], ["B"], ["A"], ["B"], ["B"], ["C"], ["A"],

            // Section 4
            ["escape"], ["tuna"], ["storms"], ["strong"], ["coast"], ["young"], ["support"], ["cosmetics"], ["hospitality"], ["shipping"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-15-Section1.mp3" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 15</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-15-Section1.mp3") }}
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
                              <div className='p-3'>
                                    <h4 className='text-lg font-semibold mb-4'>SECTION 1<br />Questions 1-10</h4>
                                    <p className='text-sm mb-4'>Complete the notes below.<br />Write ONE WORD AND/OR A NUMBER for each answer.</p>

                                    <p className='text-sm mb-4 font-semibold'>Hotel Reservation</p>

                                    <p className='text-sm mb-4'>Example</p>
                                    <p className='text-sm mb-4'>Location: north from the coast</p>

                                    <ul className='list-none p-0'>
                                          <li className='p-2 flex'>
                                                • Four-bed room available in
                                                <div className='ml-2 flex'>
                                                      <span className='Numbers'>1</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques1"
                                                            TestName={"Actual-test-15"}
                                                            AnswerData={LAllAnswersData[0]}
                                                            userAnswerQN={UserData.ques1}
                                                      />
                                                </div>
                                          </li>

                                          <li className='p-2 flex'>
                                                • Room price:
                                          </li>
                                          <li className='p-2 flex ml-4'>
                                                • in high season: €
                                                <div className='ml-2 flex'>
                                                      <span className='Numbers'>2</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques2"
                                                            TestName={"Actual-test-15"}
                                                            AnswerData={LAllAnswersData[1]}
                                                            userAnswerQN={UserData.ques2}
                                                      />
                                                </div>
                                          </li>

                                          <li className='p-2 flex ml-4'>
                                                • cheaper if you booked
                                                <div className='ml-2 flex'>
                                                      <span className='Numbers'>3</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques3"
                                                            TestName={"Actual-test-15"}
                                                            AnswerData={LAllAnswersData[2]}
                                                            userAnswerQN={UserData.ques3}
                                                      />
                                                </div>
                                                in advance
                                          </li>

                                          <li className='p-2 flex'>
                                                • Meal included in price:
                                                <div className='ml-2 flex'>
                                                      <span className='Numbers'>4</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques4"
                                                            TestName={"Actual-test-15"}
                                                            AnswerData={LAllAnswersData[3]}
                                                            userAnswerQN={UserData.ques4}
                                                      />
                                                </div>
                                          </li>

                                          <li className='p-2 flex'>
                                                • Must bring your own:
                                                <div className='ml-2 flex'>
                                                      <span className='Numbers'>5</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques5"
                                                            TestName={"Actual-test-15"}
                                                            AnswerData={LAllAnswersData[4]}
                                                            userAnswerQN={UserData.ques5}
                                                      />
                                                </div>
                                          </li>

                                          <li className='p-2 flex'>
                                                • Hotel facilities:
                                          </li>
                                          <li className='p-2 flex ml-4'>
                                                • a lounge with a variety of
                                                <div className='ml-2 flex'>
                                                      <span className='Numbers'>6</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques6"
                                                            TestName={"Actual-test-15"}
                                                            AnswerData={LAllAnswersData[5]}
                                                            userAnswerQN={UserData.ques6}
                                                      />
                                                </div>
                                          </li>

                                          <li className='p-2 flex ml-4'>
                                                •
                                                <div className='ml-2 flex'>
                                                      <span className='Numbers'>7</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques7"
                                                            TestName={"Actual-test-15"}
                                                            AnswerData={LAllAnswersData[6]}
                                                            userAnswerQN={UserData.ques7}
                                                      />
                                                </div>
                                                room
                                          </li>

                                          <li className='p-2 flex ml-4'>
                                                •
                                                <div className='ml-2 flex'>
                                                      <span className='Numbers'>8</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques8"
                                                            TestName={"Actual-test-15"}
                                                            AnswerData={LAllAnswersData[7]}
                                                            userAnswerQN={UserData.ques8}
                                                      />
                                                </div>
                                          </li>

                                          <li className='p-2 flex'>
                                                • Activities available:
                                          </li>
                                          <li className='p-2 flex ml-4'>
                                                • collect
                                                <div className='ml-2 flex'>
                                                      <span className='Numbers'>9</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques9"
                                                            TestName={"Actual-test-15"}
                                                            AnswerData={LAllAnswersData[8]}
                                                            userAnswerQN={UserData.ques9}
                                                      />
                                                </div>
                                          </li>

                                          <li className='p-2 flex ml-4'>
                                                • hire
                                                <div className='ml-2 flex'>
                                                      <span className='Numbers'>10</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques10"
                                                            TestName={"Actual-test-15"}
                                                            AnswerData={LAllAnswersData[9]}
                                                            userAnswerQN={UserData.ques10}
                                                      />
                                                </div>
                                          </li>
                                    </ul>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-15-Section2.mp3") }}
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
                                    Questions 11-16<br /><br />
                                    Choose the correct letter, A, B, or C..<br /> <br />
                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques11"
                                          TestName="Actual-test-15"
                                          AnswerData={LAllAnswersData[10]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques11}
                                          contentsObj={{
                                                Title: "What is the purpose of the talk?",
                                                AData: "to welcome its new members",
                                                BData: "to commemorate its 10th anniversary",
                                                CData: "to celebrate the award it received recently"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques12"
                                          TestName="Actual-test-15"
                                          AnswerData={LAllAnswersData[11]}
                                          userAnswerQN={UserData.ques12}
                                          contentsObj={{
                                                Title: "What’s the audience of this speech?",
                                                AData: "journalists",
                                                BData: "local residents",
                                                CData: "school children"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques13"
                                          TestName="Actual-test-15"
                                          AnswerData={LAllAnswersData[12]}
                                          userAnswerQN={UserData.ques13}
                                          contentsObj={{
                                                Title: "Why is the speaker most proud of the skating rink?",
                                                AData: "Because two world champions have been trained there.",
                                                BData: "Because people in this area are fitter than the rest of the country.",
                                                CData: "Because they have encouraged local school children to participate more in sports."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques14"
                                          TestName="Actual-test-15"
                                          AnswerData={LAllAnswersData[13]}
                                          userAnswerQN={UserData.ques14}
                                          contentsObj={{
                                                Title: "The complex has recently opened a new venue for",
                                                AData: "the unemployed.",
                                                BData: "mothers with babies.",
                                                CData: "pensioners"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques15"
                                          TestName="Actual-test-15"
                                          AnswerData={LAllAnswersData[14]}
                                          userAnswerQN={UserData.ques15}
                                          contentsObj={{
                                                Title: "What does the complex plan to do next year?",
                                                AData: "extend opening hours",
                                                BData: "expand the space",
                                                CData: "sell fitness equipment"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques16"
                                          TestName="Actual-test-15"
                                          AnswerData={LAllAnswersData[15]}
                                          userAnswerQN={UserData.ques16}
                                          contentsObj={{
                                                Title: "What does the complex encourage people to do?",
                                                AData: "become a coach",
                                                BData: "be on the committee",
                                                CData: "work as volunteers"
                                          }}
                                    />

                              </div> <br />


                              <div className="Q-articles font-bold">
                                    <h4>Questions 17-20</h4>
                                    Choose FOUR answers from the box and write the correct letter, A-G, next to Questions 17-20.<br /><br />
                                    <div className='p-1 border-[2px] border-gray-400'>
                                          <p><span className='font-bold mr-2'>A</span> A one-on-one coach is bookable.</p>
                                          <p><span className='font-bold mr-2'>B</span> It is featured in a TV drama.</p>
                                          <p><span className='font-bold mr-2'>C</span> It is beneficial for young people.</p>
                                          <p><span className='font-bold mr-2'>D</span> It is only available for women sometimes.</p>
                                          <p><span className='font-bold mr-2'>E</span> It is the largest in the country.</p>
                                          <p><span className='font-bold mr-2'>F</span> It can be booked for parties.</p>
                                          <p><span className='font-bold mr-2'>G</span> It is a place to hold courses for school children.</p>
                                          <br /> <br />
                                          <h6>Schedule of Repairs</h6><br />
                                    </div>

                              </div>
                              <div className="Questions">
                                    <h4>Sports facilities</h4> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>17</span>Swimming pool
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName={"Actual-test-15"}
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
                                          <span className='Numbers'>18</span>Climbing wall
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName={"Actual-test-15"}
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
                                          <span className='Numbers'>19</span>  Skating rink
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName={"Actual-test-15"}
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
                                          <span className='Numbers'>20</span>Gym
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName={"Actual-test-15"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-15-Section3.mp3") }}
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
                              <div className="Q-articles font-bold">
                                    <h4>SECTION 3</h4> <br />
                                    Questions 21-23<br />
                                    Complete the table below.<br /><br />
                                    Write ONE WORD ONLY for each answer.<br /><br />
                              </div>
                              <div className="Questions">
                                    <h5 className='text-center'>Research about different energy-saving innovations</h5>
                                    <div className="flex border-[2px] border-black p-3 w-full">
                                          <div className="w-1/2 text-justify pr-1">Kites in Germany</div>
                                          <div className="w-1/2 text-justify pl-1  flex flex-wrap">
                                                used in different <span className='Numbers'>21</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques21"
                                                      TestName={"Actual-test-15"}
                                                      AnswerData={LAllAnswersData[20]}
                                                      userAnswerQN={UserData.ques21}
                                                /> conditions to reduce the emission of toxic gas
                                          </div>
                                    </div>
                                    <div className="flex border-[2px] border-black p-3 w-full">
                                          <div className="w-1/2 text-justify pr-1">Vehicles in America</div>
                                          <div className="w-1/2 text-justify pl-1  flex flex-wrap">
                                                powered by <span className='Numbers'>22</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques22"
                                                      TestName={"Actual-test-15"}
                                                      AnswerData={LAllAnswersData[21]}
                                                      userAnswerQN={UserData.ques22}
                                                />
                                          </div>
                                    </div>
                                    <div className="flex border-[2px] border-black p-3 w-full">
                                          <div className="w-1/2 text-justify pr-1">Gas canister in South Africa</div>
                                          <div className="w-1/2 text-justify pl-1  flex flex-wrap">
                                                invented to reduce its chances to  <span className='Numbers'>23</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques23"
                                                      TestName={"Actual-test-15"}
                                                      AnswerData={LAllAnswersData[22]}
                                                      userAnswerQN={UserData.ques23}
                                                />
                                          </div>
                                    </div>

                              </div> <br />
                              <div className="">
                                    <h4 className='mb-2'>Questions 24-25 </h4>
                                    <h5>Which TWO types of interviewees do Greg and Syria choose to do the survey?</h5> <br />
                                    <div className="Questions">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques24"
                                                TestName="Actual-test-15"
                                                AnswerData={LAllAnswersData[23]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques24}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: " staff on campus",
                                                      BData: "professors.",
                                                      CData: "local residents"
                                                }}
                                          />
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques25"
                                                TestName="Actual-test-15"
                                                AnswerData={LAllAnswersData[24]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques25}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "companies",
                                                      BData: "university students",
                                                      CData: "are expected."
                                                }}
                                          />
                                    </div>
                              </div> <br /> <br />
                              <div className="Q-articles font-bold">
                                    <h4>Questions 26-30</h4> <br />
                                    Choose the correct letter, A, B, or C.<br /> <br />
                              </div>

                              <div className="Questions">
                                    {/* Question 26 */}
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques26"
                                          TestName="Actual-test-15"
                                          AnswerData={LAllAnswersData[25]}
                                          userAnswerQN={UserData.ques26}
                                          contentsObj={{
                                                Title: "What does Syria think about renewable energy?",
                                                AData: "Most people know very little about renewable energy.",
                                                BData: "The general public can distinguish different kinds of renewable energy.",
                                                CData: "The majority of people feel the need to replace fossil fuels with renewable energy."
                                          }}
                                    />

                                    {/* Question 27 */}
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques27"
                                          TestName="Actual-test-15"
                                          AnswerData={LAllAnswersData[26]}
                                          userAnswerQN={UserData.ques27}
                                          contentsObj={{
                                                Title: "What do the speakers say about modern windmills?",
                                                AData: "They can be used to pump water from wells.",
                                                BData: "The location to build them should be carefully chosen.",
                                                CData: "Farmers use them to grind grain."
                                          }}
                                    />

                                    {/* Question 28 */}
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques28"
                                          TestName="Actual-test-15"
                                          AnswerData={LAllAnswersData[27]}
                                          userAnswerQN={UserData.ques28}
                                          contentsObj={{
                                                Title: "What aspect of traditional fuels are they going to address?",
                                                AData: "How to avoid fossil fuels from being depleted.",
                                                BData: "The possible future of traditional resources.",
                                                CData: "How to prevent pollution of traditional resources."
                                          }}
                                    />

                                    {/* Question 29 */}
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques29"
                                          TestName="Actual-test-15"
                                          AnswerData={LAllAnswersData[28]}
                                          userAnswerQN={UserData.ques29}
                                          contentsObj={{
                                                Title: "What does Greg say about nuclear plants?",
                                                AData: "They are cleaner and less expensive than fossil fuel.",
                                                BData: "It is the best way to fight climate change.",
                                                CData: "Few people think they are safe."
                                          }}
                                    />

                                    {/* Question 30 */}
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques30"
                                          TestName="Actual-test-15"
                                          AnswerData={LAllAnswersData[29]}
                                          userAnswerQN={UserData.ques30}
                                          contentsObj={{
                                                Title: "What does Syria think of hydrogen fuel?",
                                                AData: "The price of it will drop eventually.",
                                                BData: "It entails environmental problems.",
                                                CData: "The benefits of it overweigh its high cost."
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-15-Section4.mp3") }}
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

                        <div className="w-full p-2">
                              <h4 className="text-2xl font-bold  mb-4">SECTION 4</h4>
                              <h3 className="text-xl font-semibold mb-4">Questions 31-40</h3>
                              <p className="text-lg mb-4">Complete the notes below.</p>
                              <p className="text-lg mb-6">Write ONE WORD ONLY for each answer.</p>

                              <div className="space-y-6">
                                    <h4 className="text-xl font-semibold">Fish Farming</h4>
                                    <ul className="list-decimal pl-6 space-y-2">
                                          <li className="text-sm flex flex-wrap">
                                                Local fish farmers are afraid that genetically modified fish will{' '}
                                                <span className='Numbers'>31</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques31"
                                                      TestName={"Actual-test-15"}
                                                      AnswerData={LAllAnswersData[30]}
                                                      userAnswerQN={UserData.ques31}

                                                /> into the sea.
                                          </li>
                                          <li className="text-sm flex flex-wrap">
                                                Like to breed fish with special features, like  <span className='Numbers'>32</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques32"
                                                      TestName={"Actual-test-15"}
                                                      AnswerData={LAllAnswersData[31]}
                                                      userAnswerQN={UserData.ques32}

                                                /> .
                                          </li>
                                          <li className="text-sm flex flex-wrap">
                                                Other solutions:
                                                <ul className="list-disc pl-6 space-y-1">
                                                      <li>To build some cages to prevent the fish from  <span className='Numbers'>33</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques33"
                                                                  TestName={"Actual-test-15"}
                                                                  AnswerData={LAllAnswersData[32]}
                                                                  userAnswerQN={UserData.ques33}

                                                            /> .</li>
                                                      <li>To use  <span className='Numbers'>34</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques34"
                                                                  TestName={"Actual-test-15"}
                                                                  AnswerData={LAllAnswersData[33]}
                                                                  userAnswerQN={UserData.ques34}

                                                            />  nets to support the frames of the cages.</li>
                                                </ul>
                                          </li>
                                    </ul>

                                    <h4 className="text-xl font-semibold">Problems facing the local fishermen:</h4>
                                    <ul className="list-decimal pl-6 space-y-2">
                                          <li className="text-sm flex flex-wrap">
                                                Lack of land on the  <span className='Numbers'>35</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques35"
                                                      TestName={"Actual-test-15"}
                                                      AnswerData={LAllAnswersData[34]}
                                                      userAnswerQN={UserData.ques35}

                                                /> .
                                          </li>
                                          <li className="text-sm flex flex-wrap">
                                                Lack of  <span className='Numbers'>36</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques36"
                                                      TestName={"Actual-test-15"}
                                                      AnswerData={LAllAnswersData[35]}
                                                      userAnswerQN={UserData.ques36}

                                                />  fish.
                                          </li>
                                    </ul>

                                    <h4 className="text-xl font-semibold">Initiatives taken by the government:</h4>
                                    <ul className="list-decimal pl-6 space-y-2">
                                          <li className="text-sm flex flex-wrap">
                                                Encourages fish farmers to  <span className='Numbers'>37</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques37"
                                                      TestName={"Actual-test-15"}
                                                      AnswerData={LAllAnswersData[36]}
                                                      userAnswerQN={UserData.ques37}

                                                />  local fish farming business.
                                          </li>
                                          <li className="text-sm flex flex-wrap">
                                                Helps fish farmers to sell seaweed and oyster:
                                                <ul className="list-disc pl-6 space-y-1">
                                                      <li>Seaweed can be used to make  <span className='Numbers'>38</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques38"
                                                                  TestName={"Actual-test-15"}
                                                                  AnswerData={LAllAnswersData[37]}
                                                                  userAnswerQN={UserData.ques38}

                                                            /> .</li>
                                                      <li>Oyster is a source of seafood which can supply local  <span className='Numbers'>39</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques39"
                                                                  TestName={"Actual-test-15"}
                                                                  AnswerData={LAllAnswersData[38]}
                                                                  userAnswerQN={UserData.ques39}

                                                            />  industry.</li>
                                                </ul>
                                          </li>
                                          <li className="text-sm flex flex-wrap">
                                                Saves local fishing business by encouraging aquaculture, recreation and  <span className='Numbers'>40</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques40"
                                                      TestName={"Actual-test-15"}
                                                      AnswerData={LAllAnswersData[39]}
                                                      userAnswerQN={UserData.ques40}

                                                /> .
                                          </li>
                                    </ul>
                              </div>
                        </div>



                  </div>


            </section >
      )
}



export default ListeningPage
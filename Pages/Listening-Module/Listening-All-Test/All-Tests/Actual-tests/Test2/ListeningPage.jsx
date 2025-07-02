"use client";
import React, { useRef } from 'react'
import "../../../Styles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import Image from 'next/image';
import { useStateContext } from "@/contexts/ContextProvider";
import Select_input from '../../Inputs/Select_input';
import Text_inputs from '../../Inputs/Text_inputs';
import { makeEditableAndHighlight } from '@/components/Reading-Module/Reading-All-Tests/Important/TextChangeFunc';




function ListeningPage({ handleValueChange, AllAnswersData, UserData }) {
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
            ["Practical", "practical"],
            ["Pizza", "pizza"],
            ["light walking", "Light walking"],
            ["Pine Park", "pine park"],
            ["Fruit juice", "fruit juice"],
            ["B"], ["I"], ["C"], ["B"], ["I"],
            ["Padded", "padded"],
            ["Corners", "corners"],
            ["Special skill", "special skill"],
            ["Learning toys", "learning toys"],
            ["Disinfec", "disinfec"],
            ["Germs", "germs"],
            ["C"], ["A"], ["C"], ["B"],
            ["21 Topic", "tweenty topics", "Tweenty topics"],
            ["Current", "current"],
            ["Thesis", "therir"],
            ["Outline", "outline"],
            ["Progress", "progress"],
            ["Aspects", "aspects"],
            ["Real life", "real life"],
            ["Necessity", "necessity"],
            ["Style guide", "style guide"],
            ["10%", "ten percent", "Ten percent"],
            ["A"], ["B"], ["C"],
            ["Revolution", "revolution"],
            ["Sik", "sik"],
            ["Attention", "attention"],
            ["Bruno", "bruno"],
            ["Motion", "motion"],
            ["Bible", "bible"],
            ["20%", "tweenty percent", "Tweenty percent"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-02-Section1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 02</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>

                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-02-Section1.mp3?_=1") }}
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
                                    <h5>PART 1 </h5> <br />
                                    Questions 1-5 <br />
                                    Complete the sentences. <br />
                                    Write NO MORE THAN TWO WORDS for each answer. <br />
                              </div>
                              <div className="Q-question">
                                    <h5 className='text-start mt-2 text-inherit'>Example</h5> <br />
                                    <h5 className='text-start mt-2 text-inherit'>Peter consumes far too much soft drink</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> Peter and Mary’s diet will be both sensible and   </label><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>1</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques1"
                                                TestName={"Actual-test-2"}
                                                AnswerData={LAllAnswersData[0]}
                                                userAnswerQN={UserData.ques1}
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
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">Every two months, they can eat </label>
                                          <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>2</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques2"
                                                TestName={"Actual-test-2"}
                                                AnswerData={LAllAnswersData[1]}
                                                userAnswerQN={UserData.ques2}
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
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">On Saturdays, they will go </label><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>3</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques3"
                                                TestName={"Actual-test-2"}
                                                AnswerData={LAllAnswersData[2]}
                                                userAnswerQN={UserData.ques3}
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

                                    </div><br /> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> This coming Saturday, they will go to    </label><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>4</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques4"
                                                TestName={"Actual-test-2"}
                                                AnswerData={LAllAnswersData[3]}
                                                userAnswerQN={UserData.ques4}
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
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">In every meal, there will be         </label><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>5</span>

                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques5"
                                                TestName={"Actual-test-2"}
                                                AnswerData={LAllAnswersData[4]}
                                                userAnswerQN={UserData.ques5}
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

                                    </div> <br /> <br />

                                    <div className="Q-articles">
                                          <h5>Questions 6-10</h5> <br />
                                          Choose the correct letter, C, I, or B.<br />
                                    </div>

                                    <div className="Questions">
                                          <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                                                <h5>Peter’s opinion</h5>
                                                <h5>Mary’s opinion</h5>
                                          </div>
                                          <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                                                <h5>Tuesdays</h5>
                                                <h5>B</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>6</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques6"
                                                            TestName={"Actual-test-2"}
                                                            AnswerData={LAllAnswersData[5]}
                                                            userAnswerQN={UserData.ques6}
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
                                          <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                                                <h5>Thursdays</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>7</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques7"
                                                            TestName={"Actual-test-2"}
                                                            AnswerData={LAllAnswersData[6]}
                                                            userAnswerQN={UserData.ques7}
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
                                                <div className="question flex flex-wrap gap-2">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>8</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques8"
                                                            TestName={"Actual-test-2"}
                                                            AnswerData={LAllAnswersData[7]}
                                                            userAnswerQN={UserData.ques8}
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

                                          <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                                                <h5>Sundays</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>9</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques9"
                                                            TestName={"Actual-test-2"}
                                                            AnswerData={LAllAnswersData[8]}
                                                            userAnswerQN={UserData.ques9}
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
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>10</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques10"
                                                            TestName={"Actual-test-2"}
                                                            AnswerData={LAllAnswersData[9]}
                                                            userAnswerQN={UserData.ques10}
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

                                          <div className='p-3'>
                                                <p><span className='font-bold mr-2'>A</span> Chocolate</p>
                                                <p><span className='font-bold mr-2'>I</span>Ice-cream</p>
                                                <p><span className='font-bold mr-2'>C</span>Biscuits</p>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-02-Section2.mp3?_=2") }}
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
                                    <h5>PART 2 </h5> <br />
                                    Complete the table.<br /><br />
                                    Write NO MORE THAN TWO WORDS for each answer. <br /> <br />
                                    Advantages of Stanfield Childcare Centre <br /> <br />
                              </div>


                              <div className="Questions">
                                    <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                                          <h5>Detail</h5>
                                          <h5>Another Detail</h5>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                                          <h5>1</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <label htmlFor="ques11">Walls are  </label><span className='Numbers'>11</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques11"
                                                      TestName={"Actual-test-2"}
                                                      AnswerData={LAllAnswersData[10]}
                                                      userAnswerQN={UserData.ques11}
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
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <label htmlFor="ques12">includes the </label><span className='Numbers'>12</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques12"
                                                      TestName={"Actual-test-2"}
                                                      AnswerData={LAllAnswersData[11]}
                                                      userAnswerQN={UserData.ques12}
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
                                    <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                                          <h5>2</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <label htmlFor="ques13">Teachers are able to teach a </label><span className='Numbers'>13</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques13"
                                                      TestName={"Actual-test-2"}
                                                      AnswerData={LAllAnswersData[12]}
                                                      userAnswerQN={UserData.ques13}
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
                                          <div className="question flex flex-wrap gap-2">
                                                <label htmlFor="ques14">There are many special  </label><span className='Numbers'>14</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques14"
                                                      TestName={"Actual-test-2"}
                                                      AnswerData={LAllAnswersData[13]}
                                                      userAnswerQN={UserData.ques14}
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
                                    <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                                          <h5>3</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                They <span className='Numbers'>15</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques15"
                                                      TestName={"Actual-test-2"}
                                                      AnswerData={LAllAnswersData[14]}
                                                      userAnswerQN={UserData.ques15}
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
                                                Surfaces daily.
                                          </div>
                                          <div className="question flex flex-wrap gap-2">
                                                procedures to limit the spread of <span className='Numbers'>16</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques16"
                                                      TestName={"Actual-test-2"}
                                                      AnswerData={LAllAnswersData[15]}
                                                      userAnswerQN={UserData.ques16}
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


                              <div className="Q-articles p-3 font-bold">
                                    Questions 17-20.<br /><br />
                                    Choose the correct letter, A, B, or C. <br />
                              </div>
                              <div className='p-3'>
                                    <p><span className='font-bold mr-2'>A</span>  Andrea</p>
                                    <p><span className='font-bold mr-2'>B</span>Bella</p>
                                    <p><span className='font-bold mr-2'>C</span> Cathy</p>
                              </div>

                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>17</span>
                                          <label htmlFor="ques17"> has her own children?</label>
                                          <select name="ques17" id="ques17" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && UserData.ques17 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-2" && UserData.ques17 != "" && UserData.ques17 == "C" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-2" && UserData.ques17 != "C" ? "(C)" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>18</span>
                                          <label htmlFor="ques18">often sleeps at the center?</label>
                                          <select name="ques18" id="ques18" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && UserData.ques18 != "A" && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-2" && UserData.ques18 != "" && UserData.ques18 == "A" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-2" && UserData.ques18 != "A" ? "(A)" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>19</span>
                                          <label htmlFor="ques19"> is good with shy children?</label>
                                          <select name="ques19" id="ques19" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && UserData.ques19 != "C" && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-2" && UserData.ques19 != "" && UserData.ques19 == "C" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-2" && UserData.ques19 != "C" ? "(C)" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>20</span>
                                          <label htmlFor="ques20"> is a good cook?</label>
                                          <select name="ques20" id="ques20" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-2" && UserData.ques20 != "B" && "text-red-600"}
                                                ${ListeningShowAnswer == "Actual-test-2" && UserData.ques20 != "" && UserData.ques20 == "B" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-2" && UserData.ques20 != "B" ? "(B)" : ""}</i>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-02-Section3.mp3?_=3") }}
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
                                    <h5>PART 3 </h5> <br />
                                    Questions 21 – 25<br />
                                    Complete the flowchart. <br />  <br />
                                    Write ONE WORD ONLY for each answer..<br /> <br />
                              </div>
                              <div className="Questions p-3 w-full grid justify-center align-middle">
                                    <h6>Foundation for Essay Writing</h6> <br /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques21">Decide</label>
                                          <span className='Numbers'>21</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques21"
                                                TestName={"Actual-test-2"}
                                                AnswerData={LAllAnswersData[20]}
                                                userAnswerQN={UserData.ques21}
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
                                          <p> you like.</p>
                                    </div>
                                    <AiOutlineArrowDown className='test-4xl' /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques22">Focus on </label>
                                          <span className='Numbers'>22</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques22"
                                                TestName={"Actual-test-2"}
                                                AnswerData={LAllAnswersData[21]}
                                                userAnswerQN={UserData.ques22}
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
                                          <p> area of interest.</p>
                                    </div>
                                    <AiOutlineArrowDown className='test-4xl' /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques23">Write</label>
                                          <span className='Numbers'>23</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques23"
                                                TestName={"Actual-test-2"}
                                                AnswerData={LAllAnswersData[22]}
                                                userAnswerQN={UserData.ques23}
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
                                          <p> statement.</p>
                                    </div>
                                    <AiOutlineArrowDown className='test-4xl' /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques24">Create</label>
                                          <span className='Numbers'>24</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques24"
                                                TestName={"Actual-test-2"}
                                                AnswerData={LAllAnswersData[23]}
                                                userAnswerQN={UserData.ques24}
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
                                    <AiOutlineArrowDown className='test-4xl' /> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <label htmlFor="ques25">Ensure this </label>
                                          <span className='Numbers'>25</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques25"
                                                TestName={"Actual-test-2"}
                                                AnswerData={LAllAnswersData[24]}
                                                userAnswerQN={UserData.ques25}
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
                                          <p>clearly.</p>
                                    </div>
                              </div>
                              <div className="Q-articles font-bold mt-2">
                                    <h5 className='font-bold '>Questions 26-30</h5> <br />
                                    Complete the summary.<br />
                                    Write NO MORE THAN TWO WORDS OR A NUMBER for each answer. <br />  <br />
                              </div>
                              <div className="Questions">
                                    <div className='flex flex-wrap mb-2'>
                                          There are several
                                          <span className='Numbers'>26</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques26"
                                                TestName={"Actual-test-2"}
                                                AnswerData={LAllAnswersData[25]}
                                                userAnswerQN={UserData.ques26}
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
                                          involved in producing a good essay. The writer must think independently and give

                                          <span className='Numbers'>27</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques27"
                                                TestName={"Actual-test-2"}
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
                                          examples as support, each one with a reference (which is a

                                          <span className='Numbers'>28</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques28"
                                                TestName={"Actual-test-2"}
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
                                          ). The formatting must follow the

                                          <span className='Numbers'>29</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques29"
                                                TestName={"Actual-test-2"}
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
                                          issued by the university, as well as the word count decided by the lecturer, although it can vary by
                                          <span className='Numbers'>30</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques30"
                                                TestName={"Actual-test-2"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-02-Section4.mp3?_=4") }}
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
                              <div className="Q-articles font-bold">
                                    <h5>PART 4 </h5> <br />
                                    Questions 31-33 <br />
                                    Choose the correct letter, A, B, or C.<br />
                              </div>

                              <div className="Questions mt-3">
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques31"
                                                TestName="Actual-test-2"
                                                AnswerData={LAllAnswersData[30]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques31}
                                                contentsObj={{
                                                      Title: "Geocentrism",  // Title text
                                                      AData: "has a long history.",
                                                      BData: "is similar to heliocentrism.",
                                                      CData: "took some time to be deduced."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques32"
                                                TestName="Actual-test-2"
                                                AnswerData={LAllAnswersData[31]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques32}
                                                contentsObj={{
                                                      Title: "Heliocentrism",  // Title text
                                                      AData: "was realised only recently.",
                                                      BData: "was not generally accepted.",
                                                      CData: "fitted the views of the church."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques33"
                                                TestName="Actual-test-2"
                                                AnswerData={LAllAnswersData[32]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques33}
                                                contentsObj={{
                                                      Title: "The night sky",  // Title text
                                                      AData: "is relatively simple.",
                                                      BData: "remains basically the same.",
                                                      CData: "was once used for navigation."
                                                }}
                                          />

                                    </div>

                              </div>
                              <div className="Q-articles font-bold">
                                    <h5>Questions 34-40</h5> <br />
                                    Complete the notes. <br />
                                    Write ONE WORD OR A NUMBER for each answer..<br />
                              </div>
                              <div className="Questions p-2 mt-3">
                                    <div className='w-full grid grid-cols-2 border-[1px] border-gray-400'>
                                          <h5 className='m-auto'>Nicolaus Copernicus</h5>
                                          <div className="question mt-2 flex flex-wrap ">
                                                <label htmlFor="ques34">started the Copernican  </label>
                                                <span className='Numbers'>34</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques34"
                                                      TestName={"Actual-test-2"}
                                                      AnswerData={LAllAnswersData[33]}
                                                      userAnswerQN={UserData.ques34}
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

                                                <label htmlFor="ques35">his book published the year he was</label>
                                                <span className='Numbers'>35</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques35"
                                                      TestName={"Actual-test-2"}
                                                      AnswerData={LAllAnswersData[34]}
                                                      userAnswerQN={UserData.ques35}
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
                                                <p>and then passed away This book generated little</p>

                                                <span className='Numbers'>36</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques36"
                                                      TestName={"Actual-test-2"}
                                                      AnswerData={LAllAnswersData[35]}
                                                      userAnswerQN={UserData.ques36}
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
                                    <div className='w-full p-3  grid grid-cols-2  border-[1px] border-gray-400'>
                                          <h5 className='m-auto'>Other scientists</h5>
                                          <div className="question mt-2 flex flex-wrap ">
                                                <label htmlFor="ques37">Galileo was persecuted.</label>
                                                <span className='Numbers'>37</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques37"
                                                      TestName={"Actual-test-2"}
                                                      AnswerData={LAllAnswersData[36]}
                                                      userAnswerQN={UserData.ques37}
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

                                                <label htmlFor="ques38">was killed.even the sun believed to be in </label>
                                                <span className='Numbers'>38</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques38"
                                                      TestName={"Actual-test-2"}
                                                      AnswerData={LAllAnswersData[37]}
                                                      userAnswerQN={UserData.ques38}
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
                                    <div className='w-full p-3  grid grid-cols-2  border-[1px] border-gray-400'>
                                          <h5 className='m-auto'>Modern geocentrism</h5>
                                          <div className="question mt-2 flex flex-wrap ">
                                                <label htmlFor="ques39">based on the </label>
                                                <span className='Numbers'>39</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques39"
                                                      TestName={"Actual-test-2"}
                                                      AnswerData={LAllAnswersData[38]}
                                                      userAnswerQN={UserData.ques39}
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

                                                <label htmlFor="ques40">Believers also support creationism.</label>
                                                <span className='Numbers'>40</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques40"
                                                      TestName={"Actual-test-2"}
                                                      AnswerData={LAllAnswersData[39]}
                                                      userAnswerQN={UserData.ques40}
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
                                                <p> of Americans believe in this.</p>
                                          </div>
                                    </div>


                              </div>

                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
"use client";
import React, { useRef } from 'react'
import "../../../Styles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import img1 from "@assets/images/listening-images/Actual-test7-image1.jpg";
import { useStateContext } from "@/contexts/ContextProvider";
import Image from 'next/image';
import Select_input from '../../Inputs/Select_input';
import Text_inputs from '../../Inputs/Text_inputs';
import { makeEditableAndHighlight } from '@/components/Reading-Module/Reading-All-Tests/Important/TextChangeFunc';




function ListeningPage({ handleValueChange, AllAnswersData, UserData }) {
      // for show and hide all notePad----   
      const { ListeningShowAnswer, setListeningShowAnswer } = useStateContext();

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
            ["no"],
            ["amazing weather"],
            ["Town Hall"],
            ["variety"],
            ["plane"],
            ["older than 40"],
            ["mid-range"],
            ["tourism"],
            ["computer programmer"],
            ["good value"],
            ["B"], ["A"], ["E"], ["C"], ["D"], ["E"], ["G"], ["C"], ["D"], ["A"], ["C"], ["B"], ["A"],
            ["interview"],
            ["format"],
            ["copies"],
            ["May 11th"],
            ["change"],
            ["note"],
            ["procedure"],
            ["distance"],
            ["sound"],
            ["smell"],
            ["the flexibility"],
            ["reaction"],
            ["native language"],
            ["newspapers"],
            ["enviroment"],
            ["swiming pool"],
            ["national park"]


      ]
      AllAnswersData(LAllAnswersData)











      // main work----------->
      return (
            <section className='ContainerListener ' onMouseDown={() => { makeEditableAndHighlight("green") }}>
                  {/* AudioPlayer component add  */}
                  <div className="AudioPlayerClass">
                        <div className='w-screen sm:w-[550px] text-white'>
                              <AudioPlayer
                                    // className='w-screen sm:w-[550px] rounded bg-[#d4dae0] text-white'
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-07-Section1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 07</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>

                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-07-Section1.mp3?_=1") }}
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
                                    Questions 1-10 <br />
                                    Complete the form below.<br />
                                    Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer. <br /> <br />
                                    <h5 className='text-center mt-2 text-inherit'>Tourism Survey</h5> <br /> <br />
                              </div>
                              <div className="Questions">
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>Example</h5>
                                          <h5>Answer</h5>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>Name:</h5>
                                          <h5>Robert Goddard</h5>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>Destination:</h5>
                                          <h5>Melbourne</h5>
                                    </div>

                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>First time visited Melbourne?</h5>
                                          <div className="question mt-2 flex  gap-2 box-border overflow-auto">
                                                <span className='Numbers'>1</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques1"
                                                      TestName={"Actual-test-7"}
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
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>Best thing about the city:</h5>
                                          <div className="question mt-2 flex  gap-2 box-border overflow-auto">
                                                <span className='Numbers'>2</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques2"
                                                      TestName={"Actual-test-7"}
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
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>Favourite attraction:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <span className='Numbers'>3</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques3"
                                                      TestName={"Actual-test-7"}
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
                                          </div>
                                    </div>

                                    <div className='w-full p-3 flex justify-start border-[1px]  border-gray-400'>
                                          <h5>Best thing about</h5>
                                    </div>
                                    <div className='w-full ml-2 p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>the destination’s dining options:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <span className='Numbers'>4</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques4"
                                                      TestName={"Actual-test-7"}
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
                                                <p>of food</p>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-start border-[1px]  border-gray-400'>
                                          <h5>Method of transport</h5>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>to destination::</h5>
                                          <div className="question ml-3 mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <label htmlFor="ques5">by</label>
                                                <span className='Numbers'>5</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques5"
                                                      TestName={"Actual-test-7"}
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
                                                <p>to destination:</p>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>Age group:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <span className='Numbers'>6</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques6"
                                                      TestName={"Actual-test-7"}
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
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>Income level:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">
                                                <p>by</p>
                                                <span className='Numbers'>7</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques7"
                                                      TestName={"Actual-test-7"}
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
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>Purpose of visit:</h5>
                                          <div className="question mt-2 flex  gap-2 box-border overflow-auto">
                                                • on business
                                                <span className='Numbers'>8</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques8"
                                                      TestName={"Actual-test-7"}
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
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>Occupation:</h5>
                                          <div className="question mt-2 p-2 ml-3 flex flex-wrap gap-2 box-border overflow-auto">
                                                <span className='Numbers'>9</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques9"
                                                      TestName={"Actual-test-7"}
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
                                                <p>• writer for a travel magazine</p>
                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>Opinion about accommodation:</h5>
                                          <div className="question mt-2 p-2 flex flex-wrap gap-2 box-border overflow-auto">

                                                <span className='Numbers'>10</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques10"
                                                      TestName={"Actual-test-7"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-07-Section2.mp3?_=2") }}
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
                                    Questions 11-15<br /><br />
                                    Label the map below.<br /> <br />
                                    Choose the correct letter, A-E, next to questions 11-15.<br /> <br />
                                    <Image src={img1} alt="test-7 image-1" />  <br />
                              </div>

                              <div className="Questions">

                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>11</span>
                                          <label htmlFor="ques11">Science Museum</label>
                                          <select name="ques11" id="ques11" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques11 != "B" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques11 == "B" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                          </select>
                                          <i className='text-green-700'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques11 != "B" ? "B" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>12</span>
                                          <label htmlFor="ques12"> National History Museum</label>
                                          <select name="ques12" id="ques12" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques12 != "A" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques12 != "" && UserData.ques12 == "A" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                          </select>
                                          <i className='text-green-700'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques12 != "A" ? "A" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>13</span>
                                          <label htmlFor="ques13">Car Park</label>
                                          <select name="ques13" id="ques13" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques13 != "E" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques13 != "" && UserData.ques13 == "E" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                          </select>
                                          <i className='text-green-700'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques13 != "E" ? "E" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>14</span>
                                          <label htmlFor="ques14">Shopping Mall</label>
                                          <select name="ques14" id="ques14" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques14 != "C" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques14 != "" && UserData.ques14 == "C" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                          </select>
                                          <i className='text-green-700'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques14 != "C" ? "C" : ""}</i>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>15</span>
                                          <label htmlFor="ques15"> Primary School</label>
                                          <select name="ques15" id="ques15" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Actual-test-7" && UserData.ques15 != "D" && "text-red-600"}
                                                
                                                ${ListeningShowAnswer == "Actual-test-7" && UserData.ques15 != "" && UserData.ques15 == "D" && "text-green-700"}
                                                `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                          </select>
                                          <i className='text-green-700'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques15 != "D" ? "D" : ""}</i>
                                    </div>
                              </div>
                              <div className="Q-articles">
                                    <h5>Questions 16-20</h5> <br />
                                    What is the improvement of each main point of interest in the area?<br /><br />
                                    Choose FIVE answers from the box and write the correct letter, A-G, next to questions 16-20.<br /> <br />
                                    <div className='p-3'>
                                          <p><span className='font-bold mr-2'>A</span>  New entrance</p>
                                          <p><span className='font-bold mr-2'>B</span> Free lunch provided</p>
                                          <p><span className='font-bold mr-2'>C</span>Free information provided</p>
                                          <p><span className='font-bold mr-2'>D</span> Increase in size</p>
                                          <p><span className='font-bold mr-2'>E</span>Additional signs</p>
                                          <p><span className='font-bold mr-2'>F</span>New exhibitions</p>
                                          <p><span className='font-bold mr-2'>G</span>University tour</p>
                                          <p><span className='font-bold mr-2'>H</span> New structure</p>

                                    </div>
                              </div>
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>16</span>
                                          <label htmlFor="ques16">CarPark .</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques16"
                                                TestName={"Actual-test-7"}
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
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>17</span>
                                          <label htmlFor="ques17">Primary School .</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName={"Actual-test-7"}
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
                                          <span className='Numbers'>18</span>
                                          <label htmlFor="ques18"> Science Museum</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName={"Actual-test-7"}
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
                                          <span className='Numbers'>19</span>
                                          <label htmlFor="ques19">National History Museum</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName={"Actual-test-7"}
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
                                          <span className='Numbers'>20</span>
                                          <label htmlFor="ques20">Shopping Mall</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName={"Actual-test-7"}
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
                                    <h5 className='w-[70%]  text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-3</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad3 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-07-Section3.mp3?_=3") }}
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
                                    Questions 21-23<br />
                                    <h5 className='text-center'>Choose the correct letter, A, B or C.<br /> <br /></h5>
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <label htmlFor="ques21" className='flex'><span className='Numbers mr-1 mb-2'>21</span>The proposal will
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques21 != "C" ? "(C)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques21' />
                                                      <i className='' > be reviewed by two examiners. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques21' />
                                                      <i className=''> be added to the final grade.</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques21' />
                                                      <i className=''>be returned with feedback.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques22" className='flex'><span className='Numbers mr-1 mb-2'>22</span>The proposal will consist mostly of
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques22 != "B" ? "(B)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques22' />
                                                      <i className='' > topics</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques22' />
                                                      <i className=''> Methods</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques22' />
                                                      <i className=''>Results.</i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <div className=' flex mb-2'><span className='pt-[1px]  mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>23</span>For the practice paper, the tutor has directed the students to make sure to
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-7" && UserData.ques23 != "A" ? "(A)" : ""}</i>
                                          </div>

                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques23' />
                                                      <i className='' >pay attention to time limits. </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques23' />
                                                      <i className=''>   write at least 6,000 words..</i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
                                                      <input className='' type="radio" value="C" name='ques23' />
                                                      <i className=''>keep on topic..</i>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="Q-articles">
                                    <h5>Questions 24-30</h5> <br />
                                    Complete the sentences below.<br />
                                    <h5 className='text-center'>Write ONE WORD AND/OR A NUMBER for each answer<br /> <br /></h5>
                              </div>
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>24</span>
                                          <label htmlFor="ques24">There is no need to</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques24"
                                                TestName={"Actual-test-7"}
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
                                          <p> lots of people.</p>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>25</span>
                                          <label htmlFor="ques25">Pay attention to the</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques25"
                                                TestName={"Actual-test-7"}
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
                                          <p>  of the final report.</p>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>26</span>
                                          <label htmlFor="ques26">Prepare two </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques26"
                                                TestName={"Actual-test-7"}
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
                                          <p> one for the teacher, another for the students themselves.</p>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>27</span>
                                          <label htmlFor="ques27">The deadline of the final paper is </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques27"
                                                TestName={"Actual-test-7"}
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
                                          <label htmlFor="ques28">The students can</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques28"
                                                TestName={"Actual-test-7"}
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
                                          <p> their topics before the beginning of April.</p>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>29</span>Students deciding to change topics must deliver a
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques29"
                                                      TestName={"Actual-test-7"}
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
                                                to the teacher in advance.
                                          </div>
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>30</span>At the beginning of the report, the hypothesis and an outline of the .
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques30"
                                                      TestName={"Actual-test-7"}
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
                                                are needed.
                                          </div>
                                    </div>

                              </div>

                        </div>


                  </div>

                  {/* section-4*/}

                  <div className="forAllDivs section-1 bg-sky-100 pb-[30px] rounded mt-4">
                        <>
                              <div className='mb-3 grid grid-cols-1 justify-center w-[90vw] sm:w-full mt-[70px] sm:mt-0'>
                                    <h5 className='w-[70%] text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-4</h5>
                              </div>

                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad4 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-07-Section4.mp3?_=4") }}
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
                              <div className="Q-articles">
                                    <h5>PART 4 </h5> <br />
                                    Questions 31-40 <br />
                                    Complete the notes below. <br />
                                    Write NO MORE THAN TWO WORDS for each answer. <br />
                                    <h5 className='text-center mt-2 mb-2 text-inherit'>Advertising Effect</h5> <br /> <br />
                              </div>
                              <h5>The important factor to consider</h5> <br /> <br />
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> • The</label>
                                          <span className='Numbers'>31</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques31"
                                                TestName={"Actual-test-7"}
                                                AnswerData={LAllAnswersData[30]}
                                                userAnswerQN={UserData.ques31}
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
                                          <p>that customers must travel affects the probability that they will buy the product.</p>

                                    </div><br />
                                    <h5>Methods of communication</h5> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">  <label htmlFor="Name"> • Advertising slogans are easier to remember if there is a  </label> </label>
                                          <span className='Numbers'>32</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques32"
                                                TestName={"Actual-test-7"}
                                                AnswerData={LAllAnswersData[31]}
                                                userAnswerQN={UserData.ques32}
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
                                          <p> played with them..</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name"> –  • Mandy’s Candy Store appeals to people’s sense of</label>
                                          <span className='Numbers'>33</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques33"
                                                TestName={"Actual-test-7"}
                                                AnswerData={LAllAnswersData[32]}
                                                userAnswerQN={UserData.ques33}
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
                                          <p> to draw in customers.</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">• To an ad campaign for digital products, it is </label>
                                          <span className='Numbers'>34</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques34"
                                                TestName={"Actual-test-7"}
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
                                          <p>that is extremely important.</p>
                                    </div><br /> <br />
                                    <h5>Effect on your product sales</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">• The customer’s</label>
                                          <span className='Numbers'>35</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques35"
                                                TestName={"Actual-test-7"}
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
                                          <p>after he or she experiences the ad is most important.</p>
                                    </div> <br />
                                    <h5>Marketing strategies</h5> <br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">  • On international flights, it is wise for advertisements to be displayed in the common</label>
                                          <span className='Numbers'>36</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques36"
                                                TestName={"Actual-test-7"}
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
                                          <p> of most passengers.</p>
                                    </div> <br />
                                    <div className="question flex flex-wrap gap-2">
                                          <div className='text-justify'>• Very few young people buy<span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>37</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques37"
                                                      TestName={"Actual-test-7"}
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
                                          </div>
                                    </div> <br />






                                    <div className="question flex flex-wrap gap-2">
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>38</span>• The UNESCO website would be a good place to advertise for companies aiming to improve the
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques38"
                                                      TestName={"Actual-test-7"}
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
                                                are needed.
                                          </div>
                                    </div> <br />


                                    <div className="question flex flex-wrap gap-2">
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>39</span>• One good location to place ads for suntan lotion is the
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques39"
                                                      TestName={"Actual-test-7"}
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
                                          </div>
                                    </div> <br />

                                    <div className="question flex flex-wrap gap-2">
                                          <div className='text-justify'><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>40</span>• A good scene for a water purification commercial would be wonderful sights of a
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques40"
                                                      TestName={"Actual-test-7"}
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
                                          </div>
                                    </div> <br />

                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
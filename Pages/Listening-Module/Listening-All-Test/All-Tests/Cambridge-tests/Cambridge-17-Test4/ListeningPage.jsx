"use client";
import React, { useRef, useState } from 'react'
import "../../../Styles/ListeningPage.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import { useStateContext } from "@/contexts/ContextProvider";
import Image from 'next/image';
import Select_input from '../../Inputs/Select_input';
import Text_inputs from '../../Inputs/Text_inputs';
import { makeEditableAndHighlight } from '@/components/Reading-Module/Reading-All-Tests/Important/TextChangeFunc';

function ListeningPage({ handleValueChange, AllAnswersData, UserData }) {
      // for show and hide all notePad----   
      // let testItems = localStorage.getItem("ShowAnsByTest");
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
            ["floors"],
            ["fridge"],
            ["shirts"],
            ["windows"],
            ["balcony"],
            ["electrician"],
            ["dust"],
            ["police"],
            ["training"],
            ["review"],
            ["A"], ["A"], ["A"], ["C"], ["A"], ["C"], ["B"], ["C"], ["B"], ["A"],
            ["C"], ["B"], ["A"], ["A"], ["B"], ["F"], ["A"], ["D"], ["C"], ["G"],
            ["golden"],
            ["healthy"],
            ["climate"],
            ["rock"],
            ["diameter"],
            ["tube"],
            ["firm"],
            ["steam"],
            ["cloudy"],
            ["liter"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test4-part1.mp3?_=1" />
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test4-part1.mp3?_=1") }}
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
                                    Complete the notes below. <br />
                                    Write ONE WORD AND/OR A NUMBER for each answer. <br /> <br />
                                    <h5 className='text-center mt-2 text-inherit'>Easy Life Cleaning Services</h5> <br /> <br />
                                    <h5>Basic cleaning package offered</h5> <br />
                              </div>
                              <div className="Q-question">
                                    <h5>●   Cleaning all surfaces</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Cleaning the </label>
                                          <span className='Numbers'>1</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques1"
                                                TestName={"Cambridge-17-Test4"}
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
                                          <p>throughout the apartment</p>
                                    </div>
                                    <h5>●   Cleaning shower, sinks, toilet etc. <br /><br />
                                          Additional services agreed</h5>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   Every week <br />

                                                –  Cleaning the
                                                <span className='Numbers'>2</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques2"
                                                      TestName={"Cambridge-17-Test4"}
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
                                          </label>
                                    </div><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">   –  Ironing clothes –</label>
                                          <span className='Numbers'>3</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques3"
                                                TestName={"Cambridge-17-Test4"}
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
                                          <p> only</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Every month <br />
                                                –  Cleaning all the
                                                <span className='Numbers'>4</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques4"
                                                      TestName={"Cambridge-17-Test4"}
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
                                          </label>
                                          <p>  from the inside</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> –  Washing down the </label>
                                          <span className='Numbers'>5</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques5"
                                                TestName={"Cambridge-17-Test4"}
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
                                    <h5>Other possibilities</h5><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="ques6">●   They can organise a plumber or an</label>
                                          <span className='Numbers'>6</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques6"
                                                TestName={"Cambridge-17-Test4"}
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
                                          <p> if necessary.</p>
                                    </div> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   A special cleaning service is available for customers who are allergic to</label>
                                          <span className='Numbers'>7</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques7"
                                                TestName={"Cambridge-17-Test4"}
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
                                    </div> <br />
                                    <h5>Information on the cleaners</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Before being hired, all cleaners have a background check carried out by the</label>
                                          <span className='Numbers'>8</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques8"
                                                TestName={"Cambridge-17-Test4"}
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
                                          <p>References are required.</p>
                                    </div>
                                    <h5>Costs</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   All cleaners are given</label>
                                          <span className='Numbers'>9</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques9"
                                                TestName={"Cambridge-17-Test4"}
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
                                          <p> for two weeks.</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Customers send a </label>
                                          <span className='Numbers'>10</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques10"
                                                TestName={"Cambridge-17-Test4"}
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
                                          <p>after each visit.Usually, each customer has one regular cleaner</p> <br /> <br />
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test4-part2.mp3?_=2") }}
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
                                    Questions 11 – 14<br /><br />
                                    Choose the correct letter, A, B or C.<br /> <br />
                              </div>
                              <div className="Q-question">
                                    <h5 className='text-center mt-3 mb-3'>Oniton Hall</h5>
                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques11"
                                                TestName="Cambridge-17-Test4"
                                                AnswerData={LAllAnswersData[10]}
                                                userAnswerQN={UserData.ques11}
                                                contentsObj={{
                                                      Title: "Many hotel managers are unaware that their staff often leave because of",
                                                      AData: "a lack of training.",
                                                      BData: "long hours.",
                                                      CData: "low pay."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques12"
                                                TestName="Cambridge-17-Test4"
                                                AnswerData={LAllAnswersData[11]}
                                                userAnswerQN={UserData.ques12}
                                                contentsObj={{
                                                      Title: "What is the impact of high staff turnover on managers?",
                                                      AData: "an increased workload",
                                                      BData: "low morale",
                                                      CData: "an inability to meet targets"
                                                }}
                                          />

                                    </div>

                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques13"
                                                TestName="Cambridge-17-Test4"
                                                AnswerData={LAllAnswersData[12]}
                                                userAnswerQN={UserData.ques13}
                                                contentsObj={{
                                                      Title: "What mistake should managers always avoid?",
                                                      AData: "failing to treat staff equally",
                                                      BData: "reorganising shifts without warning",
                                                      CData: "neglecting to have enough staff during busy periods"
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques14"
                                                TestName="Cambridge-17-Test4"
                                                AnswerData={LAllAnswersData[13]}
                                                userAnswerQN={UserData.ques14}
                                                contentsObj={{
                                                      Title: "What unexpected benefit did Dunwich Hotel notice after improving staff retention rates?",
                                                      AData: "a fall in customer complaints",
                                                      BData: "an increase in loyalty club membership",
                                                      CData: "a rise in spending per customer"
                                                }}
                                          />

                                    </div> <br /> <br />



                                    <div className="Q-articles">
                                          <h5>Questions 15-20</h5> <br />
                                          Which way of reducing staff turnover was used in each of the following hotels?<br /><br />
                                          <i className='font-bold p-3 mt-2 mb-2'>Write the correct letter, A, B or C, next to Questions 15-20.</i>
                                          <i className='font-bold p-3 mt-2 mb-2 border-1 border-black'>
                                                <h5 className='text-center'>Ways of reducing staff turnover</h5>
                                                A   improving relationships and teamwork<br /><br />

                                                B   offering incentives and financial benefits<br /><br />

                                                C   providing career opportunities<br /><br />
                                          </i>
                                          <h5>Hotels</h5>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>15</span>
                                          <label htmlFor="Name">The Sun Club   </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques15"
                                                TestName={"Cambridge-17-Test4"}
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
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>16</span>
                                          <label htmlFor="Name"> The Portland   </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques16"
                                                TestName={"Cambridge-17-Test4"}
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
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>17</span>
                                          <label htmlFor="Name"> Bluewater Hotels    </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName={"Cambridge-17-Test4"}
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
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>18</span>
                                          <label htmlFor="Name"> Pentlow Hotels </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName={"Cambridge-17-Test4"}
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
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>19</span>
                                          <label htmlFor="Name">  Green Planet </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName={"Cambridge-17-Test4"}
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
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>20</span>
                                          <label htmlFor="Name">The Amesbury </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName={"Cambridge-17-Test4"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test4-part3.mp3?_=3") }}
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
                                    <h5>PART 3  <br />
                                          Questions 21-22</h5> <br />
                                    <h5 className='text-center'>Which TWO points do Thomas and Jeanne make about Thomas’s sporting activities at school?<br /> <br /></h5>
                              </div>
                              <div className="Q-question">
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques21"
                                                TestName="Cambridge-17-Test4"
                                                AnswerData={LAllAnswersData[20]}
                                                userAnswerQN={UserData.ques21}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "He should have felt more positive about them.",
                                                      BData: "The training was too challenging for him.",
                                                      CData: "He could have worked harder at them."
                                                }}
                                          />

                                    </div>

                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques22"
                                                TestName="Cambridge-17-Test4"
                                                AnswerData={LAllAnswersData[21]}
                                                userAnswerQN={UserData.ques22}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "His parents were disappointed in him.",
                                                      BData: "His fellow students admired him.",
                                                      CData: "Removing obstacles in changing"
                                                }}
                                          />

                                    </div> <br /> <br />
                                    <div className="Q-articles">
                                          <h5>Questions 23-24</h5> <br />
                                          <br />
                                          <h5 className='text-center'>Which TWO feelings did Thomas experience when he was in Kenya? <br /></h5> <br />
                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques23"
                                                TestName="Cambridge-17-Test4"
                                                AnswerData={LAllAnswersData[22]}
                                                userAnswerQN={UserData.ques23}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "Disbelief.",
                                                      BData: "Relief.",
                                                      CData: "Stress."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques24"
                                                TestName="Cambridge-17-Test4"
                                                AnswerData={LAllAnswersData[23]}
                                                userAnswerQN={UserData.ques24}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "Gratitude",
                                                      BData: "Homesickness",
                                                      CData: "Extra time"
                                                }}
                                          />

                                    </div>







                                    <div className="Q-articles mt-3 font-bold">
                                          <h5>
                                                Questions 25-30<br /> <br />
                                                What comment do the students make about the development of each of the following items of sporting equipment?<br /><br />
                                                Choose SIX answers from the box and write the correct letter, A-H, next to Questions 25-30.</h5> <br /><br />
                                          <div className='p-3 border-1 rounded border-black'>
                                                <h5 className='text-center mt-3 mb-3'>Comments about the development of the equipment</h5>
                                                <i className='font-bold p-3 mt-2 mb-2'>
                                                      A   It could cause excessive sweating.<br /><br />

                                                      B   The material was being mass produced for another purpose.<br /><br />

                                                      C   People often needed to make their own.<br /><br />

                                                      D   It often had to be replaced.<br /><br />

                                                      E   The material was expensive.<br /><br />

                                                      F   It was unpopular among spectators.<br /><br />

                                                      G   It caused injuries.<br /><br />

                                                      H   No one ring it liked it at first.<br /><br />
                                                </i>
                                          </div><br /><br />
                                          <h5>Items of sporting equipment</h5> <br />
                                    </div>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>25</span>
                                          <label htmlFor="Name"> the table tennis bat </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques24"
                                                TestName={"Cambridge-17-Test4"}
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
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>26</span>
                                          <label htmlFor="Name">  the cricket helmet  </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques26"
                                                TestName={"Cambridge-17-Test4"}
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
                                    </div><br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>27</span>
                                          <label htmlFor="Name">the cycle helmet  </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques27"
                                                TestName={"Cambridge-17-Test4"}
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
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>28</span>
                                          <label htmlFor="Name">the golf club </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques28"
                                                TestName={"Cambridge-17-Test4"}
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
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>29</span>
                                          <label htmlFor="Name">the hockey stick    </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques29"
                                                TestName={"Cambridge-17-Test4"}
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
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>30</span>
                                          <label htmlFor="Name"> the football      </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques30"
                                                TestName={"Cambridge-17-Test4"}
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
                                    </div><br />


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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test4-part4.mp3?_=4") }}
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
                                    Write ONE WORD ONLY for each answer. <br />
                                    <h5 className='text-center mt-4 mb-2 text-inherit'>Maple syrup</h5> <br /> <br />
                              </div>
                              <h5>What is maple syrup? <br /> <br />
                                    ●   made from the sap of the maple tree<br /> <br />
                                    ●   added to food or used in cooking</h5> <br /> <br />
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   colour described as</label>
                                          <span className='Numbers'>31</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques31"
                                                TestName={"Cambridge-17-Test4"}
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

                                    </div><br />
                                    <h5>Transmutation theory</h5> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">  <label htmlFor="Name">●   very </label> </label>
                                          <span className='Numbers'>32</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques32"
                                                TestName={"Cambridge-17-Test4"}
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
                                          <p> compared to refined sugar</p>
                                    </div> <br />
                                    <h5>The maple tree  <br />  <br />
                                          ●   has many species<br />  <br />
                                          ●   needs sunny days and cool nights<br />  <br />
                                          ●   maple leaf has been on the Canadian flag since 1964<br />  <br />
                                          ●   needs moist soil but does not need fertiliser as wel</h5> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   best growing conditions and</label>
                                          <span className='Numbers'>33</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques33"
                                                TestName={"Cambridge-17-Test4"}
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
                                          <p>are in Canada and North America</p>
                                    </div> <br />
                                    <h5>Early maple sugar producers <br /> <br />
                                          ●   made holes in the tree trunks</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   used hot</label>
                                          <span className='Numbers'>34</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques34"
                                                TestName={"Cambridge-17-Test4"}
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
                                          <p>to heat the sap</p>
                                    </div><br /> <br />
                                    <i>●   used tree bark to make containers for collection <br />

                                          ●   sweetened food and drink with sugar</i> <br /> <br />
                                    <h5>Today’s maple syrup <br /> <br />

                                          The trees</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Tree trunks may not have the correct</label>
                                          <span className='Numbers'>35</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques35"
                                                TestName={"Cambridge-17-Test4"}
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
                                          <p>until they have been growing for 40 years.</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   The changing temperature and movement of water within the tree produces the sap.
                                                The production<br /> <br />
                                                ●   A tap drilled into the trunk and a  </label>
                                          <span className='Numbers'>36</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques36"
                                                TestName={"Cambridge-17-Test4"}
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
                                          <p>carries the sap into a bucket.</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Large pans of sap called evaporators are heated by means of a</label>
                                          <span className='Numbers'>37</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques37"
                                                TestName={"Cambridge-17-Test4"}
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
                                    </div><br />
                                    <div className="question flex flex-wrap gap-2">
                                          ●   A lot of
                                          <span className='Numbers'>38</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques38"
                                                TestName={"Cambridge-17-Test4"}
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
                                          is produced during the evaporation process.
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          ●   ‘Sugar sand’ is removed because it makes the syrup look
                                          <span className='Numbers'>39</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques39"
                                                TestName={"Cambridge-17-Test4"}
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
                                          and affects the taste.
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          ●   The syrup is ready for use.

                                          ●   A huge quantity of sap is needed to make a
                                          <span className='Numbers'>40</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques40"
                                                TestName={"Cambridge-17-Test4"}
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
                                          of maple syrup.
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
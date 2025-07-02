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
            ["Jacobs"], ["Rod"], ["highfield"], ["NH871812C"], ["Dr.Kevin"],
            ["A"], ["B"], ["C"], ["A"], ["B"],

            // Section 2
            ["5 pound fee"], ["university card"], ["daily"], ["Fridays"], ["6", "six"],
            ["1 week"], ["the computers"], ["non-lending section"], ["arts"], ["Basement"],

            // Section 3
            ["Tomorrow"], ["Reliability"], ["4000 words"], ["e-mail attachment"], ["market surveys"],
            ["stack system"], ["plagiarism", "using their conclusions"], ["extension"], ["Doctor’s certificate"], ["mortgage interest rates"],

            // Section 4
            ["B"], ["B"], ["A"], ["seismic detection system"], ["Buoys at sea"],
            ["Offshore landslide"], ["no wave", "zero feet"], ["Submarine earthquake"], ["26,000 people"], ["none"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-17-Section1.mp3" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Listening Practice Test 17</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-17-Section1.mp3") }}
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
                                    <h4>Section 1 </h4> <br />
                                    Questions 1-5<br />
                                    Complete the form below. <br />
                                    Write NO MORE THAN ONE WORD OR A NUMBER for each answer. <br />
                                    <h5 className='text-center mt-2 text-inherit'>Oakham Surgery New Patient Form</h5> <br />
                              </div>
                              <div className="Questions">

                                    <div className="w-full">
                                          <div className="flex justify-between border-b p-2 text-sm">
                                                <span className="font-semibold">Example</span>
                                                <span>Answers</span>
                                          </div>
                                          <div className="flex justify-between border-b p-2 text-sm">
                                                <span className="font-semibold">NEW PATIENT’S ROAD</span>
                                                <span>Dawson Road</span>
                                          </div>

                                          <div className="flex justify-between border-b p-2 text-sm">
                                                <span className="font-semibold">FULL NAME</span>
                                                <span className='flex'>Mike   <span className='Numbers'>1</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques1"
                                                            TestName={"Actual-test-17"}
                                                            AnswerData={LAllAnswersData[0]}
                                                            userAnswerQN={UserData.ques1}

                                                      /></span>
                                          </div>

                                          <div className="flex justify-between border-b p-2 text-sm">
                                                <span className="font-semibold">WIFE’S FIRST NAME</span>
                                                <span>Janet</span>
                                          </div>

                                          <div className="flex justify-between border-b p-2 text-sm">
                                                <span className="font-semibold">CHILDRENS’ FIRST NAMES</span>
                                                <span className='flex'>1st   <span className='Numbers'>2</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques2"
                                                            TestName={"Actual-test-17"}
                                                            AnswerData={LAllAnswersData[1]}
                                                            userAnswerQN={UserData.ques2}

                                                      /> 2nd 3rd 4th</span>
                                          </div>

                                          <div className="flex justify-between border-b p-2 text-sm">
                                                <span className="font-semibold">ADDRESS</span>
                                                <span className='flex'>52 Dawson Road   <span className='Numbers'>3</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques3"
                                                            TestName={"Actual-test-17"}
                                                            AnswerData={LAllAnswersData[2]}
                                                            userAnswerQN={UserData.ques3}

                                                      /> Melbourne</span>
                                          </div>

                                          <div className="flex justify-between border-b p-2 text-sm">
                                                <span className="font-semibold">HEALTH CARD NUMBER</span>
                                                <span className='flex'>  <span className='Numbers'>4</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques4"
                                                            TestName={"Actual-test-17"}
                                                            AnswerData={LAllAnswersData[3]}
                                                            userAnswerQN={UserData.ques4}

                                                      /></span>
                                          </div>

                                          <div className="flex justify-between border-b p-2 text-sm">
                                                <span className="font-semibold">WIFE’S HEALTH CARD NUMBER</span>
                                                <span>will give later</span>
                                          </div>

                                          <div className="flex justify-between border-b p-2 text-sm">
                                                <span className="font-semibold">PREFERRED DOCTOR SELECTED</span>
                                                <span className='flex'>  <span className='Numbers'>5</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques5"
                                                            TestName={"Actual-test-17"}
                                                            AnswerData={LAllAnswersData[4]}
                                                            userAnswerQN={UserData.ques5}

                                                      /> White</span>
                                          </div>
                                    </div>

                              </div>

                              <div className="Q-articles mt-5">
                                    <h4 className='mb-2'>Questions 6-10</h4>
                                    Choose the correct letter, A, B, or C.<br /> <br />
                              </div>

                              <div className="Questions">
                                    <div className="mb-3">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques6"
                                                TestName="Actual-test-17"
                                                AnswerData={LAllAnswersData[5]}
                                                userAnswerQN={UserData.ques6}
                                                contentsObj={{
                                                      Title: "When is Mike’s wife’s first appointment?",
                                                      AData: "Friday 21st at 2.00pm.",
                                                      BData: "Friday 21st at 2.30pm.",
                                                      CData: "Friday 21st at 3.30pm."
                                                }}
                                          />
                                    </div>

                                    <div className="mb-3">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques7"
                                                TestName="Actual-test-17"
                                                AnswerData={LAllAnswersData[6]}
                                                userAnswerQN={UserData.ques7}
                                                contentsObj={{
                                                      Title: "What is the surgery’s phone number?",
                                                      AData: "7253 9819",
                                                      BData: "7253 9829",
                                                      CData: "7523 9829"
                                                }}
                                          />
                                    </div>

                                    <div className="mb-3">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques8"
                                                TestName="Actual-test-17"
                                                AnswerData={LAllAnswersData[7]}
                                                userAnswerQN={UserData.ques8}
                                                contentsObj={{
                                                      Title: "What is the name of the girl with whom Mike is speaking at the surgery?",
                                                      AData: "Rachel",
                                                      BData: "Elizabeth",
                                                      CData: "Angela"
                                                }}
                                          />
                                    </div>

                                    <div className="mb-3">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques9"
                                                TestName="Actual-test-17"
                                                AnswerData={LAllAnswersData[8]}
                                                userAnswerQN={UserData.ques9}
                                                contentsObj={{
                                                      Title: "What’s the night doctor’s mobile number?",
                                                      AData: "0506 759 3856",
                                                      BData: "0506 759 3857",
                                                      CData: "0506 758 3856"
                                                }}
                                          />
                                    </div>

                                    <div className="mb-3">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques10"
                                                TestName="Actual-test-17"
                                                AnswerData={LAllAnswersData[9]}
                                                userAnswerQN={UserData.ques10}
                                                contentsObj={{
                                                      Title: "Which of the following does the surgery NOT make a charge for?",
                                                      AData: "Travel vaccinations",
                                                      BData: "Consultations",
                                                      CData: "Insurance reports"
                                                }}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-17-Section2.mp3") }}
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

                        <div className="m">
                              <h2 className="text-xl font-bold mb-4 ">SECTION 2</h2>

                              <h3 className="text-xl font-semibold mb-2">Questions 11-16</h3>
                              <p className="text-xs mb-2">Complete the notes below.</p>
                              <p className="text-sm mb-4">Write NO MORE THAN THREE WORDS OR A NUMBER for each answer.</p>

                              <div className="flex justify-between border-b p-2 text-sm">
                                    <span className="font-semibold">Joining Library</span>
                                    <span>You will need: A completed application form.</span>
                              </div>

                              <div className="flex justify-between border-b p-2 text-xs">
                                    <span className="font-semibold flex">  <span className='Numbers'>11</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques11"
                                                TestName={"Actual-test-17"}
                                                AnswerData={LAllAnswersData[10]}
                                                userAnswerQN={UserData.ques11}
                                          /></span>
                                    <span></span>
                              </div>

                              <div className="flex justify-between border-b p-2 text-xs">
                                    <span className="font-semibold flex">  <span className='Numbers'>12</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques12"
                                                TestName={"Actual-test-17"}
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
                                          /></span>
                                    <span></span>
                              </div>

                              <div className="flex justify-between border-b p-2 text-xs">
                                    <span className="font-semibold">Two passport photos.</span>
                              </div>

                              <h3 className="text-sm font-semibold mt-4 mb-2">Opening Hours</h3>
                              <div className="flex justify-between border-b p-2 text-xs">
                                    <span className="font-semibold">Library Reception</span>
                                    <div>
                                          <div className="flex justify-between border-b p-2 text-xs">
                                                <span>8am – 10pm</span>
                                                <span className="flex">  <span className='Numbers'>13</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques13"
                                                            TestName={"Actual-test-17"}
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
                                                      /></span>

                                          </div>

                                          <div className="flex justify-between border-b p-2 text-xs">
                                                <span className="font-semibold">9am – 5pm (- 6.30 on</span>
                                                <div className="flex">
                                                      <span className='Numbers'>14</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques14"
                                                            TestName={"Actual-test-17"}
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

                                          <div className="text-xs p-2">(Mon-Sat: closed on Sundays)</div>
                                    </div>

                              </div>



                              <h3 className="text-sm font-semibold mt-4 mb-2">Borrowing</h3>
                              <div className="flex justify-between border-b p-2 text-xs">
                                    <span className="font-semibold">Undergraduates</span>
                                    <span>4 books</span>
                              </div>

                              <div className="flex justify-between border-b p-2 text-xs">
                                    <span className="font-semibold">Postgraduates</span>
                                    <div className="flex">
                                          <span className='Numbers'>15</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques15"
                                                TestName={"Actual-test-17"}
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
                              </div>

                              <div className="flex justify-between border-b p-2 text-xs">
                                    <span className="font-semibold">Borrowing for 2 weeks +</span>
                                    <span className='flex flex-wrap'>   <span className='Numbers'>16</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques16"
                                                TestName={"Actual-test-17"}
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
                                          /> books renewals (in person)</span>
                              </div>

                              <div className="text-xs p-2">No renewals over phone</div>
                              <div className="text-xs p-2">Late return penalty: £2 per week</div>

                              <h3 className="text-xl font-semibold mt-4 mb-2">Questions 17-20</h3>
                              <p className="text-xs mb-4">Label the library layout below.</p>
                              <p className="text-xs">Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.</p>

                              <h3 className="text-xl font-semibold mt-4 mb-2">Ground Floor</h3>
                              <div className="flex justify-between border-b p-2 text-xs">
                                    <span className="font-semibold">Reception</span>
                                    <div className="flex">
                                          <span className='Numbers'>17</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName={"Actual-test-17"}
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
                              </div>

                              <div className="flex justify-between border-b p-2 text-xs">
                                    <span className="font-semibold">Bathrooms</span>
                                    <div className="flex">
                                          <span className='Numbers'>18</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName={"Actual-test-17"}
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
                              </div>

                              <div className="flex justify-between border-b p-2 text-xs">
                                    <span className="font-semibold">First Floor</span>
                                    <span className='flex'>  <span className='Numbers'>19</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName={"Actual-test-17"}
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
                                          /> section</span>
                              </div>

                              <h3 className="text-sm font-semibold mt-4 mb-2"></h3>
                              <div className="flex justify-between border-b p-2 text-xs">
                                    <span className="font-semibold"> Second Floor </span>
                                    <span>Science Section</span>
                              </div>
                              <div className="flex justify-between border-b p-2 text-xs">
                                    <span className="font-semibold"> Stack System </span>
                                    <div className="flex">
                                          <span className='Numbers'>20</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName={"Actual-test-17"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-17-Section3.mp3") }}
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
                                    <h4>Section 3 </h4> <br />
                                    Questions 21-24<br />
                                    Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.<br /> <br />
                              </div>

                              <div className="Questions space-y-4">
                                    <div className="w-full p-3 border border-gray-400">
                                          <div className="mt-2 flex flex-wrap gap-2 ml-2 items-center">
                                                <span className="Numbers font-bold text-lg">21</span>
                                                <p className="text-gray-700">When will Simon begin writing his essay?</p>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques21"
                                                      TestName="Actual-test-17"
                                                      AnswerData={LAllAnswersData[20]}
                                                      userAnswerQN={UserData.ques21}
                                                />
                                          </div>
                                          <div className="mt-2 flex flex-wrap gap-0 ml-2 items-center">

                                                <p className="text-gray-700"> <span className="Numbers font-bold text-lg">22</span>According to Simon, what kind of problems did Jaguar have in the 1970s and 80s?</p>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques22"
                                                      TestName="Actual-test-17"
                                                      AnswerData={LAllAnswersData[21]}
                                                      userAnswerQN={UserData.ques22}
                                                />
                                          </div>
                                    </div>

                                    <div className="w-full p-3 border border-gray-400">
                                          <h5 className="text-center font-semibold">Cultural Studies</h5>
                                          <div className="mt-2 flex flex-wrap gap-2 ml-2 items-center">
                                                <span className="Numbers font-bold text-lg">23</span>
                                                <p className="text-gray-700">What is the word limit for the essay?</p>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques23"
                                                      TestName="Actual-test-17"
                                                      AnswerData={LAllAnswersData[22]}
                                                      userAnswerQN={UserData.ques23}
                                                />
                                          </div>
                                          <div className="mt-2 flex flex-wrap gap-2 ml-2 items-center">
                                                <span className="Numbers font-bold text-lg">24</span>
                                                <p className="text-gray-700">What is the preferable method for handing in the essay?</p>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques24"
                                                      TestName="Actual-test-17"
                                                      AnswerData={LAllAnswersData[23]}
                                                      userAnswerQN={UserData.ques24}
                                                />
                                          </div>
                                    </div>
                              </div>

                              <div className="max-w-4xl mx-auto space-y-6">
                                    <div className="space-y-2">
                                          <h2 className="text-xl font-bold">Questions 25-27</h2>
                                          <p>Complete the sentences below.</p>
                                          <p>Write NO MORE THAN THREE WORDS for each answer.</p>

                                          <div className="space-y-2">
                                                <p className="text-lg font-semibold flex flex-wrap"> Jennifer wants to write about how <span className='Numbers'>25</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques25"
                                                            TestName={"Actual-test-17"}
                                                            AnswerData={LAllAnswersData[24]}
                                                            userAnswerQN={UserData.ques25}
                                                      /> are used by supermarkets.</p>
                                                <p className="text-lg font-semibold flex flex-wrap"> Jennifer found some publications in the library <span className='Numbers'>26</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques26"
                                                            TestName={"Actual-test-17"}
                                                            AnswerData={LAllAnswersData[25]}
                                                            userAnswerQN={UserData.ques26}
                                                      /> to help her analysis.</p>
                                                <p className="text-lg font-semibold flex flex-wrap"> The tutor warned Jennifer about <span className='Numbers'>27</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques27"
                                                            TestName={"Actual-test-17"}
                                                            AnswerData={LAllAnswersData[26]}
                                                            userAnswerQN={UserData.ques27}
                                                      /> in her work.</p>
                                          </div>
                                    </div>

                                    <div className="space-y-2">
                                          <h2 className="text-xl font-bold">Questions 28-30</h2>
                                          <p>Complete the tutor’s summary notes on Melanie below.</p>
                                          <p>Write NO MORE THAN THREE WORDS for each answer.</p>

                                          <div className="space-y-2">
                                                <p className="text-lg font-semibold flex flex-wrap"> Notes on Student Essays. Student Melanie needs an <span className='Numbers'>28</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques28"
                                                            TestName={"Actual-test-17"}
                                                            AnswerData={LAllAnswersData[27]}
                                                            userAnswerQN={UserData.ques28}
                                                      /> as she has been unwell with the flu.</p>
                                                <p className="text-lg font-semibold flex flex-wrap"> She will get a <span className='Numbers'>29</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques29"
                                                            TestName={"Actual-test-17"}
                                                            AnswerData={LAllAnswersData[28]}
                                                            userAnswerQN={UserData.ques29}
                                                      /> from the doctor.</p>
                                                <p className="text-lg font-semibold flex flex-wrap"> She’s going to write about <span className='Numbers'>30</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques30"
                                                            TestName={"Actual-test-17"}
                                                            AnswerData={LAllAnswersData[29]}
                                                            userAnswerQN={UserData.ques30}
                                                      /> in the UK and their effect on housing trends.</p>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-17-Section4.mp3") }}
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
                        <div className="Questions mt-2">
                              <div className="font-bold Q-articles">
                                    <h4>Section 4 </h4> <br />
                                    Questions 31-33 <br />
                                    Choose the correct letter, A, B, or C. <br /><br />
                              </div>
                              <div className="Questions mt-2">
                                    <div className="mb-3">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques31"
                                                TestName="Actual-test-17"
                                                AnswerData={LAllAnswersData[30]} // Adjusted index to match the data
                                                userAnswerQN={UserData.ques31}
                                                contentsObj={{
                                                      Title: "The Pacific is more prone to tsunami because…",
                                                      AData: "it has many faults.",
                                                      BData: "its faults undergo subduction.",
                                                      CData: "its tectonic plates are bigger than elsewhere."
                                                }}
                                          />
                                    </div>

                                    <div className="mb-3">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques32"
                                                TestName="Actual-test-17"
                                                AnswerData={LAllAnswersData[31]} // Adjusted index to match the data
                                                userAnswerQN={UserData.ques32}
                                                contentsObj={{
                                                      Title: "The biggest tsunami are usually created by…",
                                                      AData: "undersea volcanic eruptions.",
                                                      BData: "undersea earthquakes.",
                                                      CData: "undersea landslides."
                                                }}
                                          />
                                    </div>

                                    <div className="mb-3">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques33"
                                                TestName="Actual-test-17"
                                                AnswerData={LAllAnswersData[32]} // Adjusted index to match the data
                                                userAnswerQN={UserData.ques33}
                                                contentsObj={{
                                                      Title: "Tsunami are difficult to detect in deep water because of…",
                                                      AData: "their wavelength.",
                                                      BData: "their high speed.",
                                                      CData: "their wave rate."
                                                }}
                                          />
                                    </div>
                              </div>

                              <div className="Q-articles p-3 font-bold">
                                    <h4>Questions 34-35</h4> <br />
                                    Write NO MORE THAN THREE WORDS for each answer.<br /><br />
                                    List the two ways which the National Oceanic and Atmospheric Administration has set up to detect tsunami.<br /><br />
                              </div>
                              <div className="Question">
                                    <div className="flex flex-wrap">
                                          <span className='Numbers'>34</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques34"
                                                TestName={"Actual-test-17"}
                                                AnswerData={LAllAnswersData[33]}
                                                userAnswerQN={UserData.ques34}
                                          />
                                    </div>
                                    <div className="flex flex-wrap">
                                          <span className='Numbers'>35</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques35"
                                                TestName={"Actual-test-17"}
                                                AnswerData={LAllAnswersData[34]}
                                                userAnswerQN={UserData.ques35}
                                          />
                                    </div>

                              </div>

                              <div className="Q-articles p-3 font-bold">
                                    <h4>Questions 36-40</h4> <br />
                                    Write NO MORE THAN THREE WORDS for each answer.<br /><br />
                              </div>


                              <div className="overflow-x-auto">
                                    <table className="min-w-full table-auto border-collapse text-sm w-full">
                                          <thead>
                                                <tr className="bg-gray-200">
                                                      <th className="border px-4 py-2">When Happened</th>
                                                      <th className="border px-4 py-2">Cause</th>
                                                      <th className="border px-4 py-2">Deaths Caused</th>
                                                      <th className="border px-4 py-2">Wave Height</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr>
                                                      <td className="border px-4 py-2">1992</td>
                                                      <td className="border px-4 py-2">
                                                            <div className="flex">
                                                                  <span className="Numbers">36</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques36"
                                                                        TestName={"Actual-test-17"}
                                                                        AnswerData={LAllAnswersData[35]}
                                                                        userAnswerQN={UserData.ques36}
                                                                  />
                                                            </div>
                                                      </td>
                                                      <td className="border px-4 py-2">none</td>
                                                      <td className="border px-4 py-2">3 feet</td>
                                                </tr>
                                                <tr>
                                                      <td className="border px-4 py-2">1992</td>
                                                      <td className="border px-4 py-2">Underwater earthquake</td>
                                                      <td className="border px-4 py-2">none</td>
                                                      <td className="border px-4 py-2">
                                                            <div className="flex">
                                                                  <span className="Numbers">37</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques37"
                                                                        TestName={"Actual-test-17"}
                                                                        AnswerData={LAllAnswersData[36]}
                                                                        userAnswerQN={UserData.ques37}
                                                                  />
                                                            </div>
                                                      </td>
                                                </tr>
                                                <tr>
                                                      <td className="border px-4 py-2">1998</td>
                                                      <td className="border px-4 py-2">
                                                            <div className="flex">
                                                                  <span className="Numbers">38</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques38"
                                                                        TestName={"Actual-test-17"}
                                                                        AnswerData={LAllAnswersData[37]}
                                                                        userAnswerQN={UserData.ques38}
                                                                  />
                                                            </div>
                                                      </td>
                                                      <td className="border px-4 py-2">1200</td>
                                                      <td className="border px-4 py-2">23 feet</td>
                                                </tr>
                                                <tr>
                                                      <td className="border px-4 py-2">1998</td>
                                                      <td className="border px-4 py-2">Underwater volcanic eruption</td>
                                                      <td className="border px-4 py-2">3000</td>
                                                      <td className="border px-4 py-2">40 feet</td>
                                                </tr>
                                                <tr>
                                                      <td className="border px-4 py-2">1896</td>
                                                      <td className="border px-4 py-2">Underwater earthquake</td>
                                                      <td className="border px-4 py-2">
                                                            <div className="flex">
                                                                  <span className="Numbers">39</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques39"
                                                                        TestName={"Actual-test-17"}
                                                                        AnswerData={LAllAnswersData[38]}
                                                                        userAnswerQN={UserData.ques39}
                                                                  />
                                                            </div>
                                                      </td>
                                                      <td className="border px-4 py-2">35 feet</td>
                                                </tr>
                                                <tr>
                                                      <td className="border px-4 py-2">8000 years ago</td>
                                                      <td className="border px-4 py-2">Underwater landslide</td>
                                                      <td className="border px-4 py-2">
                                                            <div className="flex">
                                                                  <span className="Numbers">40</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques40"
                                                                        TestName={"Actual-test-17"}
                                                                        AnswerData={LAllAnswersData[39]}
                                                                        userAnswerQN={UserData.ques40}
                                                                  />
                                                            </div>
                                                      </td>
                                                      <td className="border px-4 py-2">30 feet</td>
                                                </tr>
                                          </tbody>
                                    </table>
                              </div>





                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
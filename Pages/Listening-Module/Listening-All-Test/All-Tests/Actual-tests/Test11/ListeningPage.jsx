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
            ["Greenway"], ["pk2@cat.com"], ["5.30"], ["80" , "eighty"], ["brick"],
            ["alarm system"], ["flood"], ["148.30"], ["1 August"  , "August 1st"], ["TR278Q"],
            ["A"], ["B"], ["C"], ["C"], ["E"],
            ["B"], ["D"], ["C"], ["H"], ["G"],
            ["A"], ["B"], ["C"], ["B"], ["A"],
            ["C"], ["F"], ["E"], ["A"], ["B"],
            ["insects"], ["volcanic dust"], ["heat"], ["intermediate"], ["seashores"],
            ["sunlight"], ["1,000"], ["silver"], ["honey"], ["building"],
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-11-Section1.mp3" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Listening Practice Test 11</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-11-Section1.mp3") }}
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

                        <div className="p-4">
                              <h2 className="text-lg font-semibold mb-4">Home Insurance Quotation Form</h2>
                              <div className="overflow-x-auto">
                                    <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                                          <thead>
                                                <tr className="bg-gray-200">
                                                      <th className="border border-gray-300 px-2 py-1"></th>
                                                      <th className="border border-gray-300 px-2 py-1">Questions</th>
                                                      <th className="border border-gray-300 px-2 py-1">Answers</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr>
                                                      <td className="border border-gray-300 px-2 py-1" rowSpan="4">Personal Information</td>
                                                      <td className="border border-gray-300 px-2 py-1">Name</td>
                                                      <td className="border border-gray-300 px-2 py-1">Janet Evans</td>
                                                </tr>
                                                <tr>
                                                      <td className="border border-gray-300 px-2 py-1">Address</td>
                                                      <td className="border border-gray-300 px-2 py-1 flex gap-0 flex-wrap">49
                                                            <span className='Numbers'>1</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques1"
                                                                  TestName={"Actual-test-11"}
                                                                  AnswerData={LAllAnswersData[0]}
                                                                  userAnswerQN={UserData.ques1}

                                                            /></td>
                                                </tr>
                                                <tr>
                                                      <td className="border border-gray-300 px-2 py-1">Email</td>
                                                      <td className="border border-gray-300 px-2 py-1 flex"><span className='Numbers'>2</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques2"
                                                                  TestName={"Actual-test-11"}
                                                                  AnswerData={LAllAnswersData[1]}
                                                                  userAnswerQN={UserData.ques2}

                                                            /></td>
                                                </tr>
                                                <tr>
                                                      <td className="border border-gray-300 px-2 py-1">Telephone number</td>
                                                      <td className="border border-gray-300 px-2 py-1">(020) 4251-9443</td>
                                                </tr>
                                                <tr>
                                                      <td className="border border-gray-300 px-2 py-1">Best time to contact</td>
                                                      <td className="border border-gray-300 px-2 py-1 flex flex-wrap"> <span className='Numbers'>3</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques3"
                                                                  TestName={"Actual-test-11"}
                                                                  AnswerData={LAllAnswersData[2]}
                                                                  userAnswerQN={UserData.ques3}

                                                            /> pm</td>
                                                </tr>
                                                <tr>
                                                      <td className="border border-gray-300 px-2 py-1" rowSpan="3">Property Information</td>
                                                      <td className="border border-gray-300 px-2 py-1">Property size</td>
                                                      <td className="border border-gray-300 px-2 py-1 flex flex-wrap"><span className='Numbers'>4</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques4"
                                                                  TestName={"Actual-test-11"}
                                                                  AnswerData={LAllAnswersData[3]}
                                                                  userAnswerQN={UserData.ques4}

                                                            /> m2</td>
                                                </tr>
                                                <tr>
                                                      <td className="border border-gray-300 px-2 py-1">Material(s)</td>
                                                      <td className="border border-gray-300 px-2 py-1 flex"><span className='Numbers'>5</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques5"
                                                                  TestName={"Actual-test-11"}
                                                                  AnswerData={LAllAnswersData[4]}
                                                                  userAnswerQN={UserData.ques5}

                                                            /></td>
                                                </tr>
                                                <tr>
                                                      <td className="border border-gray-300 px-2 py-1">Security measures (if any)</td>
                                                      <td className="border border-gray-300 px-2 py-1 flex flex-wrap"><span className='Numbers'>6</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques6"
                                                                  TestName={"Actual-test-11"}
                                                                  AnswerData={LAllAnswersData[5]}
                                                                  userAnswerQN={UserData.ques6}

                                                            /></td>
                                                </tr>
                                                <tr>
                                                      <td className="border border-gray-300 px-2 py-1" rowSpan="4">Coverage</td>
                                                      <td className="border border-gray-300 px-2 py-1">Items to cover</td>
                                                      <td className="border border-gray-300 px-2 py-1">
                                                            <ul className="list-disc pl-4">
                                                                  <li>Building</li>
                                                                  <li>Contents</li>
                                                                  <li className='flex'><span className='Numbers'>7</span>
                                                                        <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques7"
                                                                              TestName={"Actual-test-11"}
                                                                              AnswerData={LAllAnswersData[6]}
                                                                              userAnswerQN={UserData.ques7}

                                                                        /></li>
                                                            </ul>
                                                      </td>
                                                </tr>
                                                <tr>
                                                      <td className="border border-gray-300 px-2 py-1">Quotation</td>
                                                      <td className="border border-gray-300 px-2 py-1 flex flex-wrap">£ <span className='Numbers'>8</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques8"
                                                                  TestName={"Actual-test-11"}
                                                                  AnswerData={LAllAnswersData[7]}
                                                                  userAnswerQN={UserData.ques8}

                                                            /></td>
                                                </tr>
                                                <tr>
                                                      <td className="border border-gray-300 px-2 py-1">Coverage start date</td>
                                                      <td className="border border-gray-300 px-2 py-1 flex"><span className='Numbers'>9</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques9"
                                                                  TestName={"Actual-test-11"}
                                                                  AnswerData={LAllAnswersData[8]}
                                                                  userAnswerQN={UserData.ques9}

                                                            /></td>
                                                </tr>
                                                <tr>
                                                      <td className="border border-gray-300 px-2 py-1">Reference number</td>
                                                      <td className="border border-gray-300 px-2 py-1 flex"><span className='Numbers'>10</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques10"
                                                                  TestName={"Actual-test-11"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-11-Section2.mp3") }}
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
                                    Questions 11-14<br /><br />
                                    <h6>Choose the correct letter, A, B or C</h6> <br /> <br />
                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques11"
                                          TestName="Actual-test-11"
                                          AnswerData={LAllAnswersData[10]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques11}
                                          contentsObj={{
                                                Title: "The top two proposals for the design of the swimming pool were chosen by",
                                                AData: "the public.",
                                                BData: "the radio station.",
                                                CData: "architects"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques12"
                                          TestName="Actual-test-11"
                                          AnswerData={LAllAnswersData[11]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques12}
                                          contentsObj={{
                                                Title: "What is special about the pool’s construction?",
                                                AData: "It was constructed by the people.",
                                                BData: "Its fishbowl-like shape",
                                                CData: "It is the first pool in Bridgewater."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques13"
                                          TestName="Actual-test-11"
                                          AnswerData={LAllAnswersData[12]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques13}
                                          contentsObj={{
                                                Title: "News reports covering the new pool expressed concerns over",
                                                AData: "price",
                                                BData: "safety",
                                                CData: "size"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques14"
                                          TestName="Actual-test-11"
                                          AnswerData={LAllAnswersData[13]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques14}
                                          contentsObj={{
                                                Title: "What factor of the pool’s Grand Opening remains undecided?",
                                                AData: "who will host",
                                                BData: "the exact opening time",
                                                CData: "what sculpture will be in the foyer"
                                          }}
                                    />

                              </div>
                              <div className="Q-articles font-bold">
                                    <h5>Questions 15-20</h5> <br />
                                    What’s the theme of each continent based on the rooms of the clubhouse?<br /><br />
                                    Choose SIX answers from the box and write the correct letter, A-H, next to questions 15-20.<br /> <br />
                                    <div className='p-2 border-[2px] border-gray-500 w-[80%]'>
                                          <p><span className='font-bold mr-2'>A</span> film and music</p>
                                          <p><span className='font-bold mr-2'>B</span> mountains</p>
                                          <p><span className='font-bold mr-2'>C</span> space travel</p>
                                          <p><span className='font-bold mr-2'>D</span> jewelry</p>
                                          <p><span className='font-bold mr-2'>E</span> animals</p>
                                          <p><span className='font-bold mr-2'>F</span> waterways</p>
                                          <p><span className='font-bold mr-2'>G</span> volcano</p>
                                          <p><span className='font-bold mr-2'>H</span> ancient forts</p>

                                    </div> <br />


                              </div>
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>15</span>Asia
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques15"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[14]}
                                                userAnswerQN={UserData.ques15}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>16</span>Antarctica
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques16"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[15]}
                                                userAnswerQN={UserData.ques16}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>17</span>Africa
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName={"Actual-test-11"}
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
                                          <span className='Numbers'>18</span>North America
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName={"Actual-test-11"}
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
                                          <span className='Numbers'>19</span>Europe
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName={"Actual-test-11"}
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
                                          <span className='Numbers'>20</span>South America
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName={"Actual-test-11"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-11-Section3.mp3") }}
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
                                    Questions 21-25<br /><br />
                                    <h6>Choose the correct letter, A, B or C</h6> <br /> <br />
                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques21"
                                          TestName="Actual-test-11"
                                          AnswerData={LAllAnswersData[20]}
                                          userAnswerQN={UserData.ques21}
                                          contentsObj={{
                                                Title: "Which part has the tutor already read?",
                                                AData: "the introductory chapter",
                                                BData: "the procedure section",
                                                CData: "the results and discussion section"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques22"
                                          TestName="Actual-test-11"
                                          AnswerData={LAllAnswersData[21]}
                                          userAnswerQN={UserData.ques22}
                                          contentsObj={{
                                                Title: "Which part of the paper did the tutor like?",
                                                AData: "introduction",
                                                BData: "layout",
                                                CData: "background information"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques23"
                                          TestName="Actual-test-11"
                                          AnswerData={LAllAnswersData[22]}
                                          userAnswerQN={UserData.ques23}
                                          contentsObj={{
                                                Title: "Kathy and the tutor both agree to continue to",
                                                AData: "refer a lot to the example received in class.",
                                                BData: "copy the information.",
                                                CData: "conduct further research in the library."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques24"
                                          TestName="Actual-test-11"
                                          AnswerData={LAllAnswersData[23]}
                                          userAnswerQN={UserData.ques24}
                                          contentsObj={{
                                                Title: "Kathy asks the tutor for help with the ………….. section.",
                                                AData: "abstract",
                                                BData: "bibliography",
                                                CData: "appendix"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques25"
                                          TestName="Actual-test-11"
                                          AnswerData={LAllAnswersData[24]}
                                          userAnswerQN={UserData.ques25}
                                          contentsObj={{
                                                Title: "What will Kathy do next?",
                                                AData: "try out software",
                                                BData: "work on the bibliography",
                                                CData: "make an animation"
                                          }}
                                    />
                              </div>

                              <div className="Q-articles font-bold">
                                    <h5>Questions 26-30</h5> <br />
                                    What is the desired outcome to each of the following course of action?<br /><br />
                                    Choose FIVE answers from the box and write the correct letter, A-F, next to questions 26-30.<br /> <br />
                                    <div className='p-2 border-[2px] border-gray-500 w-[80%]'>
                                          <h5>Desired outcomes</h5>
                                          <p><span className='font-bold mr-2'>A</span> practical experience</p>
                                          <p><span className='font-bold mr-2'>B</span> publish the work</p>
                                          <p><span className='font-bold mr-2'>C</span> join Machine Engineer Society</p>
                                          <p><span className='font-bold mr-2'>D</span> give suggestions</p>
                                          <p><span className='font-bold mr-2'>E</span> stay up to date</p>
                                          <p><span className='font-bold mr-2'>F</span> make important contacts</p>
                                    </div> <br />


                              </div>
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>26</span>Make a good grade
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques26"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[25]}
                                                userAnswerQN={UserData.ques26}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>27</span>Meet engineering professionals
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques27"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[26]}
                                                userAnswerQN={UserData.ques27}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>28</span>Visit the factory
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques28"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[27]}
                                                userAnswerQN={UserData.ques28}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>29</span>Seek summer internships
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques29"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[28]}
                                                userAnswerQN={UserData.ques29}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>30</span>Present dissertation
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques30"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[29]}
                                                userAnswerQN={UserData.ques30}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-11-Section4.mp3") }}
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
                              <h4 className=" font-bold mb-2">Part 4</h4>
                              <h5 className=" font-semibold mb-4">Questions 31-40</h5>
                              <p className="mb-4 ">Complete the notes below.</p>
                              <p className="mb-4">Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.</p>

                              <h4 className="font-semibold mb-2">An Overview of The Research on Amber</h4>
                              <p className="mb-2 flex flex-wrap">Amber: a fossilised tree resin, which may be produced to protect itself against  <span className='Numbers'>31</span>
                                    <Text_inputs
                                          handleValueChange={handleValueChange}
                                          QNum="ques31"
                                          TestName={"Actual-test-11"}
                                          AnswerData={LAllAnswersData[30]}
                                          userAnswerQN={UserData.ques31}

                                    /> and fungi.</p>

                              <h4 className="font-semibold mb-2">Colors:</h4>
                              <ul className="list-disc pl-6 mb-2">
                                    <li>usual yellow, orange, or brown</li>
                                    <li className='flex  flex-wrap'>uncommon colors e.g. blue (what causes the blue color in amber is related to the occurrence of  <span className='Numbers'>32</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques32"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[31]}
                                                userAnswerQN={UserData.ques32}

                                          />)</li>
                              </ul>

                              <h4 className="font-semibold mb-2">Formation</h4>
                              <ul className="list-disc pl-6 mb-2">
                                    <li className='flex flex-wrap'>under sustained <span className='Numbers'>33</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques33"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[32]}
                                                userAnswerQN={UserData.ques33}

                                          /> and pressure</li>
                                    <li className='flex flex-wrap'>during an  <span className='Numbers'>34</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques34"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[33]}
                                                userAnswerQN={UserData.ques34}

                                          /> stage between resins and amber, copal is produced.</li>
                              </ul>

                              <h4 className="font-semibold mb-2">Places and Conditions</h4>
                              <ul className="list-disc pl-6 mb-2">
                                    <li className='flex flex-wrap'>commonly found on <span className='Numbers'>35</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques35"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[34]}
                                                userAnswerQN={UserData.ques35}

                                          />e.g. in Russia</li>
                                    <li className='flex flex-wrap'>avoid exposure to <span className='Numbers'>36</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques36"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[35]}
                                                userAnswerQN={UserData.ques36}

                                          />, rain, and temperate extremes</li>
                              </ul>

                              <h4 className="font-semibold mb-2">Inclusions</h4>
                              <ul className="list-disc pl-6 mb-2">
                                    <li>Dominican amber: 1 inclusion to every 100 pieces</li>
                                    <li className='flex flex-wrap'>Baltic amber: 1 inclusion to every <span className='Numbers'>37</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques37"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[36]}
                                                userAnswerQN={UserData.ques37}

                                          />pieces</li>
                              </ul>

                              <h4 className="font-semibold mb-2">Uses and Applications</h4>
                              <ul className="list-disc pl-6 mb-2">
                                    <li className='flex flex-wrap'>It can be used to make ornamental objects and jewelry in <span className='Numbers'>38</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques38"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[37]}
                                                userAnswerQN={UserData.ques38}

                                          /> settings.</li>
                                    <li className='flex flex-wrap'>Some people believe that its powder mixed with <span className='Numbers'>39</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques39"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[38]}
                                                userAnswerQN={UserData.ques39}

                                          /> cures throat, eye and ear diseases.</li>
                                    <li className='flex flex-wrap'>It has even been used as a <span className='Numbers'>40</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques40"
                                                TestName={"Actual-test-11"}
                                                AnswerData={LAllAnswersData[39]}
                                                userAnswerQN={UserData.ques40}

                                          />material, for instance using it to create Amber Room.</li>
                              </ul>
                        </div>



                  </div>


            </section >
      )
}



export default ListeningPage
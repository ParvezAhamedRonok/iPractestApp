"use client";
import React, { useState } from 'react'
import "../../../Styles/ListeningPage.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import img1 from "@assets/images/LTest2Img1.jpg"
import { useStateContext } from "@/contexts/ContextProvider";
import Image from 'next/image';
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
            ["traning", "Traning"],
            ["discount", "Discount"],
            ["taxi", "Taxi"],
            ["server", "Server"],
            ["English", "english"],
            ["Wivenhoe", "wivenhoe"],
            ["equipment", "Equipment"],
            ["9.75"],
            ["deliveries", "Deliveries"],
            ["Sunday", "sunday"],
            ["B"], ["B"], ["B"], ["A"], ["G"], ["C"], ["D"], ["B"], ["H"], ["A"],
            ["C"], ["A"], ["B"], ["B"], ["A"], ["B"], ["D"], ["A"], ["C"], ["F"],
            ["conveninent", "Conveninent"],
            ["suits", "Suits"],
            ["tailor", "Tailor"],
            ["profession", "Profession"],
            ["visible", "Visible"],
            ["strings", "Strings"],
            ["waists", "Waists"],
            ["perfume", "Perfume"],
            ["image", "Image"],
            ["handbag", "Handbag"],
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test2-part1.mp3?_=1" />
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
                              {/* <div className='flex justify-start w-[92vw]  sm:w-full'>
                                    <div className="AudioPlayerClass">
                                          <div className='w-[87vw] sm:w-[550px] text-white'>
                                                < AudioPlayer
                                                      // autoPlay
                                                      src="https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test2-part1.mp3?_=1" />
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
                              </div> */}
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test2-part1.mp3?_=1") }}
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
                                    Complete the notes below. <br />
                                    Write ONE WORD AND/OR A NUMBER for each answer. <br />
                                    <h5 className='text-center mt-2 text-inherit'>Working at Milo’s Restaurants</h5> <br /> <br />
                              </div>
                              <div className="Q-question">
                                    <h5 className='text-start mt-2 text-inherit'>Benefits</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●</label>
                                          <span className='Numbers'>1</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques1"
                                                TestName={"Cambridge-18-Test2"}
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
                                          <p>provided for all staff</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●</label>
                                          <span className='Numbers'>2</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques2"
                                                TestName={"Cambridge-18-Test2"}
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
                                          <p>during weekdays at all Milo’s Restaurants</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●</label>
                                          <span className='Numbers'>3</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques3"
                                                TestName={"Cambridge-18-Test2"}
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
                                          <p>provided after midnight</p>
                                    </div><br /> <br />

                                    <h5>Person specification</h5> <br /> <br />
                                    <i>●   must be prepared to work well in a team</i><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   must care about maintaining a high standard of </label>
                                          <span className='Numbers'>4</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques4"
                                                TestName={"Cambridge-18-Test2"}
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
                                          <label htmlFor="Name">●   must have a qualification in</label>
                                          <span className='Numbers'>5</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques5"
                                                TestName={"Cambridge-18-Test2"}
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
                                          Complete the table below.<br />
                                          Write ONE WORD AND/OR A NUMBER for each answer. <br />
                                          <h5 className='text-center mt-2 text-inherit'>Working at Milo’s Restaurants</h5> <br /> <br />
                                    </div>

                                    <div className='border-1 border-black'>
                                          <div className='border-1 border-black p-3'>
                                                <h5 className='font-bold text-center'>Location</h5> <br />
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <label htmlFor="Name"></label>
                                                      <span className='Numbers'>6</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques6"
                                                            TestName={"Cambridge-18-Test2"}
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
                                                      <p>Street</p>
                                                </div><br />
                                                <h5>City Road</h5>
                                          </div>
                                          <div className='border-1 border-black p-3' >
                                                <h5 className='font-bold text-center'>Job title</h5>
                                                <h5 className='font-bold text-start'>Breakfast superviso</h5>
                                                <h5 className='font-bold text-start'>  Junior chef</h5>
                                          </div>

                                          <div className='border-1 border-black p-3'>
                                                <h5 className='font-bold text-center mb-2'>Responsibilities include</h5> <br />
                                                <h5>Checking portions, etc. are correct</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <label htmlFor="Name">Making sure</label>
                                                      <span className='Numbers'>7</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques7"
                                                            TestName={"Cambridge-18-Test2"}
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
                                                      <p>is clean.Supporting senior chefs</p> <br />

                                                      <label htmlFor="Name">Maintaining stock and organising </label>
                                                      <span className='Numbers'>8</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques8"
                                                            TestName={"Cambridge-18-Test2"}
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

                                          <div className='border-1 border-black p-3'>
                                                <h5 className='font-bold text-center mb-2'>Pay and conditions</h5> <br />

                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <label htmlFor="Name">Starting salary</label>
                                                      <span className='Numbers'>9</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques9"
                                                            TestName={"Cambridge-18-Test2"}
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
                                                      <p>per hour Start work at 5.30 a.m...Start work at 5.30 a.m.</p> <br />

                                                      <label htmlFor="Name">No work on a</label>
                                                      <span className='Numbers'>10</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques10"
                                                            TestName={"Cambridge-18-Test2"}
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
                                                      <p>once a month</p>

                                                </div>

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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test2-part2.mp3?_=2") }}
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
                                    Questions 11 and 12<br /><br />
                                    What are the TWO main reasons why this site has been chosen for the housing development? <br /> <br />
                              </div>
                              <div className="Q-question">

                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques11"
                                                TestName={"Cambridge-18-Test2"}
                                                AnswerData={LAllAnswersData[10]}
                                                userAnswerQN={UserData.ques11}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "It has suitable geographical features.",
                                                      BData: "There is easy access to local facilities.",
                                                      CData: "It has good connections with the airport."
                                                }}
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
                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques12"
                                                TestName={"Cambridge-18-Test2"}
                                                AnswerData={LAllAnswersData[11]}
                                                userAnswerQN={UserData.ques12}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "The land is of little agricultural value.",
                                                      BData: "It will be convenient for workers.",
                                                      CData: "Most nearable things."
                                                }}

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

                                    <div className="Q-articles mt-4">
                                          <h5>Questions 13 and 14</h5> <br />
                                          Choose TWO letters<br /><br />
                                          What are the TWO main reasons why this site has been chosen for the housing development? <br /> <br />
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques13"
                                                TestName={"Cambridge-18-Test2"}
                                                AnswerData={LAllAnswersData[12]}
                                                userAnswerQN={UserData.ques13}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "the facilities for cyclists",
                                                      BData: "the impact on the environment",
                                                      CData: "It has good connections with the airport"
                                                }}
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
                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques14"
                                                TestName={"Cambridge-18-Test2"}
                                                AnswerData={LAllAnswersData[13]}
                                                userAnswerQN={UserData.ques14}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "the encouragement of good relations between residents",
                                                      BData: "the low cost of all the accommodation",
                                                      CData: "the rural location"
                                                }}
                                          />

                                    </div>
                                    <div className="Q-articles">
                                          <h5>Label the map below.</h5> <br />
                                          Write the correct letter, A-l, next to Questions 15-20<br /><br />
                                          <Image src={img1} alt="test-2 cambridge-image-1" />
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>15</span>
                                          <label htmlFor="Name"> School</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques15"
                                                TestName={"Cambridge-18-Test2"}
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
                                          <label htmlFor="Name"> Sports centre</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques16"
                                                TestName={"Cambridge-18-Test2"}
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
                                          <p>Street</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>17</span>
                                          <label htmlFor="Name"> Clinic   </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName={"Cambridge-18-Test2"}
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
                                          <label htmlFor="Name"> Community centre</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName={"Cambridge-18-Test2"}
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
                                          <label htmlFor="Name"> Supermarket</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName={"Cambridge-18-Test2"}
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
                                          <label htmlFor="Name"> Playground</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName={"Cambridge-18-Test2"}
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
                                          <p>advertisement</p>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test2-part3.mp3?_=3") }}
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
                                    Questions 21-24<br />
                                    Choose the correct letter, A, B or C.<br /> <br />
                              </div>
                              <div className="Q-question">
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques21"
                                                TestName={"Cambridge-18-Test2"}
                                                AnswerData={LAllAnswersData[20]}
                                                userAnswerQN={UserData.ques21}
                                                contentsObj={{
                                                      Title: "Why do the students think the Laki eruption of 1783 is so important?",
                                                      AData: "It was the most severe eruption in modern times",
                                                      BData: "It led to the formal study of volcanoes",
                                                      CData: "It had a profound effect on society"
                                                }}
                                          />

                                    </div>

                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques22"
                                                TestName={"Cambridge-18-Test2"}
                                                AnswerData={LAllAnswersData[21]}
                                                userAnswerQN={UserData.ques22}
                                                contentsObj={{
                                                      Title: "What surprised Adam about observations made at the time?",
                                                      AData: "the number of places producing them",
                                                      BData: "the contradictions in them",
                                                      CData: "the lack of scientific data to support them"
                                                }}
                                          />

                                    </div>

                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques23"
                                                TestName={"Cambridge-18-Test2"}
                                                AnswerData={LAllAnswersData[22]}
                                                userAnswerQN={UserData.ques23}
                                                contentsObj={{
                                                      Title: "According to Michelle, what did the contemporary sources say about the Laki haze?",
                                                      AData: "People thought it was similar to ordinary fog",
                                                      BData: "It was associated with health issues",
                                                      CData: "It completely blocked out the sun for weeks"
                                                }}
                                          />

                                    </div>

                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques24"
                                                TestName={"Cambridge-18-Test2"}
                                                AnswerData={LAllAnswersData[23]}
                                                userAnswerQN={UserData.ques24}
                                                contentsObj={{
                                                      Title: "Adam corrects Michelle when she claims that Benjamin Franklin",
                                                      AData: "came to the wrong conclusion about the cause of the haze",
                                                      BData: "was the first to identify the reason for the haze",
                                                      CData: "supported the opinions of other observers about the haze"
                                                }}
                                          />

                                    </div>






                                    <div className="Q-articles">
                                          <h5>Questions 25 and 26 </h5> <br />
                                          Which TWO issues following the Laki eruption surprised the students?.<br /> <br />
                                    </div>

                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques25"
                                                TestName={"Cambridge-18-Test2"}
                                                AnswerData={LAllAnswersData[24]}
                                                userAnswerQN={UserData.ques25}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "how widespread the effects were.",
                                                      BData: "the number of deaths it caused",
                                                      CData: "why they would like a career in fashion.."
                                                }}
                                          />

                                    </div>

                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques26"
                                                TestName={"Cambridge-18-Test2"}
                                                AnswerData={LAllAnswersData[25]}
                                                userAnswerQN={UserData.ques26}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "the speed at which the volcanic ash cloud spread",
                                                      BData: "how long-lasting the effects were",
                                                      CData: "how people ignored the warning signs"
                                                }}
                                          />

                                    </div>


                                    <div className="Questions">
                                          <div className="Q-articles text-justify mt-4">
                                                <h5> Questions 27 -30 <br /> <br />
                                                      What comment do the students make about the impact of the Laki eruption on the following countries?</h5> <br />
                                                <i>

                                                      Choose FOUR answers from the box and write the correct letter, A-F, next to Questions 27-30.<br /> <br />

                                                      Comments<br /> <br />
                                                      A   This country suffered the most severe loss of life.<br /> <br />
                                                      B   The impact on agriculture was predictable.<br /> <br />
                                                      C   There was a significant increase in deaths of young people.<br /> <br />
                                                      D   Animals suffered from a sickness.<br /> <br />
                                                      E   This country saw the highest rise in food prices in the world.<br /> <br />
                                                      F   It caused a particularly harsh winter.<br /> <br />
                                                      Countries<br /> <br />
                                                </i>
                                          </div>

                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <span className='Numbers'>27</span>
                                                Iceland
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques27"
                                                      TestName={"Cambridge-18-Test2"}
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
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <span className='Numbers'>28</span>
                                                EGYPT
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques28"
                                                      TestName={"Cambridge-18-Test2"}
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
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <span className='Numbers'>29</span>
                                                UK
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques29"
                                                      TestName={"Cambridge-18-Test2"}
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
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <span className='Numbers'>30</span>
                                                USA
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques30"
                                                      TestName={"Cambridge-18-Test2"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test2-part4.mp3?_=4") }}
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
                                    <h5 className='text-center mt-2 text-inherit'>Pockets</h5> <br /> <br />
                              </div>
                              <h5>Reason for choice of subject</h5> <br />

                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   They are </label>
                                          <span className='Numbers'>31</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques31"
                                                TestName={"Cambridge-18-Test2"}
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
                                          <p>but can be overlooked by consumers and designers.</p>
                                    </div><br />
                                    <h5 className='text-start mt-2 text-inherit'>Pockets in men’s clothes</h5> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   Men started to wear</label>
                                          <span className='Numbers'>32</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques32"
                                                TestName={"Cambridge-18-Test2"}
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
                                          <p> in the 18th century.</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">● A</label>
                                          <span className='Numbers'>33</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques33"
                                                TestName={"Cambridge-18-Test2"}
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
                                          <p className='text-justify'>sewed pockets into the lining of the garments.
                                                ●   The wearer could use the pockets for small items.</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Bigger pockets might be made for men who belonged to a certain type of
                                                <span className='Numbers'>34</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques34"
                                                      TestName={"Cambridge-18-Test2"}
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
                                          </label>
                                    </div><br /> <br />
                                    <h5>Pockets in women’s clothes</h5>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Women’s pockets were less</label>
                                          <span className='Numbers'>35</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques35"
                                                TestName={"Cambridge-18-Test2"}
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
                                          than men’s.
                                          ●   Women were very concerned about pickpockets.
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Pockets were produced in pairs using</label>
                                          <span className='Numbers'>36</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques36"
                                                TestName={"Cambridge-18-Test2"}
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
                                          to link them together.
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Pockets hung from the women’s</label>
                                          <span className='Numbers'>37</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques37"
                                                TestName={"Cambridge-18-Test2"}
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
                                          under skirts and petticoats.
                                    </div>
                                    <div className="question flex flex-wrap gap-2">
                                          <label htmlFor="Name">  ●   Items such as</label>
                                          <span className='Numbers'>38</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques38"
                                                TestName={"Cambridge-18-Test2"}
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
                                          could be reached through a gap in the material.
                                          ●   Pockets, of various sizes, stayed inside clothing for many decades.
                                    </div>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   When dresses changed shape, hidden pockets had a negative effect on the</label>
                                          <span className='Numbers'>39</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques39"
                                                TestName={"Cambridge-18-Test2"}
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
                                          of women
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Bags called ‘pouches’ became popular, before women carried a</label>
                                          <span className='Numbers'>40</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques40"
                                                TestName={"Cambridge-18-Test2"}
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
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
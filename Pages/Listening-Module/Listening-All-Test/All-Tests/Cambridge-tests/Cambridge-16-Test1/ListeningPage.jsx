"use client";
import React, { useRef, useState } from 'react'
import "../../../Styles/ListeningPage.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import Image1 from "@assets/images/listening-images/cambridge-t-9-Ima1.jpg"
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
            ["egg"],
            ["tower"],
            ["car"],
            ["animals"],
            ["bridge"],
            ["movie"],
            ["decorate"],
            ["wednesdays", "Wednesdays"],
            ["fradstone", "Fradstone"],
            ["parking"],
            ["C"], ["A"], ["B"], ["C"], ["H"], ["C"], ["G"], ["B"], ["I"], ["A"],
            ["C"], ["B"], ["B"], ["B"], ["D"], ["C"], ["A"], ["H"], ["F"], ["G"],
            ["practical"],
            ["publication"],
            ["choices"],
            ["negative"],
            ["play"],
            ["capitalism"],
            ["depression"],
            ["logic"],
            ["opportunity"],
            ["practice"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test1-Part1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 09</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test1-Part1.mp3?_=1") }}
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
                                    Questions 1 – 10 <br />
                                    Complete the notes below. <br />
                                    Write ONE WORD AND/OR A NUMBER for each answer.<br /> <br />
                                    <h5 className='text-center mt-2 text-inherit'>Children’s Engineering Workshops</h5> <br /> <br />
                                    <h5>Tiny Engineers (ages 4-5)</h5> <br />
                                    <h5>Activities</h5> <br />
                              </div>
                              <div className="Q-question">
                                    <h5>●   Cleaning all surfaces</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          ●   Create a cover for an
                                          <span className='Numbers'>1</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques1"
                                                TestName={"Cambridge-16-Test1"}
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
                                          so they can drop it from a height without breaking it.

                                    </div>
                                    <h5>●   Cleaning shower, sinks, toilet etc. <br /><br />
                                          Additional services agreed</h5>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          ●   Take part in a competition to build the tallest
                                          <span className='Numbers'>2</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques2"
                                                TestName={"Cambridge-16-Test1"}
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

                                    </div><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          ●   Make a
                                          <span className='Numbers'>3</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques3"
                                                TestName={"Cambridge-16-Test1"}
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
                                          powered by a balloon.

                                    </div> <br />
                                    <h5>Junior Engineers (ages 6-8)</h5> <br />
                                    <h5>Activities:</h5> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          ●   Build model cars, trucks and
                                          <span className='Numbers'>4</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques4"
                                                TestName={"Cambridge-16-Test1"}
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
                                          and learn how to program them so they can move.


                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          ●   Take part in a competition to build the longest
                                          <span className='Numbers'>5</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques5"
                                                TestName={"Cambridge-16-Test1"}
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
                                          using card and wood.

                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          ●   Create a short
                                          <span className='Numbers'>6</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques6"
                                                TestName={"Cambridge-16-Test1"}
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
                                          with special software.

                                    </div> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          ●   Build,
                                          <span className='Numbers'>7</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques7"
                                                TestName={"Cambridge-16-Test1"}
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
                                          and program a humanoid robot.  <br />
                                          Cost for a five-week block: £50

                                    </div> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          Held on
                                          <span className='Numbers'>8</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques8"
                                                TestName={"Cambridge-16-Test1"}
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
                                          from 10 am to 11 am

                                    </div>
                                    <h5>Location</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          Building 10A,
                                          <span className='Numbers'>9</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques9"
                                                TestName={"Cambridge-16-Test1"}
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
                                          Industrial Estate, Grasford

                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          Plenty of
                                          <span className='Numbers'>10</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques10"
                                                TestName={"Cambridge-16-Test1"}
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
                                          is available.<br /> <br />
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test1-Part2.mp3?_=2") }}
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
                              <div className="Question">
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques11"
                                                TestName="Cambridge-16-Test1"
                                                AnswerData={LAllAnswersData[10]}
                                                userAnswerQN={UserData.ques11}
                                                contentsObj={{
                                                      Title: "Stevenson’s was founded in",
                                                      AData: "1923",
                                                      BData: "1924",
                                                      CData: "1926"
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques12"
                                                TestName="Cambridge-16-Test1"
                                                AnswerData={LAllAnswersData[11]}
                                                userAnswerQN={UserData.ques12}
                                                contentsObj={{
                                                      Title: "Originally, Stevenson’s manufactured goods for",
                                                      AData: "the healthcare industry.",
                                                      BData: "the automotive industry.",
                                                      CData: "the machine tools industry."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques13"
                                                TestName="Cambridge-16-Test1"
                                                AnswerData={LAllAnswersData[12]}
                                                userAnswerQN={UserData.ques13}
                                                contentsObj={{
                                                      Title: "What does the speaker say about the company premises?",
                                                      AData: "The company has recently moved.",
                                                      BData: "The company has no plans to move.",
                                                      CData: "The company is going to move shortly."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques14"
                                                TestName="Cambridge-16-Test1"
                                                AnswerData={LAllAnswersData[13]}
                                                userAnswerQN={UserData.ques14}
                                                contentsObj={{
                                                      Title: "The programme for the work experience group includes",
                                                      AData: "time to do research.",
                                                      BData: "meetings with a teacher.",
                                                      CData: "talks by staff."
                                                }}
                                          />

                                    </div>



                                    <div className="articles mt-3 mb-3">
                                          <h5>Questions 15-20</h5> <br />
                                          <label htmlFor="">Label the map below. <br /> Write the correct letter, A-J, next to Questions 15-20.</label> <br />
                                          <h5 className='w-full text-center'>Plan of Stevenson’s site</h5> <br />
                                          <Image src={Image1} alt="cambridge-test9 image-1" /> <br />

                                          <div className="Questions p-3">
                                                <div className='flex gap-1 flex-wrap mb-1'>
                                                      <span className='Numbers'>15</span>
                                                      <label htmlFor="ques15">  coffee room
                                                            <select name="ques15" id="ques15" onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques15 != "H" && "text-red-600"}
                                                                  ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques15 != "" && UserData.ques15 == "H" && "text-green-700"}
                                                                  `}>
                                                                  <option value="" selected></option>
                                                                  <option value="A">A</option>
                                                                  <option value="B">B</option>
                                                                  <option value="C">C</option>
                                                                  <option value="D">D</option>
                                                                  <option value="E">E</option>
                                                                  <option value="F">F</option>
                                                                  <option value="G">G</option>
                                                                  <option value="H">H</option>
                                                                  <option value="I">I</option>
                                                                  <option value="J">J</option>
                                                            </select>
                                                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques15 != "H" ? "H" : ""}</i>
                                                      </label>
                                                </div>
                                                <div className='flex gap-1 flex-wrap mb-1'>
                                                      <span className='Numbers'>16</span>
                                                      <label htmlFor="ques16">   warehouse
                                                            <select name="ques16" id="ques16" onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques16 != "C" && "text-red-600"}
                                                                  ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques16 != "" && UserData.ques16 == "C" && "text-green-700"}
                                                                  `}>
                                                                  <option value="" selected></option>
                                                                  <option value="A">A</option>
                                                                  <option value="B">B</option>
                                                                  <option value="C">C</option>
                                                                  <option value="D">D</option>
                                                                  <option value="E">E</option>
                                                                  <option value="F">F</option>
                                                                  <option value="G">G</option>
                                                                  <option value="H">H</option>
                                                                  <option value="I">I</option>
                                                                  <option value="J">J</option>
                                                            </select>
                                                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques16 != "C" ? "C" : ""}</i>
                                                      </label>
                                                </div>
                                                <div className='flex gap-1 flex-wrap mb-1'>
                                                      <span className='Numbers'>17</span>
                                                      <label htmlFor="ques17">staff canteen
                                                            <select name="ques17" id="ques17" onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques17 != "G" && "text-red-600"}
                                                                  ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques17 != "" && UserData.ques17 == "G" && "text-green-700"}
                                                                  `}>
                                                                  <option value="" selected></option>
                                                                  <option value="A">A</option>
                                                                  <option value="B">B</option>
                                                                  <option value="C">C</option>
                                                                  <option value="D">D</option>
                                                                  <option value="E">E</option>
                                                                  <option value="F">F</option>
                                                                  <option value="G">G</option>
                                                                  <option value="H">H</option>
                                                                  <option value="I">I</option>
                                                                  <option value="J">J</option>
                                                            </select>
                                                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques17 != "G" ? "G" : ""}</i>
                                                      </label>
                                                </div>
                                                <div className='flex gap-1 flex-wrap mb-1'>
                                                      <span className='Numbers'>18</span>
                                                      <label htmlFor="ques18"> meeting room
                                                            <select name="ques18" id="ques18" onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques18 != "B" && "text-red-600"}
                                                                  ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques18 != "" && UserData.ques18 == "B" && "text-green-700"}
                                                                  `}>
                                                                  <option value="" selected></option>
                                                                  <option value="A">A</option>
                                                                  <option value="B">B</option>
                                                                  <option value="C">C</option>
                                                                  <option value="D">D</option>
                                                                  <option value="E">E</option>
                                                                  <option value="F">F</option>
                                                                  <option value="G">G</option>
                                                                  <option value="H">H</option>
                                                                  <option value="I">I</option>
                                                                  <option value="J">J</option>
                                                            </select>
                                                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques18 != "B" ? "B" : ""}</i>
                                                      </label>
                                                </div>
                                                <div className='flex gap-1 flex-wrap mb-1'>
                                                      <span className='Numbers'>19</span>
                                                      <label htmlFor="ques19"> human resources
                                                            <select name="ques19" id="ques19" onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques19 != "I" && "text-red-600"}
                                                                  ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques19 != "" && UserData.ques19 == "I" && "text-green-700"}
                                                                  `}>
                                                                  <option value="" selected></option>
                                                                  <option value="A">A</option>
                                                                  <option value="B">B</option>
                                                                  <option value="C">C</option>
                                                                  <option value="D">D</option>
                                                                  <option value="E">E</option>
                                                                  <option value="F">F</option>
                                                                  <option value="G">G</option>
                                                                  <option value="H">H</option>
                                                                  <option value="I">I</option>
                                                                  <option value="J">J</option>
                                                            </select>
                                                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques19 != "I" ? "I" : ""}</i>
                                                      </label>
                                                </div>
                                                <div className='flex gap-1 flex-wrap mb-1'>
                                                      <span className='Numbers'>20</span>
                                                      <label htmlFor="ques20">boardroom
                                                            <select name="ques20" id="ques20" onChange={handleValueChange}
                                                                  className={`font-bold ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques20 != "A" && "text-red-600"}
                                                                  ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques20 != "" && UserData.ques20 == "A" && "text-green-700"}
                                                                  `}>
                                                                  <option value="" selected></option>
                                                                  <option value="A">A</option>
                                                                  <option value="B">B</option>
                                                                  <option value="C">C</option>
                                                                  <option value="D">D</option>
                                                                  <option value="E">E</option>
                                                                  <option value="F">F</option>
                                                                  <option value="G">G</option>
                                                                  <option value="H">H</option>
                                                                  <option value="I">I</option>
                                                                  <option value="J">J</option>
                                                            </select>
                                                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques20 != "A" ? "A" : ""}</i>
                                                      </label>
                                                </div>
                                          </div>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test1-Part3.mp3?_=3") }}
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
                                    <h5>PART 3  <br />
                                          Questions 21 and 22</h5> <br />
                                    <h5 className='text-center'>Which TWO parts of the introductory stage to their art projects do Jess and Tom agree were useful?<br /> <br /></h5>
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques21"
                                                TestName="Cambridge-16-Test1"
                                                AnswerData={LAllAnswersData[20]}
                                                userAnswerQN={UserData.ques21}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "the Bird Park visit",
                                                      BData: "the workshop sessions",
                                                      CData: "the Natural History Museum visit"
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques22"
                                                TestName="Cambridge-16-Test1"
                                                AnswerData={LAllAnswersData[21]}
                                                userAnswerQN={UserData.ques22}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "the projects done in previous years",
                                                      BData: "the handouts with research sources",
                                                      CData: "The future is unlucky"
                                                }}
                                          />

                                    </div>

                              </div>

                              <div className="Q-articles font-bold">
                                    <h5>
                                          Questions 23 and 24</h5> <br />
                                    <h5 className='text-center'>In which TWO ways do both Jess and Tom decide to change their proposals?<br /> <br /></h5>
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques23"
                                                TestName="Cambridge-16-Test1"
                                                AnswerData={LAllAnswersData[22]}
                                                userAnswerQN={UserData.ques23}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "by giving a rationale for their action plans",
                                                      BData: "by being less specific about the outcome",
                                                      CData: "by adding a video diary presentation"
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques24"
                                                TestName="Cambridge-16-Test1"
                                                AnswerData={LAllAnswersData[23]}
                                                userAnswerQN={UserData.ques24}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "the projects done in previous years",
                                                      BData: "by making their notes more evaluative",
                                                      CData: "by providing a timeline and a mind map"
                                                }}
                                          />

                                    </div>

                              </div>
                              <div className="Q-articles font-bold">
                                    <h5> Questions 25 - 30</h5> <br />
                                    <h5 className='text-justify'>Which personal meaning do the students decide to give to each of the following pictures? <br />
                                          Choose SIX answers from the box and write the correct letter, A-H, next to Questions 25-30.<br /> Personal meanings</h5>

                              </div>
                              <div className='p-3'>
                                    <p><span className='font-bold mr-2'>A</span> a childhood memory</p>
                                    <p><span className='font-bold mr-2'>B</span>hope for the future</p>
                                    <p><span className='font-bold mr-2'>C</span> fast movement</p>
                                    <p><span className='font-bold mr-2'>D</span> a potential threat</p>
                                    <p><span className='font-bold mr-2'>E</span> the power of colour</p>
                                    <p><span className='font-bold mr-2'>F</span>the continuity of life</p>
                                    <p><span className='font-bold mr-2'>G</span>protection of nature</p>
                                    <p><span className='font-bold mr-2'>H</span>a confused attitude to nature</p>

                              </div> <br />
                              <h5>Pictures</h5> <br />
                              <div className="Questions p-3">
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>25</span>
                                          Falcon (Landseer)
                                          <select name="ques25" id="ques25" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques25 != "D" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques25 != "" && UserData.ques25 == "D" && "text-green-700"}
                                                      `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                                <option value="F">F</option>
                                                <option value="G">G</option>
                                                <option value="H">H</option>
                                                <option value="I">I</option>
                                                <option value="J">J</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques25 != "D" ? "D" : ""}</i>

                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>26</span>
                                          Fish hawk (Audubon)
                                          <select name="ques26" id="ques26" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques26 != "C" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques26 != "" && UserData.ques26 == "C" && "text-green-700"}
                                                      `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                                <option value="F">F</option>
                                                <option value="G">G</option>
                                                <option value="H">H</option>
                                                <option value="I">I</option>
                                                <option value="J">J</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques26 != "C" ? "C" : ""}</i>

                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>27</span>
                                          Kingfisher (van Gogh)
                                          <select name="ques27" id="ques27" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques27 != "A" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques27 != "" && UserData.ques27 == "A" && "text-green-700"}
                                                      `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                                <option value="F">F</option>
                                                <option value="G">G</option>
                                                <option value="H">H</option>
                                                <option value="I">I</option>
                                                <option value="J">J</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques27 != "A" ? "A" : ""}</i>

                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>28</span>
                                          Portrait of William Wells
                                          <select name="ques28" id="ques28" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques28 != "H" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques28 != "" && UserData.ques28 == "H" && "text-green-700"}
                                                      `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                                <option value="F">F</option>
                                                <option value="G">G</option>
                                                <option value="H">H</option>
                                                <option value="I">I</option>
                                                <option value="J">J</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques28 != "H" ? "H" : ""}</i>

                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>29</span>
                                          Vairumati (Gauguin)
                                          <select name="ques29" id="ques29" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques29 != "F" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques29 != "" && UserData.ques29 == "F" && "text-green-700"}
                                                      `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                                <option value="F">F</option>
                                                <option value="G">G</option>
                                                <option value="H">H</option>
                                                <option value="I">I</option>
                                                <option value="J">J</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques29 != "F" ? "F" : ""}</i>

                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-1'>
                                          <span className='Numbers'>30</span>
                                          Portrait of Giovanni de Medici
                                          <select name="ques30" id="ques30" onChange={handleValueChange}
                                                className={`font-bold ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques30 != "G" && "text-red-600"}
                                                      ${ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques30 != "" && UserData.ques30 == "G" && "text-green-700"}
                                                      `}>
                                                <option value="" selected></option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                                <option value="F">F</option>
                                                <option value="G">G</option>
                                                <option value="H">H</option>
                                                <option value="I">I</option>
                                                <option value="J">J</option>
                                          </select>
                                          <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Cambridge-16-Test1" && UserData.ques30 != "G" ? "G" : ""}</i>

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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test1-Part4.mp3?_=4") }}
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
                                    <h5 className='text-center mt-4 mb-2 text-inherit'>Stoicism</h5> <br /> <br />
                              </div>
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          Stoicism is still relevant today because of its
                                          <span className='Numbers'>31</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques31"
                                                TestName={"Cambridge-16-Test1"}
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
                                          appeal.


                                    </div><br />
                                    <h5>Ancient Stoics</h5> <br />
                                    <label htmlFor="">●   Stoicism was founded over 2,000 years ago in Greece.</label> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          ●   The Stoics’ ideas are surprisingly well known, despite not being intended for
                                          <span className='Numbers'>32</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques32"
                                                TestName={"Cambridge-16-Test1"}
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

                                    </div> <br />
                                    <h5>Stoic principles</h5> <br />
                                    <label htmlFor="">●   Happiness could be achieved by leading a virtuous life.  <br />

                                          ●   Controlling emotions was essential.</label>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          ●   Epictetus said that external events cannot be controlled but the
                                          <span className='Numbers'>33</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques33"
                                                TestName={"Cambridge-16-Test1"}
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
                                          people make in response can be controlled.

                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          ●   A Stoic is someone who has a different view on experiences which others would consider as
                                          <span className='Numbers'>34</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques34"
                                                TestName={"Cambridge-16-Test1"}
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

                                    </div><br /> <br />
                                    <h5>The influence of Stoicism</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          ●   George Washington organised a
                                          <span className='Numbers'>35</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques35"
                                                TestName={"Cambridge-16-Test1"}
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
                                          about Cato to motivate his men.

                                    </div> <br />
                                    <label htmlFor="">●   The French artist Delacroix was a Stoic.</label> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          ●   Adam Smith’s ideas on
                                          <span className='Numbers'>36</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques36"
                                                TestName={"Cambridge-16-Test1"}
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
                                          were influenced by Stoicism.

                                    </div> <br />
                                    <label htmlFor="">●   Some of today’s political leaders are inspired by the Stoics. <br />

                                          ●   Cognitive Behaviour Therapy (CBT)</label>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          –  the treatment for
                                          <span className='Numbers'>37</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques37"
                                                TestName={"Cambridge-16-Test1"}
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
                                          is based on ideas from Stoicism

                                    </div><br />
                                    <div className="question flex flex-wrap gap-2">
                                          –  people learn to base their thinking on
                                          <span className='Numbers'>38</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques38"
                                                TestName={"Cambridge-16-Test1"}
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

                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          ●   In business, people benefit from Stoicism by identifying obstacles as
                                          <span className='Numbers'>39</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques39"
                                                TestName={"Cambridge-16-Test1"}
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

                                    <h5>Relevance of Stoicism</h5> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          ●   It requires a lot of
                                          <span className='Numbers'>40</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques40"
                                                TestName={"Cambridge-16-Test1"}
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
                                          but Stoicism can help people to lead a good life. <br />●   It teaches people that having a strong character is more important than anything else.
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
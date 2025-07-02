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
            ["B"], ["B"], ["C"], ["A"], ["D"], ["B"], ["write music"], ["85"], ["14th September"], ["Curtis"],
            // Section 2
            ["A"], ["C"], ["C"], ["B"], ["C"], ["F"], ["B"], ["A"], ["E"], ["D"],
            // Section 3
            ["Professional Learning"], ["team research"], ["the result", "results"], ["behaviours", "behaviors"], ["diary"],
            ["video recording"], ["simulation"], ["test results"], ["the internet", "internet"], ["interviews"],
            // Section 4
            ["carbon"], ["forests"], ["transportation", "transport"], ["rubbish"], ["promotion"],
            ["culture"], ["crime"], ["air"], ["welfare"], ["traffic"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-14-Section1.mp3" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Listening Practice Test 14</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-14-Section1.mp3") }}
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


                        <div className="w-full ">
                              <h4 className="text-2xl font-bold mb-2 ">SECTION 1</h4>
                              <h5 className='mb-3'>Questions 1-3</h5>
                              <p className="text-lg font-semibold mb-2">Choose the correct letter, A, B or C.</p>
                              <div className="Questions mt-3">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques1"
                                          TestName="Actual-test-14"
                                          AnswerData={LAllAnswersData[0]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques1}
                                          contentsObj={{
                                                Title: "The teacher praised student Emma for",
                                                AData: "her good performance in public show.",
                                                BData: "setting a good example for others.",
                                                CData: "settling in quickly"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques2"
                                          TestName="Actual-test-14"
                                          AnswerData={LAllAnswersData[1]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques2}
                                          contentsObj={{
                                                Title: "Why has the timetable for drama class changed?",
                                                AData: "Because of falling enrollment.",
                                                BData: "Because the class size is too big.",
                                                CData: "Because of the availability of music room."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques3"
                                          TestName="Actual-test-14"
                                          AnswerData={LAllAnswersData[2]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques3}
                                          contentsObj={{
                                                Title: "What is the new time for the drama class?",
                                                AData: "3.15 pm",
                                                BData: "4.15 pm",
                                                CData: "4.45 pm"
                                          }}
                                    />

                              </div>
                              <div className="Q-articles mt-4 font-bold">
                                    Questions 4-16<br />
                                    Write the correct letter, A-E, next to Questions 4-6.<br /> <br />
                              </div>
                              <div className='p-1 w-[80%] border-[2px] border-gray-300'>
                                    <p><span className='font-bold mr-2'>A</span> The course is full.</p>
                                    <p><span className='font-bold mr-2'>B</span> The course fee is too expensive.</p>
                                    <p><span className='font-bold mr-2'>C</span> She has another activity at that time.</p>
                                    <p><span className='font-bold mr-2'>D</span> She has another activity that evening.</p>
                                    <p><span className='font-bold mr-2'>E</span> The class is too late.</p>
                                    <br />
                              </div>
                              <div className="Questions">
                                    <h4>Courses</h4> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>4</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques4"
                                                TestName={"Actual-test-14"}
                                                AnswerData={LAllAnswersData[3]}
                                                userAnswerQN={UserData.ques4}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>5</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques5"
                                                TestName={"Actual-test-14"}
                                                AnswerData={LAllAnswersData[4]}
                                                userAnswerQN={UserData.ques5}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>6</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques6"
                                                TestName={"Actual-test-14"}
                                                AnswerData={LAllAnswersData[5]}
                                                userAnswerQN={UserData.ques6}
                                          />
                                    </div>
                              </div>
                              <div className="Q-articles mt-4 font-bold">
                                    Questions 7-10<br /><br />
                                    Complete the notes below.<br /> <br />
                                    Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.<br /> <br />
                              </div>
                              <div className="Questions mt-4">
                                    <h5>Information on Music Class</h5> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          The class teaches children to play instruments and how to <span className='Numbers'>7</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques7"
                                                TestName={"Actual-test-14"}
                                                AnswerData={LAllAnswersData[6]}
                                                userAnswerQN={UserData.ques7}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          Cost of the course: $ <span className='Numbers'>8</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques8"
                                                TestName={"Actual-test-14"}
                                                AnswerData={LAllAnswersData[7]}
                                                userAnswerQN={UserData.ques8}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          Date Emma starts the course: <span className='Numbers'>9</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques9"
                                                TestName={"Actual-test-14"}
                                                AnswerData={LAllAnswersData[8]}
                                                userAnswerQN={UserData.ques9}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          Teacher: Jamal  <span className='Numbers'>10</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques10"
                                                TestName={"Actual-test-14"}
                                                AnswerData={LAllAnswersData[9]}
                                                userAnswerQN={UserData.ques10}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-14-Section2.mp3") }}
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
                        <div className="Questions font-bold">
                              <div className="Q-articles">
                                    <h4>SECTION 2 </h4> <br />
                                    Questions 11-15<br /><br />
                                    Choose the correct letter, A, B or C.<br /> <br />

                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques11"
                                          TestName="Actual-test-14"
                                          AnswerData={LAllAnswersData[10]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques11}
                                          contentsObj={{
                                                Title: "Why does the speaker recommend the Sky Hotel?",
                                                AData: "Because it is quite comfortable.",
                                                BData: "Because it provides ski and snowboard equipment rentals.",
                                                CData: "Because it has health and sports club."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques12"
                                          TestName="Actual-test-14"
                                          AnswerData={LAllAnswersData[11]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques12}
                                          contentsObj={{
                                                Title: "What is new in this year’s exhibition?",
                                                AData: "photos of top ski resorts worldwide",
                                                BData: "ski equipment",
                                                CData: "computer simulation"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques13"
                                          TestName="Actual-test-14"
                                          AnswerData={LAllAnswersData[12]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques13}
                                          contentsObj={{
                                                Title: "How do people enter the skiing and snowboarding competition?",
                                                AData: "They can send emails to the committee.",
                                                BData: "They can fill out the back of the entrance ticket.",
                                                CData: "They can check out the exhibition newsletter"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques14"
                                          TestName="Actual-test-14"
                                          AnswerData={LAllAnswersData[13]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques14}
                                          contentsObj={{
                                                Title: "What did the media focus on this year?",
                                                AData: "not enough snow",
                                                BData: "reduction in fee",
                                                CData: "the decline of participants"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques15"
                                          TestName="Actual-test-14"
                                          AnswerData={LAllAnswersData[14]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques15}
                                          contentsObj={{
                                                Title: "Why does the speaker recommend the ski program?",
                                                AData: "The instructors are quite friendly and patient.",
                                                BData: "It includes lessons and sessions that suit only beginners",
                                                CData: "It provides special offers at the moment."
                                          }}
                                    />

                              </div>


                              <div className="Q-articles mt-3 font-bold">
                                    <h5>Questions 16-20</h5> <br />
                                    Choose FIVE answers from the box and write the correct letter, A-F, next to Questions 16-20.<br /><br />
                                    <div className='p-1 w-[80%] border-[2px] border-gray-300'>
                                          <p><span className='font-bold mr-2'>A</span> exploring new destinations</p>
                                          <p><span className='font-bold mr-2'>B</span> how to make the skiing boots comfortable</p>
                                          <p><span className='font-bold mr-2'>C</span> how to become a ski instructor</p>
                                          <p><span className='font-bold mr-2'>D</span> how to combine other activities with skiing</p>
                                          <p><span className='font-bold mr-2'>E</span> how to improve the skills of skiing</p>
                                          <p><span className='font-bold mr-2'>F</span> information about skiing safety</p>
                                          <br />
                                    </div>

                              </div>
                              <div className="Questions">
                                    <h5>Presentation</h5> <br />
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>16</span> Simon’s talk
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques16"
                                                TestName={"Actual-test-14"}
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
                                          <span className='Numbers'>17</span> Solution
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName={"Actual-test-14"}
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
                                          <span className='Numbers'>18</span> Film
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName={"Actual-test-14"}
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
                                          <span className='Numbers'>19</span> Tricks
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName={"Actual-test-14"}
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
                                          <span className='Numbers'>20</span> Johnson’s talk
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName={"Actual-test-14"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-14-Section3.mp3") }}
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
                                    Questions 21-23<br />
                                    Complete the sentences below. <br /><br />

                                    Write NO MORE THAN TWO WORDS for each answer.<br /><br />
                              </div>
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          The new teacher who is very popular among students wrote a book titled  <span className='Numbers'>21</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques21"
                                                TestName={"Actual-test-14"}
                                                AnswerData={LAllAnswersData[20]}
                                                userAnswerQN={UserData.ques21}
                                          />
                                    </div>

                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          It covers techniques including doing research as part of a  <span className='Numbers'>22</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques22"
                                                TestName={"Actual-test-14"}
                                                AnswerData={LAllAnswersData[21]}
                                                userAnswerQN={UserData.ques22}
                                          />
                                    </div>

                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          The objective is for the students to present <span className='Numbers'>23</span>   in a collaborative manner.
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques23"
                                                TestName={"Actual-test-14"}
                                                AnswerData={LAllAnswersData[22]}
                                                userAnswerQN={UserData.ques23}
                                          />
                                    </div>

                              </div>

                              <div className="Q-articles mt-4 font-bold">
                                    <h5 className=''>Questions 24-30 </h5>
                                    Complete the table below.<br /> <br />
                                    Write NO MORE THAN TWO WORDS for each answer.<br /> <br />
                                    <h5>Observational method:</h5> <br />

                              </div>
                              <div className="Questions">
                                    <div className='p-3'>
                                          {/* Observation Section */}
                                          <div className='p-3 border-[2px] border-gray-300 rounded-lg shadow-sm mb-4'>
                                                <div className='p-2 flex justify-between items-center text-sm'>
                                                      <p className='font-semibold'>Observation Checklist</p>
                                                      <span className='text-gray-600'>Conduct</span>
                                                </div>

                                                {/* Question 24 */}
                                                <div className='p-2 border-t-[2px] border-gray-200 flex justify-between items-center text-sm'>
                                                      <p className='flex flex-wrap'>
                                                            Students: examine the
                                                            <div className='flex'>
                                                                  <span className='Numbers'>24</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques24"
                                                                        TestName={"Actual-test-14"}
                                                                        AnswerData={LAllAnswersData[23]}
                                                                        userAnswerQN={UserData.ques24}
                                                                  />
                                                            </div>
                                                            of peer pupils
                                                      </p>
                                                      <p className='font-semibold'>
                                                            Keep a
                                                            <span className='Numbers'>25</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques25"
                                                                  TestName={"Actual-test-14"}
                                                                  AnswerData={LAllAnswersData[24]}
                                                                  userAnswerQN={UserData.ques25}
                                                            />
                                                      </p>
                                                </div>

                                                {/* Question 26 */}
                                                <div className='p-2 border-t-[2px] border-gray-200 flex justify-between items-center text-sm'>
                                                      <p className='flex flex-wrap'>
                                                            Carry out examine the
                                                            <span className='Numbers'>26</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques26"
                                                                  TestName={"Actual-test-14"}
                                                                  AnswerData={LAllAnswersData[25]}
                                                                  userAnswerQN={UserData.ques26}
                                                            />
                                                      </p>
                                                      <p className='flex flex-wrap'>
                                                            In-class
                                                            <span className='Numbers'>27</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques27"
                                                                  TestName={"Actual-test-14"}
                                                                  AnswerData={LAllAnswersData[26]}
                                                                  userAnswerQN={UserData.ques27}
                                                            />
                                                      </p>
                                                </div>
                                          </div>

                                          {/* Non-Observational Method Section */}
                                          <h4 className='text-sm text-gray-600 mb-2'>Non-observational method:</h4>
                                          <div className='p-3 border-[2px] border-gray-300 rounded-lg shadow-sm'>
                                                <div className='p-2 flex justify-between items-center text-sm'>
                                                      <p className='font-semibold'>Non-observation Checklist</p>
                                                      <span className='text-gray-600'>Conduct</span>
                                                </div>

                                                {/* Question 28 */}
                                                <div className='p-2 border-t-[2px] border-gray-200 flex justify-between items-center text-sm'>
                                                      <p className='font-semibold'>Statistics</p>
                                                      <p className='flex flex-wrap'>
                                                            Evaluate
                                                            <span className='Numbers'>28</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques28"
                                                                  TestName={"Actual-test-14"}
                                                                  AnswerData={LAllAnswersData[27]}
                                                                  userAnswerQN={UserData.ques28}
                                                            />
                                                      </p>
                                                </div>

                                                {/* Question 29 and 30 */}
                                                <div className='p-2 border-t-[2px] border-gray-200'>
                                                      <p className='flex flex-wrap'>
                                                            Questionnaires
                                                      </p>
                                                      <div>
                                                            <p className='flex flex-wrap'>
                                                                  With the help of
                                                                  <span className='Numbers'>29</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques29"
                                                                        TestName={"Actual-test-14"}
                                                                        AnswerData={LAllAnswersData[28]}
                                                                        userAnswerQN={UserData.ques29}
                                                                  />
                                                                  to identify respondents
                                                            </p>
                                                            <br />
                                                            <p className='flex flex-wrap'>
                                                                  Choose own respondents to do
                                                                  <span className='Numbers'>30</span>
                                                                  <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques30"
                                                                        TestName={"Actual-test-14"}
                                                                        AnswerData={LAllAnswersData[29]}
                                                                        userAnswerQN={UserData.ques30}
                                                                  />
                                                            </p>
                                                      </div>
                                                </div>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-14-Section4.mp3") }}
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
                              <div className='p-2'>
                                    <h4 className='text-2lg font-semibold mb-4'>SECTION 4<br />Questions 31-40</h4>
                                    <p className='text-sm mb-4'>Complete the notes below.<br />Write ONE WORD ONLY for each answer.</p>

                                    <div className='w-full'>
                                          <p className='font-semibold text-sm mb-4'>ARGUMENTS FOR AND AGAINST URBAN MIGRATION</p>

                                          <p className='text-sm mb-4'>Cities now:</p>
                                          <ul className='list-none p-0'>
                                                <li className='p-2 flex'>
                                                      • account for 3% of the planet’s land areas
                                                </li>
                                                <li className='p-2 flex'>
                                                      • consume more
                                                      <div className='ml-2 flex'>
                                                            <span className='Numbers'>31</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques31"
                                                                  TestName={"Actual-test-14"}
                                                                  AnswerData={LAllAnswersData[30]}
                                                                  userAnswerQN={UserData.ques31}
                                                            />
                                                      </div>
                                                      than the countryside
                                                </li>
                                          </ul>

                                          <p className='text-sm mb-4'>Advantages for moving into the city:</p>
                                          <ul className='list-none p-0'>
                                                <li className='p-2 flex'>
                                                      • good for some
                                                      <div className='ml-2 flex'>
                                                            <span className='Numbers'>32</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques32"
                                                                  TestName={"Actual-test-14"}
                                                                  AnswerData={LAllAnswersData[31]}
                                                                  userAnswerQN={UserData.ques32}
                                                            />
                                                      </div>
                                                      to recover
                                                </li>
                                                <li className='p-2 flex'>
                                                      • poor
                                                      <div className='ml-2 flex'>
                                                            <span className='Numbers'>33</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques33"
                                                                  TestName={"Actual-test-14"}
                                                                  AnswerData={LAllAnswersData[32]}
                                                                  userAnswerQN={UserData.ques33}
                                                            />
                                                      </div>
                                                      in the countryside
                                                </li>
                                                <li className='p-2 flex'>
                                                      • clean energy: recycling of methane gas produced from
                                                      <div className='ml-2 flex'>
                                                            <span className='Numbers'>34</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques34"
                                                                  TestName={"Actual-test-14"}
                                                                  AnswerData={LAllAnswersData[33]}
                                                                  userAnswerQN={UserData.ques34}
                                                            />
                                                      </div>
                                                </li>
                                          </ul>

                                          <p className='text-sm mb-4'>For women:</p>
                                          <ul className='list-none p-0'>
                                                <li className='p-2 flex'>
                                                      • more likely to have late marriages
                                                </li>
                                                <li className='p-2 flex'>
                                                      • better chance of getting a
                                                      <div className='ml-2 flex'>
                                                            <span className='Numbers'>35</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques35"
                                                                  TestName={"Actual-test-14"}
                                                                  AnswerData={LAllAnswersData[34]}
                                                                  userAnswerQN={UserData.ques35}
                                                            />
                                                      </div>
                                                      at work
                                                </li>
                                          </ul>

                                          <p className='text-sm mb-4'>Downsides of moving into the city:</p>
                                          <ul className='list-none p-0'>
                                                <li className='p-2 flex'>
                                                      • possible to lose
                                                      <div className='ml-2 flex'>
                                                            <span className='Numbers'>36</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques36"
                                                                  TestName={"Actual-test-14"}
                                                                  AnswerData={LAllAnswersData[35]}
                                                                  userAnswerQN={UserData.ques36}
                                                            />
                                                      </div>
                                                      because it is difficult to maintain previous lifestyle
                                                </li>
                                                <li className='p-2 flex'>
                                                      • higher rates of
                                                      <div className='ml-2 flex'>
                                                            <span className='Numbers'>37</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques37"
                                                                  TestName={"Actual-test-14"}
                                                                  AnswerData={LAllAnswersData[36]}
                                                                  userAnswerQN={UserData.ques37}
                                                            />
                                                      </div>
                                                      in the city than in the country
                                                </li>
                                                <li className='p-2 flex'>
                                                      • poor quality of
                                                      <span className='Numbers'>38</span>
                                                            <Text_inputs
                                                                  handleValueChange={handleValueChange}
                                                                  QNum="ques38"
                                                                  TestName={"Actual-test-14"}
                                                                  AnswerData={LAllAnswersData[37]}
                                                                  userAnswerQN={UserData.ques38}
                                                            />
                                                      in the city
                                                </li>
                                          </ul>

                                          <p className='text-sm mb-4'>Economic factors:</p>
                                          <ul className='list-none p-0'>
                                                <li className='p-2 flex flex-wrap'>
                                                      • Increased
                                                      <span className='Numbers'>39</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques39"
                                                            TestName={"Actual-test-14"}
                                                            AnswerData={LAllAnswersData[38]}
                                                            userAnswerQN={UserData.ques39}
                                                      />
                                                      in population results in increase in energy consumption.
                                                </li>
                                                <li className='p-2 flex flex-wrap'>
                                                      • People find the heavy
                                                      <span className='Numbers'>40</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques40"
                                                            TestName={"Actual-test-14"}
                                                            AnswerData={LAllAnswersData[39]}
                                                            userAnswerQN={UserData.ques40}
                                                      />
                                                      stressful.
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
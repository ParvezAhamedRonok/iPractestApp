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
import Image_1 from "@assets/images/listening-images/Actural-13-img-1.jpg"
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
            ["Central"], ["address"], ["pool"], ["reception"], ["view"],
            ["prices"], ["Spanish"], ["July"], ["Cliffton"], ["903036602"],
            // Section 2
            ["C"], ["A"], ["C"], ["C"], ["A"],
            ["C"], ["E"], ["A"], ["G"], ["D"],
            // Section 3
            ["C"], ["A"], ["A"], ["A"], ["E"],
            ["G"], ["C"], ["A"], ["B"], ["H"],
            // Section 4
            ["temperature"], ["movements"], ["bones"], ["bushes"], ["roots"],
            ["sharks"], ["chicks"], ["feathers"], ["spaces"], ["diversity"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-13-Section1.mp3" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Listening Practice Test 13</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-13-Section1.mp3") }}
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
                        <div className="w-full p-2">
                              <h4 className="text-2xl font-bold mb-4">SECTION 1</h4>
                              <h5 className="text-xl font-semibold mb-2">Questions 1-10</h5>
                              <p className="mb-4">Complete the notes below.</p>
                              <p className="mb-6 text-gray-600">Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.</p>

                              <div className="space-y-3">
                                    <p><strong>Example</strong></p>
                                    <p>• Problem with: the brochure sample</p>
                                    <p className='flex flex-wrap'>• Company name: <span className='Numbers'>1</span>
                                          <Text_inputs handleValueChange={handleValueChange} QNum="ques1" TestName="Actual-test-13" AnswerData={LAllAnswersData[0]} userAnswerQN={UserData.ques1} /> Hotel Chains</p>

                                    <p className='flex flex-wrap'>• Letters of the <span className='Numbers'>2</span>
                                          <Text_inputs handleValueChange={handleValueChange} QNum="ques2" TestName="Actual-test-13" AnswerData={LAllAnswersData[1]} userAnswerQN={UserData.ques2} /> should be bigger.</p>

                                    <p className='flex flex-wrap'>• The information of the <span className='Numbers'>3</span>
                                          <Text_inputs handleValueChange={handleValueChange} QNum="ques3" TestName="Actual-test-13" AnswerData={LAllAnswersData[2]} userAnswerQN={UserData.ques3} /> should be removed.</p>

                                    <p className='flex flex-wrap'>• Change the description under the top photo to <span className='Numbers'>4</span>
                                          <Text_inputs handleValueChange={handleValueChange} QNum="ques4" TestName="Actual-test-13" AnswerData={LAllAnswersData[3]} userAnswerQN={UserData.ques4} /></p>

                                    <p className='flex flex-wrap'>• Use the picture with the <span className='Numbers'>5</span>
                                          <Text_inputs handleValueChange={handleValueChange} QNum="ques5" TestName="Actual-test-13" AnswerData={LAllAnswersData[4]} userAnswerQN={UserData.ques5} /> of the hotel.</p>

                                    <p className='flex flex-wrap'>• The <span className='Numbers'>6</span>
                                          <Text_inputs handleValueChange={handleValueChange} QNum="ques6" TestName="Actual-test-13" AnswerData={LAllAnswersData[5]} userAnswerQN={UserData.ques6} /> should be in red print.</p>

                                    <p className='flex flex-wrap'>• Translate into <span className='Numbers'>7</span>
                                          <Text_inputs handleValueChange={handleValueChange} QNum="ques7" TestName="Actual-test-13" AnswerData={LAllAnswersData[6]} userAnswerQN={UserData.ques7} /></p>

                                    <p className='flex flex-wrap'>• Deadline: by the end of <span className='Numbers'>8</span>
                                          <Text_inputs handleValueChange={handleValueChange} QNum="ques8" TestName="Actual-test-13" AnswerData={LAllAnswersData[7]} userAnswerQN={UserData.ques8} /></p>

                                    <p className='flex flex-wrap'>• Address: No. 9 Green Drive, <span className='Numbers'>9</span>
                                          <Text_inputs handleValueChange={handleValueChange} QNum="ques9" TestName="Actual-test-13" AnswerData={LAllAnswersData[8]} userAnswerQN={UserData.ques9} />, NY21300</p>

                                    <p className='flex flex-wrap'>• Telephone number: <span className='Numbers'>10</span>
                                          <Text_inputs handleValueChange={handleValueChange} QNum="ques10" TestName="Actual-test-13" AnswerData={LAllAnswersData[9]} userAnswerQN={UserData.ques10} /></p>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-13-Section2.mp3") }}
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
                                    <h5>SECTION 2 </h5> <br />
                                    Questions 11-16.<br /> <br />
                                    Choose the correct letter, A, B or C.<br /> <br />

                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques11"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[10]}
                                          userAnswerQN={UserData.ques11}
                                          contentsObj={{
                                                Title: "The most famous view in this park is",
                                                AData: "the largest waterfall worldwide.",
                                                BData: "the longest river in the world.",
                                                CData: "the biggest sub-tropical rainforest in the world."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques12"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[11]}
                                          userAnswerQN={UserData.ques12}
                                          contentsObj={{
                                                Title: "According to the tour guide, what is best to do on top of the mountain?",
                                                AData: "having a picnic",
                                                BData: "taking photos",
                                                CData: "strolling about"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques13"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[12]}
                                          userAnswerQN={UserData.ques13}
                                          contentsObj={{
                                                Title: "What did the tour guide recommend for more experienced walkers?",
                                                AData: "the mountain trail",
                                                BData: "the Bush Track",
                                                CData: "the Creek Circuit"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques14"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[13]}
                                          userAnswerQN={UserData.ques14}
                                          contentsObj={{
                                                Title: "What is mentioned about the transport in the park?",
                                                AData: "Bicycles can be hired.",
                                                BData: "Trams are available for tourists.",
                                                CData: "It is included in the bill."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques15"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[14]}
                                          userAnswerQN={UserData.ques15}
                                          contentsObj={{
                                                Title: "Which activity is provided for adults all year round?",
                                                AData: "abseiling",
                                                BData: "bungee jumping",
                                                CData: "paragliding"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques16"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[15]}
                                          userAnswerQN={UserData.ques16}
                                          contentsObj={{
                                                Title: "What should the visitors do before they go to the restaurant?",
                                                AData: "make bookings",
                                                BData: "inquire about availability",
                                                CData: "collect the meal ticket at the reception"
                                          }}
                                    />

                              </div>
                              <div className="Q-articles font-bold">
                                    <h5>Questions 17-20</h5> <br />
                                    Label the plan below.<br /><br />
                                    Write the correct letter, A-I, next to Questions 17-20.<br /> <br />
                                    <Image src={Image_1} className='w-full' alt='actual-test-13-image-1' /> <br />
                              </div>
                              <div className="Questions">

                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>17</span>Campsite
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName={"Actual-test-13"}
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
                                          <span className='Numbers'>18</span> Business Centre
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName={"Actual-test-13"}
                                                AnswerData={LAllAnswersData[17]}
                                                userAnswerQN={UserData.ques18}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>19</span> Museum
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName={"Actual-test-13"}
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
                                          <span className='Numbers'>20</span> cafe
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName={"Actual-test-13"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-13-Section3.mp3") }}
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
                                    <h5>SECTION 3 </h5> <br />
                                    Questions 21-24<br />
                                    Choose the correct letter, A, B or C.<br /> <br />
                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques21"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[20]}
                                          userAnswerQN={UserData.ques21}
                                          contentsObj={{
                                                Title: "How old are the students on the nursing program?",
                                                AData: "They are teenagers.",
                                                BData: "They are in their twenties.",
                                                CData: "They belong to different age groups."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques22"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[21]}
                                          userAnswerQN={UserData.ques22}
                                          contentsObj={{
                                                Title: "What do the speakers say about the group project?",
                                                AData: "It helps to improve relationship among different classmates.",
                                                BData: "It helps to develop problem-solving skills.",
                                                CData: "It provides a supportive learning environment."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques23"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[22]}
                                          userAnswerQN={UserData.ques23}
                                          contentsObj={{
                                                Title: "Which part of the program surprised Paul?",
                                                AData: "There’s a number of essays to write.",
                                                BData: "There’s a lot of practical work.",
                                                CData: "There’s an internship provided."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques24"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[23]}
                                          userAnswerQN={UserData.ques24}
                                          contentsObj={{
                                                Title: "What do they feel about learning law?",
                                                AData: "It is essential training.",
                                                BData: "It is too theoretical.",
                                                CData: "It takes up too much time."
                                          }}
                                    />


                              </div>
                              <div className="Q-articles mt-5 font-bold">
                                    <h5 className='mb-2'>Questions 25-30 </h5>
                                    What are the suggestions offered by the speakers?<br />
                                    Choose SIX answers from the box and write the correct letter, A-H, next to Questions 25-30.<br /> <br />

                                    <div className='p-3 border-[2px] border-gray-400 rounded'>
                                          <p><span className='font-bold mr-2'>A</span> get feedback from teaching staff</p>
                                          <p><span className='font-bold mr-2'>B</span> do more reading</p>
                                          <p><span className='font-bold mr-2'>C</span> get help from school supporting staff</p>
                                          <p><span className='font-bold mr-2'>D</span> get help for nursing problems</p>
                                          <p><span className='font-bold mr-2'>E</span> manage time properly</p>
                                          <p><span className='font-bold mr-2'>F</span> be well prepared</p>
                                          <p><span className='font-bold mr-2'>G</span> review the notes regularly</p>
                                          <p><span className='font-bold mr-2'>H</span> don’t set unrealistic goals</p>
                                    </div>
                                    <br />

                                    <div className="Questions">
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>25</span>
                                                <label htmlFor="ques25">Essays</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques25"
                                                      TestName={"Actual-test-13"}
                                                      AnswerData={LAllAnswersData[24]}
                                                      userAnswerQN={UserData.ques25}
                                                />
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>26</span>
                                                <label htmlFor="ques26">Lectures</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques26"
                                                      TestName={"Actual-test-13"}
                                                      AnswerData={LAllAnswersData[25]}
                                                      userAnswerQN={UserData.ques26}
                                                />
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>27</span>
                                                <label htmlFor="ques27">Research</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques27"
                                                      TestName={"Actual-test-13"}
                                                      AnswerData={LAllAnswersData[26]}
                                                      userAnswerQN={UserData.ques27}
                                                />
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>28</span>
                                                <label htmlFor="ques28">Online forum</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques28"
                                                      TestName={"Actual-test-13"}
                                                      AnswerData={LAllAnswersData[27]}
                                                      userAnswerQN={UserData.ques28}
                                                />
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>29</span>
                                                <label htmlFor="ques29">Placement tests</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques29"
                                                      TestName={"Actual-test-13"}
                                                      AnswerData={LAllAnswersData[28]}
                                                      userAnswerQN={UserData.ques29}
                                                />
                                          </div>
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>30</span>
                                                <label htmlFor="ques30">Freshmen</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques30"
                                                      TestName={"Actual-test-13"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-13-Section4.mp3") }}
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
                              <h4 className="text-xl font-semibold mb-4">SECTION 4</h4>
                              <h5 className="text-lg font-medium mb-4">Questions 31-40</h5>
                              <p className="mb-4">Complete the notes below. Write ONE WORD ONLY for each answer.</p>
                              <p className="font-semibold mb-2">Penguins in Africa</p>
                              <p className="mb-2">Appearance and lifestyle</p>
                              <p className="mb-4">They are also called Jackass Penguins for the sound they make.</p>

                              <div className="mb-2 flex gap-2">
                                    <span className="Numbers">31</span>
                                    <Text_inputs
                                          handleValueChange={handleValueChange}
                                          QNum="ques31"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[30]}
                                          userAnswerQN={UserData.ques31}
                                    />
                                    <span>of their body remains constant.</span>
                              </div>

                              <div className="mb-2 flex gap-2">
                                    <span className="Numbers">32</span>
                                    <Text_inputs
                                          handleValueChange={handleValueChange}
                                          QNum="ques32"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[31]}
                                          userAnswerQN={UserData.ques32}
                                    />
                                    <span>on land from dusk till dawn.</span>
                              </div>

                              <div className="mb-2 flex gap-2">
                                    <span className="Numbers">33</span>
                                    <Text_inputs
                                          handleValueChange={handleValueChange}
                                          QNum="ques33"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[32]}
                                          userAnswerQN={UserData.ques33}
                                    />
                                    <span>because they have heavy</span>
                              </div>

                              <div className="mb-2 flex gap-2">
                                    <span className="Numbers">34</span>
                                    <Text_inputs
                                          handleValueChange={handleValueChange}
                                          QNum="ques34"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[33]}
                                          userAnswerQN={UserData.ques34}
                                    />
                                    <span>nest under</span>
                              </div>

                              <div className="mb-2 flex gap-2">
                                    <span className="Numbers">35</span>
                                    <Text_inputs
                                          handleValueChange={handleValueChange}
                                          QNum="ques35"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[34]}
                                          userAnswerQN={UserData.ques35}
                                    />
                                    <span>tree</span>
                              </div>

                              <p className="font-semibold mb-2">Predators</p>
                              <ul className="list-disc ml-6 mb-4">
                                    <li>seals</li>
                                    <li className="flex gap-2">
                                          <span className="Numbers">36</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques36"
                                                TestName="Actual-test-13"
                                                AnswerData={LAllAnswersData[35]}
                                                userAnswerQN={UserData.ques36}
                                          />
                                    </li>
                                    <li className="flex gap-2">
                                          <span className="Numbers">37</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques37"
                                                TestName="Actual-test-13"
                                                AnswerData={LAllAnswersData[36]}
                                                userAnswerQN={UserData.ques37}
                                          />
                                    </li>
                              </ul>

                              <p className="font-semibold mb-2">Threats</p>
                              <p className="mb-2">They lose</p>
                              <div className="mb-2 flex gap-2">
                                    <span className="Numbers">38</span>
                                    <Text_inputs
                                          handleValueChange={handleValueChange}
                                          QNum="ques38"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[37]}
                                          userAnswerQN={UserData.ques38}
                                    />
                                    <span>in winter.</span>
                              </div>

                              <p className="mb-2">They are fighting for nesting</p>
                              <div className="mb-2 flex gap-2">
                                    <span className="Numbers">39</span>
                                    <Text_inputs
                                          handleValueChange={handleValueChange}
                                          QNum="ques39"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[38]}
                                          userAnswerQN={UserData.ques39}
                                    />
                                    <span>and food because of human activities.</span>
                              </div>

                              <p className="mb-2">In order to improve survivorship, it is helpful to increase the</p>
                              <div className="mb-2 flex gap-2">
                                    <span className="Numbers">40</span>
                                    <Text_inputs
                                          handleValueChange={handleValueChange}
                                          QNum="ques40"
                                          TestName="Actual-test-13"
                                          AnswerData={LAllAnswersData[39]}
                                          userAnswerQN={UserData.ques40}
                                    />
                                    <span>of their genes.</span>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
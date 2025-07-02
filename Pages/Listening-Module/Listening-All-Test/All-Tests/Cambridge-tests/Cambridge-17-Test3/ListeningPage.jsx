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
            ["family"],
            ["fit"],
            ["hotels"],
            ["carrowniskey"],
            ["week"],
            ["bay"],
            ["September"],
            ["19"],
            ["30"],
            ["boots"],
            ["B"], ["B"], ["C"], ["C"], ["A"], ["E"], ["D"], ["G"], ["F"], ["C"],
            ["B"], ["A"], ["A"], ["B"], ["C"], ["A"], ["D"], ["B"], ["F"], ["H"],
            ["mud"],
            ["feathers"],
            ["shape"],
            ["moon"],
            ["neck"],
            ["evidence"],
            ["destinations"],
            ["oceans"],
            ["recovery"],
            ["atlas"],
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test3-part1.mp3?_=1" />
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test3-part1.mp3?_=1") }}
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
                                    Write ONE WORD AND/OR A NUMBER for each answer. <br />
                                    <h5 className='text-center mt-2 text-inherit'>Advice on surfing holidays</h5> <br /> <br />
                                    <h5>Jack’s advice</h5> <br />
                              </div>
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Recommends surfing for</label>
                                          <span className='Numbers'>1</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques1"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <p> holidays in the summer</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   Need to be quite </label>
                                          <span className='Numbers'>2</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques2"
                                                TestName={"Cambridge-17-Test3"}
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
                                    <h5>Irish surfing locations</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   County Clare <br /> <br />

                                                –  Lahinch has some good quality
                                                <span className='Numbers'>3</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques3"
                                                      TestName={"Cambridge-17-Test3"}
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
                                          </label>
                                          <p> and surf schools
                                                –  There are famous cliffs nearby</p>
                                    </div> <br />
                                    <h5>Lunch club</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   County Mayo--

                                                –  Good surf school at </label>
                                          <span className='Numbers'>4</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques4"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <p> beach</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">  –  Surf camp lasts for one</label>
                                          <span className='Numbers'>5</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques5"
                                                TestName={"Cambridge-17-Test3"}
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
                                    <h5>Help for individuals needed next week</h5><br /> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="ques6"> –  Can also explore the loca</label>
                                          <span className='Numbers'>6</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques6"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <p>by kayak</p>
                                    </div> <br />

                                    <h5>Weather</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Best month to go:</label>
                                          <span className='Numbers'>7</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques7"
                                                TestName={"Cambridge-17-Test3"}
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
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Average temperature in summer: approx</label>
                                          <span className='Numbers'>8</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques8"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <p>degrees</p>
                                    </div> <br />
                                    <h5>Costs</h5>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Equipment
                                                –  Wetsuit and surfboard:</label>
                                          <span className='Numbers'>9</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques9"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <label htmlFor="Name"> euros per day

                                                –  Also advisable to hire </label>
                                          <span className='Numbers'>10</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques10"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <p>for warmth</p>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test3-part2.mp3?_=2") }}
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
                                    Questions 11-12<br /><br />
                                    Which TWO facts are given about the school’s extended hours childcare service?<br /> <br />
                              </div>
                              <div className="Q-question">
                                    <h5 className='text-center mt-3 mb-3'>Oniton Hall</h5>
                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques11"
                                                TestName="Cambridge-17-Test3"
                                                AnswerData={LAllAnswersData[10]}
                                                userAnswerQN={UserData.ques11}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "It started recently.",
                                                      BData: "More children attend after school than before school.",
                                                      CData: "An average of 50 children attend in the mornings."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques12"
                                                TestName="Cambridge-17-Test3"
                                                AnswerData={LAllAnswersData[11]}
                                                userAnswerQN={UserData.ques12}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "A child cannot attend both the before and after school sessions.",
                                                      BData: "The maximum number of children who can attend is 70.",
                                                      CData: "A place for artists and writers."
                                                }}
                                          />

                                    </div>


                                    <div className="Q-articles">
                                          <h5></h5> <br />
                                          Questions 13-15 <br /><br />
                                          Choose the correct letter, A, B or C.?<br /> <br />
                                    </div>


                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques13"
                                                TestName="Cambridge-17-Test3"
                                                AnswerData={LAllAnswersData[12]}
                                                userAnswerQN={UserData.ques13}
                                                contentsObj={{
                                                      Title: "How much does childcare cost for a complete afternoon session per child?",
                                                      AData: "£3.50.",
                                                      BData: "£5.70",
                                                      CData: "£7.20"
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques14"
                                                TestName="Cambridge-17-Test3"
                                                AnswerData={LAllAnswersData[13]}
                                                userAnswerQN={UserData.ques14}
                                                contentsObj={{
                                                      Title: "What does the manager say about food?",
                                                      AData: "Children with allergies should bring their own food.",
                                                      BData: "Children with allergies should bring their own food.",
                                                      CData: "Children are given a proper meal at 5 p.m."
                                                }}
                                          />

                                    </div> <br /> <br />
                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques15"
                                                TestName="Cambridge-17-Test3"
                                                AnswerData={LAllAnswersData[14]}
                                                userAnswerQN={UserData.ques15}
                                                contentsObj={{
                                                      Title: "What is different about arrangements in the school holidays?",
                                                      AData: "Children from other schools can attend.",
                                                      BData: "Older children can attend.",
                                                      CData: "A greater number of children can attend."
                                                }}
                                          />

                                    </div> <br /> <br />


                                    <div className="Q-articles">
                                          <h5>Questions 16-20</h5> <br />
                                          What information is given about each of the following activities on offer?<br /><br />
                                          <i className='font-bold p-3 mt-2 mb-2'>Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 16-20.</i>
                                          <i className='font-bold p-3 mt-2 mb-2 border-1 border-black'>
                                                Information<br /><br />

                                                A   has limited availability<br /><br />

                                                B   is no longer available<br /><br />

                                                C   is for over 8s only<br /><br />

                                                D   requires help from parents<br /><br />

                                                E   involves an additional fee<br /><br />

                                                F   is a new activity<br /><br />

                                                G   was requested by children<br /><br />
                                          </i>
                                          <h5>Activities</h5>
                                    </div> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>16</span>
                                          <label htmlFor="Name">Spanish      </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques16"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <label htmlFor="Name">Music            </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <label htmlFor="Name">  Painting  </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <label htmlFor="Name">  Yoga</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <label htmlFor="Name">Cooking</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName={"Cambridge-17-Test3"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test3-part3.mp3?_=3") }}
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
                                    Questions 21-24<br /> <br />
                                    <h5 className='text-center'> Holly’s Work Placement Tutorial<br /> <br /></h5>
                              </div>
                              <div className="Q-question">
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques21"
                                                TestName="Cambridge-17-Test3"
                                                AnswerData={LAllAnswersData[20]}
                                                userAnswerQN={UserData.ques21}
                                                contentsObj={{
                                                      Title: "Holly has chosen the Orion Stadium placement because",
                                                      AData: "it involves children.",
                                                      BData: "it is outdoors.",
                                                      CData: "it sounds like fun."
                                                }}
                                          />

                                    </div>

                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques22"
                                                TestName="Cambridge-17-Test3"
                                                AnswerData={LAllAnswersData[21]}
                                                userAnswerQN={UserData.ques22}
                                                contentsObj={{
                                                      Title: "Which aspect of safety does Dr Green emphasise most?",
                                                      AData: "ensuring children stay in the stadium",
                                                      BData: "checking the equipment children will use",
                                                      CData: "removing obstacles in changing rooms"
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques23"
                                                TestName="Cambridge-17-Test3"
                                                AnswerData={LAllAnswersData[22]}
                                                userAnswerQN={UserData.ques23}
                                                contentsObj={{
                                                      Title: "What does Dr Green say about the spectators?",
                                                      AData: "They can be hard to manage.",
                                                      BData: "They make useful volunteers.",
                                                      CData: "They shouldn’t take photographs."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques24"
                                                TestName="Cambridge-17-Test3"
                                                AnswerData={LAllAnswersData[23]}
                                                userAnswerQN={UserData.ques24}
                                                contentsObj={{
                                                      Title: "What has affected the schedule in the past?",
                                                      AData: "bad weather",
                                                      BData: "an injury",
                                                      CData: "extra time"
                                                }}
                                          />

                                    </div>







                                    <div className="Q-articles mt-3">
                                          <h5>
                                                Questions 25-30<br /> <br />
                                                What do Holly and her tutor agree is an important aspect of each of the following events management skills?<br /><br />
                                                Choose SIX answers from the box and write the correct letter, A-H, next to Questions 25-30.</h5> <br /><br />
                                          <div className='p-3 border-1 rounded border-black'>
                                                <h5 className='text-center mt-3 mb-3'>Important aspects</h5>
                                                <i className='font-bold p-3 mt-2 mb-2'>
                                                      A   being flexible<br /><br />
                                                      B   focusing on details<br /><br />
                                                      C   having a smart appearance<br /><br />
                                                      D   hiding your emotions<br /><br />
                                                      E   relying on experts<br /><br />
                                                      F   trusting your own views<br /><br />
                                                      G   doing one thing at a time<br /><br />
                                                      H   thinking of the future<br /><br />
                                                </i>
                                          </div><br /><br />
                                          <h5>Events management skills</h5> <br />
                                    </div>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>25</span>
                                          <label htmlFor="Name">   Communication </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques25"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <label htmlFor="Name"> Organisation  </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques26"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <label htmlFor="Name">Time management </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques27"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <label htmlFor="Name">Creativity </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques28"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <label htmlFor="Name">Leadership </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques29"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <label htmlFor="Name">Networking  </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques30"
                                                TestName={"Cambridge-17-Test3"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test3-part4.mp3?_=4") }}
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
                                    <h5 className='text-center mt-2 mb-2 text-inherit'>Bird Migration Theory</h5> <br /> <br />
                              </div>
                              <h5>Most birds are believed to migrate seasonally. <br />
                                    Hibernation theory</h5> <br /> <br />
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   It was believed that birds hibernated underwater or buried themselves in</label>
                                          <span className='Numbers'>31</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques31"
                                                TestName={"Cambridge-17-Test3"}
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
                                    <p> ●   This theory was later disproved by experiments on caged birds.</p> <br />
                                    <h5>Transmutation theory</h5> <br />
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">  <label htmlFor="Name"> ●   Aristotle believed birds changed from one species into another in summer and winter.
                                                –  In autumn he observed that redstarts experience the loss of  </label> </label>
                                          <span className='Numbers'>32</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques32"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <p> and thought they then turned into robins.</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name"> –  Aristotle’s assumptions were logical because the two species of birds had a similar</label>
                                          <span className='Numbers'>33</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques33"
                                                TestName={"Cambridge-17-Test3"}
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
                                    </div> <br />
                                    <h5>17th century</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Charles Morton popularised the idea that birds fly to the  </label>
                                          <span className='Numbers'>34</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques34"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <p>in winter.</p>
                                    </div><br /> <br />
                                    <h5>Scientific developments</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   In 1822, a stork was killed in Germany which had an African spear in its</label>
                                          <span className='Numbers'>35</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques35"
                                                TestName={"Cambridge-17-Test3"}
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
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">   –  previously there had been no </label>
                                          <span className='Numbers'>36</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques36"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <p>that storks migrate to Africa</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Little was known about the</label>
                                          <span className='Numbers'>37</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques37"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <p> and journeys of migrating birds until the practice of ringing was established..</p>
                                    </div><br />
                                    <div className="question flex flex-wrap gap-2">
                                          <label htmlFor="Name">–  It was thought large birds carried small birds on some journeys because they were considered incapable of travelling across huge</label>
                                          <span className='Numbers'>38</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques38"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <label htmlFor="Name">–  Ringing depended on what is called the </label>
                                          <span className='Numbers'>39</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques39"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <p>’ of dead birds.</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   In 1931, the first</label>
                                          <span className='Numbers'>40</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques40"
                                                TestName={"Cambridge-17-Test3"}
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
                                          <p> to show the migration of European birds was printed.</p>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
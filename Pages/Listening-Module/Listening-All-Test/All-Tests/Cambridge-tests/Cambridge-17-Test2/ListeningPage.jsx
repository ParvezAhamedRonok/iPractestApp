"use client"
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
            ["collecting"],
            ["records"],
            ["west"],
            ["transport"],
            ["art"],
            ["hospital"],
            ["garden"],
            ["quiz"],
            ["tickets"],
            ["poster"],
            ["B"], ["C"], ["C"], ["B"], ["D"], ["C"], ["G"], ["A"], ["E"], ["F"],
            ["A"], ["A"], ["D"], ["C"], ["A"], ["E"], ["F"], ["B"], ["C"], ["C"],
            ["321,000"],
            ["vocabulary"],
            ["podcast"],
            ["smartphones"],
            ["bilingual"],
            ["playground"],
            ["picture"],
            ["grammer"],
            ["identity"],
            ["fluent"],
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test2-part1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 06</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test2-part1.mp3?_=1") }}
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
                                    <h5 className='text-center mt-2 text-inherit'>Opportunities for voluntary work in Southoe village</h5> <br /> <br />
                                    <h5>Library</h5> <br />
                              </div>
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Help with</label>
                                          <span className='Numbers'>1</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques1"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <p> books (times to be arranged)</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">●   Help needed to keep </label>
                                          <span className='Numbers'>2</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques2"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <p> of books up to date</p>
                                    </div><br /> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   Library is in the</label>
                                          <span className='Numbers'>3</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques3"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <p> Room in the village hall</p>
                                    </div> <br />
                                    <h5>Lunch club</h5> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Help by providing  </label>
                                          <span className='Numbers'>4</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques4"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <label htmlFor="Name"> ●   Help with hobbies such as </label>
                                          <span className='Numbers'>5</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques5"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <label htmlFor="ques6">●   Taking Mrs Carroll to</label>
                                          <span className='Numbers'>6</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques6"
                                                TestName={"Cambridge-17-Test2"}
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
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   Work in the</label>
                                          <span className='Numbers'>7</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques7"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <p>at Mr Selsbury’s house</p>
                                    </div>

                                    <div className="Q-articles mt-4 font-bold">
                                          <h5> Questions 8-10</h5> <br />
                                          <br />
                                          Complete the notes below. <br />
                                          Write ONE WORD AND/OR A NUMBER for each answer. <br />

                                    </div>


                                    <div>
                                          <h5 className='p-3 border-[1px] border-black text-center'>Village social events</h5>
                                          <div className='grid grid-cols-4 border-[1px] border-black p-3 mt-[-3px]'>
                                                <h5>Date</h5>
                                                <h5>Event</h5>
                                                <h5>Location</h5>
                                                <h5>Help needed</h5>
                                          </div>
                                          <div className='grid grid-cols-2 gap-3 border-[2px] border-black p-3 mt-[-3px]'>
                                                <h5>19 Oct__</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <span className='Numbers'>8</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques8"
                                                            TestName={"Cambridge-17-Test2"}
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
                                                      <h5>Village hall</h5>
                                                      <h5>providing refreshments</h5>

                                                </div>
                                          </div>
                                          <div className='grid grid-cols-2 gap-3 border-[1px] border-black p-3 mt-[-3px]'>
                                                <h5>18 Nov_dance__Village hall</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <span className='Numbers'>9</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques9"
                                                            TestName={"Cambridge-17-Test2"}
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
                                          </div>
                                          <div className='grid grid-cols-2 gap-3 border-[1px] border-black p-3 mt-[-3px]'>
                                                <h5>31 Dec_New Year’s Eve party_Mountfort Hotell</h5>
                                                <div className="question mt-2 flex flex-wrap gap-2">
                                                      <label htmlFor="ques10">designing the </label>
                                                      <span className='Numbers'>10</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques10"
                                                            TestName={"Cambridge-17-Test2"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test2-part2.mp3?_=2") }}
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
                                    Questions 11 and 14<br /><br />
                                    Choose the correct letter, A, B or C.<br /> <br />
                              </div>
                              <div className="Q-question">
                                    <h5 className='text-center mt-3 mb-3'>Oniton Hall</h5>
                                    <div className='mb-3 mt-2'>
                                          <div className='flex flex-wrap gap-1'>
                                                <span className='Numbers mr-1 mb-2'>11</span>
                                                <label htmlFor="ques11"> Many past owners made changes to
                                                      <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "ACambridge-17-Test2" && UserData.ques11 != "" && UserData.ques11 != "B" ? "(B)" : ""}</i>
                                                </label>
                                          </div>
                                          <div className='flex gap-4 pl-2'>
                                                <div className="flex flex-col gap-6">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-400 text-black'>A</span>
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>B</span>
                                                      <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-400 text-black'>C</span>

                                                </div>
                                                <div className="flex flex-col gap-9 mt-1" onChange={handleValueChange}>
                                                      <input className='' type="radio" value="A" name='ques11' />
                                                      <input className='' type="radio" value="B" name='ques11' />
                                                      <input className='' type="radio" value="C" name='ques11' />
                                                </div>

                                                <div className="flex flex-col gap-8 sm:gap-6 text-[12px] sm:text-[15px]">
                                                      <i className='' > the gardens.</i>
                                                      <i className=''> the house.</i>
                                                      <i className=''>the farm. </i>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques12"
                                                TestName="ACambridge-17-Test2"
                                                AnswerData={LAllAnswersData[11]}
                                                userAnswerQN={UserData.ques12}
                                                contentsObj={{
                                                      Title: "Sir Edward Downes built Oniton Hall because he wanted",
                                                      AData: "a place for discussing politics.",
                                                      BData: "a place to display his wealth.",
                                                      CData: "a place for artists and writers."
                                                }}
                                          />

                                    </div>

                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques13"
                                                TestName="ACambridge-17-Test2"
                                                AnswerData={LAllAnswersData[12]}
                                                userAnswerQN={UserData.ques13}
                                                contentsObj={{
                                                      Title: "Visitors can learn about the work of servants in the past from",
                                                      AData: "audio guides.",
                                                      BData: "photographs.",
                                                      CData: "people in costume."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3 mt-2'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques14"
                                                TestName="ACambridge-17-Test2"
                                                AnswerData={LAllAnswersData[13]}
                                                userAnswerQN={UserData.ques14}
                                                contentsObj={{
                                                      Title: "What is new for children at Onion Hall?",
                                                      AData: "clothes for dressing up",
                                                      BData: "mini tractors",
                                                      CData: "the adventure playground"
                                                }}
                                          />

                                    </div> <br /> <br />


                                    <div className="Q-articles">
                                          <h5>Questions 15-20</h5> <br />
                                          Which activity is offered at each of the following locations on the farm?<br /><br />
                                          <i className='font-bold p-3 mt-2 mb-2'>Choose SIX answers from the box and write the correct letter, A-H, next to Questions 15-20.</i>
                                          <i className='font-bold p-3 mt-2 mb-2 border-1 border-black'>
                                                Activities<br /><br />
                                                A   shopping<br /><br />
                                                B   watching cows being milked<br /><br />
                                                C   seeing old farming equipment<br /><br />
                                                D   eating and drinking<br /><br />
                                                E   starting a trip<br /><br />
                                                F   seeing rare breeds of animals<br /><br />
                                                G   helping to look after animals<br /><br />
                                                H   using farming tools<br /><br />
                                          </i>
                                          <h5>Locations on the farm</h5>
                                    </div> <br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>15</span>
                                          <label htmlFor="Name"> dairy  </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques15"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <label htmlFor="Name">large barn  </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques16"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <label htmlFor="Name">large barn  </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <label htmlFor="Name"> large barn  </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <label htmlFor="Name"> shed </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <label htmlFor="Name">shed </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName={"Cambridge-17-Test2"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test2-part3.mp3?_=3") }}
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
                                    <h5>PART 3 </h5> <br />
                                    Questions 21-22<br />
                                    Which TWO things do the students agree they need to include in their review of Romeo and Juliet?.<br /> <br />
                              </div>
                              <div className="Q-question">
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques21"
                                                TestName="ACambridge-17-Test2"
                                                AnswerData={LAllAnswersData[20]}
                                                userAnswerQN={UserData.ques21}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "a personal reaction",
                                                      BData: "a description of the theatre",
                                                      CData: "a summary of the plot"
                                                }}
                                          />

                                    </div>

                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques22"
                                                TestName="ACambridge-17-Test2"
                                                AnswerData={LAllAnswersData[21]}
                                                userAnswerQN={UserData.ques22}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "a reference to particular scenes",
                                                      BData: "analysis of the text",
                                                      CData: "a newly born lamb."
                                                }}
                                          />

                                    </div>

                                    <div className="Q-articles mt-2">
                                          <h5>
                                                Questions 23-27<br /> <br />
                                                Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?<br /><br />
                                                Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 23-27</h5> <br /><br />
                                          <div className='p-3 border-1 rounded border-black'>
                                                <h5 className='text-center mt-3 mb-3'>Opinions</h5>
                                                <i className='font-bold p-3 mt-2 mb-2'>
                                                      A   They both expected this to be more traditional.<br /><br />
                                                      B   They both thought this was original.<br /><br />
                                                      C   They agree this created the right atmosphere.<br /><br />
                                                      D   They agree this was a major strength.<br /><br />
                                                      E   They were both disappointed by this.<br /><br />
                                                      F   They disagree about why this was an issue.<br /><br />
                                                      G   They disagree about how this could be improved.<br /><br />
                                                </i>
                                          </div><br /><br />
                                          <h5>Aspects of the production</h5> <br />
                                    </div>

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>23</span>
                                          <label htmlFor="Name">  the set   </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques23"
                                                TestName={"Cambridge-17-Test2"}
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
                                    </div><br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>24</span>
                                          <label htmlFor="Name"> the lighting   </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques24"
                                                TestName={"Cambridge-17-Test2"}
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
                                    </div><br />

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <span className='Numbers'>25</span>
                                          <label htmlFor="Name">the lighting  </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques25"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <label htmlFor="Name">the lighting</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques26"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <label htmlFor="Name"> the actors’ delivery </label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques27"
                                                TestName={"Cambridge-17-Test2"}
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
                                    <div className="Q-articles">
                                          <h5>Questions 28-30 </h5> <br />
                                          Choose the correct letter, A, B or C.<br /><br />
                                    </div>

                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques28"
                                                TestName="ACambridge-17-Test2"
                                                AnswerData={LAllAnswersData[27]}
                                                userAnswerQN={UserData.ques28}
                                                contentsObj={{
                                                      Title: "The students think the story of Romeo and Juliet is still relevant for young people today because",
                                                      AData: "it deals with problems that families experience.",
                                                      BData: "it teaches them about relationships.",
                                                      CData: "it teaches them about relationships."
                                                }}
                                          />

                                    </div>

                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques29"
                                                TestName="ACambridge-17-Test2"
                                                AnswerData={LAllAnswersData[28]}
                                                userAnswerQN={UserData.ques29}
                                                contentsObj={{
                                                      Title: "The students found watching Romeo and Juliet in another language",
                                                      AData: "frustrating.",
                                                      BData: "frustrating.",
                                                      CData: "moving."
                                                }}
                                          />

                                    </div>

                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques30"
                                                TestName="ACambridge-17-Test2"
                                                AnswerData={LAllAnswersData[29]}
                                                userAnswerQN={UserData.ques30}
                                                contentsObj={{
                                                      Title: "Why do the students think Shakespeare’s plays have such international appeal?",
                                                      AData: "The stories are exciting.",
                                                      BData: "There are recognisable characters.",
                                                      CData: "There are recognisable characters."
                                                }}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam17-test2-part4.mp3?_=4") }}
                                                      className='p-2 bg-red-300 rounded w-[120px] hover:bg-blue-300'>Listen</button>
                                          </div>
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { setForNotePad4(!forNotePad4) }}
                                                      className='p-2 bg-blue-300 rounded w-[120px] hover:bg-red-300'>Show NotePad</button>
                                          </div>
                                    </div>
                              </div>
                        </>

                        {/* 31-40 Questions */}
                        <div className="Questions">
                              <div className="Q-articles">
                                    <h5>PART 4 </h5> <br />
                                    Questions 31-40 <br />
                                    Complete the notes below. <br />
                                    Write ONE WORD ONLY for each answer. <br /> <br />
                                    <h5 className='text-center mt-2 mb-2 text-inherit'>The impact of digital technology on the Icelandic language</h5> <br /> <br />
                              </div>
                              <h5>The Icelandic language</h5> <br /> <br />
                              <div className="Q-question">
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   has approximately </label>
                                          <span className='Numbers'>31</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques31"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <p> speakers</p>
                                    </div><br />

                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name">  <label htmlFor="Name"> ●   has a </label> </label>
                                          <span className='Numbers'>32</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques32"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <p>  that is still growing</p>
                                    </div>
                                    <div className="question flex mt-2 flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   has not changed a lot over the last thousand years <br /> <br />
                                                ●   has its own words for computer-based concepts, such as web browser and
                                                <span className='Numbers'>33</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques33"
                                                      TestName={"Cambridge-17-Test2"}
                                                      AnswerData={LAllAnswersData[31]}
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
                                          </label>
                                    </div>
                                    <i className='font-bold'>Young speakers</i> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   are big users of digital technology, such as </label>
                                          <span className='Numbers'>34</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques34"
                                                TestName={"Cambridge-17-Test2"}
                                                AnswerData={LAllAnswersData[31]}
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

                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   are becoming</label>
                                          <span className='Numbers'>35</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques35"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <p>  very quickly</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   are having discussions using only English while they are in the </label>
                                          <span className='Numbers'>36</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques36"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <p>at school</p>
                                    </div> <br />
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   are better able to identify the content of a</label>
                                          <span className='Numbers'>37</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques37"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <p>●   are better able to identify the content of a.</p>
                                    </div><br />
                                    <i className='font-bold'>Technology and internet companies</i> <br />
                                    <div className="question flex flex-wrap gap-2">
                                          <label htmlFor="Name">●   write very little in Icelandic because of the small number of speakers and because of how complicated its</label>
                                          <span className='Numbers'>38</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques38"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <p>is</p>
                                    </div> <br />
                                    <h5>The Icelandic government</h5> <br />
                                    <i>●   has set up a fund to support the production of more digital content in the language <br />
                                          ●   believes that Icelandic has a secure future</i>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   is worried that young Icelanders may lose their</label>
                                          <span className='Numbers'>39</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques39"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <p>as Icelanders</p>
                                    </div>
                                    <div className="question mt-2 flex flex-wrap gap-2">
                                          <label htmlFor="Name"> ●   is worried about the consequences of children not being </label>
                                          <span className='Numbers'>40</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques40"
                                                TestName={"Cambridge-17-Test2"}
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
                                          <p> in either</p>
                                    </div>
                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
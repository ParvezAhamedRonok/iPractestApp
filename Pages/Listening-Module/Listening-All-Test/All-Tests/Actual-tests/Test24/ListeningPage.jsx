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
            ["equipment"],
            ["Fred"],
            ["6 days"],
            ["Mike"],
            ["Leo"],
            ["C"], ["A"], ["C"], ["B"], ["C"], ["E"], ["A"], ["D"], ["F"], ["C"],
            ["yellow"],
            ["garden shed"],
            ["wildlife reserve"],
            ["firewood"],
            ["garden bin"],
            ["Walfare State"],
            ["too long"],
            ["in perspective"],
            ["oversimplifies"],
            ["Political theory"],
            ["not relevent"],
            ["C"], ["S"], ["P"], ["P"], ["C"], ["C"], ["B"], ["A"], ["A"],
            ["participate"],
            ["natural springs"],
            ["local product"],
            ["characterized"],
            ["mature"]

      ]

      AllAnswersData(LAllAnswersData)











      // main work----------->
      return (
            <section className='ContainerListener '>
                  {/* AudioPlayer component add  */}
                  <div className="AudioPlayerClass">
                        <div className='w-screen sm:w-[550px] text-white'>
                              <AudioPlayer
                                    // className='w-screen sm:w-[550px] rounded bg-[#d4dae0] text-white'
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-05-Section1.mp3?_=1" />
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
                                    <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 05</h5>
                                    <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                                          Section-1</h5>
                              </div>
                              <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                                    {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                                          style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                                    <div className="w-full flex justify-between">
                                          <div className="flex mt-[27px]">
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-05-Section1.mp3?_=1") }}
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
                                    Questions 1-5<br />
                                    Complete the notes. <br />
                                    Write NO MORE THAN TWO WORDS AND/OR NUMBERS for each answer. <br />
                                    <h5 className='text-center mt-2 text-inherit'>Basic Details of Project</h5> <br />
                              </div>
                              <div className="Questions">
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5 className='m-auto'>Example
                                                Pre-phase</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <label htmlFor="ques1">involves selecting rooms &</label>
                                                <span className='Numbers'>1</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques1"
                                                      TestName={"Actual-test-24"}
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
                                          <h5 className=''>Phase 1:</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2 ml-3">
                                                time needed: 3 day staff involved: Jenna,
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques2"
                                                      TestName={"Actual-test-24"}
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
                                          <h5 className='m-auto'>Phase 2:</h5>
                                          <div className="question mt-2 flex flex-wrap gap-1 ml-4">
                                                <label htmlFor="ques3">time needed: </label>
                                                <span className='Numbers'>3</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques3"
                                                      TestName={"Actual-test-24"}
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
                                                <label htmlFor="ques4">staff involved: </label>
                                                <span className='Numbers'>4</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques4"
                                                      TestName={"Actual-test-24"}
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
                                                <label htmlFor="ques5">with assistance from </label>
                                                <span className='Numbers'>5</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques5"
                                                      TestName={"Actual-test-24"}
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
                                          </div>
                                    </div>


                              </div>
                              <div className="Q-articles mt-5">
                                    <h5 className='mb-2'>Questions 6-10</h5>
                                    Choose the correct letter, A, B, or C.<br /> <br />
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques6"
                                                TestName="Actual-test-24"
                                                AnswerData={LAllAnswersData[5]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques6}
                                                contentsObj={{
                                                      Title: "The main form of data collection will be",
                                                      AData: "questionnaires",
                                                      BData: "Internet polling.",
                                                      CData: "face-to-face interviews."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques7"
                                                TestName="Actual-test-24"
                                                AnswerData={LAllAnswersData[6]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques7}
                                                contentsObj={{
                                                      Title: "To finish in time, the staff will have to",
                                                      AData: "work late.",
                                                      BData: "come in early.",
                                                      CData: "take some work home."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques8"
                                                TestName="Actual-test-24"
                                                AnswerData={LAllAnswersData[7]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques8}
                                                contentsObj={{
                                                      Title: "The final report will contain",
                                                      AData: "three appendices.",
                                                      BData: "material from the company website.",
                                                      CData: "a supplementary booklet."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques9"
                                                TestName="Actual-test-24"
                                                AnswerData={LAllAnswersData[8]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques9}
                                                contentsObj={{
                                                      Title: "The final report will be handed in on the",
                                                      AData: "5th",
                                                      BData: "15th",
                                                      CData: "25th"
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques10"
                                                TestName="Actual-test-24"
                                                AnswerData={LAllAnswersData[9]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques10}
                                                contentsObj={{
                                                      Title: "What point does the writer make about AI in the first paragraph?",
                                                      AData: "an office party.",
                                                      BData: "a restaurant dinner.",
                                                      CData: "presents for all involved."
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-05-Section2.mp3?_=2") }}
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
                                    Complete the repair schedule.<br /> <br />
                                    Write the correct letter, A-F, for each answer. <br /> <br />
                                    <h6>Problems to Fix</h6> <br /> <br />
                              </div>
                              <div className='p-1'>
                                    <p><span className='font-bold mr-2'>A</span> Birds in ceiling</p>
                                    <p><span className='font-bold mr-2'>B</span>   Broken windows</p>
                                    <p><span className='font-bold mr-2'>C</span>Electrical fault</p>
                                    <p><span className='font-bold mr-2'>D</span>  Fallen tree</p>
                                    <p><span className='font-bold mr-2'>E</span>  Leaking roof</p>
                                    <p><span className='font-bold mr-2'>F</span>Staining on walls</p> <br /> <br />
                                    <h6>Schedule of Repairs</h6><br /> <br />
                                    <Image src={img1} alt="test-5 image-1" />
                              </div>
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>11</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques11"
                                                TestName={"Actual-test-24"}
                                                AnswerData={LAllAnswersData[10]}
                                                userAnswerQN={UserData.ques11}
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
                                          <span className='Numbers'>12</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques12"
                                                TestName={"Actual-test-24"}
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
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>13</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques13"
                                                TestName={"Actual-test-24"}
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
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>14</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques14"
                                                TestName={"Actual-test-24"}
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
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>15</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques15"
                                                TestName={"Actual-test-24"}
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
                              <div className="Q-articles">
                                    <h5>Questions 16-20</h5> <br />
                                    Complete the sentences.<br /><br />
                                    Write NO MORE THAN TWO WORDS for each answer.<br /> <br />
                                    <h6>Additional Details Concerning Repairs</h6> <br /> <br />
                              </div>
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          The stained walls will be painted<span className='Numbers'>16</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques16"
                                                TestName={"Actual-test-24"}
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
                                          Extra paint will be left in the<span className='Numbers'>17</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName={"Actual-test-24"}
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
                                          The baby birds will be given to a <span className='Numbers'>18</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName={"Actual-test-24"}
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
                                          The fallen tree will be used as<span className='Numbers'>19</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName={"Actual-test-24"}
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
                                          The smaller parts of the tree will be put in a<span className='Numbers'>20</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName={"Actual-test-24"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-05-Section3.mp3?_=3") }}
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
                                    Questions 21-26<br />
                                    Complete the table.<br /> <br />
                                    <h5 className='mt-3 mb-3 text-center'>Write NO MORE THAN TWO WORDS for each answer.</h5>
                              </div>
                              <div className="Questions">
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>Subject</h5>
                                          <h5>Textbook Used</h5>
                                          <h5>Criticism of this book</h5>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5 className='m-auto'>Social History</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2 ml-2">
                                                <span className='Numbers'>21</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques21"
                                                      TestName={"Actual-test-24"}
                                                      AnswerData={LAllAnswersData[20]}
                                                      userAnswerQN={UserData.ques21}
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
                                          <div className="question mt-2 flex flex-wrap gap-2 ml-2">
                                                <p>it is</p>
                                                <span className='Numbers'>22</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques22"
                                                      TestName={"Actual-test-24"}
                                                      AnswerData={LAllAnswersData[21]}
                                                      userAnswerQN={UserData.ques22}
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
                                          <h5 className='m-auto'>Cultural Studies</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2 ml-2">
                                                <span className='Numbers'>23</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques23"
                                                      TestName={"Actual-test-24"}
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

                                                It<span className='Numbers'>24</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques24"
                                                      TestName={"Actual-test-24"}
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

                                          </div>
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <span className='Numbers'>25</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques25"
                                                      TestName={"Actual-test-24"}
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
                                          </div>
                                          <h5 className='m-auto'>Government in Action</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2">
                                                <label htmlFor="ques26">It is</label>
                                                <span className='Numbers'>26</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques26"
                                                      TestName={"Actual-test-24"}
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
                                          </div>
                                    </div>

                              </div>
                              <div className="Q-articles mt-5">
                                    <h5 className='mb-2'>Questions 27-30 </h5>
                                    Choose the correct letter, S, C, or P.<br />
                                    NB You may use a letter more than once..<br /> <br />

                                    <div className='p-3'>
                                          <p><span className='font-bold mr-2'>S</span> Social History</p>
                                          <p><span className='font-bold mr-2'>C</span>   Cultural Studies</p>
                                          <p><span className='font-bold mr-2'>P</span>Political Theory</p>
                                    </div> <br />
                                    <h5>What are the speakers’ favorite subjects?</h5> <br />

                                    <div className="Questions">
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>27</span>
                                                <label htmlFor="ques27">Steve</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques27"
                                                      TestName={"Actual-test-24"}
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
                                                <label htmlFor="ques28">David</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques28"
                                                      TestName={"Actual-test-24"}
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
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>29</span>
                                                <label htmlFor="ques29">Susan</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques29"
                                                      TestName={"Actual-test-24"}
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
                                          <div className='flex gap-1 flex-wrap mb-2'>
                                                <span className='Numbers'>30</span>
                                                <label htmlFor="ques30">Olive</label>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques30"
                                                      TestName={"Actual-test-24"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-05-Section4.mp3?_=4") }}
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
                              <div className="Q-articles">
                                    <h5>PART 4 </h5> <br />
                                    Questions 31-32 <br />
                                    Choose the correct letter, A, B, or C. <br /><br />
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques31"
                                                TestName="Actual-test-24"
                                                AnswerData={LAllAnswersData[30]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques31}
                                                contentsObj={{
                                                      Title: "Originally, country",
                                                      AData: "required fewer workers.",
                                                      BData: "had lots of animals.",
                                                      CData: "were more interesting places."
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques32"
                                                TestName="Actual-test-24"
                                                AnswerData={LAllAnswersData[31]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques32}
                                                contentsObj={{
                                                      Title: "Now, the problems there",
                                                      AData: "can be solved.",
                                                      BData: "are numerous.",
                                                      CData: "are expected."
                                                }}
                                          />

                                    </div>
                              </div>
                              <div className="Q-articles p-3 font-bold">
                                    <h5>Questions 33-35</h5> <br />
                                    Choose THREE answers from the list and write the correct letter, A-F, next to the questions 33-35.<br /> <br />
                                    Which THREE factors are typical of modern farming? <br />
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <label htmlFor="ques33"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>33</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-24" && UserData.ques33 != "B" ? "(B)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques33' />
                                                      <i className='' >   Many overheads </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques33' />
                                                      <i className=''>   More machines</i>
                                                </div>

                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques34"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>34</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-24" && UserData.ques34 != "A" ? "(A)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques34' />
                                                      <i className='' >   Fewer types of products </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques34' />
                                                      <i className=''>   More frequent feeding</i>
                                                </div>

                                          </div>
                                    </div>
                                    <div className='mb-3'>
                                          <label htmlFor="ques35"><span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>35</span>
                                                <i className='text-green-700 ml-2 text-xl font-bold'>{ListeningShowAnswer == "Actual-test-24" && UserData.ques35 != "A" ? "(A)" : ""}</i>
                                          </label>
                                          <div className='' onChange={handleValueChange}>
                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
                                                      <input className='' type="radio" value="A" name='ques35' />
                                                      <i className='' >Greater numbers of products </i>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2 ml-4">
                                                      <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
                                                      <input className='' type="radio" value="B" name='ques35' />
                                                      <i className=''>  More factories</i>
                                                </div>
                                          </div>
                                    </div>
                              </div>


                              <div className="Q-articles p-3 font-bold mt-3">
                                    <h5>Questions 36-40</h5> <br />
                                    Complete the table.<br /> <br />
                                    Write NO MORE THAN TWO WORDS for each answer. <br />
                              </div>



                              <div className="Questions">
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <h5>Possible Solution</h5>
                                          <h5>Important Factor</h5>
                                          <h5>Examples</h5>
                                    </div>
                                    <div className='w-full p-3 flex gap-6 justify-between border-[1px]  border-gray-400'>
                                          <h5>tourism</h5>
                                          <div className="question mt-2 flex flex-wrap gap-2 ml-2">
                                                Locals must
                                                <span className='Numbers'>36</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques36"
                                                      TestName={"Actual-test-24"}
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

                                                Daylesford area uses its
                                                <span className='Numbers'>37</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques37"
                                                      TestName={"Actual-test-24"}
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
                                    </div>
                                    <div className='w-full p-3 flex justify-between border-[1px]  border-gray-400'>
                                          <div className="question flex flex-wrap gap-2">
                                                <label htmlFor="ques38">using the</label>
                                                <span className='Numbers'>38</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques38"
                                                      TestName={"Actual-test-24"}
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

                                                <label htmlFor="ques39">– is</label>
                                                <span className='Numbers'>39</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques39"
                                                      TestName={"Actual-test-24"}
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
                                                <p>by its distinctive product– must market the idea effectively</p>

                                                <label htmlFor="ques40">– Shepparton is known for its</label>
                                                <span className='Numbers'>40</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques40"
                                                      TestName={"Actual-test-24"}
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


                  </div>


            </section >
      )
}



export default ListeningPage
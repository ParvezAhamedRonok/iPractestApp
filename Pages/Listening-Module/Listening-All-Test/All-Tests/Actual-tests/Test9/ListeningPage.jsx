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
            //part-1
            ["Grieg"], ["15/03/1980"], ["Ellendale"], ["W5 2AT"], ["0" , "no"], ["8 months" , "eight months"], ["1" , "one"], ["back door"], ["G4168770"], ["Silver-Colored"],
            //part-2
            ["C"], ["B"], ["B"], ["A"], ["teaching methods"], ["accommodation"], ["flats"], ["disco"], ["international evening"], ["2 minutes"],
            //part-3
            ["C"], ["A"], ["B"], ["A"], ["C"], ["A"], ["E"], ["D"], ["A"], ["B"],
            //part-4
            ["C"], ["C"], ["B"], ["B"], ["C"], ["market"], ["interviews"], ["useless"], ["photographs"], ["crime"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-09-Section1.mp3" />
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-09-Section1.mp3") }}
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

                        <div className="p-3">
                              <div className=" w-full">
                                    <h1 className="text-xl font-bold mb-4">SECTION 1</h1>
                                    <p className="text-lg font-semibold">Questions 1-10</p>
                                    <p className="mb-4">Complete the form below.</p>
                                    <p className="italic mb-4">Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.</p>

                                    <h2 className="text-lg font-bold mb-2">Registration Form</h2>
                                    <p className="mb-2"><strong>Example</strong></p>
                                    <p className="mb-4">Type of crime reported: <strong>robbery</strong></p>

                                    <form className="space-y-4">
                                          <label className="flex">
                                                <span className="font-semibold">Name:</span>
                                                <div className=" flex flex-wrap gap-2">
                                                      <span className='Numbers'>1</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques1"
                                                            TestName={"Actual-test-9"}
                                                            AnswerData={LAllAnswersData[0]}
                                                            userAnswerQN={UserData.ques1}
                                                      />
                                                </div>
                                          </label>

                                          <label className="flex">
                                                <span className="font-semibold">Date of Birth (dd/mm/yyyy):</span>
                                                <div className=" flex flex-wrap gap-2">
                                                      <span className='Numbers'>2</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques2"
                                                            TestName={"Actual-test-9"}
                                                            AnswerData={LAllAnswersData[1]}
                                                            userAnswerQN={UserData.ques2}
                                                      />
                                                </div>
                                          </label>

                                          <label className="flex">
                                                <span className="font-semibold">Address:</span>
                                                <div className=" flex flex-wrap gap-2">
                                                      <span className='Numbers'>3</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques3"
                                                            TestName={"Actual-test-9"}
                                                            AnswerData={LAllAnswersData[2]}
                                                            userAnswerQN={UserData.ques3}
                                                      />
                                                </div>
                                          </label>

                                          <label className="flex">
                                                <span className="font-semibold">Post code:</span>
                                                <div className=" flex flex-wrap gap-2">
                                                      <span className='Numbers'>4</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques4"
                                                            TestName={"Actual-test-9"}
                                                            AnswerData={LAllAnswersData[3]}
                                                            userAnswerQN={UserData.ques4}
                                                      />
                                                </div>
                                          </label>

                                          <label className="flex">
                                                <span className="font-semibold">Nationality:</span>
                                                Grenadian
                                          </label>

                                          <label className="flex">
                                                <span className="font-semibold">Number of previous burglaries:</span>
                                                <div className=" flex flex-wrap gap-2">
                                                      <span className='Numbers'>5</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques5"
                                                            TestName={"Actual-test-9"}
                                                            AnswerData={LAllAnswersData[4]}
                                                            userAnswerQN={UserData.ques5}
                                                      />
                                                </div>
                                          </label>

                                          <label className="flex">
                                                <span className="font-semibold">Time of apartment tenancy:</span>
                                                <div className=" flex flex-wrap gap-2">
                                                      <span className='Numbers'>6</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques6"
                                                            TestName={"Actual-test-9"}
                                                            AnswerData={LAllAnswersData[5]}
                                                            userAnswerQN={UserData.ques6}
                                                      />
                                                </div>
                                          </label>

                                          <label className="flex">
                                                <span className="font-semibold">Number of occupants:</span>
                                                <div className=" flex flex-wrap gap-2">
                                                      <span className='Numbers'>7</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques7"
                                                            TestName={"Actual-test-9"}
                                                            AnswerData={LAllAnswersData[6]}
                                                            userAnswerQN={UserData.ques7}
                                                      />
                                                </div>
                                          </label>

                                          <label className="flex">
                                                <span className="font-semibold">Entry point of burglar:</span>
                                                <div className=" flex flex-wrap gap-2">
                                                      <span className='Numbers'>8</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques8"
                                                            TestName={"Actual-test-9"}
                                                            AnswerData={LAllAnswersData[7]}
                                                            userAnswerQN={UserData.ques8}
                                                      />
                                                </div>
                                          </label>

                                          <h2 className="text-lg font-bold mt-4">Details of lost property:</h2>

                                          <label className="flex">
                                                <span className="font-semibold">Serial number of lost computer:</span>
                                                <div className=" flex flex-wrap gap-2">
                                                      <span className='Numbers'>9</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques9"
                                                            TestName={"Actual-test-9"}
                                                            AnswerData={LAllAnswersData[8]}
                                                            userAnswerQN={UserData.ques9}
                                                      />
                                                </div>
                                          </label>

                                          <label className=" flex ">
                                                <span className="font-semibold">Material of stolen purse:</span>
                                                <div className=" flex flex-wrap gap-2">
                                                      <span className='Numbers'>10</span>
                                                      <Text_inputs
                                                            handleValueChange={handleValueChange}
                                                            QNum="ques10"
                                                            TestName={"Actual-test-9"}
                                                            AnswerData={LAllAnswersData[9]}
                                                            userAnswerQN={UserData.ques10}
                                                      />
                                                </div>
                                          </label>
                                    </form>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-09-Section2.mp3") }}
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
                              <div className="Q-articles font-bold">
                                    <h4>PART 2 </h4> <br />
                                    Questions 11-14<br /><br />
                                    Choose the correct letter, A, B or C. <br /> <br />
                              </div>
                              <div className='Questions'>
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques11"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[10]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques11}
                                          contentsObj={{
                                                Title: "What is the project that Mark and Gina want to start?",
                                                AData: "business school requirements",
                                                BData: "directions to the business school",
                                                CData: "explaining the business school experience"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques12"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[11]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques12}
                                          contentsObj={{
                                                Title: "Who is the target audience?",
                                                AData: "business students",
                                                BData: "business school applicants",
                                                CData: "summer school attendees"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques13"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[12]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques13}
                                          contentsObj={{
                                                Title: "How will they convey the information?",
                                                AData: "summer course lecture",
                                                BData: "informational video",
                                                CData: "pamphlet in the mail"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques14"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[13]}  // Adjusted index to match the data
                                          userAnswerQN={UserData.ques14}
                                          contentsObj={{
                                                Title: "They want to do this project because",
                                                AData: "students worry about their studies.",
                                                BData: "they want to obtain a good grade.",
                                                CData: "they want to attract future business school applicants."
                                          }}
                                    />

                              </div>
                              <div className="Q-articles mt-4 font-bold">
                                    <h5>Questions 15-20</h5> <br />
                                    Complete the table below.<br /><br />
                                    Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer. <br /> <br />
                              </div>
                              <div className="Questions">

                                    <div className="flex justify-center items-center min-h-screen ">
                                          <table className="border-collapse border border-gray-400 ">
                                                <thead>
                                                      <tr className="">
                                                            <th className="border border-gray-400 px-4 py-2">Topic</th>
                                                            <th className="border border-gray-400 px-4 py-2">Time</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      <tr>
                                                            <td className="border border-gray-400 px-4 py-2">• Academics<br />
                                                                  <div className='flex'>
                                                                        <span className='Numbers'>15</span> <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques15"
                                                                              TestName={"Actual-test-9"}
                                                                              AnswerData={LAllAnswersData[14]}
                                                                              userAnswerQN={UserData.ques15}
                                                                        />
                                                                  </div></td>
                                                            <td className="border border-gray-400 px-4 py-2">7 minutes</td>
                                                      </tr>
                                                      <tr>
                                                            <td className="border border-gray-400 px-4 py-2">• <div className='flex'>
                                                                  <span className='Numbers'>16</span> <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques16"
                                                                        TestName={"Actual-test-9"}
                                                                        AnswerData={LAllAnswersData[15]}
                                                                        userAnswerQN={UserData.ques16}
                                                                  />
                                                            </div><br />– Cafeteria<br />– <div className='flex'>
                                                                        <span className='Numbers'>17</span> <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques17"
                                                                              TestName={"Actual-test-9"}
                                                                              AnswerData={LAllAnswersData[16]}
                                                                              userAnswerQN={UserData.ques17}
                                                                        />
                                                                  </div></td>
                                                            <td className="border border-gray-400 px-4 py-2">6 minutes</td>
                                                      </tr>
                                                      <tr>
                                                            <td className="border border-gray-400 px-4 py-2">• Social activity<br />– <div className='flex'>
                                                                  <span className='Numbers'>18</span> <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques18"
                                                                        TestName={"Actual-test-9"}
                                                                        AnswerData={LAllAnswersData[17]}
                                                                        userAnswerQN={UserData.ques18}
                                                                  />
                                                            </div><br />– <div className='flex'>
                                                                        <span className='Numbers'>19</span> <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques19"
                                                                              TestName={"Actual-test-9"}
                                                                              AnswerData={LAllAnswersData[18]}
                                                                              userAnswerQN={UserData.ques19}
                                                                        />
                                                                  </div></td>
                                                            <td className="border border-gray-400 px-4 py-2">8 minutes</td>
                                                      </tr>
                                                      <tr>
                                                            <td className="border border-gray-400 px-4 py-2">• Conclusion</td>
                                                            <td className="border border-gray-400 px-4 py-2">nearly <div className='flex'>
                                                                  <span className='Numbers'>20</span> <Text_inputs
                                                                        handleValueChange={handleValueChange}
                                                                        QNum="ques20"
                                                                        TestName={"Actual-test-9"}
                                                                        AnswerData={LAllAnswersData[19]}
                                                                        userAnswerQN={UserData.ques20}
                                                                  />
                                                            </div></td>
                                                      </tr>
                                                </tbody>
                                          </table>
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-09-Section3.mp3") }}
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
                                    Questions 21-26<br />
                                    <h5 className='mt-3 mb-3 text-center'>Choose the correct letter, A, B or C..</h5>
                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques21"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[20]}
                                          userAnswerQN={UserData.ques21}
                                          contentsObj={{
                                                Title: "The subjects in questionnaire are",
                                                AData: "tourists in the hotel in this area.",
                                                BData: "local residents.",
                                                CData: "people who are living in this area."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques22"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[21]}
                                          userAnswerQN={UserData.ques22}
                                          contentsObj={{
                                                Title: "The results of the questionnaire should be",
                                                AData: "directly entered into the computer.",
                                                BData: "scored by hand.",
                                                CData: "submitted directly to Professor Curran."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques23"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[22]}
                                          userAnswerQN={UserData.ques23}
                                          contentsObj={{
                                                Title: "Why should John give a copy of plans to the professor?",
                                                AData: "to receive a good grade",
                                                BData: "to get advice",
                                                CData: "to earn high praise"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques24"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[23]}
                                          userAnswerQN={UserData.ques24}
                                          contentsObj={{
                                                Title: "How will the instructions be presented?",
                                                AData: "given by a group representative",
                                                BData: "given by all members of the group",
                                                CData: "given by the professor"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques25"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[24]}
                                          userAnswerQN={UserData.ques25}
                                          contentsObj={{
                                                Title: "What does Dani suggest to John when those subjects receive the questionnaire?",
                                                AData: "divide into 2 parts to argue",
                                                BData: "focus on the opinion of the interviewees",
                                                CData: "take consideration of both sides"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques26"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[25]}
                                          userAnswerQN={UserData.ques26}
                                          contentsObj={{
                                                Title: "Why is this project particularly important to John?",
                                                AData: "to earn respect from professors in the department",
                                                BData: "to raise his grade",
                                                CData: "to impress his professor"
                                          }}
                                    />


                              </div>
                              <div className='mt-3 font-bold'>
                                    <h5 className='mb-2'>Questions 27-30 </h5>
                                    What is the source of each one below in this survey?<br />
                                    Choose FOUR answers from the box and write the correct letter, A-F, next to questions 27-30.<br /> <br />
                                    <div className='w-[70%] border-[2px] rounded border-gray-400 p-2'>
                                          <p><span className='font-bold mr-2'>A</span> radio</p>
                                          <p><span className='font-bold mr-2'>B</span> council meeting</p>
                                          <p><span className='font-bold mr-2'>C</span> the television</p>
                                          <p><span className='font-bold mr-2'>D</span> newspaper</p>
                                          <p><span className='font-bold mr-2'>E</span> journal</p>
                                          <p><span className='font-bold mr-2'>F</span> the Internet</p>
                                    </div>
                                    <br />

                              </div>
                              <div className="Questions mt-2">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>27</span>
                                          <label htmlFor="ques27">Map</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques27"
                                                TestName={"Actual-test-9"}
                                                AnswerData={LAllAnswersData[26]}
                                                userAnswerQN={UserData.ques27}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>28</span>
                                          <label htmlFor="ques28">Photo</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques28"
                                                TestName={"Actual-test-9"}
                                                AnswerData={LAllAnswersData[27]}
                                                userAnswerQN={UserData.ques28}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>29</span>
                                          <label htmlFor="ques29">Budget</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques29"
                                                TestName={"Actual-test-9"}
                                                AnswerData={LAllAnswersData[28]}
                                                userAnswerQN={UserData.ques29}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>30</span>
                                          <label htmlFor="ques30">Comment</label>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques30"
                                                TestName={"Actual-test-9"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-09-Section4.mp3") }}
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
                                    <h4>PART 4 </h4> <br />
                                    Questions 31-35 <br />
                                    Choose the correct letter, A, B, or C. <br /><br />
                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques31"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[30]}
                                          userAnswerQN={UserData.ques31}
                                          contentsObj={{
                                                Title: "Why did the lecturer choose to focus on the Pleasanton Town Market?",
                                                AData: "It was the first ever Town Market.",
                                                BData: "It has been covered extensively in local history classes.",
                                                CData: "It is often mentioned in some literature of the library."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques32"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[31]}
                                          userAnswerQN={UserData.ques32}
                                          contentsObj={{
                                                Title: "The Town Market originally made a large profit selling",
                                                AData: "handcrafts",
                                                BData: "vegetables",
                                                CData: "animals"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques33"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[32]}
                                          userAnswerQN={UserData.ques33}
                                          contentsObj={{
                                                Title: "The money that the marketers made contributes to local",
                                                AData: "reconstruction",
                                                BData: "development",
                                                CData: "defense"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques34"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[33]}
                                          userAnswerQN={UserData.ques34}
                                          contentsObj={{
                                                Title: "Market sales plummeted due to a lack of viable.",
                                                AData: "agriculture",
                                                BData: "transport",
                                                CData: "city planning."
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques35"
                                          TestName="Actual-test-9"
                                          AnswerData={LAllAnswersData[34]}
                                          userAnswerQN={UserData.ques35}
                                          contentsObj={{
                                                Title: "Mayor John C. Wiley decided the Clock tower would be used as a ………….. in the early stages of the uprising",
                                                AData: "clock",
                                                BData: "grounds for battle",
                                                CData: "jail"
                                          }}
                                    />
                              </div>


                              <div className="Q-articles p-3 font-bold mt-3">
                                    <h5>Questions 36-40</h5> <br />
                                    Complete the table below.<br /> <br />
                                    Write ONE WORD ONLY for each answer. <br />
                              </div>



                              <div className="Questions">
                                    <div class="overflow-x-auto">
                                          <table class="min-w-full table-auto border border-gray-300">
                                                <thead>
                                                      <tr class="bg-gray-100">
                                                            <th class="border px-4 py-2">Research Methods</th>
                                                            <th class="border px-4 py-2">Objects</th>
                                                            <th class="border px-4 py-2">Problems</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      <tr class="border">
                                                            <td class="border px-4 py-2">reference section</td>
                                                            <td class="border px-4 py-2">
                                                                  <div class="flex">
                                                                        <span class="Numbers">36</span>
                                                                        <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques36"
                                                                              TestName={"Actual-test-9"}
                                                                              AnswerData={LAllAnswersData[35]}
                                                                              userAnswerQN={UserData.ques36}
                                                                        />
                                                                  </div>
                                                            </td>
                                                            <td class="border px-4 py-2">there is too much information</td>
                                                      </tr>
                                                      <tr class="border">
                                                            <td class="border px-4 py-2">
                                                                  <div class="flex">
                                                                        <span class="Numbers">37</span>
                                                                        <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques37"
                                                                              TestName={"Actual-test-9"}
                                                                              AnswerData={LAllAnswersData[36]}
                                                                              userAnswerQN={UserData.ques37}
                                                                        />
                                                                  </div>
                                                            </td>
                                                            <td class="border px-4 py-2">Rebellion</td>
                                                            <td class="border px-4 py-2">bias makes it
                                                                  <div class="flex">
                                                                        <span class="Numbers">38</span>
                                                                        <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques38"
                                                                              TestName={"Actual-test-9"}
                                                                              AnswerData={LAllAnswersData[37]}
                                                                              userAnswerQN={UserData.ques38}
                                                                        />
                                                                  </div>
                                                            </td>
                                                      </tr>
                                                      <tr class="border">
                                                            <td class="border px-4 py-2">
                                                                  <div class="flex">
                                                                        <span class="Numbers">39</span>
                                                                        <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques39"
                                                                              TestName={"Actual-test-9"}
                                                                              AnswerData={LAllAnswersData[38]}
                                                                              userAnswerQN={UserData.ques39}
                                                                        />
                                                                  </div>
                                                            </td>
                                                            <td class="border px-4 py-2">Jim Wiley</td>
                                                            <td class="border px-4 py-2">the information is insufficient</td>
                                                      </tr>
                                                      <tr class="border">
                                                            <td class="border px-4 py-2">newspaper archives</td>
                                                            <td class="border px-4 py-2">
                                                                  <div class="flex">
                                                                        <span class="Numbers">40</span>
                                                                        <Text_inputs
                                                                              handleValueChange={handleValueChange}
                                                                              QNum="ques40"
                                                                              TestName={"Actual-test-9"}
                                                                              AnswerData={LAllAnswersData[39]}
                                                                              userAnswerQN={UserData.ques40}
                                                                        />
                                                                  </div>
                                                            </td>
                                                            <td class="border px-4 py-2">more detail is needed</td>
                                                      </tr>
                                                </tbody>
                                          </table>
                                    </div>








                              </div>
                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
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
import Image1 from "@assets/images/listening-images/Actual-20-image1.jpg"
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
            ["1 July", "first July", "First July"], ["3", "three days", "Three days"], ["test driving"], ["camera"], ["110"],
            ["Edgeworth"], ["Summer"], ["city centre", "city center"], ["directions"], ["enquiring online"],

            // Section 2
            ["B"], ["A"], ["B"], ["C"], ["A"], ["F"],
            ["H"], ["B"], ["D"], ["C"],

            // Section 3
            ["A"], ["B"], ["F"], ["G"], ["D"],
            ["A"], ["C"], ["B"], ["B"], ["A"],

            // Section 4
            ["C"], ["A"], ["parents"], ["versions"], ["country"], ["transport"],
            ["social"], ["funding"], ["competitions"], ["professional"]
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
                                    src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-20-Section1.mp3" />
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-20-Section1.mp3") }}
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

                        <div className="">
                              <h2 className="text-2xl font-bold mb-4">SECTION 1</h2>
                              <p className="text-lg font-semibold">Questions 1-10</p>
                              <p className="mb-4">Complete the notes below.</p>
                              <p className="mb-4">Write <span className="font-bold">NO MORE THAN TWO WORDS AND/OR A NUMBER</span> for each answer.</p>

                              <h3 className="text-xl font-semibold mb-2">Birmingham Exhibition</h3>

                              <p className="mb-2"><span className="font-bold">Example</span></p>
                              <p className="mb-4">Purpose of calling: <span className="font-bold">purchasing tickets</span></p>

                              <ul className="list-disc pl-6 space-y-2">
                                    <li className='flex flex-wrap'>Open in: <span className='Numbers'>1</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques1"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[0]}
                                                userAnswerQN={UserData.ques1}
                                          />
                                    </li>
                                    <li className='flex flex-wrap'>Length of exhibition: <span className='Numbers'>2</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques2"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[1]}
                                                userAnswerQN={UserData.ques2}
                                          />
                                    </li>
                                    <li>A wide range of manufacturers will be showcased.</li>
                                    <li className='flex flex-wrap'>Some cars are available to observe and the others are for <span className='Numbers'>3</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques3"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[2]}
                                                userAnswerQN={UserData.ques3}
                                          />
                                    </li>
                                    <li className='flex flex-wrap'>The <span className='Numbers'>4</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques4"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[3]}
                                                userAnswerQN={UserData.ques4}
                                          /> is prohibited to take into the museum.
                                    </li>
                                    <li>Every ticket includes one free photo.</li>
                                    <li className='flex flex-wrap'>Price of ticket: £ <span className='Numbers'>5</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques5"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[4]}
                                                userAnswerQN={UserData.ques5}
                                          /> (in advance)
                                    </li>
                                    <li className='flex flex-wrap'>Transfer to Mark <span className='Numbers'>6</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques6"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[5]}
                                                userAnswerQN={UserData.ques6}
                                          /> (Box Office Manager)
                                    </li>
                                    <li className='flex flex-wrap'>Held in the <span className='Numbers'>7</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques7"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[6]}
                                                userAnswerQN={UserData.ques7}
                                          /> Palace this year
                                    </li>
                                    <li className='flex flex-wrap'>Not far from <span className='Numbers'>8</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques8"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[7]}
                                                userAnswerQN={UserData.ques8}
                                          />
                                    </li>
                                    <li className='flex flex-wrap'>Website: www.<span className='Numbers'>9</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques9"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[8]}
                                                userAnswerQN={UserData.ques9}
                                          />.com
                                    </li>
                                    <li className='flex flex-wrap'>Best way to contact: <span className='Numbers'>10</span>
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques10"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[9]}
                                                userAnswerQN={UserData.ques10}
                                          />
                                    </li>
                              </ul>

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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-20-Section2.mp3") }}
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
                                    <h4>Section 2 </h4> <br />
                                    Questions 11-15<br /><br />
                                    Complete the repair schedule.<br /> <br />
                                    Write the correct letter, A-F, for each answer. <br /> <br />
                                    <h6>Problems to Fix</h6> <br /> <br />
                              </div>
                              <div className="Questions">
                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques11"
                                          TestName="Actual-test-20"
                                          AnswerData={LAllAnswersData[10]}
                                          userAnswerQN={UserData.ques11}
                                          contentsObj={{
                                                Title: "How many patients does the hospital consult every year?",
                                                AData: "3,000",
                                                BData: "5,000",
                                                CData: "11,000"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques12"
                                          TestName="Actual-test-20"
                                          AnswerData={LAllAnswersData[11]}
                                          userAnswerQN={UserData.ques12}
                                          contentsObj={{
                                                Title: "When can patients meet the female doctor?",
                                                AData: "on weekday mornings",
                                                BData: "three days a week",
                                                CData: "only on Mondays and Fridays"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques13"
                                          TestName="Actual-test-20"
                                          AnswerData={LAllAnswersData[12]}
                                          userAnswerQN={UserData.ques13}
                                          contentsObj={{
                                                Title: "Who is the expert on treating hearing loss?",
                                                AData: "Mr. Robert",
                                                BData: "Mr. Green",
                                                CData: "Mr. Edwards"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques14"
                                          TestName="Actual-test-20"
                                          AnswerData={LAllAnswersData[13]}
                                          userAnswerQN={UserData.ques14}
                                          contentsObj={{
                                                Title: "Where are patients recommended to buy their medicine?",
                                                AData: "the supermarket in the town",
                                                BData: "pharmacies nearby the city centre",
                                                CData: "the health care’s pharmacy"
                                          }}
                                    />

                                    <Select_input
                                          handleValueChange={handleValueChange}
                                          QNum="ques15"
                                          TestName="Actual-test-20"
                                          AnswerData={LAllAnswersData[14]}
                                          userAnswerQN={UserData.ques15}
                                          contentsObj={{
                                                Title: "What will the patients be asked about whether they are willing to do?",
                                                AData: "Letting one student attend the consultation",
                                                BData: "Asking postgraduate students to do treatment",
                                                CData: "Meeting students in group discussion"
                                          }}
                                    />

                              </div>


                              <div className="Q-articles mt-4">
                                    <h4>Questions 16-20</h4> <br />
                                    Complete the sentences.<br /><br />
                                    Write NO MORE THAN TWO WORDS for each answer.<br /> <br />
                                    <h6>Additional Details Concerning Repairs</h6> <br /> <br />
                                    <Image src={Image1} alt="test-5 image-1" /> <br />
                              </div>

                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>16</span>Reception
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques16"
                                                TestName={"Actual-test-20"}
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
                                          <span className='Numbers'>17</span>Mr. Green’s Room
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques17"
                                                TestName={"Actual-test-20"}
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
                                          <span className='Numbers'>18</span>Medical Records Office
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques18"
                                                TestName={"Actual-test-20"}
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
                                          <span className='Numbers'>19</span>Surgery Room
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques19"
                                                TestName={"Actual-test-20"}
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
                                          <span className='Numbers'>20</span> Manager’s Office
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques20"
                                                TestName={"Actual-test-20"}
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-20-Section3.mp3") }}
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
                                    <h4>SECTION 3</h4> <br />
                                    Questions 21-25<br />
                                    What is the main opinion of each of the following people?<br /> <br />
                                    Choose FIVE answers from the box and write the correct letter, A-G, next to questions 21-25.<br /> <br />
                                    <div className="box border p-4">
                                          <h2 className="font-bold text-lg mb-2">Opinions</h2>
                                          <ul className="list-none space-y-1">
                                                <li>A - lighting restrictions</li>
                                                <li>B - alternative lighting</li>
                                                <li>C - reduce the number of insects</li>
                                                <li>D - decline in the number of species</li>
                                                <li>E - climate changes</li>
                                                <li>F - impacts on the growth of animals</li>
                                                <li>G - impacts on water quality</li>
                                          </ul>
                                    </div> <br />
                              </div>
                              <div className="Questions">
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>21</span>Ken Simpson
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques21"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[20]}
                                                userAnswerQN={UserData.ques21}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>22</span>Dave Kepler
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques22"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[21]}
                                                userAnswerQN={UserData.ques22}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>23</span>Sharon Grey
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques23"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[22]}
                                                userAnswerQN={UserData.ques23}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>24</span>Maria Jackson
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques24"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[23]}
                                                userAnswerQN={UserData.ques24}
                                          />
                                    </div>
                                    <div className='flex gap-1 flex-wrap mb-2'>
                                          <span className='Numbers'>25</span>Barbara Swallow
                                          <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques25"
                                                TestName={"Actual-test-20"}
                                                AnswerData={LAllAnswersData[24]}
                                                userAnswerQN={UserData.ques25}
                                          />
                                    </div>
                              </div>
                              <div className="Q-articles mt-5">
                                    <div className="Qrticles">
                                          <h4>Questions 26-27</h4> <br />
                                          Choose the correct letter, A, B or C..<br /> <br />
                                    </div>
                                    <div className="Questions">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques26"
                                                TestName="Actual-test-20"
                                                AnswerData={LAllAnswersData[25]}
                                                userAnswerQN={UserData.ques26}
                                                contentsObj={{
                                                      Title: "What does Jim think about the difference among species in natural and artificial light?",
                                                      AData: "It makes no difference.",
                                                      BData: "Species will die out in natural light.",
                                                      CData: "Species will die out in artificial light."
                                                }}
                                          />

                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques27"
                                                TestName="Actual-test-20"
                                                AnswerData={LAllAnswersData[26]}
                                                userAnswerQN={UserData.ques27}
                                                contentsObj={{
                                                      Title: "One reason why Jim and Jane felt unsatisfied about the theories discussed in the lecture was that",
                                                      AData: "governments didn’t increase any spending on them.",
                                                      BData: "most theories had nothing to do with the exams.",
                                                      CData: "many theories lacked solid proof in the field."
                                                }}
                                          />
                                    </div>
                                    <div className="Qrticles">
                                          <h4>Questions 28-30</h4> <br />
                                          <h5>Which THREE topics are they interested in studying in the future?</h5> <br />
                                    </div>
                                    <div className="Questions">
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques28"
                                                TestName="Actual-test-20"
                                                AnswerData={LAllAnswersData[27]}
                                                userAnswerQN={UserData.ques28}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "It makes no difference.",
                                                      BData: "wildlife park animals",
                                                      CData: "quality of life of tourists"
                                                }}
                                          />

                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques29"
                                                TestName="Actual-test-20"
                                                AnswerData={LAllAnswersData[28]}
                                                userAnswerQN={UserData.ques29}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "migration birds",
                                                      BData: "animals living in tropical climate",
                                                      CData: "animals living in rural areas"
                                                }}
                                          />
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques30"
                                                TestName="Actual-test-20"
                                                AnswerData={LAllAnswersData[29]}
                                                userAnswerQN={UserData.ques30}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "the impacts of different environment on animals",
                                                      BData: " pandas in the zoo",
                                                      CData: "many theories lacked solid proof in the field."
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
                                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-20-Section4.mp3") }}
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
                              <div className="Q-articles font-bold">
                                    <h4>SECTION 4 </h4> <br />
                                    Questions 31-32 <br />
                                    <h5>Which TWO aspects did the new rules at the end of the 19th century focus on?</h5> <br />
                              </div>
                              <div className="Questions">
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques31"
                                                TestName="Actual-test-20"
                                                AnswerData={LAllAnswersData[30]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques31}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: " cooperation",
                                                      BData: "competition",
                                                      CData: "moral values"
                                                }}
                                          />

                                    </div>
                                    <div className='mb-3'>
                                          <Select_input
                                                handleValueChange={handleValueChange}
                                                QNum="ques32"
                                                TestName="Actual-test-20"
                                                AnswerData={LAllAnswersData[31]}  // Adjusted index to match the data
                                                userAnswerQN={UserData.ques32}
                                                contentsObj={{
                                                      Title: "",
                                                      AData: "player’s physical protection",
                                                      BData: "business model",
                                                      CData: "are expected."
                                                }}
                                          />

                                    </div>
                              </div>
                              <div className="Q-articles p-3 font-bold mt-3">
                                    <h4>Questions 33-40</h4> <br />
                                    Complete the sentences below. <br /> <br />
                                    Write ONE WORD ONLY for each answer. <br />
                              </div>

                              <div className="">
                                    <h1 className="text-2xl font-bold mb-4 text-center">Football in the UK</h1>
                                    <ul className="space-y-4">
                                          <li className='flex flex-wrap'>
                                                At present the main reason why UK schools push football education is the pressure from <span className='Numbers'>33</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques33"
                                                      TestName={"Actual-test-20"}
                                                      AnswerData={LAllAnswersData[32]}
                                                      userAnswerQN={UserData.ques33}
                                                />
                                          </li>
                                          <li className='flex flex-wrap'>
                                                Prior to the 19th century, football players used different <span className='Numbers'>34</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques34"
                                                      TestName={"Actual-test-20"}
                                                      AnswerData={LAllAnswersData[33]}
                                                      userAnswerQN={UserData.ques34}
                                                /> of rules.
                                          </li>
                                          <li className='flex flex-wrap'>
                                                People attempted to standardise the rules from the whole <span className='Numbers'>35</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques35"
                                                      TestName={"Actual-test-20"}
                                                      AnswerData={LAllAnswersData[34]}
                                                      userAnswerQN={UserData.ques35}
                                                />, known as the ‘Cambridge Rules’ in 1848.
                                          </li>
                                          <li className='flex flex-wrap'>
                                                Attendances were increasing due to the improvement of infrastructure and the <span className='Numbers'>36</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques36"
                                                      TestName={"Actual-test-20"}
                                                      AnswerData={LAllAnswersData[35]}
                                                      userAnswerQN={UserData.ques36}
                                                /> system.
                                          </li>
                                          <li className='flex flex-wrap'>
                                                Football became popular and it is regarded as a <span className='Numbers'>37</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques37"
                                                      TestName={"Actual-test-20"}
                                                      AnswerData={LAllAnswersData[36]}
                                                      userAnswerQN={UserData.ques37}
                                                /> event.
                                          </li>
                                          <li className='flex flex-wrap'>
                                                The football clubs were responsible for most of the <span className='Numbers'>38</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques38"
                                                      TestName={"Actual-test-20"}
                                                      AnswerData={LAllAnswersData[37]}
                                                      userAnswerQN={UserData.ques38}
                                                /> and development for the football association.
                                          </li>
                                          <li className='flex flex-wrap'>
                                                <span className='Numbers'>39</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques39"
                                                      TestName={"Actual-test-20"}
                                                      AnswerData={LAllAnswersData[38]}
                                                      userAnswerQN={UserData.ques39}
                                                />against other teams were also organised by the football clubs.
                                          </li>
                                          <li className='flex flex-wrap'>
                                                In 1910s, <span className='Numbers'>40</span>
                                                <Text_inputs
                                                      handleValueChange={handleValueChange}
                                                      QNum="ques40"
                                                      TestName={"Actual-test-20"}
                                                      AnswerData={LAllAnswersData[39]}
                                                      userAnswerQN={UserData.ques40}
                                                /> football players were approved of in the game.
                                          </li>
                                    </ul>
                              </div>


                        </div>


                  </div>


            </section >
      )
}



export default ListeningPage
"use client";
import React, { useRef } from 'react'
import "../../../Styles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import Image from 'next/image';
import img1 from "@assets/images/listening-images/Actual-test4-image1.jpg";
import img2 from "@assets/images/listening-images/Actual-test4-image2.jpg";
import img3 from "@assets/images/listening-images/Actual-test4-image3.jpg";

import { useStateContext } from "@/contexts/ContextProvider";
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
        ["10.25 am", "Ten tweenty five am"],
        ["Box Hill", "box hill"],
        ["30 to 39", "Thirty to thirty nine", "thirty to thirty nine"],
        ["domestic duties", "Domestic duties"],
        ["married", "Married"],
        ["walking", "Walking"],
        ["tighten", "Tighten"],
        ["hike", "Hike"],
        ["swimming", "Swimming"],
        ["energy", "Energy"],
        ["A"], ["E"], ["D"], ["F"], ["C"], ["B"], ["E"], ["C"], ["I"], ["F"],
        ["symbols", "Symbols"],
        ["interpreted", "Interpreted"],
        ["nature", "Nature"],
        ["headings", "Headings"],
        ["Legal", "Legal"],
        ["procedures", "Procedures"],
        ["associated", "Associated"],
        ["directions", "Directions"],
        ["notes", "Notes"],
        ["headings", "Headings"],
        ["billion", "Billion"],
        ["clean room", "Clean room"],
        ["radiation", "Radiation"],
        ["underground", "Underground"],
        ["complex", "Complex"],
        ["heavy water", "Heavy water"],
        ["electronic", "Electronic"],
        ["1000 tons", "One thousand tons", "one thousand tons"],
        ["electic current", "Electic currect"],
        ["40 control", "fourty control", "Fourty control"]
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
                        src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-04-Section1.mp3?_=1" />
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
                        <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 04</h5>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-1</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-04-Section1.mp3?_=1") }}
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
                        Questions 1 – 5 <br />
                        Complete the form. <br />
                        Write NO MORE THAN THREE WORDS OR NUMBERS for each answer. <br /> <br />
                        <h5 className='text-center mt-2 text-inherit'>Survey Form</h5> <br /> <br />
                    </div>
                    <div className="Q-question">
                        <h5 className='text-start mt-2 text-inherit'>Dealing with: exercise (Example) <br /></h5> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> <span className='font-bold'>Time contacted:</span></label>
                            <span className='Numbers'>1</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques1"
                                TestName={"Actual-test-4"}
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
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'>Suburb:</label>
                            <span className='Numbers'>2</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques2"
                                TestName={"Actual-test-4"}
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
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'>Age Group: </label>
                            <span className='Numbers'>3</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques3"
                                TestName={"Actual-test-4"}
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
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'> Occupation: </label>
                            <span className='Numbers'>4</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques4"
                                TestName={"Actual-test-4"}
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
                            <label htmlFor="Name" className='font-bold'>Family:</label>
                            <span className='Numbers'>5</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques5"
                                TestName={"Actual-test-4"}
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
                        <div className="Q-articles mt-5 mb-2">
                            <h5>Questions 6 – 10</h5> <br />
                            Complete the summary.<br /> <br />
                            <i className='font-bold'>Write ONE WORD ONLY for each answer.</i> <br />
                        </div>
                        <div className="Questions">
                            <div className='flex gap-1 flex-wrap mb-2'>
                                <label htmlFor="ques23">The subject undertakes exercise by regularly</label>
                                <span className='Numbers'>6</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques6"
                                    TestName={"Actual-test-4"}
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
                                <p>She does yoga in order to relax and</p>
                                <span className='Numbers'>7</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques7"
                                    TestName={"Actual-test-4"}
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
                                <p> her muscles. When she was younger, she would</p>
                                <span className='Numbers'>8</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques8"
                                    TestName={"Actual-test-4"}
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
                                <p> and in the future, she may go</p>
                                <span className='Numbers'>9</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques9"
                                    TestName={"Actual-test-4"}
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
                                <p> although that will depend on whether she has enough</p>
                                <span className='Numbers'>10</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques10"
                                    TestName={"Actual-test-4"}
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-04-Section2.mp3?_=2") }}
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
                    <div className="Q-articles p-3">
                        <h5>PART 2 </h5> <br />
                        Questions 11 – 16<br /><br />
                        Label the floor plan.<br /> <br />
                        Choose the correct letter, A-F, for each answer. <br /> <br />
                        <h6>ILC Special Sessions Timetable</h6> <br />

                        <Image src={img1} alt="test-4 image-1" /> <br />

                    </div>
                    <div className="Questions">
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>11</span>
                            <label htmlFor="ques11"> Quiet reading</label>
                            <select name="ques11" id="ques11" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques11 != "A" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques11 != "" && UserData.ques11 == "A" && "text-green-700"}
                                 `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques11 != "A" ? "(A)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>12</span>
                            <label htmlFor="ques12"> Computers</label>
                            <select name="ques12" id="ques12" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques12 != "E" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques12 != "" && UserData.ques12 == "E" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques12 != "E" ? "(E)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>13</span>
                            <label htmlFor="ques13">Newspapers & magazines</label>
                            <select name="ques13" id="ques13" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques13 != "D" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques13 != "" && UserData.ques13 == "D" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques13 != "D" ? "(D)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>14</span>
                            <label htmlFor="ques14">Reference books</label>
                            <select name="ques14" id="ques14" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques14 != "F" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques14 != "" && UserData.ques14 == "F" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques14 != "F" ? "(F)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>15</span>
                            <label htmlFor="ques15">Audio section</label>
                            <select name="ques15" id="ques15" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques15 != "C" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques15 != "" && UserData.ques15 == "C" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques15 != "C" ? "(C)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>16</span>
                            <label htmlFor="ques16"> Main library</label>
                            <select name="ques16" id="ques16" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques16 != "B" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques16 != "" && UserData.ques16 == "B" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques16 != "B" ? "(B)" : ""}</i>
                        </div>

                    </div>
                    <div className="Q-articles">
                        <h5>Questions 17 – 20 </h5> <br />
                        Complete the timetable.<br /><br />
                        Choose  the correct letter, A-J, for each answer. <br /> <br />
                        <Image src={img2} alt="test-4 image-2" /> <br />
                    </div>
                    <div className="Questions">
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>17</span>
                            <label htmlFor="ques17"> Teacher-led discussion</label>
                            <select name="ques17" id="ques17" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques17 != "E" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques17 != "" && UserData.ques17 == "E" && "text-green-700"}
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
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques17 != "E" ? "(E)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>18</span>
                            <label htmlFor="ques18"> Writing skills</label>
                            <select name="ques18" id="ques18" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques18 != "C" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques18 != "" && UserData.ques18 == "C" && "text-green-700"}
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
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques18 != "C" ? "(C)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>19</span>
                            <label htmlFor="ques19">On-call teacher</label>
                            <select name="ques19" id="ques19" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques19 != "I" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques19 != "" && UserData.ques19 == "I" && "text-green-700"}
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
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques19 != "I" ? "(I)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>20</span>
                            <label htmlFor="ques20"> Language exchange</label>
                            <select name="ques20" id="ques20" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-4" && UserData.ques20 != "F" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-4" && UserData.ques20 != "" && UserData.ques20 == "F" && "text-green-700"}
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
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-4" && UserData.ques20 != "F" ? "(F)" : ""}</i>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-04-Section3.mp3?_=3") }}
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
                        Questions 21 – 24<br />
                        Complete the summary.<br /> <br />
                        Write ONE WORD ONLY for each answer. <br />
                        <br /> <br />
                    </div>
                    <div className="Questions">
                        <div className='flex gap-1 flex-wrap mb-2'>
                            One of the basic strategies when listening to lectures is to use
                            <span className='Numbers'>21</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques21"
                                TestName={"Actual-test-4"}
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


                            This saves times, but it is only effective if they can be
                            <span className='Numbers'>22</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques22"
                                TestName={"Actual-test-4"}
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


                            later. More generally, it is necessary to format the page in anticipation of the
                            <span className='Numbers'>23</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques23"
                                TestName={"Actual-test-4"}
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


                            of the lecture. As an example, one can draw
                            <span className='Numbers'>24</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques24"
                                TestName={"Actual-test-4"}
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
                            tables, and flowcharts, consistent with the way the subject matter is presented.
                        </div>
                    </div>
                    <div className="Q-articles">
                        <h5>Questions 25 – 30 </h5> <br />
                        Complete the table.<br />
                        Write ONE WORD ONLY for each answer.<br /> <br />
                    </div>
                    <div className="Questions">
                        <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                            <h5>Subject</h5>
                            <h5>Recommended Page Design</h5>
                        </div>

                        <div className='w-full p-3 flex flex-wrap justify-between border-[1px] border-gray-400'>
                            <span className='Numbers'>25</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques25"
                                TestName={"Actual-test-4"}
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
                            Studies. <br />
                            flowchart, showing courtroom processes and
                            <span className='Numbers'>26</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques26"
                                TestName={"Actual-test-4"}
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

                        <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                            <h5 className='m-auto'>Culture Studies</h5>
                            <div className="question mt-2 flex flex-wrap gap-1 ml-2">
                                <label htmlFor="ques27">table or spider graph, linking</label>
                                <span className='Numbers'>27</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques27"
                                    TestName={"Actual-test-4"}
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
                                <p> thoughts etc.</p>
                            </div>
                        </div>
                        <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                            <h5 className='m-auto'>Management Theory</h5>
                            <div className="question ml-3 mt-2 flex flex-wrap gap-1">
                                <label htmlFor="ques28">network (like spider graph but has</label>
                                <span className='Numbers'>28</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques28"
                                    TestName={"Actual-test-4"}
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
                                <p>.)</p>
                            </div>
                        </div>
                        <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                            <h5 className='ml-2'>Political Science</h5>
                            <div className="question flex flex-wrap gap-1 ml-1">
                                <label htmlFor="ques29">linear</label>
                                <span className='Numbers'>29</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques29"
                                    TestName={"Actual-test-4"}
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
                        </div>
                        <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                            <h6 className='ml-3'>Mass Media</h6>
                            <div className="question flex flex-wrap gap-1 ml-1">
                                <label htmlFor="que30">just use </label>
                                <span className='Numbers'>30</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques30"
                                    TestName={"Actual-test-4"}
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-04-Section4.mp3?_=4") }}
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
                        Questions 31-35 <br />
                        Complete the notes. <br />
                        Write NO MORE THAN TWO WORDS for each answer. <br />
                        <h5 className='text-center mt-2 mb-2 text-inherit'>Neutrinos</h5> <br />
                    </div>
                    <div className="Questions">
                        <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                            <h6 className='m-auto'>are everywhere</h6>
                            <div className="question mt-2 flex flex-wrap gap-2 ml-2">
                                100 to 200  ___<span className='Numbers'>31</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques31"
                                    TestName={"Actual-test-4"}
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
                                pass through our bodies every second.
                            </div>
                        </div>
                        <div className='w-full p-3 flex flex-wrap gap-3 justify-between border-[1px] border-gray-400'>
                            <h5 className=''>are difficult to detect because of</h5>
                            <h5>1. the presence of other particles</h5>
                            <div className="question mt-2 flex flex-wrap gap-2 ml-2">
                                usually need a <span className='Numbers'>32</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques32"
                                    TestName={"Actual-test-4"}
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
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-1">
                                2. the surrounding<span className='Numbers'>33</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques33"
                                    TestName={"Actual-test-4"}
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

                            </div>

                            <div className="question flex flex-wrap gap-1">
                                detection location usually<span className='Numbers'>34</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques34"
                                    TestName={"Actual-test-4"}
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
                            </div>
                        </div>
                        <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                            <h6 className='m-auto'>3. challenge of installing equipment</h6>
                            <div className="question flex flex-wrap gap-2">
                                <label htmlFor="ques35">engineering is very </label>
                                <span className='Numbers'>35</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques35"
                                    TestName={"Actual-test-4"}
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
                            </div>
                        </div>

                    </div> <br /> <br />
                    <div className="Q-articles mb-3">
                        <h5>Questions 36-40</h5> <br />
                        Complete the diagram.<br />
                        Write NO MORE THAN TWO WORDS AND/OR NUMBERS for each answer. <br /> <br />
                        <Image src={img3} alt="test-4 image-3" />
                    </div>
                    <div className="Question">
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers mt-1'>36</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques36"
                                TestName={"Actual-test-4"}
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
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers mt-1'>37</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques37"
                                TestName={"Actual-test-4"}
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
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers mt-1'>38</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques38"
                                TestName={"Actual-test-4"}
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
                        </div>
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers mt-1'>39</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques39"
                                TestName={"Actual-test-4"}
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
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='Numbers mt-1'>40</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques40"
                                TestName={"Actual-test-4"}
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
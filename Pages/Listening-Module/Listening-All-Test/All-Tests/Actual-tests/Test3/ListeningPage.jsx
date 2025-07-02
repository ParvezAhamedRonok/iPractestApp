"use client"
import React, { useRef } from 'react'
import "../../../Styles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import { useStateContext } from "@/contexts/ContextProvider";
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
        ["engineering", "Engineering"],
        ["car salesman", "Car salesman"],
        ["playing chess", "Playing chess"],
        ["electronics", "Electronics"],
        ["1200", "Twelve houndred"],
        ["immediately", "Immediately"],
        ["speaks Spanish", "Speaks spanish"],
        ["A"], ["B"], ["A"],
        ["consultation", "Consultation"],
        ["diet", "Diet"],
        ["test", "Test"],
        ["monthly", "Monthly"],
        ["three", "Three"],
        ["C"], ["A"], ["E"], ["F"], ["B"], ["B"], ["C"], ["A"], ["B"], ["C"],
        ["7", "Seven"],
        ["MBP"],
        ["not stable", "Not stable"],
        ["bad attitude", "Bad attitude"],
        ["health problems", "Health problem"],
        ["C"], ["C"], ["A"],
        ["limestone", "Limestone"],
        ["solidifies", "Solidifies"],
        ["fault lines", "Fault Lines"],
        ["calcium", "Calcium"],
        ["flowstone", "Flowstone"],
        ["1986", "Nineteen eighty six"],
        ["bottom up", "Bottom up"]
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
                        src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-03-Section1.mp3?_=1" />
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
                        <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice ipractest IELTS Listening Test 03</h5>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-1</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-03-Section1.mp3?_=1") }}
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
                        Questions 1-7 <br />
                        Complete the form. <br />
                        Write NO MORE THAN TWO WORDS OR A NUMBER for each answer.<br />
                        <h5 className='text-start mt-2 text-inherit'> Client Details</h5> <br /> <br />
                    </div>
                    <div className="Q-question">
                        <h5 className='text-start mt-2 text-inherit'>Name: Andrew Peterson (Example) <br /></h5> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='font-bold'>Educational Qualification:</span>Degree in<span className='Numbers'>1</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques1"
                                TestName={"Actual-test-3"}
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
                            <label htmlFor="Name" className='font-bold'>Previous Job:</label>
                            <span className='Numbers'>2</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques2"
                                TestName={"Actual-test-3"}
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
                            <label htmlFor="Name" className='font-bold'>Hobbies: </label>
                            <span className='Numbers'>3</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques3"
                                TestName={"Actual-test-3"}
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
                            <label htmlFor="Name" className='font-bold'> Main Skills: </label>
                            <span className='Numbers'>4</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques4"
                                TestName={"Actual-test-3"}
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
                            <label htmlFor="Name" className='font-bold'> Expected Salary ($):</label>
                            <span className='Numbers'>5</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques5"
                                TestName={"Actual-test-3"}
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
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'> Can start: </label>
                            <span className='Numbers'>6</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques6"
                                TestName={"Actual-test-3"}
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
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name" className='font-bold'> Other languages: </label>
                            <span className='Numbers'>7</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques7"
                                TestName={"Actual-test-3"}
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
                        </div> <br /> <br />

                        <div className="Q-articles">
                            <h5>Questions 8-10</h5> <br />
                            Choose THREE letters from the list, A-G.<br /> <br />
                            <i className='font-bold'>Which THREE qualities do employers most value in their staff?</i>
                        </div>
                        <div className="Questions p-3">
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques8"
                                    TestName="Actual-test-3"
                                    AnswerData={LAllAnswersData[7]}  // Adjusted index to match the data
                                    userAnswerQN={UserData.ques8}
                                    contentsObj={{
                                        Title: "",  // Dynamic title
                                        AData: "Problem-solving skills",
                                        BData: "Diligence",
                                        CData: "Experience"
                                    }}
                                />

                            </div>
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques9"
                                    TestName="Actual-test-3"
                                    AnswerData={LAllAnswersData[8]}  // Adjusted index to match the data
                                    userAnswerQN={UserData.ques9}
                                    contentsObj={{
                                        Title: "",  // Dynamic title
                                        AData: "Flexible hours",
                                        BData: "Independent thinking",
                                        CData: "Loyalty"
                                    }}
                                />

                            </div>
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques10"
                                    TestName="Actual-test-3"
                                    AnswerData={LAllAnswersData[9]}  // Adjusted index to match the data
                                    userAnswerQN={UserData.ques10}
                                    contentsObj={{
                                        Title: "",  // Dynamic title
                                        AData: "Good personality",
                                        BData: "Qualifications",
                                        CData: "Dignity"
                                    }}
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-03-Section2.mp3?_=2") }}
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
                        Questions 11 – 15<br /><br />
                        Answer the questions.<br />ONE WORD ONLY for each answer. <br /><br />
                    </div>
                    <div className="Questions">
                        <div className='flex gap-1 flex-wrap mb-2'>
                            <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>11</span>

                            What does the centre provide first
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques11"
                                TestName={"Actual-test-3"}
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
                            <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>12</span>
                            What is important to control
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques12"
                                TestName={"Actual-test-3"}
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
                            <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>13</span>

                            What will be used to assess member’s fitness level
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques13"
                                TestName={"Actual-test-3"}
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
                            <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>14</span>

                            How often is the exercise schedule reviewed
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques14"
                                TestName={"Actual-test-3"}
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
                            <span className='pt-[1px]  ml-1 mr-2  sm:text-[15px] h-[25px] w-[25px]  bg-[#007bff]  text-white rounded-[50%]  text-center'>15</span>

                            How many exercise programs are available
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques15"
                                TestName={"Actual-test-3"}
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
                    <div className="Q-articles p-3 font-bold">
                        <h5>Questions 16-20 </h5> <br />
                        Write the correct letter, A-G, next to the questions.<br /><br />
                        Which place is best for <br /><br />
                    </div>
                    <div className="Questions">
                        <div className='p-2'>
                            <p><span className='font-bold mr-2'>A</span>  jogging machines</p>
                            <p><span className='font-bold mr-2'>B</span>Yoga studio</p>
                            <p><span className='font-bold mr-2'>C</span> Weight units</p>
                            <p><span className='font-bold mr-2'>D</span> Front-desk area</p>
                            <p><span className='font-bold mr-2'>E</span>  Squash courts</p>
                            <p><span className='font-bold mr-2'>F</span> Shower blocks</p>
                            <p><span className='font-bold mr-2'>G</span>Swimming pool</p>
                        </div> <br /> <br />
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>16</span>
                            <label htmlFor="ques16">developing confidence?</label>
                            <select name="ques16" id="ques16" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && UserData.ques16 != "C" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques16 != "" && UserData.ques16 == "C" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques16 != "C" ? "(C)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>17</span>
                            <label htmlFor="ques17">  reducing stress?</label>
                            <select name="ques17" id="ques17" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && UserData.ques17 != "A" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques17 != "" && UserData.ques17 == "A" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques17 != "A" ? "(A)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>18</span>
                            <label htmlFor="ques18"> building fitness?</label>
                            <select name="ques18" id="ques18" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && UserData.ques18 != "E" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques18 != "" && UserData.ques18 == "E" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques18 != "E" ? "(E)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>19</span>
                            <label htmlFor="ques19">meeting others?</label>
                            <select name="ques19" id="ques19" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && UserData.ques19 != "F" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques19 != "" && UserData.ques19 == "F" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques19 != "F" ? "(F)" : ""}</i>
                        </div>
                        <div className='flex gap-1 flex-wrap mb-1'>
                            <span className='Numbers'>20</span>
                            <label htmlFor="ques20">finding information?</label>
                            <select name="ques20" id="ques20" onChange={handleValueChange}
                                className={`font-bold ${ListeningShowAnswer == "Actual-test-3" && UserData.ques20 != "A" && "text-red-600"}
                                ${ListeningShowAnswer == "Actual-test-3" && UserData.ques20 != "" && UserData.ques20 == "A" && "text-green-700"}
                                `}>
                                <option value="" selected></option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                            </select>
                            <i className='text-green-700 ml-2'>{ListeningShowAnswer == "Actual-test-3" && UserData.ques20 != "B" ? "(B)" : ""}</i>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-03-Section3.mp3?_=3") }}
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
                        Questions 21 – 25<br />
                        Choose the correct letter, A, B, or C.<br /> <br />
                    </div>
                    <div className="Questions">
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques21"
                                TestName="Actual-test-3"
                                AnswerData={LAllAnswersData[20]}  // Adjusted index to match the data
                                userAnswerQN={UserData.ques21}
                                contentsObj={{
                                    Title: "The position needs someone good at",  // Custom title
                                    AData: "Computers",
                                    BData: "Dealing with people",
                                    CData: "Arts"
                                }}
                            />

                        </div>
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques22"
                                TestName="Actual-test-3"
                                AnswerData={LAllAnswersData[21]}  // Adjusted index to match the data
                                userAnswerQN={UserData.ques22}
                                contentsObj={{
                                    Title: "The directors will select someone from the faculty of",  // Custom title
                                    AData: "Arts",
                                    BData: "Computing",
                                    CData: "Business"
                                }}
                            />

                        </div>
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques23"
                                TestName="Actual-test-3"
                                AnswerData={LAllAnswersData[22]}  // Adjusted index to match the data
                                userAnswerQN={UserData.ques23}
                                contentsObj={{
                                    Title: "The position will require the person to",  // Custom title
                                    AData: "Work long hours.",
                                    BData: "Train others.",
                                    CData: "Do weekend work."
                                }}
                            />

                        </div>
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques24"
                                TestName="Actual-test-3"
                                AnswerData={LAllAnswersData[23]}  // Adjusted index to match the data
                                userAnswerQN={UserData.ques24}
                                contentsObj={{
                                    Title: "The position will come with a",  // Custom title
                                    AData: "Cars",
                                    BData: "Parking space.",
                                    CData: "Much better salary."
                                }}
                            />

                        </div>
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques25"
                                TestName="Actual-test-3"
                                AnswerData={LAllAnswersData[24]}  // Adjusted index to match the data
                                userAnswerQN={UserData.ques25}
                                contentsObj={{
                                    Title: "The best aspect of the job is it",  // Custom title
                                    AData: "Gives more responsibility.",
                                    BData: "Comes with a private office.",
                                    CData: "Is a step to higher positions"
                                }}
                            />

                        </div>
                    </div>
                    <div className="Q-articles mt-2 mb-2">
                        <h5>Questions 26-30</h5> <br />
                        Complete the table.<br />
                        Write NO MORE THAN TWO WORDS OR A NUMBER for each answer.<br /> <br />
                    </div>
                    <div className="Questions">
                        <div className='w-full p-3 text-center border-[1px] border-gray-400'>
                            <h5>Candidates</h5>
                        </div>
                        <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                            <h5>Steven</h5>
                            <h5>Abdul</h5>
                            <h5>Lek</h5>
                            <h5>Oscar</h5>
                        </div>

                        <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                            <h5 className='m-auto'>Years of Experience</h5>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>26</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques26"
                                    TestName={"Actual-test-3"}
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
                            <h5>7</h5>
                            <h5>8</h5>
                            <h5>12</h5>
                        </div>
                        <div className='w-full p-3 flex justify-between align-middle border-[1px] border-gray-400'>
                            <h5 className='m-auto'>Qualification</h5>
                            <h5 className='ml-2 mr-2 mt-1'>MBA</h5>
                            <div className="question mt-2 flex flex-wrap gap-1">
                                <span className='Numbers'>27</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques27"
                                    TestName={"Actual-test-3"}
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
                                degree<h5 className='ml-2 mr-2'>Certificates</h5>
                            </div>
                        </div>
                        <div className='w-full p-3 flex justify-between flex-wrap  border-[1px] border-gray-400'>Possible Concerns
                            <span className='Numbers'>28</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques28"
                                TestName={"Actual-test-3"}
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
                            limited English
                            <span className='Numbers'>29</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques29"
                                TestName={"Actual-test-3"}
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
                            <span className='Numbers'>30</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques30"
                                TestName={"Actual-test-3"}
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-03-Section4.mp3?_=4") }}
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
                    <div className="Q-articles font-bold mb-3">
                        <h5>PART 4 </h5> <br />
                        Questions 31-33<br />
                        Choose the correct letter, A, B, or C. <br />
                    </div>
                    <div className="Questions">
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques31"
                                TestName="Actual-test-3"
                                AnswerData={LAllAnswersData[30]}  // Adjusted index to match the data
                                userAnswerQN={UserData.ques31}
                                contentsObj={{
                                    Title: "Caves are",  // Custom title
                                    AData: "Often ignored.",
                                    BData: "Mostly in remote areas.",
                                    CData: "Often difficult to explore"
                                }}
                            />

                        </div>
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques32"
                                TestName="Actual-test-3"
                                AnswerData={LAllAnswersData[31]}  // Adjusted index to match the data
                                userAnswerQN={UserData.ques32}
                                contentsObj={{
                                    Title: "People who explore caves",
                                    AData: "Mostly need to know about cartography",
                                    BData: "Enjoy overcoming the difficulties",
                                    CData: "Usually know about cave sciences"
                                }}
                            />

                        </div>
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques33"
                                TestName="Actual-test-3"
                                AnswerData={LAllAnswersData[32]}  // Adjusted index to match the data
                                userAnswerQN={UserData.ques33}
                                contentsObj={{
                                    Title: "China has",
                                    AData: "Probably the most undiscovered caves.",
                                    BData: "A growing number of cave explorers.",
                                    CData: "Some of the best documented caves."
                                }}
                            />

                        </div>

                    </div>
                    <div className="Q-articles font-bold mb-2">
                        Questions 34-40<br />
                        Complete the table and notes.<br /><br />
                        Write NO MORE THAN TWO WORDS OR A NUMBER for each answer.<br /><br /> <br />
                        <h5>Three Main Reasons for Cave Formation</h5><br /><br />
                    </div>
                    <div className="Questions">
                        <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                            <h5>Dissolution</h5>
                            <h5>Volcanic Lava Tubes</h5>
                            <h5>Action of Waves</h5>
                        </div>

                        <div className='w-full p-3 flex justify-between border-[1px] border-gray-400'>
                            <div className="question mt-2 flex flex-wrap gap-2 box-border overflow-auto">mainly involves
                                <span className='Numbers'>34</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques34"
                                    TestName={"Actual-test-3"}
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

                                topmost surface cools down and
                                <span className='Numbers'>35</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques34"
                                    TestName={"Actual-test-3"}
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
                                hotter lava continue to flow beneath

                                waves pound in to cliffs then erode into
                                <span className='Numbers'>36</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques36"
                                    TestName={"Actual-test-3"}
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
                                or less rigid rocks.
                            </div>
                        </div>

                        <div className='w-full p-3 flex gap-4 justify-between border-[1px] border-gray-400'>
                            <h5 className='m-auto mr-3'>Limestone caves</h5>
                            <div className="question mt-2 flex flex-wrap gap-1 box-border overflow-auto">
                                <label htmlFor="ques37">often have formations made of</label>
                                <span className='Numbers'>37</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques37"
                                    TestName={"Actual-test-3"}
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
                                <label htmlFor="ques37">carbonate e.g. stalactites, stalagmites, and</label>
                                <span className='Numbers'>38</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques38"
                                    TestName={"Actual-test-3"}
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
                        </div>

                        <div className='w-full gap-4 p-3 flex justify-between border-[1px] border-gray-400'>
                            <h5 className='m-auto text-[12px] sm:text-[15px] '>e.g.Lechuguilla</h5>
                            <div className="question mt-2 flex flex-wrap gap-1 box-border overflow-auto">
                                finally revealed in
                                <span className='Numbers'>39</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques39"
                                    TestName={"Actual-test-3"}
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
                                interestingly, formed from the
                                <span className='Numbers'>40</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques40"
                                    TestName={"Actual-test-3"}
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
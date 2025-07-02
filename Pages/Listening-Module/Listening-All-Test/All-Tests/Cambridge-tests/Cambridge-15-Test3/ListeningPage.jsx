"use client";
import React, { useRef } from 'react'
import "../../../Styles/ListeningPage.css";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import { useStateContext } from "@/contexts/ContextProvider";
import Image from 'next/image';
import Explain_Btn from '../../../Importants/Explain-Btn';
import Select_input from '../../Inputs/Select_input';
import Text_inputs from '../../Inputs/Text_inputs';
import { makeEditableAndHighlight } from '@/components/Reading-Module/Reading-All-Tests/Important/TextChangeFunc';



function ListeningPage({ handleValueChange, AllAnswersData, UserData }) {
    // let testItems = localStorage.getItem("ShowAnsByTest");
    const { ListeningShowAnswer, setListeningShowAnswer, explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
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
        // Part 1
        ["furniture"], ["meetings"], ["diary"], ["details"], ["1", "one year"], ["deliveries"], ["tidy"], ["team"], ["heavy"], ["customer"],
        // Part 2
        ["B"], ["A"], ["C"], ["B"], ["C"], ["B"], ["B"], ["A"], ["A"], ["B"],
        // Part 3
        ["page"], ["size"], ["graphics"], ["structure"], ["purpose"], ["assumptions"], ["A"], ["C"], ["C"], ["B"],
        // Part 4
        ["mud"], ["clay"], ["metal"], ["hair"], ["bath"], ["diseases"], ["perfume"], ["salt"], ["science"], ["tax"]
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
                        src="https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test3-Part1.m4a" />
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



            <div className="forAllDivs section-1 bg-sky-100 rounded mb-1 ">
                <>
                    <div className='mb-3 grid grid-cols-1 justify-center w-[90vw] sm:w-full mt-[70px] sm:mt-0'>
                        <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice Cam 15 Listening Test 03</h5>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-1</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test3-Part1.m4a") }}
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

                <div className="p-3 w-full">
                    <h2 className="text-xl font-bold  mb-4">PART 1</h2>
                    <h3 className="text-lg font-semibold  mb-4">Questions 1 – 10</h3>
                    <p className=" font-medium mb-4">Complete the notes below.</p>
                    <p className=" font-medium mb-6">Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.</p>

                    <h4 className="text-lg font-semibold mb-2">Employment Agency: Possible Jobs</h4>

                    <h5 className="font-semibold mb-2">First Job</h5>
                    <p className='flex flex-wrap'>Administrative assistant in a company that produces <span className='Numbers'>1</span>
                        <Text_inputs
                            handleValueChange={handleValueChange}
                            QNum="ques1"
                            TestName={"Cambridge-15-Test3"}
                            AnswerData={LAllAnswersData[0]}
                            userAnswerQN={UserData.ques1}
                        /> (North London)</p>

                    <h6 className="font-medium mt-2">Responsibilities</h6>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>data entry</li>
                        <li className='flex flex-wrap'>go to   <span className='Numbers'>2</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques2"
                                TestName={"Cambridge-15-Test3"}
                                AnswerData={LAllAnswersData[1]}
                                userAnswerQN={UserData.ques2}
                            /> and take notes</li>
                        <li>general admin</li>
                        <li className='flex flex-wrap'>management of <span className='Numbers'>3</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques3"
                                TestName={"Cambridge-15-Test3"}
                                AnswerData={LAllAnswersData[2]}
                                userAnswerQN={UserData.ques3}
                            /></li>
                    </ul>

                    <h6 className="font-medium mt-2">Requirements</h6>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>good computer skills including spreadsheets</li>
                        <li>good interpersonal skills</li>
                        <li className='flex flex-wrap'>attention to <span className='Numbers'>4</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques4"
                                TestName={"Cambridge-15-Test3"}
                                AnswerData={LAllAnswersData[3]}
                                userAnswerQN={UserData.ques4}
                            /></li>
                    </ul>

                    <h6 className="font-medium mt-2">Experience</h6>
                    <ul className="list-disc pl-5 space-y-2">
                        <li className='flex flex-wrap'>need a minimum of <span className='Numbers'>5</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques5"
                                TestName={"Cambridge-15-Test3"}
                                AnswerData={LAllAnswersData[4]}
                                userAnswerQN={UserData.ques5}
                            /> of experience of teleconferencing</li>
                    </ul>

                    <h5 className="font-semibold mt-4 mb-2">Second Job</h5>
                    <p>Warehouse assistant in South London</p>

                    <h6 className="font-medium mt-2">Responsibilities</h6>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>stock management</li>
                        <li className='flex flex-wrap'>managing     <span className='Numbers'>6</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques6"
                                TestName={"Cambridge-15-Test3"}
                                AnswerData={LAllAnswersData[5]}
                                userAnswerQN={UserData.ques6}
                            /></li>
                    </ul>

                    <h6 className="font-medium mt-2">Requirements</h6>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>ability to work with numbers</li>
                        <li>good computer skills</li>
                        <li className='flex flex-wrap'>very organised and <span className='Numbers'>7</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques7"
                                TestName={"Cambridge-15-Test3"}
                                AnswerData={LAllAnswersData[6]}
                                userAnswerQN={UserData.ques7}
                            /></li>
                        <li>good communication skills</li>
                        <li className='flex flex-wrap'>used to working in a <span className='Numbers'>8</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques8"
                                TestName={"Cambridge-15-Test3"}
                                AnswerData={LAllAnswersData[7]}
                                userAnswerQN={UserData.ques8}
                            /></li>
                        <li className='flex flex-wrap'>able to cope with items that are <span className='Numbers'>9</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques9"
                                TestName={"Cambridge-15-Test3"}
                                AnswerData={LAllAnswersData[8]}
                                userAnswerQN={UserData.ques9}
                            /></li>
                    </ul>

                    <h6 className="font-medium mt-2">Need experience of</h6>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>driving in London</li>
                        <li>warehouse work</li>
                        <li className='flex flex-wrap'><span className='Numbers'>10</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques10"
                                TestName={"Cambridge-15-Test3"}
                                AnswerData={LAllAnswersData[9]}
                                userAnswerQN={UserData.ques10}
                            /> service</li>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test3-Part2.m4a") }}
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
                        Questions 11 - 16<br />
                        Choose the correct letter, A, B or C. <br /> <br />
                        <h4 className='mb-3 mt-2 text-center'>Street Play Scheme</h4>
                    </div>
                    <div className="Q-question">
                        <div>
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques11"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[10]}
                                    userAnswerQN={UserData.ques11}
                                    contentsObj={{
                                        Title: "When did the Street Play Scheme first take place?",
                                        AData: "two years ago",
                                        BData: "three years ago",
                                        CData: "six years ago"
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques12"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[11]}
                                    userAnswerQN={UserData.ques12}
                                    contentsObj={{
                                        Title: "How often is Beechwood Road closed to traffic now?",
                                        AData: "once a week",
                                        BData: "on Saturdays and Sundays",
                                        CData: "once a month"
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques13"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[12]}
                                    userAnswerQN={UserData.ques13}
                                    contentsObj={{
                                        Title: "Who is responsible for closing the road?",
                                        AData: "a council official",
                                        BData: "the police",
                                        CData: "local wardens"
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques14"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[13]}
                                    userAnswerQN={UserData.ques14}
                                    contentsObj={{
                                        Title: "Residents who want to use their cars",
                                        AData: "have to park in another street.",
                                        BData: "must drive very slowly",
                                        CData: "need permission from a warden."
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques15"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[14]}
                                    userAnswerQN={UserData.ques15}
                                    contentsObj={{
                                        Title: "Alice says that Street Play Schemes are most needed in",
                                        AData: "wealthy areas",
                                        BData: "quiet suburban areas.",
                                        CData: "areas with heavy traffic."
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques16"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[15]}
                                    userAnswerQN={UserData.ques16}
                                    contentsObj={{
                                        Title: "What has been the reaction of residents who are not parents?",
                                        AData: "Many of them were unhappy at first.",
                                        BData: "They like seeing children play in the street.",
                                        CData: "They are surprised by the lack of noise."
                                    }}
                                />
                            </div>
                        </div>



                        <div className="Q-articles text-justify mt-4 mb-3 font-bold">
                            <h5> Questions 17 and 18</h5> <br />
                            Which TWO benefits for children does Alice think are the most important?<br />
                        </div>
                        <div className="Questions">
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques17"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[16]}
                                    userAnswerQN={UserData.ques17}
                                    contentsObj={{
                                        Title: "",
                                        AData: "increased physical activity",
                                        BData: " increased sense of independence",
                                        CData: "opportunity to learn new games"
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques18"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[17]}
                                    userAnswerQN={UserData.ques18}
                                    contentsObj={{
                                        Title: "",
                                        AData: "  opportunity to be part of a community",
                                        BData: "opportunity to make new friends",
                                        CData: "after completing several practice runs."
                                    }}
                                />
                            </div>


                        </div>
                        <div className="Q-articles text-justify mt-4 mb-3 font-bold">
                            <h5> Questions 19 and 20</h5> <br />
                            Which TWO results of the King Street experiment surprised Alice?<br />
                        </div>
                        <div className="Questions">
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques19"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[18]}
                                    userAnswerQN={UserData.ques19}
                                    contentsObj={{
                                        Title: "",
                                        AData: "more shoppers",
                                        BData: "improved safety",
                                        CData: "less air pollution"
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques20"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[19]}
                                    userAnswerQN={UserData.ques20}
                                    contentsObj={{
                                        Title: "",
                                        AData: "more relaxed atmosphere",
                                        BData: " less noise pollution",
                                        CData: " completing several practice runs."
                                    }}
                                />
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test3-Part3.m4a") }}
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
                        Questions 21 – 26<br />
                        Complete the notes below.<br /> <br />
                        Write ONE WORD ONLY for each answer.<br /> <br />
                        What Hazel should analyse about items in newspapers:.<br /> <br />
                    </div>
                    <div className="">
                        <div className='Questions'>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <label htmlFor="ques21">● what</label>
                                <span className='Numbers'> 21</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques21"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[20]}
                                    userAnswerQN={UserData.ques21}
                                />
                                the item is on
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <label htmlFor="ques22">● the</label>
                                <span className='Numbers'> 22</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques22"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[21]}
                                    userAnswerQN={UserData.ques22}
                                />
                                of the item, including the headline
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <label htmlFor="ques23">● any</label>
                                <span className='Numbers'> 23</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques23"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[22]}
                                    userAnswerQN={UserData.ques23}
                                />
                                accompanying the item
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <label htmlFor="ques24">● the</label>
                                <span className='Numbers'> 24</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques24"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[23]}
                                    userAnswerQN={UserData.ques24}
                                />
                                of the item, e.g. what’s made prominent
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <label htmlFor="ques25">● the writer’s main</label>
                                <span className='Numbers'> 25</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques25"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[24]}
                                    userAnswerQN={UserData.ques25}
                                />
                                main idea
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <label htmlFor="ques26">● the</label>
                                <span className='Numbers'> 26</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques26"
                                    TestName={"Cambridge-15-Test3"}
                                    AnswerData={LAllAnswersData[25]}
                                    userAnswerQN={UserData.ques26}
                                />
                                the writer may make about the reader
                            </div>
                        </div>


                        <div className="">
                            <div className="Q-articles text-justify mt-4 font-bold">
                                <h5> Questions 27-30</h5> <br />
                                What does Hazel decide to do about each of the following types of articles?<br /> <br />
                                Write the correct letter, A, B or C, next to Questions 27-30<br /> <br />
                            </div>
                            <div className="border p-3 rounded-lg shadow-md ">
                                <ul className="list-none space-y-2">
                                    <li><strong>A</strong> - She will definitely look for a suitable article.</li>
                                    <li><strong>B</strong> - She may look for a suitable article.</li>
                                    <li><strong>C</strong> - She definitely won’t look for an article.</li>
                                </ul>
                            </div>
                            <br />

                            <div className='Questions'>
                                <h4 className='text-center'>Types of articles</h4>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>27</span>
                                    <label htmlFor="ques27">National news item</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques27"
                                        TestName={"Cambridge-15-Test3"}
                                        AnswerData={LAllAnswersData[26]}
                                        userAnswerQN={UserData.ques27}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>28</span>
                                    <label htmlFor="ques28">Editorial</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques28"
                                        TestName={"Cambridge-15-Test3"}
                                        AnswerData={LAllAnswersData[27]}
                                        userAnswerQN={UserData.ques28}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>29</span>
                                    <label htmlFor="ques29">Human interest</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques29"
                                        TestName={"Cambridge-15-Test3"}
                                        AnswerData={LAllAnswersData[28]}
                                        userAnswerQN={UserData.ques29}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>30</span>
                                    <label htmlFor="ques30">Arts</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques30"
                                        TestName={"Cambridge-15-Test3"}
                                        AnswerData={LAllAnswersData[29]}
                                        userAnswerQN={UserData.ques30}
                                    />
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test3-Part4.m4a") }}
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

                <div className="p-3 w-full">
                    <h2 className="text-2xl font-bold mb-6">PART 4</h2>
                    <h3 className="text-xl font-semibold mb-4">Questions 31 – 40</h3>
                    <p className="mb-6">Complete the notes below.</p>
                    <p className="mb-6">Write ONE WORD ONLY for each answer.</p>

                    <div className="space-y-4">
                        <div className=" p-2 rounded-lg">
                            <h4 className="font-semibold">Early history of keeping clean</h4>

                            <div className="mt-2">
                                <h5 className="font-semibold">Prehistoric times:</h5>
                                <ul className="list-disc pl-5">
                                    <li className='flex flex-wrap'>Water was used to wash off <span className='Numbers'>31</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques31" TestName="Cambridge-15-Test3" AnswerData={LAllAnswersData[30]} userAnswerQN={UserData.ques31} /></li>
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h5 className="font-semibold">Ancient Babylon:</h5>
                                <ul className="list-disc pl-5">
                                    <li className='flex flex-wrap'>Soap-like material found in <span className='Numbers'>32</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques32" TestName="Cambridge-15-Test3" AnswerData={LAllAnswersData[31]} userAnswerQN={UserData.ques32} />cylinders</li>
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h5 className="font-semibold">Ancient Greece:</h5>
                                <ul className="list-disc pl-5">
                                    <li>People cleaned themselves with sand and other substances</li>
                                    <li className='flex flex-wrap'>Used a strigil – scraper made of <span className='Numbers'>33</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques33" TestName="Cambridge-15-Test3" AnswerData={LAllAnswersData[32]} userAnswerQN={UserData.ques33} /></li>
                                    <li>Washed clothes in streams</li>
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h5 className="font-semibold">Ancient Germany and Gaul:</h5>
                                <ul className="list-disc pl-5">
                                    <li className='flex flex-wrap'>Used soap to colour their   <span className='Numbers'>34</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques34" TestName="Cambridge-15-Test3" AnswerData={LAllAnswersData[33]} userAnswerQN={UserData.ques34} /> </li>
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h5 className="font-semibold">Ancient Rome:</h5>
                                <ul className="list-disc pl-5">
                                    <li>Animal fat, ashes and clay mixed through action of rain, used for washing clothes</li>
                                    <li className='flex flex-wrap'>From about 312 BC, water carried to Roman
                                        <span className='Numbers'>35</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques35" TestName="Cambridge-15-Test3" AnswerData={LAllAnswersData[34]} userAnswerQN={UserData.ques35} />
                                        by aqueducts</li>
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h5 className="font-semibold">Europe in Middle Ages:</h5>
                                <ul className="list-disc pl-5">
                                    <li className='flex flex-wrap'>Decline in bathing contributed to occurrence of <span className='Numbers'>36</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques36" TestName="Cambridge-15-Test3" AnswerData={LAllAnswersData[35]} userAnswerQN={UserData.ques36} /></li>
                                    <li className='flex flex-wrap'><span className='Numbers'>37</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques37" TestName="Cambridge-15-Test3" AnswerData={LAllAnswersData[36]} userAnswerQN={UserData.ques37} />began to be added to soap</li>
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h5 className="font-semibold">Europe from 17th century:</h5>
                                <ul className="list-disc pl-5">
                                    <li>1600s: Cleanliness and bathing started becoming usual</li>
                                    <li className='flex flex-wrap'>1791: Leblanc invented a way of making soda ash from <span className='Numbers'>38</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques38" TestName="Cambridge-15-Test3" AnswerData={LAllAnswersData[37]} userAnswerQN={UserData.ques38} /></li>

                                    <li className='flex flex-wrap'>Early 1800s: Chevreul turned soapmaking into a <span className='Numbers'>39</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques39" TestName="Cambridge-15-Test3" AnswerData={LAllAnswersData[38]} userAnswerQN={UserData.ques39} /></li>

                                    <li className='flex flex-wrap'>From 1800s, there was no longer a  <span className='Numbers'>40</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques40" TestName="Cambridge-15-Test3" AnswerData={LAllAnswersData[39]} userAnswerQN={UserData.ques40} /> on soap.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>







            </div>






        </section >
    )
}



export default ListeningPage
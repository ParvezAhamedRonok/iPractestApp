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
import ImageOne from "@assets/images/listening-images/test15_2.jpg"
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
        ["Eustatis"], ["review"], ["dance"], ["Chat"], ["healthy"], ["posters"], ["wood"], ["lake"], ["insects"], ["blog"],

        // Part 2
        ["C"], ["A"], ["B"], ["C"], ["E"], ["C"], ["B"], ["A"], ["G"], ["D"],

        // Part 3
        ["B"], ["A"], ["B"], ["A"], ["G"], ["B"], ["D"], ["C"], ["H"], ["F"],

        // Part 4
        ["Irrigation"], ["women"], ["wires"], ["seeds"], ["posts"], ["transport"], ["preservation"], ["fishes"], ["bees"], ["design"]
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
                        src=" https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test2-Part1.m4a" />
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
                        <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice Cam 15 Listening Test 02</h5>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-1</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime(" https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test2-Part1.m4a") }}
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
                    <h1 className="text-2xl font-bold mb-4 ">PART 1</h1>
                    <h2 className="text-xl font-bold mb-4 ">Questions 1 – 4</h2>
                    <p className="mb-2 ">Complete the table below.</p>
                    <p className=" mb-4">Write ONE WORD ONLY for each answer.</p>

                    <div className="overflow-x-auto Questions">
                        <table className="table-auto w-full border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-4 py-2">Date</th>
                                    <th className="border px-4 py-2">Type of event</th>
                                    <th className="border px-4 py-2">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">17th</td>
                                    <td className="border px-4 py-2">a concert</td>
                                    <td className="border px-4 py-2">performers from Canada</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">18th</td>
                                    <td className="border px-4 py-2">a ballet</td>
                                    <td className="border px-4 py-2">company called  <span className='Numbers'>1</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques1"
                                            TestName={"Cambridge-15-Test2"}
                                            AnswerData={LAllAnswersData[0]}
                                            userAnswerQN={UserData.ques1}
                                        /></td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">19th-20th (afternoon)</td>
                                    <td className="border px-4 py-2">a play</td>
                                    <td className="border px-4 py-2">type of play: a comedy called Jemima has had a good  <span className='Numbers'>2</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques2"
                                            TestName={"Cambridge-15-Test2"}
                                            AnswerData={LAllAnswersData[1]}
                                            userAnswerQN={UserData.ques2}
                                        /></td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">20th (evening)</td>
                                    <td className="border px-4 py-2">a  <span className='Numbers'>3</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques3"
                                            TestName={"Cambridge-15-Test2"}
                                            AnswerData={LAllAnswersData[2]}
                                            userAnswerQN={UserData.ques3}
                                        /> show</td>
                                    <td className="border px-4 py-2 flex flex-wrap">show is called  <span className='Numbers'>4</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques3"
                                            TestName={"Cambridge-15-Test2"}
                                            AnswerData={LAllAnswersData[3]}
                                            userAnswerQN={UserData.ques4}
                                        /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-xl font-bold mt-8 mb-4 ">Questions 5-10</h2>
                    <p className="mb-2 ">Complete the notes below.</p>
                    <p className=" mb-4">Write ONE WORD ONLY for each answer.</p>

                    <div className="space-y-4 Questions">
                        <p><span className="font-bold">Workshops</span></p>
                        <ul className="list-disc ml-8">
                            <li className='flex flex-wrap'>Making  <span className='Numbers'>5</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques5"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[4]}
                                    userAnswerQN={UserData.ques5}
                                />food</li>
                            <li className='flex flex-wrap'>(children only) Making  <span className='Numbers'>6</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques6"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[5]}
                                    userAnswerQN={UserData.ques6}
                                /></li>
                            <li className='flex flex-wrap'>(adults only) Making toys from  <span className='Numbers'>7</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques7"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[6]}
                                    userAnswerQN={UserData.ques7}
                                /> using various tools</li>
                        </ul>

                        <p><span className="font-bold">Outdoor activities</span></p>
                        <ul className="list-disc ml-8">
                            <li className='flex flex-wrap'>Swimming in the  <span className='Numbers'>8</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques8"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[7]}
                                    userAnswerQN={UserData.ques8}
                                /></li>
                            <li className='flex flex-wrap'>Walking in the woods, led by an expert on  <span className='Numbers'>9</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques9"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[8]}
                                    userAnswerQN={UserData.ques9}
                                /></li>
                        </ul>

                        <p className='flex flex-wrap'>See the festival organiser’s  <span className='Numbers'>10</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques10"
                                TestName={"Cambridge-15-Test2"}
                                AnswerData={LAllAnswersData[9]}
                                userAnswerQN={UserData.ques10}
                            /> for more information</p>
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
                                <button onClick={() => { updateAudiotime(" https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test2-Part2.m4a") }}
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
                        Questions 11 – 14<br />
                        Choose the correct letter, A, B or C. <br /> <br />
                        <h4 className='text-center mt-3 mb-2'>Minster Park</h4>
                    </div>
                    <div className="">
                        <div className='Questions'>
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques11"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[10]}
                                    userAnswerQN={UserData.ques11}
                                    contentsObj={{
                                        Title: "The park was originally established",
                                        AData: "as an amenity provided by the city council.",
                                        BData: "as land belonging to a private house.",
                                        CData: "as a shared area set up by the local community."
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques12"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[11]}
                                    userAnswerQN={UserData.ques12}
                                    contentsObj={{
                                        Title: "Why is there a statue of Diane Gosforth in the park?",
                                        AData: "She was a resident who helped to lead a campaign.",
                                        BData: "She was a council member responsible for giving the public access.",
                                        CData: "She was a senior worker at the park for many years."
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques13"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[12]}
                                    userAnswerQN={UserData.ques13}
                                    contentsObj={{
                                        Title: "During the First World War, the park was mainly used for",
                                        AData: "exercises by troops.",
                                        BData: "growing vegetables.",
                                        CData: "public meetings."
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques14"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[13]}
                                    userAnswerQN={UserData.ques14}
                                    contentsObj={{
                                        Title: "When did the physical transformation of the park begin?",
                                        AData: "2013",
                                        BData: "2015",
                                        CData: "2016"
                                    }}
                                />
                            </div>

                        </div>


                        <div className="Q-articles text-justify mt-4 mb-3 font-bold">
                            <h4> Questions 15–20</h4> <br />
                            Label the map below.<br />
                            Write the correct letter, A-I, next to Questions 15-20.<br /> <br />

                            <Image src={ImageOne} className='w-[80%]' alt='test15 2 image-1' /> <br />
                        </div>
                        <div className="Questions">
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>15</span>
                                <label htmlFor="ques15">Statue of Diane Gosforth</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques15"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[14]}
                                    userAnswerQN={UserData.ques15}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>16</span>
                                <label htmlFor="ques16">Wooden Sculptures</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques16"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[15]}
                                    userAnswerQN={UserData.ques16}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>17</span>
                                <label htmlFor="ques17">Playground</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques17"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[16]}
                                    userAnswerQN={UserData.ques17}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>18</span>
                                <label htmlFor="ques18">Maze</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques18"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[17]}
                                    userAnswerQN={UserData.ques18}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>19</span>
                                <label htmlFor="ques19">Tennis Courts</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques19"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[18]}
                                    userAnswerQN={UserData.ques19}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>20</span>
                                <label htmlFor="ques20">Fitness Area</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques20"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[19]}
                                    userAnswerQN={UserData.ques20}
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
                                <button onClick={() => { updateAudiotime(" https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test2-Part3.m4a") }}
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
                    <div className="Q-articles mt-2 font-bold">
                        <h5>PART 3 </h5> <br />
                        Questions 21-22<br />
                        Which TWO groups of people is the display primarily intended for?<br /> <br />
                    </div>
                    <div className="">
                        <div className='Questions'>
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques21"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[20]}
                                    userAnswerQN={UserData.ques21}
                                    contentsObj={{
                                        Title: "",
                                        AData: " student from the English department",
                                        BData: "residents of the local area",
                                        CData: " the university’s teaching staff"
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques22"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[21]}
                                    userAnswerQN={UserData.ques22}
                                    contentsObj={{
                                        Title: "",
                                        AData: "potential new students",
                                        BData: "students from other departments",
                                        CData: "They have sentimental value for her."
                                    }}
                                />
                            </div>
                        </div> <br />
                        <div className="Q-articles mt-[20px] font-bold">
                            <h5>   Questions 23-24<br /><br />
                                What are Cathy and Graham’s TWO reasons for choosing the novelist Charles Dickens?</h5> <br />

                        </div>
                        <div className='Questions'>
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques23"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[22]}
                                    userAnswerQN={UserData.ques23}
                                    contentsObj={{
                                        Title: "",
                                        AData: "His speeches inspired others to try to improve society.",
                                        BData: "He used his publications to draw attention to social problems.",
                                        CData: "more attractively designed."
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques24"
                                    TestName={"Cambridge-15-Test2"}
                                    AnswerData={LAllAnswersData[23]}
                                    userAnswerQN={UserData.ques24}
                                    contentsObj={{
                                        Title: "",
                                        AData: " His novels are well-known now.",
                                        BData: "He was consulted on a number of social issues.",
                                        CData: "His reputation has changed in recent times."
                                    }}
                                />
                            </div>
                        </div> <br />



                        <div className="">
                            <div className="Q-articles text-justify mt-4 font-bold">
                                <h5>Questions 25-30</h5> <br />
                                What topic do Cathy and Graham choose to illustrate with each novel? <br /> <br />
                                Choose SIX answers from the box and write the correct letter, A-H, next to Questions 25-30.<br /> <br />
                            </div>
                            <div className="border p-3 rounded-lg shadow-md">
                                <h5 className="text-start font-semibold mb-2">Topics</h5> <br />
                                <ul className="list-none space-y-2">
                                    <li><strong>A</strong> - poverty</li>
                                    <li><strong>B</strong> - education</li>
                                    <li><strong>C</strong> - Dickens’s travels</li>
                                    <li><strong>D</strong> - entertainment</li>
                                    <li><strong>E</strong> - crime and the law</li>
                                    <li><strong>F</strong> - wealth</li>
                                    <li><strong>G</strong> - medicine</li>
                                    <li><strong>H</strong> - a woman’s life</li>
                                </ul>
                            </div> <br />

                            <div className='Questions'>
                                <h4 className='text-center'>Novels by Dickens</h4>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>25</span>
                                    <label htmlFor="ques25">The Pickwick Papers</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques25"
                                        TestName={"Cambridge-15-Test2"}
                                        AnswerData={LAllAnswersData[25]}
                                        userAnswerQN={UserData.ques25}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>26</span>
                                    <label htmlFor="ques26">Oliver Twist</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques26"
                                        TestName={"Cambridge-15-Test2"}
                                        AnswerData={LAllAnswersData[26]}
                                        userAnswerQN={UserData.ques26}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>27</span>
                                    <label htmlFor="ques27">Nicholas Nickleby</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques27"
                                        TestName={"Cambridge-15-Test2"}
                                        AnswerData={LAllAnswersData[27]}
                                        userAnswerQN={UserData.ques27}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>28</span>
                                    <label htmlFor="ques28">Martin Chuzzlewit</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques28"
                                        TestName={"Cambridge-15-Test2"}
                                        AnswerData={LAllAnswersData[28]}
                                        userAnswerQN={UserData.ques28}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>29</span>
                                    <label htmlFor="ques29">Bleak House</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques29"
                                        TestName={"Cambridge-15-Test2"}
                                        AnswerData={LAllAnswersData[29]}
                                        userAnswerQN={UserData.ques29}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>30</span>
                                    <label htmlFor="ques30">Little Dorrit</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques30"
                                        TestName={"Cambridge-15-Test2"}
                                        AnswerData={LAllAnswersData[30]}
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
                                <button onClick={() => { updateAudiotime(" https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test2-Part4.m4a") }}
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

                <div className="w-full p-3">
                    <h2 className="text-xl font-bold  mb-4">PART 4</h2>
                    <h3 className="text-lg font-semibold  mb-4">Questions 31 – 40</h3>
                    <p className=" font-medium mb-4">Complete the notes below.</p>
                    <p className=" font-medium mb-6">Write <strong>ONE WORD ONLY</strong> for each answer.</p>

                    <h4 className="text-lg font-semibold mb-2">Agricultural programme in Mozambique</h4>

                    <h5 className="font-semibold mb-2">How the programme was organised</h5>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>It focused on a dry and arid region in Chicualacuala district, near the Limpopo River.</li>
                        <li>People depended on the forest to provide charcoal as a source of income.</li>
                        <li className='flex flex-wrap'><span className='Numbers'>31</span>
                            <Text_inputs handleValueChange={handleValueChange} QNum="ques31" TestName="Cambridge-15-Test2" AnswerData={LAllAnswersData[30]} userAnswerQN={UserData.ques31} /> was seen as the main priority to ensure the supply of water.</li>

                        <li className='flex flex-wrap'>Most of the work organised by farmers’ associations was done by <span className='Numbers'>32</span>
                            <Text_inputs handleValueChange={handleValueChange} QNum="ques32" TestName="Cambridge-15-Test2" AnswerData={LAllAnswersData[31]} userAnswerQN={UserData.ques32} /> </li>
                        <li>Fenced areas created to keep animals away from crops.</li>
                    </ul>

                    <h5 className="font-semibold mt-4 mb-2">The programme provided</h5>
                    <ul className="list-disc pl-5 space-y-2">
                        <li className='flex flex-wrap'><span className='Numbers'>33</span>
                            <Text_inputs handleValueChange={handleValueChange} QNum="ques33" TestName="Cambridge-15-Test2" AnswerData={LAllAnswersData[32]} userAnswerQN={UserData.ques33} /> for the fences</li>
                        <li className='flex flex-wrap'><span className='Numbers'>34</span>

                            <Text_inputs handleValueChange={handleValueChange} QNum="ques34" TestName="Cambridge-15-Test2" AnswerData={LAllAnswersData[33]} userAnswerQN={UserData.ques34} /> for suitable crops</li>
                        <li>water pumps.</li>
                    </ul>

                    <h5 className="font-semibold mt-4 mb-2">The farmers provided</h5>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>labour</li>
                        <li className='flex flex-wrap'><span className='Numbers'>35</span>
                            <Text_inputs handleValueChange={handleValueChange} QNum="ques35" TestName="Cambridge-15-Test2" AnswerData={LAllAnswersData[34]} userAnswerQN={UserData.ques35} /> for the fences on their land.</li>
                    </ul>

                    <h5 className="font-semibold mt-4 mb-2">Further developments</h5>
                    <ul className="list-disc pl-5 space-y-2">
                        <li className='flex flex-wrap'>The marketing of produce was sometimes difficult due to lack of <span className='Numbers'>36</span>
                            <Text_inputs handleValueChange={handleValueChange} QNum="ques36" TestName="Cambridge-15-Test2" AnswerData={LAllAnswersData[35]} userAnswerQN={UserData.ques36} />.</li>

                        <li className='flex flex-wrap'>Training was therefore provided in methods of food <span className='Numbers'>37</span>
                            <Text_inputs handleValueChange={handleValueChange} QNum="ques37" TestName="Cambridge-15-Test2" AnswerData={LAllAnswersData[36]} userAnswerQN={UserData.ques37} />.</li>

                        <li className='flex flex-wrap'>Farmers made special places where <span className='Numbers'>38</span>
                            <Text_inputs handleValueChange={handleValueChange} QNum="ques38" TestName="Cambridge-15-Test2" AnswerData={LAllAnswersData[37]} userAnswerQN={UserData.ques38} />could be kept.</li>

                        <li className='flex flex-wrap'>Local people later suggested keeping <span className='Numbers'>39</span>
                            <Text_inputs handleValueChange={handleValueChange} QNum="ques39" TestName="Cambridge-15-Test2" AnswerData={LAllAnswersData[38]} userAnswerQN={UserData.ques39} /></li>
                    </ul>

                    <h5 className="font-semibold mt-4 mb-2">Evaluation and lessons learned</h5>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Agricultural production increased, improving incomes and food security.</li>
                        <li className='flex flex-wrap'>Enough time must be allowed, particularly for the <span className='Numbers'>40</span>
                            <Text_inputs handleValueChange={handleValueChange} QNum="ques40" TestName="Cambridge-15-Test2" AnswerData={LAllAnswersData[39]} userAnswerQN={UserData.ques40} /> phase of the programme.</li>
                    </ul>
                </div>








            </div>






        </section >
    )
}



export default ListeningPage
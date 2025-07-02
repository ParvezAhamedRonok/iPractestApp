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
        ["Jamieson"], ["afternoon"], ["communication"], ["week"], ["10", "ten"], ["suit"], ["passport"], ["personality"], ["feedback"], ["time"],

        // Part 2
        ["A"], ["B"], ["A"], ["C"], ["river"], ["1422"], ["top"], ["pass"], ["steam"], ["capital"],

        // Part 3
        ["G"], ["F"], ["A"], ["E"], ["B"], ["C"], ["C"], ["A"], ["B"], ["A"],

        // Part 4
        ["shelter"], ["oil"], ["roads"], ["insects"], ["grasses"], ["water"], ["soil"], ["dry"], ["simple"], ["nests"]
    ];





    AllAnswersData(LAllAnswersData)





    // main work----------->
    return (
        <section className='ContainerListener 'onMouseDown={() => { makeEditableAndHighlight("green") }}>
            {/* AudioPlayer component add  */}
            <div className="AudioPlayerClass">
                <div className='w-screen sm:w-[550px] text-white'>
                    <AudioPlayer
                        // className='w-screen sm:w-[550px] rounded bg-[#d4dae0] text-white'
                        src=" https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test1-Part1.m4a" />
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
                        <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice Cam 19 Listening Test 04</h5>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-1</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime(" https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test1-Part1.m4a") }}
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


                <div className=" p-4 w-full">
                    <h1 className="text-xl font-bold mb-2 md:text-2xl mt-2">Part - 1</h1>
                    <h1 className="text-xl font-bold mb-2 md:text-2xl mt-2">Questions 1 – 10</h1>
                    <p className="mb-2 text-sm md:text-base">Complete the notes below.</p>
                    <p className="mb-4 text-sm md:text-base">Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.</p> <br />

                    <h2 className="text-lg font-semibold mb-4 md:text-xl text-center  mt-3">Bankside Recruitment Agency</h2>
                    <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                        <li><strong>Address of agency:</strong> 497 Eastside, Docklands</li>
                        <li className='flex flex-wrap'><strong>Name of agent:</strong> Becky <span className='Numbers'>1</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques1" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[0]} userAnswerQN={UserData.ques1} /></li>
                        <li><strong>Phone number:</strong> 07866 510333</li>
                        <li className='flex flex-wrap'><strong>Best to call her in the</strong> <span className='Numbers'>2</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques2" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[1]} userAnswerQN={UserData.ques2} /></li>
                    </ul>

                    <h2 className="text-lg font-semibold mt-4 mb-2 md:text-xl">Typical jobs</h2>
                    <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                        <li>Clerical and admin roles, mainly in the finance industry</li>
                        <li className='flex flex-wrap'>Must have good <span className='Numbers'>3</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques3" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[2]} userAnswerQN={UserData.ques3} /> skills</li>
                        <li className='flex flex-wrap'>Jobs are usually for at least one <span className='Numbers'>4</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques4" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[3]} userAnswerQN={UserData.ques4} /></li>
                        <li className='flex flex-wrap'>Pay is usually <span className='Numbers'>5</span> £ <Text_inputs handleValueChange={handleValueChange} QNum="ques5" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[4]} userAnswerQN={UserData.ques5} /> per hour</li>
                    </ul>

                    <h2 className="text-lg font-semibold mt-4 mb-2 md:text-xl">Registration process</h2>
                    <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                        <li className='flex flex-wrap'>Wear a <span className='Numbers'>6</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques6" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[5]} userAnswerQN={UserData.ques6} /> to the interview</li>
                        <li className='flex flex-wrap'>Must bring your <span className='Numbers'>7</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques7" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[6]} userAnswerQN={UserData.ques7} /> to the interview</li>
                        <li className='flex flex-wrap'>They will ask questions about each applicant’s <span className='Numbers'>8</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques8" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[7]} userAnswerQN={UserData.ques8} /></li>
                    </ul>

                    <h2 className="text-lg font-semibold mt-4 mb-2 md:text-xl">Advantages of using an agency</h2>
                    <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                        <li className='flex flex-wrap'>The <span className='Numbers'>9</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques9" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[8]} userAnswerQN={UserData.ques9} /> you receive at interview will benefit you</li>
                        <li>Will get access to vacancies which are not advertised</li>
                        <li className='flex flex-wrap'>Less <span className='Numbers'>10</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques10" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[9]} userAnswerQN={UserData.ques10} /> is involved in applying for jobs</li>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test1-Part2.m4a") }}
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
                        <h4 className='text-center mt-2 mb-2'>Matthews Island Holidays</h4>
                    </div>
                    <div className="">
                        <div className='Questions'>
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques11"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[10]}
                                    userAnswerQN={UserData.ques11}
                                    contentsObj={{
                                        Title: "According to the speaker, the company",
                                        AData: "has been in business for longer than most of its competitors.",
                                        BData: "arranges holidays to more destinations than its competitors.",
                                        CData: "has more customers than its competitors."
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques12"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[11]}
                                    userAnswerQN={UserData.ques12}
                                    contentsObj={{
                                        Title: "Where can customers meet the tour manager before travelling to the Isle of Man?",
                                        AData: "Liverpool",
                                        BData: "Heysham",
                                        CData: "Luton"
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques13"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[12]}
                                    userAnswerQN={UserData.ques13}
                                    contentsObj={{
                                        Title: "How many lunches are included in the price of the holiday?",
                                        AData: "three",
                                        BData: "four",
                                        CData: "five"
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques14"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[13]}
                                    userAnswerQN={UserData.ques14}
                                    contentsObj={{
                                        Title: "Customers have to pay extra for",
                                        AData: "guaranteeing themselves a larger room.",
                                        BData: "booking at short notice.",
                                        CData: "transferring to another date."
                                    }}
                                />
                            </div>
                        </div>



                        <div className="Q-articles text-justify mt-4 mb-3 font-bold">
                            <h5> Questions 15-20</h5> <br />
                            Complete the table below.<br />
                            Write ONE WORD AND/OR A NUMBER for each answer.<br />
                        </div>

                        <div className="p-6 max-w-4xl mx-auto">
                            <h1 className="text-2xl font-bold mb-4 text-center">Timetable for Isle of Man Holiday</h1>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="border px-4 py-2">Activity</th>
                                            <th className="border px-4 py-2">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">Day 1 - Arrive</td>
                                            <td className="border px-4 py-2 flex flex-wrap">Introduction by manager<br />Hotel dining room has view of the <span className='Numbers'>15</span><Text_inputs handleValueChange={handleValueChange} QNum="ques15" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[14]} userAnswerQN={UserData.ques15} /></td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Day 2 - Tynwald Exhibition and Peel</td>
                                            <td className="border px-4 py-2">Tynwald may have been founded in <span className='Numbers'>16</span><Text_inputs handleValueChange={handleValueChange} QNum="ques16" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[15]} userAnswerQN={UserData.ques16} /> not 979.</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Day 3 - Trip to Snaefell</td>
                                            <td className="border px-4 py-2">Travel along promenade in a tram; train to Laxey; train to the <div className='flex'><span className='Numbers'>17</span><Text_inputs handleValueChange={handleValueChange} QNum="ques17" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[16]} userAnswerQN={UserData.ques17} /></div> of Snaefell</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Day 4 - Free day</td>
                                            <td className="border px-4 py-2">Company provides a <div className='flex'><span className='Numbers'>18</span><Text_inputs handleValueChange={handleValueChange} QNum="ques18" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[17]} userAnswerQN={UserData.ques18} /></div> for local transport and heritage sites.</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Day 5 - Take the <span className='Numbers'>19</span><Text_inputs handleValueChange={handleValueChange} QNum="ques19" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[18]} userAnswerQN={UserData.ques19} /> railway train from Douglas to Port Erin</td>
                                            <td className="border px-4 py-2">Free time, then coach to Castletown – former <div className='flex'><span className='Numbers'>20</span><Text_inputs handleValueChange={handleValueChange} QNum="ques20" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[19]} userAnswerQN={UserData.ques20} /></div>has old castle.</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Day 6 - Leave</td>
                                            <td className="border px-4 py-2">Leave the island by ferry or plane</td>
                                        </tr>
                                    </tbody>
                                </table>
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
                                <button onClick={() => { updateAudiotime(" https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test1-Part3.m4a") }}
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
                        Questions 21-26<br />
                        What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family? <br /> <br />

                        Choose SIX answers from the box and write the correct letter, A-H, next to Questions 21-26<br /> <br />
                    </div>
                    <div className="">
                        <div class="w-[80%] p-6 border-2 border-gray-300 rounded-lg shadow-md">
                            <h2 class="text-xl font-bold text-start mb-4">Personality Traits</h2>
                            <ul class="space-y-2">
                                <li><strong>A</strong> - Outgoing</li>
                                <li><strong>B</strong> - Selfish</li>
                                <li><strong>C</strong> - Independent</li>
                                <li><strong>D</strong> - Attention-seeking</li>
                                <li><strong>E</strong> - Introverted</li>
                                <li><strong>F</strong> - Co-operative</li>
                                <li><strong>G</strong> - Caring</li>
                                <li><strong>H</strong> - Competitive</li>
                            </ul>
                        </div>
                        <div className='Questions'>
                            <h4 className='text-start mt-4 mb-2'>Position in family</h4>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>21</span>
                                <label htmlFor="ques21">The eldest child</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques21"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[20]}
                                    userAnswerQN={UserData.ques21}
                                />
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>22</span>
                                <label htmlFor="ques22">A middle child</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques22"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[21]}
                                    userAnswerQN={UserData.ques22}
                                />
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>23</span>
                                <label htmlFor="ques23">The youngest child</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques23"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[22]}
                                    userAnswerQN={UserData.ques23}
                                />
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>24</span>
                                <label htmlFor="ques24">A twin</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques24"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[23]}
                                    userAnswerQN={UserData.ques24}
                                />
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>25</span>
                                <label htmlFor="ques25">An only child</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques25"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[24]}
                                    userAnswerQN={UserData.ques25}
                                />
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>26</span>
                                <label htmlFor="ques26">A child with much older siblings</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques26"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[25]}
                                    userAnswerQN={UserData.ques26}
                                />
                            </div>
                        </div>




                        <div className="">
                            <div className="Q-articles text-justify mt-4 font-bold">
                                <h5> Questions 27–28</h5> <br />
                                Choose the correct letter, A, B or C. <br /> <br />
                            </div>

                            <div className='Questions'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques27"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[26]}
                                    userAnswerQN={UserData.ques27}
                                    contentsObj={{
                                        Title: "What do the speakers say about the evidence relating to birth order and academic success?",
                                        AData: "There is conflicting evidence about whether oldest children perform best in intelligence tests.",
                                        BData: "There is little doubt that birth order has less influence on academic achievement than socio-economic status.",
                                        CData: " Some studies have neglected to include important factors such as family size."
                                    }}
                                />
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques28"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[27]}
                                    userAnswerQN={UserData.ques28}
                                    contentsObj={{
                                        Title: "What does Ruth think is surprising about the difference in oldest children’s academic performance?",
                                        AData: "It is mainly thanks to their roles as teachers for their younger siblings.",
                                        BData: "The advantages they have only lead to a slightly higher level of achievement.",
                                        CData: "The extra parental attention they receive at a young age makes little difference."
                                    }}
                                />

                            </div>

                            <div className="Q-articles text-justify mt-4 font-bold">
                                <h5> Questions 29 and 30</h5> <br />
                                Which TWO experiences of sibling rivalry do the speakers agree has been valuable for them?<br /> <br />
                            </div>
                            <div className='Questions'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques29"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[28]}
                                    userAnswerQN={UserData.ques29}
                                    contentsObj={{
                                        Title: "",
                                        AData: " learning to share",
                                        BData: " learning to stand up for oneself",
                                        CData: "learning to be a good loser"
                                    }}
                                />
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques30"
                                    TestName={"Cambridge-15-Test1"}
                                    AnswerData={LAllAnswersData[29]}
                                    userAnswerQN={UserData.ques30}
                                    contentsObj={{
                                        Title: "",
                                        AData: "learning to be tolerant",
                                        BData: "learning to say sorry",
                                        CData: "The extra parental attention"
                                    }}
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test1-Part4.m4a") }}
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

                <div className="p-3 max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold mb-4 text-start">PART 4 <br /> Questions 31 – 40</h1>
                    <p className="text-start mb-4">Complete the notes below. Write ONE WORD ONLY for each answer.</p>
                    <h2 className="text-xl font-bold mb-4">The Eucalyptus Tree in Australia</h2>

                    <h3 className="text-lg font-semibold">Importance</h3>
                    <div className="mb-2 flex flex-wrap">
                        <p className='flex flex-wrap'>it provides <span className='Numbers'>31</span>     <Text_inputs handleValueChange={handleValueChange} QNum="ques31" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[30]} userAnswerQN={UserData.ques31} /> and food for a wide range of species</p>
                    </div>
                    <div className="mb-2 flex flex-wrap">
                        <p className='flex flex-wrap'>its leaves provide <span className='Numbers'>32</span>     <Text_inputs handleValueChange={handleValueChange} QNum="ques32" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[31]} userAnswerQN={UserData.ques32} /> which is used to make a disinfectant</p>
                    </div>

                    <h3 className="text-lg font-semibold mt-4">Reasons for present decline in number</h3>

                    <h4 className="text-md font-semibold mt-2 mb-3">A) Diseases</h4>
                    <div className="mb-2 ">
                        <p>‘Mundulla Yellows’</p>
                        <p className='flex flex-wrap'>Cause – lime used for making <span className='Numbers'>33</span>    <Text_inputs handleValueChange={handleValueChange} QNum="ques33" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[32]} userAnswerQN={UserData.ques33} /> was absorbed</p>
                        <p>– trees were unable to take in necessary iron through their roots</p>
                    </div>

                    <div className="mb-2 flex flex-wrap">
                        <p>‘Bell-miner Associated Die-back’</p>
                        <p className='flex flex-wrap'>Cause – <span className='Numbers'>34</span>     <Text_inputs handleValueChange={handleValueChange} QNum="ques34" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[33]} userAnswerQN={UserData.ques34} />feed on eucalyptus leaves</p>
                        <p>– they secrete a substance containing sugar</p>
                        <p>– bell-miner birds are attracted by this and keep away other species</p>
                    </div>

                    <h4 className="text-md font-semibold mt-4 mb-2">B) Bushfires</h4>

                    <div className="mb-2">
                        <p>William Jackson’s theory:</p>
                        <p className='flex flex-wrap'>high-frequency bushfires have impact on vegetation, resulting in the growth of <span className='Numbers'>35</span>     <Text_inputs handleValueChange={handleValueChange} QNum="ques35" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[34]} userAnswerQN={UserData.ques35} /></p>
                        <p>mid-frequency bushfires result in the growth of eucalyptus forests, because they:</p>
                        <p className='flex flex-wrap'>– make more <span className='Numbers'>36</span>     <Text_inputs handleValueChange={handleValueChange} QNum="ques36" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[35]} userAnswerQN={UserData.ques36} /> available to the trees</p>
                        <p className='flex flex-wrap'>– maintain the quality of the <span className='Numbers'>37</span>    <Text_inputs handleValueChange={handleValueChange} QNum="ques37" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[36]} userAnswerQN={UserData.ques37} /></p>
                    </div>

                    <div className="mb-2">
                        <p className='flex flex-wrap'>low-frequency bushfires result in the growth of <span className='Numbers'>38</span>     <Text_inputs handleValueChange={handleValueChange} QNum="ques38" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[37]} userAnswerQN={UserData.ques38} />‘rainforest’, which is:</p>
                        <p className='flex flex-wrap'>– a <span className='Numbers'>39</span>     <Text_inputs handleValueChange={handleValueChange} QNum="ques39" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[38]} userAnswerQN={UserData.ques39} /> Ecosystem</p>
                        <p className='flex flex-wrap'>– an ideal environment for the <span className='Numbers'>40</span>     <Text_inputs handleValueChange={handleValueChange} QNum="ques40" TestName="Cambridge-15-Test1" AnswerData={LAllAnswersData[39]} userAnswerQN={UserData.ques40} /> of the bell-miner</p>
                    </div>
                </div>



            </div>






        </section >
    )
}



export default ListeningPage
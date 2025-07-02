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
        ["Mathieson"], ["beginners"], ["college"], ["New"], ["11 / eleven (am)"], ["instrument"], ["ear"], ["clapping"], ["recording"], ["alone"],
        // Part 2
        ["A"], ["B"], ["A"], ["B"], ["C"], ["A"], ["C"], ["B"], ["A"], ["A"],
        // Part 3
        ["A"], ["B"], ["B"], ["B"], ["E"], ["B"], ["A"], ["C"], ["C"], ["A"],
        // Part 4
        ["move"], ["short"], ["discs"], ["oxygen"], ["tube"], ["temperatures"], ["protein"], ["space"], ["seaweed"], ["endangered"]
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
                        src="https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test2-part1.m4a" />
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
                        <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice Cam 19 Test 2</h5>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-1</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test2-part1.m4a") }}
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

                <div className="max-w-2xl mx-auto p-4 text-lg">
                    <h2 className="text-xl font-bold mb-4">Questions 1–6</h2>
                    <p className="mb-2">Complete the form below.</p>
                    <p className="mb-4">Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.</p>

                    <h5 className='text-center p-3'>Guitar Group Information</h5>
                    <table className="w-full border-collapse border text-left">

                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Category</th>
                                <th className="border p-2">Details</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border p-2 text-sm">Coordinator:</td>
                                <td className="border p-2 text-sm">
                                    Gary
                                    <span className='Numbers translate-y-[3px]'>1</span>
                                    <Text_inputs handleValueChange={handleValueChange} QNum="ques1" TestName={"Cambridge-19-Test2"} AnswerData={LAllAnswersData[0]} userAnswerQN={UserData.ques1} />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 text-sm">Level:</td>
                                <td className="border p-2 text-sm">
                                    <span className='Numbers translate-y-[3px]'>2</span>
                                    <Text_inputs handleValueChange={handleValueChange} QNum="ques2" TestName={"Cambridge-19-Test2"} AnswerData={LAllAnswersData[1]} userAnswerQN={UserData.ques2} />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 text-sm">Place:</td>
                                <td className="border p-2 text-sm">
                                    the<span className='Numbers translate-y-[3px]'>3</span>
                                    <Text_inputs handleValueChange={handleValueChange} QNum="ques3" TestName={"Cambridge-19-Test2"} AnswerData={LAllAnswersData[2]} userAnswerQN={UserData.ques3} />
                                    <div className='flex flex-wrap'>
                                        <span className='Numbers translate-y-[3px]'>4</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques4" TestName={"Cambridge-19-Test2"} AnswerData={LAllAnswersData[3]} userAnswerQN={UserData.ques4} />
                                        Street <p>First floor, Room T347</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 text-sm">Time:</td>
                                <td className="border p-2 text-sm">
                                    <span className='Numbers translate-y-[3px]'>5</span> Thursday morning at
                                    <Text_inputs handleValueChange={handleValueChange} QNum="ques5" TestName={"Cambridge-19-Test2"} AnswerData={LAllAnswersData[4]} userAnswerQN={UserData.ques5} />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 text-sm">Recommended website:</td>
                                <td className="border p-2 text-sm">
                                    ‘The perfect
                                    <span className='Numbers translate-y-[3px]'>6</span>
                                    <Text_inputs handleValueChange={handleValueChange} QNum="ques6" TestName={"Cambridge-19-Test2"} AnswerData={LAllAnswersData[5]} userAnswerQN={UserData.ques6} />’
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    <h2 className="text-xl font-bold mt-6 mb-4">Questions 7–10</h2>
                    <p className="mb-2">Complete the table below.</p>
                    <p className="mb-4">Write <strong>ONE WORD ONLY</strong> for each answer.</p>

                    <h5 className='text-center p-3'>A typical 45-minute guitar lesson</h5>
                    <table className="w-full border-collapse border text-left">

                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Time</th>
                                <th className="border p-2">Activity</th>
                                <th className="border p-2">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-2 text-sm">5 minutes</td>
                                <td className="border p-2 text-sm">tuning guitars</td>
                                <td className="border p-2 text-sm">using an app or by <span className='Numbers'>7</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques7" TestName={"Cambridge-19-Test2"} AnswerData={LAllAnswersData[6]} userAnswerQN={UserData.ques7} /></td>
                            </tr>
                            <tr>
                                <td className="border p-2 text-sm">10 minutes</td>
                                <td className="border p-2 text-sm">strumming chords using our thumbs</td>
                                <td className="border p-2 text-sm">keeping time while the teacher is <span className='Numbers'>8</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques8" TestName={"Cambridge-19-Test2"} AnswerData={LAllAnswersData[7]} userAnswerQN={UserData.ques8} /></td>
                            </tr>
                            <tr>
                                <td className="border p-2 text-sm">15 minutes</td>
                                <td className="border p-2 text-sm">playing songs</td>
                                <td className="border p-2 text-sm">often listening to a <span className='Numbers'>9</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques9" TestName={"Cambridge-19-Test2"} AnswerData={LAllAnswersData[8]} userAnswerQN={UserData.ques9} /> of a song</td>
                            </tr>
                            <tr>
                                <td className="border p-2 text-sm">10 minutes</td>
                                <td className="border p-2 text-sm">playing single notes and simple tunes</td>
                                <td className="border p-2 text-sm">playing together, then <span className='Numbers'>10</span> <Text_inputs handleValueChange={handleValueChange} QNum="ques10" TestName={"Cambridge-19-Test2"} AnswerData={LAllAnswersData[9]} userAnswerQN={UserData.ques10} /></td>
                            </tr>
                            <tr>
                                <td className="border p-2 text-sm">5 minutes</td>
                                <td className="border p-2 text-sm">noting things to practise at home</td>
                                <td className="border p-2 text-sm"></td>
                            </tr>
                        </tbody>
                    </table>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test2-part2.m4a") }}
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
                        Questions 11-16 <br />
                        Choose the correct letter, A, B or C. <br /> <br />
                    </div>
                    <div className="Q-question">
                        <h5 className='text-center mt-2 mb-2 text-inherit'> Working as a lifeboat volunteer</h5> <br />
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques11"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[10]}
                                userAnswerQN={UserData.ques11}
                                contentsObj={{
                                    Title: "What made David leave London and move to Northsea?",
                                    AData: "He was eager to develop a hobby.",
                                    BData: "He wanted to work shorter hours.",
                                    CData: "He found his job in website design unsatisfying."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques12"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[11]}
                                userAnswerQN={UserData.ques12}
                                contentsObj={{
                                    Title: "The Lifeboat Institution in Northsea was built with money provided by",
                                    AData: "a local organisation.",
                                    BData: "a local resident.",
                                    CData: "the local council."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques13"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[12]}
                                userAnswerQN={UserData.ques13}
                                contentsObj={{
                                    Title: "In his health assessment, the doctor was concerned about the fact that David",
                                    AData: "might be colour blind.",
                                    BData: "was rather short-sighted.",
                                    CData: "had undergone eye surgery."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques14"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[13]}
                                userAnswerQN={UserData.ques14}
                                contentsObj={{
                                    Title: "After arriving at the lifeboat station, they aim to launch the boat within",
                                    AData: "five minutes.",
                                    BData: "six to eight minutes.",
                                    CData: "eight and a half minutes."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques15"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[14]}
                                userAnswerQN={UserData.ques15}
                                contentsObj={{
                                    Title: "As a ‘helmsman’, David has the responsibility of deciding",
                                    AData: "who will be the members of his crew.",
                                    BData: "what equipment it will be necessary to take.",
                                    CData: "if the lifeboat should be launched."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques16"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[15]}
                                userAnswerQN={UserData.ques16}
                                contentsObj={{
                                    Title: "As well as going out on the lifeboat, David",
                                    AData: "gives talks on safety at sea.",
                                    BData: "helps with fundraising.",
                                    CData: "recruits new volunteers."
                                }}
                            />
                        </div>


                        <div className="Questions">
                            <div className="Q-articles text-justify mt-4 mb-3">
                                <h4> Questions 17 and 18</h4> <br />
                                Which TWO things does David say about the lifeboat volunteer training?.<br />
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques17"
                                    TestName={"Cambridge-19-Test2"}
                                    AnswerData={LAllAnswersData[16]}
                                    userAnswerQN={UserData.ques17}
                                    contentsObj={{
                                        Title: "",
                                        AData: " The residential course developed his leadership skills.",
                                        BData: " The training in use of ropes and knots was quite brief.",
                                        CData: "The training exercises have built up his mental strength."
                                    }}
                                />
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques18"
                                    TestName={"Cambridge-19-Test2"}
                                    AnswerData={LAllAnswersData[17]}
                                    userAnswerQN={UserData.ques18}
                                    contentsObj={{
                                        Title: "",
                                        AData: "The casualty care activities were particularly challenging for him.",
                                        BData: "The wave tank activities provided practice in survival techniques.",
                                        CData: "recruits new volunteers."
                                    }}
                                />
                            </div>

                            <div className="Q-articles text-justify mt-4 mb-3">
                                <h4> Questions 19 and 20</h4> <br />
                                Which TWO things does David find most motivating about the work he does?<br />
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques19"
                                    TestName={"Cambridge-19-Test2"}
                                    AnswerData={LAllAnswersData[18]}
                                    userAnswerQN={UserData.ques19}
                                    contentsObj={{
                                        Title: "",
                                        AData: "working as part of a team",
                                        BData: " knots was quite brief.",
                                        CData: "being thanked by those he has helped"
                                    }}
                                />
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques20"
                                    TestName={"Cambridge-19-Test2"}
                                    AnswerData={LAllAnswersData[19]}
                                    userAnswerQN={UserData.ques20}
                                    contentsObj={{
                                        Title: "",
                                        AData: "  experiences when working in winter",
                                        BData: " the fact that it keeps him fit",
                                        CData: "the chance to develop new equipment"
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test2-part3.m4a") }}
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
                        Questions 21-24<br />
                        Choose the correct letter, A, B or C.<br /> <br />
                    </div>
                    <div className="Q-question">
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques21"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[20]}
                                userAnswerQN={UserData.ques21}
                                contentsObj={{
                                    Title: "At first, Don thought the topic of recycling footwear might be too",
                                    AData: "limited in scope.",
                                    BData: "hard to research.",
                                    CData: "boring for listeners."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques22"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[21]}
                                userAnswerQN={UserData.ques22}
                                contentsObj={{
                                    Title: "When discussing trainers, Bella and Don disagree about",
                                    AData: "how popular they are among young people.",
                                    BData: "how suitable they are for school.",
                                    CData: "how quickly they wear out."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques23"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[22]}
                                userAnswerQN={UserData.ques23}
                                contentsObj={{
                                    Title: "Bella says that she sometimes recycles shoes because",
                                    AData: "they no longer fit.",
                                    BData: "she no longer likes them.",
                                    CData: "they are no longer in fashion."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques24"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[23]}
                                userAnswerQN={UserData.ques24}
                                contentsObj={{
                                    Title: "What did the article say that confused Don?",
                                    AData: "Public consumption of footwear has risen.",
                                    BData: "Less footwear is recycled now than in the past.",
                                    CData: "People dispose of more footwear than they used to."
                                }}
                            />
                        </div>

                        <div className="Q-articles font-bold mt-2 mb-2">
                            Questions 25–28<br />
                            What  reasons did the recycling manager give for rejecting footwear, according to the students?<br /> <br />
                            Choose FOUR answers from the box and write the correct letter, A–F, next to Questions 25–28.<br /> <br />
                        </div>
                        <div className='grid justify-start p-[15px] border-2 border-gray-600'>
                            <h4 className="text-center mb-2">Reasons</h4>
                            <div>A - one shoe was missing</div>
                            <div>B - the colour of one shoe had faded</div>
                            <div>C - one shoe had a hole in it</div>
                            <div>D - the shoes were brand new</div>
                            <div>E - the shoes were too dirty</div>
                            <div>F - the stitching on the shoes was broken</div>
                        </div>

                        <h5 className='m-2'>Footwear</h5>
                        <div className="space-y-4">
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className="Numbers">25</span>
                                <label htmlFor="ques25"> the high-heeled shoes </label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques25"
                                    TestName={"Cambridge-19-Test2"}
                                    AnswerData={LAllAnswersData[24]}
                                    userAnswerQN={UserData.ques25}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className="Numbers">26</span>
                                <label htmlFor="ques26">  the ankle boots</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques26"
                                    TestName={"Cambridge-19-Test2"}
                                    AnswerData={LAllAnswersData[25]}
                                    userAnswerQN={UserData.ques26}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className="Numbers">27</span>
                                <label htmlFor="ques27">  the baby shoes</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques27"
                                    TestName={"Cambridge-19-Test2"}
                                    AnswerData={LAllAnswersData[26]}
                                    userAnswerQN={UserData.ques27}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className="Numbers">28</span>
                                <label htmlFor="ques28"> the trainers</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques28"
                                    TestName={"Cambridge-19-Test2"}
                                    AnswerData={LAllAnswersData[27]}
                                    userAnswerQN={UserData.ques28}
                                />
                            </div>
                        </div>



                        <div className="Questions">
                            <div className="Q-articles text-justify mt-4 font-bold">
                                <h5> Questions 29 and 30</h5> <br />
                                Choose the correct letter, A, B or C.<br /> <br />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques29"
                                    TestName={"Cambridge-19-Test2"}
                                    AnswerData={LAllAnswersData[28]}
                                    userAnswerQN={UserData.ques29}
                                    contentsObj={{
                                        Title: "Why did the project to make ‘new’ shoes out of old shoes fail?",
                                        AData: "People believed the ‘new’ pairs of shoes were unhygienic.",
                                        BData: "There were not enough good parts to use in the old shoes.",
                                        CData: "The shoes in the ‘new’ pairs were not completely alike."
                                    }}
                                />
                            </div>
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques30"
                                    TestName={"Cambridge-19-Test2"}
                                    AnswerData={LAllAnswersData[29]}
                                    userAnswerQN={UserData.ques30}
                                    contentsObj={{
                                        Title: "Bella and Don agree that they can present their topic",
                                        AData: "from a new angle.",
                                        BData: "with relevant images.",
                                        CData: "in a straightforward way."
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test2-part4.m4a") }}
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
                        <h5 className='text-center mt-2 text-inherit'>Tardigrades</h5> <br /> <br />
                    </div>
                    <div className="Q-articles p-2">
                        <h5>Physical appearance</h5> <br />
                        <i className='font-bold'>●   more than 1,000 species, 0.05–1.2 millimetres long</i>
                        <i className='font-bold'>●   also known as water ‘bears’

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <label htmlFor="Name">due to how they </label>
                                <span className='Numbers'>31</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques31"
                                    TestName={"Cambridge-19-Test2"}
                                    AnswerData={LAllAnswersData[30]}
                                    userAnswerQN={UserData.ques31}
                                />
                            </div>

                            and ‘moss piglets’</i>
                    </div>

                    <div className="Q-question">
                        <h5 className='text-start mt-2 text-inherit'>Physical appearance</h5> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   a </label>
                            <span className='Numbers'>32</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques32"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[31]}
                                userAnswerQN={UserData.ques32}
                            />
                            <p> round body and four pairs of legs</p>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   claws or </label>
                            <span className='Numbers'>33</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques33"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[32]}
                                userAnswerQN={UserData.ques33}
                            />
                            <p> for gripping</p>
                        </div>

                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   absence of respiratory organs</label>
                        </div>

                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   body filled with a liquid that carries both </label>
                            <span className='Numbers'>34</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques34"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[33]}
                                userAnswerQN={UserData.ques34}
                            />
                            <p> and blood</p>
                        </div>

                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   mouth shaped like a </label>
                            <span className='Numbers'>35</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques35"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[34]}
                                userAnswerQN={UserData.ques35}
                            />
                            <p> with teeth called stylets</p>
                        </div>

                        <h5 className='text-start mt-2 text-inherit'>Habitat</h5> <br />
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   often found at the bottom of a lake or on plants</label>
                        </div>

                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   very resilient and can exist in very low or high </label>
                            <span className='Numbers'>36</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques36"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[35]}
                                userAnswerQN={UserData.ques36}
                            />
                            <p> conditions</p>
                        </div>

                        <h5 className='text-start mt-2 text-inherit'>Cryptobiosis</h5> <br />
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   In dry conditions, they roll into a ball called a ‘tun’.</label>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   They stay alive with a much lower metabolism than usual.</label>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   A type of </label>
                            <span className='Numbers'>37</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques37"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[36]}
                                userAnswerQN={UserData.ques37}
                            />
                            <p> ensures their DNA is not damaged</p>
                        </div>

                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   Research is underway to find out how many days they can stay alive in </label>
                            <span className='Numbers'>38</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques38"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[37]}
                                userAnswerQN={UserData.ques38}
                            />
                            <p> conditions</p>
                        </div>

                        <h5 className='text-start mt-2 text-inherit'>Feeding</h5> <br />
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   consume liquids, e.g., those found in moss or </label>
                            <span className='Numbers'>39</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques39"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[38]}
                                userAnswerQN={UserData.ques39}
                            />
                            <p> food</p>
                        </div>

                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   may eat other tardigrades</label>
                        </div>

                        <h5 className='text-start mt-2 text-inherit'>Conservation status</h5> <br />
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   They are not considered to be </label>
                            <span className='Numbers'>40</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques40"
                                TestName={"Cambridge-19-Test2"}
                                AnswerData={LAllAnswersData[39]}
                                userAnswerQN={UserData.ques40}
                            />
                            <p> endangered</p>
                        </div>
                    </div>
                </div>










            </div>






        </section >
    )
}



export default ListeningPage
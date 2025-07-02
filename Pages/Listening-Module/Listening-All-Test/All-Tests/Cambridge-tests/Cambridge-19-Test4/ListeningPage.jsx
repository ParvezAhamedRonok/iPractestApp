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
        ["Kaeden"], ["lockers"], ["passport"], ["uniform"], ["third", "3rd"], ["0412 665 903"], ["yellow"], ["plastic"], ["ice"], ["gloves"],
        // Part 2
        ["C"], ["A"], ["A"], ["A"], ["A"], ["B"], ["C"], ["A"], ["C"], ["B"],
        // Part 3
        ["A"], ["C"], ["A"], ["B"], ["C"], ["D"], ["F"], ["A"], ["C"], ["G"],
        // Part 4
        ["competition"], ["food"], ["disease"], ["agriculture"], ["maps"], ["cattle"], ["speed"], ["monkeys"], ["fishing"], ["flooding"]
    ];



    AllAnswersData(LAllAnswersData)





    // main work----------->
    return (
        <section className='ContainerListener ' onMouseDown={() => { makeEditableAndHighlight("green") }} >
            {/* AudioPlayer component add  */}
            <div className="AudioPlayerClass">
                <div className='w-screen sm:w-[550px] text-white'>
                    <AudioPlayer
                        // className='w-screen sm:w-[550px] rounded bg-[#d4dae0] text-white'
                        src="https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test4-part1.m4a" />
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test4-part1.m4a") }}
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
                        <h5>PART 1  </h5> <br />
                        Questions 1-10 <br />
                        Complete the notes below. <br />
                        Write ONE WORD AND/OR A NUMBER for each answer.<br />
                    </div>
                    <div className="Q-question">
                        <h4 className='text-center mt-2 mb-2'>First Day at Work</h4>
                        <table className="border-collapse border border-gray-300 w-full">

                            <tbody>
                                <tr>
                                    <td className="border-b p-2">Name of Supervisor:</td>
                                    <td className="flex border-b p-2">
                                        <span className='Numbers'>1</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques1"
                                            TestName={"Cambridge-19-Test4"}
                                            AnswerData={LAllAnswersData[0]}
                                            userAnswerQN={UserData.ques1}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b p-2">Where to leave coat and bag:</td>
                                    <td className="flex flex-wrap border-b p-2">
                                        <span className='Numbers'>2</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques2"
                                            TestName={"Cambridge-19-Test4"}
                                            AnswerData={LAllAnswersData[1]}
                                            userAnswerQN={UserData.ques2}
                                        />
                                        use in staffroom
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b p-2">See Tiffany in HR:</td>
                                    <td className="flex flex-wrap border-b p-2">
                                        to give <span className='Numbers'>3</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques3"
                                            TestName={"Cambridge-19-Test4"}
                                            AnswerData={LAllAnswersData[2]}
                                            userAnswerQN={UserData.ques3}
                                        /> <br />
                                        number to collect <span className='Numbers'>4</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques4"
                                            TestName={"Cambridge-19-Test4"}
                                            AnswerData={LAllAnswersData[3]}
                                            userAnswerQN={UserData.ques4}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b p-2">Location of HR office:</td>
                                    <td className="flex flex-wrap border-b p-2">
                                        on <span className='Numbers'>5</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques5"
                                            TestName={"Cambridge-19-Test4"}
                                            AnswerData={LAllAnswersData[4]}
                                            userAnswerQN={UserData.ques5}
                                        />
                                        floor
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b p-2">Supervisor’s mobile number:</td>
                                    <td className="flex flex-wrap border-b p-2">
                                        <span className='Numbers'>6</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques6"
                                            TestName={"Cambridge-19-Test4"}
                                            AnswerData={LAllAnswersData[5]}
                                            userAnswerQN={UserData.ques6}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>



                        <div className="Q-articles">
                            Questions 7-10 <br />
                            Complete the table below. <br />
                            Write ONE WORD ONLY for each answer. <br />

                        </div>
                        <div className="overflow-x-auto mt-6">
                            <h5 className='text-center mt-2 text-inherit'>Responsibilities</h5>
                            <table className="min-w-full table-auto mt-4 border-collapse">
                                <thead>
                                    <tr>
                                        <th className="border-b px-4 py-2 text-left"></th>
                                        <th className="border-b px-4 py-2 text-left">Task 1</th>
                                        <th className="border-b px-4 py-2 text-left">Task 2</th>
                                        <th className="border-b px-4 py-2 text-left">Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-b px-4 py-2">Bakery section</td>
                                        <td className="border-b px-4 py-2">Check sell-by dates</td>
                                        <td className="border-b px-4 py-2">Change price labels</td>
                                        <td className="border-b px-4 py-2 flex flex-wrap">Use   <span className='Numbers'>7</span>
                                            <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques7"
                                                TestName={"Cambridge-19-Test4"}
                                                AnswerData={LAllAnswersData[6]}
                                                userAnswerQN={UserData.ques7}
                                            />labels</td>
                                    </tr>
                                    <tr>
                                        <td className="border-b px-4 py-2">Sushi takeaway counter</td>
                                        <td className="border-b px-4 py-2 flex flex-wrap">Re-stock with <span className='Numbers'>8</span>
                                            <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques8"
                                                TestName={"Cambridge-19-Test4"}
                                                AnswerData={LAllAnswersData[7]}
                                                userAnswerQN={UserData.ques8}
                                            />boxes if needed</td>
                                        <td className="border-b px-4 py-2">Wipe preparation area and clean the sink</td>
                                        <td className="border-b px-4 py-2">Do not clean any knives</td>
                                    </tr>
                                    <tr>
                                        <td className="border-b px-4 py-2">Meat and fish counters</td>
                                        <td className="border-b px-4 py-2">Clean the serving area, including the weighing scales</td>
                                        <td className="border-b px-4 py-2 flex flex-wrap">Collect <span className='Numbers'>9</span>
                                            <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques9"
                                                TestName={"Cambridge-19-Test4"}
                                                AnswerData={LAllAnswersData[8]}
                                                userAnswerQN={UserData.ques9}
                                            />
                                        </td>
                                        <td className="border-b px-4 py-2 flex flex-wrap">
                                            for the fish from the cold-roomMust wear special <span className='Numbers'>10</span>
                                            <Text_inputs
                                                handleValueChange={handleValueChange}
                                                QNum="ques10"
                                                TestName={"Cambridge-19-Test4"}
                                                AnswerData={LAllAnswersData[9]}
                                                userAnswerQN={UserData.ques10}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test4-part2.m4a") }}
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
                        Questions 11 and 12<br />
                        Which TWO problems with some training programmes for new runners does Liz mention? <br /> <br />
                    </div>
                    <div className="Q-question">
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques11"
                                TestName={"Cambridge-19-Test4"}
                                AnswerData={LAllAnswersData[10]}
                                userAnswerQN={UserData.ques11}
                                contentsObj={{
                                    Title: "",
                                    AData: "There is a risk of serious injury.",
                                    BData: "They are unsuitable for certain age groups.",
                                    CData: "They are unsuitable for people with health issues."
                                }}
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

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques12"
                                TestName={"Cambridge-19-Test4"}
                                AnswerData={LAllAnswersData[11]}
                                userAnswerQN={UserData.ques12}
                                contentsObj={{
                                    Title: "",
                                    AData: "It is difficult to stay motivated.",
                                    BData: "There is a lack of individual support.",
                                    CData: "Most volunteers are about 60 years old."
                                }}
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


                        <div className="Questions">
                            <div className="Q-articles text-justify mt-4">
                                <h5> Questions 13 and 14</h5> <br />
                                Which TWO tips does Liz recommend for new runners?<br />
                            </div> <br /> <br />

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques13"
                                    TestName={"Cambridge-19-Test4"}
                                    AnswerData={LAllAnswersData[12]}
                                    userAnswerQN={UserData.ques13}
                                    contentsObj={{
                                        Title: "",
                                        AData: "doing two runs a week",
                                        BData: " running in the evening",
                                        CData: "going on runs with a friend"
                                    }}
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
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques14"
                                    TestName={"Cambridge-19-Test4"}
                                    AnswerData={LAllAnswersData[13]}
                                    userAnswerQN={UserData.ques14}
                                    contentsObj={{
                                        Title: "",
                                        AData: "listening to music during runs",
                                        BData: "running very slowly",
                                        CData: "their availability"
                                    }}
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


                        <div className="Questions">
                            <div className="Q-articles text-justify mt-4 mb-3 font-bold">
                                <h5> Questions 15–18</h5> <br />
                                What reason prevented each of the following members of the Compton Park Runners Club from joining until recently?<br />
                                Write the correct answer, A, B, or C next to Questions 15–18.<br />
                            </div>
                            <div className="Q-articles text-justify mt-4 mb-3 border-[2px] w-[60%] border-gray-400 p-2">
                                <h5>
                                    Reasons <br /> <br />
                                    A   a lack of confidence <br /> <br />
                                    B   a dislike of running <br /> <br />
                                    C   a lack of time
                                </h5>
                            </div> <br />
                            <h4>Club members</h4> <br />
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>15</span>
                                <label htmlFor="Name"> Ceri  </label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques15"
                                    TestName={"Cambridge-19-Test4"}
                                    AnswerData={LAllAnswersData[14]}
                                    userAnswerQN={UserData.ques15}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>16</span>
                                <label htmlFor="Name"> James    </label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques16"
                                    TestName={"Cambridge-19-Test4"}
                                    AnswerData={LAllAnswersData[15]}
                                    userAnswerQN={UserData.ques16}
                                />
                            </div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>17</span>
                                <label htmlFor="Name"> Leo   </label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques17"
                                    TestName={"Cambridge-19-Test4"}
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
                                <label htmlFor="Name"> Mark    </label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques18"
                                    TestName={"Cambridge-19-Test4"}
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
                            <div className="Q-articles text-justify mt-4 mb-3 font-bold">
                                <h5> Questions 19–20</h5> <br />
                                Choose the correct letter, A, B or C.<br />
                            </div>
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques19"
                                    TestName={"Cambridge-19-Test4"}
                                    AnswerData={LAllAnswersData[18]}
                                    userAnswerQN={UserData.ques19}
                                    contentsObj={{
                                        Title: "What does Liz say about running her first marathon?",
                                        AData: "It had always been her ambition.",
                                        BData: "Her husband persuaded her to do it.",
                                        CData: "She nearly gave up before the end."
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques20"
                                    TestName={"Cambridge-19-Test4"}
                                    AnswerData={LAllAnswersData[19]}
                                    userAnswerQN={UserData.ques20}
                                    contentsObj={{
                                        Title: "Liz says new runners should sign up for a race",
                                        AData: "every six months.",
                                        BData: "within a few weeks of taking up running.",
                                        CData: "after completing several practice runs."
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test4-part3.m4a") }}
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
                        Questions 21-25<br />
                        Choose the correct letter, A, B or C.<br /> <br />
                    </div>
                    <div className="Q-question">
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques21"
                                TestName={"Cambridge-19-Test4"}
                                AnswerData={LAllAnswersData[20]}
                                userAnswerQN={UserData.ques21}
                                contentsObj={{
                                    Title: "Kieran thinks the packing advice given by Jane’s grandfather is",
                                    AData: "common sense.",
                                    BData: "hard to follow.",
                                    CData: "over-protective."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques22"
                                TestName={"Cambridge-19-Test4"}
                                AnswerData={LAllAnswersData[21]}
                                userAnswerQN={UserData.ques22}
                                contentsObj={{
                                    Title: "How does Jane feel about the books her grandfather has given her?",
                                    AData: "They are not worth keeping.",
                                    BData: "They should go to a collector.",
                                    CData: "They have sentimental value for her."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques23"
                                TestName={"Cambridge-19-Test4"}
                                AnswerData={LAllAnswersData[22]}
                                userAnswerQN={UserData.ques23}
                                contentsObj={{
                                    Title: "Jane and Kieran agree that hardback books should be",
                                    AData: "put out on display.",
                                    BData: "given as gifts to visitors.",
                                    CData: "more attractively designed."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques24"
                                TestName={"Cambridge-19-Test4"}
                                AnswerData={LAllAnswersData[23]}
                                userAnswerQN={UserData.ques24}
                                contentsObj={{
                                    Title: "While talking about taking a book from a shelf, Jane",
                                    AData: "describes the mistakes other people make doing it.",
                                    BData: "reflects on a significant childhood experience.",
                                    CData: "explains why some books are easier to remove than others."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques25"
                                TestName={"Cambridge-19-Test4"}
                                AnswerData={LAllAnswersData[24]}
                                userAnswerQN={UserData.ques25}
                                contentsObj={{
                                    Title: "What do Jane and Kieran suggest about new books?",
                                    AData: "Their parents liked buying them as presents.",
                                    BData: "They would like to buy more of them.",
                                    CData: "Not everyone can afford them."
                                }}
                            />
                        </div>


                        <div className="">
                            <div className="Q-articles text-justify mt-4 font-bold">
                                <h5> Questions 26–30</h5> <br />
                                Where does Jane’s grandfather keep each of the following types of books in his shop? <br /> <br />
                                Choose FIVE answers from the box and write the correct letter, A–G, next to Questions 26–30.<br /> <br />
                            </div>
                            <div className="border p-3 rounded-lg shadow-md ">
                                <h5 className="text-start font-semibold mb-2">Location of books</h5> <br />
                                <ul className="list-none space-y-2">
                                    <li><strong>A</strong> - near the entrance</li>
                                    <li><strong>B</strong> - in the attic</li>
                                    <li><strong>C</strong> - at the back of the shop</li>
                                    <li><strong>D</strong> - on a high shelf</li>
                                    <li><strong>E</strong> - near the stairs</li>
                                    <li><strong>F</strong> - in a specially designed space</li>
                                    <li><strong>G</strong> - within the café</li>
                                </ul>
                            </div> <br />

                            <div className='Questions'>
                                <h4 className='text-center'>Types of books</h4>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>26</span>
                                    <label htmlFor="ques26">Rare books</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques26"
                                        TestName={"Cambridge-19-Test4"}
                                        AnswerData={LAllAnswersData[25]}
                                        userAnswerQN={UserData.ques26}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>27</span>
                                    <label htmlFor="ques27">Children’s books</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques27"
                                        TestName={"Cambridge-19-Test4"}
                                        AnswerData={LAllAnswersData[26]}
                                        userAnswerQN={UserData.ques27}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>28</span>
                                    <label htmlFor="ques28">Unwanted books</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques28"
                                        TestName={"Cambridge-19-Test4"}
                                        AnswerData={LAllAnswersData[27]}
                                        userAnswerQN={UserData.ques28}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>29</span>
                                    <label htmlFor="ques29">Requested books</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques29"
                                        TestName={"Cambridge-19-Test4"}
                                        AnswerData={LAllAnswersData[28]}
                                        userAnswerQN={UserData.ques29}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>30</span>
                                    <label htmlFor="ques30">Coursebooks</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques30"
                                        TestName={"Cambridge-19-Test4"}
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test4-part4.m4a") }}
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

                <div className="max-w-3xl mx-auto ">
                    <h2 className="text-xl font-semibold text-start mb-4">
                        Questions 31–40
                    </h2>
                    <p className="text-gray-700 font-medium text-center">
                        Complete the notes below.
                    </p>
                    <p className="text-gray-700 font-medium text-center mb-4">
                        Write <span className="font-bold">ONE WORD ONLY</span> for each answer.
                    </p>

                    <div className="space-y-4">
                        {/* Tree Planting Section */}
                        <h3 className="text-lg font-semibold">Tree planting</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Reforestation projects should:</li>
                            <ul className="list-none pl-6">
                                <li>● include a range of tree species</li>
                                <li className='flex flex-wrap'>
                                    ● not include invasive species because of possible <span className='Numbers'>31</span>
                                    <Text_inputs handleValueChange={handleValueChange} QNum="ques31" TestName="Cambridge-19-Test4" AnswerData={LAllAnswersData[30]} userAnswerQN={UserData.ques31} /> with native species.
                                </li>
                                <li className='flex flex-wrap'>
                                    ● aim to capture carbon, protect the environment and provide sustainable sources of <span className='Numbers'>32</span>
                                    <Text_inputs handleValueChange={handleValueChange} QNum="ques32" TestName="Cambridge-19-Test4" AnswerData={LAllAnswersData[31]} userAnswerQN={UserData.ques32} /> for local people
                                </li>
                                <li className='flex flex-wrap'>
                                    ● use tree seeds with a high genetic diversity to increase resistance to <span className='Numbers'>33</span>
                                    <Text_inputs handleValueChange={handleValueChange} QNum="ques33" TestName="Cambridge-19-Test4" AnswerData={LAllAnswersData[32]} userAnswerQN={UserData.ques33} /> and climate change
                                </li>
                                <li className='flex flex-wrap'>
                                    ● plant trees on previously forested land which is in a bad condition, not select land which is being used for <span className='Numbers'>34</span>
                                    <Text_inputs handleValueChange={handleValueChange} QNum="ques34" TestName="Cambridge-19-Test4" AnswerData={LAllAnswersData[33]} userAnswerQN={UserData.ques34} />
                                </li>
                            </ul>
                        </ul>

                        {/* Large-scale reforestation projects */}
                        <h3 className="text-lg font-semibold">Large-scale reforestation projects</h3>
                        <ul className="list-none pl-6 space-y-2 text-gray-700">
                            <li className='flex flex-wrap'>
                                ● Base planning decisions on information from accurate <span className='Numbers'>35</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques35" TestName="Cambridge-19-Test4" AnswerData={LAllAnswersData[34]} userAnswerQN={UserData.ques35} />.
                            </li>
                            <li className='flex flex-wrap'>
                                ● Drones are useful for identifying areas in Brazil which are endangered by keeping <span className='Numbers'>36</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques36" TestName="Cambridge-19-Test4" AnswerData={LAllAnswersData[35]} userAnswerQN={UserData.ques36} /> and illegal logging.
                            </li>
                        </ul>

                        {/* Lampang Province, Northern Thailand */}
                        <h3 className="text-lg font-semibold">Lampang Province, Northern Thailand</h3>
                        <ul className="list-none pl-6 space-y-2 text-gray-700">
                            <li>● A forest was restored in an area damaged by mining.</li>
                            <li>● A variety of native fig trees were planted, which are important for:</li>
                            <ul className="list-none pl-6">
                                <li>– supporting many wildlife species</li>
                                <li className='flex flex-wrap'>
                                    – increasing the <span className='Numbers'>37</span>
                                    <Text_inputs handleValueChange={handleValueChange} QNum="ques37" TestName="Cambridge-19-Test4" AnswerData={LAllAnswersData[36]} userAnswerQN={UserData.ques37} /> of recovery by attracting animals and birds, e.g., <span className='Numbers'>38</span>
                                    <Text_inputs handleValueChange={handleValueChange} QNum="ques38" TestName="Cambridge-19-Test4" AnswerData={LAllAnswersData[37]} userAnswerQN={UserData.ques38} /> were soon attracted to the area.
                                </li>
                            </ul>
                        </ul>

                        {/* Involving local communities */}
                        <h3 className="text-lg font-semibold">Involving local communities</h3>
                        <ul className="list-none pl-6 space-y-2 text-gray-700">
                            <li className='flex flex-wrap'>
                                ● Destruction of mangrove forests in Madagascar made it difficult for people to make a living from <span className='Numbers'>39</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques39" TestName="Cambridge-19-Test4" AnswerData={LAllAnswersData[38]} userAnswerQN={UserData.ques39} />.
                            </li>
                            <li>● The mangrove reforestation project:</li>
                            <ul className="list-none pl-6">
                                <li>– provided employment for local people</li>
                                <li>– restored a healthy ecosystem</li>
                                <li className='flex flex-wrap'>
                                    – protects against the higher risk of <span className='Numbers'>40</span>
                                    <Text_inputs handleValueChange={handleValueChange} QNum="ques40" TestName="Cambridge-19-Test4" AnswerData={LAllAnswersData[39]} userAnswerQN={UserData.ques40} />.
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>






            </div>






        </section >
    )
}



export default ListeningPage
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



    const LAllAnswersData = [
        // Part 1
        ["harbour", "harbor"], ["bridge"], ["3.30", "three thirty", "½", "half 3", "three"],
        ["Rose", "rose"], ["sign"], ["purple"], ["samphire"], ["melon"], ["coconut"], ["strawberry"],
        // Part 2
        ["C"], ["D"], ["F"], ["G"], ["B"], ["H"],
        ["A"],["B"], // 17 & 18
        ["B"],["A"], // 19 & 20
        // Part 3
        ["C"], ["B"], ["A"], ["A"], ["C"], ["C"],
        ["H"], ["E"], ["B"], ["F"],
        // Part 4
        ["clothing"], ["mouths"], ["salt"], ["toothpaste"], ["fertilisers"],
        ["nutrients"], ["growth"], ["weight"], ["acid"], ["society"]
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
                        src="https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test3-part1.m4a" />
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
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-1</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test3-part1.m4a") }}
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
                        <h5>PART 1</h5> <br />
                        Questions 1-6 <br />
                        Complete the notes below. <br />
                        Write ONE WORD AND/OR A NUMBER for each answer. <br />
                        <h5 className='text-center mt-2 text-inherit'>Local food shops</h5> <br /> <br />
                    </div>
                    <div className="Q-question">
                        <h5 className='text-start mt-2 text-inherit'>Where to go:</h5>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">Kite Place – near the</label>
                            <span className='Numbers'>1</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques1"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[0]}
                                userAnswerQN={UserData.ques1}
                            />
                            <br />
                            <strong>Fish market</strong>
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">Cross the</label>
                            <span className='Numbers'>2</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques2"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[1]}
                                userAnswerQN={UserData.ques2}
                            />
                            <p>and turn right</p>
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">Best to go before</label>
                            <span className='Numbers'>3</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques3"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[2]}
                                userAnswerQN={UserData.ques3}
                            />
                            <p>pm, earlier than closing time</p>
                        </div> <br />
                        <strong>Organic shop</strong> <br />

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name font-bold"> called</label> <br />

                            <span className='Numbers'>4</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques4"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[3]}
                                userAnswerQN={UserData.ques4}
                            />
                        </div> <br />
                        <strong>Below a restaurant in the large, grey building</strong>
                        <div className="question mt-2 flex flex-wrap gap-2">

                            <p>●   look for the large</p>
                            <div className='flex'>
                                <span className='Numbers'>5</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques5"
                                    TestName={"Cambridge-19-Test3"}
                                    AnswerData={LAllAnswersData[4]}
                                    userAnswerQN={UserData.ques5}
                                />
                                outside
                            </div>
                        </div>

                        <div className="question mt-2 grid gap-2">
                            < strong className="Name font-bold">Supermarket </strong>
                            <div className='flex'>
                                – take a
                                <span className='Numbers'>6</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques6"
                                    TestName={"Cambridge-19-Test3"}
                                    AnswerData={LAllAnswersData[5]}
                                    userAnswerQN={UserData.ques6}
                                />
                                <p>Minibus, number 289</p>
                            </div>
                        </div>
                    </div>
                    <div className="Q-question mt-4">
                        <h5 className='text-start mt-2 text-inherit font-bold'>Questions 7–10</h5>
                        <p>Complete the table below. Write ONE WORD ONLY for each answer.</p>
                        <h3 className='text-center mt-2 mb-2'>Shopping</h3>
                        <table className="min-w-full border-collapse border border-gray-400 mt-2 ">
                            <thead>
                                <tr>
                                    <th className="text-xl font-bold border border-gray-400 px-4 py-2 text-center"></th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">To buy</th>
                                    <th className="border border-gray-400 px-4 py-2 text-center">Other ideas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2 text-center">Fish market</td>
                                    <td className="border border-gray-400 px-4 py-2 text-center">a dozen prawns</td>
                                    <td className="border border-gray-400 px-4 py-2 text-center">a handful of <span className='Numbers'>7</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques7"
                                            TestName={"Cambridge-19-Test3"}
                                            AnswerData={LAllAnswersData[6]}
                                            userAnswerQN={UserData.ques7}
                                        />
                                        (type of seaweed)
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2 text-center">Organic shop</td>
                                    <td className="border border-gray-400 px-4 py-2 text-center">beans and a <span className='Numbers'>8</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques8"
                                            TestName={"Cambridge-19-Test3"}
                                            AnswerData={LAllAnswersData[7]}
                                            userAnswerQN={UserData.ques8}
                                        />
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2 text-center">spices and <span className='Numbers'>9</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques9"
                                            TestName={"Cambridge-19-Test3"}
                                            AnswerData={LAllAnswersData[8]}
                                            userAnswerQN={UserData.ques9}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 px-4 py-2 text-center">Bakery</td>
                                    <td className="border border-gray-400 px-4 py-2 text-center">a brown loaf</td>
                                    <td className="border border-gray-400 px-4 py-2 text-center">a <span className='Numbers'>10</span>
                                        <Text_inputs
                                            handleValueChange={handleValueChange}
                                            QNum="ques10"
                                            TestName={"Cambridge-19-Test3"}
                                            AnswerData={LAllAnswersData[9]}
                                            userAnswerQN={UserData.ques10}
                                        /> tart</td>
                                </tr>
                            </tbody>
                        </table>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test3-part2.m4a") }}
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
                        Questions 11–16 <br />
                        What information is given about each of the following festival workshops? <br /> <br />
                        Choose SIX answers from the box and write the correct letter, A–H, next to Questions 11–16.
                        <br /> <br />
                    </div>

                    <div className="Q-question border border-gray-400 p-4 rounded-lg shadow-lg">
                        <h5 className="text-xl font-bold mb-4">Information</h5>
                        <ul className="list-disc pl-5">
                            <li><span className="font-semibold">A</span> involves painting and drawing</li>
                            <li><span className="font-semibold">B</span> will be led by a prize-winning author</li>
                            <li><span className="font-semibold">C</span> is aimed at children with a disability</li>
                            <li><span className="font-semibold">D</span> involves a drama activity</li>
                            <li><span className="font-semibold">E</span> focuses on new relationships</li>
                            <li><span className="font-semibold">F</span> is aimed at a specific age group</li>
                            <li><span className="font-semibold">G</span> explores an unhappy feeling</li>
                            <li><span className="font-semibold">H</span> raises awareness of a particular culture</li>
                        </ul>
                    </div> <br />

                    <div className="Q-question">
                        <h5 className='mt-2 mb-2'>Festival workshops</h5>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>11</span>
                            <label htmlFor="Name">Superheroes</label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques11"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[10]}
                                userAnswerQN={UserData.ques11}
                            />
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>12</span>
                            <label htmlFor="Name">Just do it</label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques12"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[11]}
                                userAnswerQN={UserData.ques12}
                            />
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>13</span>
                            <label htmlFor="Name">Count on me</label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques13"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[12]}
                                userAnswerQN={UserData.ques13}
                            />
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>14</span>
                            <label htmlFor="Name">Speak up</label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques14"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[13]}
                                userAnswerQN={UserData.ques14}
                            />
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>15</span>
                            <label htmlFor="Name">Jump for joy</label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques15"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[14]}
                                userAnswerQN={UserData.ques15}
                            />
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>16</span>
                            <label htmlFor="Name">Sticks and stones</label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques16"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[15]}
                                userAnswerQN={UserData.ques16}
                            />
                        </div>
                    </div> <br />


                    <div className="Q-question">
                        <div className="Q-articles font-bold">
                            Questions 17 and 18<br />
                            Which TWO reasons does the speaker give for recommending Alive and Kicking?
                            <br /> <br />
                        </div>
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques17"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[16]}
                                userAnswerQN={UserData.ques17}
                                contentsObj={{
                                    Title: "",
                                    AData: "It is funny.",
                                    BData: " It will appeal to both boys and girls.",
                                    CData: "Some of them are very close together."
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
                                QNum="ques18"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[17]}
                                userAnswerQN={UserData.ques18}
                                contentsObj={{
                                    Title: "",
                                    AData: "The author is well known.",
                                    BData: " It deals with an important topic.",
                                    CData: " It has colourful illustrations."
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

                        <div className="Q-articles font-bold">
                            Questions 19 and 20<br />
                            Which TWO pieces of advice does the speaker give to parents about reading?
                            <br /> <br />
                        </div>
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques19"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[18]}
                                userAnswerQN={UserData.ques19}
                                contentsObj={{
                                    Title: "",
                                    AData: "Encourage children to write down new vocabulary.",
                                    BData: "Allow children to listen to audio books.",
                                    CData: "Some of them are very close together."
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
                                QNum="ques20"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[19]}
                                userAnswerQN={UserData.ques20}
                                contentsObj={{
                                    Title: "",
                                    AData: "Get recommendations from librarians.",
                                    BData: "  Give children a choice about what they read.",
                                    CData: "Only read aloud to children until they can read independently."
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test3-part3.m4a") }}
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
                    <h5 className='text-center mt-2 mb-2 text-inherit'> Science experiment for Year 12 students</h5> <br />
                    <div className="Q-question">
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques21"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[20]}
                                userAnswerQN={UserData.ques21}
                                contentsObj={{
                                    Title: "How does Clare feel about the students in her Year 12 science class?",
                                    AData: "worried that they are not making progress",
                                    BData: "challenged by their poor behaviour in class",
                                    CData: "frustrated at their lack of interest in the subject"
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques22"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[21]}
                                userAnswerQN={UserData.ques22}
                                contentsObj={{
                                    Title: "How does Jake react to Clare’s suggestion about an experiment based on children’s diet?",
                                    AData: "He is concerned that the results might not be meaningful.",
                                    BData: "He feels some of the data might be difficult to obtain.",
                                    CData: "He suspects that the conclusions might be upsetting."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques23"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[22]}
                                userAnswerQN={UserData.ques23}
                                contentsObj={{
                                    Title: "What problem do they agree may be involved in an experiment involving animals?",
                                    AData: "Any results may not apply to humans.",
                                    BData: "It may be complicated to get permission.",
                                    CData: "Students may not be happy about animal experiments."
                                }}
                            />
                        </div>
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques24"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[23]}
                                userAnswerQN={UserData.ques24}
                                contentsObj={{
                                    Title: "What question do they decide the experiment should address?",
                                    AData: "Are mice capable of controlling their food intake?",
                                    BData: "Does an increase in sugar lead to health problems?",
                                    CData: "How much do supplements of different kinds affect health?"
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques25"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[24]}
                                userAnswerQN={UserData.ques25}
                                contentsObj={{
                                    Title: "Clare might also consider doing another experiment involving",
                                    AData: "other types of food supplement.",
                                    BData: "different genetic strains of mice.",
                                    CData: "varying amounts of exercise."
                                }}
                            />
                        </div>
                        <div className="Q-articles text-justify mt-4 font-bold">
                            <h5> Questions 27 and 30</h5>
                            Complete the flowchart below.<br /> <br />
                            Choose FIVE answers from the box and write the correct letter, A–H, next to Questions 26-30.<br /> <br />
                        </div>
                        <div className="p-4 border-2 border-gray-300 rounded-lg w-[50%]">
                            <p><strong>A</strong> size</p>
                            <p><strong>B</strong> escape</p>
                            <p><strong>C</strong> age</p>
                            <p><strong>D</strong> water</p>
                            <p><strong>E</strong> cereal</p>
                            <p><strong>F</strong> calculations</p>
                            <p><strong>G</strong> changes</p>
                            <p><strong>H</strong> colour</p>
                        </div>

                        <div className='flex gap-2'>Choose mice which are all the same
                            <span className='Numbers'>26</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques26"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[25]}
                                userAnswerQN={UserData.ques26}
                            />
                        </div>

                        <p className="text-4xl">↓</p>

                        <div className='flex gap-2'>Divide the mice into two groups, each with a different
                            <span className='Numbers'>27</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques27"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[26]}
                                userAnswerQN={UserData.ques27}
                            />
                        </div>

                        <p className="text-4xl">↓</p>

                        <p>Put each group in a separate cage.</p>

                        <p>Feed group A commercial mouse food.</p>

                        <div className='flex gap-2'>Feed group B the same, but also sugar contained in
                            <span className='Numbers'>28</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques28"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[27]}
                                userAnswerQN={UserData.ques28}
                            />
                        </div>

                        <p className="text-4xl">↓</p>

                        <p>Take measurements using an electronic scale.</p>

                        <div className='flex gap-2'>Place them in a weighing chamber to prevent
                            <span className='Numbers'>29</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques29"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[28]}
                                userAnswerQN={UserData.ques29}
                            />
                        </div>

                        <p className="text-4xl">↓</p>

                        <div className='flex gap-2'>Do all necessary
                            <span className='Numbers'>30</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques30"
                                TestName={"Cambridge-19-Test3"}
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test3-part4.m4a") }}
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
                        <h5>Questions 31–40</h5><br />
                        Complete the notes below.<br />
                        Write ONE WORD ONLY for each answer.<br />
                        <h5 className='text-center mt-2 text-inherit'>Microplastics</h5><br /><br />
                    </div>

                    <div className="Q-articles p-2">
                        <h5>Where microplastics come from</h5><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <i className='font-bold'>● fibres from some</i>  <span className='Numbers'>31</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques31"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[30]}
                                userAnswerQN={UserData.ques31}
                            />
                            <p>during washing</p>
                        </div>

                        <i className='font-bold'>● the breakdown of large pieces of plastic</i><br />
                        <i className='font-bold'>● waste from industry</i><br />
                        <i className='font-bold'>● the action of vehicle tyres on roads</i><br />
                    </div>

                    <div className="Q-question">
                        <h5 className='text-start mt-2 text-inherit'>Effects of microplastics</h5><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <i className='font-bold'>● They cause injuries to the</i> <span className='Numbers'>32</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques32"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[31]}
                                userAnswerQN={UserData.ques32}
                            />
                            <p>of wildlife and affect their digestive systems.</p>
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <i className='font-bold'>● They enter the food chain, e.g., in bottled and tap water,</i> <span className='Numbers'>33</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques33"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[32]}
                                userAnswerQN={UserData.ques33}
                            />
                            <p>and seafood.</p>
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <i className='font-bold'>● They may not affect human health, but they are already banned in skin cleaning products and</i>   <span className='Numbers'>34</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques34"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[33]}
                                userAnswerQN={UserData.ques34}
                            />
                            <p>in some countries.</p>
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <i className='font-bold'>● Microplastics enter the soil through the air, rain and</i> <span className='Numbers'>35</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques35"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[34]}
                                userAnswerQN={UserData.ques35}
                            />
                            <p>.</p>
                        </div>
                    </div>

                    <div className="Q-articles p-2">
                        <h5>Microplastics in the soil – a study by Anglia Ruskin University</h5><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <i className='font-bold'>● Earthworms are important because they add</i> <span className='Numbers'>36</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques36"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[35]}
                                userAnswerQN={UserData.ques36}
                            />
                            <p>to the soil.</p>
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <i className='font-bold'>● The study aimed to find whether microplastics in earthworms affect the</i> <span className='Numbers'>37</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques37"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[36]}
                                userAnswerQN={UserData.ques37}
                            />
                            <p>of plants.</p>
                        </div>

                        <i className='font-bold'>● The study found that microplastics caused:</i><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <i className='font-bold'>– loss in earthworms</i>  <span className='Numbers'>38</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques38"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[37]}
                                userAnswerQN={UserData.ques38}
                            />
                            <p>loss in earthworms</p>
                        </div>

                        <i className='font-bold'>– fewer seeds to germinate</i><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <i className='font-bold'>– a rise in the level of</i> <span className='Numbers'>39</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques39"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[38]}
                                userAnswerQN={UserData.ques39}
                            />
                            <p>in the soil.</p>
                        </div>

                        <i className='font-bold'>The study concluded:</i><br />
                        <i className='font-bold'>– soil should be seen as an important natural process.</i><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <i className='font-bold'>– changes to soil damage both ecosystems and</i>  <span className='Numbers'>40</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques40"
                                TestName={"Cambridge-19-Test3"}
                                AnswerData={LAllAnswersData[39]}
                                userAnswerQN={UserData.ques40}
                            />
                            <p>.</p>
                        </div>
                    </div>
                </div>







            </div>






        </section >
    )
}



export default ListeningPage
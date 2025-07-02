"use client";
import React, { useState } from 'react'
import "../../../Styles/ListeningPage.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
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
        ["receptionist", "Receptionist"],
        ["medical", "Medical"],
        ["Chastons", "chastons"],
        ["appointments", "Appointments"],
        ["database", "Database"],
        ["experience", "Experience"],
        ["confident", "Confident"],
        ["temporary", "Temporary"],
        ["1.15", "One fifteen"],
        ["parking", "Parking"],
        ["B"], ["A"], ["A"], ["C"], ["F"], ["G"], ["E"], ["A"], ["C"], ["B"],
        ["B"], ["A"], ["D"], ["A"], ["C"], ["G"], ["F"], ["A"], ["B"], ["C"],
        ["plot", "Plot"],
        ["poverty", "Poverty"],
        ["Europe", "europe"],
        ["poetry", "Poetry"],
        ["drawing", "Drawing"],
        ["furniture", "Furniture"],
        ["lamps", "Lamps"],
        ["harbor", "Harbor"],
        ["children", "Children"],
        ["relatives", "Relatives"]
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
                        src="https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test4-part1.mp3?_=1" />
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test4-part1.mp3?_=1") }}
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
                        Questions 1-10 <br />
                        Complete the notes below. <br />
                        Write ONE WORD AND/OR A NUMBER for each answer. <br />
                        <h5 className='text-center mt-2 text-inherit'>Job details from employment agency</h5> <br /> <br />
                    </div>
                    <div className="Q-question">
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●Role</label>
                            <span className='Numbers'>1</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques1"
                                TestName={"Cambridge-18-Test4"}
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
                            <label htmlFor="Name">Location     Fordham</label>
                            <span className='Numbers'>2</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques2"
                                TestName={"Cambridge-test-3"}
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
                            <p> Centre</p>
                            <label htmlFor="Name"> Road, Fordham</label>
                            <span className='Numbers'>3</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques3"
                                TestName={"Cambridge-18-Test4"}
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
                        </div><br /> <br />

                        <h5>Work involves <br /> <br />●   dealing with enquiries</h5>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   making </label>
                            <span className='Numbers'>4</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques4"
                                TestName={"Cambridge-18-Test4"}
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
                            <p>and reorganising them</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   maintaining the internal </label>
                            <span className='Numbers'>5</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques5"
                                TestName={"Cambridge-18-Test4"}
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
                            <p> general administration</p>
                        </div> <br /> <br />
                        <h5>Requirements</h5>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>6</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques6"
                                TestName={"Cambridge-18-Test4"}
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
                            <p>(essential)</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   a calm and</label>
                            <span className='Numbers'>7</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques7"
                                TestName={"Cambridge-18-Test4"}
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
                            <p>manner <br />
                                ●   good IT </p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   a </label>
                            <span className='Numbers'>8</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques8"
                                TestName={"Cambridge-18-Test4"}
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
                            <p>job – further opportunities may be available</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   hours: 7.45 a.m. to </label>
                            <span className='Numbers'>9</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques9"
                                TestName={"Cambridge-18-Test4"}
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
                            <p>p.m. Monday to Friday</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ● </label>
                            <span className='Numbers'>10</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques10"
                                TestName={"Cambridge-18-Test4"}
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
                            <p>is available onsite</p>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test4-part2.mp3?_=2") }}
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
                        Questions 11 and 14<br /><br />
                        Choose the correct letter, A, B or C.<br /> <br />
                    </div>
                    <div className="Q-question">

                        <div className='mb-3 mt-2'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques11"
                                TestName="Cambridge-18-Test4"
                                AnswerData={LAllAnswersData[10]}
                                userAnswerQN={UserData.ques11}
                                contentsObj={{
                                    Title: "The museum building was originally",
                                    AData: "A factory.",
                                    BData: "A private home.",
                                    CData: "A hall of residence."
                                }}
                            />

                        </div>
                        <div className='mb-3 mt-2'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques12"
                                TestName="Cambridge-18-Test4"
                                AnswerData={LAllAnswersData[11]}
                                userAnswerQN={UserData.ques12}
                                contentsObj={{
                                    Title: "The university uses part of the museum building as",
                                    AData: "Teaching rooms.",
                                    BData: "A research library.",
                                    CData: "Administration offices."
                                }}
                            />

                        </div>

                        <div className='mb-3 mt-2'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques13"
                                TestName="Cambridge-18-Test4"
                                AnswerData={LAllAnswersData[12]}
                                userAnswerQN={UserData.ques13}
                                contentsObj={{
                                    Title: "What does the guide say about the entrance fee?",
                                    AData: "Visitors decide whether or not they wish to pay.",
                                    BData: "Only children and students receive a discount.",
                                    CData: "The museum charges extra for special exhibitions."
                                }}
                            />

                        </div>
                        <div className='mb-3 mt-2'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques14"
                                TestName="Cambridge-18-Test4"
                                AnswerData={LAllAnswersData[13]}
                                userAnswerQN={UserData.ques14}
                                contentsObj={{
                                    Title: "What are visitors advised to leave in the cloakroom?",
                                    AData: "cameras",
                                    BData: "coats.",
                                    CData: "bags"
                                }}
                            />

                        </div> <br /> <br />

                        <div className="Q-articles">
                            <h5>Questions 15-20</h5> <br />
                            What information does the speaker give about each of the following areas of the museum?<br /><br />
                            Choose SIX answers from the box and write the correct letter, A-H, next to Questions 15-20.<br /><br />
                            <h5>Information</h5>
                            <i className='font-bold p-3 mt-2 mb-2'>
                                A   Parents must supervise their children.<br /><br />

                                B   There are new things to see.<br /><br />

                                C   It is closed today.<br /><br />

                                D   This is only for school groups.<br /><br />

                                E   There is a quiz for visitors.<br /><br />

                                F   It features something created by students.<br /><br />

                                G   An expert is here today.<br /><br />

                                H   There is a one-way system.<br /><br />
                            </i>
                            <h5>Areas of museum</h5>
                        </div> <br />

                        <div className="Q-questions">
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>15</span>
                                <label htmlFor="Name"> Four Seasons</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques15"
                                    TestName={"Cambridge-18-Test4"}
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
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>16</span>
                                <label htmlFor="Name"> Farmhouse Kitchen </label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques16"
                                    TestName={"Cambridge-18-Test4"}
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
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>17</span>
                                <label htmlFor="Name">A Year on the Farm</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques17"
                                    TestName={"Cambridge-18-Test4"}
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
                                <label htmlFor="Name"> Wagon Walk </label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques18"
                                    TestName={"Cambridge-18-Test4"}
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
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>19</span>
                                <label htmlFor="Name">Bees are Magic</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques19"
                                    TestName={"Cambridge-18-Test4"}
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
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>20</span>
                                <label htmlFor="Name"> The Pond </label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques20"
                                    TestName={"Cambridge-18-Test4"}
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test4-part3.mp3?_=3") }}
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
                        Questions 21-22<br />
                        Which TWO educational skills were shown in the video of children doing origami?<br /> <br />
                    </div>
                    <div className="Q-question">
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques21"
                                TestName="Cambridge-18-Test4"
                                AnswerData={LAllAnswersData[20]}
                                userAnswerQN={UserData.ques21}
                                contentsObj={{
                                    Title: "",
                                    AData: "solving problems",
                                    BData: "following instructions",
                                    CData: "working cooperatively"
                                }}
                            />

                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques22"
                                TestName="Cambridge-18-Test4"
                                AnswerData={LAllAnswersData[21]}
                                userAnswerQN={UserData.ques22}
                                contentsObj={{
                                    Title: "",
                                    AData: "learning through play",
                                    BData: "developing hand-eye coordination",
                                    CData: "the contradictions in them"
                                }}
                            />

                        </div>

                        <div className="Q-articles">
                            <h5>
                                Questions 23-27<br />
                                Which comment do the students make about each of the following children in the video? <br /><br />
                                Choose FIVE answers from the box and write the correct letter, A-G, next to Questions 23-27</h5> <br /><br />
                            <h5>Comments</h5>
                            <i className='font-bold p-3 mt-2 mb-2'>
                                A   demonstrated independence <br /><br />
                                B   asked for teacher support <br /><br />
                                C   developed a competitive attitude <br /><br />
                                D   seemed to find the activity calming <br /><br />
                                E   seemed pleased with the results <br /><br />
                                F   seemed confused <br /><br />
                                G   seemed to find the activity easy <br /><br />
                            </i>
                            <h5>children</h5>
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>23</span>
                            <label htmlFor="Name"> Sid    </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques23"
                                TestName={"Cambridge-18-Test4"}
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
                        </div><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>24</span>
                            <label htmlFor="Name"> Jack   </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques24"
                                TestName={"Cambridge-18-Test4"}
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
                        </div><br />

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>25</span>
                            <label htmlFor="Name">Naomi    </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques25"
                                TestName={"Cambridge-18-Test4"}
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
                        </div><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>26</span>
                            <label htmlFor="Name"> Anya   </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques26"
                                TestName={"Cambridge-18-Test4"}
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
                        </div><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>27</span>
                            <label htmlFor="Name">Zara   </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques27"
                                TestName={"Cambridge-18-Test4"}
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
                        </div><br />

                        <div className="Q-articles">
                            <h5>Questions 28-30</h5> <br />
                            Choose the correct letter, A, B or C.<br />
                        </div> <br /> <br />
                        <div className="Q-question">
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques28"
                                    TestName="Cambridge-18-Test4"
                                    AnswerData={LAllAnswersData[27]}
                                    userAnswerQN={UserData.ques28}
                                    contentsObj={{
                                        Title: "Before starting an origami activity in class, the students think it is important for the teacher to",
                                        AData: "make models that demonstrate the different stages",
                                        BData: "check children understand the terminology involved.",
                                        CData: "tell children not to worry if they find the activity difficult."
                                    }}
                                />

                            </div>
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques29"
                                    TestName="Cambridge-18-Test4"
                                    AnswerData={LAllAnswersData[28]}
                                    userAnswerQN={UserData.ques29}
                                    contentsObj={{
                                        Title: "The students agree that some teachers might be unwilling to use origami in class because",
                                        AData: "they may not think that crafts are important.",
                                        BData: "they may not have the necessary skills.",
                                        CData: "they may worry that it will take up too much time."
                                    }}
                                />

                            </div>
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques30"
                                    TestName="Cambridge-18-Test4"
                                    AnswerData={LAllAnswersData[29]}
                                    userAnswerQN={UserData.ques30}
                                    contentsObj={{
                                        Title: "Why do the students decide to use origami in their maths teaching practice?",
                                        AData: "to correct a particular misunderstanding",
                                        BData: "to set a challenge",
                                        CData: "to introduce a new concept"
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test4-part4.mp3?_=4") }}
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
                        <h5 className='text-center mt-2 mb-2 text-inherit'>Victor Hugo</h5> <br /> <br />
                    </div>
                    <h5>His novel, Les Misérables<br />
                        ●   It has been adapted for theatre and cinema.</h5> <br />

                    <div className="Q-question">
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   We know more about its overall</label>
                            <span className='Numbers'>31</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques31"
                                TestName={"Cambridge-18-Test4"}
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
                            <p>than about its author.</p>
                        </div><br />
                        <h5 className='text-start mt-2 text-inherit'>His early career</h5> <br />
                        <i className='mt-2 mb-2'>●   In Paris, his career was successful and he led the Romantic movement.</i>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   He spoke publicly about social issues, such as</label>
                            <span className='Numbers'>32</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques32"
                                TestName={"Cambridge-18-Test4"}
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
                            <p> and education.</p>
                        </div>
                        <i className='mt-2 mb-2'>●   Napoleon III disliked his views and exiled him.</i>
                        <h5>His exile from France</h5> <br />
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   Victor Hugo had to live elsewhere in </label>
                            <span className='Numbers'>33</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques33"
                                TestName={"Cambridge-18-Test4"}
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
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   He used his income from the sale of some</label>
                            <span className='Numbers'>34</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques34"
                                TestName={"Cambridge-18-Test4"}
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
                            <p>he had written to buy a house on Guernsey.</p>
                        </div><br /> <br />

                        <h5 className='mt-3 mb-3'>His house on Guernsey <br />●   Victor Hugo lived in this house until the end of the Empire in France.</h5>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   The ground floor contains portraits, </label>
                            <span className='Numbers'>35</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques35"
                                TestName={"Cambridge-18-Test4"}
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
                            <p>and tapestries that he valued.</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   He bought cheap</label>
                            <span className='Numbers'>36</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques36"
                                TestName={"Cambridge-18-Test4"}
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
                            <p>made of wood and turned this into beautiful wall carvings.</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   The first floor consists of furnished areas with wallpaper and </label>
                            <span className='Numbers'>37</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques37"
                                TestName={"Cambridge-18-Test4"}
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
                            <p>that have a Chinese design.</p>
                        </div><br />
                        <i>●   The library still contains many of his favourite books.</i> <br />
                        <div className="question flex flex-wrap gap-2">
                            <label htmlFor="Name">●   He wrote in a room at the top of the house that had a view of the</label>
                            <span className='Numbers'>38</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques38"
                                TestName={"Cambridge-18-Test4"}
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
                        <h5>Solutions</h5>
                        <i>●   Common standards should be agreed on for the presentation of information.</i>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   He entertained other writers as well as poor</label>
                            <span className='Numbers'>39</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques39"
                                TestName={"Cambridge-18-Test4"}
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
                            <p> in his house.</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   Victor Hugo’s </label>
                            <span className='Numbers'>40</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques40"
                                TestName={"Cambridge-18-Test4"}
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
                            <p>gave ownership of the house to the city of Paris in 1927.</p>
                        </div>
                    </div>
                </div>


            </div>


        </section >
    )
}



export default ListeningPage
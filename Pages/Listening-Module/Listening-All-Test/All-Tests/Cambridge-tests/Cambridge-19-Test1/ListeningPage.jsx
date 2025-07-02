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
import TestImage1 from "@assets/images/listening-images/19-IELTS-Listening-Test-1.jpg"
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
        ["69", "sixty-nine"], ["stream"], ["data"], ["map"], ["visitors"], ["sounds"], ["freedom"], ["skills"], ["4.95"], ["leaders"],

        // Part 2
        ["B"], ["A"], ["B"], ["C"], ["A"], ["G"], ["C"], ["B"], ["D"], ["A"],

        // Part 3
        ["B"], ["D"], ["A"], ["B"], ["D"], ["G"], ["C"], ["B"], ["F"], ["H"],

        // Part 4
        ["walls"], ["son"], ["fuel"], ["oxygen"], ["rectangular"], ["lamps"], ["family"], ["winter"], ["soil"], ["rain"]
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
                        src="https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test1-part1.m4a" />
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
                        <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice Cam 19 Test 1</h5>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-1</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test1-part1.m4a") }}
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
                        <h5>PART 1</h5>
                        <br />
                        Questions 1–10
                        <br />
                        Complete the notes below.
                        <br />
                        Write ONE WORD AND/OR A NUMBER for each answer.
                        <br />
                        <h5 className="text-center mt-2 text-inherit">Hinchingbrooke Country Park</h5>
                        <br />
                        <div className="Q-question">
                            <h5 className="text-start mt-2 text-inherit">The park</h5>
                            <div className="question flex mt-2 flex-wrap gap-2">
                                <label htmlFor="Area">Area:</label>
                                <span className="Numbers">1</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques1"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[0]}
                                    userAnswerQN={UserData.ques1}
                                />
                                <span>hectares</span>
                            </div>

                            <h5 className="text-start mt-2 text-inherit">Habitats</h5>
                            <div className="question flex mt-2 flex-wrap gap-2">
                                <span>Wetland, grassland, and woodland</span>
                            </div>

                            <h5 className="text-start mt-2 text-inherit">Wetland</h5>
                            <div className="question flex mt-2 flex-wrap gap-2">
                                <label htmlFor="Wetland">Includes lakes, ponds, and a</label>
                                <span className="Numbers">2</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques2"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[1]}
                                    userAnswerQN={UserData.ques2}
                                />
                            </div>

                            <h5 className="text-start mt-2 text-inherit">Subjects studied in educational visits include</h5>
                            <div className="question flex mt-2 flex-wrap gap-2">
                                <label htmlFor="Science">Science: Children look at</label>
                                <span className="Numbers">3</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques3"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[2]}
                                    userAnswerQN={UserData.ques3}
                                />
                                <span>about plants, etc.</span>
                            </div>
                            <div className="question flex mt-2 flex-wrap gap-2">
                                <label htmlFor="Geography">Geography: includes learning to use a</label>
                                <span className="Numbers">4</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques4"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[3]}
                                    userAnswerQN={UserData.ques4}
                                />
                                <span>and compass</span>
                            </div>
                            <div className="question flex mt-2 flex-wrap gap-2">
                                <label htmlFor="History">History: changes in land use</label>
                            </div>

                            <div className="question flex mt-2 flex-wrap gap-2">
                                <label htmlFor="Leisure">Leisure and tourism: mostly concentrates on the park’s</label>
                                <span className="Numbers">5</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques5"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[4]}
                                    userAnswerQN={UserData.ques5}
                                />
                            </div>

                            <div className="question flex mt-2 flex-wrap gap-2">
                                <label htmlFor="Music">Music: Children make</label>
                                <span className="Numbers">6</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques6"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[5]}
                                    userAnswerQN={UserData.ques6}
                                />
                                <span>with natural materials, and experiment with rhythm and speed.</span>
                            </div>

                            <h5 className="text-start mt-2 text-inherit">Benefits of outdoor educational visits</h5>
                            <div className="question flex mt-2 flex-wrap gap-2">
                                <label htmlFor="Feeling">They give children a feeling of</label>
                                <span className="Numbers">7</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques7"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[6]}
                                    userAnswerQN={UserData.ques7}
                                />
                                <span>that they may not have elsewhere.</span>
                            </div>
                            <div className="question flex mt-2 flex-wrap gap-2">
                                <label htmlFor="Skills">Children learn new</label>
                                <span className="Numbers">8</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques8"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[7]}
                                    userAnswerQN={UserData.ques8}
                                />
                                <span>and gain self-confidence.</span>
                            </div>

                            <h5 className="text-start mt-2 text-inherit">Practical issues</h5>
                            <div className="question flex mt-2 flex-wrap gap-2">
                                <label htmlFor="Cost">Cost per child:</label>
                                <span className="Numbers">9</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques9"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[8]}
                                    userAnswerQN={UserData.ques9}
                                />
                                <span>£</span>
                            </div>
                            <div className="question flex mt-2 flex-wrap gap-2">
                                <label htmlFor="Adults">Adults, such as</label>
                                <span className="Numbers">10</span>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques10"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[9]}
                                    userAnswerQN={UserData.ques10}
                                />
                                <span>free</span>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test1-part2.m4a") }}
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
                        Questions 11-13 <br />
                        Choose the correct letter, A, B or C. <br /> <br />
                    </div>
                    <h5 className='text-center mt-2 mb-2 text-inherit'>Stanthorpe Twinning Association</h5> <br />
                    <div className="Q-question">
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques11"
                                TestName={"Cambridge-19-Test1"}
                                AnswerData={LAllAnswersData[10]}
                                userAnswerQN={UserData.ques11}
                                contentsObj={{
                                    Title: "During the visit to Malatte, in France, members especially enjoyed",
                                    AData: "going to a theme park.",
                                    BData: "experiencing a river trip.",
                                    CData: "visiting a cheese factory."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques12"
                                TestName={"Cambridge-19-Test1"}
                                AnswerData={LAllAnswersData[11]}
                                userAnswerQN={UserData.ques12}
                                contentsObj={{
                                    Title: "What will happen in Stanthorpe to mark the 25th anniversary of the Twinning Association?",
                                    AData: "A tree will be planted.",
                                    BData: "A garden seat will be bought.",
                                    CData: "A footbridge will be built."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques13"
                                TestName={"Cambridge-19-Test1"}
                                AnswerData={LAllAnswersData[12]}
                                userAnswerQN={UserData.ques13}
                                contentsObj={{
                                    Title: "Which event raised most funds this year?",
                                    AData: "the film show",
                                    BData: "the pancake evening",
                                    CData: "the cookery demonstration"
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques14"
                                TestName={"Cambridge-19-Test1"}
                                AnswerData={LAllAnswersData[13]}
                                userAnswerQN={UserData.ques14}
                                contentsObj={{
                                    Title: "For the first evening with the French visitors host families are advised to",
                                    AData: "take them for a walk round the town.",
                                    BData: "go to a local restaurant.",
                                    CData: "have a meal at home."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques15"
                                TestName={"Cambridge-19-Test1"}
                                AnswerData={LAllAnswersData[14]}
                                userAnswerQN={UserData.ques15}
                                contentsObj={{
                                    Title: "On Saturday evening there will be the chance to",
                                    AData: "listen to a concert.",
                                    BData: "watch a match.",
                                    CData: "take part in a competition."
                                }}
                            />
                        </div>



                        <div className="Questions">
                            <div className="Q-articles text-justify mt-4 mb-3">
                                <h5> Questions 16-20</h5> <br />
                                Label the map below.<br /><br />
                                Write the correct letter, A–H, next to Questions 16–20.<br /><br />
                            </div>
                            <div className="w-[90%] grid justify-center">
                                <Image src={TestImage1} alt='test-19-image-1' className='w-full' />
                            </div>


                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>16</span>
                                <label htmlFor="Name">  Farm shop  </label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques16"
                                    TestName={"Cambridge-19-Test1"}
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
                                <label htmlFor="Name">Disabled entry</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques17"
                                    TestName={"Cambridge-19-Test1"}
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
                                <label htmlFor="Name"> Adventure playground</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques18"
                                    TestName={"Cambridge-19-Test1"}
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
                                <label htmlFor="Name"> Kitchen gardens</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques19"
                                    TestName={"Cambridge-19-Test1"}
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
                                <label htmlFor="Name">The Temple of the Four Winds  </label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques20"
                                    TestName={"Cambridge-19-Test1"}
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test1-part3.m4a") }}
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
                        <h5 className='font-bold'>PART 3 </h5> <br />
                        Questions 21-22<br />
                        Which TWO things did Colin find most satisfying about his bread reuse project?.<br /> <br />
                    </div>
                    <div className='mb-3'>
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques21"
                                TestName={"Cambridge-19-Test1"}
                                AnswerData={LAllAnswersData[20]}
                                userAnswerQN={UserData.ques21}
                                contentsObj={{
                                    Title: "",
                                    AData: "receiving support from local restaurants",
                                    BData: " finding a good way to prevent waste",
                                    CData: "overcoming problems in a basis process"
                                }}
                            />

                        </div>
                        <Select_input
                            handleValueChange={handleValueChange}
                            QNum="ques22"
                            TestName={"Cambridge-19-Test1"}
                            AnswerData={LAllAnswersData[21]}
                            userAnswerQN={UserData.ques22}
                            contentsObj={{
                                Title: "",
                                AData: " experimenting with designs and colours",
                                BData: " learning how to apply 3-D printing",
                                CData: "what it was built with"
                            }}
                        />


                    </div>

                    <div className="Q-articles font-bold">
                        Questions 23-24<br />
                        Which TWO ways do the students agree that touch-sensitive sensors for food labels could be developed in future?<br /> <br />
                    </div>
                    <div className='mb-3'>
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques23"
                                TestName={"Cambridge-19-Test1"}
                                AnswerData={LAllAnswersData[22]}
                                userAnswerQN={UserData.ques23}
                                contentsObj={{
                                    Title: "",
                                    AData: " for use on medical products",
                                    BData: "to show that food is no longer fit to eat",
                                    CData: "for use with drinks as well as foods"
                                }}
                            />

                        </div>
                        <Select_input
                            handleValueChange={handleValueChange}
                            QNum="ques24"
                            TestName={"Cambridge-19-Test1"}
                            AnswerData={LAllAnswersData[23]}
                            userAnswerQN={UserData.ques24}
                            contentsObj={{
                                Title: "",
                                AData: " to provide applications for blind people",
                                BData: "to indicate the weight of certain foods",
                                CData: "what it was built with"
                            }}
                        />


                    </div>
                    <div className="Q-articles">
                        <h5 className='font-bold'>Questions 25–30 </h5> <br />
                        What is the students’ opinion about each of the following food trends?<br /> <br />
                        Choose SIX answers from the box and write the correct answer, A–H, next to Questions 25–30.<br /> <br />
                        <div className='grid justify-center p-[20px] border-2 border-gray-600'>
                            <h4 className="text-center mb-2">Opinions</h4>
                            <div >A - This is only relevant to young people.</div>
                            <div >B - This may have disappointing results.</div>
                            <div >C - This already seems to be widespread.</div>
                            <div >D - Retailers should do more to encourage this.</div>
                            <div >E - More financial support is needed for this.</div>
                            <div >F - Most people know little about this.</div>
                            <div >G - There should be stricter regulations about this.</div>
                            <div >H - This could be dangerous.</div>
                        </div>
                        <div className="space-y-4">
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className="Numbers">25</span>
                                <label htmlFor="ques25">Use of local products</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques25"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[24]}
                                    userAnswerQN={UserData.ques25}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className="Numbers">26</span>
                                <label htmlFor="ques26">Reduction in unnecessary packaging</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques26"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[25]}
                                    userAnswerQN={UserData.ques26}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className="Numbers">27</span>
                                <label htmlFor="ques27">Gluten-free and lactose-free food</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques27"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[26]}
                                    userAnswerQN={UserData.ques27}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className="Numbers">28</span>
                                <label htmlFor="ques28">Use of branded products related to celebrity chefs</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques28"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[27]}
                                    userAnswerQN={UserData.ques28}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className="Numbers">29</span>
                                <label htmlFor="ques29">Development of ‘ghost kitchens’ for takeaway food</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques29"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[28]}
                                    userAnswerQN={UserData.ques29}
                                />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className="Numbers">30</span>
                                <label htmlFor="ques30">Use of mushrooms for common health concerns</label>
                                <Text_inputs
                                    handleValueChange={handleValueChange}
                                    QNum="ques30"
                                    TestName={"Cambridge-19-Test1"}
                                    AnswerData={LAllAnswersData[29]}
                                    userAnswerQN={UserData.ques30}
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test1-part4.m4a") }}
                                    className='p-2 bg-red-300 rounded w-[120px] hover:bg-blue-300'>Listen</button>
                            </div>
                            <div className="flex mt-[27px]">
                                <button onClick={() => { setForNotePad4(!forNotePad4) }}
                                    className='p-2 bg-blue-300 rounded w-[120px] hover:bg-red-300'>Show NotePad</button>
                            </div>
                        </div>
                    </div>
                </>

                {/* 31-40 Questions */}
                <div className="Questions">
                    <div className="Q-articles">
                        <h5>PART 4 </h5>
                        <h6 className="text-2xl font-bold mb-4">Questions 31–40</h6>
                        <p className="mb-2">Complete the notes below.</p>
                        <p className="mb-4 font-semibold">Write ONE WORD ONLY for each answer.</p>

                    </div>
                    <div className="p-4 max-w-3xl mx-auto  ">
                        <div className='text-center font-bold text-2xl mb-2'>Céide Fields</div>
                        <div className="Q-articles p-2">
                            <h5>Discovery</h5> <br />
                            <div>● In the 1930s, a local teacher realised that stones beneath the bog surface were once</div>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>31</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques31" TestName={"Cambridge-19-Test1"} AnswerData={LAllAnswersData[30]} userAnswerQN={UserData.ques31} />
                            </div>
                            <i className='font-bold'>● His </i>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>32</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques32" TestName={"Cambridge-19-Test1"} AnswerData={LAllAnswersData[31]} userAnswerQN={UserData.ques32} />
                                <label htmlFor="Name">  became an archaeologist and undertook an investigation of the site:</label>

                            </div>
                            <i className='font-bold'>● a traditional method used by local people to dig for </i>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>33</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques33" TestName={"Cambridge-19-Test1"} AnswerData={LAllAnswersData[32]} userAnswerQN={UserData.ques33} />
                                <label htmlFor="Name"> was used to identify where stones were located</label>

                            </div>
                            <i className='font-bold'>● carbon dating later proved the site was Neolithic.</i>
                            <i className='font-bold'>● Items are well preserved in the bog because of a lack of </i>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>34</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques34" TestName={"Cambridge-19-Test1"} AnswerData={LAllAnswersData[33]} userAnswerQN={UserData.ques34} />
                            </div>
                        </div>

                        <div className="Q-articles p-2">
                            <h5>Neolithic farmers</h5> <br />
                            <i className='font-bold'>● Houses were </i>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>35</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques35" TestName={"Cambridge-19-Test1"} AnswerData={LAllAnswersData[34]} userAnswerQN={UserData.ques35} />
                                <label htmlFor="Name"> in shape and had a hole in the roof.</label>

                            </div>
                            <i className='font-bold'>● Neolithic innovations include:</i>
                            <i className='font-bold'>● cooking indoors</i>
                            <i className='font-bold'>● pots used for storage and to make </i>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>36</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques36" TestName={"Cambridge-19-Test1"} AnswerData={LAllAnswersData[35]} userAnswerQN={UserData.ques36} />
                            </div>
                            <i className='font-bold'>● Each field at Céide was large enough to support a big </i>
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <span className='Numbers'>37</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques37" TestName={"Cambridge-19-Test1"} AnswerData={LAllAnswersData[36]} userAnswerQN={UserData.ques37} />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <i className='font-bold'>● The fields were probably used to restrict the grazing of animals – no evidence of structures to house them during </i>
                                <span className='Numbers'>38</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques38" TestName={"Cambridge-19-Test1"} AnswerData={LAllAnswersData[37]} userAnswerQN={UserData.ques38} />
                            </div>
                        </div>

                        <div className="Q-articles p-2">
                            <h5>Reasons for the decline in farming</h5> <br />
                            <div className="question mt-2 flex flex-wrap gap-2">
                                <i className='font-bold'>● a decline in </i>
                                <span className='Numbers'>39</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques39" TestName={"Cambridge-19-Test1"} AnswerData={LAllAnswersData[38]} userAnswerQN={UserData.ques39} />
                            </div>

                            <div className="question mt-2 flex flex-wrap gap-2">
                                <i className='font-bold'>● an increase in </i>
                                <span className='Numbers'>40</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques40" TestName={"Cambridge-19-Test1"} AnswerData={LAllAnswersData[39]} userAnswerQN={UserData.ques40} />
                            </div>
                        </div>
                    </div>

                </div>











            </div>






        </section >
    )
}



export default ListeningPage
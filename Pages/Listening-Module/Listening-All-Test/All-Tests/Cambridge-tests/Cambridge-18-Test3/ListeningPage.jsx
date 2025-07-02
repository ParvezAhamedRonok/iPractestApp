"use client";
import React, { useState } from 'react'
import "../../../Styles/ListeningPage.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillRewindCircleFill } from "react-icons/bs";
import { BsFillFastForwardCircleFill } from "react-icons/bs";
import img1 from "@assets/images/LTest2Img1.jpg"
import { useStateContext } from "@/contexts/ContextProvider";
import Image from 'next/image';
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
        ["Marrowfield", "marrowfield"],
        ["relative", "Relative"],
        ["socialize", "Socialize"],
        ["full", "Full"],
        ["Domestic life", "domestic life"],
        ["clouds", "Clouds"],
        ["timing", "Timing"],
        ["animal magic", "Animal magic"],
        ["movement", "Movement"],
        ["dark", "Dark"],
        ["B"], ["B"], ["B"], ["B"], ["C"], ["B"], ["B"], ["C"], ["A"], ["A"],
        ["A"], ["B"], ["B"], ["B"], ["G"], ["E"], ["B"], ["C"], ["F"], ["A"],
        ["technical", "Technical"],
        ["cheep", "Cheep"],
        ["thousands", "Thousands"],
        ["identification", "Identification"],
        ["tracking", "Tracking"],
        ["military", "Military"],
        ["location", "Location"],
        ["prediction", "Prediction"],
        ["database", "Database"],
        ["trust", "Trust"],
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
                        src="https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test3-part1.mp3?_=1" />
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test3-part1.mp3?_=1") }}
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
                        Questions 1-4 <br />
                        Complete the notes below. <br />
                        Write ONE WORD AND/OR A NUMBER for each answer. <br />
                        <h5 className='text-center mt-2 text-inherit'>Wayside Camera Club <br /> membership form</h5> <br /> <br />
                    </div>
                    <div className="Q-question">
                        <h5 className='text-start mt-2 text-inherit'>Name:   Dan Green <br />
                            Email address:   dan1068@market.com</h5> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●Home address:  52</label>
                            <span className='Numbers'>1</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques1"
                                TestName={"Cambridge-18-Test3"}
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
                            <p>Street, Peacetown</p>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">Heard about us:   from a </label>
                            <span className='Numbers'>2</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques2"
                                TestName={"Cambridge-18-Test3"}
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
                            <label htmlFor="Name">Reasons for joining:   to enter competitions to</label>
                            <span className='Numbers'>3</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques3"
                                TestName={"Cambridge-18-Test3"}
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
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> Type of membership:  </label>
                            <span className='Numbers'>4</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques4"
                                TestName={"Cambridge-18-Test3"}
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
                            <p>membership (£30)</p>
                        </div>

                        <div className="Q-articles">
                            <h5>Questions 50px-10</h5> <br />
                            Complete the table below.<br />
                            Write ONE WORD AND/OR A NUMBER for each answer. <br />
                            <h5 className='text-center mt-2 text-inherit'>Working at Milo’s Restaurants</h5> <br /> <br />
                        </div>
                        <div>
                            <h5 className='text-center p-3 border-1 border-black'>Photography competitions</h5>
                            <div className='grid grid-cols-3 p-3 mt-[-3px] border-1 border-black'>
                                <h5>Title of competition</h5>
                                <h5>Instructions</h5>
                                <h5>Feedback to Dan</h5>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-3 p-3 mt-[-3px] border-1 border-black'>
                            <span className='Numbers'>5</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques5"
                                TestName={"Cambridge-18-Test3"}
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
                            <i>A scene in the home</i>
                            <i>The picture’s composition was not good</i>
                        </div>
                        <div className='flex flex-wrap gap-3 p-3 mt-[-3px] border-1 border-black'>
                            <i>‘Beautiful Sunsets’</i>
                            <label htmlFor="ques6">Scene must show some</label>
                            <span className='Numbers'>6</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques6"
                                TestName={"Cambridge-18-Test3"}
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
                            <label htmlFor="ques6">The </label>
                            <span className='Numbers'>7</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques7"
                                TestName={"Cambridge-18-Test3"}
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
                            <p> was wrong.</p>

                        </div>
                        <div className='flex flex-wrap gap-3 p-3 mt-[-3px] border-1 border-black'>
                            <span className='Numbers'>8</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques8"
                                TestName={"Cambridge-18-Test3"}
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
                            <label htmlFor="ques6">Scene must show </label>
                            <span className='Numbers'>9</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques9"
                                TestName={"Cambridge-18-Test3"}
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
                            <label htmlFor="ques6">The photograph was too</label>
                            <span className='Numbers'>10</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques10"
                                TestName={"Cambridge-18-Test3"}
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test3-part2.mp3?_=2") }}
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
                        Questions 11 and 12<br /><br />
                        Which TWO warnings does Dan give about picking mushrooms?<br /> <br />
                    </div>
                    <div className="Q-question">

                        <div className='mb-3 mt-2'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques11"
                                TestName={"Cambridge-18-Test3"}
                                AnswerData={LAllAnswersData[10]}
                                userAnswerQN={UserData.ques11}
                                contentsObj={{
                                    Title: "",
                                    AData: "Don’t pick more than one variety of mushroom at a time.",
                                    BData: "Don’t pick mushrooms near busy roads.",
                                    CData: "It has good connections with the airport."
                                }}
                            />

                        </div>
                        <div className='mb-3 mt-2'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques12"
                                TestName={"Cambridge-18-Test3"}
                                AnswerData={LAllAnswersData[11]}
                                userAnswerQN={UserData.ques12}
                                contentsObj={{
                                    Title: "",
                                    AData: "Don’t eat mushrooms while picking them.",
                                    BData: "Don’t eat mushrooms given to you.",
                                    CData: "Don’t pick old mushrooms."
                                }}
                            />

                        </div>

                        <div className="Q-articles">
                            <h5>Questions 13 and 14</h5> <br />
                            Which TWO ideas about wild mushrooms does Dan say are correct?<br /> <br />
                        </div>
                        <div className='mb-3 mt-2'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques13"
                                TestName={"Cambridge-18-Test3"}
                                AnswerData={LAllAnswersData[12]}
                                userAnswerQN={UserData.ques13}
                                contentsObj={{
                                    Title: "",
                                    AData: "Mushrooms should always be peeled before eating",
                                    BData: "Mushrooms eaten by animals may be unsafe.",
                                    CData: "Cooking destroys toxins in mushrooms."
                                }}
                            />

                        </div>
                        <div className='mb-3 mt-2'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques14"
                                TestName={"Cambridge-18-Test3"}
                                AnswerData={LAllAnswersData[13]}
                                userAnswerQN={UserData.ques14}
                                contentsObj={{
                                    Title: "",
                                    AData: "the rural location",
                                    BData: "Brightly coloured mushrooms can be edible.",
                                    CData: "All poisonous mushrooms have a bad smell."
                                }}
                            />

                        </div>

                        <div className="Q-articles">
                            <h5>Questions 15-20</h5> <br />
                            Choose the correct letter, A, B or C.<br /><br />
                        </div> <br />

                        <div className="Q-question">
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques15"
                                    TestName={"Cambridge-18-Test3"}
                                    AnswerData={LAllAnswersData[14]}
                                    userAnswerQN={UserData.ques15}
                                    contentsObj={{
                                        Title: "What advice does Dan give about picking mushrooms in parks?",
                                        AData: "Choose wooded areas.",
                                        BData: "Don’t disturb wildlife.",
                                        CData: "Get there early."
                                    }}
                                />

                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques16"
                                    TestName={"Cambridge-18-Test3"}
                                    AnswerData={LAllAnswersData[15]}
                                    userAnswerQN={UserData.ques16}
                                    contentsObj={{
                                        Title: "Dan says it is a good idea for beginners to",
                                        AData: "use a mushroom app.",
                                        BData: "join a group.",
                                        CData: "take a reference book."
                                    }}
                                />

                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques17"
                                    TestName={"Cambridge-18-Test3"}
                                    AnswerData={LAllAnswersData[16]}
                                    userAnswerQN={UserData.ques17}
                                    contentsObj={{
                                        Title: "What does Dan say is important for conservation?",
                                        AData: "selecting only fully grown mushrooms",
                                        BData: "picking a limited amount of mushrooms",
                                        CData: "avoiding areas where rare mushroom species grow"
                                    }}
                                />

                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques18"
                                    TestName={"Cambridge-18-Test3"}
                                    AnswerData={LAllAnswersData[17]}
                                    userAnswerQN={UserData.ques18}
                                    contentsObj={{
                                        Title: "According to Dan, some varieties of wild mushrooms are in decline because there is",
                                        AData: "a huge demand for them from restaurants.",
                                        BData: "a lack of rain in this part of the country",
                                        CData: "a rise in building developments locally."
                                    }}
                                />

                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques19"
                                    TestName={"Cambridge-18-Test3"}
                                    AnswerData={LAllAnswersData[18]}
                                    userAnswerQN={UserData.ques19}
                                    contentsObj={{
                                        Title: "Dan says that when storing mushrooms, people should",
                                        AData: "keep them in the fridge for no more than two days.",
                                        BData: "keep them in a brown bag in a dark room.",
                                        CData: "leave them for a period after washing them."
                                    }}
                                />

                            </div>
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques20"
                                    TestName={"Cambridge-18-Test3"}
                                    AnswerData={LAllAnswersData[19]}
                                    userAnswerQN={UserData.ques20}
                                    contentsObj={{
                                        Title: "What does Dan say about trying new varieties of mushrooms?",
                                        AData: "Experiment with different recipes.",
                                        BData: "Expect some to have a strong taste.",
                                        CData: "Cook them for a long time."
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test3-part3.mp3?_=3") }}
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
                        Which TWO opinions about the Luddites do the students express?<br /> <br />
                    </div>
                    <div className="Q-question">
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques21"
                                TestName="Cambridge-18-Test3"
                                AnswerData={LAllAnswersData[20]}
                                userAnswerQN={UserData.ques21}
                                contentsObj={{
                                    Title: "",
                                    AData: "Their actions were ineffective.",
                                    BData: "They are still influential today.",
                                    CData: "They have received unfair criticism."
                                }}
                            />

                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques22"
                                TestName="Cambridge-18-Test3"
                                AnswerData={LAllAnswersData[21]}
                                userAnswerQN={UserData.ques22}
                                contentsObj={{
                                    Title: "",
                                    AData: "They were proved right.",
                                    BData: "Their attitude is understandable.",
                                    CData: "The contradictions in them"
                                }}
                            />

                        </div>

                        <div className="Q-articles">
                            <h5>
                                Questions 23-24<br />
                                Which TWO predictions about the future of work are the students doubtful about?</h5> <br /><br />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques23"
                                TestName="Cambridge-18-Test3"
                                AnswerData={LAllAnswersData[22]}
                                userAnswerQN={UserData.ques23}
                                contentsObj={{
                                    Title: "",
                                    AData: "Work will be more rewarding.",
                                    BData: "Unemployment will fall.",
                                    CData: "People will want to delay retiring."
                                }}
                            />

                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques24"
                                TestName="Cambridge-18-Test3"
                                AnswerData={LAllAnswersData[23]}
                                userAnswerQN={UserData.ques24}
                                contentsObj={{
                                    Title: "",
                                    AData: "Came to the wrong conclusion.",
                                    BData: "Working hours will be shorter.",
                                    CData: "People will change jobs more frequently."
                                }}
                            />

                        </div>






                        <div className="Q-articles">
                            <h5>Questions 25 - 30 </h5> <br />
                            What comment do the students make about each of the following jobs?<br /> <br />
                            Choose SIX answers from the box and write the correct letter, A-G, next to Questions 25-30.<br /> <br />
                            <h5>Comments</h5>
                            <i className='p-3 font-bold'>

                                A   These jobs are likely to be at risk.<br /> <br />

                                B   Their role has become more interesting in recent years.<br /> <br />

                                C   The number of people working in this sector has fallen dramatically.<br /> <br />

                                D   This job will require more qualifications.<br /> <br />

                                E   Higher disposable income has led to a huge increase in jobs.<br /> <br />

                                F   There is likely to be a significant rise in demand for this service.<br /> <br />

                                G   Both employment and productivity have risen.<br /> <br />
                            </i>
                            <h5>Jobs</h5>
                        </div> <br /> <br />

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>25</span>
                            <label htmlFor="Name"> ●   Accountants </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques25"
                                TestName={"Cambridge-18-Test3"}
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
                            <label htmlFor="Name"> ●  Hairdressers</label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques26"
                                TestName={"Cambridge-18-Test3"}
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
                            <label htmlFor="Name"> ●   Administrative staff </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques27"
                                TestName={"Cambridge-18-Test3"}
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
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>28</span>
                            <label htmlFor="Name"> ●  Agricultural workers  </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques28"
                                TestName={"Cambridge-18-Test3"}
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
                        </div><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>29</span>
                            <label htmlFor="Name"> ●    Care workers </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques29"
                                TestName={"Cambridge-18-Test3"}
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
                        </div><br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>30</span>
                            <label htmlFor="Name"> ●  Bank clerks  </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques30"
                                TestName={"Cambridge-18-Test3"}
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
                        </div><br />


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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam18-test3-part4.mp3?_=4") }}
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
                        <h5 className='text-center mt-2 text-inherit'>Space Traffic Management</h5> <br /> <br />
                    </div>
                    <h5>A Space Traffic Management system <br />
                        ●   is a concept similar to Air Traffic Control, but for satellites rather than planes.</h5> <br />

                    <div className="Q-question">
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   would aim to set up legal and </label>
                            <span className='Numbers'>31</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques31"
                                TestName={"Cambridge-18-Test3"}
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
                            <p>ways of improving safety. <br />
                                ●   does not actually exist at present.</p>
                        </div><br />
                        <h5 className='text-start mt-2 text-inherit'>Problems in developing effective Space Traffic Management</h5> <br />
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">●   Satellites are now quite</label>
                            <span className='Numbers'>32</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques32"
                                TestName={"Cambridge-18-Test3"}
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
                            <p> and therefore more widespread e.g. there are</p>
                        </div>
                        <div className="question flex mt-2 flex-wrap gap-2">
                            <label htmlFor="Name">constellations made up of</label>
                            <span className='Numbers'>33</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques33"
                                TestName={"Cambridge-18-Test3"}
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
                            <p className='text-justify'>of satellites</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   At present, satellites are not required to transmit information to help with their</label>
                            <span className='Numbers'>34</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques34"
                                TestName={"Cambridge-18-Test3"}
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
                        </div><br /> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   There are few systems for</label>
                            <span className='Numbers'>35</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques35"
                                TestName={"Cambridge-18-Test3"}
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
                            <p> satellites. <br />
                                ●   Small pieces of debris may be difficult to identify.</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   Operators may be unwilling to share details of satellites used for</label>
                            <span className='Numbers'>36</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques36"
                                TestName={"Cambridge-18-Test3"}
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
                            <p>or commercial reasons.</p>
                        </div>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   It may be hard to collect details of the object’s </label>
                            <span className='Numbers'>37</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques37"
                                TestName={"Cambridge-18-Test3"}
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
                            <p>at a given time.</p>
                        </div>
                        <div className="question flex flex-wrap gap-2">
                            <label htmlFor="Name"> ●   Scientists can only make a</label>
                            <span className='Numbers'>38</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques38"
                                TestName={"Cambridge-18-Test3"}
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
                            <p className='text-justify'> about where the satellite will go.</p>
                        </div> <br />
                        <h5>Solutions</h5>
                        <i>●   Common standards should be agreed on for the presentation of information.</i>
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   The information should be combined in one</label>
                            <span className='Numbers'>39</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques39"
                                TestName={"Cambridge-18-Test3"}
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
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <label htmlFor="Name">●   A coordinated system must be designed to create </label>
                            <span className='Numbers'>40</span>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques40"
                                TestName={"Cambridge-18-Test3"}
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
                            <p>in its users.</p>
                        </div>
                    </div>
                </div>


            </div>


        </section >
    )
}



export default ListeningPage
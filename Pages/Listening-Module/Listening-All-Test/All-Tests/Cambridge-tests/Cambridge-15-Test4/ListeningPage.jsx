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
import Image1 from "@assets/images/listening-images/cam15_4.jpg"
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
    const LAllAnswersData = [
        // Part 1
        ["journalist"], ["shopping"], ["Staunfirth"], ["return"], ["23.70"], ["online"], ["delay"], ["information"], ["platforms"], ["parking"],
        // Part 2
        ["D"], ["C"], ["G"], ["H"], ["A"], ["E"], ["A"],["A"], ["A"],["A"],
        // Part 3
        ["B"], ["A"], ["B"], ["A"], ["A"], ["A"], ["B"], ["B"], ["A"], ["C"],
        // Part 4
        ["wealth"], ["technology"], ["power"], ["textiles"], ["machines"], ["newspapers"], ["local"], ["lighting"], ["windows"], ["Advertising"]
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
                        src=" https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test4-Part1.m4a" />
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
                        <h5 className="w-[90vw] mt-[120px] sm:mt-3 sm:w-2/3 sm:text-2xl p-3 ml-[-9px] rounded text-xl">Practice Cam 15 Listening Test 04</h5>
                        <h5 className='w-[70%] mt-3 text-2xl p-3 rounded text-white bg-slate-400 '>
                            Section-1</h5>
                    </div>

                    <div className="buttons div1 mb-4 mt-3 sm:w-full w-[90vw]">
                        {forNotePad1 && (<textarea name="forNotePad" id="forNotePad"
                            style={{ backgroundColor: "#fff" }} className='w-[94vw] h-[105px] rounded-[5%] p-2 mt-3 sm:w-[88%]'></textarea>)}
                        <div className="w-full flex justify-between">
                            <div className="flex mt-[27px]">
                                <button onClick={() => { updateAudiotime("h https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test4-Part1.m4a") }}
                                    className='p-2 bg-red-300 rounded w-[120px] hover:bg-blue-300'>Listen</button>
                            </div>
                            <div className="flex mt-[27px]">
                                <button onClick={() => { setForNotePad1(!forNotePad1) }}
                                    className='p-2 bg-blue-300 rounded w-[120px] hover:bg-red-300'>Show NotePad</button>
                            </div>
                        </div>
                    </div>
                </>





                <div className="Questions">
                    <div className="Q-articles">
                        <h5>PART 1  </h5> <br />
                        Questions 1-10 <br />
                        Complete the notes below. <br />
                        Write ONE WORD AND/OR A NUMBER for each answer.<br /><br />
                    </div>
                    <div class="p-3 w-full">
                        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Customer Satisfaction Survey</h2>

                        <div class="">
                            <h3 class="text-xl font-semibold text-gray-700 mb-4">Customer Details</h3>
                            <p><span class="font-bold"> Name:</span> Sophie Bird</p>
                            <p className='flex flex-wrap'><span class="font-bold"> Occupation:</span> <span className='Numbers'>1</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques1" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[0]} userAnswerQN={UserData.ques1} /></p>
                            <p className='flex flex-wrap'><span class="font-bold"> Reason for travel today:</span> <span className='Numbers'>2</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques2" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[1]} userAnswerQN={UserData.ques2} /></p>
                        </div>

                        <div class="">
                            <h3 class="text-xl font-semibold text-gray-700 mb-4">Journey Information</h3>
                            <p className='flex flex-wrap'><span class="font-bold"> Name of station returning to:</span> <span className='Numbers'>3</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques3" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[2]} userAnswerQN={UserData.ques3} /></p>
                            <p className='flex flex-wrap'><span class="font-bold"> Type of ticket purchased:</span> Standard <span className='Numbers'>4</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques4" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[3]} userAnswerQN={UserData.ques4} /> ticket</p>
                            <p className='flex flex-wrap'><span class="font-bold"> Cost of ticket:</span> <span className='Numbers'>5</span> £
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques5" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[4]} userAnswerQN={UserData.ques5} /></p>
                            <p><span class="font-bold"> When ticket was purchased:</span> Yesterday</p>
                            <p className='flex flex-wrap'><span class="font-bold"> Where ticket was bought:</span> <span className='Numbers'>6</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques6" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[5]} userAnswerQN={UserData.ques6} /></p>
                        </div>

                        <div class="">
                            <h3 class="text-xl font-semibold text-gray-700 mb-4">Satisfaction with Journey</h3>
                            <p><span class="font-bold"> Most satisfied with:</span> the wifi</p>
                            <p className='flex flex-wrap'><span class="font-bold"> Least satisfied with:</span> the <span className='Numbers'>7</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques7" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[6]} userAnswerQN={UserData.ques7} /> this morning.</p>
                        </div>

                        <div class="">
                            <h3 class="text-xl font-semibold text-gray-700 mb-4">Satisfaction with Station Facilities</h3>
                            <p className='flex flex-wrap'><span class="font-bold"> Most satisfied with:</span> how much <span className='Numbers'>8</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques8" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[7]} userAnswerQN={UserData.ques8} /> was provided</p>
                            <p className='flex flex-wrap'><span class="font-bold"> Least satisfied with:</span> lack of seats, particularly on the <span className='Numbers'>9</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques9" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[8]} userAnswerQN={UserData.ques9} /></p>
                        </div>

                        <div class="">
                            <h3 class="text-xl font-semibold text-gray-700 mb-4">Other Feedback</h3>
                            <p className='flex flex-wrap'><span class="font-bold"> Neither satisfied nor dissatisfied with:</span> the <span className='Numbers'>10</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques10" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[9]} userAnswerQN={UserData.ques10} /> available</p>
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
                                <button onClick={() => { updateAudiotime("https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test4-Part2.m4a") }}
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
                        Label the map below.<br /> <br />
                        Write the correct letter, A-H, next to Questions 11-16<br /> <br />
                        <Image src={Image1} className='w-[80%]' alt='camTest15 4 image 1' /> <br /> <br />
                    </div>

                    <div className="Questions">
                        <h4>Club members</h4> <br />
                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>11</span>
                            <label htmlFor="Name"> Café </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques11"
                                TestName={"Cambridge-15-Test4"}
                                AnswerData={LAllAnswersData[10]}
                                userAnswerQN={UserData.ques11}
                            />
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>12</span>
                            <label htmlFor="Name"> Toilets </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques12"
                                TestName={"Cambridge-15-Test4"}
                                AnswerData={LAllAnswersData[11]}
                                userAnswerQN={UserData.ques12}
                            />
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>13</span>
                            <label htmlFor="Name"> Formal gardens </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques13"
                                TestName={"Cambridge-15-Test4"}
                                AnswerData={LAllAnswersData[12]}
                                userAnswerQN={UserData.ques13}
                            />
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>14</span>
                            <label htmlFor="Name"> Outdoor gym </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques14"
                                TestName={"Cambridge-15-Test4"}
                                AnswerData={LAllAnswersData[13]}
                                userAnswerQN={UserData.ques14}
                            />
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>15</span>
                            <label htmlFor="Name"> Skateboard ramp </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques15"
                                TestName={"Cambridge-15-Test4"}
                                AnswerData={LAllAnswersData[14]}
                                userAnswerQN={UserData.ques15}
                            />
                        </div>

                        <div className="question mt-2 flex flex-wrap gap-2">
                            <span className='Numbers'>16</span>
                            <label htmlFor="Name"> Wild flowers </label>
                            <Text_inputs
                                handleValueChange={handleValueChange}
                                QNum="ques16"
                                TestName={"Cambridge-15-Test4"}
                                AnswerData={LAllAnswersData[15]}
                                userAnswerQN={UserData.ques16}
                            />
                        </div>

                    </div>
                    <div className="Q-articles text-justify mt-4 mb-3 font-bold">
                        <h5> Questions 17–18</h5> <br />
                        What does the speakers say about the adventure playground?<br />
                    </div>
                    <div className='Questions'>
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques17"
                                TestName={"Cambridge-15-Test4"}
                                AnswerData={LAllAnswersData[16]}
                                userAnswerQN={UserData.ques17}
                                contentsObj={{
                                    Title: "",
                                    AData: "Children must be supervised.",
                                    BData: "It costs more in winter.",
                                    CData: "Some activities are only for younger children."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques18"
                                TestName={"Cambridge-15-Test4"}
                                AnswerData={LAllAnswersData[17]}
                                userAnswerQN={UserData.ques18}
                                contentsObj={{
                                    Title: "",
                                    AData: "No payment is required.",
                                    BData: " It was recently expanded.",
                                    CData: "after completing several practice runs."
                                }}
                            />
                        </div>

                    </div>
                    <div className="Q-articles text-justify mt-4 mb-3 font-bold">
                        <h5> Questions 19 - 20 </h5> <br />
                        What does the speaker say about the glass houses?<br />
                    </div>
                    <div className='Questions'>
                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques19"
                                TestName={"Cambridge-15-Test4"}
                                AnswerData={LAllAnswersData[18]}
                                userAnswerQN={UserData.ques19}
                                contentsObj={{
                                    Title: "",
                                    AData: "They are closed at weekends.",
                                    BData: "It costs more in winter.",
                                    CData: "Volunteers are needed to work there."
                                }}
                            />
                        </div>

                        <div className='mb-3'>
                            <Select_input
                                handleValueChange={handleValueChange}
                                QNum="ques20"
                                TestName={"Cambridge-15-Test4"}
                                AnswerData={LAllAnswersData[19]}
                                userAnswerQN={UserData.ques20}
                                contentsObj={{
                                    Title: "",
                                    AData: "They were badly damaged by fire.",
                                    BData: " More money is needed to repair some of the glass.",
                                    CData: "Visitors can see palm trees from tropical regions."
                                }}
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
                                <button onClick={() => { updateAudiotime(" https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test4-Part3.m4a") }}
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
                        Questions 21 – 24<br />
                        Choose the correct letter, A, B or C.<br /> <br />
                        <h4 className='text-center'> Presentation about refrigeration</h4>
                    </div>
                    <div className="">
                        <div className='Questions'>
                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques21"
                                    TestName={"Cambridge-15-Test4"}
                                    AnswerData={LAllAnswersData[20]}
                                    userAnswerQN={UserData.ques21}
                                    contentsObj={{
                                        Title: "What did Annie discover from reading about icehouses?",
                                        AData: "why they were first created",
                                        BData: "how the ice was kept frozen",
                                        CData: "where they were located"
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques22"
                                    TestName={"Cambridge-15-Test4"}
                                    AnswerData={LAllAnswersData[21]}
                                    userAnswerQN={UserData.ques22}
                                    contentsObj={{
                                        Title: "What point does Annie make about refrigeration in ancient Rome?",
                                        AData: "It became a commercial business.",
                                        BData: "It used snow from nearby.",
                                        CData: "It took a long time to become popular."
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques23"
                                    TestName={"Cambridge-15-Test4"}
                                    AnswerData={LAllAnswersData[22]}
                                    userAnswerQN={UserData.ques23}
                                    contentsObj={{
                                        Title: "In connection with modern refrigerators, both Annie and Jack are worried about",
                                        AData: "the complexity of the technology.",
                                        BData: "the fact that some are disposed of irresponsibly.",
                                        CData: "the large number that quickly break down."
                                    }}
                                />
                            </div>

                            <div className='mb-3'>
                                <Select_input
                                    handleValueChange={handleValueChange}
                                    QNum="ques24"
                                    TestName={"Cambridge-15-Test4"}
                                    AnswerData={LAllAnswersData[23]}
                                    userAnswerQN={UserData.ques24}
                                    contentsObj={{
                                        Title: "What do Jack and Annie agree regarding domestic fridges?",
                                        AData: "They are generally good value for money.",
                                        BData: "There are plenty of useful variations.",
                                        CData: "They are more useful than other domestic appliances."
                                    }}
                                />
                            </div>

                        </div>



                        <div className="">
                            <div className="Q-articles text-justify mt-4 font-bold">
                                <h5> Questions 25–30</h5> <br />
                                Who is going to do research into each topic? <br /> <br />
                                Write the correct letter, A, B or C, next to Questions 25-30.<br /> <br />
                            </div>
                            <div className="border p-3 rounded-lg shadow-md ">
                                <h5 className="text-start font-semibold mb-2">People</h5> <br />
                                <ul className="list-none space-y-2">
                                    <li><strong>A</strong> - Annie</li>
                                    <li><strong>B</strong> - Jack</li>
                                    <li><strong>C</strong> - both Annie and Jack</li>
                                </ul>
                            </div>
                            <br />

                            <div className='Questions'>
                                <h4 className='text-start'>Topics</h4>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>25</span>
                                    <label htmlFor="ques26">the goods that are refrigerated</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques25"
                                        TestName={"Cambridge-15-Test4"}
                                        AnswerData={LAllAnswersData[24]}
                                        userAnswerQN={UserData.ques25}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>26</span>
                                    <label htmlFor="ques26"> the effects on health </label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques26"
                                        TestName={"Cambridge-15-Test4"}
                                        AnswerData={LAllAnswersData[25]}
                                        userAnswerQN={UserData.ques26}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>27</span>
                                    <label htmlFor="ques27">the impact on food producers </label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques27"
                                        TestName={"Cambridge-15-Test4"}
                                        AnswerData={LAllAnswersData[26]}
                                        userAnswerQN={UserData.ques27}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>28</span>
                                    <label htmlFor="ques28">the impact on cities </label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques28"
                                        TestName={"Cambridge-15-Test4"}
                                        AnswerData={LAllAnswersData[27]}
                                        userAnswerQN={UserData.ques28}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>29</span>
                                    <label htmlFor="ques29"> refrigerated transport </label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques29"
                                        TestName={"Cambridge-15-Test4"}
                                        AnswerData={LAllAnswersData[28]}
                                        userAnswerQN={UserData.ques29}
                                    />
                                </div>
                                <div className="question mt-2 flex flex-wrap gap-2">
                                    <span className='Numbers'>30</span>
                                    <label htmlFor="ques30">domestic fridges</label>
                                    <Text_inputs
                                        handleValueChange={handleValueChange}
                                        QNum="ques30"
                                        TestName={"Cambridge-15-Test4"}
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
                                <button onClick={() => { updateAudiotime(" https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam15-Test4-Part4.m4a") }}
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
                    <div className="">
                        <h1 className="text-2xl font-bold  mb-4">PART 4</h1>
                        <h2 className="text-xl font-semibold  mb-6">Questions 31 – 40</h2>
                        <p className="text-lg mb-4">Complete the notes below.</p>
                        <p className="text-lg mb-6">Write <span className="font-bold">ONE WORD ONLY</span> for each answer.</p>

                        <h3 className="text-lg font-bold mb-2">How the Industrial Revolution affected life in Britain</h3>
                        <h4 className="text-md font-semibold mb-2">19th century</h4>
                        <ul className="list-disc list-inside mb-4">
                            <li className='flex flex-wrap'>For the first time, people’s possessions were used to measure Britain’s <span className='Numbers'>31</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques31" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[30]} userAnswerQN={UserData.ques31} /></li>
                            <li className='flex flex-wrap'>Developments in production of goods and in <span className='Numbers'>32</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques32" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[31]} userAnswerQN={UserData.ques32} /> greatly changed lives.</li>
                        </ul>

                        <h4 className="text-md font-semibold mb-2">MAIN AREAS OF CHANGE</h4>
                        <h5 className="text-md font-semibold mb-1">Manufacturing</h5>
                        <ul className="list-disc list-inside mb-4">
                            <li className='flex flex-wrap'>The Industrial Revolution would not have happened without the new types of <span className='Numbers'>33</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques33" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[32]} userAnswerQN={UserData.ques33} /> that were used then.</li>
                            <li className='flex flex-wrap'>The leading industry was <span className='Numbers'>34</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques34" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[33]} userAnswerQN={UserData.ques34} /> (its products became widely available).</li>
                            <li className='flex flex-wrap'>New <span className='Numbers'>35</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques35" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[34]} userAnswerQN={UserData.ques35} /> made factories necessary and so more people moved into towns.</li>
                        </ul>

                        <h5 className="text-md font-semibold mb-1">Transport</h5>
                        <ul className="list-disc list-inside mb-4">
                            <li>The railways took the place of canals.</li>
                            <li>Because of the new transport:
                                <ul className="list-disc list-inside ml-6">
                                    <li className='flex flex-wrap'>greater access to <span className='Numbers'>36</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques36" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[35]} userAnswerQN={UserData.ques36} /> made people more aware of what they could buy in shops.</li>
                                    <li className='flex flex-wrap'>when shopping, people were not limited to buying <span className='Numbers'>37</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques37" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[36]} userAnswerQN={UserData.ques37} /> goods.</li>
                                </ul>
                            </li>
                        </ul>

                        <h5 className="text-md font-semibold mb-1">Retailing</h5>
                        <ul className="list-disc list-inside">
                            <li>The first department stores were opened.</li>
                            <li>The displays of goods were more visible:
                                <ul className="list-disc list-inside ml-6">
                                    <li className='flex flex-wrap'>inside stores because of better <span className='Numbers'>38</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques38" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[37]} userAnswerQN={UserData.ques38} /></li>
                                    <li className='flex flex-wrap'>outside stores, because <span className='Numbers'>39</span>
                                        <Text_inputs handleValueChange={handleValueChange} QNum="ques39" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[38]} userAnswerQN={UserData.ques39} /> were bigger.</li>
                                </ul>
                            </li>
                            <li className='flex flex-wrap'><span className='Numbers'>40</span>
                                <Text_inputs handleValueChange={handleValueChange} QNum="ques40" TestName="Cambridge-15-Test4" AnswerData={LAllAnswersData[39]} userAnswerQN={UserData.ques40} /> that was persuasive became much more common.</li>
                        </ul>
                    </div>
                </div>







            </div>






        </section >
    )
}



export default ListeningPage
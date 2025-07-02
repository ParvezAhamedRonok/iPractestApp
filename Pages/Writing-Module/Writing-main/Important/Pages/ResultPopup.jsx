import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { FaChessQueen } from "react-icons/fa";
import Image from "next/image";
import AnimatedProgressProvider from "@/components/Speaking-Module/Speaking-main/Pages/SpeakingResult/AnimatedProgressProvider.js";
import ResultEvaluations from "./ResultEvaluations";
import Compare from "./Compare";
import logo from "@assets/images/Practestlogo.png";
import { ClockLoader } from "react-spinners";
import Timer from "./Timer";
import { useRouter } from "next/navigation";
import ResultImprovement from "./ResultImprovement.jsx";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";

export default function ResultPopup({ correctData,
    setCorrectData,
    setOpen_MarketingOffer,
    postIeltsRate,
    TOELF_Score,
    LexicalResourceScore,
    GrammarScore,
    storeCoherenceScore,
    MainTaskComplessionResult,
    clickForUploadQuestion,
    changeTap,
    setChangeTap,
    storeTapContentForChangeUI,
    userLoginFunction,
    setchange_login_Status,
    itemsSet,
    imageText,
    writingData,
    userTextToPassResultEvaluation,
    lexicalResWords,
    grammerMistakes, LoadingGlobally, SpeakingSummary, SpeakingImprovement }) {
    const history = useRouter()
    return (
        <div className="Result-PopUp">
            {correctData && (
                <section
                    className="fixed top-0 left-0 right-0 bottom-0 w-[100%]  box-border overflow-y-scroll  h-[99vh]
        bg-neutral-100 text-black z-[100000] grid-cols-1 grid-rows-5">
                    {/*  showing IELT's Rate base on Writing   */}
                    <div className="w-full h-full relative">
                        <div className="absolute top-5 right-5">
                            <button
                                style={{ color: 'rgb(153, 171, 180)' }}
                                className="text-3xl  hover:drop-shadow-xl rounded-[50%] pt-[13px] sm:mr-5 mr-1
                         hover:bg-light-gray w-[60px] translate-y-[-17px] sm:translate-y-[-14px] h-[60px] flex justify-center align-middle"
                                onClick={() => {
                                    setCorrectData(false);
                                    //for openiging the offer popup ...
                                    setOpen_MarketingOffer(prev => !prev)
                                }}>  <MdOutlineCancel />
                            </button>
                        </div>


                        <div className="w-full flex justify-center align-middle pt-3">
                            <div className=" mb-2">
                                <div className="flex gap-6 justify-center align-middle">
                                    <div className="flex gap-4">
                                        <div className="mb-2 m-auto w-[70px] h-[70px]">
                                            <AnimatedProgressProvider
                                                valueStart={0}
                                                valueEnd={Number(postIeltsRate) / 10 * 100}
                                                duration={1.5}
                                                easingFunction={easeQuadInOut}
                                            // repeat
                                            >
                                                {value => {
                                                    let roundedValue = Math.round(value);
                                                    let mainNumber = String(roundedValue).split("").join(".");
                                                    return (
                                                        <CircularProgressbar
                                                            value={value}
                                                            text={`${mainNumber}`}
                                                            strokeWidth={13}
                                                            styles={buildStyles({
                                                                pathTransition: "none",
                                                                //  textColor: "red",
                                                                pathColor: "#541bac",
                                                                // trailColor: "gold"
                                                            })}
                                                            className="font-bold"
                                                        />
                                                    );
                                                }}
                                            </AnimatedProgressProvider>
                                            <p className="text-[11px] mt-1 font-bold text-center">IELTS Score</p> <br />
                                        </div>
                                        <div style={{ width: "70px", height: "70px" }}>
                                            <CircularProgressbar
                                                value={Number(TOELF_Score)}
                                                maxValue={30}
                                                text={`${Number(TOELF_Score)}`}
                                                styles={buildStyles({
                                                    textColor: "blue",
                                                    pathColor: "blue",
                                                    trailColor: "#d6d6d6"
                                                })}
                                            />
                                            <p className='text-center font-bold mt-1 text-[9px]'>TOEFL Score</p>
                                        </div>
                                    </div>

                                </div>


                                <br />
                                <div>
                                    <div className="w-full flex gap-2 mt-2 translate-y-3 p-1">
                                        <div>
                                            <div className="relative w-[150px] sm:w-[210px] bg-[rgb(192,192,192)] rounded-[25px]  h-[14px] mb-1 ">
                                                <div className="bg-blue-600 h-[14px] rounded-[25px]" style={{ width: Number(LexicalResourceScore) / 10 * 100 + "%" }}></div>
                                                <div className="barTexts w-[150px] sm:w-[210px] flex justify-between align-middle absolute top-0 left-0">
                                                    <div className="absolute top-[-20px] left-0 right-0 flex gap-3 translate-x-[-3px]">
                                                        <p className='ml-2 text-black font-bold text-[11px] '>LexicalResource</p>
                                                        <p className='font-bold text-black  mr-2 text-[15px]'>{LexicalResourceScore}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mt-[17px] w-[150px] sm:w-[210px] bg-[rgb(192,192,192)] rounded-[25px]  h-[14px] mb-1">
                                                <div className="bg-blue-600 h-[14px] rounded-[25px] " style={{ width: Number(GrammarScore) / 10 * 100 + "%" }}></div>
                                                <div className="absolute top-[-20px] left-0 right-0 flex gap-3 translate-x-[-3px]">
                                                    <p className='ml-2 text-black font-bold text-[11px] '>Grammar Score</p>
                                                    <p className='font-bold text-black  mr-2 text-[15px]'>{GrammarScore}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative w-[150px] sm:w-[210px] bg-[rgb(192,192,192)] rounded-[25px]  h-[14px] mb-1 ">
                                                <div className="bg-blue-600 h-[14px] rounded-[25px] " style={{ width: Number(storeCoherenceScore) / 10 * 100 + "%" }}></div>
                                                <div className="absolute top-[-20px] left-0 right-0 flex gap-3 translate-x-[-3px]">
                                                    <p className='ml-2 text-black font-bold text-[11px] '>Coherence</p>
                                                    <p className='font-bold text-black  mr-2 text-[15px]'>{storeCoherenceScore}</p>
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <div >
                                                    <div className="relative mt-[17px] w-[150px] sm:w-[210px] bg-[rgb(192,192,192)] rounded-[25px]  h-[14px] mb-1 ">
                                                        <div className="bg-blue-600 h-[14px] rounded-[25px]" style={{ width: MainTaskComplessionResult != "error" ? Number(MainTaskComplessionResult) / 9 * 100 + "%" : Number(0) }}></div>
                                                        <div className="absolute top-[-20px] left-0 right-0 flex gap-3 translate-x-[-3px]">
                                                            <p className='ml-2 text-black font-bold text-[11px]'>Task Completion</p>
                                                            <p className='font-bold text-black  mr-2 text-[15px] '>{MainTaskComplessionResult == "error" ? 0 : MainTaskComplessionResult}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="absolute bottom-[-25px] right-0 pr-1">
                                                    <div className="flex gap-1">
                                                        <>
                                                            <p className="text-[8px] sm:text-[9px] text-red-600 translate-y-[2px] leading-[10px]">{MainTaskComplessionResult == "error" && "Upload Question For Getting Those Scores"}</p>
                                                            <p className="text-[8px] sm:text-[9px] text-red-600 translate-x-[-6px] sm:translate-x-[-10px] translate-y-[-5px]">{MainTaskComplessionResult == "0" && "Upload valid Question For Getting better Score"}</p>
                                                        </>

                                                        {
                                                            MainTaskComplessionResult == "error" && <button className="text-[9px] p-1 rounded-[12px] text-center bg-red-400 hover:bg-blue-500 text-white"
                                                                onClick={() => { clickForUploadQuestion() }}
                                                            >Upload</button>
                                                        }
                                                    </div>
                                                </div>

                                            </div> <br />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* all tabs */}
                        <div className='bg-[##eaeaea] sm:mr-3 sm:ml-3 w-full border-b-[3px] border-b-[#20bbb7]' >
                            <ul className='flex cursor-pointer gap-1 sm:gap-2 justify-center'>
                                <li className={`${changeTap == "Correction" ? "bg-[#20bbb7] text-gray-50" : "bg-[#eeeef0] text-gray-500"} py-2 px-2 sm:px-6 rounded-t-lg   text-[8px] sm:text-[14px] font-bold`}
                                    onClick={() => { setChangeTap("Correction") }}
                                >Writing Correction</li>
                                <li className={`${changeTap == "Evaluation" ? "bg-[#20bbb7] text-gray-50" : "bg-[#eeeef0] text-gray-500"} py-2  px-2 sm:px-6 rounded-t-lg  text-[8px] sm:text-[14px] font-bold`}
                                    onClick={() => {
                                        setChangeTap("Evaluation")
                                    }}
                                >Result Evaluation</li>
                                <li className={`${changeTap == "Improvement" ? "bg-[#20bbb7] text-gray-50" : "bg-[#eeeef0] text-gray-500"} py-2  px-2 sm:px-6  rounded-t-lg text-[8px] sm:text-[14px] font-bold`}
                                    onClick={() => {
                                        setChangeTap("Improvement")
                                    }}
                                >Area of Improvement</li>

                            </ul>
                        </div>

                        {/* Showing the Right & Wrong Writing by HightLight  */}
                        <div className="border-r-2 border-r-gray-300 border-l-2 border-l-gray-300 border-b-2 border-b-gray-300 sm:pl-3 sm:pr-3">
                            {
                                changeTap == "Correction" && (
                                    <Compare
                                        itemsSet={itemsSet}
                                        imageText={imageText}
                                        writingData={writingData.writinTextArea}
                                        correctData={correctData}
                                    />
                                )
                            }
                            <div className="w-full h-full relative z-[100]">
                                {
                                    changeTap != "Correction" && (<>
                                        {
                                            storeTapContentForChangeUI == "LoginFirst" && (
                                                < div className="absolute top-0 left-0 right-0  flex justify-center setBackgroundColorsInResultPremium align-middle w-full h-full z-[1000]">
                                                    <div className="w-full h-[250px] bg-transparent translate-y-3 flex justify-center align-middle m-4 ">
                                                        <button className="p-2 text-center m-auto text-white rounded-[10px] font-bold h-[40px] bg-blue-600 flex gap-2"
                                                            onClick={() => {
                                                                userLoginFunction();
                                                                setchange_login_Status(false);
                                                            }}
                                                        >Need to Login <IoMdLogIn className="text-xl translate-y-[2px]" /></button>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        {
                                            storeTapContentForChangeUI == "HaveToPay" && (
                                                <div className="absolute top-0 left-0 right-0  flex justify-center setBackgroundColorsInResultPremium align-middle w-full h-full z-[1000]">
                                                    <div className="w-full h-[250px] bg-transparent translate-y-3 flex justify-center align-middle m-4 ">
                                                        <button className="p-2 text-center m-auto text-white rounded-[10px] font-bold h-[40px] bg-blue-600 flex gap-2"
                                                            onClick={() => { history.push("/Payment-Pages/Billing-Page"); }}
                                                        >Premium <FaChessQueen className="text-xl text-yellow-400" /></button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </>)
                                }

                                {
                                    changeTap == "Evaluation" && (
                                        <ResultEvaluations
                                            lexicalResWords={lexicalResWords}
                                            grammerMistakes={grammerMistakes}
                                            userTextToPassResultEvaluation={userTextToPassResultEvaluation}

                                            LexicalResourceScore={LexicalResourceScore}
                                            GrammarScore={GrammarScore}
                                            storeCoherenceScore={storeCoherenceScore}
                                        />
                                    )
                                }

                                {
                                    changeTap == "Improvement" && (
                                        <ResultImprovement
                                            storeTapContentForChangeUI={storeTapContentForChangeUI}
                                            SpeakingSummary={SpeakingSummary}
                                            SpeakingImprovement={SpeakingImprovement}

                                        />
                                    )
                                }
                            </div>



                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

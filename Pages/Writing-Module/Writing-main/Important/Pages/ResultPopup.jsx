import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
const { width, height } = Dimensions.get('window');
// import { MdOutlineCancel } from "react-icons/md";
// import { IoMdLogIn } from "react-icons/io";
// import { FaChessQueen } from "react-icons/fa";

// import AnimatedProgressProvider from "@/components/Speaking-Module/Speaking-main/Pages/SpeakingResult/AnimatedProgressProvider.js";
// import ResultEvaluations from "./ResultEvaluations";
// import Compare from "./Compare";
// import { useRouter } from "next/navigation";
// import ResultImprovement from "./ResultImprovement.jsx";
// import {
//     CircularProgressbar,
//     CircularProgressbarWithChildren,
//     buildStyles
// } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { easeQuadInOut } from "d3-ease";


// for cyrcular bar 
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RADIUS = 35;
const STROKE_WIDTH = 8;
const CIRCLE_LENGTH = 2 * Math.PI * RADIUS;

//width bars..
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BAR_WIDTH = SCREEN_WIDTH * 0.42; // About 42% of screen for each bar (2 per row with gap)




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
    // const history = useRouter();
    if (!correctData) return null;

    //for animated cyrcular bar for IELTS and TOFEL scoring 
    const animatedIELTS = useState(new Animated.Value(CIRCLE_LENGTH))[0];
    const animatedTOEFL = useState(new Animated.Value(CIRCLE_LENGTH))[0];

    useEffect(() => {
        const ieltsTarget =
            CIRCLE_LENGTH - (CIRCLE_LENGTH * Number(postIeltsRate)) / 9; // Max IELTS = 9

        Animated.timing(animatedIELTS, {
            toValue: ieltsTarget,
            duration: 1500,
            useNativeDriver: true,
        }).start();

        const toeflTarget =
            CIRCLE_LENGTH - (CIRCLE_LENGTH * Number(TOELF_Score)) / 30; // Max TOEFL = 30

        Animated.timing(animatedTOEFL, {
            toValue: toeflTarget,
            duration: 1500,
            useNativeDriver: true,
        }).start();
    }, [postIeltsRate, TOELF_Score]);
    // width range bar ...
    const getWidth = (val, max = 10) =>
        `${(Number(val) / max) * 100}%`;

    // alert(typeof MainTaskComplessionResult)
    const isError = MainTaskComplessionResult === 'error' || " ";
    const isZero = MainTaskComplessionResult === '0';

    return (
        <View style={styles.overlay}>
            <TouchableOpacity style={styles.closeButton} onPress={() => { setCorrectData(false) }}>
                <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
            {/* all result scoring UI Main into below */}
            <View style={styles.container}>
                {/* IELTS Progress Circle */}
                <View style={styles.circleWrapper}>
                    <Svg width={80} height={80}>
                        <Circle
                            cx={40}
                            cy={40}
                            r={RADIUS}
                            stroke="#e6e6e6"
                            strokeWidth={STROKE_WIDTH}
                            fill="none"
                        />
                        <AnimatedCircle
                            cx={40}
                            cy={40}
                            r={RADIUS}
                            stroke="#541bac"
                            strokeWidth={STROKE_WIDTH}
                            fill="none"
                            strokeDasharray={CIRCLE_LENGTH}
                            strokeDashoffset={animatedIELTS}
                            strokeLinecap="round"
                        />
                    </Svg>
                    <View style={styles.centeredText}>
                        <Text style={[styles.scoreLabel, { color: '#541bac' }]}>
                            {String(Number(postIeltsRate)).split('').join('.')}
                        </Text>
                    </View>
                    <Text style={styles.scoreTitle}>IELTS Score</Text>
                </View>

                {/* TOEFL Progress Circle */}
                <View style={styles.circleWrapper}>
                    <Svg width={80} height={80}>
                        <Circle
                            cx={40}
                            cy={40}
                            r={RADIUS}
                            stroke="#e6e6e6"
                            strokeWidth={STROKE_WIDTH}
                            fill="none"
                        />
                        <AnimatedCircle
                            cx={40}
                            cy={40}
                            r={RADIUS}
                            stroke="blue"
                            strokeWidth={STROKE_WIDTH}
                            fill="none"
                            strokeDasharray={CIRCLE_LENGTH}
                            strokeDashoffset={animatedTOEFL}
                            strokeLinecap="round"
                        />
                    </Svg>
                    <View style={styles.centeredText}>
                        <Text style={[styles.scoreLabel, { color: 'blue' }]}>
                            {Number(TOELF_Score)}
                        </Text>
                    </View>
                    <Text style={styles.scoreTitle}>TOEFL Score</Text>
                </View>
            </View>
            <>
                <View style={styles.wrapper}>
                    {/* Lexical Resource */}
                    <View style={styles.barBlock}>
                        <View style={styles.barTextRow}>
                            <Text style={styles.label}>Lexical</Text>
                            <Text style={styles.scoreText}>{LexicalResourceScore}</Text>
                        </View>
                        <View style={styles.progressBg}>
                            <View
                                style={[
                                    styles.progressFill,
                                    { width: getWidth(LexicalResourceScore) },
                                ]}
                            />
                        </View>
                    </View>

                    {/* Grammar */}
                    <View style={styles.barBlock}>
                        <View style={styles.barTextRow}>
                            <Text style={styles.label}>Grammar</Text>
                            <Text style={styles.scoreText}>{GrammarScore}</Text>
                        </View>
                        <View style={styles.progressBg}>
                            <View
                                style={[
                                    styles.progressFill,
                                    { width: getWidth(GrammarScore) },
                                ]}
                            />
                        </View>
                    </View>

                    {/* Coherence */}
                    <View style={styles.barBlock}>
                        <View style={styles.barTextRow}>
                            <Text style={styles.label}>Coherence</Text>
                            <Text style={styles.scoreText}>{storeCoherenceScore}</Text>
                        </View>
                        <View style={styles.progressBg}>
                            <View
                                style={[
                                    styles.progressFill,
                                    { width: getWidth(storeCoherenceScore) },
                                ]}
                            />
                        </View>
                    </View>

                    {/* Task Completion */}
                    <View style={styles.barBlock}>
                        <View style={styles.barTextRow}>
                            <Text style={styles.label}>Task</Text>
                            <Text style={styles.scoreText}>
                                {isError ? 0 : MainTaskComplessionResult}
                            </Text>
                        </View>
                        <View style={styles.progressBg}>
                            <View
                                style={[
                                    styles.progressFill,
                                    {
                                        width:
                                            isError || isZero
                                                ? '0%'
                                                : getWidth(MainTaskComplessionResult, 9),
                                    },
                                ]}
                            />
                        </View>
                    </View>


                </View>
                {/* Conditional Message or Button */}
                {(isError || isZero) && (
                    <TouchableOpacity
                        style={styles.warningButton}
                        onPress={() => {

                            clickForUploadQuestion();
                            // alert("here be be that upload function")
                        }}
                    >
                        <Text style={styles.warningText}>
                            {isError
                                ? 'Upload'
                                : 'Upload Valid Question for Better Scores'}
                        </Text>
                    </TouchableOpacity>
                )}
            </>
        </View>
    );

    // return (

    //     <div className="Result-PopUp">
    //         {correctData && (
    //             <section
    //                 className="fixed top-0 left-0 right-0 bottom-0 w-[100%]  box-border overflow-y-scroll  h-[99vh]


    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>


    //                     {/* all tabs */}
    //                     <div className='bg-[##eaeaea] sm:mr-3 sm:ml-3 w-full border-b-[3px] border-b-[#20bbb7]' >
    //                         <ul className='flex cursor-pointer gap-1 sm:gap-2 justify-center'>
    //                             <li className={`${changeTap == "Correction" ? "bg-[#20bbb7] text-gray-50" : "bg-[#eeeef0] text-gray-500"} py-2 px-2 sm:px-6 rounded-t-lg   text-[8px] sm:text-[14px] font-bold`}
    //                                 onClick={() => { setChangeTap("Correction") }}
    //                             >Writing Correction</li>
    //                             <li className={`${changeTap == "Evaluation" ? "bg-[#20bbb7] text-gray-50" : "bg-[#eeeef0] text-gray-500"} py-2  px-2 sm:px-6 rounded-t-lg  text-[8px] sm:text-[14px] font-bold`}
    //                                 onClick={() => {
    //                                     setChangeTap("Evaluation")
    //                                 }}
    //                             >Result Evaluation</li>
    //                             <li className={`${changeTap == "Improvement" ? "bg-[#20bbb7] text-gray-50" : "bg-[#eeeef0] text-gray-500"} py-2  px-2 sm:px-6  rounded-t-lg text-[8px] sm:text-[14px] font-bold`}
    //                                 onClick={() => {
    //                                     setChangeTap("Improvement")
    //                                 }}
    //                             >Area of Improvement</li>

    //                         </ul>
    //                     </div>

    //                     {/* Showing the Right & Wrong Writing by HightLight  */}
    //                     <div className="border-r-2 border-r-gray-300 border-l-2 border-l-gray-300 border-b-2 border-b-gray-300 sm:pl-3 sm:pr-3">
    //                         {
    //                             changeTap == "Correction" && (
    //                                 <Compare
    //                                     itemsSet={itemsSet}
    //                                     imageText={imageText}
    //                                     writingData={writingData.writinTextArea}
    //                                     correctData={correctData}
    //                                 />
    //                             )
    //                         }
    //                         <div className="w-full h-full relative z-[100]">
    //                             {
    //                                 changeTap != "Correction" && (<>
    //                                     {
    //                                         storeTapContentForChangeUI == "LoginFirst" && (
    //                                             < div className="absolute top-0 left-0 right-0  flex justify-center setBackgroundColorsInResultPremium align-middle w-full h-full z-[1000]">
    //                                                 <div className="w-full h-[250px] bg-transparent translate-y-3 flex justify-center align-middle m-4 ">
    //                                                     <button className="p-2 text-center m-auto text-white rounded-[10px] font-bold h-[40px] bg-blue-600 flex gap-2"
    //                                                         onClick={() => {
    //                                                             userLoginFunction();
    //                                                             setchange_login_Status(false);
    //                                                         }}
    //                                                     >Need to Login <IoMdLogIn className="text-xl translate-y-[2px]" /></button>
    //                                                 </div>
    //                                             </div>
    //                                         )
    //                                     }

    //                                     {
    //                                         storeTapContentForChangeUI == "HaveToPay" && (
    //                                             <div className="absolute top-0 left-0 right-0  flex justify-center setBackgroundColorsInResultPremium align-middle w-full h-full z-[1000]">
    //                                                 <div className="w-full h-[250px] bg-transparent translate-y-3 flex justify-center align-middle m-4 ">
    //                                                     <button className="p-2 text-center m-auto text-white rounded-[10px] font-bold h-[40px] bg-blue-600 flex gap-2"
    //                                                         onClick={() => { history.push("/Payment-Pages/Billing-Page"); }}
    //                                                     >Premium <FaChessQueen className="text-xl text-yellow-400" /></button>
    //                                                 </div>
    //                                             </div>
    //                                         )
    //                                     }
    //                                 </>)
    //                             }

    //                             {
    //                                 changeTap == "Evaluation" && (
    //                                     <ResultEvaluations
    //                                         lexicalResWords={lexicalResWords}
    //                                         grammerMistakes={grammerMistakes}
    //                                         userTextToPassResultEvaluation={userTextToPassResultEvaluation}

    //                                         LexicalResourceScore={LexicalResourceScore}
    //                                         GrammarScore={GrammarScore}
    //                                         storeCoherenceScore={storeCoherenceScore}
    //                                     />
    //                                 )
    //                             }

    //                             {
    //                                 changeTap == "Improvement" && (
    //                                     <ResultImprovement
    //                                         storeTapContentForChangeUI={storeTapContentForChangeUI}
    //                                         SpeakingSummary={SpeakingSummary}
    //                                         SpeakingImprovement={SpeakingImprovement}

    //                                     />
    //                                 )
    //                             }
    //                         </div>



    //                     </div>
    //                 </div>
    //             </section>
    //         )}
    //     </div>
    // )
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        backgroundColor: 'white',
        zIndex: 999,
        // 👇 removes centering
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100, // Optional padding for close button space
        transform: [{ translateY: -240 }]
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1000,
        padding: 10,
    },
    closeText: {
        color: 'red',
        fontWeight: 800,
        fontSize: 17,
    },
    content: {
        width: '90%',
        height: '100vh',
        backgroundColor: '#333',
        borderRadius: 12,
        transform: [{ translateY: -25 }]
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    //IELTS and TOFEL scoring animation stylings
    container: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ translateY: -70 }]
    },
    circleWrapper: {
        width: 80,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredText: {
        position: 'absolute',
        top: 26,
        alignSelf: 'center',
    },
    scoreLabel: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    scoreTitle: {
        marginTop: 6,
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    // width bars styling ...
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 3,
        justifyContent: 'space-between',
        padding: 10,
        transform: [{ translateY: -70 }]
    },
    barBlock: {
        width: BAR_WIDTH,
    },
    barTextRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    label: {
        fontSize: 10,
        fontWeight: '600',
        color: '#111',
    },
    scoreText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },
    progressBg: {
        backgroundColor: 'rgb(192,192,192)',
        height: 12,
        borderRadius: 25,
        overflow: 'hidden',
    },
    progressFill: {
        backgroundColor: '#2563eb',
        height: 12,
        borderRadius: 25,
    },
    warningButton: {
        width: '10%',
        marginLeft: 'auto',
        backgroundColor: '#fee2e2',
        paddingVertical: 6,
        transform: [
            { translateX: -15 },
            { translateY: -70 } // Change this value to whatever Y offset you need
        ],
        borderRadius: 6,
    },
    warningText: {
        fontSize: 10,
        color: '#b91c1c',
        textAlign: 'center',
        fontWeight: '600',
    },


});
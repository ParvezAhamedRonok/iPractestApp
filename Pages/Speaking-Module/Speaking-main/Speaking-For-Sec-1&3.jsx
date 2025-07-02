
import React, { useEffect, useState, useRef } from "react";
import { isMobile } from "react-device-detect";
import { GiOldMicrophone } from "react-icons/gi";
import Image from "next/image";

import axios from "axios";
import hark from "hark";

import Speak1 from "@assets/images/Speaking-Images/Speak1.gif"
import Speak2 from "@assets/images/Speaking-Images/Speak4.gif"

import { useRouter } from 'next/navigation';


import audioPlaySound from "@assets/Audios/playAudioForSpeaking.wav"
import Not_res_audio from "@assets/Audios/Speaking-Audios/0/Not-Response-alert.mp3"
import { useStateContext } from "@/contexts/ContextProvider";


import { SPEAKING_POST_FOR_SET_SCORES, SPEAKING_POST_TO_GET_RESPONSE_USERDATA } from "@assets/URL's/AllUrl.js";
import { StepShowFunction } from "../Pages/StepShowFunction.js";


//Sec-1 & Sec-3 importing.....
import {
    Test1Sec1, Test1Sec3, Test2Sec1, Test2Sec3, Test3Sec1,
} from "./Export-All-Tests/Export-Tests";

let stream;

var timeoutSpeechBreak;
var StopPlay;
let isIconClicked = false;

//below variable for collect user times that he/she gave into their answer
var collectUserTime;
let checkStatusForSpeechMethod = false;


var globalSpeakingState = ''


//user SpeechTimeCollect --
let collectUserSpeechTime = 0;
//user Speech Words Collect
let userEveryAnsCount = 0;


// Function to convert audio blob to base64 encoded string in mobile version....
const audioBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const arrayBuffer = reader.result;
            const base64Audio = btoa(
                new Uint8Array(arrayBuffer).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ''
                )
            );
            resolve(base64Audio);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
    });
};








// const msg = new SpeechSynthesisUtterance();
// msg.rate = .8;
var recordedText = "";
var doubleNotSpeaking = true;
var converstionStepsText = "";



function ClickSpeaking({ testNo, setPassComment, setWaveTit }) {
    const audioRefs = [
        useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)
    ];
    const [currentAudio, setCurrentAudio] = useState(null);
    // const audioRefs = Array.from({ length: 100 }, () => useRef(null));
    // const audioRefs = useRef(Array.from({ length: 100 }, () => React.createRef()));
    const [currentIndex, setCurrentIndex] = useState(null);
    const [firstplay, setfirstplay] = useState(true); // Track if playback is active
    const { setShoeSpeakingResult, speakingStepsNo, setSpeakingStepNo, userPaymentStatusCheck } = useStateContext();
    const history = useRouter();
    const [not_res_audio_str, set_not_res_audio_str] = useState(false);
    //all localstorages data storing into states...........
    const [userMainToken, setuserMainToken] = useState("");
    const [userEmail, setuserEmail] = useState("")
    const [userName, setuserName] = useState("");
    const [userSpeakingTestNo, setuserSpeakingTestNo] = useState()
    //other states...
    const [playAudio, setPlayAudio] = useState("");
    const [sampleAns, setSampleAns] = useState([]);
    const [SQuestion, setSQuestion] = useState("");
    const [makeWave, setMakeWave] = useState(false);
    const [showWave, setShowWave] = useState(false);
    // const [isIconClicked, setIsIconClicked] = useState(false);
    const [showPerPopUp, setShowPerPopUp] = useState(false);
    // const [notAnswering, setNotAnswering] = useState(false);    
    const [isloading, setisloading] = useState(false);
    const [SpeakingState, setSpeakingState] = useState("Play for start..");
    const [forQuestionHide, setForQuestionHide] = useState(true);
    //storing user Speech Ans data 
    let storeUserSpeechAns = "";
    //stroring steps question ok background color----------
    let storeQuesStepOkArray = [];


    const [transcriptTextbyOpenAi, settranscriptTextbyOpenAi] = useState("");
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const googleAPIKey = "AIzaSyDVksTONkieWNhplzhmpXTHCsYrjdDh1Mc";

    //end of the declareing States............................
    if (!googleAPIKey) { throw new Error("REACT_APP_GOOGLE_API_KEY not found in the environment"); }



    const loadAudios = (files) => {
        files.forEach((file, index) => {
            const audioRef = audioRefs[index]?.current;
            if (audioRef && audioRef.src !== file) {
                audioRef.src = file;
                audioRef.load();  // Reload only if the src changes
            }
        });
        setCurrentIndex(0); // Reset to the first audio after loading
    };

    const playSequentially = (index, showQ_Text) => {
        return new Promise((resolve, reject) => {
            try {
                setCurrentIndex(index);
                console.log('index')
                console.log(index)
                const currentAudioRef = audioRefs[index]?.current;

                if (currentAudioRef) {
                    recordControlFlag = false;

                    console.log(userSpeechMainData)
                    setSQuestion(showQ_Text)
                    examinerSpeakProcessStart();

                    currentAudioRef.play();
                    setCurrentAudio(currentAudioRef); // Store the currently playing audio

                    // Add an 'ended' event listener to resolve the promise
                    currentAudioRef.onended = () => {
                        console.log('onended')
                        setCurrentAudio(null); // Clear the current audio on end
                        currentAudioRef.onended = null; // Clear the handler to prevent memory leaks
                        currentAudioRef.onerror = null; // Clear the error handler// Optional: Update playback state

                        resolve('yes');
                        document.getElementById("SpeakingState").innerHTML = "Waiting for your Speech...";
                        window.console.log("playback finished");
                        window.speechFinished = true;
                        window.resetTranscriptG();
                        window.onAudionEndGlobal();
                        document.getElementById("transcriptText").style.display = "block";
                        console.log('resolve')// Resolve the promise when audio ends
                    };

                    // Handle any playback errors
                    currentAudioRef.onerror = (error) => {
                        reject(new Error(`Playback error: ${error.message}`));
                    };
                } else {
                    reject(new Error("No valid audio reference found."));
                }
            } catch (error) {
                reject(error); // Catch and reject any unexpected errors
            }
        });
    };


    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (event) { stopRecording(); }
        };
        // Listen for beforeunload events
        window.addEventListener('beforeunload', handleBeforeUnload);
        // Function to intercept link clicks
        const interceptLinks = () => {
            const links = document.querySelectorAll('a'); // Select all anchor tags
            links.forEach((link) => {
                const originalHref = link.getAttribute('href'); // Store the original href
                link.addEventListener('click', (e) => {
                    stopRecording()
                });
            });
        };

        interceptLinks(); // Call the function to add listeners to links

        return () => {
            // Cleanup the event listeners on component unmount
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [history]); // eslint-disable-line react-hooks/exhaustive-deps


    //in back button off all recordings...
    useEffect(() => {
        const handlePopState = (event) => {
            if (event.state) {
                stopRecording()
            }
        };
        // Listen for popstate event (triggered by back/forward buttons)
        window.addEventListener('popstate', handlePopState);
        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [history]); // eslint-disable-line react-hooks/exhaustive-deps




    useEffect(() => {

        StepShowFunction(setSpeakingStepNo, testNo);

    }, []) // eslint-disable-line react-hooks/exhaustive-deps





    //speaking-user-speech-recognation with OpenAI keys start function for mobile version
    const startRecording = async () => {
        console.log("hellow i am runne-----------------------------------------------------------")
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);

            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                    // console.log(event.data);
                }
            };

            mediaRecorderRef.current.onstop = () => {
                console.log("stopped...")
                const audioBlob = new Blob(audioChunksRef.current, {
                    type: isSafari ? "audio/mp4" : "audio/mp3",
                });
                sendAudioToWhisperAPI(audioBlob);
                audioChunksRef.current = [];
                stream.getTracks() // get all tracks from the MediaStream
                    .forEach(track => track.stop()); // stop each of them
                mediaRecorderRef.current = null
            };

            let timermain = mediaRecorderRef.current.start(isSafari ? 1000 : 0);
            console.log(timermain)
        } catch (error) {
            console.error("Error accessing microphone:", error);
        }
    };
    //speaking-user-speech-recognation with OpenAI keys Stop function
    const stopRecordingForOpenAIMethod = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
    };
    //speaking-user-speech-recognation with OpenAI keys send data to the wisper---------
    const sendAudioToWhisperAPI = async (audioBlob) => {
        console.log(audioBlob)
        const formData = new FormData();
        formData.append("file", audioBlob, `audio.mp3`);
        formData.append("model", "whisper-1");
        const base64Audio = await audioBlobToBase64(audioBlob);
        console.log(base64Audio)
        try {
            const response = await axios.post(
                `https://speech.googleapis.com/v1/speech:recognize?key=${googleAPIKey}`,
                {
                    config: {
                        encoding: 'WEBM_OPUS',
                        sampleRateHertz: 48000,
                        languageCode: 'en-US',
                        // enableAutomaticPunctuation: true,
                    },
                    audio: {
                        content: base64Audio,
                    },
                }
            );

            if (response.data.results) {
                response.data.results.map((mainData) => {
                    if (mainData.alternatives[0].transcript) {
                        settranscriptTextbyOpenAi((res) => res + mainData.alternatives[0].transcript + " " + " ");
                    }
                })

            }
        } catch (error) {
            console.error("Error transcribing audio:", error);
        }
    };


    function stsrSpeechRec() {
        record();
        customStartRecordingForGetuserAudioData()
    }



    var userSpeechMainData = "";

    //call this function after end of the conversation to get Scores from API..
    async function sendSpeakingtextToBackend(mainText) {
        console.log(mainText);
        //call this function for making user audio data to base 64 and save that into local IndexedDb storage...
        customStopRecordingForGetuserAudioData()


        // useReactMediaRecorder.stop();
        var sentData = {
            'inputs': mainText + "."  // extra full stop added because if corrections are not working yet this full stop will help to make scores
        }
        console.log(sentData)
        setisloading(true);
        console.log("Parvez text-finished..")
        axios.post(SPEAKING_POST_TO_GET_RESPONSE_USERDATA, sentData)
            .then((res) => {
                console.log(res)
                //clear timer that used when exam is running &  user not responding.
                clearInterval(StopPlay);
                StopPlay = null;

                setPassComment(true);
                setTimeout(() => {
                    setWaveTit(false);
                }, 4000);


                let FluencyAndCoherence = (Number(res.data.FluencyScore) + Number(res.data.CoherenceScore)) / 2;
                let LexicalResourceScore = Number(res.data.LexicalResourceScore);
                let GrammaticalRangeAccuracy = Number(res.data.GrammaticalRangeandAccuracyScore);
                //Pronanucation score make----
                let makePronanucationScor = (FluencyAndCoherence + LexicalResourceScore + GrammaticalRangeAccuracy) / 3
                console.log(makePronanucationScor)
                let pronounScore = makePronanucationScor.toFixed(1);
                let PronaunacationsResult = Math.round(pronounScore * 2) / 2


                //IeltsScore makeing-----------
                let makeIeltsScore = (FluencyAndCoherence + LexicalResourceScore + GrammaticalRangeAccuracy + PronaunacationsResult) / 4;
                console.log(makeIeltsScore)
                let RoundIelts = makeIeltsScore.toFixed(1);
                let totalIeltsScores = Math.round(RoundIelts * 2) / 2

                //save user result data , Speech ans data & step Number into the localhost below...
                localStorage.setItem("showSpeakingResult", JSON.stringify({
                    ieltsResult: totalIeltsScores,
                    FluencyAndCoherence: FluencyAndCoherence,
                    LexicalResourceScore: LexicalResourceScore,
                    GrammaticalRangeandAccuracyScore: GrammaticalRangeAccuracy,
                    PronaunacationsScore: PronaunacationsResult,
                    questionStepNumber: speakingStepsNo,
                    userSpeechAnsData: storeUserSpeechAns,
                    totalSpeechData: userSpeechMainData,
                    sectionNo: testNo
                }));
                let forSaveData = {
                    ieltsResult: totalIeltsScores,
                    FluencyAndCoherence: FluencyAndCoherence,
                    LexicalResourceScore: LexicalResourceScore,
                    GrammaticalRangeandAccuracyScore: GrammaticalRangeAccuracy,
                    PronaunacationsScore: PronaunacationsResult,
                    questionStepNumber: speakingStepsNo,
                    userSpeechAnsData: storeUserSpeechAns,
                    sectionNo: testNo
                }
                //save Question Steps color 
                localStorage.setItem("questionStepColorArr", JSON.stringify(storeQuesStepOkArray))

                stopRecording();
                axios({
                    method: "post",
                    url: SPEAKING_POST_FOR_SET_SCORES,
                    // "http://localhost:8080/api/user/SpeakingResults",

                    headers: {
                        "Authorization": `Bearer ${userMainToken}`,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        "username": userName,
                        "userEmail": userEmail,
                        "LexicalResourceScore": forSaveData.LexicalResourceScore || "",
                        "GrammaticalRangeandAccuracyScore": forSaveData.GrammaticalRangeandAccuracyScore || "",
                        "PronaunacationsScore": forSaveData.PronaunacationsScore,
                        "ieltsScore": forSaveData.ieltsResult || "",
                        "FluencyAndCoherence": forSaveData.FluencyAndCoherence,
                        "questionStepNumber": forSaveData.questionStepNumber,
                        "questionStepColors": storeQuesStepOkArray.toString(),
                        // "userSpeechAnsData": x.userSpeechAnsData,
                        "userTotalSpeech": userSpeechMainData,
                        "SectionName": testNo
                    },
                })
                    .then((res) => {
                        console.log(res.data);
                        //after getting the result make those variable empty below---
                        storeUserSpeechAns = "";
                        storeQuesStepOkArray = []

                        history.push("/Speaking-Module/Speaking-Showing-Results");
                        // window.location.reload();
                        // stopRecording();
                        setisloading(false);

                    })
                    .catch((e) => {
                        console.log(e);
                        //after getting the result make those variable empty below---
                        storeUserSpeechAns = "";
                        storeQuesStepOkArray = []

                        history.push("/Speaking-Module/Speaking-Showing-Results");
                        // window.location.reload();
                        // stopRecording();
                        setisloading(false);
                    })

            })
            .catch((err) => {
                setisloading(false);
                alert("Server error please try again or wait for the server response..")
                console.log(err)
            });
    }

    const conditionsDependsOnUserSpeech = (StepNumber) => {
        let backGoundColor = "";
        if (StepNumber > 0) {
            if (userEveryAnsCount < 10) {
                backGoundColor = StepNumber + "red"
            } else if (userEveryAnsCount <= 18) {
                backGoundColor = StepNumber + "yellow"
            } else {
                backGoundColor = StepNumber + "green"
            }

        } else {
            backGoundColor = StepNumber + "green"
        }
        // setShowStepOk(oldArray => [backGoundColor, ...oldArray]);
        setShoeSpeakingResult(oldArray => [backGoundColor, ...oldArray]);
        storeQuesStepOkArray.push(backGoundColor);
        collectUserSpeechTime = 0
        userEveryAnsCount = 0;
    }





    // Mapping for test sections
    const testFunctions = {
        "Test1Sec1": Test1Sec1,
        "Test1Sec3": Test1Sec3,
        "Test2Sec1": Test2Sec1,
        "Test2Sec3": Test2Sec3,
        "Test3Sec1": Test3Sec1,
    };

    // Function to handle test calls
    async function checkingReplyofUser() {
        // If a valid test function exists for the testNo, call it
        const testFunction = testFunctions[testNo];

        if (testFunction) {
            await testFunction(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playSequentially, loadAudios, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend);
        } else {
            console.error('Test function not found for', testNo);
        }
    }





    var speakInterval = 0;

    const record = async () => {
        setTimeout(async () => {
            if (!isIconClicked) {
                stopRecording();
                return;
            }
    
            navigator.getUserMedia =
                navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia;
    
            try {
                const hasMediaSupport = navigator.getUserMedia || navigator.mediaDevices.getUserMedia;
                if (!hasMediaSupport) {
                    console.log("recording not supported");
                    return;
                }
    
                const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
                stream = mediaStream;
                console.log("Audio stream:", stream);
    
                const speech = hark(stream, {});
    
                speech.on("speaking", () => {
                    setMakeWave(true);
                    setPlayAudio(false);
                    console.log("Speaking!..............");
                    set_not_res_audio_str(false);
                    clearTimeout(timeoutSpeechBreak);
    
                    if (globalSpeakingState === 'ExaminerAudioEnd') {
                        setSpeakingState('You are Speaking...');
                        if (StopPlay) clearInterval(StopPlay);
                        StopPlay = null;
                        doubleNotSpeaking = false;
                        speakInterval = 0;
                        console.log("speakInterval reset to", speakInterval);
                    }
                });
    
                speech.on("stopped_speaking", () => {
                    console.log("not ---- Speaking!..............");
    
                    if (isMobile && checkStatusForSpeechMethod) {
                        stopRecordingForOpenAIMethod();
                        console.log("Stopped OpenAI recording (mobile)");
                    }
    
                    setMakeWave(false);
    
                    setTimeout(() => {
                        if (mediaRecorderRef.current === null && isMobile && checkStatusForSpeechMethod) {
                            startRecording();
                            console.log("Started new recording...");
                        }
                    }, 10);
    
                    if (!doubleNotSpeaking && globalSpeakingState === 'ExaminerAudioEnd') {
                        clearTimeout(timeoutSpeechBreak);
                        timeoutSpeechBreak = setTimeout(() => {
                            if (isMobile) settranscriptTextbyOpenAi("");
    
                            clearInterval(collectUserTime);
    
                            const transcript = document.getElementById('transcriptText').textContent;
                            if (transcript !== "") {
                                globalSpeakingState = 'UsersSpeechProcessing';
                                setShowWave(false);
    
                                const wordCount = transcript.trim().split(/\s+/).length;
                                userEveryAnsCount = wordCount;
    
                                const question = document.getElementById("getQuestionData").textContent;
                                const cleanedAnswer = transcript.split(" ").filter(e => e !== "");
    
                                userSpeechMainData += `Question: ${question}~`;
                                userSpeechMainData += `Answer: ${transcript}~`;
                                storeUserSpeechAns += transcript;
                                recordedText += transcript;
    
                                checkingReplyofUser();
    
                                setSpeakingState('Waiting for examiners speech...');
                            }
                        }, 3000);
    
                        console.log("Not Speaking second time");
                    }
    
                    doubleNotSpeaking = true;
                });
    
                await checkingReplyofUser();
    
            } catch (error) {
                console.error("Error while recording:", error);
                setShowPerPopUp(true);
            }
        }, 500);
    };
    



    //for stor recording...when user click on stop clicking button....   
    const stopRecording = async () => {
        if (currentAudio) { currentAudio.pause(); }
        setSpeakingState('Play to start..');
        stream.getTracks() // get all tracks from the MediaStream
            .forEach(track => track.stop()); // stop each of them
        setfirstplay(false);
        clearInterval(timeoutSpeechBreak);
        clearInterval(StopPlay);
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                stream.getTracks().forEach(track => track.stop()); // Stop all media tracks
                console.log("All media tracks stopped.");
            })
            .catch(error => console.warn("No active media to stop:", error));
        customStopRecordingForGetuserAudioData()
        //for mobile media recorder offing...
        mediaRecorderRef.current == null
    };





    function examinerSpeakProcessStart() {
        globalSpeakingState = 'ExaminerSpeechProcessing'

        if (mediaRecorderRef.current != null && isMobile) {
            stopRecordingForOpenAIMethod();
        };
        checkStatusForSpeechMethod = false

    }

    // Examiner audio start
    window.onAudionStartGlobal = function () {
        globalSpeakingState = 'ExaminerAudioStart';
    };

    //funtion for when waiting for user speech----------------
    window.onAudionEndGlobal = function () {
        if (isMobile) {
            startRecording();
        }
        checkStatusForSpeechMethod = true

        globalSpeakingState = 'ExaminerAudioEnd'
        setShowWave(true);
        setPlayAudio(true);
        if (StopPlay == null) {
            let speakMainTimer = 0;
            StopPlay = setInterval(function () {
                speakMainTimer++;
                console.log(speakMainTimer)
                if (speakMainTimer == 20) {
                    set_not_res_audio_str(true);
                    console.log("Warningn message...")
                }
                if (speakMainTimer === 30) {
                    console.log("Leaving messages...");
                    stopRecording();
                    history.push("/Speaking-Module/Speaking-Tests-Cards");

                }
            }, 1000);
        }

        collectUserTime = setInterval(function () {
            collectUserSpeechTime = collectUserSpeechTime + 1
        }, 1000);

    };





    return (
        <section className="appie-hero-area click-Speaking relative ">

            {/* Examiner Speech-------- */}
            <div className="w-full mt-[-10px] grid  justify-center gap-0 h-auto" >
                <div className=" w-[90vw] sm:w-[500px]  min-h-[100px] max-h-auto rounded box-border">
                    <div className={`${showWave ? "removeBorder" : "bubble"}`}>
                        <div className={`${showWave ? "removeChildBorder" : "bubble-bottom-left"}`}></div>
                        {/* contentEditable */}
                        {isIconClicked ? (
                            <div className="grid grid-cols-1 gap-[7px]">
                                <div className={`flex ${forQuestionHide ? "justify-between" : "justify-end"}  align-bottom w-full`}>
                                    {
                                        forQuestionHide && <p className=" text-[13px] sm:text-[15px] text-black" id="getQuestionData">{SQuestion} </p>
                                    }
                                    <button className="p-2 text-center border-1 border-gray-400 rounded-[20px] bg-blue-500 text-white w-auto h-[30px] text-[8px] translate-y-[-4px]"
                                        onClick={() => { setForQuestionHide(!forQuestionHide) }}
                                    >
                                        {
                                            forQuestionHide ? " Hide" : "Show"
                                        }

                                    </button>
                                </div>
                                {
                                    showWave && (
                                        <div className="showAnsStyling">
                                            <div className="mb-2 mt-[-4px] underline text-blue-500 border-none border-2 border-b-blue-700 mr-2 font-bold">Sample Answer</div>
                                            <p className="font-bold text-justify">
                                                {sampleAns[0]} <br /> <br />
                                            </p>
                                        </div>
                                    )
                                }
                            </div>
                        ) : (
                            <p className="Bubble-text text-[13px] sm:text-[15px]
                            font-bold text-center text-black">
                                Please Tap the play button for starting conversation
                            </p>

                        )
                        }
                        {
                            !isMobile && (
                                <div className="bubble-Image absolute left-[-145px] bottom-[-150px] h-[180px] w-[200px]">
                                    {
                                        !SpeakingState.includes("You are Speaking") ?
                                            <Image className="w-full h-full" alt="speaking Image-1" src={Speak1} /> :
                                            <Image className="w-[70%] h-[70%] rounded-full" alt="speaking Image-1" src={Speak2} />
                                    }
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>




            <div className=" w-full flex justify-center mt-[40px] mb-[30px]">
                <div className=" w-[90vw] grid justify-center align-middle sm:w-[500px] h-[100px] rounded ">
                    <div className="grid justify-center w-full gap-2 SpeakingClickPop ">
                        {audioRefs.map((_, index) => (
                            <audio
                                ref={audioRefs[index]}
                                key={`audio-player-${index}`}  // Use a more descriptive key
                                controls={false}  // Disabling controls, assuming you want programmatic control
                            ></audio>
                        ))}

                        <div
                            onClick={() => {
                                isIconClicked = !isIconClicked;
                                stsrSpeechRec()
                            }}
                            role="button"
                            className="SpeakingIConsDiv "
                        >
                            {isIconClicked ? <i className="fas fa-pause text-blue-500" /> : <i className="fas fa-play text-blue-500" />}
                        </div>

                    </div>
                    <div id={'SpeakingState'} className=" mt-3 text-center
                     font-bold  w-[200px] p-1 text-[17px] border-1 border-black rounded  text-blue-600">
                        {SpeakingState}
                    </div>
                </div>

            </div> <br />


            {/* User Speech design */}
            <div className="w-full grid  justify-center gap-0 mt-3  h-auto  box-border " >
                <div className=" w-[90vw] sm:w-[500px] bg-white p-2 min-h-[80px] max-h-[350px] overflow-auto box-border rounded-[16px] grid">
                    <div className="w-full m-auto">
                        <div className="">

                            <div className={`w-full flex justify-center align-middle mb-1 ${showWave ? "visible" : "invisible"}`}>
                                <i><GiOldMicrophone className="text-[35px]" /></i>
                                {
                                    makeWave ? (
                                        <div className="center_div ml-0 sm:ml-[-17px]">
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                            <div className="wave"></div>
                                        </div>
                                    ) : (
                                        <div className="center_div ml-0 sm:ml-[-19px]">
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                            <div className="wave_next"></div>
                                        </div>
                                    )
                                }
                            </div>

                            <div className={`w-full pl-3 pr-3 flex ${showWave ? "mb-1" : "translate-y-[-7px]"}`}>
                                <div className={`w-[21px] h-[21px] rounded-[50%] ${showWave ? "bg-red-500" : "bg-gray-400"} mr-[13px] mt-[-10px]`}></div>
                                <div className="w-full h-[2px] bg-gray-500"></div>
                            </div>
                            <div id={'transcriptText'} className="p-1 mt-1 w-full text-justify">
                                {isMobile && (transcriptTextbyOpenAi && transcriptTextbyOpenAi)}
                                {!isMobile && (transcript && transcript)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Play audio by the help of state change when examiner end his speech */}
            {
                playAudio && (
                    <div className="w-full flex justify-center invisible">
                        <audio src={audioPlaySound} controls autoPlay></audio>
                    </div>
                )
            }
            {/* Play audio when user do not talking..*/}
            {
                not_res_audio_str && (
                    <div className="w-full flex justify-center invisible">
                        <audio src={Not_res_audio} controls autoPlay></audio>
                    </div>
                )
            }

        </section>

    );
}

export default ClickSpeaking;


















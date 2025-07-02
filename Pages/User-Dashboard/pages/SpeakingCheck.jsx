"use client"
import React, { useEffect, useState } from 'react';
import { useStateContext } from '@/contexts/ContextProvider';
import { useRouter } from 'next/navigation';
import CountrySelect from '../../Payments/CountrySelect';
import { CiPlay1 } from "react-icons/ci";
import "./Style.css"
import Test_card from '../DComponents/Speaking-records/test-card';


//indexedDB database creating....
let windowIndexedDB;
const createCollectionsInIndexesDB = () => {
    //connect the indexDB for storing data -----------------------
    //prefixes of implementation that we want to test
    windowIndexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    //prefixes of window.IDB objects
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

    if (!windowIndexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
    }

    // var db;
    var request = windowIndexedDB.open("newDatabase", 2);

    request.onerror = function (event) {
        console.log("error: ", event);
    };

    request.onupgradeneeded = function (event) {
        var db = request.result;
        // var objectStore = db.createObjectStore("employee", {
        //     keyPath: "id"
        // });
        if (!db.objectStoreNames.contains("userData")) {
            db.createObjectStore("userData", {
                keyPath: "ID",
            }
            )
        }
        if (!db.objectStoreNames.contains("userSpeech")) {
            db.createObjectStore("userSpeech", {
                keyPath: "ID",
            }
            )
        }
        if (!db.objectStoreNames.contains("showDataInResult")) {
            db.createObjectStore("showDataInResult", {
                keyPath: "ID",
            }
            )
        }

    }
    request.onsuccess = function (event) {
        console.log("success Database created... ");
    };

}



function SpeakingCheck() {
    const history = useRouter();
    //localstorage sttaes....
    const [getCountry, setgetCountry] = useState("");
    const [userEmail, setUserEmail] = useState("")

    const [audioNo, setAudioNo] = useState();
    const [ShowCard1, setShowCard1] = useState(false);
    const [ShowCard2, setShowCard2] = useState(false);
    const [ShowCard3, setShowCard3] = useState(false);
    const [ShowCard4, setShowCard4] = useState(false);
    const [ShowCard5, setShowCard5] = useState(false);
    const [ShowCard6, setShowCard6] = useState(false);
    const [ShowCard7, setShowCard7] = useState(false);
    const [ShowCard8, setShowCard8] = useState(false);
    const [ShowCard9, setShowCard9] = useState(false);
    const [ShowCard10, setShowCard10] = useState(false);
    const [ShowCard11, setShowCard11] = useState(false);
    const [ShowCard12, setShowCard12] = useState(false);
    const [ShowCard13, setShowCard13] = useState(false);
    const [ShowCard14, setShowCard14] = useState(false);
    const [ShowCard15, setShowCard15] = useState(false);
    const [ShowCard16, setShowCard16] = useState(false);
    const [ShowCard17, setShowCard17] = useState(false);
    const [ShowCard18, setShowCard18] = useState(false);
    const [ShowCard19, setShowCard19] = useState(false);
    const [ShowCard20, setShowCard20] = useState(false);
    const [ShowCard21, setShowCard21] = useState(false);
    const [ShowCard22, setShowCard22] = useState(false);
    const [ShowCard23, setShowCard23] = useState(false);
    const [ShowCard24, setShowCard24] = useState(false);
    const [ShowCard25, setShowCard25] = useState(false);
    const [ShowCard26, setShowCard26] = useState(false);
    const [ShowCard27, setShowCard27] = useState(false);
    const [ShowCard28, setShowCard28] = useState(false);
    const [ShowCard29, setShowCard29] = useState(false);
    const [ShowCard30, setShowCard30] = useState(false);
    const [ShowCard31, setShowCard31] = useState(false);
    const [ShowCard32, setShowCard32] = useState(false);
    const [ShowCard33, setShowCard33] = useState(false);
    const [ShowCard34, setShowCard34] = useState(false);
    const [ShowCard35, setShowCard35] = useState(false);
    const [ShowCard36, setShowCard36] = useState(false);
    const [ShowCard37, setShowCard37] = useState(false);
    const [ShowCard38, setShowCard38] = useState(false);
    const [ShowCard39, setShowCard39] = useState(false);
    const [ShowCard40, setShowCard40] = useState(false);




    //get all userAudioData from local-IndexedDb--& store on the state below--
    const [AllusersAudioData, setAllusersAudioData] = useState([]);
    const [AllusersSpeechDataSTR, setAllusersSpeechDataSTR] = useState([]);
    const [showingUserSpeechData, setShowingUserSpeechData] = useState([]);
    const [SelectCountry, setSelectCountry] = useState(false);

    const { setCurrentColor, setCurrentMode } = useStateContext();

    //end of importing....
    useEffect(() => {
        setUserEmail(localStorage.getItem('userEmail'));
        setgetCountry(localStorage.getItem("setCountry"));

    }, [])



    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);

        }
        createCollectionsInIndexesDB()
        setTimeout(() => {
            getAllUserAudioData();
            getAllUserSpeechgSTRData();
        }, 1000);
    }, []);



    const getAllUserAudioData = (event) => {
        let dbPromise = windowIndexedDB.open("newDatabase", 2);
        console.log("Getting-Console added...")
        dbPromise.onsuccess = () => {
            const db = dbPromise.result;
            const tx = db.transaction("userData", "readonly");
            const userData = tx.objectStore("userData");

            const users = userData.getAll();
            console.log(users)

            users.onsuccess = (query) => {
                let userAudios = query.srcElement.result
                console.log(userAudios)
                setAllusersAudioData(
                    userAudios.filter((item) => item.userEmail == localStorage.getItem('userEmail')));

            };
            users.onerror = (error) => {
                console.log("Error occured while getting initial data...")

            }

            tx.oncomplete = () => {
                db.close();
            }

        }
    }


    const generateTests = (testCount, sections) => {
        const result = {};
        for (let test = 1; test <= testCount; test++) {
            for (let sec = 1; sec <= sections; sec++) {
                const key = `Test${test}Sec${sec}`;
                result[key] = AllusersAudioData.filter(
                    (item) => item.ID === `${userEmail}Test${test}Sec${sec}`
                );
            }
        }
        return result;
    };

    // Generate variables for 40 tests, each with 3 sections
    const tests = generateTests(40, 3);

    // Assigning each dynamically created variable
    let Test1Sec1 = tests["Test1Sec1"], Test1Sec2 = tests["Test1Sec2"], Test1Sec3 = tests["Test1Sec3"];
    let Test2Sec1 = tests["Test2Sec1"], Test2Sec2 = tests["Test2Sec2"], Test2Sec3 = tests["Test2Sec3"];
    let Test3Sec1 = tests["Test3Sec1"], Test3Sec2 = tests["Test3Sec2"], Test3Sec3 = tests["Test3Sec3"];
    let Test4Sec1 = tests["Test4Sec1"], Test4Sec2 = tests["Test4Sec2"], Test4Sec3 = tests["Test4Sec3"];
    let Test5Sec1 = tests["Test5Sec1"], Test5Sec2 = tests["Test5Sec2"], Test5Sec3 = tests["Test5Sec3"];
    let Test6Sec1 = tests["Test6Sec1"], Test6Sec2 = tests["Test6Sec2"], Test6Sec3 = tests["Test6Sec3"];
    let Test7Sec1 = tests["Test7Sec1"], Test7Sec2 = tests["Test7Sec2"], Test7Sec3 = tests["Test7Sec3"];
    let Test8Sec1 = tests["Test8Sec1"], Test8Sec2 = tests["Test8Sec2"], Test8Sec3 = tests["Test8Sec3"];
    let Test9Sec1 = tests["Test9Sec1"], Test9Sec2 = tests["Test9Sec2"], Test9Sec3 = tests["Test9Sec3"];
    let Test10Sec1 = tests["Test10Sec1"], Test10Sec2 = tests["Test10Sec2"], Test10Sec3 = tests["Test10Sec3"];
    let Test11Sec1 = tests["Test11Sec1"], Test11Sec2 = tests["Test11Sec2"], Test11Sec3 = tests["Test11Sec3"];
    let Test12Sec1 = tests["Test12Sec1"], Test12Sec2 = tests["Test12Sec2"], Test12Sec3 = tests["Test12Sec3"];
    let Test13Sec1 = tests["Test13Sec1"], Test13Sec2 = tests["Test13Sec2"], Test13Sec3 = tests["Test13Sec3"];
    let Test14Sec1 = tests["Test14Sec1"], Test14Sec2 = tests["Test14Sec2"], Test14Sec3 = tests["Test14Sec3"];
    let Test15Sec1 = tests["Test15Sec1"], Test15Sec2 = tests["Test15Sec2"], Test15Sec3 = tests["Test15Sec3"];
    let Test16Sec1 = tests["Test16Sec1"], Test16Sec2 = tests["Test16Sec2"], Test16Sec3 = tests["Test16Sec3"];
    let Test17Sec1 = tests["Test17Sec1"], Test17Sec2 = tests["Test17Sec2"], Test17Sec3 = tests["Test17Sec3"];
    let Test18Sec1 = tests["Test18Sec1"], Test18Sec2 = tests["Test18Sec2"], Test18Sec3 = tests["Test18Sec3"];
    let Test19Sec1 = tests["Test19Sec1"], Test19Sec2 = tests["Test19Sec2"], Test19Sec3 = tests["Test19Sec3"];
    let Test20Sec1 = tests["Test20Sec1"], Test20Sec2 = tests["Test20Sec2"], Test20Sec3 = tests["Test20Sec3"];
    let Test21Sec1 = tests["Test21Sec1"], Test21Sec2 = tests["Test21Sec2"], Test21Sec3 = tests["Test21Sec3"];
    let Test22Sec1 = tests["Test22Sec1"], Test22Sec2 = tests["Test22Sec2"], Test22Sec3 = tests["Test22Sec3"];
    let Test23Sec1 = tests["Test23Sec1"], Test23Sec2 = tests["Test23Sec2"], Test23Sec3 = tests["Test23Sec3"];
    let Test24Sec1 = tests["Test24Sec1"], Test24Sec2 = tests["Test24Sec2"], Test24Sec3 = tests["Test24Sec3"];
    let Test25Sec1 = tests["Test25Sec1"], Test25Sec2 = tests["Test25Sec2"], Test25Sec3 = tests["Test25Sec3"];
    let Test26Sec1 = tests["Test26Sec1"], Test26Sec2 = tests["Test26Sec2"], Test26Sec3 = tests["Test26Sec3"];
    let Test27Sec1 = tests["Test27Sec1"], Test27Sec2 = tests["Test27Sec2"], Test27Sec3 = tests["Test27Sec3"];
    let Test28Sec1 = tests["Test28Sec1"], Test28Sec2 = tests["Test28Sec2"], Test28Sec3 = tests["Test28Sec3"];
    let Test29Sec1 = tests["Test29Sec1"], Test29Sec2 = tests["Test29Sec2"], Test29Sec3 = tests["Test29Sec3"];
    let Test30Sec1 = tests["Test30Sec1"], Test30Sec2 = tests["Test30Sec2"], Test30Sec3 = tests["Test30Sec3"];
    let Test31Sec1 = tests["Test31Sec1"], Test31Sec2 = tests["Test31Sec2"], Test31Sec3 = tests["Test31Sec3"];
    let Test32Sec1 = tests["Test32Sec1"], Test32Sec2 = tests["Test32Sec2"], Test32Sec3 = tests["Test32Sec3"];
    let Test33Sec1 = tests["Test33Sec1"], Test33Sec2 = tests["Test33Sec2"], Test33Sec3 = tests["Test33Sec3"];
    let Test34Sec1 = tests["Test34Sec1"], Test34Sec2 = tests["Test34Sec2"], Test34Sec3 = tests["Test34Sec3"];
    let Test35Sec1 = tests["Test35Sec1"], Test35Sec2 = tests["Test35Sec2"], Test35Sec3 = tests["Test35Sec3"];
    let Test36Sec1 = tests["Test36Sec1"], Test36Sec2 = tests["Test36Sec2"], Test36Sec3 = tests["Test36Sec3"];
    let Test37Sec1 = tests["Test37Sec1"], Test37Sec2 = tests["Test37Sec2"], Test37Sec3 = tests["Test37Sec3"];
    let Test38Sec1 = tests["Test38Sec1"], Test38Sec2 = tests["Test38Sec2"], Test38Sec3 = tests["Test38Sec3"];
    let Test39Sec1 = tests["Test39Sec1"], Test39Sec2 = tests["Test39Sec2"], Test39Sec3 = tests["Test39Sec3"];
    let Test40Sec1 = tests["Test40Sec1"], Test40Sec2 = tests["Test40Sec2"], Test40Sec3 = tests["Test40Sec3"];






    useEffect(() => {
        //make the audio tag sticky when user scroll the page-----
        window.addEventListener("scroll", function () {
            try {
                let audioEle = this.document.getElementById("audioFile");
                if (window.scrollY > 40) {
                    audioEle.classList.add("Sticky")
                    audioEle.classList.remove("WithoutSticky")
                }
                if (window.scrollY < 40) {
                    audioEle.classList.remove("Sticky");
                    audioEle.classList.add("WithoutSticky")
                }
            } catch (error) {
                // console.log("Error has been occoured..")
            }
        })
    }, [AllusersAudioData]);




    // console.log(AllusersAudioData)


    //check all values & if that value exist into the alluserAudioData matchable state will be true
    // & The matchable card will be show to the user...
    setTimeout(() => {
        if (AllusersAudioData[0]) {
            if (Test1Sec1[0] || Test1Sec2[0] || Test1Sec3[0]) {
                setShowCard1(true);
                // console.log("Test1- Something alerts")
            }
            if (Test2Sec1[0] || Test2Sec2[0] || Test2Sec3[0]
            ) {
                setShowCard2(true);
            }
            if (Test3Sec1[0] || Test3Sec2[0] || Test3Sec3[0]) {
                setShowCard3(true);
            }
            if (Test4Sec1[0] || Test4Sec2[0] || Test4Sec3[0]) {
                setShowCard4(true);
            }
            if (Test5Sec1[0] || Test5Sec2[0] || Test5Sec3[0]) {
                setShowCard5(true);
            }
            if (Test6Sec1[0] || Test6Sec2[0] || Test6Sec3[0]) {
                setShowCard6(true);
            }
            if (Test7Sec1[0] || Test7Sec2[0] || Test7Sec3[0]) {
                setShowCard7(true);
            }
            if (Test8Sec1[0] || Test8Sec2[0] || Test8Sec3[0]) {
                setShowCard8(true);
            }
            if (Test9Sec1[0] || Test9Sec2[0] || Test9Sec3[0]) {
                setShowCard9(true);
            }
            if (Test10Sec1[0] || Test10Sec2[0] || Test10Sec3[0]) {
                setShowCard10(true);
            }
            if (Test11Sec1[0] || Test11Sec2[0] || Test11Sec3[0]) {
                setShowCard11(true);
            }
            if (Test12Sec1[0] || Test12Sec2[0] || Test12Sec3[0]) {
                setShowCard12(true);
            }

            //test 13 - 20

            if (Test13Sec1[0] || Test13Sec2[0] || Test13Sec3[0]) {
                setShowCard13(true);
            }
            if (Test14Sec1[0] || Test14Sec2[0] || Test14Sec3[0]) {
                setShowCard14(true);
            }
            if (Test15Sec1[0] || Test15Sec2[0] || Test15Sec3[0]) {
                setShowCard15(true);
            }
            if (Test16Sec1[0] || Test16Sec2[0] || Test16Sec3[0]) {
                setShowCard16(true);
            }
            if (Test17Sec1[0] || Test17Sec2[0] || Test17Sec3[0]) {
                setShowCard17(true);
            }
            if (Test18Sec1[0] || Test18Sec2[0] || Test18Sec3[0]) {
                setShowCard18(true);
            }
            if (Test19Sec1[0] || Test19Sec2[0] || Test19Sec3[0]) {
                setShowCard19(true);
            }
            if (Test20Sec1[0] || Test20Sec2[0] || Test20Sec3[0]) {
                setShowCard20(true);
            }
            if (Test21Sec1[0] || Test21Sec2[0] || Test21Sec3[0]) {
                setShowCard21(true);
            }
            if (Test22Sec1[0] || Test22Sec2[0] || Test22Sec3[0]) {
                setShowCard22(true);
            }
            if (Test23Sec1[0] || Test23Sec2[0] || Test23Sec3[0]) {
                setShowCard23(true);
            }
            if (Test24Sec1[0] || Test24Sec2[0] || Test24Sec3[0]) {
                setShowCard24(true);
            }
            if (Test25Sec1[0] || Test25Sec2[0] || Test25Sec3[0]) {
                setShowCard25(true);
            }
            if (Test26Sec1[0] || Test26Sec2[0] || Test26Sec3[0]) {
                setShowCard26(true);
            }
            if (Test27Sec1[0] || Test27Sec2[0] || Test27Sec3[0]) {
                setShowCard27(true);
            }
            if (Test28Sec1[0] || Test28Sec2[0] || Test28Sec3[0]) {
                setShowCard28(true);
            }
            if (Test29Sec1[0] || Test29Sec2[0] || Test29Sec3[0]) {
                setShowCard29(true);
            }
            if (Test30Sec1[0] || Test30Sec2[0] || Test30Sec3[0]) {
                setShowCard30(true);
            }
            if (Test31Sec1[0] || Test31Sec2[0] || Test31Sec3[0]) {
                setShowCard31(true);
            }
            if (Test32Sec1[0] || Test32Sec2[0] || Test32Sec3[0]) {
                setShowCard32(true);
            }
            if (Test33Sec1[0] || Test33Sec2[0] || Test33Sec3[0]) {
                setShowCard33(true);
            }
            if (Test34Sec1[0] || Test34Sec2[0] || Test34Sec3[0]) {
                setShowCard34(true);
            }
            if (Test35Sec1[0] || Test35Sec2[0] || Test35Sec3[0]) {
                setShowCard35(true);
            }
            if (Test36Sec1[0] || Test36Sec2[0] || Test36Sec3[0]) {
                setShowCard36(true);
            }
            if (Test37Sec1[0] || Test37Sec2[0] || Test37Sec3[0]) {
                setShowCard37(true);
            }
            if (Test38Sec1[0] || Test38Sec2[0] || Test38Sec3[0]) {
                setShowCard38(true);
            }
            if (Test39Sec1[0] || Test39Sec2[0] || Test39Sec3[0]) {
                setShowCard39(true);
            }
            if (Test40Sec1[0] || Test40Sec2[0] || Test40Sec3[0]) {
                setShowCard40(true);
            }

        }

    }, 1500);


    // console.log(ShowCard1)


















    //play audio function -----
    function updateAudioForPlaySpeech(changePath) {
        console.log(changePath);
        const player = document.getElementsByTagName("audio")[0];
        player.pause();
        player.setAttribute('src', changePath);
        player.load();
        player.play();
    }







    // for showing the user  data by the help of the code below 
    // call this function to  store all data into a state;
    // then make break all the data from that state match all  data that which will be the perfect match ;
    //  after that break call a function which will be called into the button cliked ;
    // store the data into a state 
    // for showing to the user make a make function & show all array data to the user as like  the  UI 
    const getAllUserSpeechgSTRData = (event) => {
        let dbPromise = windowIndexedDB.open("newDatabase", 2);
        console.log("Getting-Console added...")
        dbPromise.onsuccess = () => {
            const db = dbPromise.result;
            const tx = db.transaction("userSpeech", "readonly");
            const userData = tx.objectStore("userSpeech");

            const users = userData.getAll();

            users.onsuccess = (query) => {
                let userSpeechSTR = query.srcElement.result
                console.log(userSpeechSTR)
                // console.log(userSpeechSTR);
                setAllusersSpeechDataSTR(
                    // userAudios.filter((item) => item.ID === userEmail + keys.filter((e) => e === item.testSections))
                    userSpeechSTR.filter((item) => item.userEmail == localStorage.getItem('userEmail')));

            };
            users.onerror = (error) => {
                console.log(error);
                console.log("Error occured while getting initial data...")

            }

            tx.oncomplete = () => {
                db.close();
            }

        }
    }



    // set alll user speech String dat by the  match of user selected test  number's (24/02/24);
    console.log(AllusersSpeechDataSTR)

    let SpeechSTRTest1Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test1Sec1");
    let SpeechSTRTest1Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test1Sec2");
    let SpeechSTRTest1Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test1Sec3");

    let SpeechSTRTest2Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test2Sec1");
    let SpeechSTRTest2Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test2Sec2");
    let SpeechSTRTest2Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test2Sec3");

    let SpeechSTRTest3Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test3Sec1");
    let SpeechSTRTest3Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test3Sec2");
    let SpeechSTRTest3Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test3Sec3");

    let SpeechSTRTest4Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test4Sec1");
    let SpeechSTRTest4Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test4Sec2");
    let SpeechSTRTest4Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test4Sec3");

    let SpeechSTRTest5Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test5Sec1");
    let SpeechSTRTest5Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test5Sec2");
    let SpeechSTRTest5Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test5Sec3");

    let SpeechSTRTest6Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test6Sec1");
    let SpeechSTRTest6Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test6Sec2");
    let SpeechSTRTest6Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test6Sec3");

    let SpeechSTRTest7Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test7Sec1");
    let SpeechSTRTest7Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test7Sec2");
    let SpeechSTRTest7Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test7Sec3");

    let SpeechSTRTest8Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test8Sec1");
    let SpeechSTRTest8Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test8Sec2");
    let SpeechSTRTest8Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test8Sec3");

    let SpeechSTRTest9Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test9Sec1");
    let SpeechSTRTest9Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test9Sec2");
    let SpeechSTRTest9Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test9Sec3");

    let SpeechSTRTest10Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test10Sec1");
    let SpeechSTRTest10Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test10Sec2");
    let SpeechSTRTest10Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test10Sec3");

    let SpeechSTRTest11Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test11Sec1");
    let SpeechSTRTest11Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test11Sec2");
    let SpeechSTRTest11Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test11Sec3");

    let SpeechSTRTest12Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test12Sec1");
    let SpeechSTRTest12Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test12Sec2");
    let SpeechSTRTest12Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test12Sec3");


    // test----------13 - 20 -------------------
    let SpeechSTRTest13Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test13Sec1");
    let SpeechSTRTest13Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test13Sec2");
    let SpeechSTRTest13Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test13Sec3");

    let SpeechSTRTest14Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test14Sec1");
    let SpeechSTRTest14Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test14Sec2");
    let SpeechSTRTest14Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test14Sec3");

    let SpeechSTRTest15Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test15Sec1");
    let SpeechSTRTest15Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test15Sec2");
    let SpeechSTRTest15Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test15Sec3");

    let SpeechSTRTest16Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test16Sec1");
    let SpeechSTRTest16Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test16Sec2");
    let SpeechSTRTest16Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test16Sec3");

    let SpeechSTRTest17Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test17Sec1");
    let SpeechSTRTest17Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test17Sec2");
    let SpeechSTRTest17Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test17Sec3");

    let SpeechSTRTest18Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test18Sec1");
    let SpeechSTRTest18Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test18Sec2");
    let SpeechSTRTest18Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test18Sec3");

    let SpeechSTRTest19Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test19Sec1");
    let SpeechSTRTest19Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test19Sec2");
    let SpeechSTRTest19Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test19Sec3");

    let SpeechSTRTest20Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test20Sec1");
    let SpeechSTRTest20Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test20Sec2");
    let SpeechSTRTest20Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test20Sec3");


    let SpeechSTRTest21Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test21Sec1");
    let SpeechSTRTest21Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test21Sec2");
    let SpeechSTRTest21Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test21Sec3");

    let SpeechSTRTest22Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test22Sec1");
    let SpeechSTRTest22Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test22Sec2");
    let SpeechSTRTest22Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test22Sec3");

    let SpeechSTRTest23Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test23Sec1");
    let SpeechSTRTest23Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test23Sec2");
    let SpeechSTRTest23Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test23Sec3");

    let SpeechSTRTest24Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test24Sec1");
    let SpeechSTRTest24Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test24Sec2");
    let SpeechSTRTest24Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test24Sec3");

    let SpeechSTRTest25Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test25Sec1");
    let SpeechSTRTest25Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test25Sec2");
    let SpeechSTRTest25Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test25Sec3");

    let SpeechSTRTest26Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test26Sec1");
    let SpeechSTRTest26Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test26Sec2");
    let SpeechSTRTest26Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test26Sec3");

    let SpeechSTRTest27Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test27Sec1");
    let SpeechSTRTest27Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test27Sec2");
    let SpeechSTRTest27Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test27Sec3");

    let SpeechSTRTest28Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test28Sec1");
    let SpeechSTRTest28Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test28Sec2");
    let SpeechSTRTest28Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test28Sec3");

    let SpeechSTRTest29Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test29Sec1");
    let SpeechSTRTest29Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test29Sec2");
    let SpeechSTRTest29Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test29Sec3");

    let SpeechSTRTest30Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test30Sec1");
    let SpeechSTRTest30Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test30Sec2");
    let SpeechSTRTest30Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test30Sec3");

    let SpeechSTRTest31Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test31Sec1");
    let SpeechSTRTest31Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test31Sec2");
    let SpeechSTRTest31Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test31Sec3");

    let SpeechSTRTest32Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test32Sec1");
    let SpeechSTRTest32Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test32Sec2");
    let SpeechSTRTest32Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test32Sec3");

    let SpeechSTRTest33Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test33Sec1");
    let SpeechSTRTest33Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test33Sec2");
    let SpeechSTRTest33Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test33Sec3");

    let SpeechSTRTest34Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test34Sec1");
    let SpeechSTRTest34Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test34Sec2");
    let SpeechSTRTest34Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test34Sec3");

    let SpeechSTRTest35Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test35Sec1");
    let SpeechSTRTest35Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test35Sec2");
    let SpeechSTRTest35Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test35Sec3");

    let SpeechSTRTest36Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test36Sec1");
    let SpeechSTRTest36Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test36Sec2");
    let SpeechSTRTest36Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test36Sec3");

    let SpeechSTRTest37Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test37Sec1");
    let SpeechSTRTest37Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test37Sec2");
    let SpeechSTRTest37Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test37Sec3");

    let SpeechSTRTest38Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test38Sec1");
    let SpeechSTRTest38Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test38Sec2");
    let SpeechSTRTest38Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test38Sec3");

    let SpeechSTRTest39Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test39Sec1");
    let SpeechSTRTest39Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test39Sec2");
    let SpeechSTRTest39Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test39Sec3");

    let SpeechSTRTest40Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test40Sec1");
    let SpeechSTRTest40Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test40Sec2");
    let SpeechSTRTest40Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test40Sec3");






    // function for showing the user data as a String
    const functionForShowingUserData = (userData) => {
        console.log(userData);
        let sentences = userData.split('~');
        setShowingUserSpeechData(sentences)
        console.log(sentences);
    }





    console.log(showingUserSpeechData)
    return (
        <>

            {/* Main-Work  invisible*/}
            {
                AllusersAudioData[0] ? (
                    <div className=''>
                        <h4 className='w-full text-center mt-[28px] sm:mt-[0px] mb-7 text-[20px] sm:text-[30px] text-blue-400 underline'>Your Speaking Test Records</h4>
                        <div id='audioFile' className='WithoutSticky'>
                            <div id='audioMain'>
                                <audio controls className='m-auto'></audio>
                                {
                                    audioNo && <p>{audioNo}</p>
                                }


                            </div>
                        </div>
                        <div className='flex justify-center align-middle w-full'>
                            {
                                showingUserSpeechData[0] && <div className='w-[95vw] sm:w-[500px] md:w-[800px] rounded border-2 border-gray-400 p-2 overflow-auto box-content text-center m-auto h-[400px] bg-white' id='properWord'>
                                    {
                                        showingUserSpeechData.map((items, index) => {
                                            return <div key={index} className={`mb-1 text-black text-justify  font-bold  overflow-auto ${items.match("Answer:") && "border-b-1 border-b-gray-400 first-letter:underline first-letter:text-2xl  first-letter:text-blue-900 first-letter:font-bold"} ${items.match("Question:") && " first-letter:underline first-letter:text-2xl  first-letter:text-red-900 first-letter:font-bold"}`} >
                                                {items}

                                            </div>
                                        })
                                    }
                                </div>
                            }
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-x-[20px] gap-y-[80px] p-[20px]">
                            {
                                ShowCard1 && (
                                    <Test_card
                                        testName={"1"}
                                        secVar1={Test1Sec1}
                                        secVar2={Test1Sec2}
                                        secVar3={Test1Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest1Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest1Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest1Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard2 && (
                                    <Test_card
                                        testName={"2"}
                                        secVar1={Test2Sec1}
                                        secVar2={Test2Sec2}
                                        secVar3={Test2Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest2Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest2Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest2Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard3 && (
                                    <Test_card
                                        testName={"3"}
                                        secVar1={Test3Sec1}
                                        secVar2={Test3Sec2}
                                        secVar3={Test3Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest3Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest3Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest3Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard4 && (
                                    <Test_card
                                        testName={"4"}
                                        secVar1={Test4Sec1}
                                        secVar2={Test4Sec2}
                                        secVar3={Test4Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest4Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest4Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest4Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard5 && (
                                    <Test_card
                                        testName={"5"}
                                        secVar1={Test5Sec1}
                                        secVar2={Test5Sec2}
                                        secVar3={Test5Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest5Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest5Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest5Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard6 && (
                                    <Test_card
                                        testName={"6"}
                                        secVar1={Test6Sec1}
                                        secVar2={Test6Sec2}
                                        secVar3={Test6Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest6Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest6Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest6Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard7 && (
                                    <Test_card
                                        testName={"7"}
                                        secVar1={Test7Sec1}
                                        secVar2={Test7Sec2}
                                        secVar3={Test7Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest7Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest7Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest7Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard8 && (
                                    <Test_card
                                        testName={"8"}
                                        secVar1={Test8Sec1}
                                        secVar2={Test8Sec2}
                                        secVar3={Test8Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest8Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest8Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest8Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard9 && (
                                    <Test_card
                                        testName={"9"}
                                        secVar1={Test9Sec1}
                                        secVar2={Test9Sec2}
                                        secVar3={Test9Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest9Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest9Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest9Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard10 && (
                                    <Test_card
                                        testName={"10"}
                                        secVar1={Test10Sec1}
                                        secVar2={Test10Sec2}
                                        secVar3={Test10Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest10Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest10Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest10Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard11 && (
                                    <Test_card
                                        testName={"11"}
                                        secVar1={Test11Sec1}
                                        secVar2={Test11Sec2}
                                        secVar3={Test11Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest11Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest11Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest11Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard12 && (
                                    <Test_card
                                        testName={"12"}
                                        secVar1={Test12Sec1}
                                        secVar2={Test12Sec2}
                                        secVar3={Test12Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest12Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest12Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest12Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard13 && (
                                    <Test_card
                                        testName={"13"}
                                        secVar1={Test13Sec1}
                                        secVar2={Test13Sec2}
                                        secVar3={Test13Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest13Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest13Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest13Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard14 && (
                                    <Test_card
                                        testName={"14"}
                                        secVar1={Test14Sec1}
                                        secVar2={Test14Sec2}
                                        secVar3={Test14Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest14Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest14Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest14Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard15 && (
                                    <Test_card
                                        testName={"15"}
                                        secVar1={Test15Sec1}
                                        secVar2={Test15Sec2}
                                        secVar3={Test15Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest15Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest15Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest15Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard16 && (
                                    <Test_card
                                        testName={"16"}
                                        secVar1={Test16Sec1}
                                        secVar2={Test16Sec2}
                                        secVar3={Test16Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest16Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest16Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest16Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard17 && (
                                    <Test_card
                                        testName={"17"}
                                        secVar1={Test17Sec1}
                                        secVar2={Test17Sec2}
                                        secVar3={Test17Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest17Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest17Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest17Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard18 && (
                                    <Test_card
                                        testName={"18"}
                                        secVar1={Test18Sec1}
                                        secVar2={Test18Sec2}
                                        secVar3={Test18Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest18Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest18Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest18Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard19 && (
                                    <Test_card
                                        testName={"19"}
                                        secVar1={Test19Sec1}
                                        secVar2={Test19Sec2}
                                        secVar3={Test19Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest19Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest19Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest19Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard20 && (
                                    <Test_card
                                        testName={"20"}
                                        secVar1={Test20Sec1}
                                        secVar2={Test20Sec2}
                                        secVar3={Test20Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest20Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest20Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest20Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard21 && (
                                    <Test_card
                                        testName={"21"}
                                        secVar1={Test21Sec1}
                                        secVar2={Test21Sec2}
                                        secVar3={Test21Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest21Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest21Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest21Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard22 && (
                                    <Test_card
                                        testName={"22"}
                                        secVar1={Test22Sec1}
                                        secVar2={Test22Sec2}
                                        secVar3={Test22Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest22Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest22Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest22Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard23 && (
                                    <Test_card
                                        testName={"23"}
                                        secVar1={Test23Sec1}
                                        secVar2={Test23Sec2}
                                        secVar3={Test23Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest23Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest23Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest23Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard24 && (
                                    <Test_card
                                        testName={"24"}
                                        secVar1={Test24Sec1}
                                        secVar2={Test24Sec2}
                                        secVar3={Test24Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest24Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest24Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest24Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard25 && (
                                    <Test_card
                                        testName={"25"}
                                        secVar1={Test25Sec1}
                                        secVar2={Test25Sec2}
                                        secVar3={Test25Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest25Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest25Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest25Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard26 && (
                                    <Test_card
                                        testName={"26"}
                                        secVar1={Test26Sec1}
                                        secVar2={Test26Sec2}
                                        secVar3={Test26Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest26Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest26Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest26Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard27 && (
                                    <Test_card
                                        testName={"27"}
                                        secVar1={Test27Sec1}
                                        secVar2={Test27Sec2}
                                        secVar3={Test27Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest27Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest27Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest27Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard28 && (
                                    <Test_card
                                        testName={"28"}
                                        secVar1={Test28Sec1}
                                        secVar2={Test28Sec2}
                                        secVar3={Test28Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest28Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest28Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest28Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard29 && (
                                    <Test_card
                                        testName={"29"}
                                        secVar1={Test29Sec1}
                                        secVar2={Test29Sec2}
                                        secVar3={Test29Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest29Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest29Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest29Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard30 && (
                                    <Test_card
                                        testName={"30"}
                                        secVar1={Test30Sec1}
                                        secVar2={Test30Sec2}
                                        secVar3={Test30Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest30Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest30Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest30Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard31 && (
                                    <Test_card
                                        testName={"31"}
                                        secVar1={Test31Sec1}
                                        secVar2={Test31Sec2}
                                        secVar3={Test31Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest31Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest31Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest31Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard32 && (
                                    <Test_card
                                        testName={"32"}
                                        secVar1={Test32Sec1}
                                        secVar2={Test32Sec2}
                                        secVar3={Test32Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest32Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest32Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest32Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard33 && (
                                    <Test_card
                                        testName={"33"}
                                        secVar1={Test33Sec1}
                                        secVar2={Test33Sec2}
                                        secVar3={Test33Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest33Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest33Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest33Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard34 && (
                                    <Test_card
                                        testName={"34"}
                                        secVar1={Test34Sec1}
                                        secVar2={Test34Sec2}
                                        secVar3={Test34Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest34Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest34Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest34Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard35 && (
                                    <Test_card
                                        testName={"35"}
                                        secVar1={Test35Sec1}
                                        secVar2={Test35Sec2}
                                        secVar3={Test35Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest35Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest35Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest35Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard36 && (
                                    <Test_card
                                        testName={"36"}
                                        secVar1={Test36Sec1}
                                        secVar2={Test36Sec2}
                                        secVar3={Test36Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest36Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest36Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest36Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard37 && (
                                    <Test_card
                                        testName={"37"}
                                        secVar1={Test37Sec1}
                                        secVar2={Test37Sec2}
                                        secVar3={Test37Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest37Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest37Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest37Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard38 && (
                                    <Test_card
                                        testName={"38"}
                                        secVar1={Test38Sec1}
                                        secVar2={Test38Sec2}
                                        secVar3={Test38Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest38Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest38Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest38Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard39 && (
                                    <Test_card
                                        testName={"39"}
                                        secVar1={Test39Sec1}
                                        secVar2={Test39Sec2}
                                        secVar3={Test39Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest39Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest39Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest39Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }
                            {
                                ShowCard40 && (
                                    <Test_card
                                        testName={"40"}
                                        secVar1={Test40Sec1}
                                        secVar2={Test40Sec2}
                                        secVar3={Test40Sec3}
                                        SpeechSTR_withSec1={SpeechSTRTest40Sec1}
                                        SpeechSTR_withSec2={SpeechSTRTest40Sec2}
                                        SpeechSTR_withSec3={SpeechSTRTest40Sec3}
                                        updateAudioForPlaySpeech={updateAudioForPlaySpeech}
                                        setAudioNo={setAudioNo}
                                        functionForShowingUserData={functionForShowingUserData}
                                    />
                                )
                            }

                        </div>

                    </div>
                ) : (
                    <div className="w-full h-[90vh] grid justify-center align-middle">
                        <div className="w-full sm:w-[400px] m-auto text-xl translate-y-[-31px]">
                            <p className="text-center mb-1">You did not give any<span className="text-2xl ml-2 mr-2  text-red-500">test</span> yet</p>
                            <p className="text-green-400 underline text-center hover:text-blue-400 cursor-pointer"
                                onClick={() => { history.push("/SpeakingPage") }}
                            >Go for test</p>

                        </div>
                    </div>
                )
            }



            {/* for select the user Country.... */}
            {
                SelectCountry && (<CountrySelect setSelectCountry={setSelectCountry} />)
            }

        </>


    )
}

export default SpeakingCheck

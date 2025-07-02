"use client"
import React, { useEffect, useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css'
import '../TestAllStyles/ReadingPageStyle.css'
import "../TestAllStyles/Panel1All.css";
import { isMobile } from "react-device-detect";

import { BsFillPatchQuestionFill } from "react-icons/bs";
import { LiaReadme } from "react-icons/lia";
// all Actual-tests Components--------------->
//const Test1Panel2_Page1 = dynamic(() => import('../All-Tests/Actual-all-tests/Test1/Panel2_Page1'), { ssr: false });
//test1---
import Test1Panel1_Page1 from "../All-Tests/Actual-all-tests/Test1/Panel1_Page1";
import Test1Panel1_Page2 from "../All-Tests/Actual-all-tests/Test1/Panel1_Page2";
import Test1Panel2_Page1 from "../All-Tests/Actual-all-tests/Test1/Panel2_Page1";
import Test1Panel2_Page2 from "../All-Tests/Actual-all-tests/Test1/Panel2_Page2";
//test-2-----
import Test2Panel1_Page1 from "../All-Tests/Actual-all-tests/Test2/Panel1_Page1";
import Test2Panel1_Page2 from "../All-Tests/Actual-all-tests/Test2/Panel1_Page2";
import Test2Panel2_Page1 from "../All-Tests/Actual-all-tests/Test2/Panel2_Page1";
import Test2Panel2_Page2 from "../All-Tests/Actual-all-tests/Test2/Panel2_Page2";
//test-3-----
import Test3Panel1_Page1 from "../All-Tests/Actual-all-tests/Test3/Panel1_Page1";
import Test3Panel1_Page2 from "../All-Tests/Actual-all-tests/Test3/Panel1_Page2";
import Test3Panel2_Page1 from "../All-Tests/Actual-all-tests/Test3/Panel2_Page1";
import Test3Panel2_Page2 from "../All-Tests/Actual-all-tests/Test3/Panel2_Page2"
//test-4-----
import Test4Panel1_Page1 from "../All-Tests/Actual-all-tests/Test4/Panel1_Page1";
import Test4Panel1_Page2 from "../All-Tests/Actual-all-tests/Test4/Panel1_Page2";
import Test4Panel2_Page1 from "../All-Tests/Actual-all-tests/Test4/Panel2_Page1";
import Test4Panel2_Page2 from "../All-Tests/Actual-all-tests/Test4/Panel2_Page2"

//test-5-----
import Test5Panel1Page1 from "../All-Tests/Actual-all-tests/Test5/Panel1_Page1";
import Test5Panel1Page2 from "../All-Tests/Actual-all-tests/Test5/Panel1_Page2"
import Test5Panel2 from "../All-Tests/Actual-all-tests/Test5/Panel2";
import Test5Panel2Question2 from "../All-Tests/Actual-all-tests/Test5/Panel2Q_2";

//test-6-----
import Test6Panel1Page1 from "../All-Tests/Actual-all-tests/Test6/Panel1_Page1";
import Test6Panel1Page2 from "../All-Tests/Actual-all-tests/Test6/Panel1_Page2"
import Test6Panel2 from "../All-Tests/Actual-all-tests/Test6/Panel2";
import Test6Panel2Question2 from "../All-Tests/Actual-all-tests/Test6/Panel2Q_2";

//test-7-----
import Test7Panel1Page1 from "../All-Tests/Actual-all-tests/Test7/Panel1_Page1";
import Test7Panel1Page2 from "../All-Tests/Actual-all-tests/Test7/Panel1_Page2";
import Test7Panel2 from "../All-Tests/Actual-all-tests/Test7/Panel2";
import Test7Panel2Question2 from "../All-Tests/Actual-all-tests/Test7/Panel2Q_2";
//test-8-----
import Test8Panel1Page1 from "../All-Tests/Actual-all-tests/Test8/Panel1_Page1";
import Test8Panel1Page2 from "../All-Tests/Actual-all-tests/Test8/Panel1_Page2"
import Test8Panel2 from "../All-Tests/Actual-all-tests/Test8/Panel2";
import Test8Panel2Question2 from "../All-Tests/Actual-all-tests/Test8/Panel2Q_2";

//test-9-----
import Test9Panel1_Page1 from "../All-Tests/Actual-all-tests/Test9/Panel1_Page1";
import Test9Panel1_Page2 from "../All-Tests/Actual-all-tests/Test9/Panel1_Page2";
import Test9Panel2_Page1 from "../All-Tests/Actual-all-tests/Test9/Panel2_Page1";
import Test9Panel2_Page2 from "../All-Tests/Actual-all-tests/Test9/Panel2_Page2";
//test-10-----
import Test10Panel1_Page1 from "../All-Tests/Actual-all-tests/Test10/Panel1_Page1";
import Test10Panel1_Page2 from "../All-Tests/Actual-all-tests/Test10/Panel1_Page2";
import Test10Panel2_Page1 from "../All-Tests/Actual-all-tests/Test10/Panel2_Page1";
import Test10Panel2_Page2 from "../All-Tests/Actual-all-tests/Test10/Panel2_Page2"
//test-11-----
import Test11Panel1_Page1 from "../All-Tests/Actual-all-tests/Test11/Panel1_Page1";
import Test11Panel1_Page2 from "../All-Tests/Actual-all-tests/Test11/Panel1_Page2";
import Test11Panel2_Page1 from "../All-Tests/Actual-all-tests/Test11/Panel2_Page1";
import Test11Panel2_Page2 from "../All-Tests/Actual-all-tests/Test11/Panel2_Page2"
//test-12-----
import Test12Panel1_Page1 from "../All-Tests/Actual-all-tests/Test12/Panel1_Page1";
import Test12Panel1_Page2 from "../All-Tests/Actual-all-tests/Test12/Panel1_Page2";
import Test12Panel2_Page1 from "../All-Tests/Actual-all-tests/Test12/Panel2";
import Test12Panel2_Page2 from "../All-Tests/Actual-all-tests/Test12/Panel2Q_2";
//test-13-----




// all Cambridge-tests Components--------------->
//test-19-----
import Cambidge_19_Test1_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test1/Panel1_Page1";
import Cambidge_19_Test1_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test1/Panel1_Page2";
import Cambidge_19_Test1_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test1/Panel2_Page1";
import Cambidge_19_Test1_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test1/Panel2_Page2";

import Cambidge_19_Test2_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test2/Panel1_Page1";
import Cambidge_19_Test2_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test2/Panel1_Page2";
import Cambidge_19_Test2_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test2/Panel2_Page1";
import Cambidge_19_Test2_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test2/Panel2_Page2";

import Cambidge_19_Test3_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test3/Panel1_Page1";
import Cambidge_19_Test3_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test3/Panel1_Page2";
import Cambidge_19_Test3_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test3/Panel2_Page1";
import Cambidge_19_Test3_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test3/Panel2_Page2";

import Cambidge_19_Test4_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test4/Panel1_Page1";
import Cambidge_19_Test4_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test4/Panel1_Page2";
import Cambidge_19_Test4_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test4/Panel2_Page1";
import Cambidge_19_Test4_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-19-Test4/Panel2_Page2";


//test-18-----
import Cambidge_18_Test1_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test1/Panel1_Page1";
import Cambidge_18_Test1_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test1/Panel1_Page2";
import Cambidge_18_Test1_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test1/Panel2_Page1";
import Cambidge_18_Test1_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test1/Panel2_Page2"

import Cambidge_18_Test2_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test2/Panel1_Page1";
import Cambidge_18_Test2_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test2/Panel1_Page2";
import Cambidge_18_Test2_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test2/Panel2_Page1";
import Cambidge_18_Test2_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test2/Panel2_Page2"

import Cambidge_18_Test3_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test3/Panel1_Page1";
import Cambidge_18_Test3_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test3/Panel1_Page2";
import Cambidge_18_Test3_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test3/Panel2_Page1";
import Cambidge_18_Test3_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test3/Panel2_Page2"

import Cambidge_18_Test4_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test4/Panel1_Page1";
import Cambidge_18_Test4_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test4/Panel1_Page2";
import Cambidge_18_Test4_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test4/Panel2_Page1";
import Cambidge_18_Test4_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-18-Test4/Panel2_Page2"

//test-17-----
import Cambidge_17_Test1_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test1/Panel1_Page1";
import Cambidge_17_Test1_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test1/Panel1_Page2";
import Cambidge_17_Test1_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test1/Panel2_Page1";
import Cambidge_17_Test1_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test1/Panel2_Page2"

import Cambidge_17_Test2_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test2/Panel1_Page1";
import Cambidge_17_Test2_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test2/Panel1_Page2";
import Cambidge_17_Test2_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test2/Panel2_Page1";
import Cambidge_17_Test2_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test2/Panel2_Page2"

import Cambidge_17_Test3_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test3/Panel1_Page1";
import Cambidge_17_Test3_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test3/Panel1_Page2";
import Cambidge_17_Test3_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test3/Panel2_Page1";
import Cambidge_17_Test3_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test3/Panel2_Page2"

import Cambidge_17_Test4_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test4/Panel1_Page1";
import Cambidge_17_Test4_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test4/Panel1_Page2";
import Cambidge_17_Test4_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test4/Panel2_Page1";
import Cambidge_17_Test4_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-17-Test4/Panel2_Page2"


//test-16-----
import Cambidge_16_Test1_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test1/Panel1_Page1";
import Cambidge_16_Test1_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test1/Panel1_Page2";
import Cambidge_16_Test1_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test1/Panel2_Page1";
import Cambidge_16_Test1_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test1/Panel2_Page2"

import Cambidge_16_Test2_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test2/Panel1_Page1";
import Cambidge_16_Test2_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test2/Panel1_Page2";
import Cambidge_16_Test2_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test2/Panel2_Page1";
import Cambidge_16_Test2_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test2/Panel2_Page2"

import Cambidge_16_Test3_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test3/Panel1_Page1";
import Cambidge_16_Test3_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test3/Panel1_Page2";
import Cambidge_16_Test3_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test3/Panel2_Page1";
import Cambidge_16_Test3_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test3/Panel2_Page2"

import Cambidge_16_Test4_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test4/Panel1_Page1";
import Cambidge_16_Test4_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test4/Panel1_Page2";
import Cambidge_16_Test4_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test4/Panel2_Page1";
import Cambidge_16_Test4_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-16-Test4/Panel2_Page2"



//test-15-----
import Cambidge_15_Test1_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test1/Panel1_Page1";
import Cambidge_15_Test1_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test1/Panel1_Page2";
import Cambidge_15_Test1_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test1/Panel2_Page1";
import Cambidge_15_Test1_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test1/Panel2_Page2"

import Cambidge_15_Test2_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test2/Panel1_Page1";
import Cambidge_15_Test2_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test2/Panel1_Page2";
import Cambidge_15_Test2_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test2/Panel2_Page1";
import Cambidge_15_Test2_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test2/Panel2_Page2"

import Cambidge_15_Test3_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test3/Panel1_Page1";
import Cambidge_15_Test3_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test3/Panel1_Page2";
import Cambidge_15_Test3_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test3/Panel2_Page1";
import Cambidge_15_Test3_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test3/Panel2_Page2"

import Cambidge_15_Test4_P1_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test4/Panel1_Page1";
import Cambidge_15_Test4_P1_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test4/Panel1_Page2";
import Cambidge_15_Test4_P2_Q1 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test4/Panel2_Page1";
import Cambidge_15_Test4_P2_Q2 from "../All-Tests/Cambridge-all-tests/Cambridge-15-Test4/Panel2_Page2"




// end importing....... 





function Reading({ handleChange, AnswersData, UserData, testName, RightAnswers }) {
    // const { id } = useParams();
    // console.log(id)
    // match text by localStorage & show it's panels
    const [moduelNo, setmoduelNo] = useState("");

    const [Panelsizes, setPanelSizes] = useState([100, '8%', 'auto',]);

    // for Change Desktop Sizes Panels Pages 
    const [forPage1, setforPage1] = useState(true);
    // for Mobile Sizes states-----
    const [mobilePanel1Pages, setMobilePanel1Page1] = useState(true);
    const [MobilePanel2Pages, setPanel2Pages] = useState(true)
    const [ActivePanels, setActivePanels] = useState(true)
    const [passage1Scroll, setPassage1Scroll] = useState(0)
    const [question1Scroll, setQuestion1Scroll] = useState(0)
    const [passage2Scroll, setPassage2Scroll] = useState(0)
    const [question2Scroll, setQuestion2Scroll] = useState(0)

    //use effect..
    useEffect(() => {
        setmoduelNo(localStorage.getItem("moduleNo"))
    }, [])





    // functions for Mobile Devices---------------->>
    const Mobilepanel1Functions = () => {
        if (mobilePanel1Pages) {

            setPassage1Scroll(getYPosition());
            document.documentElement.scrollTop = question1Scroll;
        }
        else {

            setQuestion1Scroll(getYPosition());
            document.documentElement.scrollTop = passage1Scroll;
        }

        setMobilePanel1Page1(!mobilePanel1Pages)

    }
    const Mobilepanel2Functions = () => {
        if (MobilePanel2Pages) {

            setPassage2Scroll(getYPosition());
            document.documentElement.scrollTop = question2Scroll;
        }
        else {

            setQuestion2Scroll(getYPosition());
            document.documentElement.scrollTop = passage2Scroll;
        }
        setPanel2Pages(!MobilePanel2Pages)
    }
    const ClickActivePanels = (x) => {
        setActivePanels(!ActivePanels)
    }



    function getYPosition() {
        var top = window.pageYOffset || document.documentElement.scrollTop
        return top;
    }

    // console.log(getYPosition())




    //main rendering-----
    return (
        <div className='mainContainer' id={'parentPanel'} >
            {
                isMobile ? (
                    <section id={'innersection'} className="pb-[120px]">
                        <div className='p-4' style={{ display: ActivePanels ? "initial" : "none" }}>
                            <div style={{ display: mobilePanel1Pages ? "initial" : "none" }} >
                                {moduelNo === "1" && <Test1Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "2" && <Test2Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "3" && <Test3Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "4" && <Test4Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "5" && <Test5Panel1Page1 AnswersData={AnswersData} />}
                                {moduelNo === "6" && <Test6Panel1Page1 AnswersData={AnswersData} />}
                                {moduelNo === "7" && <Test7Panel1Page1 AnswersData={AnswersData} />}
                                {moduelNo === "8" && <Test8Panel1Page1 AnswersData={AnswersData} />}
                                {moduelNo === "9" && <Test9Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "10" && <Test10Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "11" && <Test11Panel1_Page1 AnswersData={AnswersData} />}
                                {moduelNo === "12" && <Test12Panel1_Page1 AnswersData={AnswersData} />}

                                {/* Cambridge-allPages */}
                                {testName === "Cambridge-19-Test1" && <Cambidge_19_Test1_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-19-Test2" && <Cambidge_19_Test2_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-19-Test3" && <Cambidge_19_Test3_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-19-Test4" && <Cambidge_19_Test4_P1_Q1 AnswersData={AnswersData} />}
                                {/* Test-18 */}
                                {testName === "Cambridge-18-Test1" && <Cambidge_18_Test1_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-18-Test2" && <Cambidge_18_Test2_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-18-Test3" && <Cambidge_18_Test3_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-18-Test4" && <Cambidge_18_Test4_P1_Q1 AnswersData={AnswersData} />}
                                {/* Test-17 */}
                                {testName === "Cambridge-17-Test1" && <Cambidge_17_Test1_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-17-Test2" && <Cambidge_17_Test2_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-17-Test3" && <Cambidge_17_Test3_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-17-Test4" && <Cambidge_17_Test4_P1_Q1 AnswersData={AnswersData} />}
                                {/* Test-16 */}
                                {testName === "Cambridge-16-Test1" && <Cambidge_16_Test1_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-16-Test2" && <Cambidge_16_Test2_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-16-Test3" && <Cambidge_16_Test3_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-16-Test4" && <Cambidge_16_Test4_P1_Q1 AnswersData={AnswersData} />}
                                {/* Test-15 */}
                                {testName === "Cambridge-15-Test1" && <Cambidge_15_Test1_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-15-Test2" && <Cambidge_15_Test2_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-15-Test3" && <Cambidge_15_Test3_P1_Q1 AnswersData={AnswersData} />}
                                {testName === "Cambridge-15-Test4" && <Cambidge_15_Test4_P1_Q1 AnswersData={AnswersData} />}


                            </div>
                            <div style={{ display: mobilePanel1Pages ? "none" : "initial" }}>
                                {moduelNo === "1" && <Test1Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "2" && <Test2Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "3" && <Test3Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "4" && <Test4Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "5" && <Test5Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "6" && <Test6Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "7" && <Test7Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "8" && <Test8Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "9" && <Test9Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "10" && <Test10Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "11" && <Test11Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "12" && <Test12Panel2_Page1 handleChange={handleChange} UserData={UserData} />}

                                {/* Cambridge-allPages */}
                                {testName === "Cambridge-19-Test1" && <Cambidge_19_Test1_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-19-Test2" && <Cambidge_19_Test2_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-19-Test3" && <Cambidge_19_Test3_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-19-Test4" && <Cambidge_19_Test4_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {/* Test-18 */}
                                {testName === "Cambridge-18-Test1" && <Cambidge_18_Test1_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-18-Test2" && <Cambidge_18_Test2_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-18-Test3" && <Cambidge_18_Test3_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-18-Test4" && <Cambidge_18_Test4_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {/* Test-17 */}
                                {testName === "Cambridge-17-Test1" && <Cambidge_17_Test1_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-17-Test2" && <Cambidge_17_Test2_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-17-Test3" && <Cambidge_17_Test3_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-17-Test4" && <Cambidge_17_Test4_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {/* Test-16 */}
                                {testName === "Cambridge-16-Test1" && <Cambidge_16_Test1_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-16-Test2" && <Cambidge_16_Test2_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-16-Test3" && <Cambidge_16_Test3_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-16-Test4" && <Cambidge_16_Test4_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {/* Test-15 */}
                                {testName === "Cambridge-15-Test1" && <Cambidge_15_Test1_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-15-Test2" && <Cambidge_15_Test2_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-15-Test3" && <Cambidge_15_Test3_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-15-Test4" && <Cambidge_15_Test4_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}

                            </div>
                            <button
                                className="p-2 w-[120px] rounded text-white bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 hover:from-teal-500 hover:via-cyan-600 hover:to-blue-600 fixed bottom-[92px] right-1 transition-all duration-300"

                                onClick={Mobilepanel1Functions}>
                                {mobilePanel1Pages ?
                                    <p className="flex gap-2 text-[15px] font-bold text-black">
                                        <BsFillPatchQuestionFill className="text-[15px] translate-y-[6px]" />
                                        Questions</p>
                                    :
                                    <p className="flex gap-2 text-[15px] font-bold text-black">
                                        <LiaReadme className="text-[19px] translate-y-[6px]" />
                                        Passages</p>
                                }
                            </button>
                        </div>
                        <div className="p-4" style={{ display: ActivePanels ? "none" : "initial" }}>
                            <div style={{ display: MobilePanel2Pages ? "initial" : "none" }}>
                                {moduelNo === "1" && <Test1Panel1_Page2 />}
                                {moduelNo === "2" && <Test2Panel1_Page2 />}
                                {moduelNo === "3" && <Test3Panel1_Page2 />}
                                {moduelNo === "4" && <Test4Panel1_Page2 />}
                                {moduelNo === "5" && <Test5Panel1Page2 />}
                                {moduelNo === "6" && <Test6Panel1Page2 />}
                                {moduelNo === "7" && <Test7Panel1Page2 />}
                                {moduelNo === "8" && <Test8Panel1Page2 />}
                                {moduelNo === "9" && <Test9Panel1_Page2 />}
                                {moduelNo === "10" && <Test10Panel1_Page2 />}
                                {moduelNo === "11" && <Test11Panel1_Page2 />}
                                {moduelNo === "12" && <Test12Panel1_Page1 />}


                                {/* Cambridge-allPages */}
                                {/* Test-19 */}
                                {testName === "Cambridge-19-Test1" && <Cambidge_19_Test1_P1_Q2 />}
                                {testName === "Cambridge-19-Test2" && <Cambidge_19_Test2_P1_Q2 />}
                                {testName === "Cambridge-19-Test3" && <Cambidge_19_Test3_P1_Q2 />}
                                {testName === "Cambridge-19-Test4" && <Cambidge_19_Test4_P1_Q2 />}
                                {/* Test-18 */}
                                {testName === "Cambridge-18-Test1" && <Cambidge_18_Test1_P1_Q2 />}
                                {testName === "Cambridge-18-Test2" && <Cambidge_18_Test2_P1_Q2 />}
                                {testName === "Cambridge-18-Test3" && <Cambidge_18_Test3_P1_Q2 />}
                                {testName === "Cambridge-18-Test4" && <Cambidge_18_Test4_P1_Q2 />}
                                {/* Test-17 */}
                                {testName === "Cambridge-17-Test1" && <Cambidge_17_Test1_P1_Q2 />}
                                {testName === "Cambridge-17-Test2" && <Cambidge_17_Test2_P1_Q2 />}
                                {testName === "Cambridge-17-Test3" && <Cambidge_17_Test3_P1_Q2 />}
                                {testName === "Cambridge-17-Test4" && <Cambidge_17_Test4_P1_Q2 />}
                                {/* Test-16 */}
                                {testName === "Cambridge-16-Test1" && <Cambidge_16_Test1_P1_Q2 />}
                                {testName === "Cambridge-16-Test2" && <Cambidge_16_Test2_P1_Q2 />}
                                {testName === "Cambridge-16-Test3" && <Cambidge_16_Test3_P1_Q2 />}
                                {testName === "Cambridge-16-Test4" && <Cambidge_16_Test4_P1_Q2 />}
                                {/* Test-15 */}
                                {testName === "Cambridge-15-Test1" && <Cambidge_15_Test1_P1_Q2 />}
                                {testName === "Cambridge-15-Test2" && <Cambidge_15_Test2_P1_Q2 />}
                                {testName === "Cambridge-15-Test3" && <Cambidge_15_Test3_P1_Q2 />}
                                {testName === "Cambridge-15-Test4" && <Cambidge_15_Test4_P1_Q2 />}

                            </div>
                            <div style={{ display: MobilePanel2Pages ? "none" : "initial" }}>
                                {moduelNo === "1" && <Test1Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "2" && <Test2Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "3" && <Test3Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "4" && <Test4Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "5" && <Test5Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "6" && <Test6Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "7" && <Test7Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "8" && <Test8Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "9" && <Test9Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "10" && <Test10Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "11" && <Test11Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "12" && <Test12Panel2_Page2 handleChange={handleChange} UserData={UserData} />}


                                {/* Cambridge-allPages */}
                                {testName === "Cambridge-19-Test1" && <Cambidge_19_Test1_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-19-Test2" && <Cambidge_19_Test2_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-19-Test3" && <Cambidge_19_Test3_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-19-Test4" && <Cambidge_19_Test4_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}

                                {testName === "Cambridge-18-Test1" && <Cambidge_18_Test1_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-18-Test2" && <Cambidge_18_Test2_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-18-Test3" && <Cambidge_18_Test3_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-18-Test4" && <Cambidge_18_Test4_P2_Q2 handleChange={handleChange} UserData={UserData} />}

                                {testName === "Cambridge-17-Test1" && <Cambidge_17_Test1_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-17-Test2" && <Cambidge_17_Test2_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-17-Test3" && <Cambidge_17_Test3_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-17-Test4" && <Cambidge_17_Test4_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {/* Test-16 */}
                                {testName === "Cambridge-16-Test1" && <Cambidge_16_Test1_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-16-Test2" && <Cambidge_16_Test2_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-16-Test3" && <Cambidge_16_Test3_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-16-Test4" && <Cambidge_16_Test4_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {/* Test-16 */}
                                {testName === "Cambridge-15-Test1" && <Cambidge_15_Test1_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-15-Test2" && <Cambidge_15_Test2_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-15-Test3" && <Cambidge_15_Test3_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-15-Test4" && <Cambidge_15_Test4_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                            </div>
                            <button
                                className="p-2 w-[120px] rounded text-white bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 hover:from-teal-500 hover:via-cyan-600 hover:to-blue-600 fixed bottom-[92px] right-1 transition-all duration-300"

                                onClick={Mobilepanel2Functions}>
                                {MobilePanel2Pages ?
                                    <p className="flex gap-2 text-[15px] font-bold text-black">
                                        <BsFillPatchQuestionFill className="text-[15px] translate-y-[6px]" />
                                        Questions</p>
                                    :
                                    <p className="flex gap-2 text-[15px] font-bold text-black">
                                        <LiaReadme className="text-[19px] translate-y-[6px]" />
                                        Passages</p>

                                }
                            </button>
                        </div>



                        <button
                            className="text-black font-bold w-[120px] rounded sm:w-[100px] p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 fixed bottom-[92px] left-1 transition-all duration-300"
                            onClick={ClickActivePanels}
                        >{ActivePanels ? "Go Section-2" : "Go Section-1"}</button>

                    </section>
                ) : (
                    <SplitPane split="vertical" sizes={Panelsizes} onChange={setPanelSizes}>
                        <Pane minSize={100} maxSize='70%'>
                            <div className='panel_1' style={{ height: "100%", overflow: "scroll" }}>
                                <div style={{ display: forPage1 ? "initial" : "none" }}>
                                    {moduelNo === "1" && <Test1Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "2" && <Test2Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "3" && <Test3Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "4" && <Test4Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "5" && <Test5Panel1Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "6" && <Test6Panel1Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "7" && <Test7Panel1Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "8" && <Test8Panel1Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "9" && <Test9Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "10" && <Test10Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "11" && <Test11Panel1_Page1 AnswersData={AnswersData} />}
                                    {moduelNo === "12" && <Test12Panel1_Page1 AnswersData={AnswersData} />}

                                    {/* Cambridge-allPages */}
                                    {/* test-19 */}
                                    {testName === "Cambridge-19-Test1" && <Cambidge_19_Test1_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-19-Test2" && <Cambidge_19_Test2_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-19-Test3" && <Cambidge_19_Test3_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-19-Test4" && <Cambidge_19_Test4_P1_Q1 AnswersData={AnswersData} />}
                                    {/* test-18 */}
                                    {testName === "Cambridge-18-Test1" && <Cambidge_18_Test1_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-18-Test2" && <Cambidge_18_Test2_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-18-Test3" && <Cambidge_18_Test3_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-18-Test4" && <Cambidge_18_Test4_P1_Q1 AnswersData={AnswersData} />}
                                    {/* test-17 */}
                                    {testName === "Cambridge-17-Test1" && <Cambidge_17_Test1_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-17-Test2" && <Cambidge_17_Test2_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-17-Test3" && <Cambidge_17_Test3_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-17-Test4" && <Cambidge_17_Test4_P1_Q1 AnswersData={AnswersData} />}
                                    {/* Test-16 */}
                                    {testName === "Cambridge-16-Test1" && <Cambidge_16_Test1_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-16-Test2" && <Cambidge_16_Test2_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-16-Test3" && <Cambidge_16_Test3_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-16-Test4" && <Cambidge_16_Test4_P1_Q1 AnswersData={AnswersData} />}
                                    {/* Test-15 */}
                                    {testName === "Cambridge-15-Test1" && <Cambidge_15_Test1_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-15-Test2" && <Cambidge_15_Test2_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-15-Test3" && <Cambidge_15_Test3_P1_Q1 AnswersData={AnswersData} />}
                                    {testName === "Cambridge-15-Test4" && <Cambidge_15_Test4_P1_Q1 AnswersData={AnswersData} />}
                                </div>
                                <div style={{ display: forPage1 ? "none" : "initial" }}>
                                    {moduelNo === "1" && <Test1Panel1_Page2 />}
                                    {moduelNo === "2" && <Test2Panel1_Page2 />}
                                    {moduelNo === "3" && <Test3Panel1_Page2 />}
                                    {moduelNo === "4" && <Test4Panel1_Page2 />}
                                    {moduelNo === "5" && <Test5Panel1Page2 />}
                                    {moduelNo === "6" && <Test6Panel1Page2 />}
                                    {moduelNo === "7" && <Test7Panel1Page2 />}
                                    {moduelNo === "8" && <Test8Panel1Page2 />}
                                    {moduelNo === "9" && <Test9Panel1_Page2 />}
                                    {moduelNo === "10" && <Test10Panel1_Page2 />}
                                    {moduelNo === "11" && <Test11Panel1_Page2 />}
                                    {moduelNo === "12" && <Test12Panel1_Page2 />}

                                    {/* Cambridge-allPages */}
                                    {/* test-19 */}
                                    {testName === "Cambridge-19-Test1" && <Cambidge_19_Test1_P1_Q2 />}
                                    {testName === "Cambridge-19-Test2" && <Cambidge_19_Test2_P1_Q2 />}
                                    {testName === "Cambridge-19-Test3" && <Cambidge_19_Test3_P1_Q2 />}
                                    {testName === "Cambridge-19-Test4" && <Cambidge_19_Test4_P1_Q2 />}
                                    {/*test-18 */}
                                    {testName === "Cambridge-18-Test1" && <Cambidge_18_Test1_P1_Q2 />}
                                    {testName === "Cambridge-18-Test2" && <Cambidge_18_Test2_P1_Q2 />}
                                    {testName === "Cambridge-18-Test3" && <Cambidge_18_Test3_P1_Q2 />}
                                    {testName === "Cambridge-18-Test4" && <Cambidge_18_Test4_P1_Q2 />}
                                    {/*test-17 */}
                                    {testName === "Cambridge-17-Test1" && <Cambidge_17_Test1_P1_Q2 />}
                                    {testName === "Cambridge-17-Test2" && <Cambidge_17_Test2_P1_Q2 />}
                                    {testName === "Cambridge-17-Test3" && <Cambidge_17_Test3_P1_Q2 />}
                                    {testName === "Cambridge-17-Test4" && <Cambidge_17_Test4_P1_Q2 />}
                                    {/* test-16 */}
                                    {testName === "Cambridge-16-Test1" && <Cambidge_16_Test1_P1_Q2 />}
                                    {testName === "Cambridge-16-Test2" && <Cambidge_16_Test2_P1_Q2 />}
                                    {testName === "Cambridge-16-Test3" && <Cambidge_16_Test3_P1_Q2 />}
                                    {testName === "Cambridge-16-Test4" && <Cambidge_16_Test4_P1_Q2 />}
                                    {/* test-15 */}
                                    {testName === "Cambridge-15-Test1" && <Cambidge_15_Test1_P1_Q2 />}
                                    {testName === "Cambridge-15-Test2" && <Cambidge_15_Test2_P1_Q2 />}
                                    {testName === "Cambridge-15-Test3" && <Cambidge_15_Test3_P1_Q2 />}
                                    {testName === "Cambridge-15-Test4" && <Cambidge_15_Test4_P1_Q2 />}
                                </div>


                            </div>
                        </Pane>
                        <div className='panel_2' style={{ height: "100%", overflow: "scroll" }}>
                            <div className="forChangePage">
                                <button
                                    className="btnforPageChnage p-2 w-[100px] bg-gradient-to-r from-teal-400 to-cyan-400 text-black rounded-full font-semibold shadow-lg  flex items-center justify-center"
                                    onClick={() => { setforPage1(!forPage1) }}
                                >
                                    {/* Add an icon with motion */}
                                    <span className="mr-2 text-lg">
                                        {forPage1 ? (
                                            <i className="fas fa-arrow-right"></i>  // Example icon (change as needed)
                                        ) : (
                                            <i className="fas fa-arrow-left"></i>  // Example icon (change as needed)
                                        )}
                                    </span>
                                    {forPage1 ? "Next" : "Previous"}
                                </button>
                            </div>


                            <div style={{ display: forPage1 ? "initial" : "none" }}>
                                {moduelNo === "1" && <Test1Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "2" && <Test2Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "3" && <Test3Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "4" && <Test4Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "5" && <Test5Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "6" && <Test6Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "7" && <Test7Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "8" && <Test8Panel2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "9" && <Test9Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "10" && <Test10Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "11" && <Test11Panel2_Page1 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "12" && <Test12Panel2_Page1 handleChange={handleChange} UserData={UserData} />}


                                {/* Cambridge-allPages */}
                                {/* Test-19 */}
                                {testName === "Cambridge-19-Test1" && <Cambidge_19_Test1_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-19-Test2" && <Cambidge_19_Test2_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-19-Test3" && <Cambidge_19_Test3_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-19-Test4" && <Cambidge_19_Test4_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {/* Test-18 */}
                                {testName === "Cambridge-18-Test1" && <Cambidge_18_Test1_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-18-Test2" && <Cambidge_18_Test2_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-18-Test3" && <Cambidge_18_Test3_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-18-Test4" && <Cambidge_18_Test4_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {/* Test-17 */}
                                {testName === "Cambridge-17-Test1" && <Cambidge_17_Test1_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-17-Test2" && <Cambidge_17_Test2_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-17-Test3" && <Cambidge_17_Test3_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-17-Test4" && <Cambidge_17_Test4_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {/* Test-16 */}
                                {testName === "Cambridge-16-Test1" && <Cambidge_16_Test1_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-16-Test2" && <Cambidge_16_Test2_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-16-Test3" && <Cambidge_16_Test3_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-16-Test4" && <Cambidge_16_Test4_P2_Q1 handleChange={handleChange} UserData={UserData} />}
                                {/* Test-15 */}
                                {testName === "Cambridge-15-Test1" && <Cambidge_15_Test1_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-15-Test2" && <Cambidge_15_Test2_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-15-Test3" && <Cambidge_15_Test3_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-15-Test4" && <Cambidge_15_Test4_P2_Q1 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                            </div>
                            <div style={{ display: forPage1 ? "none" : "initial" }}>
                                {moduelNo === "1" && <Test1Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "2" && <Test2Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "3" && <Test3Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "4" && <Test4Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "5" && <Test5Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "6" && <Test6Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "7" && <Test7Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "8" && <Test8Panel2Question2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "9" && <Test9Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "10" && <Test10Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "11" && <Test11Panel2_Page2 handleChange={handleChange} UserData={UserData} />}
                                {moduelNo === "12" && <Test12Panel2_Page2 handleChange={handleChange} UserData={UserData} />}

                                {/* Cambridge-allPages */}

                                {testName === "Cambridge-19-Test1" && <Cambidge_19_Test1_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-19-Test2" && <Cambidge_19_Test2_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-19-Test3" && <Cambidge_19_Test3_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-19-Test4" && <Cambidge_19_Test4_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {/* Test-18 */}
                                {testName === "Cambridge-18-Test1" && <Cambidge_18_Test1_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-18-Test2" && <Cambidge_18_Test2_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-18-Test3" && <Cambidge_18_Test3_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-18-Test4" && <Cambidge_18_Test4_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {/* Test-17 */}
                                {testName === "Cambridge-17-Test1" && <Cambidge_17_Test1_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-17-Test2" && <Cambidge_17_Test2_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-17-Test3" && <Cambidge_17_Test3_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-17-Test4" && <Cambidge_17_Test4_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {/* Test-16 */}
                                {testName === "Cambridge-16-Test1" && <Cambidge_16_Test1_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-16-Test2" && <Cambidge_16_Test2_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-16-Test3" && <Cambidge_16_Test3_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {testName === "Cambridge-16-Test4" && <Cambidge_16_Test4_P2_Q2 handleChange={handleChange} UserData={UserData} />}
                                {/* Test-15 */}
                                {testName === "Cambridge-15-Test1" && <Cambidge_15_Test1_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-15-Test2" && <Cambidge_15_Test2_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-15-Test3" && <Cambidge_15_Test3_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                                {testName === "Cambridge-15-Test4" && <Cambidge_15_Test4_P2_Q2 handleChange={handleChange} UserData={UserData} RightAnswers={RightAnswers} />}
                            </div>

                        </div>

                    </SplitPane>
                )
            }
        </div>
    );
};
export default Reading;


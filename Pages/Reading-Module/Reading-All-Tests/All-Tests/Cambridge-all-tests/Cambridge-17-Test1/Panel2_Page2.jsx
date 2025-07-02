"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "@/contexts/ContextProvider";
import Explain_Btn from "@/components/Reading-Module/Reading-All-Tests/Important/Explain-Btn";
// end of importing---------->>




function Panel2_Q2({ handleChange, UserData }) {
  const { ReadingShowAnswer, userPaymentStatusCheck, setReadingShowAnswer, explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
  const [showNotePad, setShowNotePad] = useState(false);
  // let testItems = localStorage.getItem("ShowAnsByTest");

  return (
    <section className='Panel2Section p-3 sm:p-5 mb-[50px]'>
      <div className='Panel2Section'>
        <div className="palne2_div1 ml-2">
          <h1>Section-2</h1>
        </div>

        <div className="palne2_div2 p-2">
          {/* show & hide the nodepan by cliking those icons    */}
          {showNotePad && (<textarea name="textarea" id="textarea" cols="70" rows="4"></textarea>)}
          <div className="btn " onClick={() => { setShowNotePad(!showNotePad) }}>
            {showNotePad ? <button className="  main-btn ml-30"> <i><GiNotebook /></i> Hide Notepad</button> : <button className="main-btn ml-30"> <i><GiNotebook /></i> Show Notepad</button>}
          </div>
        </div>
      </div>

      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h5 className=''>Reading Passage-3</h5>
        <h6 className=''>Questions 27-31</h6> <br />
        <label className='mb-1'>Complete the summary using the list of phrases, <span className='font-bold'>A-J</span>, below.</label>
        <label className=''>The story behind the hunt for Charles II</label> <br />
      </div>

      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques27">Charles II’s father was executed by the Parliamentarian forces in 1649. Charles II then formed a  <span className='numberOfQuestion'>27</span>
            <input type="text" name="ques27" id="ques27" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques27 != "H" && "text-red-600"} ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques27 != "" && UserData.ques27 == "H" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques27 != "H"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  H
                  <span
                    onClick={() => {
                      //check user paid or not. if yes popup will come otherwise transfer to payment cards
                      userPaymentStatusCheck ? setExplainRLQuestions(true) : window.location.href = "/Payment-Pages/Billing-Page";
                      setExplainObjForRL(makeObj => ({
                        number: 27,
                        Ans1: "",
                        mainAns: "H ( strategic alliance)",
                        hiddenWord: " strategic alliance",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " In Paragraph A, it is stated that Charles II did a deal with the Scots, thereby accepting Presbyterianism as the national religion in return for being crowned King of Scots. This shows that Charles II formed a strategic alliance with the Scots in order to secure his kingship."
                      }))
                    }}
                  > <Explain_Btn /></span>
                </div>
                : ""}
            </i>


            with the Scots, and in order to become King of Scots, he abandoned an important

            <span className='numberOfQuestion'>28</span>
            <input type="text" name="ques28" id="ques28" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques28 != "J" && "text-red-600"} ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques28 != "" && UserData.ques28 == "J" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques28 != "J"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  J
                  <span
                    onClick={() => {
                      //check user paid or not. if yes popup will come otherwise transfer to payment cards
                      userPaymentStatusCheck ? setExplainRLQuestions(true) : window.location.href = "/Payment-Pages/Billing-Page";
                      setExplainObjForRL(makeObj => ({
                        number: 28,
                        Ans1: "",
                        mainAns: "J ( religious conviction)",
                        hiddenWord: " religious conviction",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "In Paragraph A, the passage mentions that Charles II abandoned an important principle that was held by his father and had contributed to his father’s death. This principle was related to his father’s religious conviction of supporting Anglicanism, which Charles later sacrificed for political gain."
                      }))
                    }}
                  > <Explain_Btn /></span>
                </div>

                : ""}
            </i>

            that was held by his father and had contributed to his father’s death. The opposing sides then met outside Worcester in 1651. The battle led to a

            <span className='numberOfQuestion'>29</span>
            <input type="text" name="ques29" id="ques29" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques29 != "F" && "text-red-600"} ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques29 != "" && UserData.ques29 == "F" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques29 != "F"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  F
                  <span
                    onClick={() => {
                      //check user paid or not. if yes popup will come otherwise transfer to payment cards
                      userPaymentStatusCheck ? setExplainRLQuestions(true) : window.location.href = "/Payment-Pages/Billing-Page";
                      setExplainObjForRL(makeObj => ({
                        number: 29,
                        Ans1: "",
                        mainAns: "F ( decisive victory)",
                        hiddenWord: "decisive victory",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: " Paragraph A recounts that after the Battle of Worcester, the Parliamentarians achieved a decisive victory over Charles II, forcing him to flee for his life."
                      }))
                    }}
                  > <Explain_Btn /></span>
                </div>
                : ""}
            </i>

            for the Parliamentarians and Charles had to flee for his life. A

            <span className='numberOfQuestion'>30</span>
            <input type="text" name="ques30" id="ques30" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques30 != "B" && "text-red-600"} ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques30 != "" && UserData.ques30 == "B" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques30 != "B"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  B
                  <span
                    onClick={() => {
                      //check user paid or not. if yes popup will come otherwise transfer to payment cards
                      userPaymentStatusCheck ? setExplainRLQuestions(true) : window.location.href = "/Payment-Pages/Billing-Page";
                      setExplainObjForRL(makeObj => ({
                        number: 30,
                        Ans1: "",
                        mainAns: "B (large reward)",
                        hiddenWord: "large reward",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "In Paragraph C, the passage mentions that a huge sum was offered for his capture, which refers to the large reward placed on Charles II’s head by the Parliamentarians during his escape."
                      }))
                    }}
                  > <Explain_Btn /></span>
                </div>

                : ""}
            </i>

            was offered for Charles’s capture, but after six weeks spent in hiding, he eventually managed to reach the

            <span className='numberOfQuestion'>31</span>
            <input type="text" name="ques31" id="ques31" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques31 != "D" && "text-red-600"} ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques31 != "" && UserData.ques31 == "D" && "text-green-700"}`} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques31 != "D"
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  D
                  <span
                    onClick={() => {
                      //check user paid or not. if yes popup will come otherwise transfer to payment cards
                      userPaymentStatusCheck ? setExplainRLQuestions(true) : window.location.href = "/Payment-Pages/Billing-Page";
                      setExplainObjForRL(makeObj => ({
                        number: 31,
                        Ans1: "",
                        mainAns: "D (relative safety.)",
                        hiddenWord: "relative safety",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "",
                        explain: "After six weeks of hiding, Charles II eventually reached relative safety in France. This is described in Paragraph C, where it states that Charles managed to find refuge in France after his perilous escape."
                      }))
                    }}
                  > <Explain_Btn /></span>
                </div>
                : ""}
            </i>
            of continental Europe.</label>

        </div>
        <div className='p-3 rounded w-auto border-2 border-gray-300 flex flex-wrap gap-4'>
          <p><span className='font-bold mr-2'>A</span> military innovation</p> <br />
          <p><span className='font-bold mr-2'>B</span>large reward</p> <br />
          <p><span className='font-bold mr-2'>C</span> widespread conspiracy </p> <br />
          <p><span className='font-bold mr-2'>D</span> relative safety</p><br />
          <p><span className='font-bold mr-2'>E</span>  new government </p> <br />
          <p><span className='font-bold mr-2'>F</span>decisive victory</p> <br />
          <p><span className='font-bold mr-2'>G</span>political debate </p>  <br />
          <p><span className='font-bold mr-2'>H</span>strategic alliance</p> <br />
          <p><span className='font-bold mr-2'>I</span>popular solution </p> <br />
          <p><span className='font-bold mr-2'>J</span>religious conviction</p> <br />
        </div>

      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 32-35</h6> <br />
        <label className=''>Do the following statements agree with the claims of the writer in Reading Passage 3? <br /><br />
          In boxes <span className='font-bold'>32-35</span> on your answer sheet, write</label><br />
        <label className=''>YES : ---   if the statement agrees with the views of the writer <br /> <br />
          NO:--if the statement contradicts the views of the writer <br /> <br />
          NOT GIVEN:-- if it is impossible to say what the writer thinks about this</label>

      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques32"> <span className='numberOfQuestion'>32</span>Charles chose Pepys for the task because he considered him to be trustworthy.
            <select name="ques32" id="ques32" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques32 != "NOT GIVEN" && "text-red-600"} ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques32 != "" && UserData.ques32 == "NOT GIVEN" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques32 != "NOT GIVEN"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NOT GIVEN
                <span className=''
                  onClick={() => {

                    setExplainObjForRL(makeObj => ({
                      number: 32,
                      Ans1: "",
                      mainAns: "NOT GIVEN",
                      hiddenWord: "second paragraph’s first to sixth line",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph B mentions that Charles II asked Samuel Pepys to write down his story, but there is no indication of why he specifically chose Pepys, whether for trustworthiness or another reason. Therefore, the statement is not given."
                    }))
                  }}
                > <Explain_Btn /></span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques33">  <span className='numberOfQuestion'>33</span> Charles’s personal recollection of the escape lacked sufficient detail.
            <select name="ques33" id="ques33" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques33 != "NO" && "text-red-600"} ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques33 != "" && UserData.ques33 == "NO" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques33 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className=''
                  onClick={() => {

                    setExplainObjForRL(makeObj => ({
                      number: 33,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "Second paragraph’s 7 to 9 line",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "In Paragraph C, the passage highlights that Charles II’s personal recollection was filled with vivid details, such as the cutting of his long hair with shears and the moments spent hiding in Boscobel Wood. Thus, his account was not lacking in detail, but quite the opposite."
                    }))
                  }}
                > <Explain_Btn /></span>
              </div>
              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques34"><span className='numberOfQuestion'>34</span>Charles indicated to Pepys that he had planned his escape before the battle.
            <select name="ques34" id="ques34" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques34 != "NO" && "text-red-600"} ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques34 != "" && UserData.ques34 == "NO" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques34 != "NO"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                NO
                <span className=''
                  onClick={() => {

                    setExplainObjForRL(makeObj => ({
                      number: 34,
                      Ans1: "",
                      mainAns: "NO",
                      hiddenWord: "second paragraph’s last four line",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "In Paragraph B, Charles II states that after the battle was lost, he began thinking about the best way of saving himself. This implies he did not have a plan for escape before the battle, but only after his defeat."
                    }))
                  }}
                > <Explain_Btn /></span>
              </div>

              : ""}</i>
          </label>
        </div>
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques35"> <span className='numberOfQuestion'>35</span> The inclusion of Charles’s account is a positive aspect of the book.
            <select name="ques35" id="ques35" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques35 != "YES" && "text-red-600"} ${ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques35 != "" && UserData.ques35 == "YES" && "text-green-700"}`}>
              <option value="" selected></option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques35 != "YES"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                YES
                <span className=''
                  onClick={() => {

                    setExplainObjForRL(makeObj => ({
                      number: 35,
                      Ans1: "",
                      mainAns: "YES",
                      hiddenWord: "third paragraph’s first line to fourth line",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " Paragraph C notes that one of the highlights of Spencer’s book is the use of Charles II’s own account, which brings the events to life. The inclusion of this personal recollection is considered a positive aspect of the book."
                    }))
                  }}
                > <Explain_Btn /></span>
              </div>

              : ""}</i>
          </label>
        </div>
      </div> <br />


      <div className='Titles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 36-40</h6> <br />
        <label className=''>Choose the correct letter, <span className='font-bold'> A, B, C, or D</span>.</label>
        <label className='mb-1'>Choose the correct letter in boxes 36-40 on your answer sheet.</label>
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='mb-3'>
          <label htmlFor="ques36"><span className='numberOfQuestion mr-1 mb-2'>36</span>What is the reviewer’s main purpose in the first paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques36 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className=''
                  onClick={() => {

                    setExplainObjForRL(makeObj => ({
                      number: 36,
                      Ans1: "",
                      mainAns: "B (to give an account of the circumstances leading to Charles II’s escape)",
                      hiddenWord: "first paragraph’s twelfth line to twenty-first line",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "In Paragraph A, the reviewer provides background on Charles II’s defeat at the Battle of Worcester and his subsequent escape. The paragraph describes the context and events leading to his flight from England, thus the reviewer’s main purpose is to give an account of the circumstances leading to his escape."
                    }))
                  }}
                > <Explain_Btn /></span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-3 ml-3' type="radio" value="A" name='ques36' />
              to describe what happened during the Battle of Worcester
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-3 ml-3' type="radio" value="B" name='ques36' />
              to give an account of the circumstances leading to Charles II’s escape
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-3 ml-3' type="radio" value="C" name='ques36' />
              to provide details of the Parliamentarians’ political views
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-3 ml-3' type="radio" value="D" name='ques36' />
              to compare Charles II’s beliefs with those of his father
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques37"><span className='numberOfQuestion mr-1 mb-2'>37</span>Why does the reviewer include examples of the fugitives’ behaviour in the third paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques37 != "C"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                C
                <span className=''
                  onClick={() => {

                    setExplainObjForRL(makeObj => ({
                      number: 37,
                      Ans1: "",
                      mainAns: "C (to illustrate how the events of six weeks are brought to life)",
                      hiddenWord: "to illustrate how the events of six weeks are brought to life)",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "In Paragraph C, the reviewer highlights specific details, such as Charles II’s disguise and the humorous refusal of his friend to adopt a disguise. These examples are included to show how the events of the six weeks are vividly brought to life, making the story more engaging and real to the reader."
                    }))
                  }}
                > <Explain_Btn /></span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-3 ml-3' type="radio" value="A" name='ques37' />
              to explain how close Charles II came to losing his life
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-3 ml-3' type="radio" value="B" name='ques37' />
              to suggest that Charles II’s supporters were badly prepared
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-3 ml-3' type="radio" value="C" name='ques37' />
              to illustrate how the events of the six weeks are brought to life
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-3 ml-3' type="radio" value="D" name='ques37' />
              to argue that certain aspects are not as well known as they should be
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques38"><span className='numberOfQuestion mr-1 mb-2'>38</span>What point does the reviewer make about Charles II in the fourth paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques38 != "A"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                A
                <span className=''
                  onClick={() => {

                    setExplainObjForRL(makeObj => ({
                      number: 38,
                      Ans1: "",
                      mainAns: "A (He chose to celebrate what was essentially a defeat)",
                      hiddenWord: "He chose to celebrate what was essentially a defeat",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " In Paragraph D, the reviewer describes how Charles II celebrated the lowest point of his life by commissioning art, creating a new order of chivalry, and reliving the escape story. This shows that Charles chose to celebrate what was essentially a defeat, turning it into a symbol of resilience."
                    }))
                  }}
                > <Explain_Btn /></span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-3 ml-3' type="radio" value="A" name='ques38' />
              He chose to celebrate what was essentially a defeat.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-3 ml-3' type="radio" value="B" name='ques38' />
              He misunderstood the motives of his opponents.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-3 ml-3' type="radio" value="C" name='ques38' />
              He aimed to restore people’s faith in the monarchy..
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-3 ml-3' type="radio" value="D" name='ques38' />
              He was driven by a desire to be popular.
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques39"><span className='numberOfQuestion mr-1 mb-2'>39</span>What does the reviewer say about Charles Spencer in the fifth paragraph?
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques39 != "B"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                B
                <span className=''
                  onClick={() => {

                    setExplainObjForRL(makeObj => ({
                      number: 39,
                      Ans1: "",
                      mainAns: "B (He takes an unbiased approach to the subject matter)",
                      hiddenWord: "He takes an unbiased approach to the subject matter",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: "Paragraph E notes that Charles Spencer’s book presents an even-handed approach, showing sympathy for both the fugitive king and the republican regime that hunted him. Spencer explores the background and context without bias, indicating he takes an unbiased approach to the subject matter."
                    }))
                  }}
                > <Explain_Btn /></span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-3 ml-3' type="radio" value="A" name='ques39' />
              His decision to write the book comes as a surprise.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-3 ml-3' type="radio" value="B" name='ques39' />
              He takes an unbiased approach to the subject matter.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-3 ml-3' type="radio" value="C" name='ques39' />
              His descriptions of events would be better if they included more detail.
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-3 ml-3' type="radio" value="D" name='ques39' />
              He chooses language that is suitable for a twenty-first-century audience..
            </label>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor="ques40"><span className='numberOfQuestion mr-1 mb-2'>40</span>When the reviewer says the book ‘doesn’t quite hit the mark’, she is making the point that
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Cambridge-17-Test1" && UserData.ques40 != "D"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                D
                <span className=''
                  onClick={() => {

                    setExplainObjForRL(makeObj => ({
                      number: 40,
                      Ans1: "",
                      mainAns: "D (It fails to address whether Charles II’s experiences had a lasting influence on him.)",
                      hiddenWord: "It fails to address whether Charles II’s experiences had a lasting influence on him.",
                      hiddenWord2: "",
                      hiddenWord3: "",
                      keyWords: "",
                      explain: " In Paragraph F, the reviewer mentions that while Spencer’s book is engaging, it doesn’t explore how Charles II’s experiences during the escape shaped his later character or reign. This is the “one niggle” the reviewer mentions, meaning the book fails to address whether these experiences had a lasting influence on him."
                    }))
                  }}
                > <Explain_Btn /></span>
              </div>

              : ""}</i>
          </label>
          <div className='' onChange={handleChange}>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2 h-[25px] bg-gray-300 text-black'>A</span>
              <input className='mr-3 ml-3' type="radio" value="A" name='ques40' />
              it overlooks the impact of events on ordinary people.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className=' rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>B</span>
              <input className='mr-3 ml-3' type="radio" value="B" name='ques40' />
              it lacks an analysis of prevalent views on monarchy.
            </label>
            </div>

            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>C</span>
              <input className='mr-3 ml-3' type="radio" value="C" name='ques40' />
              it omits any references to the deceit practised by Charles II during his time in hiding..
            </label>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 ml-4"><label>
              <span className='rounded-[50%] w-[25px] pl-2  h-[25px] bg-gray-300 text-black'>D</span>
              <input className='mr-3 ml-3' type="radio" value="D" name='ques40' />
              it fails to address whether Charles II’s experiences had a lasting influence on him.
            </label>
            </div>
          </div>
        </div>
      </div>


    </section >
  )
}

export default Panel2_Q2





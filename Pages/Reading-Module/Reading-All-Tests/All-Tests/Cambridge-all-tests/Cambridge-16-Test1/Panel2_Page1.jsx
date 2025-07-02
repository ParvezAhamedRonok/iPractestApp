"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "@/contexts/ContextProvider";
import Explain_Btn from "@/components/Reading-Module/Reading-All-Tests/Important/Explain-Btn";
// end of importing---------->>




function Panel2_Q1({ handleChange, UserData }) {
  const { ReadingShowAnswer, userPaymentStatusCheck, setReadingShowAnswer, explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
  const [showNotePad, setShowNotePad] = useState(false);
  // let testItems = localStorage.getItem("ShowAnsByTest");

  return (
    <section className='Panel2Section p-3 sm:p-5 mb-[50px]'>
      <div className='Panel2Section'>
        <div className="palne2_div1 ml-2">
          <h1>Section-1</h1>
        </div>

        <div className="palne2_div2 p-2">
          {/* show & hide the nodepan by cliking those icons    */}
          {showNotePad && (<textarea name="textarea" id="textarea" cols="70" rows="4"></textarea>)}
          <div className="btn " onClick={() => { setShowNotePad(!showNotePad) }}>
            {showNotePad ? <button className="  main-btn ml-30"> <i><GiNotebook /></i> Hide Notepad</button> : <button className="main-btn ml-30"> <i><GiNotebook /></i> Show Notepad</button>}
          </div>
        </div>
      </div>


      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h5 className=''>Reading Passage-1</ h5>
        <h6 className=''>Questions 1-7</ h6> <br />
        <label className=''> Do the following statements agree with the information given in <span className='font-bold'>Reading Passage 1</span>?<br />
          In boxes 1-7 on your answer sheet, write <br />
          TRUE : ---if the statement agrees with the information <br /><br />
          FALSE:--if the statement contradicts the information <br /><br />
          NOT GIVEN:--if there is no information on this</label> <br />
      </div>


      <div className="Questions ml-[10px] sm:ml-[25px] mb-3">
        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques1">
            <span className='numberOfQuestion'>1</span> Polar bears suffer from various health problems due to the build-up of fat under their skin.
            <select name="ques1" id="ques1" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Cambridge-16-Test1" && UserData.ques1 != "FALSE" && "text-red-600"}
        ${ReadingShowAnswer == "Cambridge-16-Test1" && UserData.ques1 != "" && UserData.ques1 == "FALSE" && "text-green-700"}
        `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Cambridge-16-Test1" && UserData.ques1 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded-full cursor-pointer flex items-center gap-1 hover:bg-blue-700 transition-all'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 1,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "First Paragraph",
                      keyWords: "polar bears, suffer from, various health problems, due to, build-up, fat, under, skin",
                      explain: "In the first paragraph, lines 3-6 state, ‘One reason for this is that they have up to 11 centimetres of fat underneath their skin. Humans with comparative levels of adipose tissue would be considered obese and would be likely to suffer from diabetes and heart disease. Yet the polar bear experiences no such consequences.’ This means that humans, not polar bears, suffer from health issues due to fat build-up."
                    }))
                  }}>
                  Explain
                </span>
              </div>
              : ""}</i>
          </label>
        </div>

        <div className='flex gap-1 flex-wrap mb-1'>
          <label htmlFor="ques2">
            <span className='numberOfQuestion'>2</span> The study done by Liu and his colleagues compared different groups of polar bears.
            <select name="ques2" id="ques2" onChange={handleChange}
              className={`font-bold ${ReadingShowAnswer == "Cambridge-16-Test1" && UserData.ques2 != "FALSE" && "text-red-600"}
        ${ReadingShowAnswer == "Cambridge-16-Test1" && UserData.ques2 != "" && UserData.ques2 == "FALSE" && "text-green-700"}
        `}>
              <option value="" selected></option>
              <option value="TRUE">TRUE</option>
              <option value="FALSE">FALSE</option>
              <option value="NOT GIVEN">NOT GIVEN</option>
            </select>
            <i className='text-green-700 ml-2'>{ReadingShowAnswer == "Cambridge-16-Test1" && UserData.ques2 != "FALSE"
              ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                FALSE
                <span className='bg-blue-600 text-white p-1 text-[10px] rounded-full cursor-pointer flex items-center gap-1 hover:bg-blue-700 transition-all'
                  onClick={() => {
                    setExplainRLQuestions(true);
                    setExplainObjForRL(makeObj => ({
                      number: 2,
                      Ans1: "FALSE",
                      mainAns: "",
                      hiddenWord: "Second Paragraph",
                      keyWords: "study, Liu and his colleagues, compared, different groups, polar bears",
                      explain: "In lines 1-2 of the second paragraph, it is stated, ‘A 2014 study by Shi Ping Liu and colleagues sheds light on this mystery. They compared the genetic structure of polar bears with that of their closest relatives from a warmer climate, the brown bears.’ This means the study compared polar bears with brown bears, not different groups of polar bears."
                    }))
                  }}>
                  Explain
                </span>
              </div>
              : ""}</i>
          </label>
        </div>
      </div>



      <div className='titles pl-[10px] sm:pl-[25px] mb-3'>
        <h6 className=''>Questions 8-13</h6> <br />
        <label className=''>Complete the table below.</label> <br /> <br />
        <label className=''>Choose ONE WORD ONLY from the passage for each answer.</label> <br />
        <label className=''>Write your answers in boxes <span className='font-bold'>8-13</span> on your answer sheet..</label> <br />
      </div>
      <div className="Questions p-4 border-1 border-gray-400">
        <label className='p-3 w-full text-center border-1 border-gray-400'>The study carried out by Rocha’s team</label>
        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques8"> People think of bears as unintelligent and<span className='numberOfQuestion'>8</span>
            <input type="text" name="ques8" id="ques8" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Cambridge-16-Test1" && !UserData.ques8.match(/violent/gi) && "text-red-600"}
               ${ReadingShowAnswer == "Cambridge-16-Test1" && UserData.ques8 != "" && UserData.ques8 == "violent" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Cambridge-16-Test1" && !UserData.ques8.match(/violent/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  violent
                  <span className=''
                    onClick={() => {

                      setExplainObjForRL(makeObj => ({
                        number: 8,
                        Ans1: "",
                        mainAns: "violent",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "people think, bears, unintelligent",
                        explain: "In Paragraph D, people think of bears as unintelligent and violent. However, this perception may be incorrect, as anecdotal evidence suggests that polar bears have problem-solving abilities and intelligence, challenging the assumption that they are inherently violent."
                      }))
                    }}
                  > <Explain_Btn /></span>
                </div>

                : ""}
            </i>

            However, this may not be correct. For example:</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques9">●   In Tennoji Zoo, a bear has been seen using a branch as a <span className='numberOfQuestion'>9</span>
            <input type="text" name="ques9" id="ques9" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Cambridge-16-Test1" && !UserData.ques9.match(/tool/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Cambridge-16-Test1" && UserData.ques9 != "" && UserData.ques9 == "tool" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Cambridge-16-Test1" && !UserData.ques9.match(/tool/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  tool
                  <span className=''
                    onClick={() => {

                      setExplainObjForRL(makeObj => ({
                        number: 9,
                        Ans1: "",
                        mainAns: "tool",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "Gogo,Zoo bears, unintelligent",
                        explain: "In Paragraph D, a bear at Tennoji Zoo was observed using a branch as a tool to manipulate its environment, such as dislodging meat out of its reach. This shows that bears are capable of using tools, which highlights their problem-solving skills."
                      }))
                    }}
                  > <Explain_Btn /></span>
                </div>

                : ""}
            </i>
            .</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques10"> . This allowed him to knock down some<span className='numberOfQuestion'>10</span>
            <input type="text" name="ques10" id="ques10" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Cambridge-16-Test1" && !UserData.ques10.match(/meat/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Cambridge-16-Test1" && UserData.ques10 != "" && UserData.ques10 == "meat" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Cambridge-16-Test1" && !UserData.ques10.match(/meat/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  meat
                  <span className=''
                    onClick={() => {

                      setExplainObjForRL(makeObj => ({
                        number: 10,
                        Ans1: "",
                        mainAns: "meat",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "may not be correct, Tennoji Zoo, bear, seen, using a branch, allowed, knock down, some",
                        explain: "In Paragraph D, the polar bear used the branch (a tool) to knock down a piece of meat that was hung out of its reach. This action demonstrates the bear’s ability to use tools for practical purposes and solve problems to obtain food."
                      }))
                    }}
                  > <Explain_Btn /></span>
                </div>

                : ""}
            </i>
            .</label>
        </div>



        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques11"> ●   A wild polar bear worked out a method of reaching a platform where a<span className='numberOfQuestion'>11</span>
            <input type="text" name="ques11" id="ques11" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Cambridge-16-Test1" && !UserData.ques11.match(/photographer/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Cambridge-16-Test1" && UserData.ques11 != "" && UserData.ques11 == "photographer" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Cambridge-16-Test1" && !UserData.ques11.match(/photographer/gi)
                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  photographer
                  <span className=''
                    onClick={() => {

                      setExplainObjForRL(makeObj => ({
                        number: 11,
                        Ans1: "",
                        mainAns: "photographer",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "wild polar bear, worked out, method, reaching a platform, located",
                        explain: "In Paragraph D, a wild polar bear demonstrated problem-solving behavior when it figured out a way to reach a photographer who was standing on a platform four meters high. This calculated action shows the bear’s problem-solving ability in the wild."
                      }))
                    }}
                  > <Explain_Btn /></span>
                </div>

                : ""}
            </i>
            was located.</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques12"> ●   Polar bears have displayed behaviour such as conscious manipulation of objects and activity similar to a<span className='numberOfQuestion'>12</span>
            <input type="text" name="ques12" id="ques12" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Cambridge-16-Test1" && !UserData.ques12.match(/game/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Cambridge-16-Test1" && UserData.ques12 != "" && UserData.ques12 == "game" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Cambridge-16-Test1" && !UserData.ques12.match(/game/gi)

                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  game
                  <span className=''
                    onClick={() => {

                      setExplainObjForRL(makeObj => ({
                        number: 12,
                        Ans1: "",
                        mainAns: "game",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: " Polar bears, displayed, behaviour, conscious manipulation, objects and activity, similar to",
                        explain: "In Paragraph E, polar bears were seen engaging in behavior that resembled playing a game. They were observed putting objects in piles and knocking them over, indicating a level of creativity and playful behavior that shows they are capable of more than just basic survival instincts."
                      }))
                    }}
                  > <Explain_Btn /></span>
                </div>


                : ""}
            </i>
            Bears may also display emotions. For example:</label>
        </div>


        <div className='flex gap-1 flex-wrap mb-2'>
          <label htmlFor="ques13"> ●   They may make movements suggesting<span className='numberOfQuestion'>13</span>
            <input type="text" name="ques13" id="ques13" onChange={handleChange}
              className={`inputs font-bold ${ReadingShowAnswer == "Cambridge-16-Test1" && !UserData.ques13.match(/frustration/gi) && "text-red-600"}
              ${ReadingShowAnswer == "Cambridge-16-Test1" && UserData.ques13 != "" && UserData.ques13 == "frustration" && "text-green-700"}
              `} />
            <i className='text-green-600 font-bold mr-2 ml-2'>
              {ReadingShowAnswer == "Cambridge-16-Test1" && !UserData.ques13.match(/frustration/gi)

                ? <div className='flex gap-1 border-1 border-gray-300 rounded p-1 font-bold'>
                  frustration
                  <span className=''
                    onClick={() => {

                      setExplainObjForRL(makeObj => ({
                        number: 13,
                        Ans1: "",
                        mainAns: "frustration",
                        hiddenWord: "",
                        hiddenWord2: "",
                        hiddenWord3: "",
                        keyWords: "display emotions, may make movements, suggesting, if disappointed, when hunting",
                        explain: "In Paragraph E, polar bears were seen hitting out at ice and snow in apparent frustration after failing to make a kill. This suggests that, like humans, they can experience emotions such as frustration, which is an interesting insight into their emotional range"
                      }))
                    }}
                  > <Explain_Btn /></span>
                </div>


                : ""}
            </i>
            hunting. <br />

            ●   They may form relationships with other species..</label>
        </div>
      </div>


    </section>
  )
}

export default Panel2_Q1




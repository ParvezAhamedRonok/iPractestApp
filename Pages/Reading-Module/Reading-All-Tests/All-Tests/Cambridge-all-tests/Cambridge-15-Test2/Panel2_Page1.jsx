"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "@/contexts/ContextProvider";
import Explain_Btn from "@/components/Reading-Module/Reading-All-Tests/Important/Explain-Btn";
import TF_AZ_IX_inputs from '../../Inputs/TF_AZ_IX_inputs';
import ReadingText_inputs from '../../Inputs/Text_inputs';
// end of importing---------->>




function Panel2_Q1({ handleChange, UserData, RightAnswers }) {
  const { ReadingShowAnswer, userPaymentStatusCheck, setReadingShowAnswer, explainRLQuestions, setExplainRLQuestions, explainObjForRL, setExplainObjForRL } = useStateContext();
  const [showNotePad, setShowNotePad] = useState(false);
  // let testItems = localStorage.getItem("ShowAnsByTest");
  // console.log(RightAnswers)

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
      <div className="Qrticles ml-[10px] sm:ml-[25px] mb-2">
        <h4 className='mb-2'>Questions 1-6</h4>
        <label htmlFor="">
          Reading Passage 1 has seven paragraphs, A-G. <br /><br />
          Which paragraph contains the following information? <br /><br />
          Write the correct letter, A-G, in boxes 1-6 on your answer sheet. <br /><br />
        </label>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5 '>
        {/* Question 1 */}
        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques1">
            <span className='numberOfQuestion'>1</span> reference to an appealing way of using dance that the writer is not proposing
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques1"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[0]}
            userAnswerQN={UserData.ques1}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 1,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "dance, not proposing, way of using dance",
              explain: "In Paragraph B, the writer clarifies that while dance can provide insights into urban design, it is not suggesting that everyone should literally dance their way to work."
            }}
          />
        </div>

        {/* Question 2 */}
        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques2">
            <span className='numberOfQuestion'>2</span> an example of a contrast between past and present approaches to building
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques2"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[1]}
            userAnswerQN={UserData.ques2}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 2,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "past vs present, medieval builders, modern methods",
              explain: "In Paragraph C, the writer contrasts the methods of medieval builders, who improvised with a deep knowledge of materials and sites, with modern methods that rely on detached, computer-aided designs."
            }}
          />
        </div>

        {/* Question 3 */}
        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques3">
            <span className='numberOfQuestion'>3</span> mention of an objective of both dance and engineering
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques3"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[2]}
            userAnswerQN={UserData.ques3}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 3,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "objective, dance, engineering, patterns of movement",
              explain: "In Paragraph F, the writer notes that both dance and engineering aim to design patterns of movement within space."
            }}
          />
        </div>

        {/* Question 4 */}
        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques4">
            <span className='numberOfQuestion'>4</span> reference to an unforeseen problem arising from ignoring the climate
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques4"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[3]}
            userAnswerQN={UserData.ques4}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 4,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "unforeseen problem, ignoring the climate, Peachtree Center",
              explain: "In Paragraph D, the writer discusses how the designers of the Peachtree Center failed to account for the climate, leading to unexpected problems, like the need for air conditioning due to the hot sun."
            }}
          />
        </div>

        {/* Question 5 */}
        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques5">
            <span className='numberOfQuestion'>5</span> why some measures intended to help people are being reversed
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques5"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[4]}
            userAnswerQN={UserData.ques5}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 5,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "measures reversed, guard rails, removed, negative effects",
              explain: "In Paragraph E, the writer explains that guard rails, which were initially intended to enhance pedestrian safety, are being removed because they have led to negative psychological effects and caused people to cross roads in unsafe ways."
            }}
          />
        </div>

        {/* Question 6 */}
        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques6">
            <span className='numberOfQuestion'>6</span> reference to how transport has an impact on human lives
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques6"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[5]}
            userAnswerQN={UserData.ques6}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 6,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "transport, impact, human lives",
              explain: "In Paragraph A, the writer discusses how urban transportation affects people's physical and mental health, social lives, and access to work and culture."
            }}
          />
        </div>
      </div>



      <div className="w-full pl-[10px] sm:pl-[25px]">
        <h4 className='mb-2'>Questions 7-13</h4>
        <label htmlFor="">
          Complete the summary below. <br /><br />

          Choose ONE WORD ONLY from the passage for each answer. <br /><br />

          Write your answers in boxes 7-13 on your answer sheet.<br />
        </label>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5 '>
        <h4 className='text-center'>Guard rails</h4> <br />
        <div className='flex flex-wrap'>
          Guard rails were introduced on British roads to improve the <span className="numberOfQuestion">7</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques7"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[6]}
            userAnswerQN={UserData.ques7}
            ExplainDataObj={{
              number: 7,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "guard rails, safety, pedestrians",
              explain: "In Paragraph E, the writer states that guard rails were originally introduced to improve pedestrian safety."
            }}
          /> of pedestrians, while ensuring that the movement of <span className="numberOfQuestion">8</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques8"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[7]}
            userAnswerQN={UserData.ques8}
            ExplainDataObj={{
              number: 8,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "movement, traffic",
              explain: "In Paragraph E, the guard rails were designed to ensure that traffic could move smoothly without disruption."
            }}
          />. is not disrupted. Pedestrians are led to access points, and encouraged to cross one <span className="numberOfQuestion">9</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques9"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[8]}
            userAnswerQN={UserData.ques9}
            ExplainDataObj={{
              number: 9,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "access points, carriageway",
              explain: "In Paragraph E, the writer explains how guard rails guide pedestrians to cross one carriageway at a time."
            }}
          />. at a time.

          An unintended effect is to create psychological difficulties in crossing the road, particularly for less <span className="numberOfQuestion">10</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques10"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[9]}
            userAnswerQN={UserData.ques10}
            ExplainDataObj={{
              number: 10,
              Ans1: "",
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "psychological difficulties, mobile",
              explain: "In Paragraph E, the writer describes how guard rails create psychological barriers, particularly for people with mobility challenges."
            }}
          />. people. Another result is that some people cross the road in a <span className="numberOfQuestion">11</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques11"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[10]}
            userAnswerQN={UserData.ques11}
            ExplainDataObj={{
              number: 11,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "dangerous, crossings",
              explain: "In Paragraph E, the writer discusses how the barriers encourage some pedestrians to cross the road in unsafe ways, leading to dangerous crossings."
            }}
          />. way. The guard rails separate <span className="numberOfQuestion">12</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques12"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[11]}
            userAnswerQN={UserData.ques12}
            ExplainDataObj={{
              number: 12,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "separate, communities",
              explain: "In Paragraph E, the writer explains that guard rails divide communities by making it harder for people to move freely through spaces."
            }}
          />, and make it more difficult to introduce forms of transport that are <span className="numberOfQuestion">13</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques13"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[12]}
            userAnswerQN={UserData.ques13}
            ExplainDataObj={{
              number: 13,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "difficult, healthy transport",
              explain: "In Paragraph E, the writer states that guard rails make it more difficult to promote healthy forms of transport, such as walking or cycling, by disrupting natural movement."
            }}
          />
        </div>

      </div>

    </section>
  )
}

export default Panel2_Q1




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

      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4 className=''>Questions 1 - 7</h4> <br />
        <h6>
          Do the following statements agree with the information given in Reading Passage 1? <br />
          In boxes 1–7 on your answer sheet, write
        </h6> <br />
        <div className='mt-2 mb-2 '>
          <strong>TRUE</strong> if the statement agrees with the information <br /> <br />

          <strong>FALSE</strong> if the statement contradicts the information  <br /> <br />

          <strong>NOT GIVEN </strong> if there is no information on this
        </div>

      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5 '>
        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span> On leaving school, Moore did what his father wanted him to do.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques1"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[0]}
            userAnswerQN={UserData.ques1}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 1,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "leaving school, father wanted, Moore complied",
              explain: "Passage (Paragraph A): After leaving school, Moore hoped to become a sculptor, but instead he complied with his father’s wish that he train as a schoolteacher."
            }}
          />

          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span> Moore began studying sculpture in his first term at the Leeds School of Art.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques2"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[1]}
            userAnswerQN={UserData.ques2}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 2,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "first term, Leeds School of Art, sculpture study",
              explain: "Passage (Paragraph B): In his first year, he spent most of his time drawing. Although he wanted to study sculpture, no teacher was appointed until his second year."
            }}
          />

          <label htmlFor="ques3"><span className='numberOfQuestion'>3</span> When Moore started at the Royal College of Art, its reputation for teaching sculpture was excellent.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques3"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[2]}
            userAnswerQN={UserData.ques3}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 3,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Royal College of Art, reputation, teaching sculpture",
              explain: "The passage says he studied there, but no mention of reputation is given."
            }}
          />

          <label htmlFor="ques4"><span className='numberOfQuestion'>4</span> Moore became aware of ancient sculpture as a result of visiting London Museums.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques4"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[3]}
            userAnswerQN={UserData.ques4}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 4,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "became aware, ancient sculpture, London museums",
              explain: "Passage (Paragraph B): Moore visited many of the London museums... he discovered the power and beauty of ancient Egyptian and African sculpture."
            }}
          />

          <label htmlFor="ques5"><span className='numberOfQuestion'>5</span> The Trocadero Museum’s Mayan sculpture attracted a lot of public interest.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques5"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[4]}
            userAnswerQN={UserData.ques5}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 5,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Trocadero Museum, Mayan sculpture, public interest",
              explain: "Passage (Paragraph C): He was impressed by a cast of a Mayan sculpture..."
            }}
          />

          <label htmlFor="ques6"><span className='numberOfQuestion'>6</span> Moore thought the Mayan sculpture was similar in certain respects to other stone sculptures.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques6"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[5]}
            userAnswerQN={UserData.ques6}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 6,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Mayan sculpture, similar to others",
              explain: "Passage (Paragraph C): He thought it had a power and originality that no other stone sculpture possessed."
            }}
          />

          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span> The artists who belonged to Unit One wanted to make modern art and architecture more popular.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques7"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[6]}
            userAnswerQN={UserData.ques7}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 7,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Unit One, artists, modern art, more popular",
              explain: "Passage (Paragraph C): The aim of the group was to convince the English public of the merits of the emerging international movement in modern art and architecture."
            }}
          />
        </div>
      </div>


      <div className="w-full pl-[10px] sm:pl-[25px]">
        <div className="Articles">
          <h4>Questions 8-13</h4> <br />
          <label htmlFor="">
            Complete the notes below. <br /> <br />
            Choose ONE WORD ONLY from the passage for each answer. <br /> <br />
            Write your answers in boxes 8-13 on your answer sheet.  <br />
          </label>
        </div>
        <div className="Questions">
          <h4 className='text-center'>Moore’s career as an artist</h4> <br />
          <h5>1930s</h5> <br />
          ●   Moore’s exhibition at the Leicester Galleries is criticised by the press <br />
          <div className="flex flex-wrap">
            ●   Moore is urged to offer his  <span className="numberOfQuestion">8</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques8"
              TestName={"Cambridge-15-Test3"}
              AnswerData={RightAnswers && RightAnswers[7]}
              userAnswerQN={UserData.ques8}
              ExplainDataObj={{
                number: 8,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "",
                explain: `Passage Reference (Paragraph D): ** 

"There were calls for his resignation from the Royal College..." ** 
Because Moore’s exhibition received harsh criticism, people wanted him to resign from his teaching job. The phrase "calls for his resignation" exactly matches what the question is asking — that he was urged to step down. So the answer is resignation.`
              }}
            />and leave the Royal College.
          </div> <br />
          <h5>1940s</h5> <br />
          <div className="flex flex-wrap">
            ●   Moore turns to drawing because  <span className="numberOfQuestion">9</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques9"
              TestName={"Cambridge-15-Test3"}
              AnswerData={RightAnswers && RightAnswers[8]}
              userAnswerQN={UserData.ques9}
              ExplainDataObj={{
                number: 9,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "shortage of materials, focus on drawing",
                explain: `Passage Reference (Paragraph E): **
            "A shortage of materials forced him to focus on drawing." ** 
            During World War II, there weren't enough materials (like stone, clay, or bronze) for sculpting, so Moore switched to drawing instead. This directly answers the blank with the word materials.`
              }}
            />. for sculpting are not readily available
          </div>  <br />

          <div className="flex flex-wrap">
            ●   While visiting his hometown, Moore does some drawings of  <span className="numberOfQuestion">10</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques10"
              TestName={"Cambridge-15-Test3"}
              AnswerData={RightAnswers && RightAnswers[9]}
              userAnswerQN={UserData.ques10}
              ExplainDataObj={{
                number: 10,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "sketches, Castleford, miners",
                explain: `Passage Reference (Paragraph E):  ** 

"He returned to Castleford to make a series of sketches of the miners who worked there." ** 
Castleford was Moore’s hometown, and he drew miners — people who work underground in coal mines. That’s exactly who he sketched while visiting home.`
              }}
            />
          </div> <br />

          <div className="flex flex-wrap">
            ●   Moore is employed to produce a sculpture of a  <span className="numberOfQuestion">11</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques11"
              TestName={"Cambridge-15-Test3"}
              AnswerData={RightAnswers && RightAnswers[10]}
              userAnswerQN={UserData.ques11}
              ExplainDataObj={{
                number: 11,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "commission, sculpture, depicting a family",
                explain: `Passage Reference (Paragraph E): ** 

"Harlow, a town near London, offered Moore a commission for a sculpture depicting a family." ** 
He was paid (commissioned) to make a family sculpture for the town of Harlow. This marks a shift in Moore's style to more emotional, human themes. The blank asks what the sculpture was of — so family is correct.

`
              }}
            />
          </div> <br />

          <div className="flex flex-wrap">
            ●    <span className="numberOfQuestion">12</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques12"
              TestName={"Cambridge-15-Test3"}
              AnswerData={RightAnswers && RightAnswers[11]}
              userAnswerQN={UserData.ques12}
              ExplainDataObj={{
                number: 12,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "available to collectors, all over the world",
                explain: `Passage Reference (Paragraph E): ** 

"Moore’s work became available to collectors all over the world." **
His sculptures were reproduced in bronze editions and sold globally. The people buying them were collectors, which directly answers the question.`
              }}
            />. start to buy Moore’s work
          </div> <br />

          <div className="flex flex-wrap">
            ●   Moore’s increased  <span className="numberOfQuestion">13</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques13"
              TestName={"Cambridge-15-Test3"}
              AnswerData={RightAnswers && RightAnswers[12]}
              userAnswerQN={UserData.ques13}
              ExplainDataObj={{
                number: 13,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "boost to his income, enabled him to take on ambitious projects",
                explain: `Passage Reference (Paragraph E): ** 

"The boost to his income enabled him to take on ambitious projects..." ** 
Thanks to more sales and commissions, his income grew. With more money, he could afford larger, more complex works. So the correct word to complete the sentence is income.`
              }}
            /> makes it possible for him to do more ambitious sculptures
          </div> <br />
          <h5>1950s</h5>  <br />
          ●   Moore’s series of bronze figures marks a further change in his style


        </div>

      </div>

    </section>
  )
}

export default Panel2_Q1




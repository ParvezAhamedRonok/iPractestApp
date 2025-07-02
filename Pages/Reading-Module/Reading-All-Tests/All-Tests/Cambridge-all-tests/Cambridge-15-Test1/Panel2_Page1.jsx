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
      <div className="w-full pl-[10px] sm:pl-[25px]">
        <h2 className="text-2xl font-bold mb-4">The Nutmeg Tree and Fruit</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">Questions 1-4</h3>
          <p>Complete the notes below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.</p>
          <ul className="list-disc pl-6 mt-2">
            <li className='flex flex-wrap gap-0'>The leaves of the tree are   <span className="numberOfQuestion">1</span>
              <ReadingText_inputs
                handleValueChange={handleChange}
                QNum="ques1"
                TestName={"Cambridge-15-Test1"}
                AnswerData={RightAnswers && RightAnswers[0]}
                userAnswerQN={UserData.ques1}
                ExplainDataObj={{
                  number: 1,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: "Oval leaves, dark green, tough foliage.",
                  explain: "In Paragraph A, the nutmeg tree has thick branches and dense foliage with tough, dark green, oval-shaped leaves. The description confirms that the shape of the leaves is oval."
                }}
              />in shape.</li>
            <li className='flex flex-wrap gap-0'>A   <span className="numberOfQuestion">2</span>
              <ReadingText_inputs
                handleValueChange={handleChange}
                QNum="ques2"
                TestName={"Cambridge-15-Test1"}
                AnswerData={RightAnswers && RightAnswers[1]}
                userAnswerQN={UserData.ques2}
                ExplainDataObj={{
                  number: 2,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: "Encased in a husk, splits into two halves when ripe, protective covering.",
                  explain: "In Paragraph A, the fruit of the nutmeg tree is enclosed in a fleshy husk that splits open naturally when ripe. This husk acts as a protective outer layer for the fruit."
                }}
              /> surrounds the fruit and breaks open when the fruit is ripe.</li>
            <li className='flex flex-wrap gap-0'>The   <span className="numberOfQuestion">3</span>
              <ReadingText_inputs
                handleValueChange={handleChange}
                QNum="ques3"
                TestName={"Cambridge-15-Test1"}
                AnswerData={RightAnswers && RightAnswers[2]}
                userAnswerQN={UserData.ques3}
                ExplainDataObj={{
                  number: 3,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: "Purple-brown seed, dried seed, source of nutmeg.",
                  explain: " In Paragraph A, inside the fruit, there is a purple-brown seed which, when dried, is used to produce the spice nutmeg. This confirms that the seed is the primary source of the spice."
                }}
              /> is used to produce the spice nutmeg.</li>
            <li className='flex flex-wrap gap-0'>The covering known as the aril is used to produce   <span className="numberOfQuestion">4</span>
              <ReadingText_inputs
                handleValueChange={handleChange}
                QNum="ques4"
                TestName={"Cambridge-15-Test1"}
                AnswerData={RightAnswers && RightAnswers[3]}
                userAnswerQN={UserData.ques4}
                ExplainDataObj={{
                  number: 4,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: "Aril, lacy red covering, source of mace.",
                  explain: "In Paragraph A, the aril, a lacy red or crimson covering around the seed, is identified as the source of mace, a separate spice extracted from the nutmeg fruit."
                }}
              />.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Questions 5-7</h3> <br />
          <p>Do the following statements agree with the information given in Reading Passage 1?</p>
          <p>Write <strong>TRUE</strong> if the statement agrees with the information.</p>
          <p>Write <strong>FALSE</strong> if the statement contradicts the information.</p>
          <p>Write <strong>NOT GIVEN</strong> if there is no information on this.</p> <br />
          <ul className="list-disc pl-6 mt-2">
            <li> <label htmlFor="ques1"><span className='numberOfQuestion'>5</span> In the Middle Ages, most Europeans knew where nutmeg was grown.</label>
              <TF_AZ_IX_inputs
                handleValueChange={handleChange}
                QNum="ques5"
                TestName="Cambridge-15-Test1"
                AnswerData={RightAnswers && RightAnswers[4]}
                userAnswerQN={UserData.ques5}
                options={["TRUE", "FALSE", "NOT GIVEN"]}
                ExplainDataObj={{
                  number: 5,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: "Exclusive importers, never revealed the exact location, controlled trade.",
                  explain: "In Paragraph B, it is stated that the Arabs controlled the trade of nutmeg and never revealed its exact source to European buyers. This means that most Europeans did not know where nutmeg was grown."
                }}
              /></li>
            <li> <label htmlFor="ques1"><span className='numberOfQuestion'>6</span> The VOC was the world's first major trading company.</label>
              <TF_AZ_IX_inputs
                handleValueChange={handleChange}
                QNum="ques6"
                TestName="Cambridge-15-Test1"
                AnswerData={RightAnswers && RightAnswers[5]}
                userAnswerQN={UserData.ques6}
                options={["TRUE", "FALSE", "NOT GIVEN"]}
                ExplainDataObj={{
                  number: 6,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: "Richest commercial operation, global dominance, but no mention of first trading company.",
                  explain: "In Paragraph C, it is mentioned that the VOC (Dutch East India Company) was the richest trading company in the world at the time. However, there is no mention that it was the first major trading company in history."
                }}
              /></li>
            <li> <label htmlFor="ques1"><span className='numberOfQuestion'>7</span> Following the Treaty of Breda, the Dutch had control of all the islands where nutmeg grew.</label>
              <TF_AZ_IX_inputs
                handleValueChange={handleChange}
                QNum="ques7"
                TestName="Cambridge-15-Test1"
                AnswerData={RightAnswers && RightAnswers[6]}
                userAnswerQN={UserData.ques7}
                options={["TRUE", "FALSE", "NOT GIVEN"]}
                ExplainDataObj={{
                  number: 7,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: "Treaty of Breda, Dutch obtained Run, Dutch monopoly on nutmeg trade.",
                  explain: "In Paragraph D, after decades of conflict, the Dutch and British reached the Treaty of Breda in 1667, where the British gave up the island of Run to the Dutch. Since Run was the last nutmeg-producing island outside Dutch control, this gave them full monopoly over the nutmeg trade for the next century."
                }}
              /></li>
          </ul>
        </div>

      </div>


      <div className="w-full pl-[10px] sm:pl-[25px]">
        <h4>Questions 8 - 13</h4>
        Complete the notes below.
        <p className="text-lg mb-6">
          Choose ONE WORD ONLY from the passage for each answer. <br /> <br />
          Write your answers in boxes 8-13 on your answer sheet.
        </p>


        <div className="Questions">
          <ul className="pl-2 pr-2">
            <div className='w-fill grid grid-cols-2 gap-3 border-[2px] border-gray-300 p-1 rounded'>
              <li>Middle Ages</li>
              <li className="flex flex-wrap">
                Nutmeg was brought to Europe by the
                <span className="numberOfQuestion">8</span>
                <ReadingText_inputs
                  handleValueChange={handleChange}
                  QNum="ques8"
                  TestName={"Cambridge-15-Test1"}
                  AnswerData={RightAnswers && RightAnswers[7]}
                  userAnswerQN={UserData.ques8}
                  ExplainDataObj={{
                    number: 8,
                    Ans1: "",
                    hiddenWord: "",
                    hiddenWord2: "",
                    keyWords: "Exclusive importers, sold to Venetian merchants, controlled trade.",
                    explain: "In Paragraph B, the passage explains that the Arabs were the only importers of nutmeg to Europe and sold it to Venetian merchants at high prices. Since they controlled the supply chain, Europeans had no direct access to the spice."
                  }}
                />
              </li>

            </div>
            <div className='w-fill grid grid-cols-2 gap-3 border-[2px] border-gray-300 p-1 rounded'>
              <li>16th century</li>
              <li>European nations took control of the nutmeg trade</li>
            </div>
            <div className='w-fill grid grid-cols-2 gap-3 border-[2px] border-gray-300 p-1 rounded'>
              <li className='m-auto'>17th century</li>
              <div>
                <li className="flex flex-wrap">
                  Demand for nutmeg grew, as it was believed to be effective against the disease known as the
                  <span className="numberOfQuestion">9</span>
                  <ReadingText_inputs
                    handleValueChange={handleChange}
                    QNum="ques9"
                    TestName={"Cambridge-15-Test1"}
                    AnswerData={RightAnswers && RightAnswers[8]}
                    userAnswerQN={UserData.ques9}
                    ExplainDataObj={{
                      number: 9,
                      Ans1: "",
                      hiddenWord: "",
                      hiddenWord2: "",
                      keyWords: "Deadly disease, doctors believed nutmeg was a cure, increased demand.",
                      explain: "In Paragraph C, it is mentioned that during the 17th century, thousands of people were dying from the plague, a highly contagious disease. Doctors believed that nutmeg could protect against or cure the plague, leading to a surge in demand."
                    }}
                  />
                </li> <br />
                The Dutch  <br />
                – took control of the Banda Islands <br />
                – restricted nutmeg production to a few areas <br />
                <li className="flex flex-wrap">
                  – put
                  <span className="numberOfQuestion">10</span>
                  <ReadingText_inputs
                    handleValueChange={handleChange}
                    QNum="ques10"
                    TestName={"Cambridge-15-Test1"}
                    AnswerData={RightAnswers && RightAnswers[9]}
                    userAnswerQN={UserData.ques10}
                    ExplainDataObj={{
                      number: 10,
                      Ans1: "",
                      hiddenWord: "",
                      hiddenWord2: "",
                      keyWords: "Covered with lime, no chance of fertile seeds growing outside the islands.",
                      explain: "In Paragraph D, to maintain their monopoly, the Dutch covered exported nutmeg with lime to prevent it from being planted elsewhere. This ensured that no fertile nutmeg seeds could be smuggled out and grown in other regions."
                    }}
                  />
                  <span className="font-medium">on nutmeg to avoid it being cultivated outside the islands</span>
                </li>
                <li className="flex flex-wrap">
                  – finally obtained the island of
                  <span className="numberOfQuestion">11</span>
                  <ReadingText_inputs
                    handleValueChange={handleChange}
                    QNum="ques11"
                    TestName={"Cambridge-15-Test1"}
                    AnswerData={RightAnswers && RightAnswers[10]}
                    userAnswerQN={UserData.ques11}
                    ExplainDataObj={{
                      number: 11,
                      Ans1: "",
                      hiddenWord: "",
                      hiddenWord2: "",
                      keyWords: "Treaty of Breda, Dutch obtained Run, full monopoly on nutmeg production.",
                      explain: "In Paragraph D, the Dutch traded the island of Manhattan (New Amsterdam) to the British in exchange for the island of Run, the last nutmeg-producing island not under their control. This secured their full dominance over nutmeg production."
                    }}
                  />
                  <span className="font-medium">from the British</span>
                </li>
              </div>
            </div>
            <div className='w-fill grid grid-cols-2 gap-3 border-[2px] border-gray-300 p-1 rounded'>
              <li className='m-auto'>Late 18th century</li>
              <div>
                <div className="flex flex-wrap">
                  1770 – nutmeg plants were secretly taken to
                  <span className="numberOfQuestion">12</span>
                  <ReadingText_inputs
                    handleValueChange={handleChange}
                    QNum="ques12"
                    TestName={"Cambridge-15-Test1"}
                    AnswerData={RightAnswers && RightAnswers[11]}
                    userAnswerQN={UserData.ques12}
                    ExplainDataObj={{
                      number: 12,
                      Ans1: "",
                      hiddenWord: "",
                      hiddenWord2: "",
                      keyWords: "Pierre Poivre, smuggled nutmeg, Mauritius, broke Dutch monopoly.",
                      explain: "In Paragraph E, Pierre Poivre, a Frenchman, successfully smuggled nutmeg plants to Mauritius, breaking the Dutch monopoly for the first time. This allowed nutmeg to be cultivated outside Indonesia."
                    }}
                  />
                </div>
                <li className="flex flex-wrap">
                  1778 – half the Banda Islands’ nutmeg plantations were destroyed by a
                  <span className="numberOfQuestion">13</span>
                  <ReadingText_inputs
                    handleValueChange={handleChange}
                    QNum="ques13"
                    TestName={"Cambridge-15-Test1"}
                    AnswerData={RightAnswers && RightAnswers[12]}
                    userAnswerQN={UserData.ques12}
                    ExplainDataObj={{
                      number: 13,
                      Ans1: "",
                      hiddenWord: "",
                      hiddenWord2: "",
                      keyWords: "Volcanic eruption, tsunami, destroyed nutmeg groves.",
                      explain: "In Paragraph E, it is stated that a volcanic eruption in 1778 caused a tsunami, which destroyed half of the nutmeg plantations in the Banda region. This was a major setback for the Dutch nutmeg trade."
                    }}
                  />
                </li>

              </div>
            </div>








          </ul>
        </div>
      </div>

    </section>
  )
}

export default Panel2_Q1




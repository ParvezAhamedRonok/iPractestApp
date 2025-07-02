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
        <h4 className=''>Questions 1 - 5</h4> <br />
        <label htmlFor="">
          Complete the notes below. <br /><br />

          Choose ONE WORD ONLY from the passage for each answer.<br /><br />

          Write your answer in boxes 1-5 on your answer sheet<br />
        </label>


      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5 '>
        <h4 className='text-center'>The importance of the huarango tree</h4> <br />
        –   its roots can extend as far as 80 metres into the soil <br />
        <div className="flex flex-wrap">
          –   can access    <span className="numberOfQuestion">1</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques1"
            TestName={"Cambridge-15-Test4"}
            AnswerData={RightAnswers && RightAnswers[0]}
            userAnswerQN={UserData.ques1}
            ExplainDataObj={{
              number: 1,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `water, roots, deep, underground, source.`,
              explain: `In Paragraph A, the passage says “the only year-round source of water is located tens of metres below the surface” and “they [roots] suck up water for the tree.” This clearly shows that huarango roots can access water deep underground.`
            }}
          /> deep below the surface
        </div> <br />
        <div className="flex flex-wrap">
          –   was a crucial part of local inhabitants’   <span className="numberOfQuestion">2</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques2"
            TestName={"Cambridge-15-Test4"}
            AnswerData={RightAnswers && RightAnswers[1]}
            userAnswerQN={UserData.ques2}
            ExplainDataObj={{
              number: 2,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `crucial part, local inhabitants, diet, food, survival.`,
              explain: `In Paragraph B, Dr. Beresford-Jones believes the huarango was key to the ancient people’s diet, helping them survive during droughts.`
            }}
          /> a long time ago
        </div> <br />
        <div className="flex flex-wrap">
          –   helped people to survive periods of    <span className="numberOfQuestion">3</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques3"
            TestName={"Cambridge-15-Test4"}
            AnswerData={RightAnswers && RightAnswers[2]}
            userAnswerQN={UserData.ques3}
            ExplainDataObj={{
              number: 3,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `survive, periods, drought, withstand, failed crops.`,
              explain: `Still in Paragraph B, the passage states that because of the tree’s deep roots, “it allowed local people to withstand years of drought when their other crops failed.”`
            }}
          />
        </div> <br />
        <div className="flex flex-wrap">
          –   prevents    <span className="numberOfQuestion">4</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques4"
            TestName={"Cambridge-15-Test4"}
            AnswerData={RightAnswers && RightAnswers[3]}
            userAnswerQN={UserData.ques4}
            ExplainDataObj={{
              number: 4,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `erosion, soil, cutting down, prevents, native woodland.`,
              explain: `Paragraph B mentions that cutting down the woodland “leads to erosion, as there is nothing to keep the soil in place.” So, huarango prevents erosion.`
            }}
          /> of the soil
        </div> <br />
        <div className="flex flex-wrap">
          –   prevents land from becoming a    <span className="numberOfQuestion">5</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques5"
            TestName={"Cambridge-15-Test4"}
            AnswerData={RightAnswers && RightAnswers[4]}
            userAnswerQN={UserData.ques5}
            ExplainDataObj={{
              number: 5,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `desert, land, turns into, without trees, nothing grows.`,
              explain: `At the end of Paragraph B, it says “when the huarangos go, the land turns into a desert.”`
            }}
          />
        </div> <br />



      </div>
      <div className="w-full pl-[10px] sm:pl-[25px]">
        <div className="Articles">
          <h4>Questions 6 - 8</h4> <br />
          <label htmlFor="">
            Complete the table below. <br /><br />
            Choose NO MORE THAN TWO WORDS from the passage for each answer.<br /><br />
            Write your answers in boxes 6-8 on your answer sheet<br />
          </label>
        </div>
        <div className="Questions">
          <h4 className='text-center border-[2px] border-gray-300 rounded p-2'>Traditional uses of the huarango tree</h4>
          <div className='grid grid-cols-2 justify-between gap-1 border-[2px] border-gray-300 rounded p-2'>
            <p>Part of tree</p>
            <p>Traditional use</p>
          </div>
          <div className='grid grid-cols-2 justify-between gap-1 border-[2px] border-gray-300 rounded p-2'>
            <div className=' flex flex-wrap'>
              <span className="numberOfQuestion">6</span>
              <ReadingText_inputs
                handleValueChange={handleChange}
                QNum="ques6"
                TestName={"Cambridge-15-Test4"}
                AnswerData={RightAnswers && RightAnswers[5]}
                userAnswerQN={UserData.ques6}
                ExplainDataObj={{
                  number: 6,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: `branches, fuel, charcoal, cooking, heating.`,
                  explain: `In Paragraph C, it says “its branches were used for charcoal for cooking and heating.”`
                }}
              />
            </div>
            <p>Fuel</p>
          </div>
          <div className='grid grid-cols-2 justify-between gap-1 border-[2px] border-gray-300 rounded p-2'>
            <div className=' flex flex-wrap'>
              <span className="numberOfQuestion">7</span>
              <ReadingText_inputs
                handleValueChange={handleChange}
                QNum="ques7"
                TestName={"Cambridge-15-Test4"}
                AnswerData={RightAnswers && RightAnswers[6]}
                userAnswerQN={UserData.ques7}
                ExplainDataObj={{
                  number: 7,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: `traditional medicine, remedies, herbal, leaves, bark.`,
                  explain: `Paragraph C again: “Its leaves and bark were used for herbal remedies.”`
                }}
              />
            </div>
            <p>Medicine</p>
          </div>
          <div className='grid grid-cols-2 justify-between gap-1 border-[2px] border-gray-300 rounded p-2'>
            <div className=' flex flex-wrap'>
              <span className="numberOfQuestion">8</span>
              <ReadingText_inputs
                handleValueChange={handleChange}
                QNum="ques8"
                TestName={"Cambridge-15-Test4"}
                AnswerData={RightAnswers && RightAnswers[7]}
                userAnswerQN={UserData.ques8}
                ExplainDataObj={{
                  number: 8,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: `trunk, build, construction, houses.`,
                  explain: `Also in Paragraph C, the passage says “its trunk was used to build houses.” This refers to construction.`
                }}
              />
            </div>
            <p>construction</p>
          </div>
        </div>
      </div>
      <div className="w-full pl-[10px] sm:pl-[25px] mb-5">
        <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
          <h4 className=''>Questions 9 - 13</h4> <br />
          <h6>
            Do the following statements agree with the information given in Reading Passage 1? <br />
            In boxes 9 - 13 on your answer sheet, write
          </h6> <br />
          <div className='mt-2 mb-2 '>
            <strong>TRUE</strong> if the statement agrees with the information <br /> <br />

            <strong>FALSE</strong> if the statement contradicts the information  <br /> <br />

            <strong>NOT GIVEN </strong> if there is no information on this
          </div>

        </div>
        <div className='Questions'>
          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques9"><span className='numberOfQuestion'>9</span> Local families have told Whaley about some traditional uses of huarango products.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques9"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[8]}
              userAnswerQN={UserData.ques9}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 9,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `no mention of information from locals.`,
                explain: `Nowhere in the passage does it say that local families told Whaley about traditional uses. It only says Whaley helps them rediscover uses or traditions.`
              }}
            />
          </div>
          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques10"><span className='numberOfQuestion'>10</span> Farmer Alberto Benevides is now making a good profit from growing huarangos.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques10"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[9]}
              userAnswerQN={UserData.ques10}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 10,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `doesn’t provide enough, not profitable yet, hopes for future.`,
                explain: `Paragraph E says Alberto Benevides’ farm “doesn’t yet provide him with enough to live on.” So, he’s not making a good profit yet.`
              }}
            />
          </div>
          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques11"><span className='numberOfQuestion'>11</span> Whaley needs the co-operation of farmers to help preserve the area’s wildlife.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques11"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[10]}
              userAnswerQN={UserData.ques11}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 11,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `co-operation, farmers, preserve, corridors, wildlife.`,
                explain: `Paragraph F clearly states that Whaley is “persuading farmers to let him plant forest corridors on their land” to preserve wildlife like mammals, birds, and insects.`
              }}
            />
          </div>
          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques12"><span className='numberOfQuestion'>12</span> For Whaley’s project to succeed, it needs to be extended over a very large area.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques12"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[11]}
              userAnswerQN={UserData.ques12}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 12,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `confined, small areas, model, few trees, not large area.`,
                explain: `Paragraph G explains that “life has always been confined to corridors and islands here,” suggesting the project doesn’t need to cover huge areas to succeed.`
              }}
            />
          </div>
          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques13"><span className='numberOfQuestion'>13</span> Whaley has plans to go to Africa to set up a similar project.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques13"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[12]}
              userAnswerQN={UserData.ques13}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 13,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `mentions Africa, but no plans stated, not given.`,
                explain: `Although Whaley sees potential for the model to work in places like Africa, there is no specific mention of any plan to go there.`
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Panel2_Q1




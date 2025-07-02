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
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span> People had expected Andy Murray to become the world’s top tennis player for at least five years before 2016.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques1"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[0]}
            userAnswerQN={UserData.ques1}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 1,
              Ans1: "",
              hiddenWord: "talented outsider",
              hiddenWord2: "ntered but never won",
              keyWords: `"talented outsider," "entered but never won"`,
              explain: "Paragraph A states that before 2016, Murray was considered a talented outsider who entered but never won major tournaments. This contradicts the idea that people expected him to become world number one."
            }}
          />

          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span> The change that Andy Murray made to his rackets attracted a lot of attention.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques2"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[1]}
            userAnswerQN={UserData.ques2}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 2,
              Ans1: "",
              hiddenWord: "so subtle as to pass more or less unnoticed",
              hiddenWord2: "",
              keyWords: "so subtle as to pass more or less unnoticed",
              explain: "Paragraph B explains that Murray changed to a synthetic string for the mains in 2012. However, it also states that this change was so subtle as to pass more or less unnoticed. This means the change did not attract much attention."
            }}
          />

          <label htmlFor="ques3"><span className='numberOfQuestion'>3</span> Most of the world’s top players take a professional racket stringer on tour with them.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques3"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[2]}
            userAnswerQN={UserData.ques3}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 3,
              Ans1: "",
              hiddenWord: "No direct information about traveling with a stringer",
              hiddenWord2: "",
              keyWords: "No direct information about traveling with a stringer",
              explain: "The passage mentions the importance of racket stringing (Paragraph C), but it does not say whether most top players take a stringer with them."
            }}
          />

          <label htmlFor="ques4"><span className='numberOfQuestion'>4</span> Mike and Bob Bryan use rackets that are light in comparison to the majority of rackets.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques4"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[3]}
            userAnswerQN={UserData.ques4}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 4,
              Ans1: "",
              hiddenWord: "There is no Parvez Ahamed",
              hiddenWord2: "",
              keyWords: "weigh more than the average model",
              explain: "Paragraph C states that the Bryan brothers' rackets weigh more than the average model. This contradicts the statement that their rackets are lighter."
            }}
          />

          <label htmlFor="ques5"><span className='numberOfQuestion'>5</span> Werner Fischer played with a spaghetti-strung racket that he designed himself.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques5"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[4]}
            userAnswerQN={UserData.ques5}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 5,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "No mention of Fischer designing the racket",
              explain: "Paragraph D mentions that Werner Fischer played with a spaghetti-strung racket, but it does not say whether he personally designed it."
            }}
          />

          <label htmlFor="ques6"><span className='numberOfQuestion'>6</span> The weather can affect how professional players adjust the strings on their rackets.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques6"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[5]}
            userAnswerQN={UserData.ques6}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 6,
              Ans1: "",
              hiddenWord: "climatic conditions",
              hiddenWord2: "",
              keyWords: "climatic conditions",
              explain: "Paragraph E states that players adjust their racket strings based on court surface, climatic conditions, and game styles. This confirms that weather (climatic conditions) affects string adjustments."
            }}
          />

          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span> It was believed that the change Pete Sampras made to his rackets contributed to his strong serve.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques7"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[6]}
            userAnswerQN={UserData.ques7}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 7,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "serving power and attributed to the addition of four to five lead weights",
              explain: `Paragraph F explains that Pete Sampras added "four to five lead weights onto his rackets" and that "much of [his] serving power was attributed to" this modification.`
            }}
          />
        </div>



      </div>
      <div className="w-full pl-[10px] sm:pl-[25px]">
        <h1 className="text-2xl font-bold mb-6">
          <h4>Questions 8 - 13</h4>
          Complete the notes below.
        </h1>
        <p className="text-lg mb-6">
          Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 8–13 on your answer sheet.
        </p>
        <h2 className="text-xl font-semibold mb-4 text-center ">The tennis racket and how it has changed</h2>
        <ul className="pl-2 pr-2">
          <li className="flex flex-wrap">
            Mike and Bob Bryan made changes to the types of
            <span className="numberOfQuestion">8</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques8"
              TestName={"Cambridge-19-Test1"}
              AnswerData={RightAnswers && RightAnswers[7]}
              userAnswerQN={UserData.ques8}
              ExplainDataObj={{
                number: 8,
                Ans1: "",
                hiddenWord: "experimented with different kinds of paint",
                hiddenWord2: "",
                keyWords: "experimented with different kinds of paint",
                explain: "Paragraph C states that the Bryan brothers experimented with different kinds of paint on their racket frames"
              }}
            />
            used on their racket frames.
          </li>

          <li className="flex flex-wrap">
            Players were not allowed to use the spaghetti-strung racket because of the amount of
            <span className="numberOfQuestion">9</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques9"
              TestName={"Cambridge-19-Test1"}
              AnswerData={RightAnswers && RightAnswers[8]}
              userAnswerQN={UserData.ques9}
              ExplainDataObj={{
                number: 9,
                Ans1: "",
                hiddenWord: "generated so much topspin",
                hiddenWord2: "",
                keyWords: "generated so much topspin",
                explain: `Paragraph D states that the spaghetti-strung racket was banned because it "generated so much topspin that it was quickly banned."`
              }}
            />
            <span className="font-medium">it created.</span>
          </li>

          <li className="flex flex-wrap">
            Changes to rackets can be regarded as being as important as players’ diets or the
            <span className="numberOfQuestion">10</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques10"
              TestName={"Cambridge-19-Test1"}
              AnswerData={RightAnswers && RightAnswers[9]}
              userAnswerQN={UserData.ques10}
              ExplainDataObj={{
                number: 10,
                Ans1: "",
                hiddenWord: "equal in significance to nutrition or training",
                hiddenWord2: "",
                keyWords: "equal in significance to nutrition or training",
                explain: `Paragraph D states that racket modification is "equal in significance to nutrition or training."`
              }}
            />
            <span className="font-medium">they do.</span>
          </li>

          <li className="flex flex-wrap">
            All rackets used to have natural strings made from the
            <span className="numberOfQuestion">11</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques11"
              TestName={"Cambridge-19-Test1"}
              AnswerData={RightAnswers && RightAnswers[10]}
              userAnswerQN={UserData.ques11}
              ExplainDataObj={{
                number: 11,
                Ans1: "",
                hiddenWord: `"natural gut," "sheep or cow intestines"`,
                hiddenWord2: "",
                keyWords: "Vertical tubes, grow, strawberries, herbs.",
                explain: `Paragraph E states that "all tennis rackets were strung with natural gut made from the outer layer of sheep or cow intestines."`
              }}
            />
            <span className="font-medium">of animals.</span>
          </li>

          <div className="flex flex-wrap">
            Pete Sampras had metal
            <span className="numberOfQuestion">12</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques12"
              TestName={"Cambridge-19-Test1"}
              AnswerData={RightAnswers && RightAnswers[11]}
              userAnswerQN={UserData.ques12}
              ExplainDataObj={{
                number: 12,
                Ans1: "",
                hiddenWord: "lead weights",
                hiddenWord2: "",
                keyWords: "lead weights",
                explain: "Paragraph F explains that Pete Sampras added four to five lead weights onto his rackets to improve his serve."
              }}
            />
            put into the frames of his rackets.
          </div>

          <li className="flex flex-wrap">
            Gonçalo Oliveira changed the
            <span className="numberOfQuestion">13</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques13"
              TestName={"Cambridge-19-Test1"}
              AnswerData={RightAnswers && RightAnswers[12]}
              userAnswerQN={UserData.ques12}
              ExplainDataObj={{
                number: 13,
                Ans1: "",
                hiddenWord: "replaced the original grips",
                hiddenWord2: "",
                keyWords: `"replaced the original grips"`,
                explain: "Paragraph G states that Oliveira replaced the original grips of his rackets with something thinner."
              }}
            />
            <span className="font-medium">on his racket handles.</span>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default Panel2_Q1




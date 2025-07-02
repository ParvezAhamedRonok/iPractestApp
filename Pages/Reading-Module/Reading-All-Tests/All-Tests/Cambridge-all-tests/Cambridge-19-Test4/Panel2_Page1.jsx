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
        <h4 className=''>Questions 1 - 6</h4> <br />
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
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span>  Forty years ago, there were fewer butterflies in Britain than at present.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques1"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[0]}
            userAnswerQN={UserData.ques1}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 1,
              Ans1: "",
              hiddenWord: "Paragraph A",
              hiddenWord2: "",
              keyWords: "butterfly species decline, 40 years, conservationists, ecosystem",
              explain: "Paragraph A, The passage mentions that two-thirds of butterfly species have declined in Britain over the past 40 years. This indicates that there were more butterflies 40 years ago than there are now, contradicting the statement. Therefore, the statement is false."
            }}
          />

          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span> Caterpillars are eaten by a number of different predators.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques2"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[1]}
            userAnswerQN={UserData.ques2}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 2,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "caterpillars, prey, birds, bats, small mammals",
              explain: "In Paragraph A, the passage explains that caterpillars are consumed by various predators, including birds, bats, and small mammals. This confirms that caterpillars are eaten by different predators, making the statement true."
            }}
          />

          <label htmlFor="ques3"><span className='numberOfQuestion'>3</span> ‘Phenology’ is a term used to describe a creature’s ability to alter the location of a lifecycle event.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques3"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[2]}
            userAnswerQN={UserData.ques3}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 3,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "phenology, timing, lifecycle event, not location",
              explain: "In Paragraph B, ‘phenology’ is defined as the timing of lifecycle events, such as reproduction, not the ability to change the location of these events. The statement misinterprets the meaning of phenology, so it is false."
            }}
          />

          <label htmlFor="ques4"><span className='numberOfQuestion'>4</span> Some species of butterfly have a reduced lifespan due to spring temperature increases.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques4"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[3]}
            userAnswerQN={UserData.ques4}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 4,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "reduced lifespan, spring temperature, butterfly lifespan",
              explain: "The passage discusses how butterflies advance their timing due to temperature increases, but does not mention a reduction in lifespan. Since no information about lifespan is provided, the statement is Not Given."
            }}
          />

          <label htmlFor="ques5"><span className='numberOfQuestion'>5</span> There is a clear reason for the adaptations that butterflies are making to climate change.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques5"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[4]}
            userAnswerQN={UserData.ques5}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 5,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "adaptation, unclear impact, stress, climate change, unknown reason",
              explain: "In Paragraph C, the passage mentions that while butterflies are adapting to warmer temperatures, it is unclear whether they are successfully adjusting or under stress. The reason for these adaptations remains uncertain, making the statement false."
            }}
          />

          <label htmlFor="ques6"><span className='numberOfQuestion'>6</span>  The data used in the study was taken from the work of amateur butterfly watchers.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques6"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[5]}
            userAnswerQN={UserData.ques6}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 6,
              Ans1: "",
              hiddenWord: "Paragraph D",
              hiddenWord2: "",
              keyWords: " data collection, amateur butterfly watchers, records submitted by enthusiasts",
              explain: "Paragraph D explains that the study used data from amateur butterfly enthusiasts who submitted millions of records over 20 years. This confirms that the data came from non-professional sources, making the statement true."
            }}
          />
        </div>



      </div>
      <div className="w-full pl-[10px] sm:pl-[25px]">
        <h1 className="text-2xl font-bold mb-6">
          <h4>Questions 7–13</h4>
          Complete the notes below.
        </h1>
        <p className="text-lg mb-6">
          Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 7–13 on your answer sheet.
        </p>
        <h2 className="text-xl font-semibold mb-4 text-center ">The tennis racket and how it has changed</h2>
        <ul className="pl-2 pr-2">
          <h5>The Small Blue</h5>
          <li className="flex flex-wrap">
            ●   lives in large
            <span className="numberOfQuestion">7</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques7"
              TestName={"Cambridge-19-Test4"}
              AnswerData={RightAnswers && RightAnswers[6]}
              userAnswerQN={UserData.ques7}
              ExplainDataObj={{
                number: 7,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "Small Blue, colonies, up to a hundred strong",
                explain: "In Paragraph E, the Small Blue butterfly lives in large colonies, with some colonies numbering up to a hundred individuals. This explains the structure of the Small Blue's population."
              }}
            />
          </li>
          <li className="flex flex-wrap">
            ●   first appears at the start of
            <span className="numberOfQuestion">8</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques8"
              TestName={"Cambridge-19-Test4"}
              AnswerData={RightAnswers && RightAnswers[7]}
              userAnswerQN={UserData.ques8}
              ExplainDataObj={{
                number: 8,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "Small Blue, early spring, first appears, reproduction cycle",
                explain: "Paragraph E states that the Small Blue first appears in early spring. This timing allows it to complete more than one reproductive cycle during the year, aiding in population growth."
              }}
            />
          </li>
          <li>●   completes more than one reproductive cycle per year</li> <br />
          <h5>The High Brown Fritillary</h5>
          <li>●   has one reproductive cycle</li>
          <li className="flex flex-wrap">
            ●   is considered to be more
            <span className="numberOfQuestion">9</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques9"
              TestName={"Cambridge-19-Test4"}
              AnswerData={RightAnswers && RightAnswers[8]}
              userAnswerQN={UserData.ques9}
              ExplainDataObj={{
                number: 9,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "High Brown Fritillary, most endangered butterfly, Britain",
                explain: " In Paragraph F, the High Brown Fritillary is described as Britain’s most endangered butterfly. Its population has declined significantly, making it more vulnerable than other species, hence the statement is true."
              }}
            />
            <span className="font-medium"> than other species</span>
          </li>

          <li className="flex flex-wrap">
            ●   its caterpillars occupy a limited range of
            <span className="numberOfQuestion">10</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques10"
              TestName={"Cambridge-19-Test4"}
              AnswerData={RightAnswers && RightAnswers[9]}
              userAnswerQN={UserData.ques10}
              ExplainDataObj={{
                number: 10,
                Ans1: "",
                hiddenWord: "Paragraph F",
                hiddenWord2: "",
                keyWords: "specific habitat, coppiced woodland, limestone pavement, restricted range",
                explain: " Paragraph F mentions that the High Brown Fritillary is limited to specific habitats like coppiced woodlands and limestone pavements. This habitat restriction makes the species more vulnerable to environmental changes."
              }}
            />
          </li> <br />
          <h5>The Silver-studded Blue</h5>

          <li className="flex flex-wrap">
            ●   is already able to reproduce twice a year in warm areas of
            <span className="numberOfQuestion">11</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques11"
              TestName={"Cambridge-19-Test4"}
              AnswerData={RightAnswers && RightAnswers[10]}
              userAnswerQN={UserData.ques11}
              ExplainDataObj={{
                number: 11,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "Silver-studded Blue, second generation, warm areas, continental Europe",
                explain: "In Paragraph G, it is mentioned that the Silver-studded Blue butterfly is already able to reproduce twice a year in warmer parts of Europe. This indicates that it could adapt similarly to warmer temperatures in the UK."
              }}
            />
          </li> <br />
          <h5>The White Admiral</h5>

          <div className="flex flex-wrap">
            ●   is found in
            <span className="numberOfQuestion">12</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques12"
              TestName={"Cambridge-19-Test4"}
              AnswerData={RightAnswers && RightAnswers[11]}
              userAnswerQN={UserData.ques12}
              ExplainDataObj={{
                number: 12,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "White Admiral, location, southern England",
                explain: "Paragraph G states that the White Admiral butterfly is found primarily in southern England. This highlights the geographical distribution of this species."
              }}
            />
            areas of England
          </div>

          <li className="flex flex-wrap">
            ●   both climate change and the
            <span className="numberOfQuestion">13</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques13"
              TestName={"Cambridge-19-Test4"}
              AnswerData={RightAnswers && RightAnswers[12]}
              userAnswerQN={UserData.ques12}
              ExplainDataObj={{
                number: 13,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "White Admiral, caterpillar, diet, honeysuckle, decline cause",
                explain: " Paragraph G explains that the White Admiral’s caterpillar feeds exclusively on honeysuckle. This dietary restriction, combined with climate change, could contribute to the species' decline."
              }}
            />
            <span className="font-medium">of the caterpillar are possible reasons for decline</span>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default Panel2_Q1




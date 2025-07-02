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
          <label htmlFor="ques1"><span className='numberOfQuestion'>1</span> Archaeological research had taken place on the island of Obi before the arrival of Ceri Shipton and his colleagues.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques1"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[0]}
            userAnswerQN={UserData.ques1}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 1,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "Paragraph A",
              keyWords: "first archaeologists to explore Obi",
              explain: "(Paragraph A): The passage states that Shipton and his colleagues were “the first archaeologists to explore Obi”, meaning no prior research had been conducted there. This directly contradicts the statement."
            }}
          />

          <label htmlFor="ques2"><span className='numberOfQuestion'>2</span> At the Kelo sites, the researchers found the first clam shell axes ever to be discovered in the region.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques2"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[1]}
            userAnswerQN={UserData.ques2}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 2,
              Ans1: "",
              hiddenWord: "Paragraph B",
              hiddenWord2: "",
              keyWords: "previously been found, on the nearby island of Gebe",
              explain: "(Paragraph B): The passage mentions that “axes made from clam shells from roughly the same time had also previously been found elsewhere in this region, including on the nearby island of Gebe.” Since clam shell axes were already known in the region, the statement is false."
            }}
          />

          <label htmlFor="ques3"><span className='numberOfQuestion'>3</span> The size of Obi today is less than it was 18,000 years ago.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques3"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[2]}
            userAnswerQN={UserData.ques3}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 3,
              Ans1: "",
              hiddenWord: "Paragraph C",
              hiddenWord2: "",
              keyWords: "sea levels were 120 metres lower, Obi was a much larger island",
              explain: "(Paragraph C): The passage states that 18,000 years ago, “sea levels were about 120 metres lower, meaning Obi was a much larger island”, and that today, parts of it (such as Bisa) are separate islands. This confirms that Obi was larger in the past."
            }}
          />

          <label htmlFor="ques4"><span className='numberOfQuestion'>4</span> A change in the climate around 11,700 years ago had a greater impact on Obi than on the surrounding islands.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques4"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[3]}
            userAnswerQN={UserData.ques4}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 4,
              Ans1: "",
              hiddenWord: "Paragraph D",
              hiddenWord2: "not given",
              keyWords: "climate became significantly warmer and wetter.",
              explain: "(Paragraph D): The passage mentions that around 11,700 years ago, the climate became “significantly warmer and wetter”, leading to denser forests. However, it does not compare Obi’s climate impact with other islands, so the statement is not given."
            }}
          />

          <label htmlFor="ques5"><span className='numberOfQuestion'>5</span>The researchers believe there is a connection between warmer, wetter weather and a change in the material used to make axes.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques5"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[4]}
            userAnswerQN={UserData.ques5}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 5,
              Ans1: "",
              hiddenWord: "Paragraph D",
              hiddenWord2: "",
              keyWords: " warmer and wetter climate, first axes crafted from stone, dense rainforest",
              explain: "(Paragraph D): The passage states that around 11,700 years ago, “the first axes crafted from stone rather than sea shells appear”, likely due to the need for tougher tools to clear the dense rainforest. This establishes a link between climate change and the shift to stone axes."
            }}
          />

          <label htmlFor="ques6"><span className='numberOfQuestion'>6</span> Shipton’s team were surprised to find evidence of the Obi islanders’ hunting practices.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques6"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[5]}
            userAnswerQN={UserData.ques6}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 6,
              Ans1: "",
              hiddenWord: "not given",
              hiddenWord2: "",
              keyWords: "bones unearthed, people mainly hunted",
              explain: "(Paragraph D): The passage discusses the discovery of animal bones, indicating hunting, but it does not mention whether Shipton’s team was surprised by this finding. Since no reaction is described, the statement is not given."
            }}
          />

          <label htmlFor="ques7"><span className='numberOfQuestion'>7</span>  It is thought that the Kelo shelters were occupied continuously until about 1,000 years ago.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques7"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[6]}
            userAnswerQN={UserData.ques7}
            options={["TRUE", "FALSE", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 7,
              Ans1: "",
              hiddenWord: "not continuous",
              hiddenWord2: "",
              keyWords: "shelters abandoned, no evidence for use until about 1,000 years ago",
              explain: "(Paragraph F): The passage states that people lived in the Kelo shelters for about 10,000 years, but “about 8,000 years ago, both were abandoned”. They were not used again until “about 1,000 years ago”. This proves that the occupation was not continuous."
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
        <h4 className="font-semibold mb-4 text-center ">Archaeological findings on Obi</h4>
        <ul className="pl-2 pr-2">
          <li className="flex flex-wrap">
            Excavations of rock shelters inside
            <span className="numberOfQuestion">8</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques8"
              TestName={"Cambridge-19-Test3"}
              AnswerData={RightAnswers && RightAnswers[7]}
              userAnswerQN={UserData.ques8}
              ExplainDataObj={{
                number: 8,
                Ans1: "",
                hiddenWord: "Paragraph B",
                hiddenWord2: "",
                keyWords: "two caves containing prehistoric rock shelters, Kelo site",
                explain: "(Paragraph B): The passage mentions that Shipton’s team found “two caves containing prehistoric rock shelters” near Kelo and conducted excavations there."
              }}
            />
            near the village of Kelo revealed:
          </li>
          <li>●  axes from around 14,000 years ago, probably used to make canoes</li>

          <li className="flex flex-wrap">
            ●  axes made out of
            <span className="numberOfQuestion">9</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques9"
              TestName={"Cambridge-19-Test3"}
              AnswerData={RightAnswers && RightAnswers[8]}
              userAnswerQN={UserData.ques9}
              ExplainDataObj={{
                number: 9,
                Ans1: "",
                hiddenWord: "Paragraph D",
                hiddenWord2: "",
                keyWords: " first axes crafted from stone rather than sea shells",
                explain: "(Paragraph D): The passage states that around 11,700 years ago, “the first axes crafted from stone rather than sea shells appear”, suggesting a shift in tool materials due to environmental changes."
              }}
            />
            <span className="font-medium">dating from around 11,700 years ago</span>
          </li>

          <li className="flex flex-wrap">
            ●
            <span className="numberOfQuestion">10</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques10"
              TestName={"Cambridge-19-Test3"}
              AnswerData={RightAnswers && RightAnswers[9]}
              userAnswerQN={UserData.ques10}
              ExplainDataObj={{
                number: 10,
                Ans1: "",
                hiddenWord: "Paragraph D",
                hiddenWord2: "",
                keyWords: "bones unearthed, hunted the Rothschild’s cuscus",
                explain: `(Paragraph D): The passage reveals that “bones which the researchers unearthed in the Kelo caves” showed that the islanders mainly hunted the Rothschild’s cuscus, providing evidence of their diet.
                    Keywords: bones unearthed, hunted the Rothschild’s cuscus`
              }}
            />
            <span className="font-medium">of an animal: evidence of what ancient islanders ate</span>
          </li>
          <li>●  evidence of travel between islands: <br />  –   obsidian: a material that is not found naturally on Obi</li>

          <li className="flex flex-wrap ml-2">
            –
            <span className="numberOfQuestion">11</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques11"
              TestName={"Cambridge-19-Test3"}
              AnswerData={RightAnswers && RightAnswers[10]}
              userAnswerQN={UserData.ques11}
              ExplainDataObj={{
                number: 11,
                Ans1: "",
                hiddenWord: "Paragraph E",
                hiddenWord2: "",
                keyWords: "beads similar to those found on islands in southern Wallacea",
                explain: "(Paragraph E): The passage states that “particular types of beads, similar to those found on islands in southern Wallacea” were discovered, supporting the idea that Obi islanders interacted with other islands."
              }}
            />
            <span className="font-medium">which resembled ones found on other islands.</span>
          </li>
          <li>
            It is thought that from 8,000 years ago, Obi islanders: <br />
            ●  may have switched from hunting to fishing
          </li>

          <div className="flex flex-wrap">
            ●  had
            <span className="numberOfQuestion">12</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques12"
              TestName={"Cambridge-19-Test3"}
              AnswerData={RightAnswers && RightAnswers[11]}
              userAnswerQN={UserData.ques12}
              ExplainDataObj={{
                number: 12,
                Ans1: "",
                hiddenWord: "Paragraph G",
                hiddenWord2: "",
                keyWords: "owned pottery, gold and silver items",
                explain: `(Paragraph G): The passage mentions that around 1,000 years ago, people reoccupied the shelters and “owned pottery as well as items made out of gold and silver”.`
              }}
            />
            as well as items made out of metal
          </div>

          <li className="flex flex-wrap">
            ●  probably took part in the production and sale of
            <span className="numberOfQuestion">13</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques13"
              TestName={"Cambridge-19-Test3"}
              AnswerData={RightAnswers && RightAnswers[12]}
              userAnswerQN={UserData.ques12}
              ExplainDataObj={{
                number: 13,
                Ans1: "",
                hiddenWord: "Paragraph G",
                hiddenWord2: "",
                keyWords: "historic trade in spices, Maluku islands and the rest of the world",
                explain: `(Paragraph G): The passage states that Obi’s location made it part of the “historic trade in spices between the Maluku islands and the rest of the world”. This suggests that Obi islanders participated in the spice trade.`
              }}
            />
          </li>
        </ul>
      </div>

    </section>
  )
}

export default Panel2_Q1




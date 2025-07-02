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
          Complete the notes below. <br />

          Choose ONE WORD ONLY from the passage for each answer. <br />

          Write your answers in boxes 1–7 on your answer sheet. <br />
        </h6> <br />

      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5 '>
        <h4 className='text-center'>Britain’s Industrial Revolution</h4> <br />
        <div>
          <h5>Steam power</h5>

          ●   Newcomen’s steam engine was used in mines to remove water. <br /><br />

          <div className='flex flex-wrap'>
            ●   In Watt and Boulton’s steam engine, the movement of the  <span className="numberOfQuestion">1</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques1"
              TestName={"Cambridge-19-Test2"}
              AnswerData={RightAnswers && RightAnswers[0]}
              userAnswerQN={UserData.ques1}
              ExplainDataObj={{
                number: 1,
                Ans1: "",
                hiddenWord: "Paragraph B",
                hiddenWord2: "",
                keyWords: "piston, gear mechanism, rotary motion",
                explain: ` In Paragraph B, the passage states, "Watt later worked with the English manufacturer Matthew Boulton to invent a new steam engine driven by both the forward and backward strokes of the piston, while the gear mechanism it was connected to produced rotary motion."`
              }}
            /> was linked to a gear system.<br /><br />
          </div>


          <div className='flex flex-wrap'>
            ●   A greater supply of <span className="numberOfQuestion">2</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques2"
              TestName={"Cambridge-19-Test2"}
              AnswerData={RightAnswers && RightAnswers[1]}
              userAnswerQN={UserData.ques2}
              ExplainDataObj={{
                number: 2,
                Ans1: "",
                hiddenWord: "Paragraph C",
                hiddenWord2: "",
                keyWords: "coal, energy source, factories, steam-powered transportation",
                explain: `In Paragraph C, the passage states, "The demand for coal, which was a relatively cheap energy source, grew rapidly during the Industrial Revolution, as it was needed to run not only the factories but also steam-powered transportation."`
              }}
            /> was required to power steam engines.<br /><br />
          </div>


          <h5>Textile industry</h5>

          <div className='flex flex-wrap'>
            ●   Before the Industrial Revolution, spinners and weavers worked at home and in <span className="numberOfQuestion">3</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques3"
              TestName={"Cambridge-19-Test2"}
              AnswerData={RightAnswers && RightAnswers[2]}
              userAnswerQN={UserData.ques1}
              ExplainDataObj={{
                number: 3,
                Ans1: "",
                hiddenWord: "Paragraph D",
                hiddenWord2: "",
                keyWords: "workshops, cottage industry, performed in homes",
                explain: `In Paragraph D, the passage states, "Prior to the Industrial Revolution, the British textile business was a true ‘cottage industry’, with the work performed in small workshops or even homes."`
              }}
            /><br /><br />
          </div>

          <div className='flex flex-wrap'>
            ●   Not as much <span className="numberOfQuestion">4</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques4"
              TestName={"Cambridge-19-Test2"}
              AnswerData={RightAnswers && RightAnswers[3]}
              userAnswerQN={UserData.ques4}
              ExplainDataObj={{
                number: 4,
                Ans1: "",
                hiddenWord: "Paragraph D",
                hiddenWord2: "",
                keyWords: " little labour, spinning jenny, power loom",
                explain: `In Paragraph D, the passage states, "With these machines, relatively little labour was required to produce cloth."`
              }}
            /> was needed to produce cloth once the spinning jenny and power loom were invented.<br /><br />
          </div>


          <h5> Iron industry</h5>

          <div className='flex flex-wrap'>
            ●   Smelting of iron ore with coke resulted in material that was better <span className="numberOfQuestion">5</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques5"
              TestName={"Cambridge-19-Test2"}
              AnswerData={RightAnswers && RightAnswers[4]}
              userAnswerQN={UserData.ques1}
              ExplainDataObj={{
                number: 5,
                Ans1: "",
                hiddenWord: "Paragraph D",
                hiddenWord2: "",
                keyWords: "higher quality, smelting iron ore with coke",
                explain: `In Paragraph D, the passage states, "This method was cheaper and produced metals that were of a higher quality."`
              }}
            /><br /><br />
          </div>

          <div className='flex flex-wrap'>
            ●   Demand for iron increased with the growth of the <span className="numberOfQuestion">6</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques6"
              TestName={"Cambridge-19-Test2"}
              AnswerData={RightAnswers && RightAnswers[5]}
              userAnswerQN={UserData.ques1}
              ExplainDataObj={{
                number: 6,
                Ans1: "",
                hiddenWord: "Paragraph D",
                hiddenWord2: "",
                keyWords: "expansion of railways, demand for iron",
                explain: `In Paragraph D, the passage states, "Britain’s iron and steel production expanded in response to demand created by the Napoleonic Wars and the expansion of the railways from the 1830s."`
              }}
            />.<br /><br />
          </div>


          <h5>Communications</h5>

          ●   Cooke and Wheatstone patented the first telegraphy system.<br /><br />


          ●   The telegraphy system was used to prevent locomotives colliding.<br /><br />


          <h5>Urbanisation</h5>

          ●   Small towns turned into cities very quickly.<br /><br />

          <div className='flex flex-wrap'>
            ●   The new cities were dirty, crowded and lacked sufficient <span className="numberOfQuestion">7</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques7"
              TestName={"Cambridge-19-Test2"}
              AnswerData={RightAnswers && RightAnswers[6]}
              userAnswerQN={UserData.ques1}
              ExplainDataObj={{
                number: 7,
                Ans1: "",
                hiddenWord: "Paragraph E",
                hiddenWord2: "",
                keyWords: "overcrowded cities, pollution, inadequate sanitation",
                explain: `In Paragraph E, the passage states, "Overcrowded cities suffered from pollution and inadequate sanitation."`
              }}
            /><br />
          </div>
        </div> <br />

      </div>
      <div className="w-full pl-[10px] sm:pl-[25px]">
        <div className=" font-bold mb-6">
          <h4>Questions 8 - 13</h4>
          <h6>Do the following statements agree with the information given in Reading Passage 1? <br />

            In boxes 8–13 on your answer sheet, write</h6> <br />

          <div className='mt-2 mb-2 border-[2px] p-1 rounded border-gray-400 w-auto'>
            <strong>TRUE</strong> if the statement agrees with the information <br />
            <strong>FALSE</strong> if the statement contradicts the information  <br />
            <strong>NOT GIVEN </strong> if there is no information on this
          </div>
        </div>
        <div>
          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques8">
              <span className='numberOfQuestion'>8</span> Britain’s canal network grew rapidly so that more goods could be transported around the country.
            </label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques8"
              TestName="Cambridge-19-Test2"
              AnswerData={RightAnswers && RightAnswers[7]}
              userAnswerQN={UserData.ques8}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 8,
                Ans1: "",
                hiddenWord: "Paragraph C",
                hiddenWord2: "",
                keyWords: "canals, transportation, steam-powered boats",
                explain: `In Paragraph C, the passage mentions that "steam-powered boats and ships were widely used to carry goods along Britain’s canals," but it does not state that the canal network itself expanded.`
              }}
            />
          </div>

          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques9">
              <span className='numberOfQuestion'>9</span> Costs in the iron industry rose when the technique of smelting iron ore with coke was introduced.
            </label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques9"
              TestName="Cambridge-19-Test2"
              AnswerData={RightAnswers && RightAnswers[8]}
              userAnswerQN={UserData.ques9}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 9,
                Ans1: "",
                hiddenWord: "Paragraph D",
                hiddenWord2: "",
                keyWords: "cheaper, higher quality metals",
                explain: `In Paragraph D, the passage states, "This method was cheaper and produced metals that were of a higher quality." This contradicts the statement that costs increased.`
              }}
            />
          </div>

          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques10">
              <span className='numberOfQuestion'>10</span> Samuel Morse’s communication system was more reliable than that developed by William Cooke and Charles Wheatstone.
            </label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques10"
              TestName="Cambridge-19-Test2"
              AnswerData={RightAnswers && RightAnswers[9]}
              userAnswerQN={UserData.ques10}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 10,
                Ans1: "",
                hiddenWord: "Paragraph E",
                hiddenWord2: "",
                keyWords: "Samuel Morse, William Cooke, Charles Wheatstone, telegraphy system",
                explain: `In Paragraph E, the passage mentions that "In the 1830s and 1840s, Samuel Morse and other inventors worked on their own versions in the United States," but it does not compare their reliability.`
              }}
            />
          </div>

          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques11">
              <span className='numberOfQuestion'>11</span> The economic benefits of industrialisation were limited to certain sectors of society.
            </label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques11"
              TestName="Cambridge-19-Test2"
              AnswerData={RightAnswers && RightAnswers[10]}
              userAnswerQN={UserData.ques11}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 11,
                Ans1: "",
                hiddenWord: "Paragraph F",
                hiddenWord2: "",
                keyWords: "economic output, middle and upper classes, poor people struggled",
                explain: `In Paragraph F, the passage states, "Although industrialisation increased the country’s economic output overall and improved the standard of living for the middle and upper classes, many poor people continued to struggle."`
              }}
            />
          </div>

          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques12">
              <span className='numberOfQuestion'>12</span> Some skilled weavers believed that the introduction of the new textile machines would lead to job losses.
            </label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques12"
              TestName="Cambridge-19-Test2"
              AnswerData={RightAnswers && RightAnswers[11]}
              userAnswerQN={UserData.ques12}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 12,
                Ans1: "",
                hiddenWord: "Paragraph F",
                hiddenWord2: "",
                keyWords: "skilled weavers, feared job losses, unskilled machine operators",
                explain: `In Paragraph F, the passage mentions, "Many had spent years learning their craft, and they feared that unskilled machine operators were robbing them of their livelihood."`
              }}
            />
          </div>

          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques13">
              <span className='numberOfQuestion'>13</span> There was some sympathy among local people for the Luddites who were arrested near Huddersfield.
            </label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques13"
              TestName="Cambridge-19-Test2"
              AnswerData={RightAnswers && RightAnswers[12]}
              userAnswerQN={UserData.ques13}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 13,
                Ans1: "",
                hiddenWord: "Paragraph G",
                hiddenWord2: "",
                keyWords: "Luddites, Huddersfield, arrests, government response",
                explain: "In Paragraph G, the passage describes the Luddite movement and the government’s response but does not mention whether local people sympathized with them."
              }}
            />
          </div>
        </div>


      </div>

    </section>
  )
}

export default Panel2_Q1




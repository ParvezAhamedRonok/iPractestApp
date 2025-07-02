"use client"
import React, { useState } from 'react';
import "../../../TestAllStyles/Panel2All.css";
import { GiNotebook } from "react-icons/gi";

import { useStateContext } from "@/contexts/ContextProvider";
import Explain_Btn from "@/components/Reading-Module/Reading-All-Tests/Important/Explain-Btn";
import TF_AZ_IX_inputs from '../../Inputs/TF_AZ_IX_inputs';
import ReadingSelect_input from '../../Inputs/Select_input';
import ReadingText_inputs from '../../Inputs/Text_inputs';
// end of importing---------->>




function Panel2_Q2({ handleChange, UserData, RightAnswers }) {
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

      <div className="articles pl-[10px] sm:pl-[25px] mb-5">
        <h4>Questions 14–17</h4>
        <br />
        <label>
          <span className="font-bold">Reading Passage 2</span> has Eight paragraphs, <span className="font-bold">A to H</span>
        </label>
        <label>Which paragraph contains the following information?</label>
        <label>
          Write the correct letter, A–H, in boxes 14–17 on your answer sheet. <br />
        </label>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <div className=''>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span>  reference to the need to ensure that inhabitants of wetland regions continue to benefit from them</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques14"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[13]}
            userAnswerQN={UserData.ques14}
            options={["A", "B", "C", "D", "E", "F", "G", "H"]}
            ExplainDataObj={{
              number: 14,
              Ans1: "",
              hiddenWord: "Silvius acknowledges the importance of income generation",
              hiddenWord2: "",
              keyWords: "protect wetlands, value and profit, sustainability, local people involved, decision making",
              explain: "(Paragraph G): The passage states that Silvius acknowledges the importance of income generation and that local people must have a stake in wetland conservation. McCartney also emphasizes that wetlands will only be protected if locals benefit from them."
            }}
          />
        </div>
        <div>
          <label htmlFor="ques15"><span className='numberOfQuestion'>15</span> the proportion of wetlands which have already been lost</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques15"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[14]}
            userAnswerQN={UserData.ques15}
            options={["A", "B", "C", "D", "E", "F", "G", "H"]}
            ExplainDataObj={{
              number: 15,
              Ans1: "",
              hiddenWord: "Paragraph A",
              hiddenWord2: "",
              keyWords: "half of the world’s wetlands, disappeared, destroyed, since 1990",
              explain: "(Paragraph A): The passage mentions that half of the world’s wetlands have disappeared since 1990, largely due to human activities like commercial development, drainage, and pollution."
            }}
          />
        </div>
        <div>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span> reference to the idea that people are beginning to appreciate the value of wetlands</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques16"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[15]}
            userAnswerQN={UserData.ques16}
            options={["A", "B", "C", "D", "E", "F", "G", "H"]}
            ExplainDataObj={{
              number: 16,
              Ans1: "",
              hiddenWord: "Paragraph H",
              hiddenWord2: "",
              keyWords: "awareness growing, wetland degradation, things are slowly changing",
              explain: "(Paragraph H): McCartney states that awareness of the importance of wetlands is growing even though degradation continues. He believes that attitudes are slowly changing."
            }}
          />
        </div>
        <div>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span> mention of the cultural significance of wetlands</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques17"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[16]}
            userAnswerQN={UserData.ques17}
            options={["A", "B", "C", "D", "E", "F", "G", "H"]}
            ExplainDataObj={{
              number: 17,
              Ans1: "",
              hiddenWord: "Paragraph B",
              hiddenWord2: "",
              keyWords: "historical value, religious significance, archaeological importance",
              explain: "(Paragraph B): The passage highlights that wetlands have historical, religious, and archaeological value and have supported human societies for centuries."
            }}
          />
        </div>
      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h4 className=''>Questions 18–22</h4> <br />
        <label className=''>Complete the sentences below. </label> <br />
        <label htmlFor="">Choose ONE WORD ONLY from the passage for each answer. <br />
          Write your answers in boxes 18–22 on your answer sheet.</label>
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-5">
        <div className="flex flex-wrap">
          Peatlands which have been drained begin to release
          <span className="numberOfQuestion">18</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques18"
            TestName={"Cambridge-19-Test3"}
            AnswerData={RightAnswers && RightAnswers[17]}
            userAnswerQN={UserData.ques18}
            ExplainDataObj={{
              number: 18,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "drained for cultivation, carbon emissions, instead of storing",
              explain: "(Paragraph D): When peatlands are drained, they become net carbon emitters instead of storing carbon, which contributes to global carbon emissions."
            }}
          />
          instead of storing it.
        </div>
        <div className="flex flex-wrap">
          Once peatland areas have been cleared,
          <span className="numberOfQuestion">19</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques19"
            TestName={"Cambridge-19-Test3"}
            AnswerData={RightAnswers && RightAnswers[18]}
            userAnswerQN={UserData.ques19}
            ExplainDataObj={{
              number: 19,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "clearing peatlands, increases fire risk, huge amounts of CO₂",
              explain: "(Paragraph D): The passage states that clearing peatlands increases the risk of forest fires, which release large amounts of CO₂."
            }}
          />
          are more likely to occur.
        </div>
        <div className="flex flex-wrap">
          Clearing peatland forests to make way for oil palm plantations destroys the
          <span className="numberOfQuestion">20</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques20"
            TestName={"Cambridge-19-Test3"}
            AnswerData={RightAnswers && RightAnswers[19]}
            userAnswerQN={UserData.ques20}
            ExplainDataObj={{
              number: 20,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "loss of biodiversity, destroyed for oil palm, high biodiversity value",
              explain: "(Paragraph D): Silvius mentions that peatland forests with extremely high biodiversity are being lost to oil palm plantations."
            }}
          />
          of the local environment.
        </div>
        <div className="flex flex-wrap">
          Water is drained out of peatlands through the
          <span className="numberOfQuestion">21</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques21"
            TestName={"Cambridge-19-Test3"}
            AnswerData={RightAnswers && RightAnswers[20]}
            userAnswerQN={UserData.ques21}
            ExplainDataObj={{
              number: 21,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "logging companies, drain water, ditches, planting",
              explain: "(Paragraph E): The passage describes how logging companies dig ditches to drain the water from peatlands, making them suitable for plantation use."
            }}
          />
          which are created by logging companies.
        </div>
        <div className="flex flex-wrap">
          Draining peatlands leads to
          <span className="numberOfQuestion">22</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques22"
            TestName={"Cambridge-19-Test3"}
            AnswerData={RightAnswers && RightAnswers[21]}
            userAnswerQN={UserData.ques22}
            ExplainDataObj={{
              number: 22,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "peat subsides, 90% water, landmass loss, below water level",
              explain: "(Paragraph E): The passage explains that peat comprises 90% water, and once it is drained, it begins to subside, eventually causing land loss and flooding."
            }}
          />
          : a serious problem which can eventually result in coastal flooding and land loss.
        </div>
      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mt-2 mb-4'>
        <h4 className=''>Questions 23–26</h4> <br />
        <label className=''>
          Look at the following statements (Questions 23–26) and the list of experts below.<br /> <br />
          Match each statement with the correct expert, A–D.<br /><br />
          Write the correct letter, A–D, in boxes 23–26 on your answer sheet.<br />
        </label><br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-5">
        <div>
          <label htmlFor="ques17"><span className='numberOfQuestion'>23</span> Communities living in wetland regions must be included in discussions about the future of these areas.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques23"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[22]}
            userAnswerQN={UserData.ques23}
            options={["A", "B", "C", "D"]}
            ExplainDataObj={{
              number: 23,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "local people involved, sustainability, planning, decision making",
              explain: "(Paragraph G): McCartney emphasizes that wetland conservation is only possible if local people value and profit from them, and they must be involved in planning and decision-making."
            }}
          />
        </div>
        <div>
          <label htmlFor="ques17"><span className='numberOfQuestion'>24</span> Official policies towards wetlands vary from one nation to the next</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques24"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[23]}
            userAnswerQN={UserData.ques24}
            options={["A", "B", "C", "D"]}
            ExplainDataObj={{
              number: 24,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "different governments, different attitudes, wetland restoration, denial",
              explain: " (Paragraph H): Silvius notes that different governments have different attitudes toward wetland conservation, with some prioritizing restoration and others denying the issue."
            }}
          />
        </div>
        <div>
          <label htmlFor="ques17"><span className='numberOfQuestion'>25</span>People cause harm to wetlands without having any intention to do so.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques25"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[24]}
            userAnswerQN={UserData.ques25}
            options={["A", "B", "C", "D"]}
            ExplainDataObj={{
              number: 25,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "unintentional damage, making a living, invisible impacts",
              explain: "(Paragraph F): Tickner states that people don’t deliberately set out to damage wetlands, but the harm often results from efforts to make a living."
            }}
          />
        </div>
        <div>
          <label htmlFor="ques17"><span className='numberOfQuestion'>26</span>  Initiatives to reserve environmental damage need to be complex.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques26"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[25]}
            userAnswerQN={UserData.ques26}
            options={["A", "B", "C", "D"]}
            ExplainDataObj={{
              number: 26,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "climate adaptation, simple solutions, not about money",
              explain: "(Paragraph C): Van Eijk emphasizes that climate adaptation doesn’t have to be expensive, sometimes simple actions like planting trees can substantially change the microclimate."
            }}
          />
        </div> <br />
        <div class="w-70 p-4 border-[2px] border-gray-800 rounded-lg">
          <h3 class="text-lg font-bold text-center mb-3">List of Experts</h3>
          <ul class="space-y-2">
            <li class="font-semibold">A - Matthew McCartney</li>
            <li class="font-semibold">B - Pieter van Eijk</li>
            <li class="font-semibold">C - Marcel Silvius</li>
            <li class="font-semibold">D - Dave Tickner</li>
          </ul>
        </div>

      </div>



      {/* Passage-3 Questions */}
      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4 className='underline text-center'>Reading Passage-3  </h4> <br />
        <h4>Questions 27–30</h4><br />
        <label className=''>Choose the correct letter, A, B, C or D. <br /> <br />
          Write the correct letter in boxes 27–30 on your answer sheet. <br /> <br /></label><br />
      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-5">
        {/* Question 27 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques27"
            TestName={"Cambridge-19-Test3"}
            AnswerData={RightAnswers && RightAnswers[26]}
            userAnswerQN={UserData.ques27}
            contentsObj={{
              Title:
                "What does the reader learn about the conversation in the first paragraph?",
              AData: "The speakers are communicating in different languages.",
              BData: "Neither of the speakers is familiar with their environment.",
              CData: "The topic of the conversation is difficult for both speakers.",
              DData: "Aspects of the conversation are challenging for both speakers."
            }}
            ExplainDataObj={{
              number: 27,
              Ans1: "(D) Aspects of the conversation are challenging for both speakers.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: " background noise, struggle to follow, obstacle to communication",
              explain: "(Paragraph A): The paragraph describes difficulties in communication due to background noise and a poor connection, making the conversation difficult for both speakers despite speaking the same language."
            }}
          />
        </div>

        {/* Question 28 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques28"
            TestName={"Cambridge-19-Test3"}
            AnswerData={RightAnswers && RightAnswers[27]}
            userAnswerQN={UserData.ques28}
            contentsObj={{
              Title:
                "What assists the electronic translator during lectures at Karlsruhe Institute of Technology?",
              AData: "the repeated content of lectures",
              BData: "the students’ reading skills",
              CData: "the languages used",
              DData: "the lecturers’ technical ability"
            }}
            ExplainDataObj={{
              number: 28,
              Ans1: "(A) the repeated content of lectures",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "similar to subtitling, say much the same thing each year",
              explain: "(Paragraph B): The lectures at the institute are delivered in German and translated into English electronically. The effectiveness of the translation is aided by the fact that lecturers say similar things each year."
            }}
          />
        </div>

        {/* Question 29 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques29"
            TestName={"Cambridge-19-Test3"}
            AnswerData={RightAnswers && RightAnswers[28]}
            userAnswerQN={UserData.ques29}
            contentsObj={{
              Title:
                "When referring to The Hitchhiker’s Guide to the Galaxy, the writer suggests that",
              AData: "The Babel fish was considered undesirable at the time.",
              BData: "This book was not seriously intending to predict the future.",
              CData: "Artificial speech translation was not a surprising development.",
              DData: "Some speech translation techniques are better than others."
            }}
            ExplainDataObj={{
              number: 29,
              Ans1: "(C) Artificial speech translation was not a surprising development.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "long before they become practically realizable, once could only dream of having",
              explain: "(Paragraph B): The passage highlights that speech translation devices have long been imagined, and their development into reality follows a pattern seen with other technological advancements."
            }}
          />
        </div>

        {/* Question 30 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques30"
            TestName={"Cambridge-19-Test3"}
            AnswerData={RightAnswers && RightAnswers[29]}
            userAnswerQN={UserData.ques30}
            contentsObj={{
              Title: "What does the writer say about sharing earpieces?",
              AData: "It is something people will get used to doing.",
              BData: "The reluctance to do this is understandable.",
              CData: "The equipment will be unnecessary in the future.",
              DData: "It is something few people need to worry about."
            }}
            ExplainDataObj={{
              number: 30,
              Ans1: "(B) The reluctance to do this is understandable.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "barrier with sharing, can’t have been totally unexpected",
              explain: "(Paragraph D): The passage explains that people hesitate to share earpieces with strangers, and this was somewhat expected."
            }}
          />
        </div>
      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 31–34</h6> <br />
        <label className=''>Complete each sentence with the correct ending, A–F, below.<br /> <br />
          Select the correct letter, A–F, in boxes 31–34 on your answer sheet..</label><br /> <br />
      </div>
      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        <div>
          <div>
            <label htmlFor="ques31">
              <span className='numberOfQuestion'>31</span> Speech translation methods are developing fast in Japan
            </label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques31"
              TestName="Cambridge-19-Test3"
              AnswerData={RightAnswers && RightAnswers[30]}
              userAnswerQN={UserData.ques31}
              options={["A", "B", "C", "D", "E", "F"]}
              ExplainDataObj={{
                number: 31,
                Ans1: "(C) but they are far from perfect.",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "voice translation has really taken off, still a long way to go",
                explain: "(Paragraph E): The passage states that Japan has seen rapid progress in voice translation systems, but there are still many improvements needed."
              }}
            />
          </div> <br />

          <div>
            <label htmlFor="ques32">
              <span className='numberOfQuestion'>32</span> TV interviews that use translation voiceover methods are successful
            </label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques32"
              TestName="Cambridge-19-Test3"
              AnswerData={RightAnswers && RightAnswers[31]}
              userAnswerQN={UserData.ques32}
              options={["A", "B", "C", "D", "E", "F"]}
              ExplainDataObj={{
                number: 32,
                Ans1: "(E) because translation is immediate.",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "simultaneous, translator’s voice speaking over",
                explain: "(Paragraph E): The passage mentions that successful translation systems should work in real-time, like voiceovers in interviews where the translation happens immediately."
              }}
            />
          </div> <br />

          <div>
            <label htmlFor="ques33">
              <span className='numberOfQuestion'>33</span> Future translation systems should address people appropriately
            </label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques33"
              TestName="Cambridge-19-Test3"
              AnswerData={RightAnswers && RightAnswers[32]}
              userAnswerQN={UserData.ques33}
              options={["A", "B", "C", "D", "E", "F"]}
              ExplainDataObj={{
                number: 33,
                Ans1: "(F) and have an awareness of good manners.",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "socially aware, solemn respect, etiquette-sensitive",
                explain: "(Paragraph E): The passage discusses the importance of cultural awareness in translation, such as respecting academic titles and local etiquette."
              }}
            />
          </div> <br />

          <div>
            <label htmlFor="ques34">
              <span className='numberOfQuestion'>34</span> Users may be able to maintain their local customs
            </label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques34"
              TestName="Cambridge-19-Test3"
              AnswerData={RightAnswers && RightAnswers[33]}
              userAnswerQN={UserData.ques34}
              options={["A", "B", "C", "D", "E", "F"]}
              ExplainDataObj={{
                number: 34,
                Ans1: "(B) as systems do not need to conform to standard practices.",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "help to preserve local customs, slowing the spread of habits",
                explain: "(Paragraph E): Automated translation could help preserve cultural traditions by allowing local customs to be respected."
              }}
            />
          </div> <br />
        </div>
        <div className="box-container border p-4 bg-gray-100 max-w-xl mx-auto rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="box-item font-bold">A: but there are concerns about this.</div>
            <div className="box-item font-bold">B: as systems do not need to conform to standard practices.</div>
            <div className="box-item font-bold">C: but they are far from perfect.</div>
            <div className="box-item font-bold">D: despite the noise issues.</div>
            <div className="box-item font-bold">E: because translation is immediate.</div>
            <div className="box-item font-bold">F: and have an awareness of good manners.</div>
          </div>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4>Questions 35–40</h4> <br />
        <label className=''>Do the following statements agree with the views of the writer in Reading Passage 3?<br /> <br />
          In boxes 35–40 on your answer sheet, write</label><br /> <br />
        <div className="box-container border p-4 bg-gray-100 max-w-xl mx-auto rounded-lg">
          <div className="grid grid-cols-1 gap-4">
            <div className="box-item">YES: if the statement agrees with the claims of the writer</div>
            <div className="box-item">NO: if the statement contradicts the claims of the writer</div>
            <div className="box-item">NOT GIVEN: if it is impossible to say what the writer thinks about this</div>
          </div>
        </div>
      </div>

      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        <div>
          <label htmlFor="ques35">
            <span className='numberOfQuestion'>35</span> Language translation systems will be seen as very useful throughout the academic and professional worlds.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques35"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[34]}
            userAnswerQN={UserData.ques35}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 35,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "professors and other professionals will not outsource language awareness",
              explain: "(Paragraph F): While the technology is advancing, the passage states that professionals will not fully rely on automated translation for language awareness."
            }}
          />

          <label htmlFor="ques36">
            <span className='numberOfQuestion'>36</span> The overall value of automated translation to family life is yet to be shown.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques36"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[35]}
            userAnswerQN={UserData.ques36}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 36,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "whether it will help people conduct their family lives is open to question",
              explain: "(Paragraph F): The writer mentions that it is uncertain whether automated translation will help in personal relationships, particularly within families."
            }}
          />

          <label htmlFor="ques37">
            <span className='numberOfQuestion'>37</span> Automated translation could make life more difficult for immigrant families.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques37"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[36]}
            userAnswerQN={UserData.ques37}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 37,
              Ans1: "",
              hiddenWord: "Paragraph F",
              hiddenWord2: "",
              keyWords: "could overcome the language barriers, children and their grandparents without a shared language",
              explain: "(Paragraph F): The passage suggests that automated translation could actually help bridge communication gaps between generations in immigrant families."
            }}
          />

          <label htmlFor="ques38">
            <span className='numberOfQuestion'>38</span> Visual aspects of language translation are being considered by scientists.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques38"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[37]}
            userAnswerQN={UserData.ques38}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 38,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "",
              explain: "The passage does not mention research into visual aspects of speech translation, such as facial expressions or lip movements."
            }}
          />

          <label htmlFor="ques39">
            <span className='numberOfQuestion'>39</span> International scientists have found English easier to translate into other languages than Latin.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques39"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[38]}
            userAnswerQN={UserData.ques39}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 39,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "",
              explain: "The passage discusses the role of English as a lingua franca among scientists but does not compare its translatability with Latin."
            }}
          />

          <label htmlFor="ques40">
            <span className='numberOfQuestion'>40</span> As far as language is concerned, there is a difference between people’s social and practical needs.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques40"
            TestName="Cambridge-19-Test3"
            AnswerData={RightAnswers && RightAnswers[39]}
            userAnswerQN={UserData.ques40}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 40,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "practical need for a common language will diminish, social value will persist",
              explain: "(Paragraph G): The writer explains that while automated translation may reduce the practical need for learning languages, the social value of shared languages will remain important."
            }}
          />
        </div>
      </div>


    </section>
  )
}

export default Panel2_Q2





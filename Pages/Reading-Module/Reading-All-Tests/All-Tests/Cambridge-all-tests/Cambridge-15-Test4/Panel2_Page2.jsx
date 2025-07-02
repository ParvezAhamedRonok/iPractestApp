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


      <div className="w-full pl-[10px] sm:pl-[25px] mb-5">
        <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
          <h4 className=''>Questions 14-19</h4> <br />
          <h6>
            Do the following statements agree with the information given in Reading Passage 2? <br />
            In boxes 14-19 on your answer sheet, write
          </h6> <br />
          <div className='mt-2 mb-2 '>
            <strong>TRUE</strong> if the statement agrees with the information <br /> <br />
            <strong>FALSE</strong> if the statement contradicts the information  <br /> <br />
            <strong>NOT GIVEN </strong> if there is no information on this
          </div>
        </div>
        <div className="Questions">
          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques14"><span className='numberOfQuestion'>14</span> La Gomera is the most mountainous of all the Canary Islands.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques14"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[13]}
              userAnswerQN={UserData.ques14}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 14,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `mountainous, steep rocky slopes, peak, comparison with other islands – not mentioned`,
                explain: `In Paragraph A, La Gomera is described as "mountainous, with steep rocky slopes" and a peak of "1,487 metres." However, the passage does not compare it to the other Canary Islands, so we cannot say it is the most mountainous.`
              }}
            />
          </div>

          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques15"><span className='numberOfQuestion'>15</span> Silbo is only appropriate for short and simple messages.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques15"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[14]}
              userAnswerQN={UserData.ques15}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 15,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `any Spanish sentence, short commands, daily use, not only simple messages`,
                explain: `Paragraph D states that any Spanish sentence can be whistled, although short commands are used in daily life. This proves it’s not limited to short or simple messages.`
              }}
            />
          </div>

          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques16"><span className='numberOfQuestion'>16</span> In the brain-activity study, silbadores and non-whistlers produced different results.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques16"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[15]}
              userAnswerQN={UserData.ques16}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 16,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `silbadores, non-whistlers, different brain activation, language processing`,
                explain: `In Paragraph D and E, researchers found that Silbadores showed activation in brain areas related to language, while non-whistlers showed activity in many different brain areas, indicating they couldn’t process Silbo as language.`
              }}
            />
          </div>

          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques17"><span className='numberOfQuestion'>17</span> The Spanish introduced Silbo to the islands in the 15th century.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques17"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[16]}
              userAnswerQN={UserData.ques17}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 17,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `indigenous Canary Islanders, already had whistled language, before Spain conquered`,
                explain: `Paragraph F clearly states that indigenous Canary Islanders already had a whistled language before Spain's conquest in the 15th century. So, the Spanish did not introduce Silbo.`
              }}
            />
          </div>

          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques18"><span className='numberOfQuestion'>18</span> There is precise data available regarding all of the whistle languages in existence today.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques18"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[17]}
              userAnswerQN={UserData.ques18}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 18,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `70 languages, only 12 studied, incomplete data`,
                explain: `Paragraph F mentions that there may be as many as 70 whistled languages, but only 12 have been described and studied scientifically. This shows that the data is not complete or precise.`
              }}
            />
          </div>

          <div className='flex flex-wrap gap-1'>
            <label htmlFor="ques19"><span className='numberOfQuestion'>19</span> The children of Gomera now learn Silbo.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques19"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[18]}
              userAnswerQN={UserData.ques19}
              options={["TRUE", "FALSE", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 19,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `taught in elementary schools, since 1999, children learning Silbo`,
                explain: `Paragraph G confirms that since 1999, Silbo has been taught in all elementary schools on the island, meaning children are learning it.`
              }}
            />
          </div>
        </div>

      </div>


      <div className="w-full pl-[10px] sm:pl-[25px] mb-3">
        <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
          <h4 className=''>Questions 20 to 26</h4> <br />
          <label htmlFor="">
            Complete the notes below. <br /><br />
            Choose ONE WORD ONLY from the passage for each answer. <br /><br />
            Write your answers in boxes 20-26 on your answer sheet. <br />
          </label>
        </div>
        <div className="Questions">
          <h4 className='text-center'>Silbo Gomero</h4> <br />
          <div>
            <h5>How Silbo is produced</h5> <br />

            ●   high- and low-frequency tones represent different sounds in Spanish  <span className="numberOfQuestion">20</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques20"
              TestName={"Cambridge-15-Test4"}
              AnswerData={RightAnswers && RightAnswers[19]}
              userAnswerQN={UserData.ques20}
              ExplainDataObj={{
                number: 20,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `substitute for Spanish, individual words, high- and low-frequency tones`,
                explain: `Paragraph C explains that Silbo is a substitute for Spanish, with individual words converted into high- and low-frequency tones.`
              }}
            /> <br />

            <div className="flex flex-wrap">
              ●   pitch of whistle is controlled using silbador’s  <span className="numberOfQuestion">21</span>
              <ReadingText_inputs
                handleValueChange={handleChange}
                QNum="ques21"
                TestName={"Cambridge-15-Test4"}
                AnswerData={RightAnswers && RightAnswers[20]}
                userAnswerQN={UserData.ques21}
                ExplainDataObj={{
                  number: 21,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: `finger in mouth, increase pitch`,
                  explain: `Paragraph C states that the whistler uses a finger in their mouth to control the pitch of the whistle.`
                }}
              />
            </div><br />
            <div className="flex flex-wrap">
              ●    <span className="numberOfQuestion">22</span>
              <ReadingText_inputs
                handleValueChange={handleChange}
                QNum="ques22"
                TestName={"Cambridge-15-Test4"}
                AnswerData={RightAnswers && RightAnswers[21]}
                userAnswerQN={UserData.ques22}
                ExplainDataObj={{
                  number: 22,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: `cupped hand, adjust, direction of sound`,
                  explain: `Also in Paragraph C, it says a cupped hand is used to adjust the direction of the whistle sound.`
                }}
              /> is changed with a cupped hand
            </div> <br />


            <h5>How Silbo is used</h5> <br />

            ●   has long been used by shepherds and people living in secluded locations <br />

            <div className="flex flex-wrap">
              ●   in everyday use for the transmission of brief  <span className="numberOfQuestion">23</span>
              <ReadingText_inputs
                handleValueChange={handleChange}
                QNum="ques23"
                TestName={"Cambridge-15-Test4"}
                AnswerData={RightAnswers && RightAnswers[22]}
                userAnswerQN={UserData.ques23}
                ExplainDataObj={{
                  number: 23,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: `daily use, short commands`,
                  explain: `Paragraph D mentions that in daily life, Silbo is used to transmit short commands.`
                }}
              />
            </div><br />

            ●   can relay essential information quickly, e.g. to inform people about  <span className="numberOfQuestion">24</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques24"
              TestName={"Cambridge-15-Test4"}
              AnswerData={RightAnswers && RightAnswers[23]}
              userAnswerQN={UserData.ques24}
              ExplainDataObj={{
                number: 24,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `useful, fires, rapid communication`,
                explain: `Also in Paragraph D, it is mentioned that Silbo is especially useful during fires to communicate quickly across large areas.`
              }}
            /> <br />

            <h5>  The future of Silbo</h5> <br />

            <div className="flex flex-wrap">
              ●   future under threat because of new  <span className="numberOfQuestion">25</span>
              <ReadingText_inputs
                handleValueChange={handleChange}
                QNum="ques25"
                TestName={"Cambridge-15-Test4"}
                AnswerData={RightAnswers && RightAnswers[24]}
                userAnswerQN={UserData.ques25}
                ExplainDataObj={{
                  number: 25,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: `modern technology, threat to Silbo`,
                  explain: `Paragraph G mentions that modern communication technology threatens Silbo’s existence, implying it is replacing the traditional method.`
                }}
              />
            </div> <br />

            <div className="flex flex-wrap">
              ●   Canaries’ authorities hoping to receive a UNESCO  <span className="numberOfQuestion">26</span>
              <ReadingText_inputs
                handleValueChange={handleChange}
                QNum="ques26"
                TestName={"Cambridge-15-Test4"}
                AnswerData={RightAnswers && RightAnswers[25]}
                userAnswerQN={UserData.ques26}
                ExplainDataObj={{
                  number: 26,
                  Ans1: "",
                  hiddenWord: "",
                  hiddenWord2: "",
                  keyWords: `UNESCO, award, preserve for humanity`,
                  explain: `At the end of Paragraph G, it’s mentioned that local authorities are seeking a UNESCO award to help preserve Silbo.`
                }}
              /> to help preserve it
            </div><br />
          </div>

        </div>
      </div>




      {/* Passage-3 Questions */}
      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4 className='underline text-center'>Reading Passage-3  </h4> <br />
        <div className="Articles">
          <h4>Questions 27–30</h4><br />
          <label className=''>Complete the summary using the list of words, A-J, below. <br /><br />
            Write the correct letter, A-J, in boxes 27-31 on your answer sheet.</label><br />
        </div>

        <div className="Questions">
          <h4 className='text-center'>Big businesses</h4> <br />
          <div className='flex flex-wrap'>
            Many big businesses today are prepared to harm people and the environment in order to make money, and they appear to have no  <span className="numberOfQuestion">27</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques27"
              TestName={"Cambridge-15-Test4"}
              AnswerData={RightAnswers && RightAnswers[26]}
              userAnswerQN={UserData.ques27}
              ExplainDataObj={{
                number: 27,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `offend our sense of justice, hurt people → D: moral standards`,
                explain: `Paragraph A says businesses can profit by damaging the environment and hurting people, which "offends our sense of justice." This clearly indicates lack of moral standards.`
              }}
            />. Lack of  <span className="numberOfQuestion">28</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques28"
              TestName={"Cambridge-15-Test4"}
              AnswerData={RightAnswers && RightAnswers[27]}
              userAnswerQN={UserData.ques28}
              ExplainDataObj={{
                number: 28,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `ineffective regulation → E: control`,
                explain: `Also from Paragraph A: “When government regulation is ineffective...” This means a lack of control by the government allows businesses to damage the environment.`
              }}
            /> by governments and lack of public  <span className="numberOfQuestion">29</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques29"
              TestName={"Cambridge-15-Test4"}
              AnswerData={RightAnswers && RightAnswers[28]}
              userAnswerQN={UserData.ques29}
              ExplainDataObj={{
                number: 29,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `public doesn’t care → F: involvement`,
                explain: `Again from Paragraph A: “...if the public doesn’t care...” This reflects lack of public involvement or concern.`
              }}
            /> can lead to environmental problems such as  <span className="numberOfQuestion">30</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques30"
              TestName={"Cambridge-15-Test4"}
              AnswerData={RightAnswers && RightAnswers[29]}
              userAnswerQN={UserData.ques30}
              ExplainDataObj={{
                number: 30,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `unmanaged fishery, without quotas → H: overfishing`,
                explain: `Paragraph A gives the example of “fishermen in an unmanaged fishery without quotas,” which clearly refers to overfishing.`
              }}
            /> or the destruction of  <span className="numberOfQuestion">31</span>
            <ReadingText_inputs
              handleValueChange={handleChange}
              QNum="ques31"
              TestName={"Cambridge-15-Test4"}
              AnswerData={RightAnswers && RightAnswers[30]}
              userAnswerQN={UserData.ques31}
              ExplainDataObj={{
                number: 31,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `logging companies, rainforest → B: trees`,
                explain: `Still in Paragraph A: “...international logging companies with short-term leases on tropical rainforest land...” — this implies the destruction of trees.`
              }}
            />
          </div>
        </div>
        <div className="box-container border p-4 bg-gray-100 max-w-xl mx-auto rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="box-item font-bold">A: funding</div>
            <div className="box-item font-bold">D: moral standards</div>
            <div className="box-item font-bold">B: trees</div>
            <div className="box-item font-bold">E: control</div>
            <div className="box-item font-bold">C: rare species</div>
            <div className="box-item font-bold">F: involvement</div>
            <div className="box-item font-bold">G: flooding</div>
            <div className="box-item font-bold">H: overfishing</div>
            <div className="box-item font-bold">I: worker support</div>
          </div>
        </div>
      </div>




      <div className=" ml-[10px] sm:ml-[25px] mb-5">
        <div className="Articles">
          <h4> Question 32-34</h4> <br />
          <label htmlFor="">
            Choose the correct letter, A, B, C or D. <br /> <br />
            Write the correct letter in boxes 32-34 on your answer sheet.
          </label> <br />
        </div>
        {/* Question 27 */}
        <div className="Questions">
          <div className="mb-3">
            <ReadingSelect_input
              inputOptions={["A", "B", "C", "D"]}
              handleValueChange={handleChange}
              QNum="ques32"
              TestName={"Cambridge-15-Test4"}
              AnswerData={RightAnswers && RightAnswers[31]}
              userAnswerQN={UserData.ques32}
              contentsObj={{
                Title: "The main idea of the third paragraph is that environmental damage",
                AData: "requires political action if it is to be stopped.",
                BData: "is the result of ignorance on the part of the public.",
                CData: "could be prevented by the action of ordinary people.",
                DData: "can only be stopped by educating business leaders."
              }}
              ExplainDataObj={{
                number: 32,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "public power, sue businesses, prefer sustainable products → C is correct",
                explain: "Paragraph C emphasizes how public action (suing companies, buying sustainable products, influencing governments) can stop environmental damage."
              }}
            />
          </div>

          <div className="mb-3">
            <ReadingSelect_input
              inputOptions={["A", "B", "C", "D"]}
              handleValueChange={handleChange}
              QNum="ques33"
              TestName={"Cambridge-15-Test4"}
              AnswerData={RightAnswers && RightAnswers[32]}
              userAnswerQN={UserData.ques33}
              contentsObj={{
                Title: "In the fourth paragraph, the writer describes ways in which the public can",
                AData: "reduce their own individual impact on the environment.",
                BData: "learn more about the impact of business of the environment.",
                CData: "raise awareness of the effects of specific environmental disasters.",
                DData: "influence the environmental policies of businesses and governments."
              }}
              ExplainDataObj={{
                number: 33,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "buying, shaming employees, pressuring governments → D is correct",
                explain: "Paragraph C again explains how people can influence companies and governments through purchases, complaints, or pressure."
              }}
            />
          </div>

          <div className="mb-3">
            <ReadingSelect_input
              inputOptions={["A", "B", "C", "D"]}
              handleValueChange={handleChange}
              QNum="ques34"
              TestName={"Cambridge-15-Test4"}
              AnswerData={RightAnswers && RightAnswers[33]}
              userAnswerQN={UserData.ques34}
              contentsObj={{
                Title: "What pressure was exerted by big business in the case of the disease BSE?",
                AData: "Meat packers stopped supplying hamburgers to fast-food chains.",
                BData: "A fast-food company forced their meat suppliers to follow the law.",
                CData: "Meat packers persuaded the government to reduce their expenses.",
                DData: "A fast-food company encouraged the government to introduce legislation."
              }}
              ExplainDataObj={{
                number: 34,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "meat packers refused → fast-food company demanded → immediate compliance → B is correct",
                explain: "Paragraph D: Though meat packers ignored the law for five years, once a fast-food company demanded compliance, they followed the rules quickly."
              }}
            />
          </div>
        </div>

      </div>




      <div className=' pl-[10px] sm:pl-[25px] mb-4'>
        <div className="Articles">
          <h4>Questions 35–39</h4> <br />
          <label className=''>Do the following statements agree with the claims of the writer in Reading Passage 3? <br /> <br />
            In boxes 35-39 on your answer sheet, write</label><br /> <br />
          <div className="box-container border p-4 bg-gray-100 max-w-xl mx-auto rounded-lg">
            <div className="grid grid-cols-1 gap-4">
              <div className="box-item">YES: if the statement agrees with the claims of the writer</div>
              <div className="box-item">NO: if the statement contradicts the claims of the writer</div>
              <div className="box-item">NOT GIVEN: if it is impossible to say what the writer thinks about this</div>
            </div>
          </div>
        </div>
        <div className="Questions">
          <div className="flex flex-wrap">
            <label htmlFor="ques35"><span className='numberOfQuestion'>35</span> The public should be prepared to fund good environmental practices.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques35"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[34]}
              userAnswerQN={UserData.ques35}
              options={["YES", "NO", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 35,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `higher prices, added costs → YES`,
                explain: `Paragraph E: “The public must accept the necessity for higher prices…to cover the added costs…of sound environmental practices.”`
              }}
            />
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="ques36"><span className='numberOfQuestion'>36</span> There is a contrast between the moral principles of different businesses.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques36"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[35]}
              userAnswerQN={UserData.ques36}
              options={["YES", "NO", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 36,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `no comparison between businesses → NOT GIVEN`,
                explain: `The passage doesn’t compare businesses’ moral values to each other, so we don’t know if their principles differ.`
              }}
            />
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="ques37"><span className='numberOfQuestion'>37</span> It is important to make a clear distinction between acceptable and unacceptable behaviour.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques37"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[36]}
              userAnswerQN={UserData.ques37}
              options={["YES", "NO", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 37,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `not moralistic, not about right or wrong → NO`,
                explain: `Paragraph F says: “My conclusion is not a moralistic one...not about who is right or wrong...” So the author rejects the idea of drawing a moral line.`
              }}
            />
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="ques38"><span className='numberOfQuestion'>38</span> The public have successfully influenced businesses in the past.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques38"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[37]}
              userAnswerQN={UserData.ques38}
              options={["YES", "NO", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 38,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `businesses have changed due to public → YES`,
                explain: `Paragraph F: “In the past, businesses have changed when the public came to expect and require different behavior.”`
              }}
            />
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="ques39"><span className='numberOfQuestion'>39</span> In the future, businesses will show more concern for the environment.</label>
            <TF_AZ_IX_inputs
              handleValueChange={handleChange}
              QNum="ques39"
              TestName="Cambridge-15-Test4"
              AnswerData={RightAnswers && RightAnswers[38]}
              userAnswerQN={UserData.ques39}
              options={["YES", "NO", "NOT GIVEN"]}
              ExplainDataObj={{
                number: 39,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: `prediction dependent on public, not a fact → NOT GIVEN`,
                explain: `The writer predicts that change is possible if the public shifts attitudes, but doesn’t guarantee future environmental concern from businesses.`
              }}
            />
          </div>
        </div>

      </div>


      <div className=" ml-[10px] sm:ml-[25px] mb-5">
        <div className="Articles">
          <h4> Question 40</h4> <br />
          <label htmlFor="">
            Choose the correct letter, A, B, C or D. <br /> <br />
            Write the correct letter in boxes 40 on your answer sheet.
          </label> <br />
        </div>
        {/* Question 27 */}
        <div className="Questions">
          <div className="mb-3">
            <ReadingSelect_input
              inputOptions={["A", "B", "C", "D"]}
              handleValueChange={handleChange}
              QNum="ques40"
              TestName={"Cambridge-15-Test4"}
              AnswerData={RightAnswers && RightAnswers[39]}
              userAnswerQN={UserData.ques40}
              contentsObj={{
                Title: "What would be the best subheading for this passage?",
                AData: " Will the world survive the threat caused by big businesses?",
                BData: "How can big businesses be encouraged to be less driven by profit?",
                CData: "What environmental dangers are caused by the greed of businesses?",
                DData: "Are big businesses to blame for the damage they cause the environment?"
              }}
              ExplainDataObj={{
                number: 40,
                Ans1: "",
                hiddenWord: "",
                hiddenWord2: "",
                keyWords: "blaming businesses vs public role → D is best subheading",
                explain: "The core theme is whether businesses alone are responsible, or if the public shares responsibility. The author suggests blaming businesses is too simple, and the public holds ultimate responsibility."
              }}
            />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Panel2_Q2





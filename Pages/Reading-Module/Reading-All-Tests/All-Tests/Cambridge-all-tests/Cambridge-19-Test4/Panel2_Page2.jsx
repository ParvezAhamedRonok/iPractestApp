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
          <span className="font-bold">Reading Passage 2</span> has Six paragraphs, <span className="font-bold">A–F.</span>
        </label>
        <label>Which paragraph contains the following information?</label>
        <label>
          Write the correct letter, A–F, in boxes 14–17 on your answer sheet. <br />
        </label>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <div className=''>
          <label htmlFor="ques14">
            <span className='numberOfQuestion'>14</span> reference to the rapidly increasing need for one raw material in the transport industry
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques14"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[13]}
            userAnswerQN={UserData.ques14}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 14,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Nickel, cobalt, copper, electric car batteries, soaring demand",
              explain: "Paragraph C highlights the increasing need for these metals, such as cobalt and copper, for electric car batteries and technology, particularly due to the growth of the transport industry."
            }}
          />
        </div>

        <div className=''>
          <label htmlFor="ques15">
            <span className='numberOfQuestion'>15</span> a rough estimate of the area of the Earth covered by the oceans
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques15"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[14]}
            userAnswerQN={UserData.ques15}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 15,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Oceans, 70% of Earth",
              explain: "Paragraph F provides the estimate that oceans cover approximately 70% of the planet, offering a broad sense of the Earth's coverage by oceans."
            }}
          />
        </div>

        <div className=''>
          <label htmlFor="ques16">
            <span className='numberOfQuestion'>16</span> how a particular underwater habitat, where minerals and organisms co-exist, is formed
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques16"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[15]}
            userAnswerQN={UserData.ques16}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 16,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Hydrothermal vents, seawater, volcanic magma, biodiversity",
              explain: "Paragraph E explains how hydrothermal vents form when seawater meets volcanic magma, creating a unique habitat rich in minerals and supporting biodiversity."
            }}
          />
        </div>

        <div className=''>
          <label htmlFor="ques17">
            <span className='numberOfQuestion'>17</span> reference to the fact that the countries of the world have yet to agree on rules for the exploration of the seabed
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques17"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[16]}
            userAnswerQN={UserData.ques17}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 17,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Global regulatory framework, deep-sea mining, not yet drafted",
              explain: "Paragraph D highlights that there is currently no global regulatory framework for deep-sea mining, emphasizing that countries have yet to agree on seabed exploration rules."
            }}
          />
        </div>
      </div>



      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h4 className=''>Questions 18–23</h4> <br />
        <label className=''>Look at the following statements (Questions 18–23) and the list of people below. <br /> <br />

          Match each statement with the correct person or people, A-E. <br /> <br />

          Write the correct letter, A-E, in boxes 18–23 on your answer sheet. <br /> <br />

          NB   You may use any letter more than once.  </label>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <div className=''>
          <label htmlFor="ques18">
            <span className='numberOfQuestion'>18</span> A move away from the exploration of heavily mined reserves on land is a good idea.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques18"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[17]}
            userAnswerQN={UserData.ques18}
            options={["A", "B", "C", "D", "E"]}
            ExplainDataObj={{
              number: 18,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Exploring marine potential, environmentally sustainable, land resources depleting",
              explain: "Mike Johnston in Paragraph F advocates for exploring untapped marine resources sustainably, as land resources are depleting."
            }}
          />

          <label htmlFor="ques19">
            <span className='numberOfQuestion'>19</span> The negative effects of undersea exploration on local areas and their inhabitants are being ignored.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques19"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[18]}
            userAnswerQN={UserData.ques19}
            options={["A", "B", "C", "D", "E"]}
            ExplainDataObj={{
              number: 19,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Environmental impacts, social impacts, marginalization of indigenous peoples",
              explain: "Julie Hunter, Julian Aguon, and Pradeep Singh in Paragraph D argue that deep-sea mining disregards the environmental and social impacts on nearby communities"
            }}
          />

          <label htmlFor="ques20">
            <span className='numberOfQuestion'>20</span> There are more worthwhile things to extract from the sea than minerals.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques20"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[19]}
            userAnswerQN={UserData.ques20}
            options={["A", "B", "C", "D", "E"]}
            ExplainDataObj={{
              number: 20,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Marine resources, medicines, bioactive potential",
              explain: "Professor Mat Upton in Paragraph B emphasizes the importance of exploring marine resources for medicines rather than focusing solely on minerals."
            }}
          />

          <label htmlFor="ques21">
            <span className='numberOfQuestion'>21</span> No other form of human exploration will have such a destructive impact on marine life as deep-sea mining.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques21"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[20]}
            userAnswerQN={UserData.ques21}
            options={["A", "B", "C", "D", "E"]}
            ExplainDataObj={{
              number: 21,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Greatest assault, deep-sea ecosystems, destructive impact",
              explain: "Verena Tunnicliffe in Paragraph F claims that deep-sea mining will be the greatest assault on marine ecosystems, asserting its destructive impact on marine life.."
            }}
          />

          <label htmlFor="ques22">
            <span className='numberOfQuestion'>22</span> More is known about outer space than about what lies beneath the oceans.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques22"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[21]}
            userAnswerQN={UserData.ques22}
            options={["A", "B", "C", "D", "E"]}
            ExplainDataObj={{
              number: 22,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Limited knowledge, deep sea, outer space",
              explain: "Julie Hunter, Julian Aguon, and Pradeep Singh in Paragraph D highlight that there is more known about outer space than about the deep sea, underlining the limited knowledge."
            }}
          />

          <label htmlFor="ques23">
            <span className='numberOfQuestion'>23</span> There is one marine life habitat where experts agree mining should not take place.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques23"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[22]}
            userAnswerQN={UserData.ques23}
            options={["A", "B", "C", "D", "E"]}
            ExplainDataObj={{
              number: 23,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Hydrothermal vents, no mining, biodiversity protection",
              explain: "Dr. Jon Copley in Paragraph E agrees that mining should not occur on hydrothermal vents, as they are crucial for marine biodiversity."
            }}
          />
        </div> <br />



        <div className="box-container border p-4 bg-gray-100 max-w-xl mx-auto rounded-lg">
          <h5>List of People</h5> <br />
          <div className="grid grid-cols-1 gap-4">
            <div className="box-item font-bold">A: Professor Mat Upton</div>
            <div className="box-item font-bold">B: Julie Hunter, Julian Aguon and Pradeep Singh</div>
            <div className="box-item font-bold">C: Dr Jon Copley</div>
            <div className="box-item font-bold">D: Mike Johnston</div>
            <div className="box-item font-bold">E: Verena Tunnicliffe</div>
          </div>
        </div>

      </div>



      <div className='articles pl-[10px] sm:pl-[25px] mt-2 mb-4'>
        <h4 className=''>Questions 24–26</h4> <br />
        <label className=''>
          Complete the sentences below.<br /> <br />
          Choose ONE WORD ONLY from the passage for each answer.<br /><br />
          Write your answers in boxes 24-26 on your answer sheet.<br />
        </label><br />

      </div>
      <div className="Questions ml-[10px] sm:ml-[25px] mb-5">
        <h5 className='text-center mb-1'>Mining the sea floor</h5>
        <div className='flex flex-wrap'>
          Mining corporations believe that the mineral resources lying under the sea may be superior to those found in the earth. They also say that these can be removed without producing much  <span className="numberOfQuestion">24</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques24"
            TestName={"Cambridge-19-Test4"}
            AnswerData={RightAnswers && RightAnswers[23]}
            userAnswerQN={UserData.ques24}
            ExplainDataObj={{
              number: 24,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Superior ore, little to no waste",
              explain: "Paragraph C mentions that mining companies believe the deep-sea ore is superior and can be extracted with little to no waste produced, supporting the term waste."
            }}
          />.

          The extraction is often done by adapting the  <span className="numberOfQuestion">25</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques25"
            TestName={"Cambridge-19-Test4"}
            AnswerData={RightAnswers && RightAnswers[24]}
            userAnswerQN={UserData.ques25}
            ExplainDataObj={{
              number: 25,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Machinery, adapted from land mining",
              explain: "Paragraph C explains that the machinery used for land mining is adapted for deep-sea extraction, making machinery the correct word."
            }}
          /> that has already been used to work on land. The method of excavation involves removing the seawater from the slurry that is brought up to ships and returning it to the seabed. However, concerned groups strongly believe that  <span className="numberOfQuestion">26</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques26"
            TestName={"Cambridge-19-Test4"}
            AnswerData={RightAnswers && RightAnswers[25]}
            userAnswerQN={UserData.ques26}
            ExplainDataObj={{
              number: 26,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Caution, unknown consequences, deep-sea mining",
              explain: "Paragraph D argues that legal and environmental groups urge caution due to the unknown consequences of deep-sea mining, making caution the appropriate word."
            }}
          />is necessary due to the possible number of unidentified consequences.
        </div>

      </div>



      {/* Passage-3 Questions */}
      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4 className='underline text-center'>Reading Passage-3  </h4> <br />
        <h4>Questions 27–30</h4><br />
        <label className=''>Choose the correct letter, A, B, C or D. <br /> <br />
          Write the correct letter in boxes 27–30 on your answer sheet. <br /> <br /></label><br />
      </div>
      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        {/* Question 27 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques27"
            TestName={"Cambridge-19-Test4"}
            AnswerData={RightAnswers && RightAnswers[26]}
            userAnswerQN={UserData.ques27}
            contentsObj={{
              Title: "What is the writer doing in the first paragraph?",
              AData: "setting out two opposing views about human nature",
              BData: "justifying his opinion about our tendency to be greedy",
              CData: "describing a commonly held belief about people’s behaviour",
              DData: "explaining why he thinks that humans act in a selfish manner"
            }}
            ExplainDataObj={{
              number: 27,
              Ans1: "(C) – describing a commonly held belief about people’s behaviour.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "assumption, selfish, ruthless, compete, ulterior motives.",
              explain: "In the first paragraph (Paragraph A), the writer describes the general belief that human beings are inherently selfish, competitive, and ruthless. This is a widely held belief and is attributed to Richard Dawkins' work. The writer is simply outlining this viewpoint rather than agreeing or disagreeing with it."
            }}
          />
        </div>

        {/* Question 28 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques28"
            TestName={"Cambridge-19-Test4"}
            AnswerData={RightAnswers && RightAnswers[27]}
            userAnswerQN={UserData.ques28}
            contentsObj={{
              Title: "What point is made about Richard Dawkins’ book The Selfish Gene?",
              AData: "Its appeal lay in the radical nature of its ideas.",
              BData: "Its success was due to the scientific support it offered.",
              CData: "It presented a view that was in line with the attitudes of its time.",
              DData: "It took an innovative approach to the analysis of human psychology."
            }}
            ExplainDataObj={{
              number: 28,
              Ans1: "(C) – It presented a view that was in line with the attitudes of its time.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Richard Dawkins, The Selfish Gene, popular, competitive, individualistic ethos.",
              explain: `In Paragraph A, the writer explains that Richard Dawkins' book "The Selfish Gene" became popular because it reflected the individualistic and competitive values of late 20th-century society. Dawkins’ theory resonated with the prevailing ethos of that period, suggesting that his work aligned with the societal attitudes of the time.`
            }}
          />
        </div>

        {/* Question 29 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques29"
            TestName={"Cambridge-19-Test4"}
            AnswerData={RightAnswers && RightAnswers[28]}
            userAnswerQN={UserData.ques29}
            contentsObj={{
              Title: "What does the writer suggest about the prehistoric era in the fourth paragraph?",
              AData: "Societies were more complex than many people believe.",
              BData: "Supplies of natural resources were probably relatively plentiful.",
              CData: "Most estimates about population sizes are likely to be inaccurate.",
              DData: "Humans moved across continents more than was previously thought."
            }}
            ExplainDataObj={{
              number: 29,
              Ans1: "(B) – Supplies of natural resources were probably relatively plentiful.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "sparsely populated, resources, competition, population of Europe, hunter-gatherers.",
              explain: "In Paragraph C, the writer explains that the prehistoric world was sparsely populated, with small populations of humans. This suggests that resources like rivers, forests, and animals were not as scarce as once thought, and therefore, there was little need for aggressive competition for them."
            }}
          />
        </div>

        {/* Question 30 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques30"
            TestName={"Cambridge-19-Test4"}
            AnswerData={RightAnswers && RightAnswers[29]}
            userAnswerQN={UserData.ques30}
            contentsObj={{
              Title: "The writer refers to Bruce Knauft’s work as support for the idea that",
              AData: "selfishness is a relatively recent development in human societies.",
              BData: "only people in isolated communities can live in an unselfish manner.",
              CData: "very few lifestyles have survived unchanged since prehistoric times.",
              DData: "hunter-gatherer cultures worldwide are declining in number."
            }}
            ExplainDataObj={{
              number: 30,
              Ans1: "(A) – selfishness is a relatively recent development in human societies.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Bruce Knauft, hunter-gatherers, egalitarianism, selfishness, recent development.",
              explain: "In Paragraph D and Paragraph F, the writer refers to Bruce Knauft’s research on hunter-gatherer societies. These societies were characterized by egalitarianism, and the writer argues that traits like selfishness and ruthlessness developed much later, particularly after the advent of farming. This suggests that selfishness is a relatively recent development in human societies."
            }}
          />
        </div>
      </div>



      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 31–35</h6> <br />
        <label className=''>Complete the summary below. <br /> <br />
          Choose ONE WORD ONLY from the passage for each answer. <br /> <br />
          Write your answers in boxes 31–35 on your answer sheet.</label><br /> <br />
      </div>
      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        <h5 className='text-center'>Contemporary hunter-gatherer societies </h5> <br />
        <div className="flex flex-wrap">
          Bruce Kauft’s research shows that contemporary hunter-gatherer societies tend to exhibit a high level of <span className="numberOfQuestion">31</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques31"
            TestName={"Cambridge-19-Test4"}
            AnswerData={RightAnswers && RightAnswers[30]}
            userAnswerQN={UserData.ques31}
            ExplainDataObj={{
              number: 31,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "egalitarianism, political, sexual, share everything.",
              explain: `In Paragraph D, Bruce Knauft’s research highlights that contemporary hunter-gatherer societies exhibit "extreme political and sexual egalitarianism," where resources are shared equally, and no one is allowed to accumulate too much. This reflects the high level of egalitarianism in these societies.`
            }}
          /> in all areas of life. In these cultures, distributing resources fairly among all members is a moral obligation. These societies also employ strategies to prevent differences in <span className="numberOfQuestion">32</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques32"
            TestName={"Cambridge-19-Test4"}
            AnswerData={RightAnswers && RightAnswers[31]}
            userAnswerQN={UserData.ques32}
            ExplainDataObj={{
              number: 32,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "disparities of status, preventing differences.",
              explain: "In Paragraph D, the writer notes that contemporary hunter-gatherer societies actively prevent status disparities from arising. This is done through cultural practices that maintain equal standing among members of the society"
            }}
          /> occurring: for example, the !Kung follow a custom whereby the credit for one person’s success at <span className="numberOfQuestion">33</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques33"
            TestName={"Cambridge-19-Test4"}
            AnswerData={RightAnswers && RightAnswers[32]}
            userAnswerQN={UserData.ques33}
            ExplainDataObj={{
              number: 33,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "hunting, !Kung, arrows, success.",
              explain: "In Paragraph E, the writer provides an example of how the !Kung people of southern Africa do not attribute success in hunting to the individual who killed the animal, but rather to the owner of the arrow. This practice highlights the egalitarian distribution of success."
            }}
          /> is given to another member of the group. Individuals who behave in a <span className="numberOfQuestion">34</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques34"
            TestName={"Cambridge-19-Test4"}
            AnswerData={RightAnswers && RightAnswers[33]}
            userAnswerQN={UserData.ques34}
            ExplainDataObj={{
              number: 34,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "domineering, ostracise, punishment.",
              explain: "In Paragraph E, the writer mentions that if someone becomes domineering, the group ostracizes them. This punishment helps maintain a balanced and egalitarian society where no one dominates others."
            }}
          /> manner are punished by being excluded from the group, and women have a considerable amount of <span className="numberOfQuestion">35</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques35"
            TestName={"Cambridge-19-Test4"}
            AnswerData={RightAnswers && RightAnswers[34]}
            userAnswerQN={UserData.ques35}
            ExplainDataObj={{
              number: 35,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "autonomy, women, marriage, work, independence.",
              explain: "In Paragraph E, the writer discusses how women in hunter-gatherer societies like the !Kung have significant autonomy over decisions like marriage, work, and when to work. This level of autonomy is uncommon in many other societies."
            }}
          /> in choices regarding work and marriage.
        </div>


      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4>Questions 36–40</h4> <br />
        <label className=''>Do the following statements agree with the claims of the writer in Reading Passage 3?<br /> <br />
          In boxes 37–40 on your answer sheet, write</label><br /> <br />
        <div className="box-container border p-4 bg-gray-100 max-w-xl mx-auto rounded-lg">
          <div className="grid grid-cols-1 gap-4">
            <div className="box-item">YES: if the statement agrees with the claims of the writer</div>
            <div className="box-item">NO: if the statement contradicts the claims of the writer</div>
            <div className="box-item">NOT GIVEN: if it is impossible to say what the writer thinks about this</div>
          </div>
        </div>
      </div>

      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        {/* Question 36 */}
        <div className="flex flex-wrap gap-1">
          <label htmlFor="ques36">
            <span className="numberOfQuestion">36</span> Some anthropologists are mistaken about the point when the number of societies such as the !Kung began to decline.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques36"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[35]}
            userAnswerQN={UserData.ques36}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 36,
              Ans1: "",
              hiddenWord: "Not Given.",
              hiddenWord2: "",
              keyWords: "Not Given.",
              explain: "There is no explicit mention of whether some anthropologists are mistaken about the point when societies like the !Kung began to decline. Therefore, it is impossible to determine what the writer thinks about this."
            }}
          />
        </div>

        {/* Question 37 */}
        <div className="flex flex-wrap gap-1">
          <label htmlFor="ques37">
            <span className="numberOfQuestion">37</span> Humans who developed warlike traits in prehistory would have had an advantage over those who did not.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques37"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[36]}
            userAnswerQN={UserData.ques37}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 37,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "selfishness, aggression, survival, cooperation, egalitarianism.",
              explain: "In Paragraph F, the writer argues that selfish and aggressive traits would have been disadvantageous in prehistoric times, and thus, those traits would not have been selected for. Instead, cooperation and egalitarianism were more beneficial for survival. This contradicts the idea that humans with warlike traits would have had an advantage."
            }}
          />
        </div>

        {/* Question 38 */}
        <div className="flex flex-wrap gap-1">
          <label htmlFor="ques38">
            <span className="numberOfQuestion">38</span> Being peaceful and cooperative is a natural way for people to behave.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques38"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[37]}
            userAnswerQN={UserData.ques38}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 38,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "cooperation, egalitarianism, altruism, peacefulness, innate",
              explain: "In Paragraph F, the writer argues that traits such as cooperation, egalitarianism, altruism, and peacefulness were innate characteristics of human beings during the prehistoric era. This suggests that being peaceful and cooperative is a natural way for people to behave."
            }}
          />
        </div>

        {/* Question 39 */}
        <div className="flex flex-wrap gap-1">
          <label htmlFor="ques39">
            <span className="numberOfQuestion">39</span> Negative traits are more apparent in some modern cultures than in others.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques39"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[38]}
            userAnswerQN={UserData.ques39}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 39,
              Ans1: "",
              hiddenWord: "Not Given.",
              hiddenWord2: "",
              keyWords: "Not Given.",
              explain: "The passage does not provide specific information comparing the prevalence of negative traits in different modern cultures. Therefore, it is impossible to determine whether the writer thinks that negative traits are more apparent in some cultures than in others."
            }}
          />
        </div>

        {/* Question 40 */}
        <div className="flex flex-wrap gap-1">
          <label htmlFor="ques40">
            <span className="numberOfQuestion">40</span> Animal research has failed to reveal a link between changes in the environment and the emergence of aggressive tendencies.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques40"
            TestName="Cambridge-19-Test4"
            AnswerData={RightAnswers && RightAnswers[39]}
            userAnswerQN={UserData.ques40}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 40,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "primates, violent, hierarchical, environment, aggression.",
              explain: "In Paragraph G, the writer states that when the natural habitats of primates are disrupted, they become more violent and hierarchical. This suggests that the writer believes that environmental changes can indeed lead to more aggressive tendencies, which contradicts the idea that animal research has failed to reveal this link."
            }}
          />
        </div>
      </div>


    </section>
  )
}

export default Panel2_Q2





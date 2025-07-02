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
        <h4>Questions 14-20</h4> <br />
        <br />
        <label>
          Reading Passage 2 has nine paragraphs, A-H <br /><br />
          Choose the correct heading for each section from the list of headings below <br /><br />
          Write the correct number, i-x, in boxes 14-20 on your answer sheet. <br />
        </label> <br />
        <div className="box-container border p-4 bg-gray-100 max-w-xl mx-auto rounded-lg">
          <h4>List of Headings</h4> <br />
          <div className="grid grid-cols-2 gap-4">
            <div className="box-item font-bold">i: Getting the finance for production</div>
            <div className="box-item font-bold">ii: An unexpected benefit</div>
            <div className="box-item font-bold">iii: From initial inspiration to new product</div>
            <div className="box-item font-bold">iv: The range of potential customers for the device</div>
            <div className="box-item font-bold">v: What makes the device different from alternatives</div>
            <div className="box-item font-bold">vi: Cleaning water from a range of sources</div>
            <div className="box-item font-bold">vii: Overcoming production difficulties</div>
            <div className="box-item font-bold">viii: Profit not the primary goal</div>
            <div className="box-item font-bold">ix: A warm welcome for the device</div>
            <div className="box-item font-bold">x: The number of people affected by water shortages</div>
          </div>
        </div>


      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <div className='flex flex-wrap '>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span> Section A</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques14"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[13]}
            userAnswerQN={UserData.ques14}
            options={["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"]}
            ExplainDataObj={{
              number: 14,
              Ans1: "(iii) From initial inspiration to new product",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `“Travelling around Thailand…”, “Janssen developed that basic idea… into a portable device”.`,
              explain: "This section talks about how William Janssen was inspired during his travels in Thailand and later turned the idea into the Desolenator device."
            }}
          />
        </div> <br />
        <div className=' flex flex-wrap'>
          <label htmlFor="ques15"><span className='numberOfQuestion'>15</span> Section B</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques15"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[14]}
            userAnswerQN={UserData.ques15}
            options={["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"]}
            ExplainDataObj={{
              number: 15,
              Ans1: "(vi) Cleaning water from a range of sources",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `“take water from different places”, “purify it for human consumption”`,
              explain: "This paragraph explains that the device can clean water from various sources: sea, rivers, boreholes, and rain."
            }}
          />
        </div> <br />
        <div className=' flex flex-wrap'>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span> Section C</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques16"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[15]}
            userAnswerQN={UserData.ques16}
            options={["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"]}
            ExplainDataObj={{
              number: 16,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `“doesn’t require a generated power supply”, “solar-powered battery”, “LCD screen”`,
              explain: "Focuses on how the Desolenator is different from regular desalination systems: it only needs sunlight and no external power."
            }}
          />
        </div> <br />
        <div className=' flex flex-wrap'>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span> Section D</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques17"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[16]}
            userAnswerQN={UserData.ques17}
            options={["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"]}
            ExplainDataObj={{
              number: 17,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `“at least two-thirds of the world’s population…”, “by 2030 half of the world’s population…”.`,
              explain: "This section presents stats about water scarcity and emphasizes the growing need for a sustainable solution."
            }}
          />
        </div> <br />
        <div className='flex flex-wrap'>
          <label htmlFor="ques18"><span className='numberOfQuestion'>18</span> Section E</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques18"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[17]}
            userAnswerQN={UserData.ques18}
            options={["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"]}
            ExplainDataObj={{
              number: 18,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `“wide variety of users”, “developing world”, “niche markets”.`,
              explain: "This section discusses various users: homeowners in developing countries, rural Americans, campers, military."
            }}
          />
        </div> <br />
        <div className=' flex flex-wrap'>
          <label htmlFor="ques19"><span className='numberOfQuestion'>19</span> Section F</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques19"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[18]}
            userAnswerQN={UserData.ques19}
            options={["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"]}
            ExplainDataObj={{
              number: 19,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `“venture with a social mission”, “mainly finding application in… humanitarian sector”`,
              explain: "This paragraph describes the company’s social mission and its focus on helping the developing world, rather than making profit."
            }}
          />
        </div> <br />
        <div className='flex flex-wrap'>
          <label htmlFor="ques20"><span className='numberOfQuestion'>20</span> Section G</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques20"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[19]}
            userAnswerQN={UserData.ques20}
            options={["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"]}
            ExplainDataObj={{
              number: 20,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `“raised £340,000 in funding”, “aims to be selling 1,000 units a month”.`,
              explain: "This section provides figures on funding and future plans to scale up production."
            }}
          />
        </div>
      </div>






      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h4 className=''>Questions 21 to 26</h4> <br />
        <label className=''>
          Complete the summary below. <br /><br />
          Choose ONE WORD ONLY from the passage for each answer. <br /><br />
          Write your answers in boxes 21-26 on your answer sheet.</label> <br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <h4 className='text-center'>How the Desolenator works</h4> <br />
        <div className="flex flex-wrap">
          The energy required to operate the Desolenator comes from sunlight. The device can be used in different locations, as it has <span className="numberOfQuestion">21</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques21"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[20]}
            userAnswerQN={UserData.ques21}
            ExplainDataObj={{
              number: 21,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "easy to transport, two wheels",
              explain: `In Paragraph C, it mentions that the Desolenator “measures 120 cm by 90 cm, and is easy to transport, thanks to its two wheels.” This means that having wheels makes it portable and usable in different locations.

`
            }}
          /> . Water is fed into a pipe, and a <span className="numberOfQuestion">22</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques22"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[21]}
            userAnswerQN={UserData.ques22}
            ExplainDataObj={{
              number: 22,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "flows as a thin film, over the surface of a solar panel",
              explain: "Paragraph C explains that “Water enters through a pipe, and flows as a thin film between a sheet of double glazing and the surface of a solar panel.” The word film refers to the thin layer of water that spreads across the heated panel, allowing it to absorb sunlight efficiently."
            }}
          />. of water flows over a solar panel. The water then enters a boiler, where it turns into steam. Any particles in the water are caught in a <span className="numberOfQuestion">23</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques23"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[22]}
            userAnswerQN={UserData.ques23}
            ExplainDataObj={{
              number: 23,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "simple filter, trap particles, easily shaken to remove them",
              explain: "Also in Paragraph C, it says “The device has a very simple filter to trap particles, and this can easily be shaken to remove them.” This means that solid impurities are caught by a filter, helping clean the water before it’s turned into steam."
            }}
          /> . The purified water comes out through one tube, and all types of <span className="numberOfQuestion">24</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques24"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[23]}
            userAnswerQN={UserData.ques24}
            ExplainDataObj={{
              number: 24,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "two tubes, one for the waste – salt from seawater, fluoride, etc.",
              explain: "Still in Paragraph C, it states “There are two tubes for liquid coming out: one for the waste – salt from seawater, fluoride, etc.” So, the waste includes all the unwanted materials removed from the water during purification."
            }}
          /> come out through another. A screen displays the <span className="numberOfQuestion">25</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques25"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[24]}
            userAnswerQN={UserData.ques25}
            ExplainDataObj={{
              number: 25,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "performance of the unit is shown on an LCD screen",
              explain: `Paragraph C notes that “The performance of the unit is shown on an LCD screen...” which means the efficiency and working status of the Desolenator are clearly displayed for users to monitor.`
            }}
          /> of the device, and transmits the information to the company so that they know when the Desolenator requires <span className="numberOfQuestion">26</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques26"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[25]}
            userAnswerQN={UserData.ques26}
            ExplainDataObj={{
              number: 26,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "transmitted to the company, provides servicing when necessary",
              explain: " In Paragraph C, it further mentions “...and transmitted to the company which provides servicing when necessary.” This means the company monitors its condition remotely and arranges servicing if needed."
            }}
          />.
        </div>
      </div>



      {/* Passage-3 Questions */}
      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4 className='underline text-center'>Reading Passage-3  </h4> <br />
        <h4>Questions 27–31</h4><br />
        <label className=''>Complete each sentence with the correct ending, A-F, below. <br /> <br />
          Write the correct letter, A-F, in boxes 27-31 on your answer sheet. </label><br />
      </div>
      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        <div className='flex flex-wrap'>
          <label htmlFor="ques27"><span className='numberOfQuestion'>27</span> In fairy tales, details of the plot</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques27"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[26]}
            userAnswerQN={UserData.ques27}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 27,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "plot, variation, different parts of the world",
              explain: `Paragraph A: **

“People of every culture tell each other fairy tales but the same story often takes a variety of forms in different parts of the world.” **
 The same tale (like Little Red Riding Hood) appears differently worldwide—some versions have the wolf eating the grandmother, others locking her up.`
            }}
          />
        </div>

        <div className='flex flex-wrap'>
          <label htmlFor="ques28"><span className='numberOfQuestion'>28</span> Tehrani rejects the idea that the useful lessons for life in fairy tales</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques28"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[27]}
            userAnswerQN={UserData.ques28}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 28,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "useful lessons, survival, Tehrani disagrees",
              explain: ` Paragraph D: **

“Yet in his analysis such elements were just as flexible as seemingly trivial details.” **
 Tehrani discovered cautionary or moral lessons weren’t preserved consistently over time, meaning they're not the reason these stories survive.`
            }}
          />
        </div>

        <div className='flex flex-wrap'>
          <label htmlFor="ques29"><span className='numberOfQuestion'>29</span> Various theories about the social significance of fairy tales</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques29"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[28]}
            userAnswerQN={UserData.ques29}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 29,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "theories, significance, no proof",
              explain: `Paragraph B:
“That hasn’t stopped anthropologists, folklorists and other academics devising theories…”
 Many theories exist about why fairy tales matter, but Tehrani says there's a “huge gap in our knowledge,” implying theories weren’t backed by solid evidence.`
            }}
          />
        </div>

        <div className='flex flex-wrap'>
          <label htmlFor="ques30"><span className='numberOfQuestion'>30</span> Insights into the development of fairy tales</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques30"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[29]}
            userAnswerQN={UserData.ques30}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 30,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "development, biological methods",
              explain: `Paragraph C:

“Tehrani has found a way to test these ideas, borrowing a technique from evolutionary biologists.”
 He used phylogenetic analysis, a method from biology, to track how fairy tales evolved.`
            }}
          />
        </div>

        <div className='flex flex-wrap'>
          <label htmlFor="ques31"><span className='numberOfQuestion'>31</span> All the fairy tales analysed by Tehrani</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques31"
            TestName="Cambridge-15-Test3"
            AnswerData={RightAnswers && RightAnswers[30]}
            userAnswerQN={UserData.ques31}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 31,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "oral tradition, 58 stories",
              explain: ` Paragraph C:

“...58 stories recorded from oral traditions.”
 These stories were passed down by word of mouth, not originally written.`
            }}
          />
        </div>


        <br />
        <div className="box-container border p-4 bg-gray-100 max-w-xl mx-auto rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="box-item font-bold">A: may be provided through methods used in biological research.</div>
            <div className="box-item font-bold">B: are the reason for their survival.</div>
            <div className="box-item font-bold">C: show considerable global variation.</div>
            <div className="box-item font-bold">D: contain animals which transform to become humans.</div>
            <div className="box-item font-bold">E: were originally spoken rather than written.</div>
            <div className="box-item font-bold">F: have been developed without factual basis.</div>
          </div>
        </div>
      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 32–36</h6> <br />
        <label className=''>Complete the summary using the list of words, A-I, below. <br /> <br />
          Write the correct letter, A-I, in boxes 32-36 on your answer sheet.</label><br /> <br />
      </div>
      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        <h5 className='text-center'>Phylogenetic analysis of Little Red Riding Hood </h5> <br />
        <br />
        <div className="flex flex-wrap">
          Tehrani used techniques from evolutionary biology to find out if <span className="numberOfQuestion">32</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques32"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[31]}
            userAnswerQN={UserData.ques32}
            ExplainDataObj={{
              number: 32,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "relationships among 58 stories",
              explain: ` Paragraph C:

“...to find out if links existed among 58 stories…”
 He checked if the stories were related (linked) using biological comparison.`
            }}
          />. existed among 58 stories from around the world. He also wanted to know which aspects of the stories had fewest 3<span className="numberOfQuestion">33</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques33"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[32]}
            userAnswerQN={UserData.ques33}
            ExplainDataObj={{
              number: 33,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "fewest changes, stable aspects",
              explain: `Paragraph D: “aspects of the story alter least as it evolves…”  He studied which parts changed the least — had the fewest variations.`
            }}
          />, as he believed these aspects would be the most important ones. Contrary to other beliefs, he found that some <span className="numberOfQuestion">34</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques34"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[33]}
            userAnswerQN={UserData.ques34}
            ExplainDataObj={{
              number: 34,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "events change over time",
              explain: `Paragraph D:
“...he found no significant difference in the rate of evolution of incidents compared with that of characters.”
 Even important events (e.g., visiting grandmother) weren’t always fixed.`
            }}
          />. that were included in a story tended to change over time, and that the middle of a story seemed no more important than the other parts. He was also surprised that parts of a story which seemed to provide some sort of <span className="numberOfQuestion">35</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques35"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[34]}
            userAnswerQN={UserData.ques35}
            ExplainDataObj={{
              number: 35,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "cautionary, survival-relevant",
              explain: ` Paragraph D:
                “...such elements were just as flexible as seemingly trivial details.”
                Parts thought to give warnings weren’t consistently preserved.`
            }}
          />. were unimportant. The aspect that he found most important in a story’s survival was <span className="numberOfQuestion">36</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques36"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[35]}
            userAnswerQN={UserData.ques36}
            ExplainDataObj={{
              number: 36,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "ear, gruesome, shocking",
              explain: `📍 Paragraph E:

“...blood-thirsty and gruesome aspects… turned out to be the best preserved.”
 Horror or fear-inducing parts helped stories survive.`
            }}
          />
        </div>  <br />
        <div className="box-container border p-4 bg-gray-100 max-w-xl mx-auto rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="box-item font-bold">A: ending</div>
            <div className="box-item font-bold">B: events</div>
            <div className="box-item font-bold">C: warning</div>
            <div className="box-item font-bold">D: links</div>
            <div className="box-item font-bold">E: records</div>
            <div className="box-item font-bold">F: variations</div>
            <div className="box-item font-bold">G: horror</div>
            <div className="box-item font-bold">H: people</div>
            <div className="box-item font-bold">I: plot</div>
          </div>
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4>Questions 37–40</h4> <br />
        <label className=''>
          Choose the correct letter, A, B, C or D. <br /> <br />
          Write the correct letter in boxes 37-40 on your answer sheet.</label><br /> <br />
      </div>

      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques37"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[36]}
            userAnswerQN={UserData.ques37}
            contentsObj={{
              Title: "What method did Jamie Tehrani use to test his ideas about fairy tales?",
              AData: "He compared oral and written forms of the same stories.",
              BData: "He looked at many different forms of the same basic story.",
              CData: "He looked at unrelated stories from many different countries.",
              DData: "He contrasted the development of fairy tales with that of living creatures."
            }}
            ExplainDataObj={{
              number: 37,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "compare related versions, 58 stories, same basic story, evolved, variants",
              explain: "In Paragraph C, Tehrani used phylogenetic analysis to compare 58 related versions of Little Red Riding Hood and similar tales from various regions (Africa, East Asia, etc.). His goal was to trace how the story evolved. He wasn’t comparing unrelated stories, but many different forms of the same basic story to find patterns in changes and constants."
            }}
          />
        </div>

        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques38"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[37]}
            userAnswerQN={UserData.ques38}
            contentsObj={{
              Title: "When discussing Tehrani’s views, Jack Zipes suggests that",
              AData: "Tehrani ignores key changes in the role of women.",
              BData: "Stories which are too horrific are not always taken seriously.",
              CData: "Tehrani overemphasises the importance of violence in stories.",
              DData: "Features of stories only survive if they have a deeper significance."
            }}
            ExplainDataObj={{
              number: 38,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "won’t stick unless they matter, deeper significance, survive",
              explain: "In Paragraph F, Jack Zipes disagrees with Tehrani, saying that even if elements of a story are shocking or gruesome, they won’t survive unless they have deeper meaning. He’s emphasizing that what truly lasts in a story is what continues to matter to people socially or psychologically."
            }}
          />
        </div>

        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques39"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[38]}
            userAnswerQN={UserData.ques39}
            contentsObj={{
              Title: "Why does Tehrani refer to Chinese and Japanese fairy tales?",
              AData: "To indicate that Jack Zipes’ theory is incorrect.",
              BData: "To suggest that crime is a global problem.",
              CData: "To imply that all fairy tales have a similar meaning.",
              DData: "To add more evidence for Jack Zipes’ ideas."
            }}
            ExplainDataObj={{
              number: 39,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "villain is a woman, victim is a boy, not always true elsewhere",
              explain: "Also in Paragraph F, Tehrani brings up Chinese, Japanese, Iranian, and Nigerian versions of similar tales to challenge Zipes' point that women are always portrayed as victims. In these versions, villains can be women, and victims can be boys, showing that this trend isn’t universal. He’s directly countering Zipes' theory by presenting cross-cultural evidence."
            }}
          />
        </div>

        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques40"
            TestName={"Cambridge-15-Test3"}
            AnswerData={RightAnswers && RightAnswers[39]}
            userAnswerQN={UserData.ques40}
            contentsObj={{
              Title: "What does Mathias Clasen believe about fairy tales?",
              AData: "They are a safe way of learning to deal with fear.",
              BData: "They are a type of entertainment that some people avoid.",
              CData: "They reflect the changing values of our society.",
              DData: "They reduce our ability to deal with real-world problems."
            }}
            ExplainDataObj={{
              number: 40,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "learn what it feels like to be afraid, without real danger, build up resistance",
              explain: "In Paragraph G, Clasen explains that scary stories (like fairy tales) help people experience fear in a controlled way, building emotional resilience. They’re a kind of “safe training” for dealing with fear without facing actual danger, which supports why horror elements are retained across versions."
            }}
          />
        </div>
      </div>


    </section>
  )
}

export default Panel2_Q2





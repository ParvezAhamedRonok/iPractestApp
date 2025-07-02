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
        <h4>Questions 14–19</h4>
        <br />
        <label>
          <span className="font-bold">Reading Passage 2</span> has seven paragraphs, <span className="font-bold">A–G.</span>
        </label>
        <label>Which paragraph contains the following information?</label>
        <label>
          Write the correct letter, A–G, in boxes 14–19 on your answer sheet. <br />
        </label>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <div className=''>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span> a reference to a denial of involvement in piracy</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques14"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[13]}
            userAnswerQN={UserData.ques14}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 14,
              Ans1: "",
              hiddenWord: "king of Alashiya (modern Cyprus)",
              hiddenWord2: "Pharaoh Akhenaten",
              keyWords: `"rejected Akhenaten’s claims," "denied connection," "assured he was prepared to punish any of his subjects involved in piracy."`,
              explain: `In Paragraph D, the Amarna Letters mention that the king of Alashiya (modern Cyprus) denied involvement with the Lukka pirates. He assured Pharaoh Akhenaten that he had no connection with them and would punish any of his subjects caught engaging in piracy. This is a clear reference to denying involvement in piracy.`
            }}
          />
        </div>
        <div>
          <label htmlFor="ques15"><span className='numberOfQuestion'>15</span> details of how a campaign to eradicate piracy was carried out</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques15"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[14]}
            userAnswerQN={UserData.ques15}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 15,
              Ans1: "",
              hiddenWord: "Rome organized a large-scale military campaign",
              hiddenWord2: "fleet and commander",
              keyWords: `"Pompey granted vast funds," "divided the Mediterranean into 13 districts," "assigned a fleet and commander to each," "cleansing one district at a time."`,
              explain: `In Paragraph G, the passage details how Rome organized a large-scale military campaign under Pompey to systematically eliminate piracy in the Mediterranean. The plan involved dividing the sea into 13 districts, each with a fleet and commander, and systematically clearing one district before moving to the next. This step-by-step strategy ultimately eradicated piracy.`
            }}
          />
        </div>
        <div>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span> a mention of the circumstances in which states in the ancient world would make use of pirates</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques16"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[15]}
            userAnswerQN={UserData.ques16}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 16,
              Ans1: "",
              hiddenWord: "pirates as mercenaries during wartime",
              hiddenWord2: "regions protected pirates",
              keyWords: `"governments resorted to pirates’ services," "pirates served in the first wave of attack," "safe harbors for pirates," "boosted the local economy."`,
              explain: `In Paragraph C, the passage explains that some states used pirates as mercenaries during wartime. They hired pirate fleets to attack enemies first, weakening them before the state navy arrived. Additionally, some regions protected pirates, benefiting economically from their activities.`
            }}
          />
        </div>
        <div>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span> a reference to how people today commonly view pirates</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques17"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[16]}
            userAnswerQN={UserData.ques17}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 17,
              Ans1: "",
              hiddenWord: "reality of ancient Mediterranean piracy",
              hiddenWord2: "today's view is influenced by later history and fiction",
              keyWords: `"image springs to most people’s minds," "Caribbean Sea," "swashbucklers," "spreading fear."`,
              explain: `In Paragraph A, the passage discusses how modern people imagine pirates as Caribbean swashbucklers, based on popular culture. This contrasts with the reality of ancient Mediterranean piracy, showing how today's view is influenced by later history and fiction.`
            }}
          />
        </div>
        <div>
          <label htmlFor="ques18"><span className='numberOfQuestion'>18</span> an explanation of how some people were encouraged not to return to piracy</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques18"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[17]}
            userAnswerQN={UserData.ques18}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 18,
              Ans1: "",
              hiddenWord: "fertile land far from the sea",
              hiddenWord2: "would not return to piracy",
              keyWords: `"offered land in fertile areas," "far from the sea," "productive farmers," "boosted the economy."
                  Explanation:`,
              explain: `In Paragraph G, Rome did not just kill all pirates; instead, they offered many a chance to settle as farmers in fertile land far from the sea. This ensured they would not return to piracy, benefiting Rome’s economy instead.

`
            }}
          />
        </div>
        <div>
          <label htmlFor="ques19"><span className='numberOfQuestion'>19</span> a mention of the need for many sailing vessels to stay relatively close to land</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques19"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[18]}
            userAnswerQN={UserData.ques19}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 19,
              Ans1: "",
              hiddenWord: "easy targets for pirates",
              hiddenWord2: "could not travel long distances over open water",
              keyWords: `"Before the invention of ocean-going caravels," "ships could not easily cross long distances," "restricted to a few well-known navigable routes that followed the coastline."`,
              explain: `In Paragraph B, the passage explains that ancient ships could not travel long distances over open water because they were not yet advanced enough. This forced them to stay close to the coastline, making them easy targets for pirates hiding in coves.`
            }}
          />
        </div>
      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h4 className=''>Questions 20 and 21</h4> <br />
        <label className=''>Write the correct letters in boxes 20 and 21 on your answer sheet.  </label>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <h6>Which TWO of the following statements does the writer make about inhabitants of the Mediterranean region in the ancient world?</h6>
        <div className='mb-3 mt-2'>
          <ReadingSelect_input
            inputOptions={["A", "B", "C"]}
            handleValueChange={handleChange}
            QNum="ques20"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[19]}
            userAnswerQN={UserData.ques20}
            contentsObj={{
              Title: "",
              AData: " They often used stolen vessels to carry out pirate attacks.",
              BData: " They managed to escape capture by the authorities because they knew the area so well.",
              CData: " They paid for information about the routes merchant ships would take."
            }}
            ExplainDataObj={{
              number: 20,
              Ans1: "(B) They managed to escape capture by the authorities because they knew the area so well.",
              hiddenWord: "pirates knew the coast better than anyone else",
              hiddenWord2: "Paragraph B",
              keyWords: ` "possessed good seafaring skills," "unsurpassed knowledge of the local coastline," "helped the pirates to avoid retaliation."`,
              explain: `In Paragraph B, the passage states that pirates knew the coast better than anyone else. This helped them escape capture when the state fleets arrived. Their local knowledge allowed them to hide effectively.`
            }}
          />

        </div>
        <div className='mb-3'>
          <ReadingSelect_input
            inputOptions={["A", "B", "C"]}
            handleValueChange={handleChange}
            QNum="ques21"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[20]}
            userAnswerQN={UserData.ques21}
            contentsObj={{
              Title: "",
              AData: " They depended more on the sea for their livelihood than on farming.",
              BData: "They stored many of the goods taken in pirate attacks in coves along the coastline.",
              CData: " They paid for information about the routes merchant ships would take."
            }}
            ExplainDataObj={{
              number: 21,
              Ans1: "(A) They depended more on the sea for their livelihood than on farming.",
              hiddenWord: "Paragraph B",
              hiddenWord2: "relied on fishing, salt collection, and maritime trade",
              keyWords: `"inhabitants relied heavily on marine resources," "fish and salt," "rugged and hilly terrain."`,
              explain: `In Paragraph B, it is mentioned that people from mountainous or rocky areas of the Mediterranean could not farm easily. Instead, they relied on fishing, salt collection, and maritime trade. This dependence on the sea led some to piracy during hard times.`
            }}
          />

        </div>
      </div>
      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h4 className=''>Questions 22 and 23</h4> <br />
        <label className=''>Write the correct letters in boxes 20 and 21 on your answer sheet.  </label>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <h6>Which TWO of the following statements does the writer make about piracy and ancient Greece?</h6>
        <div className='mb-3 mt-2'>
          <ReadingSelect_input
            inputOptions={["A", "B", "C"]}
            handleValueChange={handleChange}
            QNum="ques22"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[21]}
            userAnswerQN={UserData.ques22}
            contentsObj={{
              Title: "",
              AData: "The state estimated that very few people were involved in piracy.",
              BData: "Attitudes towards piracy changed shortly after the Iliad and the Odyssey were written.",
              CData: "Important officials were known to occasionally take part in piracy."
            }}
            ExplainDataObj={{
              number: 22,
              Ans1: " (C) Important officials were known to occasionally take part in piracy.",
              hiddenWord: "Paragraph E",
              hiddenWord2: "Athenian ambassadors hijacking an Egyptian ship",
              hiddenWord3: "not limited to outlaws",
              keyWords: `"Athenian ambassadors," "captured a ship," "took the wealth found onboard for themselves."`,
              explain: `In Paragraph E, the passage states that even high-ranking Greek officials participated in piracy. The example of Athenian ambassadors hijacking an Egyptian ship shows that piracy was not limited to outlaws.`
            }}
          />

        </div>
        <div className='mb-3'>
          <ReadingSelect_input
            inputOptions={["A", "B", "C"]}
            handleValueChange={handleChange}
            QNum="ques23"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[22]}
            userAnswerQN={UserData.ques23}
            contentsObj={{
              Title: "",
              AData: " Every citizen regarded pirate attacks on cities as unacceptable.",
              BData: " A favourable view of piracy is evident in certain ancient Greek texts.",
              CData: " They paid for information about the routes merchant ships would take."
            }}
            ExplainDataObj={{
              number: 23,
              Ans1: "(B) A favourable view of piracy is evident in certain ancient Greek texts.",
              hiddenWord: "Paragraph E",
              hiddenWord2: "(author of the Iliad and Odyssey)",
              keyWords: `"Homer not only condones, but praises," "Thucydides glorified pirates' daring attacks."`,
              explain: `In Paragraph E, it is mentioned that Homer (author of the Iliad and Odyssey) and historian Thucydides wrote about piracy in a positive way, celebrating the bravery and success of pirates.`
            }}
          />

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
        <h5 className='text-center mb-1'>Ancient Rome and piracy</h5>
        <div className='p-2 flex flex-wrap'>
          Piracy was an issue ancient Rome had to deal with, but it also brought some benefits for Rome. For example, pirates supplied slaves that were important for Rome’s industries. However, attacks on vessels transporting  <span className="numberOfQuestion">24</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques24"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[23]}
            userAnswerQN={UserData.ques24}
            ExplainDataObj={{
              number: 24,
              Ans1: "",
              hiddenWord: "Paragraph F",
              hiddenWord2: "pirates attacked ships carrying grain—a vital food supply for Romans",
              keyWords: `"pirate attacks on grain ships," "essential to Roman citizens."`,
              explain: `In Paragraph F, the passage states that pirates attacked ships carrying grain—a vital food supply for Romans. These attacks disrupted Rome’s food chain.`
            }}
          /> to Rome resulted in calls for <span className="numberOfQuestion">25</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques25"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[24]}
            userAnswerQN={UserData.ques25}
            ExplainDataObj={{
              number: 25,
              Ans1: "",
              hiddenWord: "Paragraph F",
              hiddenWord2: "Senate called for punishment",
              keyWords: `"led to angry voices in the Senate," "demanding punishment of the culprits."`,
              explain: `In Paragraph F, the Roman Senate called for punishment when pirates started disrupting grain supplies, showing that Rome only took action when its interests were threatened.`
            }}
          /> for the pirates responsible. Nevertheless, piracy continued, with some pirates demanding a <span className="numberOfQuestion">26</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques26"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[25]}
            userAnswerQN={UserData.ques26}
            ExplainDataObj={{
              number: 26,
              Ans1: "",
              hiddenWord: "Paragraph F",
              hiddenWord2: "demanded ransom money",
              keyWords: `"kidnapped prominent Roman dignitaries," "asking for a large ransom."`,
              explain: `In Paragraph F, the passage states that pirates captured high-profile Romans, including Julius Caesar, and demanded ransom money for their release.`
            }}
          />  for the return of the Roman officials they captured.
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
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[26]}
            userAnswerQN={UserData.ques27}
            contentsObj={{
              Title: "What point does the writer make about misinformation in the first paragraph?",
              AData: "Misinformation is a relatively recent phenomenon.",
              BData: "Some people find it easy to identify misinformation.",
              CData: "Misinformation changes as it is passed from one person to another.",
              DData: "There may be a number of reasons for the spread of misinformation."
            }}
            ExplainDataObj={{
              number: 27,
              Ans1: "D – There may be a number of reasons for the spread of misinformation.",
              hiddenWord: "Paragraph A",
              hiddenWord2: "personal gain",
              keyWords: `"Deceiving others," "strategic advantage," "motivate others," "protect interpersonal bonds."`,
              explain: `In Paragraph A, the writer explains that misinformation is not a new phenomenon and that it spreads for multiple reasons. Some people deliberately spread false information for personal gain, while others do so accidentally. This shows that misinformation arises from various causes, making option D the correct answer.`
            }}
          />
        </div>

        {/* Question 28 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques28"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[27]}
            userAnswerQN={UserData.ques28}
            contentsObj={{
              Title: "What does the writer say about the role of technology?",
              AData: "It may at some point provide us with a solution to misinformation.",
              BData: "It could fundamentally alter the way in which people regard information.",
              CData: "It has changed the way in which organisations use misinformation.",
              DData: "It has made it easier for people to check whether information is accurate."
            }}
            ExplainDataObj={{
              number: 28,
              Ans1: "A – It may at some point provide us with a solution to misinformation.",
              hiddenWord: "Paragraph B",
              hiddenWord2: "Yet the means to correct misinformation",
              keyWords: `"Yet the means to correct misinformation... might be found in those same patterns of mass communication."`,
              explain: `In Paragraph B, the writer discusses how technology has increased the spread of misinformation but also suggests that it may help solve the problem in the future. The phrase "Yet the means to correct misinformation" indicates a potential solution, making option A correct.

`
            }}
          />
        </div>

        {/* Question 29 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques29"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[28]}
            userAnswerQN={UserData.ques29}
            contentsObj={{
              Title: "What is the writer doing in the fourth paragraph?",
              AData: "Comparing the different opinions people have of misinformation.",
              BData: "Explaining how the effects of misinformation have changed over time.",
              CData: "Outlining which issues connected with misinformation are significant today.",
              DData: "Describing the attitude of policy makers towards misinformation in the media."
            }}
            ExplainDataObj={{
              number: 29,
              Ans1: "C – Outlining which issues connected with misinformation are significant today.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `"Three observations... warrant the attention of researchers, policymakers, and everyone who watches television, listens to the radio, or reads online."`,
              explain: `In Paragraph D, the writer highlights three main concerns about misinformation in today’s media environment: ** 

                1, People tend to believe misinformation at first. **

                2, Media does not prevent misinformation from being published. **

                3, Correcting misinformation is difficult.
                This shows that the paragraph outlines the most important current issues, making option C correct.`
            }}
          />
        </div>

        {/* Question 30 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques30"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[29]}
            userAnswerQN={UserData.ques30}
            contentsObj={{
              Title: "What point does the writer make about regulation in the USA?",
              AData: "The guidelines issued by the FDA need to be simplified.",
              BData: "Regulation does not affect people’s opinions of new prescription drugs.",
              CData: "The USA has more regulatory bodies than most other countries.",
              DData: "Regulation fails to prevent misinformation from appearing in the media."
            }}
            ExplainDataObj={{
              number: 30,
              Ans1: "D – Regulation fails to prevent misinformation from appearing in the media.",
              hiddenWord: "Paragraph F",
              hiddenWord2: "does not stop misinformation from being published",
              keyWords: ` "Regulatory agencies focus on post hoc detection," "do not keep false advertising off the airwaves."`,
              explain: `In Paragraph F, the writer explains that regulatory agencies like the FDA do monitor misinformation, but they do so after it has been spread rather than preventing it from appearing in the first place. Since regulation does not stop misinformation from being published, option D is correct.`
            }}
          />
        </div>
      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 31–36</h6> <br />
        <label className=''>Complete the summary using the list of phrases, A–J, below<br /> <br />
          Write the correct letter, A–J, in boxes 31–36 on your answer sheet.</label><br /> <br />
      </div>
      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        <h5 className='text-center'>What happens when people encounter misinformation? </h5> <br />
        <div className=' flex flex-wrap'>
          Although people have    <span className="numberOfQuestion">31</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques31"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[30]}
            userAnswerQN={UserData.ques31}
            ExplainDataObj={{
              number: 31,
              Ans1: "G – frequent exposure",
              hiddenWord: "Paragraph E",
              hiddenWord2: "",
              keyWords: `"It is fairly routine for individuals to come across information that is false."`,
              explain: `(Paragraph E) The passage states that encountering misinformation is a common experience. This matches the phrase "frequent exposure."`
            }}
          /> to misinformation, there is debate about precisely how and when we label something as true or untrue. The philosophers Descartes and Spinoza had <span className="numberOfQuestion">32</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques32"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[31]}
            userAnswerQN={UserData.ques32}
            ExplainDataObj={{
              number: 32,
              Ans1: "J – different ideas",
              hiddenWord: "Descartes ",
              hiddenWord2: "",
              keyWords: `"The dilemma is neatly summarized by a contrast between how the 17th-century philosophers René Descartes and Baruch Spinoza described human information engagement."`,
              explain: `The text contrasts the views of Descartes (who believed people evaluate information before accepting it) and Spinoza (who believed people accept all information by default). Since they had conflicting views, "different ideas" is correct.`
            }}
          />  about how people engage with information. While Descartes believed that people accept or reject information after considering whether it is true or not, Spinoza argued that people accepted all information they encountered (and by default misinformation) and did not verify or reject it until afterwards. Moreover, Spinoza believes that a distinct <span className="numberOfQuestion">33</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques33"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[32]}
            userAnswerQN={UserData.ques33}
            ExplainDataObj={{
              number: 33,
              Ans1: "H – mental operation",
              hiddenWord: " first accepts information, then later evaluates it",
              hiddenWord2: "",
              keyWords: `"A separate cognitive process."`,
              explain: `Spinoza’s theory suggests that the brain first accepts information, then later evaluates it, which requires a separate mental operation.`
            }}
          /> is involved in these stages. Recent research has provided <span className="numberOfQuestion">34</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques34"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[33]}
            userAnswerQN={UserData.ques34}
            ExplainDataObj={{
              number: 34,
              Ans1: "B – additional evidence",
              hiddenWord: "additional evidence",
              hiddenWord2: "",
              keyWords: `"Empirical evidence from research teams... has supported Spinoza’s account."`,
              explain: `The passage states that modern studies support Spinoza’s claim that people initially accept all information as true. This means that "additional evidence" has been found.`
            }}
          />  for Spinoza’s theory and it would appear that people accept all encountered information as if it were true, even if this is for an extremely <span className="numberOfQuestion">35</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques35"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[34]}
            userAnswerQN={UserData.ques35}
            ExplainDataObj={{
              number: 35,
              Ans1: "E – short period",
              hiddenWord: "only for a short time",
              hiddenWord2: "",
              keyWords: `"Even if only momentarily."`,
              explain: `The passage explains that people accept misinformation only for a short time before evaluating it.`
            }}
          /> , and do not label the information as true or false until later. This is consistent with the fact that the resources for scepticism and the resources for perceiving and encoding are in <span className="numberOfQuestion">36</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques36"
            TestName={"Cambridge-19-Test1"}
            AnswerData={RightAnswers && RightAnswers[35]}
            userAnswerQN={UserData.ques36}
            ExplainDataObj={{
              number: 36,
              Ans1: "C – different locations",
              hiddenWord: "information processing",
              hiddenWord2: "different locations",
              keyWords: `"Mental resources for skepticism physically reside in a different part of the brain than the resources used in perceiving and encoding."`,
              explain: `The passage states that skepticism and information processing occur in separate brain areas, confirming that the correct answer is "different locations."`
            }}
          />  in the brain.
        </div> <br />
        <div className="box-container border p-4 bg-gray-100 max-w-xl mx-auto rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="box-item font-bold">A: constant conflict</div>
            <div className="box-item font-bold">D: experimental subjects</div>
            <div className="box-item font-bold">B: additional evidence</div>
            <div className="box-item font-bold">E: short period</div>
            <div className="box-item font-bold">C: different locations</div>
            <div className="box-item font-bold">F: extreme distrust</div>
            <div className="box-item font-bold">G: frequent exposure</div>
            <div className="box-item font-bold">H: mental operation</div>
            <div className="box-item font-bold">I: dubious reason</div>
            <div className="box-item font-bold">J: different ideas</div>
          </div>
        </div>

      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4>Questions 37–40</h4> <br />
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
        <div>
          <label htmlFor="ques37"><span className='numberOfQuestion'>37</span> Campaigns designed to correct misinformation will fail to achieve their purpose if people are unable to understand them.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques37"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[36]}
            userAnswerQN={UserData.ques37}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 37,
              Ans1: "",
              hiddenWord: "if people do not understand the corrective message",
              hiddenWord2: "",
              keyWords: `"For corrective campaigns to be persuasive, audiences need to be able to comprehend them."`,
              explain: `The passage states that if people do not understand the corrective message, it will not work. This means the statement agrees with the writer’s view.`
            }}
          />

          <label htmlFor="ques38"><span className='numberOfQuestion'>38</span> Attempts to teach elementary school students about misinformation have been opposed.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques38"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[37]}
            userAnswerQN={UserData.ques38}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 38,
              Ans1: "",
              hiddenWord: "NOT GIVEN",
              hiddenWord2: "",
              keyWords: "No direct mention of opposition to misinformation education.",
              explain: `The passage mentions teaching media literacy in elementary schools, but it does not say whether there was any opposition to it. Since this information is missing, the correct answer is NOT GIVEN.`
            }}
          />

          <label htmlFor="ques39"><span className='numberOfQuestion'>39</span> It may be possible to overcome the problem of misinformation in a relatively short period.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques39"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[38]}
            userAnswerQN={UserData.ques39}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 39,
              Ans1: "",
              hiddenWord: "long-term process",
              hiddenWord2: "",
              keyWords: "Future remedies will require... coordinated efforts over time, rather than any singular one-time panacea.",
              explain: "The passage makes it clear that solving misinformation is a long-term process and not something that can be fixed quickly. This contradicts the statement, so the answer is NO."
            }}
          />

          <label htmlFor="ques40"><span className='numberOfQuestion'>40</span> The need to keep up with new information is hugely exaggerated in today’s world.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques40"
            TestName="Cambridge-19-Test1"
            AnswerData={RightAnswers && RightAnswers[39]}
            userAnswerQN={UserData.ques40}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 40,
              Ans1: "",
              hiddenWord: "NOT GIVEN",
              hiddenWord2: "",
              keyWords: "No discussion of whether keeping up with new information is hugely exaggerated.",
              explain: "The passage talks about misinformation and how people process it, but it does not say that keeping up with new information is exaggerated. Since the information is missing, the answer is NOT GIVEN."
            }}
          />
        </div>

      </div>

    </section>
  )
}

export default Panel2_Q2





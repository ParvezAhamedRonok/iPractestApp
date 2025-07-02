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
        <h4>Questions 14–18</h4>
        <br />
        <label>
          <span className="font-bold">Reading Passage 2</span> has seven paragraphs, <span className="font-bold">A–G.</span>
        </label>
        Which section contains the following information? <br /> <br />

        Write the correct letter, A-G, in boxes 14-18 on your answer sheet.
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <div className=''>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span> reference to the amount of time when a car is not in use</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques14"
            TestName="Cambridge-15-Test1"
            AnswerData={RightAnswers && RightAnswers[13]}
            userAnswerQN={UserData.ques14}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 14,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "90% parked, vehicle inactivity, automation improves efficiency.",
              explain: "In Paragraph C, it is stated that the average car spends more than 90% of its life parked. This highlights the inefficiency of current vehicle ownership models and suggests that automation could lead to more effective car usage."
            }}
          />
        </div>
        <div>
          <label htmlFor="ques15"><span className='numberOfQuestion'>15</span> mention of several advantages of driverless vehicles for individual road-users</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques15"
            TestName="Cambridge-15-Test1"
            AnswerData={RightAnswers && RightAnswers[14]}
            userAnswerQN={UserData.ques15}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 15,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Safety, reduce human error, increased travel autonomy, free up time.",
              explain: "In Paragraph B, several advantages of driverless cars are outlined, including improved safety, freeing up travel time for relaxation or work, and increasing travel independence for elderly or disabled people."
            }}
          />
        </div>
        <div>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span> reference to the opportunity of choosing the most appropriate vehicle for each trip</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques16"
            TestName="Cambridge-15-Test1"
            AnswerData={RightAnswers && RightAnswers[15]}
            userAnswerQN={UserData.ques16}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 16,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Mobility provider, access to various vehicles, journey-specific selection.",
              explain: "In Paragraph E, the text describes how, in a model where people don’t own a single car but instead have access to a variety of vehicles, they can select a car that best suits each journey’s needs."
            }}
          />
        </div>
        <div>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span>an estimate of how long it will take to overcome a number of problems</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques17"
            TestName="Cambridge-15-Test1"
            AnswerData={RightAnswers && RightAnswers[16]}
            userAnswerQN={UserData.ques17}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 17,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Challenges, overcome in 10 years, research needed.",
              explain: "In Paragraph G, the writer states that, through research, challenges in automation can be solved within the next 10 years, indicating a clear timeframe for resolving major issues."
            }}
          />
        </div>
        <div>
          <label htmlFor="ques18"><span className='numberOfQuestion'>18</span> a suggestion that the use of driverless cars may have no effect on the number of vehicles manufactured</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques18"
            TestName="Cambridge-15-Test1"
            AnswerData={RightAnswers && RightAnswers[17]}
            userAnswerQN={UserData.ques18}
            options={["A", "B", "C", "D", "E", "F", "G"]}
            ExplainDataObj={{
              number: 18,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Ownership drop, vehicle mileage increase, faster turnover, no decrease in manufacturing.",
              explain: "In Paragraph D, studies predict that vehicle ownership may drop by 43%, but because each vehicle will be used more intensely, they will need to be replaced sooner, meaning that total vehicle production might not decrease."
            }}
          />
        </div>
      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mt-2 mb-4'>
        <h4 className=''>Questions 19-22</h4> <br />
        <label className=''>
          Complete the sentences below.<br /> <br />
          Choose ONE WORD ONLY from the passage for each answer.<br /><br />
          Write your answers in boxes 19-22 on your answer sheet.<br />
        </label><br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <h4 className='text-center'>The impact of driverless cars</h4> <br />
        <div className="flex flex-wrap">
          Figures from the Transport Research Laboratory indicate that most motor accidents are partly due to <span className="numberOfQuestion">19</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques19"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[18]}
            userAnswerQN={UserData.ques19}
            ExplainDataObj={{
              number: 19,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: " Human error, 90% of accidents, automation reduces risk.",
              explain: "In Paragraph B, research from the Transport Research Laboratory states that 90% of road accidents involve human error, meaning automation can help reduce accidents and improve safety."
            }}
          />, so the introduction of driverless vehicles will result in greater safety. In addition to the direct benefits of automation, it may bring other advantages. For example, schemes for <span className="numberOfQuestion">20</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques20"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[19]}
            userAnswerQN={UserData.ques20}
            ExplainDataObj={{
              number: 20,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Car-sharing, urban areas, reduce vehicle numbers.",
              explain: "In Paragraph C, the text explains that automation makes car-sharing more viable, especially in urban areas, since vehicles could be used more efficiently and reduce the number of cars needed."
            }}
          /> will be more workable, especially in towns and cities, resulting in fewer cars on the road.

          According to the University of Michigan Transportation Research Institute, there could be a 43 percent drop in <span className="numberOfQuestion">21</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques21"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[20]}
            userAnswerQN={UserData.ques21}
            ExplainDataObj={{
              number: 21,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "43% decrease, fewer personal vehicles, shared mobility.",
              explain: " In Paragraph D, the University of Michigan study predicts a 43% reduction in vehicle ownership if automation is widely implemented, as fewer people would need to own personal cars."
            }}
          /> of cars. However, this would mean that the yearly <span className="numberOfQuestion">22</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques22"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[21]}
            userAnswerQN={UserData.ques22}
            ExplainDataObj={{
              number: 22,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Annual mileage doubles, increased usage, higher turnover of vehicles.",
              explain: "In Paragraph D, the study also predicts that, although fewer people would own cars, the average mileage per car would double due to more frequent use in car-sharing systems."
            }}
          /> of each car would, on average, be twice as high as it currently is. this would lead to a higher turnover of vehicles, and therefore no reduction in automotive manufacturing.
        </div>

      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h4 className=''>Questions 23 and 24</h4> <br />
        <label className=''>Select the correct letters in boxes 23 and 24 on your answer sheet.  </label>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <h6>Which TWO benefits of automated vehicles does the writer mention?</h6>
        <div className='mb-3 mt-2'>
          <ReadingSelect_input
            inputOptions={["A", "B", "C"]}
            handleValueChange={handleChange}
            QNum="ques23"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[22]}
            userAnswerQN={UserData.ques23}
            contentsObj={{
              Title: "",
              AData: " Car travellers could enjoy considerable cost savings.",
              BData: "It would be easier to find parking spaces in urban areas.",
              CData: " Travellers could spend journeys doing something other than driving."
            }}
            ExplainDataObj={{
              number: 23,
              Ans1: "(C) Travellers could spend journeys doing something other than driving.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Free travel time, work, relax, social interaction.",
              explain: "In Paragraph B, it is stated that if the vehicle can drive itself, people can use that time for work, relaxation, or socializing instead of actively driving."
            }}
          />

        </div>
        <div className='mb-3'>
          <ReadingSelect_input
            inputOptions={["A", "B", "C"]}
            handleValueChange={handleChange}
            QNum="ques24"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[23]}
            userAnswerQN={UserData.ques24}
            contentsObj={{
              Title: "",
              AData: " People who find driving physically difficult could travel independently.",
              BData: " A reduction in the number of cars would mean a reduction in pollution.",
              CData: " They paid for information about the routes merchant ships would take."
            }}
            ExplainDataObj={{
              number: 24,
              Ans1: "(A) People who find driving physically difficult could travel independently.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Mobility-impaired users, greater independence, accessibility.",
              explain: "In Paragraph B, the passage highlights how elderly and disabled people could benefit significantly from automation, gaining greater independence in transportation."
            }}
          />

        </div>
      </div>
      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h4 className=''>Questions 25 and 26</h4> <br />
        <label className=''>Select the correct letters in boxes 25 and 26 on your answer sheet.  </label>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <h6>Which TWO challenges to automated vehicle development does the writer mention?</h6>
        <div className='mb-3 mt-2'>
          <ReadingSelect_input
            inputOptions={["A", "B", "C"]}
            handleValueChange={handleChange}
            QNum="ques25"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[24]}
            userAnswerQN={UserData.ques25}
            contentsObj={{
              Title: "",
              AData: "making sure the general public has confidence in automated vehicles",
              BData: "managing the pace of transition from conventional to automated vehicles",
              CData: "deciding how to compensate professional drivers who become redundant"
            }}
            ExplainDataObj={{
              number: 25,
              Ans1: "(A) Making sure the general public has confidence in automated vehicles.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Public trust, acceptance, confidence in automation.",
              explain: "In Paragraph F, the writer discusses public trust as a major challenge. People need to accept and trust automated vehicles for them to be widely adopted."
            }}
          />

        </div>
        <div className='mb-3'>
          <ReadingSelect_input
            inputOptions={["A", "B", "C"]}
            handleValueChange={handleChange}
            QNum="ques26"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[25]}
            userAnswerQN={UserData.ques26}
            contentsObj={{
              Title: "",
              AData: "setting up the infrastructure to make roads suitable for automated vehicles",
              BData: "  getting automated vehicles to adapt to various different driving conditions.",
              CData: "information about the routes merchant ships."
            }}
            ExplainDataObj={{
              number: 26,
              Ans1: "(B) Getting automated vehicles to adapt to various different driving conditions.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Traffic conditions, weather challenges, technical reliability.",
              explain: "In Paragraph F, the passage states that automated cars must function reliably in all kinds of traffic, weather, and road conditions, which is a significant technical challenge."
            }}
          />

        </div>
      </div>







      {/* Passage-3 Questions */}
      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4 className='underline text-center'>Reading Passage-3  </h4> <br />
        <h4>Questions 27–32</h4><br />
        <label className=''>Choose the correct letter, A, B, C or D. <br /> <br />
          Write the correct letter in boxes 27–32 on your answer sheet.</label> <br />
      </div>
      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        {/* Question 27 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques27"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[26]}
            userAnswerQN={UserData.ques27}
            contentsObj={{
              Title: "The writer refers to visitors to New York to illustrate the point that",
              AData: "exploration is an intrinsic element of being human.",
              BData: "most people are enthusiastic about exploring.",
              CData: "exploration can lead to surprising results.",
              DData: "most people find exploration daunting."
            }}
            ExplainDataObj={{
              number: 27,
              Ans1: "(A) Exploration is an intrinsic element of being human.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "exploration, intrinsic, human, navigating, New York",
              explain: "In Paragraph A, the writer states that the desire to explore is a fundamental human trait, and even everyday activities like navigating the subways of New York involve exploration."
            }}
          />
        </div>

        {/* Question 28 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques28"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[27]}
            userAnswerQN={UserData.ques28}
            contentsObj={{
              Title: "According to the second paragraph, what is the writer’s view of explorers?",
              AData: "Their discoveries have brought both benefits and disadvantages.",
              BData: "Their main value is in teaching others.",
              CData: "They act on an urge that is common to everyone.",
              DData: "They tend to be more attracted to certain professions than to others."
            }}
            ExplainDataObj={{
              number: 28,
              Ans1: "(C) They act on an urge that is common to everyone.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "explorers, common to everyone, human instinct, urge",
              explain: "In Paragraph A, the writer suggests that everyone has an instinct to explore, not just famous explorers. This means that exploration is a natural part of human behavior."
            }}
          />
        </div>

        {/* Question 29 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques29"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[28]}
            userAnswerQN={UserData.ques29}
            contentsObj={{
              Title: "The writer refers to a description of Egdon Heath to suggest that",
              AData: "Hardy was writing about his own experience of exploration.",
              BData: "Hardy was mistaken about the nature of exploration.",
              CData: "Hardy’s aim was to investigate people’s emotional states.",
              DData: "Hardy’s aim was to show the attraction of isolation."
            }}
            ExplainDataObj={{
              number: 29,
              Ans1: "(C) Hardy’s aim was to investigate people’s emotional states.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Hardy, emotions, human nature, investigation",
              explain: "In Paragraph B, Hardy's description of Egdon Heath was used to explore the emotions and psychology of his characters. This indicates that his writing was focused on human feelings rather than just the landscape."
            }}
          />
        </div>

        {/* Question 30 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques30"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[29]}
            userAnswerQN={UserData.ques30}
            contentsObj={{
              Title: "In the fourth paragraph, the writer refers to ‘a golden age’ to suggest that",
              AData: "the amount of useful information produced by exploration has decreased.",
              BData: "fewer people are interested in exploring than in the 19th century.",
              CData: "recent developments have made exploration less exciting.",
              DData: "we are wrong to think that exploration is no longer necessary."
            }}
            ExplainDataObj={{
              number: 30,
              Ans1: "(D) We are wrong to think that exploration is no longer necessary.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "golden age, misconception, exploration still necessary, undiscovered",
              explain: "In Paragraph C, the writer argues that despite perceptions that exploration peaked in the past, many things remain undiscovered, including ocean floors and species."
            }}
          />
        </div>

        {/* Question 31 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques31"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[30]}
            userAnswerQN={UserData.ques31}
            contentsObj={{
              Title: "In the sixth paragraph, when discussing the definition of exploration, the writer argues that",
              AData: "people tend to relate exploration to their own professional interests.",
              BData: "certain people are likely to misunderstand the nature of exploration.",
              CData: "the generally accepted definition has changed over time.",
              DData: "historians and scientists have more valid definitions than the general public."
            }}
            ExplainDataObj={{
              number: 31,
              Ans1: "(A) People tend to relate exploration to their own professional interests",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "personal perspective, professional interests, definitions vary",
              explain: "In Paragraph E, different explorers define exploration based on their own fields. For example, scientists, historians, and travelers all have unique definitions."
            }}
          />
        </div>

        {/* Question 32 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques32"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[31]}
            userAnswerQN={UserData.ques32}
            contentsObj={{
              Title: "In the last paragraph, the writer explains that he is interested in",
              AData: "how someone’s personality is reflected in their choice of places to visit.",
              BData: "the human ability to cast new light on places that may be familiar.",
              CData: "how travel writing has evolved to meet changing demands.",
              DData: "the feelings that writers develop about the places that they explore."
            }}
            ExplainDataObj={{
              number: 32,
              Ans1: "(B) The human ability to cast new light on places that may be familiar.",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "interpretation, new light, familiar places, insights",
              explain: "In Paragraph F, the writer states that he is fascinated by how different interpretations of familiar places can provide new insights rather than simply discovering new locations."
            }}
          />
        </div>
      </div>



      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 33-37</h6> <br />
        <label className=''>Look at the following statements (Questions 33-37) and the list of explorers below. <br /> <br />
          Match each statement with the correct explorer, A-E.<br /> <br />
          Write the correct letter, A-E, in boxes 33-37 on your answer sheet.<br /> <br />
          NB  You may use any letter more than once.</label><br /> <br />
      </div>
      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        {/* Question 33 */}
        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques33">
            <span className='numberOfQuestion'>33</span> He referred to the relevance of the form of transport used.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques33"
            TestName="Cambridge-15-Test1"
            AnswerData={RightAnswers && RightAnswers[32]}
            userAnswerQN={UserData.ques33}
            options={["A", "B", "C", "D", "E"]}
            ExplainDataObj={{
              number: 33,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Thesiger, transport, relevance, stunt, traditional",
              explain: "In Paragraph D, Thesiger states that exploration should not be just a stunt and emphasizes the importance of using traditional travel methods (e.g., camels instead of cars)."
            }}
          />
        </div>

        {/* Question 34 */}
        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques34">
            <span className='numberOfQuestion'>34</span> He described feelings on coming back home after a long journey.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques34"
            TestName="Cambridge-15-Test1"
            AnswerData={RightAnswers && RightAnswers[33]}
            userAnswerQN={UserData.ques34}
            options={["A", "B", "C", "D", "E"]}
            ExplainDataObj={{
              number: 34,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "return, home, emotions, travel experience",
              explain: "In Paragraph B, Fleming discusses the emotions an explorer experiences when returning home after a long journey."
            }}
          />
        </div>

        {/* Question 35 */}
        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques35">
            <span className='numberOfQuestion'>35</span> He worked for the benefit of specific groups of people.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques35"
            TestName="Cambridge-15-Test1"
            AnswerData={RightAnswers && RightAnswers[34]}
            userAnswerQN={UserData.ques35}
            options={["A", "B", "C", "D", "E"]}
            ExplainDataObj={{
              number: 35,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "tribal people, advocate, specific groups, protection",
              explain: "In Paragraph D, Hanbury-Tenison is described as an advocate for remote tribal people, working to protect their rights"
            }}
          />
        </div>

        {/* Question 36 */}
        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques36">
            <span className='numberOfQuestion'>36</span> He did not consider learning about oneself an essential part of exploration.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques36"
            TestName="Cambridge-15-Test1"
            AnswerData={RightAnswers && RightAnswers[35]}
            userAnswerQN={UserData.ques36}
            options={["A", "B", "C", "D", "E"]}
            ExplainDataObj={{
              number: 36,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "knowledge, not self-discovery, remote places",
              explain: "In Paragraph D, Thesiger believes that exploration is about bringing back knowledge, not personal self-discovery."
            }}
          />
        </div>

        {/* Question 37 */}
        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques37">
            <span className='numberOfQuestion'>37</span> He defined exploration as being both unique and of value to others.
          </label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques37"
            TestName="Cambridge-15-Test1"
            AnswerData={RightAnswers && RightAnswers[36]}
            userAnswerQN={UserData.ques37}
            options={["A", "B", "C", "D", "E"]}
            ExplainDataObj={{
              number: 37,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "unique, value to others, new discovery, science",
              explain: "In Paragraph D, Fiennes states that true exploration involves doing something no one has done before while also contributing scientific knowledge."
            }}
          />
        </div>
      </div>



      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4>Questions 38–40</h4> <br />
        <label className=''>Complete the summary below. <br /> <br />
          Choose NO MORE THAN TWO WORDS from the passage for each answer. <br /> <br />
          Write your answers in boxes 38-40 on your answer sheet.</label><br /> <br />

      </div>

      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        <h4 className='text-center'>The writer’s own bias</h4> <br />
        <div className='flex flex-wrap'>
          The writer has experience of a large number of   <span className="numberOfQuestion">38</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques38"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[37]}
            userAnswerQN={UserData.ques38}
            ExplainDataObj={{
              number: 38,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "experience, expeditions, unique",
              explain: "In Paragraph F, the writer mentions that he has participated in various expeditions, each one different from the others."
            }}
          />, and was the first stranger that certain previously   <span className="numberOfQuestion">39</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques39"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[38]}
            userAnswerQN={UserData.ques39}
            ExplainDataObj={{
              number: 39,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "first stranger, uncontacted tribes",
              explain: "In Paragraph F, the writer refers to meeting ‘uncontacted tribes,’ meaning he was the first outsider to interact with them."
            }}
          />people had encountered. He believes there is no need for further exploration of Earth’s   <span className="numberOfQuestion">40</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques40"
            TestName={"Cambridge-15-Test1"}
            AnswerData={RightAnswers && RightAnswers[39]}
            userAnswerQN={UserData.ques40}
            ExplainDataObj={{
              number: 40,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "land surface, no need for further exploration, details",
              explain: "In Paragraph F, the writer explains that the Earth's land surface has already been explored, and the focus should now be on specialized studies."
            }}
          />, except to answer specific questions such as how buffalo eat.
        </div>

      </div>

    </section>
  )
}

export default Panel2_Q2





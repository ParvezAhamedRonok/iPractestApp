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
        <label>Reading Passage 2 has six paragraphs, A-F. <br /><br />
          Which paragraph contains the following information? <br /><br />
          Write the correct letter, A-F, in boxes 14-17 on your answer sheet. <br /><br />
          NB   You may use any letter more than once.</label>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <div className=''>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span> a reference to how further disappearance of multiple species could be avoided.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques14"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[13]}
            userAnswerQN={UserData.ques14}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 14,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "avoid, disappearance, multiple species",
              explain: "In Paragraph F, Beth Shapiro discusses how genetic rescue and de-extinction technologies can be used to understand the causes of extinction and how to prevent further extinctions in the future."
            }}
          />
        </div>
        <div className=''>
          <label htmlFor="ques15"><span className='numberOfQuestion'>15</span> explanation of a way of reproducing an extinct animal using the DNA of only that species</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques15"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[14]}
            userAnswerQN={UserData.ques15}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 15,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "reproducing, extinct animal, DNA",
              explain: "In Paragraph A, the concept of de-extinction is introduced, specifically using cloning technology and the DNA of extinct species to create a new animal, essentially bringing it back to life."
            }}
          />
        </div>
        <div className=''>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span> reference to a habitat which has suffered following the extinction of a species</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques16"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[15]}
            userAnswerQN={UserData.ques16}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 16,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "habitat, suffered, extinction, species",
              explain: "In Paragraph D, the writer explains how the absence of passenger pigeons has led to stagnant forests in the eastern US due to a lack of the forest disturbance that the pigeons would have caused."
            }}
          />
        </div>
        <div className=''>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span> mention of the exact point at which a particular species became extinct</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques17"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[16]}
            userAnswerQN={UserData.ques17}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 17,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "exact point, extinct, date",
              explain: "In Paragraph A, the writer specifically mentions that the passenger pigeon became extinct on 1 September 1914, when the last living specimen died at Cincinnati Zoo."
            }}
          />
        </div>
      </div>



      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h4 className=''>Questions 18-22</h4> <br />
        <label className=''>Complete the summary below.  <br /><br />

          Choose NO MORE THAN TWO WORDS from the passage for each answer. <br /><br />

          Write your answers in boxes 18-22 on your answer sheet. </label><br />
      </div>


      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <h4 className='text-center'>The woolly mammoth revival project</h4> <br />
        <div className='flex flex-wrap'>
          Professor George Church and his team are trying to identify the <span className="numberOfQuestion">18</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques18"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[17]}
            userAnswerQN={UserData.ques18}
            ExplainDataObj={{
              number: 18,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "genetic traits, woolly mammoths, survive",
              explain: "In Paragraph E, Church's team is working to identify the genetic traits that allowed woolly mammoths to survive in the tundra."
            }}
          /> which enabled mammoths to live in the tundra. The findings could help preserve the mammoth’s close relative, the endangered Asian elephant.

          According to Church, introducing Asian elephants to the tundra would involve certain physical adaptations to minimise <span className="numberOfQuestion">19</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques19"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[18]}
            userAnswerQN={UserData.ques19}
            ExplainDataObj={{
              number: 19,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "heat loss, adaptations",
              explain: "In Paragraph E, Church talks about how introducing Asian elephants to the tundra would require adaptations, such as reducing heat loss through physical traits."
            }}
          /> To survive in the tundra, the species would need to have the mammoth-like features of thicker hair, <span className="numberOfQuestion">20</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques20"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[19]}
            userAnswerQN={UserData.ques20}
            ExplainDataObj={{
              number: 20,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "ears, reduced size",
              explain: "In Paragraph E, Church explains that the woolly mammoth had smaller ears to help it survive the cold, which is one of the physical adaptations the elephants would need."
            }}
          />. of a reduced size and more <span className="numberOfQuestion">21</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques21"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[20]}
            userAnswerQN={UserData.ques21}
            ExplainDataObj={{
              number: 21,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "insulating fat, adaptations",
              explain: "In Paragraph E, Church mentions that in addition to smaller ears, elephants would need more insulating fat to survive in the tundra."
            }}
          />.

          Repopulating the tundra with mammoths or Asian elephant/mammoth hybrids would also have an impact on the environment, which could help to reduce temperatures and decrease <span className="numberOfQuestion">22</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques22"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[21]}
            userAnswerQN={UserData.ques22}
            ExplainDataObj={{
              number: 22,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "reduce temperatures, decrease carbon emissions",
              explain: "In Paragraph E, it is mentioned that repopulating the tundra with mammoths or hybrids could help reduce carbon emissions by encouraging grass growth."
            }}
          />
        </div>

      </div>



      <div className='articles pl-[10px] sm:pl-[25px] mt-2 mb-4'>
        <h4 className=''>Questions 23-26</h4> <br />
        <label className=''>Look at the following statements (Questions 23-26) and the list of people below.  <br /> <br />
          Match each statement with the correct person, A, B or C.  <br /> <br />
          Write the correct letter, A, B or C, in boxes 23-26 on your answer sheet.  <br /> <br />
          NB   You may use any letter more than once.</label><br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <div className='flex flex-wrap'>
          <label htmlFor="ques23"><span className='numberOfQuestion'>23</span> Reintroducing an extinct species to its original habitat could improve the health of a particular species living there.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques23"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[22]}
            userAnswerQN={UserData.ques23}
            options={["A", "B", "C"]}
            ExplainDataObj={{
              number: 23,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "reintroducing, species, health improvement",
              explain: "Michael Archer discusses how the return of thylacines to Tasmania could help control the spread of disease among the Tasmanian devils, benefiting their health."
            }}
          />
        </div>
        <div className='flex flex-wrap'>
          <label htmlFor="ques24"><span className='numberOfQuestion'>24</span> It is important to concentrate on the causes of an animal’s extinction.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques24"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[23]}
            userAnswerQN={UserData.ques24}
            options={["A", "B", "C"]}
            ExplainDataObj={{
              number: 24,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "causes, extinction",
              explain: "Beth Shapiro emphasizes in Paragraph F the importance of understanding the causes of extinction and using this knowledge for genetic modifications to prevent future mass extinctions."
            }}
          />
        </div>
        <div className='flex flex-wrap'>
          <label htmlFor="ques25"><span className='numberOfQuestion'>25</span> A species brought back from extinction could have an important beneficial impact on the vegetation of its habitat.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques25"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[24]}
            userAnswerQN={UserData.ques25}
            options={["A", "B", "C"]}
            ExplainDataObj={{
              number: 25,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "beneficial impact, vegetation, habitat",
              explain: "Ben Novak discusses how the reintroduction of a hybridized passenger pigeon could help restore forest disturbances, benefitting the vegetation and many species that depend on it."
            }}
          />
        </div>
        <div className='flex flex-wrap'>
          <label htmlFor="ques26"><span className='numberOfQuestion'>26</span> Our current efforts at preserving biodiversity are insufficient.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques26"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[25]}
            userAnswerQN={UserData.ques26}
            options={["A", "B", "C"]}
            ExplainDataObj={{
              number: 26,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: " insufficient, preserving biodiversity",
              explain: "Beth Shapiro mentions that current conservation efforts are not enough, and taking risks with de-extinction could provide a better solution to preserving biodiversity."
            }}
          />
        </div>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">List of People</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="font-bold mr-2">A</span> Ben Novak
            </li>
            <li className="flex items-center">
              <span className="font-bold mr-2">B</span> Michael Archer
            </li>
            <li className="flex items-center">
              <span className="font-bold mr-2">C</span> Beth Shapiro
            </li>
          </ul>
        </div>
      </div>




      {/* Passage-3 Questions */}
      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4 className='underline text-center'>Reading Passage-3  </h4> <br />
        <h4>Questions 27–31</h4><br />
        <label className=''>Choose the correct letter, A, B, C or D. <br /> <br />
          Write the correct letter in boxes 27–31 on your answer sheet. <br /> <br /></label><br />
      </div>
      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        {/* Question 27 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques27"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[26]}
            userAnswerQN={UserData.ques27}
            contentsObj={{
              Title: "When referring to laughter in the first paragraphs, the writer emphasises",
              AData: "its impact on language.",
              BData: "its function in human culture.",
              CData: "its value to scientific research.",
              DData: "its universality in animal societies."
            }}
            ExplainDataObj={{
              number: 27,
              Ans1: "(C) Its value to scientific research.", hiddenWord: "", hiddenWord2: "",
              keyWords: "laughter, human psychology, language development, social perception, scientific study.",
              explain: "The writer emphasizes how laughter serves as a valuable research tool for scientists studying human psychology and social interactions."
            }}
          />
        </div>
        {/* Question 28 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques28"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[27]}
            userAnswerQN={UserData.ques28}
            contentsObj={{
              Title: "What does the writer suggest about Charley Douglass?",
              AData: "He understood the importance of enjoying humour in a group setting.",
              BData: "He believed that TV viewers at home needed to be told when to laugh.",
              CData: "He wanted his shows to appeal to audiences across the social spectrum.",
              DData: "He preferred shows where audiences were present in the recording studio."
            }}
            ExplainDataObj={{
              number: 28,
              Ans1: "(A) He understood the importance of enjoying humour in a group setting.", hiddenWord: "", hiddenWord2: "",
              keyWords: "Charley Douglass, laugh tracks, social setting, crowded theatre, group enjoyment.",
              explain: "Douglass created pre-recorded laughter to make TV viewers feel part of a social environment, reinforcing the importance of group laughter."
            }}
          />
        </div>
        {/* Question 29 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques29"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[28]}
            userAnswerQN={UserData.ques29}
            contentsObj={{
              Title: "What makes the Santa Cruz study particularly significant?",
              AData: "the various different types of laughter that were studied",
              BData: "the similar results produced by a wide range of cultures",
              CData: "the number of different academic disciplines involved",
              DData: "the many kinds of people whose laughter was recorded"
            }}
            ExplainDataObj={{
              number: 29,
              Ans1: "(B) The similar results produced by a wide range of cultures.", hiddenWord: "", hiddenWord2: "",
              keyWords: "Santa Cruz study, 24 diverse societies, 60% accuracy, cross-cultural consistency.",
              explain: "The study demonstrated that people from different cultures could consistently identify laughter between friends and strangers, proving laughter’s universal nature."
            }}
          />
        </div>
        {/* Question 30 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques30"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[29]}
            userAnswerQN={UserData.ques30}
            contentsObj={{
              Title: "Which of the following happened in the San Diego study?",
              AData: "Some participants became very upset.",
              BData: "Participants exchanged roles.",
              CData: "Participants who had not met before became friends.",
              DData: "Some participants were unable to laugh."
            }}
            ExplainDataObj={{
              number: 30,
              Ans1: "(B) Participants exchanged roles.", hiddenWord: "", hiddenWord2: "",
              keyWords: "San Diego study, high-status and low-status individuals, teasers, dominant and submissive laughter, role reversal.",
              explain: "Low-status participants changed their laughter style when in a position of power, showing that laughter reflects shifting social roles."
            }}
          />
        </div>
        {/* Question 31 */}
        <div className="mb-3">
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques31"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[30]}
            userAnswerQN={UserData.ques31}
            contentsObj={{
              Title: "In the fifth paragraph, what did the results of the San Diego study suggest?",
              AData: "It is clear whether a dominant laugh is produced by a high- or low-status person.",
              BData: "Low-status individuals in a position of power will still produce submissive laughs.",
              CData: "The submissive laughs of low- and high-status individuals are surprisingly similar.",
              DData: "High-status individuals can always be identified by their way of laughing."
            }}
            ExplainDataObj={{
              number: 31,
              Ans1: "(D) High-status individuals can always be identified by their way of laughing.", hiddenWord: "", hiddenWord2: "",
              keyWords: "high-status individuals, dominant laugh, consistent social status perception, submissive laugh ineffective.",
              explain: "High-status individuals were perceived as high-status regardless of whether they attempted to use a submissive laugh."
            }}
          />
        </div>
      </div>


      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h6 className=''>Questions 32–36</h6> <br />
        <label className=''>Complete the summary using the list of words, A-H, below.  <br /> <br />
          Write the correct letter, A-H, in boxes 32-36 on your answer sheet.</label><br /> <br />
      </div>
      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        <h5 className='text-center'>The benefits of humour</h5> <br />
        <div className="flex flex-wrap">

          In one study at Australian National University, randomly chosen groups of participants were shown one of three videos, each designed to generate a different kind of       <span className="numberOfQuestion">32</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques32"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[31]}
            userAnswerQN={UserData.ques32}
            ExplainDataObj={{
              number: 32,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "video clips, humour, contentment, neutral feelings, psychological impact.",
              explain: `The study at Australian National University divided participants into three groups. Each group watched a different video that triggered a specific emotion: either humour (Mr. Bean), contentment (dolphins swimming), or a neutral state (a management lecture). The purpose was to examine how these emotions affected task performance. Since the study was designed to test the effects of different emotions, "emotion" is the correct answer.`
            }}
          /> . When all participants were then given a deliberately frustrating task to do, it was found that those who had watched the       <span className="numberOfQuestion">33</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques33"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[32]}
            userAnswerQN={UserData.ques33}
            ExplainDataObj={{
              number: 33,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Mr. Bean video, humour, persistence, task engagement.",
              explain: `The participants who watched the amusing Mr. Bean video spent more time working on a challenging task than the other two groups. This suggests that humour boosted their motivation and perseverance. Since the video was funny, "amusing" is the best word to describe it. ** 
              🔹 Passage Reference (Paragraph G):
              "Students who had watched the Mr. Bean video ended up spending significantly more time working on the task, making twice as many predictions as the other two groups."`
            }}
          />. video persisted with the task for longer and tried harder to accomplish the task than either of the other two groups.

          A second study in which participants were asked to perform a particularly       <span className="numberOfQuestion">34</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques34"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[33]}
            userAnswerQN={UserData.ques34}
            ExplainDataObj={{
              number: 34,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "tedious task, letter ‘e’ crossing, long multiplication, low engagement.",
              explain: `The participants had to complete tedious tasks, such as crossing out every instance of the letter ‘e’ and solving long multiplication problems by hand. Since the tasks were deliberately monotonous, "boring" is the correct answer. **

                🔹 Passage Reference (Paragraph F):
                "First, the students performed a tedious task in which they had to cross out every instance of the letter ‘e’ over two pages of text."
                `
            }}
          /> task produced similar results. According to researchers David Cheng and Lu Wang, these findings suggest that humour not only reduces       <span className="numberOfQuestion">35</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques35"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[34]}
            userAnswerQN={UserData.ques35}
            ExplainDataObj={{
              number: 35,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "stress relief, reducing negative emotions, social connections, emotional well-being.",
              explain: `The study found that humour not only helps build social connections but also reduces anxiety and stress. Watching something funny gives people a mental break from stressful tasks, helping them feel more at ease.
              **
              🔹 Passage Reference (Paragraph H):
              "Although humour has been found to help relieve stress and facilitate social relationships..."`
            }}
          /> and helps build social connections but it may also have a       <span className="numberOfQuestion">36</span>
          <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques36"
            TestName={"Cambridge-15-Test2"}
            AnswerData={RightAnswers && RightAnswers[35]}
            userAnswerQN={UserData.ques36}
            ExplainDataObj={{
              number: 36,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: " energising effect, boost in effort and motivation, improved performance.",
              explain: `The researchers concluded that humour is not just enjoyable but also stimulating—it energizes people, helping them persist longer in difficult tasks. Since humour provided a boost in mental energy, "stimulating" is the correct answer. **
            🔹 Passage Reference (Paragraph H):
            "We suggest that humour is not only enjoyable but more importantly, energising."`
            }}
          />. Effect on the body and mind.

        </div>


        <br />
        <div className="box-container border p-4 bg-gray-100 max-w-xl mx-auto rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="box-item font-bold">A: laughter</div>
            <div className="box-item font-bold">D: anxiety</div>
            <div className="box-item font-bold">B: relaxing</div>
            <div className="box-item font-bold">E: stimulating</div>
            <div className="box-item font-bold">C: boring</div>
            <div className="box-item font-bold">F: emotion</div>
            <div className="box-item font-bold">G: enjoyment</div>
            <div className="box-item font-bold">H: amusing</div>
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
          <label htmlFor="ques37"><span className='numberOfQuestion'>37</span> Participants in the Santa Cruz study were more accurate at identifying the laughs of friends than those of strangers.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques37"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[36]}
            userAnswerQN={UserData.ques37}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 37,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "Participants in the Santa Cruz study were more accurate at identifying the laughs of friends than those of strangers.",
              explain: `
            The passage states that participants correctly identified whether people were friends or strangers 60% of the time, but it doesn’t mention if they were better at recognizing friends’ laughs than strangers’ laughs. Since this specific detail is missing, the answer is NOT GIVEN. **

            🔹 Passage Reference (Paragraph C):
            "On average, the results were remarkably consistent: worldwide, people’s guesses were correct approximately 60% of the time."`
            }}
          />

          <label htmlFor="ques38"><span className='numberOfQuestion'>38</span> The researchers in the San Diego study were correct in their predictions regarding the behaviour of the high-status individuals.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques38"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[37]}
            userAnswerQN={UserData.ques38}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 38,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "The researchers in the San Diego study were correct in their predictions regarding the behaviour of the high-status individuals",
              explain: `The study predicted that high-status individuals would produce more dominant laughs than low-status individuals. The results confirmed this: high-status individuals consistently gave dominant laughs, while low-status individuals changed their laughter based on their role. Since the researchers’ predictions were correct, the answer is YES. **

🔹 Passage Reference (Paragraph E):
"In line with predictions, laughers producing dominant laughs were perceived to be significantly higher in status."`
            }}
          />

          <label htmlFor="ques39"><span className='numberOfQuestion'>39</span> The participants in the Australian National University study were given a fixed amount of time to complete the task focusing on employee profiles.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques39"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[38]}
            userAnswerQN={UserData.ques39}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 39,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "The participants in the Australian National University study were given a fixed amount of time to complete the task focusing on employee profiles.",
              explain: `The passage states that participants could quit the task at any time, meaning there was no fixed time limit. Since the statement contradicts the passage, the answer is NO. **

🔹 Passage Reference (Paragraph G):
"Participants were allowed to quit the task at any point."`
            }}
          />

          <label htmlFor="ques40"><span className='numberOfQuestion'>40</span> Cheng and Wang’s conclusions were in line with established notions regarding task performance.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques40"
            TestName="Cambridge-15-Test2"
            AnswerData={RightAnswers && RightAnswers[39]}
            userAnswerQN={UserData.ques40}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 40,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: " Cheng and Wang’s conclusions were in line with established notions regarding task performance.",
              explain: `Traditionally, it was believed that humour distracts people from work. However, Cheng and Wang’s study challenged this idea, showing that humour actually energises people and boosts productivity. Since their findings were not in line with established ideas, the answer is NO. **

🔹 Passage Reference (Paragraph H):
"Traditional views of task performance imply that individuals should avoid things such as humour that may distract them from the accomplishment of task goals."`
            }}
          />
        </div>
      </div>


    </section>
  )
}

export default Panel2_Q2





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
          {/* show & hide the nodepad by cliking those icons    */}
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
          <span className="font-bold">Reading Passage 2</span> has seven paragraphs, <span className="font-bold mr-2">A–F.</span>
        </label>
        <label>Which paragraph contains the following information?</label>
        <label>
          Write the correct letter, A–F, in boxes 14–18 on your answer sheet. <br />
        </label>
      </div>

      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <div className='flex flex-wrap gap-0'>
          <label htmlFor="ques14"><span className='numberOfQuestion'>14</span> reference to two chemical compounds which impact on performance</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques14"
            TestName="Cambridge-19-Test2"
            AnswerData={RightAnswers && RightAnswers[13]}
            userAnswerQN={UserData.ques14}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 14,
              Ans1: "",
              hiddenWord: "Paragraph D ",
              hiddenWord2: "adrenaline ",
              keyWords: `"adrenaline", "cortisol", "stress hormones", "sport performance"`,
              explain: `Paragraph D discusses how stress responses affect performance by influencing the production of adrenaline and cortisol, which impact blood flow, heart rate, and overall athletic ability.`
            }}
          />
        </div>
        <div className='flex flex-wrap gap-0'>
          <label htmlFor="ques15"><span className='numberOfQuestion'>15</span> examples of strategies for minimising the effects of stress</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques15"
            TestName="Cambridge-19-Test2"
            AnswerData={RightAnswers && RightAnswers[14]}
            userAnswerQN={UserData.ques15}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 15,
              Ans1: "",
              hiddenWord: "Paragraph F",
              hiddenWord2: "positive language, psychological skills (visualisation), and competitive pressure during training",
              keyWords: `"psychologists", "visualisation", "training under competitive pressure"`,
              explain: ` Paragraph F describes ways athletes can handle stress, such as positive language, psychological skills (visualisation), and competitive pressure during training.`
            }}
          />
        </div>
        <div className='flex flex-wrap gap-0'>
          <label htmlFor="ques16"><span className='numberOfQuestion'>16</span> how a sportsperson accounted for their own experience of stress</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques16"
            TestName="Cambridge-19-Test2"
            AnswerData={RightAnswers && RightAnswers[15]}
            userAnswerQN={UserData.ques16}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 16,
              Ans1: "",
              hiddenWord: "Paragraph A",
              hiddenWord2: "Emma Raducanu",
              keyWords: `"Emma Raducanu", "breathing", "heart rate", "excitement", "pressure"`,
              explain: `Paragraph A discusses how Emma Raducanu explained her withdrawal from Wimbledon, attributing it to "the accumulation of the excitement and the buzz," which led to breathing and heart rate issues.`
            }}
          />
        </div>
        <div className='flex flex-wrap gap-0'>
          <label htmlFor="ques17"><span className='numberOfQuestion'>17</span> study results indicating links between stress responses and performance</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques17"
            TestName="Cambridge-19-Test2"
            AnswerData={RightAnswers && RightAnswers[16]}
            userAnswerQN={UserData.ques17}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 17,
              Ans1: "",
              hiddenWord: "Paragraph C",
              hiddenWord2: "threat states lead to poorer performance",
              keyWords: `"challenge state", "threat state", "research shows", "good performance", "poor performance"`,
              explain: `Paragraph C explains how research shows that challenge states improve performance, while threat states lead to poorer performance, using examples from different sports.`
            }}
          />
        </div>
        <div className='flex flex-wrap gap-0'>
          <label htmlFor="ques18"><span className='numberOfQuestion'>18</span> mention of people who can influence how athletes perceive their stress responses</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques18"
            TestName="Cambridge-19-Test2"
            AnswerData={RightAnswers && RightAnswers[17]}
            userAnswerQN={UserData.ques18}
            options={["A", "B", "C", "D", "E", "F"]}
            ExplainDataObj={{
              number: 18,
              Ans1: "",
              hiddenWord: "Paragraph F",
              hiddenWord2: "coaches, parents, and psychologists",
              keyWords: `"coaches", "parents", "psychologists", "positive stress response"`,
              explain: ` Paragraph F mentions that coaches, parents, and psychologists can help athletes interpret their physiological responses (e.g., seeing a high heart rate as excitement rather than anxiety).`
            }}
          />
        </div>
      </div>



      <div className='articles pl-[10px] sm:pl-[25px] mb-3'>
        <h4 className=''>Questions 19–22</h4> <br />
        <label className=''>Complete the sentences below. <br /> <br />
          Choose ONE WORD ONLY from the passage for each answer. <br /> <br />
          Write your answers in boxes 19–22 on your answer sheet. </label>
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>

        <div className='flex flex-wrap gap-1'>
          <label htmlFor="">
            <span className="numberOfQuestion">19</span>  Performance stress involves many demands on the athlete, for example, coping with the possible risk of
          </label>   <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques19"
            TestName={"Cambridge-19-Test2"}
            AnswerData={RightAnswers && RightAnswers[18]}
            userAnswerQN={UserData.ques19}
            ExplainDataObj={{
              number: 19,
              Ans1: "",
              hiddenWord: "Paragraph B",
              hiddenWord2: "physical effort, event difficulty, and possible injury",
              keyWords: `"potential dangers such as injury"`,
              explain: `Paragraph B lists several demands on athletes, including physical effort, event difficulty, and possible injury as stress factors.`
            }}
          /> . <br />
        </div>

        <div className="flex flex-wrap gap-1">
          <labe>
            <span className="numberOfQuestion">20</span>  Cortisol can cause tennis players to produce fewer good
          </labe>   <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques20"
            TestName={"Cambridge-19-Test2"}
            AnswerData={RightAnswers && RightAnswers[19]}
            userAnswerQN={UserData.ques1}
            ExplainDataObj={{
              number: 20,
              Ans1: "",
              hiddenWord: "Paragraph D",
              hiddenWord2: "unsuccessful serves",
              keyWords: `"cortisol", "unsuccessful serves", "greater anxiety"`,
              explain: `Paragraph D explains that cortisol negatively affects performance, causing issues like more unsuccessful serves in tennis.`
            }}
          /> .
        </div><br />

        <div className="flex flex-wrap gap-1">
          <label>
            <span className="numberOfQuestion">21</span>   Psychologists can help athletes to view their physiological responses as the effect of a positive feeling such as
          </label>  <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques21"
            TestName={"Cambridge-19-Test2"}
            AnswerData={RightAnswers && RightAnswers[20]}
            userAnswerQN={UserData.ques21}
            ExplainDataObj={{
              number: 21,
              Ans1: "",
              hiddenWord: "Paragraph F",
              hiddenWord2: "",
              keyWords: `"helping them see a higher heart rate as excitement"`,
              explain: `Paragraph F discusses how psychologists can help athletes reframe stress symptoms as excitement rather than anxiety.`
            }}
          />.
        </div><br />

        <div className="flex flex-wrap gap-1">
          <span className="numberOfQuestion">22</span>     <ReadingText_inputs
            handleValueChange={handleChange}
            QNum="ques22"
            TestName={"Cambridge-19-Test2"}
            AnswerData={RightAnswers && RightAnswers[21]}
            userAnswerQN={UserData.ques22}
            ExplainDataObj={{
              number: 22,
              Ans1: "",
              hiddenWord: "Paragraph F ",
              hiddenWord2: "",
              keyWords: `"visualisation", "mental picture", "feeling of control"`,
              explain: `Paragraph F describes visualisation as a psychological technique that reduces stress, where athletes mentally rehearse successful performances.`
            }}
          /> is an example of a psychological technique which can reduce an athlete’s stress responses
        </div>
      </div> <br />



      <div className='articles pl-[10px] sm:pl-[25px] mt-2 mb-4'>
        <h4 className=''>Questions 23–24</h4> <br />
        <label className=''>Write the correct letters in boxes 23 and 24 on your answer sheet. </label><br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <h6>Which TWO facts about Emma Raducanu’s withdrawal from the Wimbledon tournament are mentioned in the text?</h6>
        <div className='mb-3 mt-2'>
          <ReadingSelect_input
            inputOptions={["A", "B", "C"]}
            handleValueChange={handleChange}
            QNum="ques23"
            TestName={"Cambridge-19-Test2"}
            AnswerData={RightAnswers && RightAnswers[22]}
            userAnswerQN={UserData.ques23}
            contentsObj={{
              Title: "",
              AData: "the stage at which she dropped out of the tournament",
              BData: " symptoms of her performance stress at the tournament",
              CData: "  measures which she had taken to manage her stress levels"
            }}
            ExplainDataObj={{
              number: 23,
              Ans1: "B – Symptoms of her performance stress at the tournament",
              hiddenWord: "Paragraph A",
              hiddenWord2: "future",
              keyWords: `"difficulty regulating her breathing", "heart rate"`,
              explain: `Paragraph A describes how Raducanu had breathing difficulties and an increased heart rate due to stress.`
            }}
          />

        </div>
        <div className='mb-3'>
          <ReadingSelect_input
            inputOptions={["A", "B", "C"]}
            handleValueChange={handleChange}
            QNum="ques24"
            TestName={"Cambridge-19-Test2"}
            AnswerData={RightAnswers && RightAnswers[23]}
            userAnswerQN={UserData.ques24}
            contentsObj={{
              Title: "",
              AData: " aspects of the Wimbledon tournament which increased her stress levels",
              BData: "reactions to her social media posts about her experience at Wimbledon",
              CData: " They paid for information about the routes."
            }}
            ExplainDataObj={{
              number: 24,
              Ans1: "A – Aspects of the Wimbledon tournament which increased her stress levels",
              hiddenWord: "Paragraph C",
              hiddenWord2: "future",
              keyWords: `"larger audience", "higher expectations", "more skilful opponent"`,
              explain: `Paragraph C explains how factors such as a larger audience, higher expectations, and a skilled opponent increased Raducanu’s stress.`
            }}
          />

        </div>
      </div>
      <div className='articles pl-[10px] sm:pl-[25px] mt-2 mb-4'>
        <h4 className=''>Questions 25–26</h4> <br />
        <label className=''>Write the correct letters in boxes 23 and 24 on your answer sheet. </label><br />
      </div>
      <div className='Questions ml-[10px] sm:ml-[25px] mb-5'>
        <h5>Which TWO facts about anxiety are mentioned in Paragraph E of the text?</h5>
        <div className='mb-3 mt-2'>
          <ReadingSelect_input
            inputOptions={["A", "B", "C"]}
            handleValueChange={handleChange}
            QNum="ques25"
            TestName={"Cambridge-19-Test2"}
            AnswerData={RightAnswers && RightAnswers[24]}
            userAnswerQN={UserData.ques25}
            contentsObj={{
              Title: "",
              AData: "the factors which determine how severe it may be",
              BData: "how long it takes for its effects to become apparent",
              CData: "which of its symptoms is most frequently encountered"
            }}
            ExplainDataObj={{
              number: 25,
              Ans1: "A – The factors which determine how severe it may be",
              hiddenWord: "Paragraph E",
              hiddenWord2: "future",
              keyWords: `"intensity depends on the demands and resources"`,
              explain: `Paragraph E explains that the intensity of anxiety depends on an athlete's resources and demands.`
            }}
          />

        </div>
        <div className='mb-3'>
          <ReadingSelect_input
            inputOptions={["A", "B", "C"]}
            handleValueChange={handleChange}
            QNum="ques26"
            TestName={"Cambridge-19-Test2"}
            AnswerData={RightAnswers && RightAnswers[25]}
            userAnswerQN={UserData.ques26}
            contentsObj={{
              Title: "",
              AData: "the types of athletes who are most likely to suffer from it",
              BData: "the harm that can result if athletes experience it too often",
              CData: " about the routes information"
            }}
            ExplainDataObj={{
              number: 26,
              Ans1: "B – The harm that can result if athletes experience it too often",
              hiddenWord: "Paragraph E",
              hiddenWord2: "future",
              keyWords: ` "damaging to both physical and mental health", "increase risk of heart disease and depression"`,
              explain: `Paragraph E states that repeated anxiety episodes can lead to heart disease and depression.`
            }}
          />

        </div>
      </div>




      {/* Passage-3 Questions ============================================================================*/}
      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4 className='underline text-center'>Reading Passage-3  </h4> <br />
        <h4>Questions 27–32</h4><br />
        <label className=''>Complete the summary using the list of phrases, A–K, below. <br /> <br />
          Write the correct letter, A–K, in boxes 27–32 on your answer sheet. <br /> <br /></label><br />
        <h4 className='text-center'>Maryam Mirzakhani</h4>
      </div>
      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5 flex flex-wrap">
        Maryam Mirzakhani is regarded as <span className="numberOfQuestion">27</span>
        <ReadingText_inputs
          handleValueChange={handleChange}
          QNum="ques27"
          TestName={"Cambridge-19-Test2"}
          AnswerData={RightAnswers && RightAnswers[26]}
          userAnswerQN={UserData.ques27}
          ExplainDataObj={{
            number: 27,
            Ans1: "",
            hiddenWord: "Paragraph A",
            hiddenWord2: "",
            keyWords: "only female holder, prestigious Fields Medal, retained at the time of her death",
            explain: `(Paragraph A): Maryam Mirzakhani was the only woman to win the Fields Medal, which makes her unique in the field of mathematics. At the time of her death, no other woman had achieved this distinction.`
          }}
        /> in the field of mathematics because she was the only female holder of the prestigious Fields Medal – a record that she retained at the time of her death. However, maths held little <span className="numberOfQuestion">28</span>
        <ReadingText_inputs
          handleValueChange={handleChange}
          QNum="ques28"
          TestName={"Cambridge-19-Test2"}
          AnswerData={RightAnswers && RightAnswers[27]}
          userAnswerQN={UserData.ques28}
          ExplainDataObj={{
            number: 28,
            Ans1: "",
            hiddenWord: "Paragraph A",
            hiddenWord2: "",
            keyWords: "maths wasn’t her interest, loved novels, read anything she could lay her hands on",
            explain: `(Paragraph A): As a child, Mirzakhani was not initially interested in mathematics. Instead, she preferred reading novels, which had greater appeal for her.`
          }}
        /> for her as a child and in fact her performance was below average until she was <span className="numberOfQuestion">29</span>
        <ReadingText_inputs
          handleValueChange={handleChange}
          QNum="ques29"
          TestName={"Cambridge-19-Test2"}
          AnswerData={RightAnswers && RightAnswers[28]}
          userAnswerQN={UserData.ques29}
          ExplainDataObj={{
            number: 29,
            Ans1: "",
            hiddenWord: "Paragraph A",
            hiddenWord2: "",
            keyWords: "fascinated her, famous maths problem, she was hooked",
            explain: "(Paragraph A): Her interest in mathematics was sparked when her older brother introduced her to a difficult math puzzle. This problem intrigued her and drew her into the subject."
          }}
        /> by a difficult puzzle that one of her siblings showed her.

        Later, as a professional mathematician, she had an inquiring mind and proved herself to be <span className="numberOfQuestion">30</span>
        <ReadingText_inputs
          handleValueChange={handleChange}
          QNum="ques30"
          TestName={"Cambridge-19-Test2"}
          AnswerData={RightAnswers && RightAnswers[29]}
          userAnswerQN={UserData.ques30}
          ExplainDataObj={{
            number: 30,
            Ans1: "",
            hiddenWord: "Paragraph B",
            hiddenWord2: "",
            keyWords: "resolute in the face of setbacks, kept working, long hike with no trail and no end in sight",
            explain: "(Paragraph B): Mirzakhani demonstrated persistence and determination in her mathematical journey, continuing despite challenges and setbacks."
          }}
        /> when things did not go smoothly. She said she got the greatest <span className="numberOfQuestion">31</span>
        <ReadingText_inputs
          handleValueChange={handleChange}
          QNum="ques31"
          TestName={"Cambridge-19-Test2"}
          AnswerData={RightAnswers && RightAnswers[30]}
          userAnswerQN={UserData.ques31}
          ExplainDataObj={{
            number: 31,
            Ans1: "",
            hiddenWord: "Paragraph B",
            hiddenWord2: "",
            keyWords: "most rewarding part, excitement of discovery, enjoyment of understanding something new",
            explain: "(Paragraph B): Mirzakhani described her greatest joy as the Aha moment, where she felt deep satisfaction after making a groundbreaking discovery."
          }}
        /> from making ground-breaking discoveries and in fact she was responsible for some extremely <span className="numberOfQuestion">32</span>
        <ReadingText_inputs
          handleValueChange={handleChange}
          QNum="ques32"
          TestName={"Cambridge-19-Test2"}
          AnswerData={RightAnswers && RightAnswers[31]}
          userAnswerQN={UserData.ques32}
          ExplainDataObj={{
            number: 32,
            Ans1: "",
            hiddenWord: "Paragraph B",
            hiddenWord2: "",
            keyWords: "original research into mathematics, ground-breaking discoveries",
            explain: "(Paragraph B): Her research led to innovative mathematical discoveries, contributing significantly to the field."
          }}
        /> mathematical studies. <br /> <br />


        <div className="w-full border p-4 bg-gray-100 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="box-item font-bold">A: appeal</div>
            <div className="box-item font-bold">D: single</div>
            <div className="box-item font-bold">G: involved</div>
            <div className="box-item font-bold">J: satisfaction</div>
            <div className="box-item font-bold">B: determined</div>
            <div className="box-item font-bold">E: achievement</div>
            <div className="box-item font-bold">H: unique</div>
            <div className="box-item font-bold">K: intent</div>
            <div className="box-item font-bold">C: intrigued</div>
            <div className="box-item font-bold">F: devoted</div>
            <div className="box-item font-bold">I: innovative</div>
          </div>
        </div>
      </div>




      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4>Questions 33–37</h4> <br />
        <label className=''>Do the following statements agree with the claims of the writer in Reading Passage 3?<br /> <br />
          In boxes 33–37 on your answer sheet, write</label><br /> <br />
        <div className="box-container border p-4 bg-gray-100 max-w-xl mx-auto rounded-lg">
          <div className="grid grid-cols-1 gap-4">
            <div className="box-item">YES: if the statement agrees with the claims of the writer</div>
            <div className="box-item">NO: if the statement contradicts the claims of the writer</div>
            <div className="box-item">NOT GIVEN: if it is impossible to say what the writer thinks about this</div>
          </div>
        </div>
      </div>
      <div className="Questions Questions ml-[10px] sm:ml-[25px] mb-5">
        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques33"><span className='numberOfQuestion'>33</span> Many people who ended up winning prestigious intellectual prizes only reached an average standard when young.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques33"
            TestName="Cambridge-19-Test2"
            AnswerData={RightAnswers && RightAnswers[32]}
            userAnswerQN={UserData.ques33}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 33,
              Ans1: "",
              hiddenWord: "Paragraph B",
              hiddenWord2: "",
              keyWords: "Most Nobel prize winners were unexceptional in childhood, Einstein failed the general part of the entry test",
              explain: "(Paragraph B): The passage states that many Nobel Prize winners, including Einstein, were unremarkable in their childhood."
            }}
          />
        </div>

        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques34"><span className='numberOfQuestion'>34</span> Einstein’s failures as a young man were due to his lack of confidence.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques34"
            TestName="Cambridge-19-Test2"
            AnswerData={RightAnswers && RightAnswers[33]}
            userAnswerQN={UserData.ques34}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 34,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: "struggled at work initially, kept plugging away",
              explain: "The passage mentions Einstein’s academic struggles but does not attribute them to a lack of confidence."
            }}
          />
        </div>

        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques35"><span className='numberOfQuestion'>35</span> It is difficult to reach agreement on whether some children are actually born gifted.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques35"
            TestName="Cambridge-19-Test2"
            AnswerData={RightAnswers && RightAnswers[34]}
            userAnswerQN={UserData.ques35}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 35,
              Ans1: "",
              hiddenWord: "Paragraph C",
              hiddenWord2: "",
              keyWords: "jury is out on giftedness being innate, brains are flexible, new neural pathways can be created",
              explain: "(Paragraph C): The passage discusses the debate on whether giftedness is innate or shaped by learning and practice."
            }}
          />
        </div>

        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques36"><span className='numberOfQuestion'>36</span> Einstein was upset by the public’s view of his life’s work.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques36"
            TestName="Cambridge-19-Test2"
            AnswerData={RightAnswers && RightAnswers[35]}
            userAnswerQN={UserData.ques36}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 36,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `Einstein once wrote: "It’s not that I’m so smart…"`,
              explain: "The passage discusses Einstein’s thoughts on intelligence and perseverance but does not mention his feelings about public perception."
            }}
          />
        </div>

        <div className='flex flex-wrap gap-1'>
          <label htmlFor="ques37"><span className='numberOfQuestion'>37</span> Einstein put his success down to the speed at which he dealt with scientific questions.</label>
          <TF_AZ_IX_inputs
            handleValueChange={handleChange}
            QNum="ques37"
            TestName="Cambridge-19-Test2"
            AnswerData={RightAnswers && RightAnswers[36]}
            userAnswerQN={UserData.ques37}
            options={["YES", "NO", "NOT GIVEN"]}
            ExplainDataObj={{
              number: 37,
              Ans1: "",
              hiddenWord: "",
              hiddenWord2: "",
              keyWords: `"I stay with problems longer", "It is character, not intellect, that makes a great scientist."`,
              explain: `(Paragraph G): Einstein attributed his success to persistence rather than quick thinking. He believed character was more important than intellect.`
            }}
          />
        </div>
      </div>

      <div className='articles pl-[10px] sm:pl-[25px] mb-4'>
        <h4>Questions 38–40</h4> <br />
        <label className=''>Choose the correct letter, A, B, C or D.<br /> <br />
          Write the correct letter in boxes 38–40 on your answer sheet.</label><br />
      </div>
      <div className="Questions Questions Questions ml-[10px] sm:ml-[25px]mb-4">
        <div className=''>
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques38"
            TestName="Cambridge-19-Test2"
            AnswerData={RightAnswers && RightAnswers[37]}
            userAnswerQN={UserData.ques38}
            contentsObj={{
              Title: "What does Eyre believe is needed for children to equal ‘gifted’ standards?",
              AData: "strict discipline from the teaching staff.",
              BData: "assistance from their peers in the classroom.",
              CData: "the development of a spirit of inquiry towards their studies.",
              DData: "the determination to surpass everyone else’s achievements."
            }}
            ExplainDataObj={{
              number: 38,
              Ans1: "(C) The development of a spirit of inquiry towards their studies – Paragraph D",
              hiddenWord: "Paragraph D",
              hiddenWord2: "",
              keyWords: "curiosity, persistence, and hard work, high performance learning",
              explain: `(Paragraph D): Eyre believes that success comes from curiosity, persistence, and the right learning environment, not strict discipline.`
            }}
          />
        </div>

        <div className=''>
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques39"
            TestName="Cambridge-19-Test2"
            AnswerData={RightAnswers && RightAnswers[38]}
            userAnswerQN={UserData.ques39}
            contentsObj={{
              Title: "What is the result of Ericsson’s research?",
              AData: "Very gifted students do not need to work on improving memory skills.",
              BData: "Being born with a special gift is not the key factor in becoming expert.",
              CData: "Including time for physical exercise is crucial in raising performance.",
              DData: "10,000 hours of relevant and demanding work will create a genius."
            }}
            ExplainDataObj={{
              number: 39,
              Ans1: "(B) Being born with a special gift is not the key factor in becoming expert",
              hiddenWord: "Paragraph E",
              hiddenWord2: "",
              keyWords: "deliberate practice, trained students outperformed gifted individuals",
              explain: "(Paragraph E): Ericsson’s research found that deliberate practice, rather than innate talent, determines expertise."
            }}
          />
        </div>

        <div className=''>
          <ReadingSelect_input
            inputOptions={["A", "B", "C", "D"]}
            handleValueChange={handleChange}
            QNum="ques40"
            TestName="Cambridge-19-Test2"
            AnswerData={RightAnswers && RightAnswers[39]}
            userAnswerQN={UserData.ques40}
            contentsObj={{
              Title: "In the penultimate paragraph, it is stated the key to some deprived children’s success is",
              AData: "a regular and nourishing diet at home.",
              BData: "the loving support of more than one parent.",
              CData: "a community which has well-funded facilities for learning.",
              DData: "the guidance of someone who recognises the benefits of learning."
            }}
            ExplainDataObj={{
              number: 40,
              Ans1: "(D) The guidance of someone who recognises the benefits of learning",
              hiddenWord: "Paragraph G",
              hiddenWord2: "",
              keyWords: "evidence of an adult… who valued and supported education, children talked about working hard at school",
              explain: "(Paragraph G): The study found that successful children, despite challenging backgrounds, had supportive adults who valued education."
            }}
          />
        </div>

      </div>
    </section>
  )
}

export default Panel2_Q2





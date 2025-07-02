
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useStateContext } from "@/contexts/ContextProvider";



//client components....
const Reading = dynamic(() => import('./reading'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

//end importing-------





function Main({ testName }) {
  const { explainRLQuestions, setExplainRLQuestions } = useStateContext();
  //all localstorage data save into states....
  const [userCountry, setUserCountry] = useState("")
  const [handlePanelfontSize, sethandlePanelfontSize] = useState(15);
  const [AnswersData, setAnswersData] = useState(null);


  //send all Userdata to Review Page which data got from all the panel form sections by 
  const [UserData, setUserdata] = useState({
    ques1: "", ques2: '', ques3: "", ques4: "", ques5: '', ques6: '', ques7: '', ques8: "", ques9: '', ques10: "",
    ques11: "", ques12: "", ques13: "", ques14: "", ques15: '', ques16: "", ques17: "", ques18: '', ques19: '',
    ques20: '', ques21: "", ques22: "", ques23: "", ques24: "", ques25: "", ques26: "",
    ques27: "", ques28: '', ques29: "", ques30: "", ques31: '', ques32: '', ques33: '', ques34: "", ques35: '', ques36: "",
    ques37: "", ques38: "", ques39: "", ques40: ""
  });



  // functiona for answerDatat-------
  const AllAnswersData = (x) => {
    // console.log(x)
    useEffect(() => {
      setAnswersData((prev) => {
        return x
      })
    }, [x])
  }


  //function for handle_Panel_Forms_Inputs---------------
  const handleChange = (x) => {
    const Names = x.target.name;
    const Values = x.target.value;
    setUserdata((objs) => {
      return { ...objs, [Names]: Values }
    });
    console.log(Values)
  }


  return (
    <div >
      <Reading
        handleChange={handleChange}
        AnswersData={AllAnswersData}
        UserData={UserData}
        testName={testName}
        RightAnswers={AnswersData}
      />

      <Footer UserData={UserData}
        AnswersData={AnswersData}
        setPassComment={setPassComment}
        testName={testName}
      />
    </div>
  )
}

export default Main;














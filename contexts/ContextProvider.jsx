import React, { createContext, useContext, useState, useRef } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  //Global States....
  //==================================
  const [LoadingGlobally, setLoadingGlobally] = useState(false);
  const [global_Msz_Showing, setGlobal_Msz_showing] = useState('');
  const [showVocabPopup, setShowVocabPopup] = useState(false);
  const [ShowPaymentInfo, setShowPaymentInfo] = useState(false);
  const [ShowMentorInfo, setShowMentorInfo] = useState(false);
  const [ShowDeleteAccountInfo, setShowDeleteAccountInfo] = useState(false);




  //login & Signup states...
  //=================================
  const [OpenClose_LogSign_Popup, setOpenClose_LogSign_Popup] = useState("");
  // Store callback functions
  const functionQueue = useRef([]);

  // Function to register/push a function
  const registerFunction = (fn) => {
    if (typeof fn === 'function') {
      functionQueue.current.push(fn);
    }
  };

  // Call all stored functions
  const globalFunction = () => {
    console.log('Global function executing stored callbacks...');
    //close the login/signup page
    setOpenClose_LogSign_Popup("");
    // i can use loading screen here until all functions is being proced then stop that below
    setLoadingGlobally(true);

    functionQueue.current.forEach((fn, index) => {
      try {
        fn();
      } catch (err) {
        console.error(`Function ${index + 1} failed:`, err);
      }
    });

    // Optionally: Clear queue after execution
    functionQueue.current = [];
    //stop loading screen
    setLoadingGlobally(false);
  };


  //Payment status...
  //=================================
  const [userPaymentStatusCheck, setUserPaymentStatusCheck] = useState("");


  //Reading Modules States...
  //==================================
  const [openPopup_ExR, setOpenPopup_ExR] = useState(false);   // in web setExplainRLQuestions
  const [explainObj_Reading, setExplainObj_Reading] = useState({});  // in web explainObjForRL, setExplainObjForRL
  const [readingTestName, setReadingTestName] = useState('')  // in web ReadingShowAnswer


  // Dashboard Modules all things ...........
  const [UDash_activeMenu, UDash_setActiveMenu] = useState(true);






  return (
    <StateContext.Provider value={{
      //globally states..
      LoadingGlobally, setLoadingGlobally,
      global_Msz_Showing,
      setGlobal_Msz_showing,
      showVocabPopup, setShowVocabPopup,
      ShowPaymentInfo, setShowPaymentInfo,
      ShowMentorInfo, setShowMentorInfo,
      ShowDeleteAccountInfo, setShowDeleteAccountInfo,
      //for Reading Modules...
      openPopup_ExR, setOpenPopup_ExR,
      explainObj_Reading, setExplainObj_Reading,
      readingTestName, setReadingTestName,
      userPaymentStatusCheck, setUserPaymentStatusCheck,
      //login and signup states ..
      OpenClose_LogSign_Popup, setOpenClose_LogSign_Popup,
      functionQueue, registerFunction, globalFunction,
      //User Dashboard.....
      UDash_activeMenu, UDash_setActiveMenu,
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

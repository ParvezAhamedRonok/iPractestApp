// CheckEvaluationAccess.js

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA,
  WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE
} from "../../../../../assets/URL's/AllUrl";
import { Sugession_API_Calling } from "./Sugession_API_Calling";
import { Lexical_Grammer_Sug_API_Calling_func } from "./Lexical_Grammer_Sug_API_Calling_func";
import { dummyTextArr } from "./DummyTextArr";

export async function Check_cond_after_login_for_Give_access_in_all_evaluation(
  changeTap,
  userPaymentStatusCheck,
  setstoreTapContentForChangeUI,
  userTextToPassResultEvaluation,
  setSpeakingImprovement,
  setSpeakingSummary,
  setlexicalResWords,
  setgrammerMistakes
) {
  // Get credentials from AsyncStorage
  const useremail = await AsyncStorage.getItem("userEmail");
  const userName = await AsyncStorage.getItem("userName");
  const userLoginToken = await AsyncStorage.getItem("loginToken");

  // alert(useremail);
  // alert(userLoginToken)
  if (!userLoginToken) {
    setstoreTapContentForChangeUI("LoginFirst");
    alert("need to log in")
    return;
  }

  setTimeout(async () => {
    // alert("log in-condions pass");
    alert('Mail-->'+useremail)
    try {
      const response = await fetch(`${WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA}${useremail}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userLoginToken}`,
          "Content-Type": "application/json"
        }
      });

      const result = await response.json();
      console.log("Feedback check:", result);

      if (result?.data?.[0]) {
        if (userPaymentStatusCheck) {
          // ✅ Paid user with existing feedback
          setstoreTapContentForChangeUI("");
          Sugession_API_Calling(userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary);
          Lexical_Grammer_Sug_API_Calling_func(userTextToPassResultEvaluation, setlexicalResWords, setgrammerMistakes);
        } else {
          // ❌ Not paid
          setstoreTapContentForChangeUI("HaveToPay");
          setSpeakingSummary(dummyTextArr);
          setSpeakingImprovement(dummyTextArr);
          setlexicalResWords(dummyTextArr);
          setgrammerMistakes(dummyTextArr);
        }
      } else {
        // 🔓 First-time user: show and save feedback
        setstoreTapContentForChangeUI("");
        Sugession_API_Calling(userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary);
        Lexical_Grammer_Sug_API_Calling_func(userTextToPassResultEvaluation, setlexicalResWords, setgrammerMistakes);

        try {
          await fetch(WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userName: userName,
              userEmail: useremail,
              feedbackData: changeTap
            })
          });
          console.log("Feedback data saved.");
        } catch (err) {
          console.error("Failed to save feedback:", err);
        }
      }
    } catch (error) {
      console.error("Error checking feedback:", error);
    }
  }, 300);
}

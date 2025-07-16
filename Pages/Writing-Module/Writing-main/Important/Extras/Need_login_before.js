
// etar vetore paid / unpaid sob gulakei reject dicche and payment page aa redirect korche 
//  ...so need to rectify 

import AsyncStorage from "@react-native-async-storage/async-storage";
import { startOneTimeAuthCheck } from '../../../../../utils/startOneTimeAuthCheck';
import {
  AAMARPAY_GET_USER_DATA_FROM_DATABASE,
  PAYPAL_GET_USER_DATA_FROM_DATABASE,
  WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA,
  WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE,
  SSL_COMMERZ_GET_USER_DATA_FROM_DATABASE
} from "../../../../../assets/URL's/AllUrl";
import { Lexical_Grammer_Sug_API_Calling_func } from "./Lexical_Grammer_Sug_API_Calling_func";
import { Sugession_API_Calling } from "./Sugession_API_Calling";

let change_status_for_save_data = false;
let local_userMail = '';
let Local_userToken = '';
let Local_userName = '';

export async function Needto_login_button_cond_Then_give_access(
  userPaymentStatusCheck,
  router,
  changeTap,
  userTextToPassResultEvaluation,
  setSpeakingImprovement,
  setSpeakingSummary,
  setlexicalResWords,
  setgrammerMistakes,
  setLoadingGlobally,
  setstoreTapContentForChangeUI
) {
  await getAuthData();

  if (!local_userMail || !Local_userToken) {
    alert('User not found.');
    return;
  }

  await runMainFeedbackCheck(
    router,
    changeTap,
    userTextToPassResultEvaluation,
    setSpeakingImprovement,
    setSpeakingSummary,
    setlexicalResWords,
    setgrammerMistakes,
    setLoadingGlobally,
    setstoreTapContentForChangeUI
  );
}

async function getAuthData() {
  try {
    const { userEmail, userToken, userName } = await startOneTimeAuthCheck();

    if (userEmail && userToken) {
      local_userMail = userEmail;
      Local_userToken = userToken;
      Local_userName = userName;
      console.log("✅ Auth loaded:", userEmail);
    } else {
      console.log("❌ No user data found");
    }
  } catch (err) {
    console.log("⚠️ Auth error:", err);
  }
}

async function runMainFeedbackCheck(
  router,
  changeTap,
  userTextToPassResultEvaluation,
  setSpeakingImprovement,
  setSpeakingSummary,
  setlexicalResWords,
  setgrammerMistakes,
  setLoadingGlobally,
  setstoreTapContentForChangeUI
) {
  setLoadingGlobally(true);

  try {
    const res = await fetch(`${WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA}${local_userMail}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Local_userToken}`,
        "Content-Type": "application/json"
      }
    });

    const json = await res.json();
    setLoadingGlobally(false);

    if (json?.data?.[0]) {
      console.log("✅ Feedback data found.");
      await check_User_Payment(
        changeTap,
        userTextToPassResultEvaluation,
        setSpeakingImprovement,
        setSpeakingSummary,
        setlexicalResWords,
        setgrammerMistakes,
        setLoadingGlobally,
        setstoreTapContentForChangeUI,
        router
      );
    } else {
      console.log("ℹ️ No feedback data yet, showing for first time.");
      change_status_for_save_data = true;
      await showFeedbackFunc(
        changeTap,
        userTextToPassResultEvaluation,
        setSpeakingImprovement,
        setSpeakingSummary,
        setlexicalResWords,
        setgrammerMistakes,
        setLoadingGlobally,
        setstoreTapContentForChangeUI
      );
    }
  } catch (error) {
    console.error("❌ Error fetching feedback:", error);
    setLoadingGlobally(false);
    change_status_for_save_data = true;

    await showFeedbackFunc(
      changeTap,
      userTextToPassResultEvaluation,
      setSpeakingImprovement,
      setSpeakingSummary,
      setlexicalResWords,
      setgrammerMistakes,
      setLoadingGlobally,
      setstoreTapContentForChangeUI
    );
  }
}

async function check_User_Payment(
  changeTap,
  userTextToPassResultEvaluation,
  setSpeakingImprovement,
  setSpeakingSummary,
  setlexicalResWords,
  setgrammerMistakes,
  setLoadingGlobally,
  setstoreTapContentForChangeUI,
  router
) {
  console.log("💳 Checking payment status...");

  const paymentUrls = [
    SSL_COMMERZ_GET_USER_DATA_FROM_DATABASE,
    AAMARPAY_GET_USER_DATA_FROM_DATABASE,
    PAYPAL_GET_USER_DATA_FROM_DATABASE
  ];

  const checkPayment = async (url) => {
    try {
      const response = await fetch(`${url}${local_userMail}`, {
        headers: {
          Authorization: `Bearer ${Local_userToken}`,
          "Content-Type": "application/json"
        }
      });

      const json = await response.json();
      const userData = json?.data?.[0];

      if (!userData) {
        console.log(`🔴 No userData found at ${url}`);
        return false;
      }

      if (userData.isExpire === false) {
        console.log(`🟢 Active payment found at ${url}`);
        return true;
      } else {
        console.log(`🔴 Payment expired at ${url}`);
        return false;
      }
    } catch (error) {
      console.error(`❌ Payment check failed at ${url}:`, error);
      return false;
    }
  };

  const results = await Promise.all(paymentUrls.map(checkPayment));
  console.log("🔍 Payment check results:", results);

  const hasPaid = results.includes(true);

  if (hasPaid) {
    alert("✅ Access granted. Showing feedback.");
    await showFeedbackFunc(
      changeTap,
      userTextToPassResultEvaluation,
      setSpeakingImprovement,
      setSpeakingSummary,
      setlexicalResWords,
      setgrammerMistakes,
      setLoadingGlobally,
      setstoreTapContentForChangeUI
    );
  } else {
    alert("🚫 Payment required.");
    await AsyncStorage.setItem("productID", "WrittingPage");
    router.push("/Payment-Pages/Billing-Page");
  }
}

async function showFeedbackFunc(
  changeTap,
  userTextToPassResultEvaluation,
  setSpeakingImprovement,
  setSpeakingSummary,
  setlexicalResWords,
  setgrammerMistakes,
  setLoadingGlobally,
  setstoreTapContentForChangeUI
) {
  setLoadingGlobally(true);

  Sugession_API_Calling(
    userTextToPassResultEvaluation,
    setSpeakingImprovement,
    setSpeakingSummary
  );

  Lexical_Grammer_Sug_API_Calling_func(
    userTextToPassResultEvaluation,
    setlexicalResWords,
    setgrammerMistakes
  );

  setLoadingGlobally(false);
  setstoreTapContentForChangeUI("");

  if (change_status_for_save_data) {
    try {
      await fetch(WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userName: Local_userName,
          userEmail: local_userMail,
          feedbackData: changeTap
        })
      });

      console.log("📝 Feedback data saved to DB.");
    } catch (error) {
      console.error("❌ Error saving feedback:", error);
    }
  }
}

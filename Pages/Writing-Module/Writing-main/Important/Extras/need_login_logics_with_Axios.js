// feedbackAccess.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {
  AAMARPAY_GET_USER_DATA_FROM_DATABASE,
  PAYPAL_GET_USER_DATA_FROM_DATABASE,
  WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA,
  WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE,
  SSL_COMMERZ_GET_USER_DATA_FROM_DATABASE
} from "../../../../../assets/URL's/AllUrl";
import { Lexical_Grammer_Sug_API_Calling_func } from "./Lexical_Grammer_Sug_API_Calling_func";
import { Sugession_API_Calling } from "./Sugession_API_Calling";
import { startOneTimeAuthCheck } from '../../../../../utils/startOneTimeAuthCheck';

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
  try {
    const { userEmail, userToken, userName } = await startOneTimeAuthCheck();

    if (!userEmail || !userToken) {
      alert("User not logged in.");
      return;
    }

    local_userMail = userEmail.toLowerCase().trim();
    Local_userToken = userToken;
    Local_userName = userName;

    console.log("🧠 Auth: ", local_userMail, Local_userToken.slice(0, 10));

    await fetchFeedbackAndCheckPayment(
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
  } catch (error) {
    console.error("Auth check failed:", error);
  }
}

async function fetchFeedbackAndCheckPayment(
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
    const res = await axios.get(`${WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA}${local_userMail}`, {
      headers: {
        Authorization: `Bearer ${Local_userToken}`,
        "Content-Type": "application/json"
      }
    });

    console.log("📦 Feedback check response:", res.data);

    if (res.data?.data?.[0]) {
      console.log("🟢 Feedback exists. Checking payment...");
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
      console.log("🔵 No feedback found. Showing fresh feedback.");
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
    console.error("🚨 Feedback fetch error:", error);
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
  } finally {
    setLoadingGlobally(false);
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
      const res = await axios.get(`${url}${local_userMail}`, {
        headers: {
          Authorization: `Bearer ${Local_userToken}`,
          "Content-Type": "application/json"
        }
      });

      const data = res.data?.data?.[0];
      console.log(`💰 Response from ${url}:`, data);

      if (data && data.isExpire === false) {
        return true; // Paid and active
      }
    } catch (error) {
      console.error(`❌ Payment check failed for ${url}`, error);
    }

    return false;
  };

  const results = await Promise.all(paymentUrls.map(checkPayment));
  const hasPaid = results.includes(true);

  console.log("💡 Final payment status array:", results);
  console.log("✅ Has paid:", hasPaid);

  if (hasPaid) {
    alert("Access granted ✅");
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
    alert("Payment required 💸");
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

  Sugession_API_Calling(userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary);
  Lexical_Grammer_Sug_API_Calling_func(userTextToPassResultEvaluation, setlexicalResWords, setgrammerMistakes);

  setstoreTapContentForChangeUI("");
  setLoadingGlobally(false);

  if (change_status_for_save_data) {
    try {
      const res = await axios.post(WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE, {
        userName: Local_userName,
        userEmail: local_userMail,
        feedbackData: changeTap
      });

      console.log("📝 Feedback data saved:", res.data);
    } catch (error) {
      console.error("❌ Error saving feedback:", error);
    }
  }
}

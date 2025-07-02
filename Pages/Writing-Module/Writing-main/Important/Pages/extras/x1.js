import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "react-native-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useStateContext } from "@/contexts/ContextProvider";
// import { CheckPaymentStatus } from "@/components/Payments/CkeckPayment/CheckPayments.js";
import {
  WRITING_POST_CHECK_ANSWER,
  WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE,
  WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION,
} from "../../../../../assets/URL's/AllUrl";

import { postToSaveDataInDatabase } from "../AllFunctions/Post-To-Save-data-in-Database";
import { Needto_login_button_cond_Then_give_access } from "../AllFunctions/Needto_login_button_cond_Then_give_access";
import { Check_cond_after_login_for_Give_access_in_all_evaluation } from "../AllFunctions/Check_cond_after_login_for_Give_access_in_all_evaluation";

// External components (use as-is)
// import ResultPopUp from "./ResultPopup";
// import LoginPageForFeedback from "@/components/LoginPage/Same-Page-Login-Popup/LoginPage";
import QuestionUpload from "./QuestionUpload";

let ImageArray = [];
let userTextToPassResultEvaluation;

const WritingTextArea = ({ task }) => {
  const navigation = useNavigation();
  const { userPaymentStatusCheck, setOpen_MarketingOffer } = useStateContext();

  const [userLoginName, setUserLoginName] = useState("");
  const [userLoginToken, setUserLoginToken] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [itemsSet, setItemsSet] = useState("");
  const [getUserWritinNo, setGetUserWritinNo] = useState("");
  const [googleLoginToken, setGoogleLoginToken] = useState("");
  const [useSignUpinfo, setUserSignupInfo] = useState("");

  const [writingData, setWritingData] = useState({ writinTextArea: "" });
  const [imageText, setImageText] = useState("");
  const [imagePreview, setImagePreview] = useState([]);
  const [correctData, setCorrectData] = useState("");
  const [postIeltsRate, setPostIeltsRate] = useState("");
  const [LexicalResourceScore, setLexicalResourceScore] = useState("");
  const [GrammarScore, setGrammarScore] = useState("");
  const [storeCoherenceScore, setCoherenceScore] = useState("");
  const [MainTaskComplessionResult, setMainTaskComplessionResult] = useState("");

  const [isloading, setIsLoading] = useState(false);
  const [isloadingForFeedback, setIsLoadingForFeedback] = useState(false);
  const [openLogInForFeedBack, setOpenLogInForFeedBack] = useState(false);
  const [changeImageUI, setChangeImageUI] = useState(false);
  const [change_login_Status, setChangeLoginStatus] = useState(true);
  const [TOELF_Score, setTOELF_Score] = useState("");
  const [changeTap, setChangeTap] = useState("Correction");
  const [SpeakingSummary, setSpeakingSummary] = useState([]);
  const [SpeakingImprovement, setSpeakingImprovement] = useState([]);
  const [lexicalResWords, setlexicalResWords] = useState([]);
  const [grammerMistakes, setGrammerMistakes] = useState([]);
  const [storeTapContentForChangeUI, setStoreTapContentForChangeUI] = useState("");
  const [imageUploadMsg, setImageUploadMsg] = useState("");
  const [storeQuestionText, setStoreQuestionText] = useState("");

  useEffect(() => {
    // CheckPaymentStatus();
    (async () => {
      const name = await AsyncStorage.getItem("userName");
      const email = await AsyncStorage.getItem("userEmail");
      const writingNo = await AsyncStorage.getItem("WritingNo");
      const token = await AsyncStorage.getItem("loginTOken");
      const googleToken = await AsyncStorage.getItem("GoogleFacebookToken");
      const signupInfo = await AsyncStorage.getItem("userSignupInfo");

      setUserLoginName(name || "");
      setUserEmail(email || "");
      setGetUserWritinNo(writingNo || "");
      setUserLoginToken(token || "");
      setGoogleLoginToken(googleToken || "");
      setUserSignupInfo(signupInfo || "");
    })();
  }, []);

  const pickImage = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
        includeBase64: false,
      },
      (response) => {
        if (response.didCancel) return;
        if (response.errorCode) {
          Alert.alert("Error", response.errorMessage);
          return;
        }
        if (response.assets && response.assets.length > 0) {
          const selectedImage = response.assets[0];
          ImageArray.push({ ...selectedImage, url: selectedImage.uri });
          setImagePreview((prev) => [...prev, selectedImage.uri]);
        }
      }
    );
  };


  const deleteHandler = (uri) => {
    setImagePreview(imagePreview.filter(img => img !== uri));
    ImageArray = ImageArray.filter(img => img.url !== uri);
  };

  const handleinputTextArea = (e) => {
    const text = e.nativeEvent.text;
    setWritingData(prev => ({ ...prev, writinTextArea: text }));
  };

  const handleWritingSubmit = () => {
    const wordCount = writingData.writinTextArea.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount < 150) {
      Alert.alert("Word Count", "You must write at least 150 words.");
    } else {
      setItemsSet("writing-text");
      checkWritingAnswer(writingData.writinTextArea);
    }
  };

  const handleLogInPageForWrite = () => {
    if (useremail) {
      AsyncStorage.removeItem("WritingNo");
      handleWritingSubmit();
    } else {
      setOpenLogInForFeedBack(true);
    }
  };

  const handleLogInPageForUpload = () => {
    if (useremail) {
      AsyncStorage.removeItem("WritingNo");
      uploadImageGCP();
    } else {
      setOpenLogInForFeedBack(true);
    }
  };

  const userLoginFunction = () => {
    setIsLoadingForFeedback(true);
    if (!userLoginToken && !googleLoginToken && !useSignUpinfo) {
      setIsLoadingForFeedback(false);
      setOpenLogInForFeedBack(true);
    } else {
      setIsLoadingForFeedback(false);
      functionForCheckConditions();
    }
  };

  const functionForCheckConditions = () => {
    Needto_login_button_cond_Then_give_access(
      userPaymentStatusCheck,
      navigation,
      changeTap,
      userTextToPassResultEvaluation,
      setSpeakingImprovement,
      setSpeakingSummary,
      setlexicalResWords,
      setGrammerMistakes,
      setIsLoadingForFeedback,
      setStoreTapContentForChangeUI
    );
  };

  const checkWritingAnswer = async (text) => {
    userTextToPassResultEvaluation = text;
    setImageUploadMsg("Checking...");
    setIsLoading(true);

    let mainTaskScore = "";

    if (storeQuestionText) {
      try {
        const coherenceRes = await fetch(WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ questions: storeQuestionText, answers: text }),
        });
        const data = await coherenceRes.json();
        const numbers = Array.from(data.message.matchAll(/(\d+)(?:-(\d+))?/g), ([, start, end]) => {
          const [begin, finish] = [start, end].map(Number);
          return end ? Array.from({ length: finish - begin + 1 }, (_, i) => begin + i) : [begin];
        }).flat();
        mainTaskScore = numbers[0] < 4 ? 5 : numbers[0] <= 6 ? numbers[0] + 1 : numbers[0];
        setMainTaskComplessionResult(mainTaskScore);
      } catch (err) {
        console.error(err);
      }
    }

    try {
      const res = await fetch(WRITING_POST_CHECK_ANSWER, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputs: text }),
      });
      const data = await res.json();

      const correctionRes = await fetch("https://ipractest-406204.uc.r.appspot.com/writingCorrection/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ textData: text }),
      });
      const correctionData = await correctionRes.json();

      Check_cond_after_login_for_Give_access_in_all_evaluation(
        changeTap,
        userPaymentStatusCheck,
        setStoreTapContentForChangeUI,
        text,
        setSpeakingImprovement,
        setSpeakingSummary,
        setlexicalResWords,
        setGrammerMistakes
      );

      const corrected = correctionData.message.replace(/['"]+/g, '').replace(/\\n/g, ' ').split("**").join();
      setCorrectData(corrected);

      let totalScore = mainTaskScore
        ? (Number(data.GrammaticalScore) + Number(data.LexicalResourceScore) + Number(data.CoherenceScore) + Number(mainTaskScore)) / 4
        : (Number(data.GrammaticalScore) + Number(data.LexicalResourceScore) + Number(data.CoherenceScore)) / 3;

      totalScore = Math.round(totalScore * 2) / 2;
      setPostIeltsRate(totalScore.toFixed(1));
      setLexicalResourceScore(data.LexicalResourceScore);
      setGrammarScore(data.GrammaticalScore);
      setCoherenceScore(data.CoherenceScore);
      Making_TOEFL_Scroes(totalScore);
      postToSaveDataInDatabase(data, totalScore, userLoginToken, userLoginName, useremail, mainTaskScore);
    } catch (err) {
      console.error(err);
      Alert.alert("Server Error", "Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const uploadImageGCP = async () => {
    if (!ImageArray.length) return;

    setIsLoading(true);
    setItemsSet("uploaded-text");
    setImageUploadMsg("Uploading...");

    let textCombined = "";

    for (const img of ImageArray) {
      const formData = new FormData();
      formData.append("file", {
        uri: img.uri,
        type: img.type || "image/jpeg",
        name: img.fileName || "image.jpg",
      });

      try {
        const res = await fetch(WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE, {
          method: "POST",
          body: formData,
        });
        const result = await res.json();
        textCombined += result.message.replace(/['"]+/g, '').replace(/\\n/g, ' ');
      } catch (err) {
        console.error(err);
        Alert.alert("Image Upload Error", "Try again later.");
        setIsLoading(false);
        return;
      }
    }

    setImageText(textCombined);
    setChangeImageUI(true);
    setIsLoading(false);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {changeImageUI ? (
          <>
            <Text style={styles.label}>You can modify your text.</Text>
            <Text style={styles.wordCountLabel}>
              <Text style={[styles.wordCount, imageText.split(" ").length < 150 ? styles.wordRed : styles.wordOk]}>
                {imageText.split(" ").length}
              </Text>{" "}
              words
            </Text>
            <TextInput
              multiline
              value={imageText}
              onChangeText={setImageText}
              placeholder="Write here..."
              style={styles.textarea}
            />
            <Text style={styles.warning}>
              Please review converted text carefully. Mistakes may affect your score.
            </Text>
            <TouchableOpacity style={styles.evaluateButton} onPress={() => checkWritingAnswer(imageText)}>
              <Text style={styles.evaluateButtonText}>
                Writing Evaluation <MaterialCommunityIcons name="file-search-outline" size={16} color="#fff" />
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.label}>
              <Icon name="pen" size={14} color="red" /> Evaluation From Text
            </Text>
            <TextInput
              multiline
              placeholder="Write here..."
              onChange={handleinputTextArea}
              style={styles.textarea}
              value={writingData.writinTextArea}
            />
            <Text style={styles.wordCountLabel}>
              <Text style={styles.wordCount}>
                {writingData.writinTextArea.split(" ").filter(Boolean).length}
              </Text>{" "}
              Words
            </Text>
            <TouchableOpacity style={styles.evaluateButton} onPress={handleWritingSubmit}>
              <Text style={styles.evaluateButtonText}>
                Writing Evaluation <MaterialCommunityIcons name="file-search-outline" size={16} color="#fff" />
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <QuestionUpload setStoreQuestionText={setStoreQuestionText} />

      <Text style={styles.label}><Icon name="image" size={16} color="red" /> Evaluation From Image</Text>
      <View style={styles.imageUploadCard}>
        <View style={styles.imagePreviewContainer}>
          {imagePreview.map((img, idx) => (
            <View key={idx} style={styles.imageBox}>
              <Image source={{ uri: img }} style={styles.uploadedImage} />
              <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteHandler(img)}>
                <Text style={styles.deleteBtnText}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <TouchableOpacity onPress={pickImage} style={styles.uploadBtn}>
          <Text style={{ fontSize: 14 }}>
            {imagePreview.length ? <Icon name="plus" size={20} /> : "Upload Image"}
          </Text>
        </TouchableOpacity>

        {imagePreview.length > 0 && (
          <TouchableOpacity style={styles.convertBtn} onPress={handleLogInPageForUpload}>
            <Icon name="magic" size={18} color="#fff" />
            <Text style={styles.convertBtnText}> Convert Image to Text</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* {openLogInForFeedBack && (
        <LoginPageForFeedback
          openLogInPage={() => setOpenLogInForFeedBack(false)}
          openSignUpPage={() => setOpenLogInForFeedBack(false)}
          finalFuncAfterLogInorSignUp={
            change_login_Status ? () => navigation.goBack() : functionForCheckConditions
          }
        />
      )} */}

      {/* <ResultPopUp
        correctData={correctData}
        setCorrectData={setCorrectData}
        setOpen_MarketingOffer={setOpen_MarketingOffer}
        postIeltsRate={postIeltsRate}
        TOELF_Score={TOELF_Score}
        LexicalResourceScore={LexicalResourceScore}
        GrammarScore={GrammarScore}
        storeCoherenceScore={storeCoherenceScore}
        MainTaskComplessionResult={MainTaskComplessionResult}
        clickForUploadQuestion={() => setCorrectData("")}
        changeTap={changeTap}
        setChangeTap={setChangeTap}
        storeTapContentForChangeUI={storeTapContentForChangeUI}
        userLoginFunction={userLoginFunction}
        setchange_login_Status={setChangeLoginStatus}
        itemsSet={itemsSet}
        imageText={imageText}
        writingData={writingData}
        userTextToPassResultEvaluation={userTextToPassResultEvaluation}
        lexicalResWords={lexicalResWords}
        grammerMistakes={grammerMistakes}
        isloading={isloading}
        imageUploadMsg={imageUploadMsg}
        isloadingForFeedback={isloadingForFeedback}
        SpeakingSummary={SpeakingSummary}
        SpeakingImprovement={SpeakingImprovement}
      /> */}
    </ScrollView>
  );
};

export default WritingTextArea;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffe4e6",
    width: "95%",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  textarea: {
    backgroundColor: "#fff",
    width: "100%",
    height: 150,
    padding: 15,
    borderRadius: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 14,
    textAlignVertical: "top",
    marginBottom: 10,
  },
  wordCountLabel: {
    fontSize: 12,
    textAlign: "right",
    marginBottom: 10,
  },
  wordCount: {
    fontWeight: "bold",
    fontSize: 16,
  },
  wordRed: {
    color: "red",
  },
  wordOk: {
    color: "#111827",
  },
  warning: {
    color: "red",
    fontSize: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  evaluateButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 5,
  },
  evaluateButtonText: {
    color: "#fff",
    fontSize: 13,
  },
  imageUploadCard: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "dotted",
    borderRadius: 15,
    padding: 15,
    width: "95%",
    marginTop: 20,
    marginBottom: 30,
  },
  imagePreviewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  imageBox: {
    position: "relative",
    marginRight: 10,
    marginBottom: 10,
  },
  uploadedImage: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  deleteBtn: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#f87171",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteBtnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  uploadBtn: {
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "dotted",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#e0f2fe",
  },
  convertBtn: {
    flexDirection: "row",
    backgroundColor: "#3b82f6",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  convertBtnText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 10,
  },
});

// WritingTextArea.native.jsx
import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  ScrollView,
  ActivityIndicator,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStateContext } from '@/contexts/ContextProvider';
import {
  WRITING_POST_CHECK_ANSWER,
  WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE,
  WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION,
} from '@assets/URL\'s/AllUrl.js';
// import {
//   Post_to_save_data_in_databse,
//   Check_duplicate_words,
//   Needto_login_button_cond_Then_give_access,
//   Check_cond_after_login_for_Give_access_in_all_evaluation,
// } from '../AllFunctions';
import { Post_to_save_data_in_databse } from "../AllFunctions/Post-To-Save-data-in-Database";
import { Check_duplicate_words } from "../AllFunctions/Check_duplicate_words";
import { Needto_login_button_cond_Then_give_access } from "../AllFunctions/Needto_login_button_cond_Then_give_access";
import { Check_cond_after_login_for_Give_access_in_all_evaluation } from "../AllFunctions/Check_cond_after_login_for_Give_access_in_all_evaluation";
import QuestionUpload from './QuestionUpload';
import ResultPopUp from './ResultPopup';

let ImageArray = [];
let userTextToPassResultEvaluation;

export default function WritingTextArea({ task }) {
  const router = useRouter();
  const { pathname } = useLocalSearchParams();
  const {
    userPaymentStatusCheck,
    setOpen_MarketingOffer,
    setOpenClose_LogSign_Popup,
    functionQueue,
    registerFunction, // assume this exists
  } = useStateContext();

  // All states carried over
  const [userLoginName, setUserLoginName] = useState('');
  const [userLoginToken, setUserloginToken] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [itemsSet, setitemsSet] = useState('');
  const [userCountry, setuserCountry] = useState('');
  const [getUserWritinNo, setGetUserGritingNo] = useState('');
  const [googleLoginToken, setGoogleLoginToken] = useState('');
  const [useSignUpinfo, setUserSignupInfo] = useState('');
  const [repeatedWords, setRepeatedWords] = useState(0);
  const [subOrdinateWord, setSubOrdinateWord] = useState(0);
  const [isloadingForFeedback, setisloadingForFeedback] = useState(false);
  const [MainTaskComplessionResult, setMainTaskComplessionResult] = useState('');
  const [imageUploadMsg, setImageUploadMsg] = useState('');
  const [writingData, setWritingData] = useState({ writinTextArea: '' });
  const [postIeltsRate, setpostIeltsRate] = useState('');
  const [LexicalResourceScore, setLexicalResourceScore] = useState('');
  const [storeCoherenceScore, setCoherenceScore] = useState('');
  const [GrammarScore, setGeammarScore] = useState('');
  const [correctData, setCorrectData] = useState('');
  const [isloading, setisloading] = useState(false);
  const [imagePreview, setPreview] = useState([]);
  const [changeImageUI, setChangeImageUI] = useState(false);
  const [imageText, setIgameText] = useState('');
  const [storeQuestionText, setStoreQuestionText] = useState('');
  const [errorIfUserDontSelectImage, seterrorIfUserDontSelectImage] = useState('');
  const [change_login_Status, setchange_login_Status] = useState(true);
  const [TOELF_Score, setTOELF_Score] = useState('');
  const [changeTap, setChangeTap] = useState('Correction');
  const [SpeakingSummary, setSpeakingSummary] = useState([]);
  const [SpeakingImprovement, setSpeakingImprovement] = useState([]);
  const [lexicalResWords, setlexicalResWords] = useState([]);
  const [grammerMistakes, setgrammerMistakes] = useState([]);
  const [storeTapContentForChangeUI, setstoreTapContentForChangeUI] = useState('');

  useEffect(() => {
    CheckPaymentStatus(); // assumed imported
    (async () => {
      const [
        userName,
        userEmail,
        writingNo,
        googleToken,
        signupInfo,
        country,
        loginToken,
      ] = await Promise.all([
        AsyncStorage.getItem('userName'),
        AsyncStorage.getItem('userEmail'),
        AsyncStorage.getItem('WritingNo'),
        AsyncStorage.getItem('GoogleFacebookToken'),
        AsyncStorage.getItem('userSignupInfo'),
        AsyncStorage.getItem('setCountry'),
        AsyncStorage.getItem('loginTOken'),
      ]);
      setUserLoginName(userName || '');
      setUserEmail(userEmail || '');
      setGetUserGritingNo(writingNo || '');
      setGoogleLoginToken(googleToken || '');
      setUserSignupInfo(signupInfo || '');
      setuserCountry(country || '');
      setUserloginToken(loginToken || '');
    })();
  }, []);

  const Reload_Page_func = () => {
    router.replace(`${pathname}?reload=${Date.now()}`);
  };

  const countRepeatedWords = (sentence) => {
    const words = sentence.split(/((?:\w+ ){1})/g);
    const map = {};
    words.forEach(w => map[w] = (map[w] || 0) + 1);
    return map;
  };

  const repeatedWordScore = (text) => {
    let score = 10;
    const map = countRepeatedWords(text);
    Object.values(map).forEach(v => v > 10 && score--);
    return score;
  };

  const Making_TOEFL_Scroes = (ielts) => {
    const getToefl = s => {
      if (s >= 8) return 30;
      if (s >= 7.5) return 29;
      if (s >= 7) return 27;
      if (s >= 6.5) return 25;
      if (s >= 6) return 22;
      if (s >= 5.5) return 19;
      if (s >= 5) return 16;
      if (s >= 4.5) return 13;
      return 5;
    };
    ielts && setTOELF_Score(getToefl(ielts));
  };

  const checkWritingAnswer = async (text) => {
    userTextToPassResultEvaluation = text;
    setImageUploadMsg('Checking...');
    let taskScore = '';
    if (storeQuestionText) {
      try {
        const r = await fetch(WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ questions: storeQuestionText, answers: text }),
        });
        const data = await r.json();
        const first = Number(RegExp.$1 = data.message.match(/(\d+)/)?.[1] ?? 0);
        taskScore = first < 4 ? 5 : first <= 6 ? first + 1 : first;
        setMainTaskComplessionResult(taskScore);
      } catch {
        setMainTaskComplessionResult('error');
      }
    }

    setisloading(true);
    setTimeout(async () => {
      try {
        const r = await fetch(WRITING_POST_CHECK_ANSWER, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ inputs: text }),
        });
        const data = await r.json();
        setRepeatedWords(repeatedWordScore(text));
        setSubOrdinateWord(Check_duplicate_words(text));
        const r2 = await fetch('https://ipractest-406204.uc.r.appspot.com/writingCorrection/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ textData: text }),
        });
        const d2 = await r2.json();
        setisloading(false);
        Check_cond_after_login_for_Give_access_in_all_evaluation(
          changeTap,
          userPaymentStatusCheck,
          setstoreTapContentForChangeUI,
          userTextToPassResultEvaluation,
          setSpeakingImprovement,
          setSpeakingSummary,
          setlexicalResWords,
          setgrammerMistakes,
        );
        setCorrectData(d2.message.replace(/['"]+/g, '').replace(/\\n/g, ' '));
        const totalRaw = (
          Number(data.GrammaticalScore) +
          Number(data.LexicalResourceScore) +
          Number(data.CoherenceScore) +
          (taskScore ? Number(taskScore) : 0)
        ) / (taskScore ? 4 : 3);
        const rounded = Math.round(Number(totalRaw.toFixed(1)) * 2) / 2;
        setpostIeltsRate(rounded);
        setLexicalResourceScore(data.LexicalResourceScore);
        setGeammarScore(data.GrammaticalScore);
        setCoherenceScore(data.CoherenceScore);
        Making_TOEFL_Scroes(rounded);
        Post_to_save_data_in_databse(
          data,
          rounded,
          userLoginToken,
          userLoginName,
          useremail,
          MainTaskComplessionResult,
        );
      } catch {
        setisloading(false);
        Alert.alert('Server Error, please try again later.');
      }
    }, 2500);
  };

  const uploadImageGCP = async () => {
    if (!ImageArray.length) return seterrorIfUserDontSelectImage('imageNotSelected');
    setisloading(true);
    setImageUploadMsg('Uploading...');
    setitemsSet('uploaded-text');
    let fullText = '';
    for (const img of ImageArray) {
      const fd = new FormData();
      fd.append('file', {
        uri: img.uri,
        name: img.uri.split('/').pop(),
        type: img.type || 'image/jpeg',
      });
      try {
        const r = await fetch(WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE, {
          method: 'POST',
          body: fd,
        });
        const d = await r.json();
        fullText += d.message.replace(/['"]+/g, '').replace(/\\n/g, ' ');
      } catch {
        setChangeImageUI(false);
        Alert.alert('Network error, please try again.');
      }
    }
    setIgameText(fullText);
    setChangeImageUI(true);
    setTimeout(() => setisloading(false), 2000);
  };

  const afterConvertedImageIntoText = () => checkWritingAnswer(imageText);

  const pickImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      base64: false,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!res.canceled) {
      const uris = res.assets.map(a => a.uri);
      setPreview(uris);
      uris.forEach(uri => ImageArray.push({ uri, type: 'image/jpeg' }));
    }
  };

  const handleWritingSubmit = () => {
    if (writingData.writinTextArea.trim().split(/\s+/).length > 149) {
      checkWritingAnswer(writingData.writinTextArea);
      setitemsSet('writing-text');
    } else {
      Alert.alert('Write at least 150 words.');
    }
  };

  const handleLogInPageForWrite = () => {
    useremail ? (AsyncStorage.removeItem('WritingNo'), handleWritingSubmit()) : openLogInPageForIpractestFeedback();
  };

  const handleLogInPageForUpload = () => {
    useremail ? (AsyncStorage.removeItem('WritingNo'), uploadImageGCP()) : openLogInPageForIpractestFeedback();
  };

  const openLogInPageForIpractestFeedback = () => {
    functionQueue.current = [];
    setTimeout(() => {
      registerFunction(change_login_Status ? Reload_Page_func : functionForCheckConditions);
      setOpenClose_LogSign_Popup('Same_Login');
    }, 1000);
  };

  const userLoginFunction = () => {
    AsyncStorage.setItem('productID', 'WrittingPage');
    setisloadingForFeedback(true);
    if (!(userLoginToken || googleLoginToken || useSignUpinfo)) {
      setisloadingForFeedback(false);
      openLogInPageForIpractestFeedback();
    } else {
      setisloadingForFeedback(false);
      functionForCheckConditions();
    }
  };

  const functionForCheckConditions = () => {
    Needto_login_button_cond_Then_give_access(
      userPaymentStatusCheck,
      router,
      changeTap,
      userTextToPassResultEvaluation,
      setSpeakingImprovement,
      setSpeakingSummary,
      setlexicalResWords,
      setgrammerMistakes,
      setisloadingForFeedback,
      setstoreTapContentForChangeUI,
    );
  };

  const clickForUploadQuestion = () => {
    setCorrectData('');
  };

  return (
    <ScrollView style={styles.container}>
      {changeImageUI ? (
        <View style={styles.textAreaContainer}>
          <TextInput
            multiline
            style={styles.textArea}
            value={imageText}
            placeholder="Write here..."
            onChangeText={setIgameText}
          />
          <Text style={styles.wordCount}>
            {imageText.split(' ').filter(Boolean).length} words
          </Text>
          <Button
            title="Writing Evaluation"
            color="#333"
            onPress={afterConvertedImageIntoText}
          />
        </View>
      ) : (
        <View style={styles.textAreaContainer}>
          <TextInput
            multiline
            style={styles.textArea}
            placeholder="Write here..."
            onChangeText={text => setWritingData({ writinTextArea: text })}
            value={writingData.writinTextArea}
          />
          <Text style={styles.wordCount}>
            {writingData.writinTextArea.trim().split(/\s+/).filter(Boolean).length} Words
          </Text>
          <Button
            title="Writing Evaluation"
            color="#000"
            onPress={
              getUserWritinNo === '11' || getUserWritinNo === '111'
                ? handleLogInPageForWrite
                : handleWritingSubmit
            }
          />
        </View>
      )}

      <QuestionUpload setStoreQuestionText={setStoreQuestionText} />

      <View style={styles.imageSection}>
        <TouchableOpacity style={styles.imageBtn} onPress={pickImage}>
          <MaterialCommunityIcons name="image-plus" size={24} color="#000" />
          <Text> Upload Image</Text>
        </TouchableOpacity>
        <View style={styles.imagePreviewContainer}>
          {imagePreview.map(uri => (
            <Image key={uri} source={{ uri }} style={styles.uploadedImage} />
          ))}
        </View>
        {imagePreview.length > 0 && (
          <Button
            title="Convert image into Text"
            color="#0066cc"
            onPress={
              getUserWritinNo === '11' || getUserWritinNo === '111'
                ? handleLogInPageForUpload
                : uploadImageGCP
            }
          />
        )}
      </View>

      <ResultPopUp
        correctData={correctData}
        setCorrectData={setCorrectData}
        setOpen_MarketingOffer={setOpen_MarketingOffer}
        isMobile={Platform.OS !== 'web'}
        postIeltsRate={postIeltsRate}
        TOELF_Score={TOELF_Score}
        LexicalResourceScore={LexicalResourceScore}
        GrammarScore={GrammarScore}
        storeCoherenceScore={storeCoherenceScore}
        MainTaskComplessionResult={MainTaskComplessionResult}
        clickForUploadQuestion={clickForUploadQuestion}
        changeTap={changeTap}
        setChangeTap={setChangeTap}
        storeTapContentForChangeUI={storeTapContentForChangeUI}
        userLoginFunction={userLoginFunction}
        setchange_login_Status={setchange_login_Status}
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
      />

      {(isloading || isloadingForFeedback) && (
        <ActivityIndicator size="large" color="#800080" style={{ margin: 20 }} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 80, padding: 10, backgroundColor: '#FDEEF6', borderRadius: 15 },
  textAreaContainer: { marginBottom: 20, alignItems: 'center' },
  textArea: {
    width: '90%',
    minHeight: 150,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    textAlignVertical: 'top',
    fontSize: 16,
    marginBottom: 10,
  },
  wordCount: { alignSelf: 'flex-end', marginRight: '5%', marginBottom: 10, fontSize: 14 },
  imageSection: { marginBottom: 20, alignItems: 'center' },
  imageBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  imagePreviewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  uploadedImage: {
    width: 75,
    height: 75,
    borderRadius: 15,
    margin: 5,
  },
});

import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { useNavigation, useRoute } from '@react-navigation/native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Preview from "./Preview";
import SubmitReading from './SubmitReading';
import { useStateContext } from "../../../../contexts/ContextProvider";

const Footer = ({ AnswersData }) => {
  const { readingTestName, setReadingTestName } = useStateContext();
  const route = useRouter();
  const { testID } = useLocalSearchParams();


  const [togglePreview, setTogglePreview] = useState(false);
  const [toggleSubmit, setToggleSubmit] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes

  const timerRef = useRef(null);
  // alert(testID)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          Alert.alert('⏰ Time Up', '60 minutes have passed. Your test time is over.');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const handleReviewPage = () => {
    setTogglePreview(!togglePreview);
    setToggleSubmit(false);
    // Alert.alert('📝 Review', 'You are reviewing your answers.');
  };

  const handleReadingUsersData = () => {
    setToggleSubmit(!toggleSubmit);
    setTogglePreview(false);
    //set TestName for make color in Reading Question & Answers in Reading Tests Page 
    setReadingTestName(testID)

    // Alert.alert('✅ Submit', 'Answers have been submitted.');
  };

  return (
    <>
      <View style={styles.footerSection}>
        <View style={styles.row}>
          {/* Timer Circle */}
          <View style={styles.timerCircle}>
            <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonGreen} onPress={handleReadingUsersData}>
              <Icon name="check" size={14} color="#fff" />
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonBlue} onPress={handleReviewPage}>
              <Icon name="eye" size={12} color="#fff" />
              <Text style={styles.btnText}>Review</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* for showing the Preview & Submited Answers Sections */}
      {
        togglePreview && <Preview
          handleReviewPage={handleReviewPage} />
      }

      {
        toggleSubmit && <SubmitReading
          handleReadingUsersData={handleReadingUsersData}
          AnswersData={AnswersData}
        />
      }
    </>

  );
};

const styles = StyleSheet.create({
  footerSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0f172a',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 6,
    zIndex: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timerCircle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#facc15',
  },
  timerText: {
    color: '#facc15',
    fontSize: 14,
    fontWeight: '700',
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
  buttonGreen: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16a34a',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 4,
    gap: 6,
  },
  buttonBlue: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2563eb',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 4,
    gap: 6,
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Footer;

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  Animated,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, { Circle } from 'react-native-svg';
import { QuestionNumObj } from "./_Data/_TestAnswers"

const screenWidth = Dimensions.get('window').width;

let RightCount = 0;
let WrongCount = 0;
let ReadingRate = 0;

// ✅ Move this OUTSIDE so it doesn't get re-created in render
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function SubmitReading({
  handleReadingUsersData,
  AnswersData
}) {
  const [userLoginToken, setUserLoginToken] = useState('');
  const [userLoginEmail, setUserLoginEmail] = useState('');
  const [userLoginName, setUserLoginName] = useState('');
  const [count, setCount] = useState(0);
  const [TOELF_Score, setTOELF_Score] = useState('');
  const [modalVisible, setModalVisible] = useState(true);

  const animatedIELTS = useState(new Animated.Value(0))[0];
  const animatedTOEFL = useState(new Animated.Value(0))[0];

  const modalTranslateY = useState(new Animated.Value(500))[0]; // Start from the bottom

  const CIRCLE_LENGTH = 2 * Math.PI * 35;
  const RADIUS = 35;

  useEffect(() => {
    const loadUserInfo = async () => {
      const token = await AsyncStorage.getItem('loginTOken');
      const email = await AsyncStorage.getItem('userEmail');
      const name = await AsyncStorage.getItem('userName');
      setUserLoginToken(token || '');
      setUserLoginEmail(email || '');
      setUserLoginName(name || '');
    };
    loadUserInfo();

    // Animate the modal when it's first shown
    Animated.timing(modalTranslateY, {
      toValue: 0,  // Move to the center
      duration: 500,
      useNativeDriver: true,
    }).start();
    // console.log(UserData)
  }, []);

  const calculateAnswers = () => {
    return AnswersData.map((data, index) => {
      const filteredAnswers = data.filter(e => e !== '/');
      const userQuestion = QuestionNumObj[`ques${index + 1}`];
      return filteredAnswers.filter(e => e === userQuestion);
    });
  };

  const Answers = calculateAnswers();

  useEffect(() => {
    RightCount = Answers.filter(answer => answer.length > 0).length;
    const getIELTSBandFromCorrectAnswers = (correct) => {
      if (correct >= 39 && correct <= 40) return 9.0;
      else if (correct >= 37 && correct <= 38) return 8.5;
      else if (correct >= 35 && correct <= 36) return 8.0;
      else if (correct >= 33 && correct <= 34) return 7.5;
      else if (correct >= 30 && correct <= 32) return 7.0;
      else if (correct >= 27 && correct <= 29) return 6.5;
      else if (correct >= 23 && correct <= 26) return 6.0;
      else if (correct >= 19 && correct <= 22) return 5.5;
      else if (correct >= 15 && correct <= 18) return 5.0;
      else if (correct >= 13 && correct <= 14) return 4.5;
      else if (correct >= 10 && correct <= 12) return 4.0;
      else if (correct === 9) return 3.5;
      else if (correct >= 7 && correct <= 8) return 3.0;
      else if (correct >= 5 && correct <= 6) return 2.5;
      else if (correct >= 3 && correct <= 4) return 2.0;
      else if (correct === 2) return 1.5;
      else if (correct === 1) return 1.0;
      else return 0.0;
    };

    ReadingRate = getIELTSBandFromCorrectAnswers(Number(RightCount));

  }, [Answers]);

  useEffect(() => {
    const userQuestions = Object.values(QuestionNumObj).slice(0, 40);
    WrongCount = Answers.reduce((wrongCount, answer, index) => {
      if (userQuestions[index] !== '' && answer.length === 0) {
        return wrongCount + 1;
      }
      return wrongCount;
    }, 0);
  }, [Answers, QuestionNumObj]);

  useEffect(() => {
    setCount(Object.values(QuestionNumObj).filter(value => value !== '').length);
  }, [QuestionNumObj]);

  useEffect(() => {
    const getToeflAndIeltsScore = score => {
      const scoreMapping = [
        { TOEFL: 30, IELTS: 9 },
        { TOEFL: 29, IELTS: 8.5 },
        { TOEFL: 28, IELTS: 8 },
        { TOEFL: 27.5, IELTS: 7.5 },
        { TOEFL: 25, IELTS: 7 },
        { TOEFL: 21, IELTS: 6.5 },
        { TOEFL: 15.5, IELTS: 6 },
        { TOEFL: 10, IELTS: 5.5 },
        { TOEFL: 5.5, IELTS: 5 },
        { TOEFL: 3, IELTS: 4.5 },
        { TOEFL: 1, IELTS: 4 },
      ];

      // Find the TOEFL score that corresponds to the closest IELTS score
      let closest = scoreMapping[0];
      let minDiff = Math.abs(score - closest.IELTS);
      scoreMapping.forEach(s => {
        const diff = Math.abs(score - s.IELTS);
        if (diff < minDiff) {
          closest = s;
          minDiff = diff;
        }
      });
      return closest;
    };

    if (ReadingRate > 0) {
      const scores = ReadingRate < 4 ? 0 : getToeflAndIeltsScore(ReadingRate);  // No rounding here, just use the exact value
      setTimeout(() => {
        setTOELF_Score(scores.TOEFL);
        animateProgress(animatedIELTS, ReadingRate / 9);  // Normalize for 0-9 range
        animateProgress(animatedTOEFL, Number(scores.TOEFL) / 30);  // Normalize for 0-30 range
      }, 800);
    }
  }, [ReadingRate]);

  const animateProgress = (animatedValue, target) => {
    Animated.timing(animatedValue, {
      toValue: target,
      duration: 1000,
      useNativeDriver: false, // ✅ Must stay false to support interpolate
    }).start();
  };

  const renderCircularBar = (progressValue, label, Title) => {
    const strokeDashoffset = progressValue.interpolate({
      inputRange: [0, 1],
      outputRange: [CIRCLE_LENGTH, 0],
    });




    // const PostReadingScores = async () => {
    //   const storeIeltsScore = ReadingRate;

    //   try {
    //     const response = await fetch(READING_POST_FOR_SET_SCORES, {
    //       method: 'POST',
    //       headers: {
    //         'Authorization': `Bearer ${userLoginToken}`,
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         username: userLoginName,
    //         userEmail: userLoginEmail,
    //         rightAns: RightCount,
    //         wrongAns: WrongCount,
    //         ieltsRate: storeIeltsScore,
    //         SectionName: testName,
    //       }),
    //     });

    //     const data = await response.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.error('Error posting reading scores:', error);
    //   }
    // };







    return (
      <View style={styles.circleWrapper}>
        <Svg width={100} height={100}>
          <Circle
            stroke="#eee"
            cx={50}
            cy={50}
            r={RADIUS}
            strokeWidth={8}
            fill="none"
          />
          <AnimatedCircle
            stroke="blue"
            cx={50}
            cy={50}
            r={RADIUS}
            strokeWidth={8}
            strokeDasharray={CIRCLE_LENGTH}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </Svg>
        <View style={styles.centeredText}>
          <Text style={styles.scoreLabel}>{label}</Text>
        </View>
        <Text style={styles.scoreTitle}>{Title}</Text>
      </View>
    );
  };

  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={handleReadingUsersData}>
        <Animated.View
          style={[styles.modalContent, { transform: [{ translateY: modalTranslateY }] }]}>
          <View style={styles.header}>
            <View style={styles.scoreBox}>
              <Text style={styles.countText}>{count}</Text>
              <Text style={styles.totalText}>/40</Text>
            </View>
            <TouchableOpacity onPress={handleReadingUsersData}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.answersBox}>
            <Text style={styles.answerText}>
              Right: <Text style={styles.green}>{RightCount}</Text>
            </Text>
            <Text style={styles.answerText}>
              Wrong: <Text style={styles.red}>{WrongCount}</Text>
            </Text>
          </View>

          <View style={styles.progressRow}>
            {renderCircularBar(animatedIELTS, ReadingRate.toFixed(1), "IELTS")}
            {renderCircularBar(animatedTOEFL, TOELF_Score, "TOFEl")}
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: screenWidth * 0.9,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoreBox: {
    backgroundColor: '#444',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  countText: {
    color: '#fff',
    fontSize: 22,
  },
  totalText: {
    color: '#fff',
    fontSize: 24,
    marginLeft: 5,
  },
  closeButton: {
    fontSize: 30,
    color: 'red',
  },
  answersBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  answerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  green: {
    color: 'green',
    fontSize: 20,
  },
  red: {
    color: 'red',
    fontSize: 20,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  circleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  centeredText: {
    position: 'absolute',
    top: 35,
    alignSelf: 'center',
  },
  scoreLabel: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scoreTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 0,
    textAlign: 'center',
    color: "#000"
  },
});

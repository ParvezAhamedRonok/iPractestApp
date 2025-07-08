import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WritingTextArea from '../Writing-main/Important/Pages/Task-1-Component';
import WritingCardMainImg from '../../../assets/images/Writing-Images/about-writing-pic-1.png';
import FirstSecImg1 from '../../../assets/images/Writing-Images/firstSec-Img1.png';
import FirstSecImg2 from '../../../assets/images/Writing-Images/firstSec-Img2.png';
import { useStateContext } from '../../../contexts/ContextProvider';

export default function AllWritingTestServices() {
  const router = useRouter();
  const { showVocabPopup, setShowVocabPopup, scrollRef, scrollY, setScrollY } = useStateContext();
  const [useremail, setUseremail] = useState('');
  const [userToken, setUserToken] = useState('');
  const [changeState, setChangeState] = useState('task1');
  const [testsData, setTestsData] = useState([]);
  //for scrolling position check and set the position globally into states 
  const handleScroll = (event) => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };

  useEffect(() => {
    AsyncStorage.getItem('userEmail').then(setUseremail);
    AsyncStorage.getItem('loginToken').then(setUserToken);
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('userEmail').then(email => {
      // alert(email);
      // alert(userToken);
      if (!email || !userToken) return; // prevent fetch if token not loaded
      fetch(`https://node-js-express-login-example.onrender.com/api/user/WritingResults/${email}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(json => {
          if (Array.isArray(json.data)) {
            // alert("ok")
            setTestsData(json.data);
          } else {
            // alert("not")
            setTestsData([]); // fallback to empty array
            console.warn('Unexpected API response:', json);
          }
        })
        .catch(e => {
          // alert("Error")
          console.error('Fetch error:', e);
          setTestsData([]); // fallback on error
        });
    });
  }, [userToken]);


  const UI_Array = Array.from({ length: 14 }, (_, i) => {
    const filterData = Array.isArray(testsData)
      ? testsData.filter(d => d.SectionName === `Actual-test-${i + 1}`)
      : [];

    return {
      testNumber: i + 1,
      testImage: WritingCardMainImg,
      Scores: filterData.length ? filterData : null,
    };
  });


  const ScoreCircle = ({ scores }) => {
    alert(scores)
    const latest = scores[scores.length - 1].ieltsRate;
    const rate = Number(latest);
    let bg = rate > 6 ? '#2ecc71' : rate >= 4 ? '#f1c40f' : '#e74c3c';
    return (
      <View style={[styles.scoreCircle, { backgroundColor: bg }]}>
        <Text style={styles.scoreText}>{rate.toFixed(1)}</Text>
      </View>
    );
  };

  return (
    <ScrollView
      ref={scrollRef}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={styles.container}
    >
      <View style={styles.hero}>
        <View style={styles.heroLeft}>
          <View style={styles.heroBox}>
            <Text style={styles.tag}>Writing Practice</Text>
            <Text style={styles.heading}>Test Your IELTS Writing</Text>
            <Text style={styles.subtext}>Give all the IELTS tests and get results instantly.</Text>
            <TouchableOpacity style={styles.vocabBtn} onPress={() => setShowVocabPopup(true)}>
              <Text style={styles.vocabBtnText}>Writing Vocabularies</Text>
              <MaterialCommunityIcons name="book-open-variant" size={12} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.heroRight}>
          <Image source={FirstSecImg2} style={styles.heroImg2} />
          <Image source={FirstSecImg1} style={styles.heroImg1} />
        </View>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabBtn, changeState === 'task1' && styles.tabActive]}
          onPress={() => setChangeState('task1')}
        >
          <Text style={styles.tabText}>Task-1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabBtn, changeState === 'task2' && styles.tabActive]}
          onPress={() => setChangeState('task2')}
        >
          <Text style={styles.tabText}>Task-2</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.taskArea}>
        {changeState === 'task1' ? <WritingTextArea task={1} /> : <WritingTextArea task={2} />}
      </View>

      <View style={styles.actualTests}>
        <View style={{ alignItems: 'center', marginVertical: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>
            All Writing Tests
          </Text>
        </View>
        {UI_Array.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.card}
            onPress={() => router.push(`/Writing-Module/Writing-Tests/Actual-test-${item.testNumber}`)}
          >
            <View style={styles.cardRow}>
              <Image source={item.testImage} style={styles.cardImg} />
              <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                  <Ionicons name="star" size={16} color="#f1c40f" />
                  <Text style={styles.rating}> (76 reviews)</Text>
                  <View style={styles.userGroup}>
                    <FontAwesome5 name="user" size={14} color="#444" />
                    <FontAwesome5 name="user" size={14} color="#444" style={{ marginLeft: -8 }} />
                    <FontAwesome5 name="user" size={14} color="#444" style={{ marginLeft: -8 }} />
                    <Text style={styles.userCount}>671</Text>
                  </View>
                </View>
                <Text style={styles.location}>Farming, Forest, Pennsylvania</Text>
                <View style={styles.cardFooter}>
                  {item.Scores ? (
                    useremail && <ScoreCircle scores={item.Scores} />
                  ) : (
                    <View style={styles.scoreCircle}><Text style={styles.scoreText}>0</Text></View>
                  )}
                  <TouchableOpacity
                    style={styles.goBtn}
                    onPress={() => router.push(`/Writing-Module/Writing-Tests/Actual-test-${item.testNumber}`)}
                  >
                    <Text style={styles.goText}>Go for Test</Text>
                    <MaterialIcons name="keyboard-double-arrow-right" size={18} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.indexBubble}>
              <Text style={styles.indexText}>{item.testNumber}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6FF' },
  hero: { flexDirection: 'row', backgroundColor: '#F4F6FF' },
  heroLeft: { flex: 1, padding: 12 },
  heroBox: { backgroundColor: '#EEF1FE', padding: 20, borderRadius: 15 },
  tag: { backgroundColor: '#E5E9F7', padding: 4, fontSize: 10, fontWeight: '600' },
  heading: { marginTop: 8, fontSize: 10, fontWeight: '700' },
  subtext: { marginTop: 4, fontSize: 8 },
  vocabBtn: {
    flexDirection: 'row', backgroundColor: '#EE494B', paddingVertical: 4,
    paddingHorizontal: 8, borderRadius: 30, alignItems: 'center', marginTop: 10, alignSelf: 'flex-start'
  },
  vocabBtnText: { color: '#fff', fontWeight: '600', marginRight: 4, fontSize: 6 },
  heroRight: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  heroImg2: { width: 100, height: 100, resizeMode: 'contain' },
  heroImg1: { width: 30, height: 30, position: 'absolute', top: 80, right: 0 },
  tabs: { flexDirection: 'row', justifyContent: 'center', marginVertical: 12 },
  tabBtn: { padding: 10, marginHorizontal: 8, borderBottomWidth: 2, borderColor: 'transparent' },
  tabActive: { borderColor: '#27ae60' },
  tabText: { fontSize: 16, fontWeight: '600' },
  taskArea: { paddingHorizontal: 10 },
  actualTests: { padding: 16, backgroundColor: '#F5F5F8' },
  card: { backgroundColor: '#fff', borderRadius: 12, marginVertical: 8, padding: 10 },
  cardRow: { flexDirection: 'row' },
  cardImg: { width: 100, height: 100, resizeMode: 'cover', borderRadius: 10, marginRight: 12 },
  cardContent: { flex: 1, justifyContent: 'space-between' },
  cardHeader: { flexDirection: 'row', justifyContent: 'center', gap: 4, alignItems: 'center' },
  rating: { marginLeft: 6, fontSize: 12, color: '#555' },
  userGroup: { flexDirection: 'row', alignItems: 'center' },
  userCount: { marginLeft: 6, fontWeight: '600' },
  location: { fontSize: 12, color: '#444', marginVertical: 4 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  scoreCircle: {
    width: 36, height: 36, borderRadius: 18,
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#ccc'
  },
  scoreText: { color: '#fff', fontWeight: '700' },
  goBtn: {
    flexDirection: 'row', backgroundColor: 'blue', padding: 6,
    borderRadius: 20, alignItems: 'center'
  },
  goText: { color: '#fff', marginRight: 4, fontSize: 10 },
  indexBubble: {
    position: 'absolute', top: 0, right: 0, backgroundColor: '#2d3436',
    padding: 4, borderBottomLeftRadius: 50, width: 50, textAlign: 'center', alignItems: 'center'
  },
  indexText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
});
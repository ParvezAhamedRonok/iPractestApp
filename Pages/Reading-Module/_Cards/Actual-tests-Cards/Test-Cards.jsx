import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Images
import cambrigeIcon from '../../../../assets/images/cambrigeIcon.png';
import ActualImage1 from '../../../../assets/images/Reading-Images/ActualImg-1.png';
import ActualImage2 from '../../../../assets/images/Reading-Images/ActualImg-2.png';
import ActualImage3 from '../../../../assets/images/Reading-Images/ActualImg-3.png';

const ServicesReadingAllTest = () => {
  const navigation = useRouter();
  const [mainDataAll, setMainData] = useState([]);

  useEffect(() => {
    // axios({
    //   method: 'get',
    //   url: 'https://node-js-express-login-example.onrender.com/api/user/AllReadingResults/abc1234@gmail.com',
    //   headers: {
    //     Authorization: `Bearer pasd-sodkaspodasd-asd-asdoasdo-as=-da`,
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((res) => {
    //     setMainData(res.data.data || []);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }, []);

  const filterTests = (section) => {
    return mainDataAll.filter((item) => item.SectionName === section);
  };

  const testData = [
    {
      testNumber: 1,
      image: ActualImage1,
      section: 'Actual-Test-1',
      rating: '4.9',
      reviews: '(120 reviews)',
      people: '1450',
      titles: 'Language, HARD LANGUAGES, Translation software',
    },
    {
      testNumber: 2,
      image: ActualImage2,
      section: 'Actual-Test-2',
      rating: '4.7',
      reviews: '(95 reviews)',
      people: '1325',
      titles: 'Healthy Food?, Fitter with friends, Glue bones',
    },
    {
      testNumber: 3,
      image: ActualImage3,
      section: 'Actual-Test-3',
      rating: '4.8',
      reviews: '(102 reviews)',
      people: '1500',
      titles: 'Reduce Stress at Work, Body Language at Work, Life Beyond Pay',
    },
    {
      testNumber: 4,
      image: ActualImage1,
      section: 'Actual-Test-4',
      rating: '4.6',
      reviews: '(88 reviews)',
      people: '1170',
      titles: 'Artificial Intelligence, Smart Devices, Future Jobs',
    },
    {
      testNumber: 5,
      image: ActualImage2,
      section: 'Actual-Test-5',
      rating: '4.5',
      reviews: '(76 reviews)',
      people: '1105',
      titles: 'Urban Planning, Sustainable Cities, Eco Homes',
    },
    {
      testNumber: 6,
      image: ActualImage3,
      section: 'Actual-Test-6',
      rating: '4.9',
      reviews: '(141 reviews)',
      people: '1620',
      titles: 'Ancient Civilizations, Lost Languages, Historical Mysteries',
    },
    {
      testNumber: 7,
      image: ActualImage1,
      section: 'Actual-Test-7',
      rating: '4.8',
      reviews: '(121 reviews)',
      people: '1490',
      titles: 'Wildlife Conservation, Endangered Species, Nature Reserves',
    },
    {
      testNumber: 8,
      image: ActualImage2,
      section: 'Actual-Test-8',
      rating: '4.4',
      reviews: '(67 reviews)',
      people: '980',
      titles: 'Internet Safety, Cyberbullying, Online Privacy',
    },
    {
      testNumber: 9,
      image: ActualImage3,
      section: 'Actual-Test-9',
      rating: '4.6',
      reviews: '(89 reviews)',
      people: '1190',
      titles: 'Climate Change, Renewable Energy, Green Living',
    },
    {
      testNumber: 10,
      image: ActualImage1,
      section: 'Actual-Test-10',
      rating: '4.7',
      reviews: '(104 reviews)',
      people: '1320',
      titles: 'Space Travel, Mars Mission, Life on Other Planets',
    },
    {
      testNumber: 11,
      image: ActualImage2,
      section: 'Actual-Test-11',
      rating: '4.5',
      reviews: '(79 reviews)',
      people: '1010',
      titles: 'Digital Nomads, Remote Work, Work-Life Balance',
    },
    {
      testNumber: 12,
      image: ActualImage3,
      section: 'Actual-Test-12',
      rating: '4.9',
      reviews: '(150 reviews)',
      people: '1650',
      titles: 'Creative Thinking, Brainstorming, Innovation Culture',
    },
  ];

  const getBackgroundColor = (score) => {
    const num = Number(score);
    if (num === 0) return 'rgb(255, 102, 102)';
    if (num <= 5) return 'rgb(255, 221, 102)';
    if (num <= 9) return 'rgb(144, 238, 144)';
    return 'gray';
  };

  return (
    <ScrollView style={styles.container}>
      {testData.map((test, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Image source={test.image} style={styles.image} resizeMode="cover" />
          <View style={styles.cardContent}>
            <Text style={styles.testNumber}>{test.testNumber}</Text>
            <Text style={styles.meta}>{test.rating} ⭐ {test.reviews}</Text>
            <Text style={styles.tags}>{test.titles}</Text>
            <View style={styles.bottomRow}>
              <View style={styles.scoreBox}>
                <Text style={[styles.scoreText, { backgroundColor: getBackgroundColor(filterTests(test.section)[0]?.score) }]}>
                  {filterTests(test.section)[0]?.score || '0'}
                </Text>
                <Text style={styles.scoreLabel}>Score</Text>
              </View>

              <TouchableOpacity onPress={() => navigation.push(`Reading-Module/Reading-Tests-Section/${test.section}`)}>
                <LinearGradient
                  colors={['#34d399', '#38bdf8']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Take Test</Text>
                  <MaterialIcons name="arrow-forward-ios" size={14} color="white" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
    position: 'relative',
  },
  testNumber: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: 'blue',
    color: 'white',
    padding: 5,
    fontWeight: '700',
    fontSize: 16,
    width: 60,
    textAlign: 'center',
    borderBottomLeftRadius: 30,
  },
  meta: {
    fontSize: 11,
    color: '#666',
    marginBottom: 5,
  },
  tags: {
    fontSize: 11,
    color: '#333',
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  scoreBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 22,
    color: 'white',
    width: 40,
    textAlign: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    paddingVertical: 2,
  },
  scoreLabel: {
    fontSize: 10,
    color: '#2b8a3e',
    marginTop: 3,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default ServicesReadingAllTest;

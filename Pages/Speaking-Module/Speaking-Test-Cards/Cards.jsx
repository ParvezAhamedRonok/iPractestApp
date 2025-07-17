import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

// Dummy image imports (you’ll replace dynamically if needed)
import test1Sec1Images from '../../../assets/images/Speaking-Images/test1Sec-1.png';
import test1Sec2Images from '../../../assets/images/Speaking-Images/test1Sec-2.png';
import test1Sec3Images from '../../../assets/images/Speaking-Images/test1Sec-3.png';

import Single_Card from './Single-Card';

const Speaking_Cards = ({ openTestAfter10, setOpenTestsAfter10, mainDataAll }) => {
  const navigation = useRouter();
  const [useremail] = useState('parvez');

  const tests = Array.from({ length: 40 }, (_, i) => {
    const testNumber = i + 1;
    return {
      testNumber,
      sections: [1, 2, 3].map((sec) => {
        const sectionName = `Test${testNumber}Sec${sec}`;
        return {
          name: sectionName,
          data: mainDataAll.filter((item) => item.SectionName === sectionName),
          image: sec === 1 ? test1Sec1Images : sec === 2 ? test1Sec2Images : test1Sec3Images,
          title: `Talk about topic ${testNumber}.${sec}`,
          rating: `${Math.floor(Math.random() * 1000)}--test-${testNumber}`,
          peopleCount: `${Math.floor(Math.random() * 1000)}`,
        };
      }),
    };
  });

  const handleNavigate = (id) => {
    if (useremail) {
      navigation.push(`Speaking-Module/Speaking-Tests/${id}`);
    } else {
      Alert.alert('Login Required', 'Need to login first');
    }
  };

  return (
    <ScrollView>
      <Text style={styles.header}>All Practicing Tests</Text>
      <View style={styles.container}>
        {tests.map(({ testNumber, sections }) => {
          const hasData = sections.some((sec) => sec.data.length > 0);
          return (
            <View key={testNumber} style={styles.innerWrapper}>
              <View style={styles.cardWrapper}>
                <View style={styles.cardContainer}>

                  {/* Section Tag */}
                  <View
                    style={[
                      styles.sectionTag,
                      hasData ? styles.bgGreen : styles.bgYellow
                    ]}
                  >
                    <Text style={styles.sectionTagText}>{testNumber}</Text>
                  </View>

                  {/* Render the 3 cards for each test */}
                  {sections.map((section, index) => (
                    <Single_Card
                      key={index}
                      useremail={useremail}
                      redirect_func={() => handleNavigate(`Test${testNumber}-Sec-${index + 1}`)}
                      test_card_image={section.image}
                      rating={section.rating}
                      count_peoples={section.peopleCount}
                      Title={section.title}
                      test_Scores={section.data}
                      sectionNames={`${index + 1}`}
                    />
                  ))}
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 50,
  },
  innerWrapper: {
    padding: 10,
    marginBottom: 30,
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    paddingVertical: 16,
  },
  cardWrapper: {
    justifyContent: 'center',
  },
  cardContainer: {
    width: '100%',
    position: 'relative',
    padding: 10,
  },
  sectionTag: {
    position: 'absolute',
    top: -15,
    right: 20,
    width: 40,
    height: 22,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  sectionTagText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bgGreen: {
    backgroundColor: '#16a34a',
  },
  bgYellow: {
    backgroundColor: '#eab308',
  },
});

export default Speaking_Cards;

import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Diff from './Diff';     // Assuming you've converted these to React Native
import Diff2 from './Diff2';

const windowHeight = Dimensions.get('window').height;

const Compare = ({ itemsSet, imageText, writingData, correctData }) => {
  const userInput =
    (itemsSet === 'uploaded-text' && imageText) ||
    (itemsSet === 'writing-text' && writingData);

  return (
    <View style={styles.container}>
      {/* Your Answer Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Your Answer</Text>
        <ScrollView style={styles.scrollArea} nestedScrollEnabled={true}>
          <View style={styles.diffBox}>
            <Diff string1={userInput} string2={correctData} mode="words" />
          </View>
        </ScrollView>
      </View>

      {/* Corrected Answer Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Corrected Answer</Text>
        <ScrollView style={styles.scrollArea} nestedScrollEnabled={true}>
          <View style={styles.diffBoxCorrected}>
            <Diff2 string1={userInput} string2={correctData} mode="words" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Compare;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Stack on top by default, grid alternative would need media queries or responsive lib
    gap: 10,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 2,
    marginBottom: 4,
    borderBottomWidth: 4,
    borderBottomColor: '#e7a03c',
    height: windowHeight * 0.3,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 8,
    borderBottomWidth: 3,
    borderBottomColor: '#e7a03c',
  },
  scrollArea: {
    flex: 1,
    
  },
  diffBox: {
    padding: 12,
    borderRadius: 6,
    
  },
  diffBoxCorrected: {
    backgroundColor: '#e6f2fc',
    padding: 12,
    borderRadius: 6,
  },
});

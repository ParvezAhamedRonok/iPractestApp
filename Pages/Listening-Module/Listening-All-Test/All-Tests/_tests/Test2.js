import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ReadingText_inputs from '../All-Tests/Inputs/Text_inputs'; // Adjust the path as needed

const ArilQuestion = ({ RightAnswers }) => {
  return (
    <View style={styles.input_container}>
      <Text style={styles.RadioText}>
        The covering    The covering   The covering   The {" "}
        <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
          <Text style={{ color: 'white', fontSize: 12 }}>4</Text>
        </View>
        <View>
          <ReadingText_inputs
            QNum="ques1"
            TestName="Actual-Test-1"
            AnswerData={RightAnswers && RightAnswers[0]}
          />
        </View>
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  input_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4, // React Native doesn’t support `gap`, you may use margins instead
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default ArilQuestion;


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TF_AZ_IX_inputs from '../All-Tests/Inputs/TF_AZ_IX_inputs'; // adjust path if needed

const ArilQuestion = ({ RightAnswers }) => {
  return (
    <View style={styles.Select_container}>
      <Text style={styles.RadioText}>
        <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 8 }] }}>
          <Text style={{ color: 'white', fontSize: 12 }}>4</Text>
        </View>
        The covering    The covering   The covering   The {" "}
        <View style={{ marginLeft: 3, transform: [{ translateY: 15 }] }}>
          <TF_AZ_IX_inputs
            QNum="ques1"
            TestName="Actual-Test-1"
            AnswerData={RightAnswers && RightAnswers[0]}
            options={['TRUE', 'FALSE', 'NOT GIVEN']}
            ExplainDataObj={{
              number: 1,
              Ans1: '',
              hiddenWord: '',
              hiddenWord2: '',
              keyWords: 'Exclusive importers, never revealed the exact location, controlled trade.',
              explain:
                'In Paragraph B, it is stated that the Arabs controlled the trade of nutmeg and never revealed its exact source to European buyers. This means that most Europeans did not know where nutmeg was grown.',
            }}
          />
        </View>
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  Select_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4, // React Native doesn’t support `gap`, you may use margins instead
    alignItems: 'center',
    marginBottom: 10,
  },
  RadioText: {
    fontSize: 13,
    flexShrink: 1,
  }
});

export default ArilQuestion;


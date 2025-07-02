import React from 'react';
import { View, StyleSheet } from 'react-native';
import ReadingSelect_input from '../All-Tests/Inputs/Select_input'; // Adjust the path based on your file structure

const LaughterQuestion = ({ RightAnswers }) => {
  return (
    <View style={styles.container}>
      <ReadingSelect_input
        inputOptions={['A', 'B', 'C', 'D']}
        QNum="ques40"
        TestName="Actual-Test-1"
        AnswerData={RightAnswers && RightAnswers[39]}
        contentsObj={{
          Title: 'When referring to laughter in the first paragraphs, the writer emphasises',
          AData: 'its impact on language.',
          BData: 'its function in human culture.',
          CData: 'its value to scientific research.',
          DData: 'its universality in animal societies.',
        }}
        ExplainDataObj={{
          number: 40,
          Ans1: '(C) Its value to scientific research.',
          hiddenWord: '',
          hiddenWord2: '',
          keyWords: 'laughter, human psychology, language development, social perception, scientific study.',
          explain:
            'The writer emphasizes how laughter serves as a valuable research tool for scientists studying human psychology and social interactions.',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12, // equivalent to `mb-3` in Tailwind
  },
});

export default LaughterQuestion;

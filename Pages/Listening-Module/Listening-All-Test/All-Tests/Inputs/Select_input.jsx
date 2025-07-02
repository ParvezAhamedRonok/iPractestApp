import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Explain_Btn from './Explain-Btn';
import { useStateContext } from '../../../../../contexts/ContextProvider';
import { QuestionNumObj } from "../../_Importants/_Data/_TestAnswers"

export default function ReadingSelect_input({
  inputOptions,
  QNum,
  TestName,
  AnswerData,
  contentsObj,
}) {
  const { readingTestName } = useStateContext();

  const [selectedOption, setSelectedOption] = useState(QuestionNumObj || '');

  useEffect(() => {
    setSelectedOption(QuestionNumObj || '');
  }, [QuestionNumObj]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    handleValueChangeValue(option);
  };

  const handleValueChangeValue = (text) => {
    QuestionNumObj[QNum] = text; // ✅ Dynamic property update
  };

  return (
    <View style={styles.container}>
      {/* Question Header */}
      <View style={styles.questionHeader}>
        <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue' }}>
          <Text style={styles.numberText}>{QNum.match(/\d+/g)}</Text>
        </View>
        <Text style={styles.titleText}>{contentsObj.Title}</Text>
        {readingTestName === TestName &&
          AnswerData?.length > 0 &&
          !AnswerData.includes(QuestionNumObj) && (
            <Explain_Btn
              TestName={TestName}
              AnswerData={AnswerData}
              userAnswerQN={selectedOption}
            />
          )}
      </View>

      {/* Options */}
      {inputOptions.map((option) => (
        <Pressable
          key={option}
          style={styles.optionRow}
          onPress={() => handleSelect(option)}
        >
          <View style={styles.optionCircle}>
            <Text style={styles.optionCircleText}>{option}</Text>
          </View>

          <View style={styles.radioDotWrapper}>
            {selectedOption === option && <View style={styles.radioDotSelected} />}
          </View>

          <Text style={styles.optionText}>{contentsObj[`${option}Data`]}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    flexWrap: 'wrap',
    gap: 8,
  },
  numberCircle: {
    height: 26,
    width: 26,
    minWidth: 26,
    backgroundColor: '#007bff',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  numberText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },
  titleText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'justify',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginLeft: 16,
    flexWrap: 'wrap',
  },
  optionCircle: {
    width: 20,
    height: 20,
    minWidth: 20,
    borderRadius: 12,
    backgroundColor: '#6b7280',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginRight: 8,
  },
  optionCircleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
  },
  radioDotWrapper: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  radioDotSelected: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#000',
  },
  optionText: {
    fontSize: 12,
    color: '#4b5563',
    flex: 1,
    flexWrap: 'wrap',
  },
});

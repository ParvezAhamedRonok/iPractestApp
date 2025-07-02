import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useStateContext } from "../../../../../../contexts/ContextProvider";
//inputs..
import TF_AZ_IX_inputs from '../../Inputs/TF_AZ_IX_inputs';
import ReadingText_inputs from '../../Inputs/Text_inputs';
import ReadingSelect_input from '../../Inputs/Select_input';


//27 - 32
const paragraphData_27 = [
  {
    number: 27,
    qNum: 'ques27',
    text: 'Examples of problems with rule-based translations.',
  },
  {
    number: 28,
    qNum: 'ques28',
    text: 'Why search web-sites may be useful.',
  },
  {
    number: 29,
    qNum: 'ques29',
    text: 'How a wide range of international language data was collected.',
  },
  {
    number: 30,
    qNum: 'ques30',
    text: 'The need for a system which is mobile.',
  },
  {
    number: 31,
    qNum: 'ques31',
    text: 'Details of an older, labor intensive translation system.',
  },
  {
    number: 32,
    qNum: 'ques32',
    text: 'A prediction that translation systems will develop significantly in the future.',
  },
];

//33 to 37
const questions = [
  {
    number: 33,
    qNum: 'ques33',
    textBefore: 'The DARPA is working on a handheld device containing a ',
    textAfter: 'software.',
  },
  {
    number: 34,
    qNum: 'ques34',
    textBefore: 'Currently many Iraqis communicate with American soldiers using basic ',
    textAfter: 'movements',
  },
  {
    number: 35,
    qNum: 'ques35',
    textBefore: 'A major benefit of Babylon is that it goes beyond translating ',
    textAfter: '',
  },
  {
    number: 36,
    qNum: 'ques36',
    textBefore: 'Attempts are now being made to develop a statistical translation system which does not rely on ',
    textAfter: '',
  },
  {
    number: 37,
    qNum: 'ques37',
    textBefore: "If statistical methods could understand a language's innate structure, a ",
    textAfter: 'could be developed.',
  },
];




//38 to 40 
const paragraphData_38 = [
  {
    number: 38,
    qNum: 'ques38',
    text: 'Sees a role for bilingual people in training the portable device.',
  },
  {
    number: 39,
    qNum: 'ques39',
    text: 'Thinks the statistical approach and the approach taken by people are not so different.',
  },
  {
    number: 40,
    qNum: 'ques40',
    text: 'Believes it will be easier for people to watch foreign films in the future.',
  },
];




const Bubble = ({ number, items }) => (
  <View style={{
    width: 25, height: 25,
    alignItems: 'center', justifyContent: 'center',
    borderRadius: 100, backgroundColor: 'blue',
    transform: [{ translateY: items === "input" ? 4 : 7 }]
  }}>
    <Text style={{ color: 'white', fontSize: 12 }}>{number}</Text>
  </View>
);


export default function Test9Panel2_Page2({ RightAnswers }) {
  const { openPopup_ExR, setOpenPopup_ExR, readingTestName } = useStateContext();
  const router = useRouter();
  const [showNotePad, setShowNotePad] = useState(false);



  //select items 
  const SelectQuestionBlock = ({ data, items }) => (
    <View style={styles.Select_container}>
      <Text style={styles.RadioText}>
        <Bubble number={data.number} items={"select"} />{" "}
        {data.text}{" "}
        <View style={{ marginLeft: 3, transform: [{ translateY: 18 }] }}>
          <TF_AZ_IX_inputs
            QNum={data.qNum}
            TestName="Actual-Test-1"
            AnswerData={RightAnswers && RightAnswers[data.number - 1]}
            options={items}
            ExplainDataObj={{
              number: data.number,
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




  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.sectionTitle, { color: "purple" }]}>Section 2</Text>

      <View style={styles.notepadContainer}>
        {showNotePad && (
          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={4}
            placeholder="Write your notes here..."
          />
        )}
        <TouchableOpacity
          style={styles.noteButton}
          onPress={() => setShowNotePad(!showNotePad)}
        >
          <MaterialCommunityIcons name="notebook" size={20} color="#fff" />
          <Text style={styles.noteButtonText}>
            {showNotePad ? 'Hide Notepad' : 'Show Notepad'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.questionBlock}>
        <Text style={styles.questionTitle}>Questions 27 - 32</Text>
        <Text style={styles.instruction}>Which paragraph contains</Text>
      </View>
      {/* Question Number 27 - 32 */}
      <View className='Questions' >
        {paragraphData_27.map((item, index) => (
          <SelectQuestionBlock key={index} data={item} items={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']} />
        ))}
      </View>

      <View style={styles.questionBlock}>
        <Text style={styles.questionTitle}>Questions 33 – 37</Text>
        <Text style={styles.instruction}>Write NO MORE THAN TWO WORDS for each answer.</Text>
      </View>
      {/* Question Number 33 - 37 */}
      <View className="Questions">
        {questions.map(({ number, qNum, textBefore, textAfter }) => (
          <View key={number} style={styles.input_container}>
            <Text style={styles.RadioText}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                  backgroundColor: 'blue',
                  transform: [{ translateY: 8 }],
                }}
              >
                <Text style={{ color: 'white', fontSize: 12 }}>{number}</Text>
              </View>
              {' '}{textBefore}
              <View>
                <ReadingText_inputs
                  QNum={qNum}
                  TestName="Actual-Test-1"
                  AnswerData={RightAnswers && RightAnswers[number - 1]}
                  ExplainDataObj={{
                    number,
                    Ans1: '',
                    hiddenWord: '',
                    hiddenWord2: '',
                    keyWords: 'Aril, lacy red covering, source of mace.',
                    explain:
                      'In Paragraph A, the aril, a lacy red or crimson covering around the seed, is identified as the source of mace, a separate spice extracted from the nutmeg fruit.',
                  }}
                />
              </View>
              {textAfter && ' ' + textAfter}
            </Text>
          </View>
        ))}
      </View>


      <View style={styles.questionBlock}>
        <Text style={styles.questionTitle}>Questions 38 – 40</Text>
        <Text style={styles.instruction}> Match each name to the sentence</Text>
        <View style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 12,
          margin: 10,
          backgroundColor: '#f9f9f9',
          marginBottom: 10
        }}>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>A. </Text>Alex Waibel{"\n"}
            <Text style={{ fontWeight: 'bold' }}>B. </Text>Shou-de Lin{"\n"}
            <Text style={{ fontWeight: 'bold' }}>C. </Text>Dr Black{"\n"}
            <Text style={{ fontWeight: 'bold' }}>D. </Text>Franz Och
          </Text>
        </View>


      </View>
      {/* Question Number 38 - 40 */}
      <View className='Questions' >
        {paragraphData_38.map((item, index) => (
          <SelectQuestionBlock key={index} data={item} items={['A', 'B', 'C', 'D']} />
        ))}
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  input_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4, // React Native doesn’t support `gap`, you may use margins instead
    alignItems: 'center',
    marginBottom: 10,
  },
  Select_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4, // React Native doesn’t support `gap`, you may use margins instead
    alignItems: 'center',
    marginBottom: 20,
  },
  RadioText: {
    fontSize: 13,
    flexShrink: 1,
    lineHeight: 33
  },
  container: {
    padding: 15,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  notepadContainer: {
    marginBottom: 20,
  },
  textArea: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  noteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0077cc',
    padding: 10,
    borderRadius: 8,
  },
  noteButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
  questionBlock: {
    marginBottom: 25,
    marginTop: 30
  },
  questionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  instruction: {
    fontSize: 14,
    color: '#555',
  },
  headingList: {
    marginTop: 10,
    paddingLeft: 10,
  },
  headingItem: {
    marginBottom: 6,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

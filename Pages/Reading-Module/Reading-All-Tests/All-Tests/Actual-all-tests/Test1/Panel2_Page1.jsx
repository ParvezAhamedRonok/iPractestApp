import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useStateContext } from "../../../../../../contexts/ContextProvider";
//inputs..
import TF_AZ_IX_inputs from '../../Inputs/TF_AZ_IX_inputs';
import ReadingText_inputs from '../../Inputs/Text_inputs';
import ReadingSelect_input from '../../Inputs/Select_input';


const questionList = [
  {
    num: 1,
    text: 'Michael Krauss feels the world does not need so many languages.',
  },
  {
    num: 2,
    text: 'American Indian schoolchildren prefer to speak that mother tongue',
  },
  {
    num: 3,
    text: 'Kenneth Hale believes we need to keep different languages to maintain different cultures.',
  },
  {
    num: 4,
    text: 'The rules of grammar can help us to understand how people think',
  },
  {
    num: 5,
    text: 'Lardil is a simplified version of Damin',
  },
  {
    num: 6,
    text: 'Lardil is now used less than Damin',
  },
];

//7 to 13 
const questionData = [
  { num: 7, text: "The", qNum: "ques7" },
  { num: 8, text: "Kenneth Hale believes that a language develops as a result of", qNum: "ques8" },
  { num: 9, text: "style theme park. effort to understand the world, and is not something which simply", qNum: "ques9" },
  { num: 10, text: ". Some examples include a . In his work, he shows how breaking a language down to its fundamental", qNum: "ques10" },
  { num: 11, text: "reveals how its speakers make a", qNum: "ques11" },
  { num: 12, text: ". related things. He gives another very clear example of, what he claims to be a huge", qNum: "ques12" },
  { num: 13, text: "by pointing to how numero", qNum: "ques13" },
];

//14 to 21
const paragraphData_14 = [
  { number: 14, text: "Paragraph A", qNum: "ques14" },
  { number: 15, text: "Paragraph B", qNum: "ques15" },
  { number: 16, text: "Paragraph C", qNum: "ques16" },
  { number: 17, text: "Paragraph D", qNum: "ques17" },
  { number: 18, text: "Paragraph E", qNum: "ques18" },
  { number: 19, text: "Paragraph F", qNum: "ques19" },
  { number: 20, text: "Paragraph G", qNum: "ques20" },
  { number: 21, text: "Paragraph H", qNum: "ques21" },
];
//21 - 26
const paragraphData_21 = [
  {
    number: 21,
    qNum: 'ques21',
    text: 'The covering The covering The covering The',
  },
  {
    number: 22,
    qNum: 'ques22',
    text: 'There are fewer variations in the vowel sounds in European languages than in English.',
  },
  {
    number: 23,
    qNum: 'ques23',
    text: 'Mandarin is probably an easier language to learn than Cantonese.',
  },
  {
    number: 24,
    qNum: 'ques24',
    text: 'Vowel sounds are generally not as complicated as consonant sounds.',
  },
  {
    number: 25,
    qNum: 'ques25',
    text: 'The grammar of Estonian is far more complicated than the grammar of Latin.',
  },
  {
    number: 26,
    qNum: 'ques26',
    text: 'The writer is pleased that she does not write in Tuyuca.',
  },
];




export default function Test9Panel2_Page2({ RightAnswers }) {
  const { openPopup_ExR, setOpenPopup_ExR, readingTestName } = useStateContext();
  const router = useRouter();
  const [showNotePad, setShowNotePad] = useState(false);




  const Bubble = ({ number, items }) => (
    <View style={{
      width: 25, height: 25,
      alignItems: 'center', justifyContent: 'center',
      borderRadius: 100, backgroundColor: 'blue',
      transform: [{ translateY: items === "input" ? 4 : 6 }]
    }}>
      <Text style={{ color: 'white', fontSize: 12 }}>{number}</Text>
    </View>
  );

  const QuestionBlock = ({ data }) => (
    <>
      {" "}{data.text}{" "}
      <Bubble number={data.num} items={"input"} />
      <View>
        <ReadingText_inputs
          QNum={data.qNum}
          TestName="Actual-Test-1"
          AnswerData={RightAnswers && RightAnswers[data.num - 1]}
          ExplainDataObj={{
            number: data.num,
            Ans1: "",
            hiddenWord: "",
            hiddenWord2: "",
            keyWords: "Aril, lacy red covering, source of mace.",
            explain:
              "In Paragraph A, the aril, a lacy red or crimson covering around the seed, is identified as the source of mace, a separate spice extracted from the nutmeg fruit.",
          }}
        />
      </View>
    </>
  );


  const SelectQuestionBlock = ({ data, items }) => (
    <View style={styles.Select_container}>
      <Text style={styles.RadioText}>
        <Bubble number={data.number} items={"select"} />{" "}
        {data.text}{" "}
        <View style={{ marginLeft: 3, transform: [{ translateY: 15 }] }}>
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
      <Text style={[styles.sectionTitle, { color: 'purple' }]}>Section 1</Text>

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
        <Text style={styles.questionTitle}>Questions 1–6</Text>
        <Text style={styles.instruction}>Write True, False or Not Given.</Text>
      </View>
      {/* Question Number 1 - 6 */}
      <View className="Questions">
        {questionList.map((q, index) => (
          <View key={q.num} style={styles.Select_container}>
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
                <Text style={{ color: 'white', fontSize: 12 }}>{q.num}</Text>
              </View>
              {` ${q.text} `}
              <View
                style={{
                  marginLeft: 3,
                  transform: [
                    {
                      translateY:
                        q.num === 6 && readingTestName != '' ? 24 : 22,
                    },
                  ],
                }}
              >
                <TF_AZ_IX_inputs
                  QNum={`ques${q.num}`}
                  TestName="Actual-Test-1"
                  AnswerData={RightAnswers && RightAnswers[index]}
                  options={['TRUE', 'FALSE', 'NOT GIVEN']}
                  ExplainDataObj={{
                    number: q.num,
                    Ans1: '',
                    hiddenWord: '',
                    hiddenWord2: '',
                    keyWords:
                      'Exclusive importers, never revealed the exact location, controlled trade.',
                    explain:
                      'In Paragraph B, it is stated that the Arabs controlled the trade of nutmeg and never revealed its exact source to European buyers. This means that most Europeans did not know where nutmeg was grown.',
                  }}
                />
              </View>
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.questionBlock}>
        <Text style={styles.questionTitle}>Questions 7–13</Text>
        <Text style={styles.instruction}>Complete the summary with suitable words.</Text>
      </View>
      {/* Question Number 7 - 13 */}
      <View className='Questions'>
        <View style={styles.input_container}>
          <Text style={{ fontSize: 13, flexShrink: 1 }}>
            {questionData.map((q, index) => (
              <QuestionBlock key={index} data={q} />
            ))}
          </Text>
        </View>
      </View>

      <View style={{
        marginBottom: 25,
        marginTop: 40
      }}>
        <Text style={[styles.questionTitle, { color: "blue" }]}>Reading Passage - 2</Text>
        <Text style={styles.questionTitle}>Questions 14–21</Text>
        <Text style={styles.instruction}>Match each heading to the paragraph. {"\n"}</Text>
        <View style={styles.headingList}>
          {[
            'i. Variations of language forms',
            'ii. Why grammar is so important',
            'iii. Why English may be considered simple',
            'iv. Possibly the most difficult language of all',
            'v. The complexities of pronunciation',
            'vi. One example of a tonal language',
            'vii. A difficult language for speakers of English',
            'viii. Amusing claims about the difficulty of English',
            'ix. An effective system for measuring time spent',
            'x. Sounds other than vowels',
          ].map((item, index) => (
            <Text key={index} style={styles.headingItem}>
              <Text style={styles.boldText}>{item}</Text>
            </Text>
          ))}
        </View>
      </View>
      {/* Question Number 14 - 21 */}
      <View className='Questions' >
        {paragraphData_14.map((item, index) => (
          <SelectQuestionBlock key={index} data={item} items={['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x']} />
        ))}
      </View>

      <View style={styles.questionBlock}>
        <Text style={styles.questionTitle}>Questions 22–26</Text>
        <Text style={styles.instruction}>
          Choose if the following questions are True, False or Not Given in Reading Passage 02.
        </Text>
      </View>
      {/* Question Number 21 - 26 */}
      <View className='Questions' >
        {paragraphData_21.map((item, index) => (
          <SelectQuestionBlock key={index} data={item} items={['TRUE', 'FALSE', 'NOT GIVEN']} />
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
    lineHeight: 28
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

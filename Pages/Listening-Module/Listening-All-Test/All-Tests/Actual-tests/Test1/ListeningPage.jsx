// AudioPlayerContainer.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import AudioPlayer from '../../AudioPlayer';
import { ActualAudios_Test1 } from "../../../_Importants/_Data/_TestsAudios"
import { Ionicons } from '@expo/vector-icons';
import AudioControl from '../../AudioBtn';

import TF_AZ_IX_inputs from '../../Inputs/TF_AZ_IX_inputs';
import ReadingText_inputs from '../../Inputs/Text_inputs';
import ReadingSelect_input from '../../Inputs/Select_input';


export default function AudioPlayerContainer({ RightAnswers }) {
  const screenWidth = Dimensions.get('window').width;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [shouldPlay, setShouldPlay] = useState(true);

  const handleAudioPress = (index) => {
    // alert(index)
    setSelectedIndex(index);
    setShouldPlay(true);
  };

  const selectedAudio = ActualAudios_Test1[selectedIndex];

  return (
    <>
      <View style={{ flex: 1, marginBottom: 50 }}>
        <AudioPlayer audio={selectedAudio} shouldPlay={shouldPlay} />

        {/* MANUALLY RENDER BUTTONS BASED ON audioLinks[0], audioLinks[1] */}
        <ScrollView style={{ marginTop: 60 }}>
          <View style={{ marginLeft: 13 }}>
            <Text>Listening Practice Test 1</Text>
          </View>
          <View style={{ marginBottom: 40 }}>
            <AudioControl
              selectedIndex={selectedIndex}
              handleAudioPress={handleAudioPress}
              ActualAudios_Test1={ActualAudios_Test1}
              audioNum={0}
            />
            {/* 1- 10  Contents and Questions here  */}
            <View style={{ paddingHorizontal: 16, }}>
              <View>
                <Text style={styles.questionInstruction}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Questions 1–6{'\n'}
                  </Text>
                  Complete the notes.{'\n'}
                  Write NO MORE THAN THREE WORDS OR A NUMBER for each answer.
                </Text>
              </View>
              {/* Questions */}
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>School Excursion {"\n"} {"\n"}</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>SDay: Wednesday (Example) {"\n"}</Text>
                <View style={styles.input_container}>
                  <Text style={styles.RadioText}>
                    Destination: {" "}
                    <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                      <Text style={{ color: 'white', fontSize: 12 }}>1</Text>
                    </View>
                    <View>
                      <ReadingText_inputs
                        QNum="ques1"
                        TestName="Actual-test-1"
                        AnswerData={RightAnswers && RightAnswers[0]}
                      />
                    </View>
                  </Text>

                </View>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Travelling by bus {"\n"}</Text>
                <View style={styles.input_container}>
                  <Text style={styles.RadioText}>
                    Weather: {" "}
                    <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                      <Text style={{ color: 'white', fontSize: 12 }}>2</Text>
                    </View>
                    <View>
                      <ReadingText_inputs
                        QNum="ques2"
                        TestName="Actual-test-1"
                        AnswerData={RightAnswers && RightAnswers[1]}
                      />
                    </View>
                  </Text>
                </View>
                <View style={styles.input_container}>
                  <Text style={styles.RadioText}>
                    Arrival time: {" "}
                    <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                      <Text style={{ color: 'white', fontSize: 12 }}>3</Text>
                    </View>
                    <View>
                      <ReadingText_inputs
                        QNum="ques3"
                        TestName="Actual-test-1"
                        AnswerData={RightAnswers && RightAnswers[2]}
                      />
                    </View>
                  </Text>
                </View>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Activities Planned{"\n"}</Text>
                <View style={styles.input_container}>
                  <Text style={styles.RadioText}>
                    See:
                    {" "}
                    <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                      <Text style={{ color: 'white', fontSize: 12 }}>4</Text>
                    </View>
                    <View>
                      <ReadingText_inputs
                        QNum="ques4"
                        TestName="Actual-test-1"
                        AnswerData={RightAnswers && RightAnswers[3]}
                      />
                    </View>
                  </Text>
                </View>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Eat: Catered lunch{"\n"}</Text>
                <View style={styles.input_container}>
                  <Text style={styles.RadioText}>
                    Attend:
                    {" "}
                    <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                      <Text style={{ color: 'white', fontSize: 12 }}>5</Text>
                    </View>
                    <View>
                      <ReadingText_inputs
                        QNum="ques5"
                        TestName="Actual-test-1"
                        AnswerData={RightAnswers && RightAnswers[4]}
                      />
                    </View>
                  </Text>
                </View>
                <View style={styles.input_container}>
                  <Text style={styles.RadioText}>
                    Return time:
                    {" "}
                    <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                      <Text style={{ color: 'white', fontSize: 12 }}>6</Text>
                    </View>
                    <View>
                      <ReadingText_inputs
                        QNum="ques6"
                        TestName="Actual-test-1"
                        AnswerData={RightAnswers && RightAnswers[5]}
                      />
                    </View>
                  </Text>
                </View>

              </View>
              <View>
                <Text style={styles.questionInstruction}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Questions 7–10{'\n'}
                  </Text>
                  Complete the table.{'\n'}
                  Write ONE WORD ONLY for each answer.
                </Text>
              </View>
              {/* Questions */}
              <View style={styles.boxStyle}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ width: '50%' }}>
                    <Text style={{ textAlign: 'start' }}>Nationality</Text>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ textAlign: 'right' }}>%</Text>
                  </View>
                </View>
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1,
                  borderTopColor: '#ccc', paddingTop: 10
                }}>
                  <View style={{ width: '50%' }}>
                    <View style={styles.input_container}>
                      <Text style={styles.RadioText}>
                        <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                          <Text style={{ color: 'white', fontSize: 12 }}>7</Text>
                        </View>
                        <View>
                          <ReadingText_inputs
                            QNum="ques7"
                            TestName="Actual-test-1"
                            AnswerData={RightAnswers && RightAnswers[6]}
                          />
                        </View>
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ textAlign: 'right' }}>26</Text>
                  </View>
                </View>
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1,
                  borderTopColor: '#ccc', paddingTop: 10
                }}>
                  <View style={{ width: '50%' }}>
                    <View style={styles.input_container}>
                      <Text style={styles.RadioText}>
                        <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                          <Text style={{ color: 'white', fontSize: 12 }}>8</Text>
                        </View>
                        <View>
                          <ReadingText_inputs
                            QNum="ques8"
                            TestName="Actual-test-1"
                            AnswerData={RightAnswers && RightAnswers[7]}
                          />
                        </View>
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ textAlign: 'right' }}>25</Text>
                  </View>
                </View>
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1,
                  borderTopColor: '#ccc', paddingTop: 10
                }}>
                  <View style={{ width: '50%' }}>
                    <View style={styles.input_container}>
                      <Text style={styles.RadioText}>
                        <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                          <Text style={{ color: 'white', fontSize: 12 }}>9</Text>
                        </View>
                        <View>
                          <ReadingText_inputs
                            QNum="ques9"
                            TestName="Actual-test-1"
                            AnswerData={RightAnswers && RightAnswers[8]}
                          />
                        </View>
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ textAlign: 'right' }}>16</Text>
                  </View>
                </View>
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1,
                  borderTopColor: '#ccc', paddingTop: 10
                }}>
                  <View style={{ width: '50%' }}>
                    <View style={styles.input_container}>
                      <Text style={styles.RadioText}>
                        <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                          <Text style={{ color: 'white', fontSize: 12 }}>10</Text>
                        </View>
                        <View>
                          <ReadingText_inputs
                            QNum="ques10"
                            TestName="Actual-test-1"
                            AnswerData={RightAnswers && RightAnswers[9]}
                          />
                        </View>
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ textAlign: 'right' }}>8</Text>
                  </View>
                </View>
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1,
                  borderTopColor: '#ccc', paddingTop: 10
                }}>
                  <View style={{ width: '50%' }}>
                    <Text style={{ textAlign: 'start' }}>Saudi</Text>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ textAlign: 'right' }}>3</Text>
                  </View>
                </View>
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1,
                  borderTopColor: '#ccc', paddingTop: 10
                }}>
                  <View style={{ width: '50%' }}>
                    <Text style={{ textAlign: 'start' }}>Others</Text>
                  </View>
                  <View style={{ width: '50%', }}>
                    <Text style={{ textAlign: 'right' }}>7</Text>
                  </View>
                </View>
              </View>
              <View>

              </View>
            </View>
          </View>

          <View style={{ marginBottom: 40 }}>
            <AudioControl
              selectedIndex={selectedIndex}
              handleAudioPress={handleAudioPress}
              ActualAudios_Test1={ActualAudios_Test1}
              audioNum={1}
            />
            {/* 11 - 20  Contents and Questions here  */}
            <View style={{ paddingHorizontal: 16, }}>
              <View>
                <Text style={styles.questionInstruction}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Questions 11–15{'\n'}
                  </Text>
                  Choose the correct letter, A, B, or C
                </Text>
              </View>
            </View>
            {/* Questions */}
            <View style={{ paddingHorizontal: 16, }}>
              <View style={styles.container}>
                <ReadingSelect_input
                  inputOptions={['A', 'B', 'C']}
                  QNum="ques11"
                  TestName="Actual-test-1"
                  AnswerData={RightAnswers && RightAnswers[10]}
                  contentsObj={{
                    Title: 'The company deals mostly with:',
                    AData: 'Big cities.',
                    BData: 'Nature holidays.',
                    CData: 'Nepal.',
                  }}
                />

                <ReadingSelect_input
                  inputOptions={['A', 'B', 'C']}
                  QNum="ques12"
                  TestName="Actual-test-1"
                  AnswerData={RightAnswers && RightAnswers[11]}
                  contentsObj={{
                    Title: 'The overseas consultants deal mostly with:',
                    AData: 'Asia.',
                    BData: 'North America.',
                    CData: 'Europe.',
                  }}
                />

                <ReadingSelect_input
                  inputOptions={['A', 'B', 'C']}
                  QNum="ques13"
                  TestName="Actual-test-1"
                  AnswerData={RightAnswers && RightAnswers[12]}
                  contentsObj={{
                    Title: 'For deserts and gorges, customers should come in the:',
                    AData: 'Morning.',
                    BData: 'Afternoon.',
                    CData: 'Night.',
                  }}
                />

                <ReadingSelect_input
                  inputOptions={['A', 'B', 'C']}
                  QNum="ques14"
                  TestName="Actual-test-1"
                  AnswerData={RightAnswers && RightAnswers[13]}
                  contentsObj={{
                    Title: 'Trips to regional locations are good because:',
                    AData: 'The buses are comfortable.',
                    BData: 'There is storage for suitcases.',
                    CData: 'They can be seen quickly.',
                  }}
                />

                <ReadingSelect_input
                  inputOptions={['A', 'B', 'C']}
                  QNum="ques15"
                  TestName="Actual-test-1"
                  AnswerData={RightAnswers && RightAnswers[14]}
                  contentsObj={{
                    Title: 'SleekLine buses are particularly known for their:',
                    AData: 'Service.',
                    BData: 'Size.',
                    CData: 'Comfort.',
                  }}
                />
              </View>
            </View>
            <View style={{ paddingHorizontal: 16, }}>
              <View>
                <Text style={styles.questionInstruction}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Questions 17–20{'\n'}
                  </Text>
                  Identify the rooms in the office plan. {'\n'}
                  Choose the correct letter, A-G, next to the questions.
                </Text>
              </View>
              <View style={{ marginTop: 16, alignItems: 'center' }}>
                <Image
                  source={require('../../../../../../assets/images/listening-images/Actual-test1-image1.jpg')} // Make sure your image is in the correct path
                  style={{ width: 300, height: 200, resizeMode: 'contain' }}
                />
              </View>
            </View>
            {/* Questions */}
            <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
              <View style={styles.Select_container}>
                <Text style={styles.RadioText}>
                  <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 8 }] }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>16</Text>
                  </View>
                  {" "}Local Tours{" "}
                  <View style={{ marginLeft: 3, transform: [{ translateY: 15 }] }}>
                    <TF_AZ_IX_inputs
                      QNum="ques16"
                      TestName="Actual-test-1"
                      AnswerData={RightAnswers && RightAnswers[15]}
                      options={['A', 'B', 'C', 'D', 'E', 'F', 'G']}
                    />
                  </View>
                </Text>
              </View>

              <View style={styles.Select_container}>
                <Text style={styles.RadioText}>
                  <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 8 }] }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>17</Text>
                  </View>
                  {" "}Interstate Tours{" "}
                  <View style={{ marginLeft: 3, transform: [{ translateY: 15 }] }}>
                    <TF_AZ_IX_inputs
                      QNum="ques17"
                      TestName="Actual-test-1"
                      AnswerData={RightAnswers && RightAnswers[16]}
                      options={['A', 'B', 'C', 'D', 'E', 'F', 'G']}
                    />
                  </View>
                </Text>
              </View>

              <View style={styles.Select_container}>
                <Text style={styles.RadioText}>
                  <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 8 }] }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>18</Text>
                  </View>
                  {" "}International Tours{" "}
                  <View style={{ marginLeft: 3, transform: [{ translateY: 15 }] }}>
                    <TF_AZ_IX_inputs
                      QNum="ques18"
                      TestName="Actual-test-1"
                      AnswerData={RightAnswers && RightAnswers[17]}
                      options={['A', 'B', 'C', 'D', 'E', 'F', 'G']}
                    />
                  </View>
                </Text>
              </View>

              <View style={styles.Select_container}>
                <Text style={styles.RadioText}>
                  <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 8 }] }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>19</Text>
                  </View>
                  {" "}Asian Region{" "}
                  <View style={{ marginLeft: 3, transform: [{ translateY: 15 }] }}>
                    <TF_AZ_IX_inputs
                      QNum="ques19"
                      TestName="Actual-test-1"
                      AnswerData={RightAnswers && RightAnswers[18]}
                      options={['A', 'B', 'C', 'D', 'E', 'F', 'G']}
                    />
                  </View>
                </Text>
              </View>

              <View style={styles.Select_container}>
                <Text style={styles.RadioText}>
                  <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 8 }] }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>20</Text>
                  </View>
                  {" "}General Office{" "}
                  <View style={{ marginLeft: 3, transform: [{ translateY: 15 }] }}>
                    <TF_AZ_IX_inputs
                      QNum="ques20"
                      TestName="Actual-test-1"
                      AnswerData={RightAnswers && RightAnswers[19]}
                      options={['A', 'B', 'C', 'D', 'E', 'F', 'G']}
                    />
                  </View>
                </Text>
              </View>


            </View>
          </View>

          {/* section 3  */}

          <View style={{ marginBottom: 40 }}>
            <AudioControl
              selectedIndex={selectedIndex}
              handleAudioPress={handleAudioPress}
              ActualAudios_Test1={ActualAudios_Test1}
              audioNum={2}
            />
            {/* 21 - 30  Contents and Questions here  */}
            <View style={{ paddingHorizontal: 16, }}>
              <View>
                <Text style={styles.questionInstruction}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Questions 21–24{'\n'}
                  </Text>
                  Complete the timetable. {'\n'}

                  Write the correct letter, A-H, for each answer.
                </Text>
              </View>
              {/* Questions */}
              <View >
                <View style={styles.boxStyle}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '50%' }}>
                      <Text style={{ textAlign: 'start', fontWeight: 'bold' }}>Morning</Text>
                    </View>
                    <View style={{ width: '50%', }}>
                      <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>Afternoon</Text>
                    </View>
                  </View>
                  <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1,
                    borderTopColor: '#ccc', paddingTop: 10
                  }}>
                    <View style={{ width: '40%', }}>
                      <Text >26</Text>
                    </View>
                    <View style={{ width: '20%', }}>
                      <Text style={{ fontSize: 12 }}>Opening Lecture</Text>
                    </View>
                    <View style={{ width: '40%' }}>
                      <View style={styles.input_container}>
                        <Text style={styles.RadioText}>
                          <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>21</Text>
                          </View>
                          <View>
                            <ReadingText_inputs
                              QNum="ques21"
                              TestName="Actual-test-1"
                              AnswerData={RightAnswers && RightAnswers[20]}
                            />
                          </View>
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1,
                    borderTopColor: '#ccc', paddingTop: 10
                  }}>
                    <View style={{ width: '40%', }}>
                      <Text >Monday</Text>
                    </View>
                    <View style={{ width: '40%' }}>
                      <View style={styles.input_container}>
                        <Text style={styles.RadioText}>
                          <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>22</Text>
                          </View>
                          <View>
                            <ReadingText_inputs
                              QNum="ques22"
                              TestName="Actual-test-1"
                              AnswerData={RightAnswers && RightAnswers[21]}
                            />
                          </View>
                        </Text>
                      </View>
                    </View>
                    <View style={{ width: '20%', }}>
                      <Text style={{ fontSize: 12 }}>Study Skills</Text>
                    </View>
                  </View>
                  <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1,
                    borderTopColor: '#ccc', paddingTop: 10
                  }}>
                    <View style={{ width: '40%', }}>
                      <Text >Wednesday</Text>
                    </View>
                    <View style={{ width: '20%', }}>
                      <Text style={{ fontSize: 12 }}>X</Text>
                    </View>
                    <View style={{ width: '40%' }}>
                      <View style={styles.input_container}>
                        <Text style={styles.RadioText}>
                          <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>23</Text>
                          </View>
                          <View>
                            <ReadingText_inputs
                              QNum="ques23"
                              TestName="Actual-test-1"
                              AnswerData={RightAnswers && RightAnswers[22]}
                            />
                          </View>
                        </Text>
                      </View>
                    </View>

                  </View>
                  <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1,
                    borderTopColor: '#ccc', paddingTop: 10
                  }}>
                    <View style={{ width: '40%', }}>
                      <Text >Thursday</Text>
                    </View>
                    <View style={{ width: '20%', }}>
                      <Text style={{ fontSize: 12 }}>X</Text>
                    </View>
                    <View style={{ width: '40%', }}>
                      <Text style={{ fontSize: 12, textAlign: 'right' }}>X</Text>
                    </View>

                  </View>
                  <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1,
                    borderTopColor: '#ccc', paddingTop: 10
                  }}>
                    <View style={{ width: '40%', }}>
                      <Text >Friday</Text>
                    </View>
                    <View style={{ width: '20%', }}>
                      <Text style={{ fontSize: 12 }}>X</Text>
                    </View>
                    <View style={{ width: '40%' }}>
                      <View style={styles.input_container}>
                        <Text style={styles.RadioText}>
                          <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>24</Text>
                          </View>
                          <View>
                            <ReadingText_inputs
                              QNum="ques2"
                              TestName="Actual-test-1"
                              AnswerData={RightAnswers && RightAnswers[22]}
                            />
                          </View>
                        </Text>
                      </View>
                    </View>

                  </View>
                </View>
              </View>
              <View>
                <View style={{ marginTop: 20 }}>
                  <Text><Text style={{ fontWeight: 'bold' }}>A </Text> {' '}BBQ</Text>
                  <Text><Text style={{ fontWeight: 'bold' }}>B </Text>{' '}Careers lecture</Text>
                  <Text><Text style={{ fontWeight: 'bold' }}>C </Text>{' '}Computer lab visit</Text>
                  <Text><Text style={{ fontWeight: 'bold' }}>D </Text>{' '}Dance</Text>
                  <Text><Text style={{ fontWeight: 'bold' }}>E </Text>{' '}Library tour</Text>
                  <Text><Text style={{ fontWeight: 'bold' }}>F </Text>{' '}Student Union induction</Text>
                  <Text><Text style={{ fontWeight: 'bold' }}>G </Text>{' '}University tour</Text>
                  <Text><Text style={{ fontWeight: 'bold' }}>H </Text>{' '}Legal rights lecture</Text>
                </View>
                <Text style={styles.questionInstruction}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Questions 25 – 30{'\n'}
                  </Text>
                  Complete the labels. {'\n'}
                  Write ONE WORD OR A NUMBER for each answer..
                </Text>

                <View style={{ marginTop: 16, alignItems: 'center' }}>
                  <Image
                    source={require('../../../../../../assets/images/listening-images/Actual-test1-image2.jpg')} // Make sure your image is in the correct path
                    style={{
                      width: screenWidth - 10,
                      height: 250, // You can adjust height as needed or calculate it for aspect ratio
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </View>
              {/* Questions */}
              <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
                {[25, 26, 27, 28, 29, 30].map((num, index) => (
                  <View key={num} style={styles.input_container}>
                    <Text style={styles.RadioText}>
                      <View
                        style={{
                          width: 25,
                          height: 25,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 100,
                          backgroundColor: 'blue',
                          transform: [{ translateY: 5 }],
                        }}
                      >
                        <Text style={{ color: 'white', fontSize: 12 }}>{num}</Text>
                      </View>
                      <View>
                        <ReadingText_inputs
                          QNum={`ques${num}`}
                          TestName="Actual-test-1"
                          AnswerData={RightAnswers && RightAnswers[num - 1]}
                        />
                      </View>
                    </Text>
                  </View>
                ))}
              </View>

            </View>

          </View>

          {/* section 4  */}

          <View style={{ marginBottom: 40 }}>
            <AudioControl
              selectedIndex={selectedIndex}
              handleAudioPress={handleAudioPress}
              ActualAudios_Test1={ActualAudios_Test1}
              audioNum={3}
            />
            {/* 21 - 30  Contents and Questions here  */}
            <View style={{ paddingHorizontal: 16, }}>
              <View>
                <Text style={styles.questionInstruction}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Questions 31–34{'\n'}
                  </Text>
                  Complete the sentences {'\n'}
                  Write NO MORE THAN TWO WORDS for each answer. {'\n'}
                </Text>
              </View>
              {/* Questions */}
              <View>
                {[
                  'Behavior in parks is controlled by',
                  'Insect numbers are reduced by having',
                  'A wilderness park does not have any',
                  'Observing trees and lying in the grass are examples of',
                ].map((questionText, index) => {
                  const num = 31 + index;
                  return (
                    <View key={num} style={styles.input_container}>
                      <Text style={styles.RadioText}>
                        {questionText + ' '}
                        <View
                          style={{
                            width: 25,
                            height: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 100,
                            backgroundColor: 'blue',
                            transform: [{ translateY: 5 }],
                          }}
                        >
                          <Text style={{ color: 'white', fontSize: 12 }}>{num}</Text>
                        </View>
                        <View>
                          <ReadingText_inputs
                            QNum={`ques${num}`}
                            TestName="Actual-test-1"
                            AnswerData={RightAnswers && RightAnswers[num - 1]}
                          />
                        </View>
                      </Text>
                    </View>
                  );
                })}

              </View>
              <View>
                <Text style={styles.questionInstruction}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Questions 35–40{'\n'}
                  </Text>
                  Complete the sentences {'\n'}
                  Write NO MORE THAN TWO WORDS for each answer. {'\n'}
                </Text>
              </View>
              {/* Questions */}
              <View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>PARKS</Text>
                <View style={styles.boxStyle}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '30%' }}>
                      <Text style={{ textAlign: 'start', fontWeight: 'bold' }}>1000 years ago</Text>
                    </View>
                    <View style={{ width: '70%', }}>
                      <View style={styles.input_container}>
                        <Text style={styles.RadioText}>
                          {" "} Behavior in parks is controlled by {" "}
                          <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>35</Text>
                          </View>
                          <View>
                            <ReadingText_inputs
                              QNum="ques35"
                              TestName="Actual-test-1"
                              AnswerData={RightAnswers && RightAnswers[34]}
                            />
                          </View>
                        </Text>
                      </View>
                      <View style={styles.input_container}>
                        <Text style={styles.RadioText}>
                          <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>36</Text>
                          </View>
                          <View>
                            <ReadingText_inputs
                              QNum="ques36"
                              TestName="Actual-test-1"
                              AnswerData={RightAnswers && RightAnswers[35]}
                            />
                          </View>
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1,
                    borderTopColor: '#ccc', paddingTop: 10
                  }}>
                    <View style={{ width: '30%' }}>
                      <Text style={{ textAlign: 'start', fontWeight: 'bold' }}>Princes Park</Text>
                    </View>
                    <View style={{ width: '70%' }}>
                      <View style={styles.input_container}>
                        <Text style={styles.RadioText}>
                          {" "} land originally worth £ {" "}
                          <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>37</Text>
                          </View>
                          <View>
                            <ReadingText_inputs
                              QNum="ques37"
                              TestName="Actual-test-1"
                              AnswerData={RightAnswers && RightAnswers[36]}
                            />
                          </View>
                          {" "} designed by Joseph Paxton in the middle was a {" "}
                        </Text>
                      </View>
                      <View style={styles.input_container}>
                        <Text style={styles.RadioText}>
                          <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>38</Text>
                          </View>
                          <View>
                            <ReadingText_inputs
                              QNum="ques38"
                              TestName="Actual-test-1"
                              AnswerData={RightAnswers && RightAnswers[37]}
                            />
                          </View>
                        </Text>
                      </View>
                    </View>

                  </View>
                  <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1,
                    borderTopColor: '#ccc', paddingTop: 10
                  }}>
                    <View style={{ width: '40%' }}>
                      <Text style={{ textAlign: 'start', fontWeight: 'bold' }}>PNeighborhood Parks</Text>
                    </View>
                    <View style={{ width: '60%' }}>
                      <View style={styles.input_container}>
                        <Text style={styles.RadioText}>
                          {" "} now regarded as a {" "}
                          <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>39</Text>
                          </View>
                          <View>
                            <ReadingText_inputs
                              QNum="ques39"
                              TestName="Actual-test-1"
                              AnswerData={RightAnswers && RightAnswers[38]}
                            />
                          </View>
                        </Text>
                      </View>
                      <View style={styles.input_container}>
                        <Text style={styles.RadioText}>
                          {" "} satisfy a natural desire can be famous, e.g. in {" "}
                          <View style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: 'blue', transform: [{ translateY: 5 }] }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>40</Text>
                          </View>
                          <View>
                            <ReadingText_inputs
                              QNum="ques40"
                              TestName="Actual-test-1"
                              AnswerData={RightAnswers && RightAnswers[39]}
                            />
                          </View>
                        </Text>
                      </View>
                    </View>

                  </View>
                </View>
              </View>

            </View>

          </View>
        </ScrollView>
      </View>
    </>
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
  questionInstruction: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
    marginBottom: 16,
    textAlign: 'left',
    marginTop: 20
  },
  boxStyle: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
  }

});

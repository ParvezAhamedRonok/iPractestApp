import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { QuestionNumObj, Reading_Test_All_Answers_Dataobj } from "./_Data/_TestAnswers"

const { width, height } = Dimensions.get('window');

const Preview = ({ handleReviewPage }) => {



  return (
    <Modal
      transparent
      animationType="fade"
      visible={true}
      onRequestClose={handleReviewPage}
    >
      <View style={styles.overlay}>
        <View style={styles.popupContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Review</Text>
            <TouchableOpacity onPress={handleReviewPage} style={styles.closeBtn}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
            {Array.from({ length: 40 }, (_, i) => {
              const index = i + 1;
              const answer = QuestionNumObj[`ques${index}`];
              return (
                <View key={index} style={styles.answerRow}>
                  <Text style={styles.qNum}>{index}:</Text>
                  <Text style={styles.answerText}>{answer}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: width * 0.9,
    maxHeight: height * 0.8,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    color:'red'
  },
  scrollArea: {
    marginTop: 10,
  },
  answerRow: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'flex-start',
  },
  qNum: {
    fontWeight: 'bold',
    width: 30,
    fontSize: 16,
    color: '#555',
  },
  answerText: {
    flex: 1,
    fontSize: 16,
    color: '#444',
  },
});

export default Preview;

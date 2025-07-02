import React, { useRef, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';

const { width, height } = Dimensions.get('window');

// 🔽 Import all transcript components here (Actual + Cambridge)

// === Actual Test Transcripts ===
import {
  Actual_transcript1,
  // Actual_transcript2, Actual_transcript3, Actual_transcript4, Actual_transcript5,
  // Actual_transcript6, Actual_transcript7, Actual_transcript8, Actual_transcript9, Actual_transcript10,
  // Actual_transcript11, Actual_transcript12, Actual_transcript13, Actual_transcript14, Actual_transcript15,
  // Actual_transcript16, Actual_transcript17, Actual_transcript18, Actual_transcript19, Actual_transcript20,
  // Actual_transcript21, Actual_transcript22, Actual_transcript23, Actual_transcript24, Actual_transcript25,
  // Actual_transcript26, Actual_transcript27, Actual_transcript28, Actual_transcript29, Actual_transcript30,

  // === Cambridge Test Transcripts ===
  // CambridgeTrans_19_Test1, CambridgeTrans_19_Test2, CambridgeTrans_19_Test3, CambridgeTrans_19_Test4,
  // CambridgeTrans_18_Test1, CambridgeTrans_18_Test2, CambridgeTrans_18_Test3, CambridgeTrans_18_Test4,
  // CambridgeTrans_17_Test1, CambridgeTrans_17_Test2, CambridgeTrans_17_Test3, CambridgeTrans_17_Test4,
  // CambridgeTrans_16_Test1, CambridgeTrans_16_Test2, CambridgeTrans_16_Test3, CambridgeTrans_16_Test4,
  // CambridgeTrans_15_Test1, CambridgeTrans_15_Test2, CambridgeTrans_15_Test3, CambridgeTrans_15_Test4,
} from '../All-Tests/StoreTests';

// 🔁 Map test ID string to the corresponding component
const testComponents = {
  'Actual-test-1': Actual_transcript1,
  // 'Actual-test-2': Actual_transcript2,
  // 'Actual-test-3': Actual_transcript3,
  // 'Actual-test-4': Actual_transcript4,
  // 'Actual-test-5': Actual_transcript5,
  // 'Actual-test-6': Actual_transcript6,
  // 'Actual-test-7': Actual_transcript7,
  // 'Actual-test-8': Actual_transcript8,
  // 'Actual-test-9': Actual_transcript9,
  // 'Actual-test-10': Actual_transcript10,
  // 'Actual-test-11': Actual_transcript11,
  // 'Actual-test-12': Actual_transcript12,
  // 'Actual-test-13': Actual_transcript13,
  // 'Actual-test-14': Actual_transcript14,
  // 'Actual-test-15': Actual_transcript15,
  // 'Actual-test-16': Actual_transcript16,
  // 'Actual-test-17': Actual_transcript17,
  // 'Actual-test-18': Actual_transcript18,
  // 'Actual-test-19': Actual_transcript19,
  // 'Actual-test-20': Actual_transcript20,
  // 'Actual-test-21': Actual_transcript21,
  // 'Actual-test-22': Actual_transcript22,
  // 'Actual-test-23': Actual_transcript23,
  // 'Actual-test-24': Actual_transcript24,
  // 'Actual-test-25': Actual_transcript25,
  // 'Actual-test-26': Actual_transcript26,
  // 'Actual-test-27': Actual_transcript27,
  // 'Actual-test-28': Actual_transcript28,
  // 'Actual-test-29': Actual_transcript29,
  // 'Actual-test-30': Actual_transcript30,

  // 'Cambridge-19-Test1': CambridgeTrans_19_Test1,
  // 'Cambridge-19-Test2': CambridgeTrans_19_Test2,
  // 'Cambridge-19-Test3': CambridgeTrans_19_Test3,
  // 'Cambridge-19-Test4': CambridgeTrans_19_Test4,

  // 'Cambridge-18-Test1': CambridgeTrans_18_Test1,
  // 'Cambridge-18-Test2': CambridgeTrans_18_Test2,
  // 'Cambridge-18-Test3': CambridgeTrans_18_Test3,
  // 'Cambridge-18-Test4': CambridgeTrans_18_Test4,

  // 'Cambridge-17-Test1': CambridgeTrans_17_Test1,
  // 'Cambridge-17-Test2': CambridgeTrans_17_Test2,
  // 'Cambridge-17-Test3': CambridgeTrans_17_Test3,
  // 'Cambridge-17-Test4': CambridgeTrans_17_Test4,

  // 'Cambridge-16-Test1': CambridgeTrans_16_Test1,
  // 'Cambridge-16-Test2': CambridgeTrans_16_Test2,
  // 'Cambridge-16-Test3': CambridgeTrans_16_Test3,
  // 'Cambridge-16-Test4': CambridgeTrans_16_Test4,

  // 'Cambridge-15-Test1': CambridgeTrans_15_Test1,
  // 'Cambridge-15-Test2': CambridgeTrans_15_Test2,
  // 'Cambridge-15-Test3': CambridgeTrans_15_Test3,
  // 'Cambridge-15-Test4': CambridgeTrans_15_Test4,
};

const TranscriptModal = ({ setOpenTranscripts }) => {
  const { testID } = useLocalSearchParams();
  const opacity = useRef(new Animated.Value(0)).current;
  const TestComponent = testComponents[testID];

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Modal
      transparent
      animationType="fade"
      visible={true}
      onRequestClose={() => setOpenTranscripts(false)}
    >
      <Animated.View style={[styles.overlay, { opacity }]}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Transcript</Text>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setOpenTranscripts(false)}
            >
              <Ionicons name="close" size={24} color="red" />
            </TouchableOpacity>
          </View>

          {/* Transcript Body */}
          <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
            {TestComponent ? (
              <TestComponent />
            ) : (
              <Text style={styles.notFoundText}>Transcript not found for this test.</Text>
            )}
          </ScrollView>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default TranscriptModal;

// === Styles ===
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width * 0.95,
    height: height * 0.85,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
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
  scrollArea: {
    marginTop: 10,
  },
  notFoundText: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});

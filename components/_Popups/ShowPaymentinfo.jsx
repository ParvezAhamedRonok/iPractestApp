import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStateContext } from '@/contexts/ContextProvider';
import { useRouter } from 'expo-router';

export default function ShowPaymentInfo() {
  const { userPaymentStatusCheck, ShowPaymentInfo, setShowPaymentInfo } = useStateContext();
  const [userCountry, setUserCountry] = useState(null);
  const Navigator = useRouter()

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const storedCountry = await AsyncStorage.getItem('setCountry');
        if (storedCountry) setUserCountry(storedCountry);
      } catch (err) {
        console.warn('Error reading country:', err);
      }
    };

    if (ShowPaymentInfo) {
      fetchCountry();
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [ShowPaymentInfo]);

  if (!ShowPaymentInfo) return null;

  const paymentPlans = {
    Starter: (
      <View style={styles.planContainer}>
        <Text style={styles.title}>Starter Plan <Text style={styles.subtitle}>/ 3 Months</Text></Text>
        <View style={styles.list}>
          <Text>✔ 20 Speaking Practice Tests</Text>
          <Text>✔ 44 Reading & Listening Mock Tests</Text>
          <Text>✔ 200+ Writing Evaluation and Mock Tests</Text>
          <Text>✔ 200+ Writing Improvement Feedback</Text>
          <Text>✔ Get All Reading Explanations</Text>
          <Text>✔ Unlimited SOP Creation with AI</Text>
        </View>
      </View>
    ),
    Expert: (
      <View style={styles.planContainer}>
        <Text style={styles.title}>Expert Plan <Text style={styles.subtitle}>/ 3 Months</Text></Text>
        <View style={styles.list}>
          <Text>✔ 40+ Speaking Mock Test</Text>
          <Text>✔ 44 Reading and Listening Mock Test</Text>
          <Text>✔ 400+ Writing Evaluation and Mock Test</Text>
          <Text>✔ 400+ Writing Feedback</Text>
          <Text>✔ Get all Reading Explanations</Text>
          <Text>✔ Unlimited SOP creation with AI</Text>
        </View>
      </View>
    ),
    RegularCourse: (
      <View style={styles.planContainer}>
        <Text style={styles.title}>Regular Course</Text>
        <Text style={styles.price}>৳ 5999 <Text style={styles.subtitle}>/ 3 Months</Text></Text>
        <View style={styles.list}>
          <Text>✔ 3-Month Course (3 Classes Per Week)</Text>
          <Text>✔ 36 IELTS Classes (Reading, Speaking, Writing, Listening)</Text>
          <Text>✔ 1 Review and Exam Class</Text>
          <Text>✔ 20 Mock Test Exams</Text>
          <Text>✔ All Lecture Materials Provided</Text>
          <Text>✔ Contact Now: +880 1643914634</Text>
        </View>
      </View>
    ),
    CrashCourse: (
      <View style={styles.planContainer}>
        <Text style={styles.title}>Crash Course</Text>
        <View style={styles.list}>
          <Text>✔ 1-Month Course (4 Classes Per Week)</Text>
          <Text>✔ 16 IELTS Classes (Reading, Speaking, Writing, Listening)</Text>
          <Text>✔ 1 Review and Exam Class</Text>
          <Text>✔ 10 Mock Test Exams</Text>
          <Text>✔ All Lecture Materials Provided</Text>
          <Text>✔ Contact Now: +880 1643914634</Text>
        </View>
      </View>
    ),
    FoundationCourse: (
      <View style={styles.planContainer}>
        <Text style={styles.title}>Foundation Course</Text>
        <View style={styles.list}>
          <Text>✔ 4-Month Course (3 Classes Per Week)</Text>
          <Text>✔ 24 Classes for Grammar Foundation</Text>
          <Text>✔ 24 IELTS Classes (Reading, Speaking, Writing, Listening)</Text>
          <Text>✔ 1 Review and Exam Class</Text>
          <Text>✔ 20 Mock Test Exams (All Lecture Materials Provided)</Text>
          <Text>✔ Contact Now: +880 1643914634</Text>
        </View>
      </View>
    ),
  };

  return (
    <Modal transparent visible={ShowPaymentInfo} animationType="none">
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.modalBox,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <ScrollView>
            {paymentPlans[userPaymentStatusCheck] || (
              <Text style={{ textAlign: 'center', fontSize: 16 }}>No subscription plan selected</Text>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowPaymentInfo(false)}
              activeOpacity={0.8}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            {
              !userPaymentStatusCheck && (
                <TouchableOpacity
                  style={styles.closeButton2}
                  onPress={() => {
                    setShowPaymentInfo(false)
                    Navigator.push('/Payment-Pages/Billing-Page')
                  }}
                  activeOpacity={0.8}
                >
                  <Text style={styles.closeButtonText}>Get Subscription</Text>
                </TouchableOpacity>
              )
            }

          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 12,
    padding: 20,
    elevation: 10,
    maxHeight: '90%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
  },
  list: {
    marginTop: 10,
    gap: 6,
  },
  closeButton: {
    marginTop: 24,
    backgroundColor: '#EF4444',
    paddingVertical: 14,
    borderRadius: 8,
  },
  closeButton2: {
    marginTop: 24,
    backgroundColor: '#DAA520', // classic goldenrod hex — clean and simple gold
    paddingVertical: 14,
    borderRadius: 8,
  },

  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

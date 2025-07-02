import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { POST_SENDOTP_TO_USER_VIA_SMSNET_BD } from "../../assets/URL's/AllUrl";

export default function GetBDUserNumber({
  setOTP_Popup,
  user_Obj_Data,
  after_Passed_func,
  setStore_user_Number,
}) {
  const [countryInfo, setCountryInfo] = useState();
  const [storingUserNumber, setStoringUserNumber] = useState('');
  const [changePopUp, setChangePopup] = useState(true);
  const [storingOTPCode, setStoringOTPCode] = useState('');
  const [matchOTP, setMatchOTP] = useState('');

  useEffect(() => {
    const getCountryInfo = async () => {
      try {
        const value = await AsyncStorage.getItem('CountryInfo');
        if (value !== null) setCountryInfo(JSON.parse(value));
      } catch (e) {
        console.log('Error loading country info', e);
      }
    };
    getCountryInfo();
  }, []);

  const sendOTPToNumber = async () => {
    try {
      const response = await fetch(POST_SENDOTP_TO_USER_VIA_SMSNET_BD, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userNumber: storingUserNumber }),
      });

      const data = await response.json();
      if (response.ok) {
        setStoringOTPCode(data.message);
        setChangePopup(false);
      } else {
        Alert.alert('Error', data.message || 'Something went wrong');
        setOTP_Popup(false);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Network Error', 'Unable to send OTP. Check your connection.');
      setOTP_Popup(false);
    }
  };

  const checkOTPCodeThenSaveToDatabase = () => {
    const OTP_Backend = Number(storingOTPCode);
    const OTP_User = Number(matchOTP);

    if (OTP_Backend === OTP_User) {
      setStore_user_Number(storingUserNumber);
      setOTP_Popup(false);
      after_Passed_func(user_Obj_Data);
    } else {
      Alert.alert('Invalid OTP', 'Please enter the correct OTP sent to your phone.');
    }
  };

  return (
    <Modal visible transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setOTP_Popup(false)}>
            <Ionicons name="close-circle" size={28} color="#999" />
          </TouchableOpacity>

          {changePopUp ? (
            <>
              <Ionicons name="call" size={60} color="#6f11f5" style={styles.iconLarge} />
              <Text style={styles.title}>Verify Your Phone</Text>
              <Text style={styles.subtitle}>
                Enter your mobile number to receive a verification code.
              </Text>
              <View style={styles.inputWrapper}>
                <MaterialIcons name="phone-android" size={20} color="#aaa" />
                <TextInput
                  style={styles.input}
                  placeholder="01XXXXXXXXX"
                  keyboardType="phone-pad"
                  value={storingUserNumber}
                  onChangeText={setStoringUserNumber}
                />
              </View>
              <TouchableOpacity style={styles.primaryBtn} onPress={sendOTPToNumber}>
                <Text style={styles.primaryText}>Send OTP</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Ionicons name="keypad" size={60} color="#6f11f5" style={styles.iconLarge} />
              <Text style={styles.title}>Enter OTP</Text>
              <Text style={styles.subtitle}>We just sent you a verification code.</Text>
              <View style={styles.inputWrapper}>
                <MaterialIcons name="vpn-key" size={20} color="#aaa" />
                <TextInput
                  style={[
                    styles.input,
                    matchOTP.length === 6
                      ? styles.inputSuccess
                      : matchOTP.length > 0
                      ? styles.inputError
                      : null,
                  ]}
                  placeholder="6-digit OTP"
                  keyboardType="numeric"
                  maxLength={6}
                  value={matchOTP}
                  onChangeText={setMatchOTP}
                />
              </View>
              <TouchableOpacity style={styles.primaryBtn} onPress={checkOTPCodeThenSaveToDatabase}>
                <Text style={styles.primaryText}>Verify</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 16,
    padding: 25,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  closeButton: {
    position: 'absolute',
    top: 14,
    right: 14,
    zIndex: 10,
  },
  iconLarge: {
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
    color: '#222',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    marginLeft: 8,
  },
  inputSuccess: {
    borderColor: 'green',
    color: 'green',
  },
  inputError: {
    borderColor: 'red',
    color: 'red',
  },
  primaryBtn: {
    backgroundColor: '#6f11f5',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  primaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

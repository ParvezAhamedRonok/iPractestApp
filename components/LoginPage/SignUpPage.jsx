import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
// import LoadingOverlay from '../LoadingOverlay';
import GetBDUserNumber from './Get-BD-User-Number';
import { SIGNUP_URL, GET_OTP_REQUEST_API_TO_CHECK_USER_HAVE_NUMBER_OR_NOT } from '../../assets/URL\'s/AllUrl';
import { useStateContext } from "@/contexts/ContextProvider";

const SignUpPage = () => {
  const { OpenClose_LogSign_Popup, setOpenClose_LogSign_Popup } = useStateContext();
  const navigation = useNavigation();
  const scrollViewRef = useRef();

  const [countryInfo, setCountryInfo] = useState(null);
  const [referID, setReferID] = useState('');
  const [storeUserNumber, setStoreUserNumber] = useState('');
  const [otpPopup, setOTPPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [agreeRefunds, setAgreeRefunds] = useState(false);
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchLocal = async () => {
      const country = await AsyncStorage.getItem('CountryInfo');
      const ref = await AsyncStorage.getItem('referID');
      if (country) setCountryInfo(JSON.parse(country));
      if (ref) setReferID(ref);
    };
    fetchLocal();
  }, []);

  const nextPath = (path) => navigation.navigate(path);

  const handleChange = (name, value) => {
    setSignUpData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateInputs = () => {
    const { username, email, password } = signUpData;
    let newErrors = {};

    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
    if (!password) newErrors.password = 'Password is required';
    if (!agreeRefunds) newErrors.agreeRefunds = 'You must accept the refund policy';

    setErrors(newErrors);
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateInputs()) return;

    if (countryInfo?.countryName === 'Bangladesh') {
      checkOTPFunction(signUpData.email);
    } else {
      handleSignUpSubmit();
    }
  };

  const checkOTPFunction = async (userEmail) => {
    try {
      const response = await fetch(`${GET_OTP_REQUEST_API_TO_CHECK_USER_HAVE_NUMBER_OR_NOT}${userEmail}`);
      const data = await response.json();
      if (data?.data[0]) {
        handleSignUpSubmit();
      } else {
        setOTPPopup(true);
      }
    } catch (e) {
      setOTPPopup(true);
    }
  };

  const handleSignUpSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(SIGNUP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...signUpData,
          country: countryInfo?.countryName || '',
          countryFlag: countryInfo?.countryFlag || '',
          StoreUserNumber: storeUserNumber,
          referID: referID || '',
          roles: ['user'],
        }),
      });

      const res = await response.json();

      if (res?.token) {
        await AsyncStorage.setItem('loginToken', res.token);
        await AsyncStorage.setItem('userName', res.username);
        await AsyncStorage.setItem('userEmail', res.email);
        await AsyncStorage.setItem('setCountry', res.country);
        await AsyncStorage.setItem('setCountryFlag', res.countryFlag);
        if (res.referID) {
          await AsyncStorage.setItem('referID', res.referID);
        }

        if (OpenClose_LogSign_Popup.includes("Same")) {
          // globalFunction();
          //after one munite letter call that function..
          //  for getting the local data because it's may be take som time
          setTimeout(() => {
            globalFunction();
          }, 1000);
        } else {
          //close login/sign up popup 
          setOpenClose_LogSign_Popup("");
          // nextPath("/User-Dashboard/Dashboard")
          alert("Sign up successful!");
        }
      } else {
        setErrors({ general: 'Invalid information. Please try again.' });
      }
    } catch (e) {
      setErrors({ general: 'Network error. Please check your connection.' });
    }
    setLoading(false);
  };

  if (!OpenClose_LogSign_Popup) return null;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.centeredView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.modalView}
        >
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setOpenClose_LogSign_Popup("")}
          >
            <AntDesign name="close" size={16} color="#6f11f5" />
          </TouchableOpacity>

          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{ paddingBottom: 30 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.tabRow}>
              <TouchableOpacity
                style={styles.signupTab}
                onPress={() => setOpenClose_LogSign_Popup("Login")}
              >
                <AntDesign name="adduser" size={18} color="#6f11f5" />
                <Text style={styles.signupText}>Log in</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginTab}>
                <FontAwesome5 name="user" size={16} color="#fff" />
                <Text style={styles.loginText}>Sign up</Text>
              </TouchableOpacity>
            </View>

            {errors.general && <Text style={styles.error}>{errors.general}</Text>}

            <TextInput
              style={[styles.input, errors.username && styles.errorInput]}
              placeholder="Username"
              value={signUpData.username}
              onChangeText={(value) => handleChange('username', value)}
            />
            {errors.username && <Text style={styles.error}>{errors.username}</Text>}

            <TextInput
              style={[styles.input, errors.email && styles.errorInput]}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={signUpData.email}
              onChangeText={(value) => handleChange('email', value)}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <View style={[styles.passwordInputContainer, errors.password && styles.errorInput]}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={signUpData.password}
                onChangeText={(value) => handleChange('password', value)}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon name={showPassword ? 'eye' : 'eye-slash'} size={18} color="#888" />
              </TouchableOpacity>
            </View>
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <View style={styles.checkboxRow}>
              <CheckBox
                value={agreeRefunds}
                onValueChange={setAgreeRefunds}
                color={agreeRefunds ? '#6f11f5' : undefined}
              />
              <Text style={[styles.checkboxLabel, errors.agreeRefunds && { color: 'red' }]}>
                {'  '}I accept the <Text style={styles.link}>Refunds</Text> & <Text style={styles.link}>Cancellation Policy</Text>
              </Text>
            </View>
            {errors.agreeRefunds && <Text style={styles.error}>{errors.agreeRefunds}</Text>}

            <TouchableOpacity
              style={[styles.button, loading && { opacity: 0.7 }]}
              onPress={handleSubmit}
              disabled={loading}
              activeOpacity={0.9}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="user-plus" size={18} color="#fff" />
                  <Text style={styles.buttonText}> Sign up</Text>
                </View>
              )}
            </TouchableOpacity>

            {otpPopup && (
              <GetBDUserNumber
                setOTP_Popup={setOTPPopup}
                user_Obj_Data={{ userEmail: signUpData.email, userName: signUpData.username }}
                after_Passed_func={handleSignUpSubmit}
                setStore_user_Number={setStoreUserNumber}
              />
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    top: 25, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalView: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    maxHeight: '90%',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 6,
    right: 6,
    padding: 4,
    borderRadius: 20,
    backgroundColor: '#f0eaff',
    zIndex: 10,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
    marginBottom: 5,
  },
  passwordInput: {
    flex: 1,
  },
  button: {
    backgroundColor: '#6f11f5',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkboxLabel: {
    fontSize: 12,
    color: '#444',
    flexShrink: 1,
  },
  link: {
    color: '#6f11f5',
    textDecorationLine: 'underline',
  },
  error: {
    color: 'red',
    marginBottom: 5,
    fontSize: 12,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 26,
    marginTop: 20
  },
  loginTab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6f11f5',
    paddingVertical: 12,
    borderRadius: 14,
    width: '48%',
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: '700',
    fontSize: 16,
  },
  signupTab: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#6f11f5',
    borderRadius: 14,
    paddingVertical: 12,
    width: '48%',
    justifyContent: 'center',
  },
  signupText: {
    color: '#6f11f5',
    marginLeft: 8,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default SignUpPage;

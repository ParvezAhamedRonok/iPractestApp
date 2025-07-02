import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_URL,
  FORGOT_PASSWORD_POST_FOR_CHECK_USER_EMAIL,
  FORGOT_PASSWORD_PUT_FOR_UPDATE_USER_PASSWORD,
} from '../../assets/URL\'s/AllUrl';
import LoadingCom from './LoadingCom';
import logo from '../../assets/images/Practestlogo.png';
import ForgotImg from '../../assets/images/otherImgs/forgotImag-1.png';

const ForgotPasswordScreen = () => {
  const navigation = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState('email'); // 'email', 'code', 'reset', 'error'
  const [serverCode, setServerCode] = useState('');
  const [userCode, setUserCode] = useState('');
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (name, value) => {
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const sendVerificationCode = async () => {
    if (!userInfo.email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(FORGOT_PASSWORD_POST_FOR_CHECK_USER_EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userInfo.email }),
      });

      if (!response.ok) {
        throw new Error('Invalid email address.');
      }

      const data = await response.json();
      console.log(data)
      setServerCode(data.code);
      setStep('code');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = () => {
    console.log(typeof Number(userCode));
       console.log(typeof serverCode)
    if (Number(userCode) === serverCode) {
      setStep('reset');
    } else {
      Alert.alert('Error', 'Verification code does not match.');
    }
  };

  const resetPassword = async () => {
    if (!userInfo.password || !userInfo.confirmPassword) {
      Alert.alert('Error', 'Please fill in all password fields.');
      return;
    }

    if (userInfo.password !== userInfo.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(FORGOT_PASSWORD_PUT_FOR_UPDATE_USER_PASSWORD, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: userInfo.email,
          password: userInfo.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to reset password.');
      }

      const data = await response.json();
      if (data.message === 'success') {
        await loginUser();
      } else {
        throw new Error('Password reset unsuccessful.');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async () => {
    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: userInfo.email,
          password: userInfo.password,
          Devices: '',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.message === 'Too many devices') {
          Alert.alert(
            'Access Blocked',
            'Your password has been changed, but you have logged in with too many devices or browsers. Please login with your previous device or contact support.'
          );
        } else {
          throw new Error('Login failed.');
        }
        return;
      }

      const data = await response.json();
      await AsyncStorage.setItem('loginToken', data.token);
      await AsyncStorage.setItem('userName', data.username);
      await AsyncStorage.setItem('userEmail', data.email);
      await AsyncStorage.setItem('setCountry', data.country);
      await AsyncStorage.setItem('setCountryFlag', data.countryFlag);

      if (data.referID) {
        await AsyncStorage.setItem('referID', data.referID);
      }

      navigation.push('User-Dashboard/Dashboard');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const renderContent = () => {
    switch (step) {
      case 'email':
        return (
          <View style={styles.formContainer}>
            <Text style={styles.title}>Enter your email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={userInfo.email}
              onChangeText={(text) => handleChange('email', text)}
            />
            <TouchableOpacity style={styles.button} onPress={sendVerificationCode}>
              {loading ? <LoadingCom /> : <Text style={styles.buttonText}>Send Code</Text>}
            </TouchableOpacity>
          </View>
        );
      case 'code':
        return (
          <View style={styles.formContainer}>
            <Text style={styles.title}>Verify your email</Text>
            <Text style={styles.subtitle}>
              Please enter the 6-digit code sent to {userInfo.email}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Verification Code"
              keyboardType="number-pad"
              value={userCode}
              onChangeText={setUserCode}
            />
            <TouchableOpacity style={styles.button} onPress={verifyCode}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        );
      case 'reset':
        return (
          <View style={styles.formContainer}>
            <Text style={styles.title}>Reset Password</Text>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              secureTextEntry
              value={userInfo.password}
              onChangeText={(text) => handleChange('password', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={userInfo.confirmPassword}
              onChangeText={(text) => handleChange('confirmPassword', text)}
            />
            <TouchableOpacity style={styles.button} onPress={resetPassword}>
              {loading ? <LoadingCom /> : <Text style={styles.buttonText}>Reset Password</Text>}
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      {renderContent()}
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 80,
    alignSelf: 'center',
    marginBottom: 30,
  },
  formContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

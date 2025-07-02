import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ActivityIndicator, Alert,
  Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from 'expo-checkbox';
import { useRouter, usePathname } from 'expo-router';
import { FontAwesome5, AntDesign, MaterialIcons, Feather, Entypo } from '@expo/vector-icons';

import { LOGIN_URL } from '../../assets/URL\'s/AllUrl';
import { useStateContext } from "@/contexts/ContextProvider";


export default function LoginPage() {
  const { OpenClose_LogSign_Popup, setOpenClose_LogSign_Popup, globalFunction, LoadingGlobally, setLoadingGlobally, } = useStateContext();
  const navigation = useRouter();

  const [countryInfo, setCountryInfo] = useState(null);
  const [loadingMsg, setLoadingMsg] = useState(false);
  const [errormsg, setErrorMsg] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [users, setUsers] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false); // new state

  const { username, password } = users;

  useEffect(() => {
    const getCountry = async () => {
      const localData = await AsyncStorage.getItem("CountryInfo");
      if (localData) setCountryInfo(JSON.parse(localData));
    };
    getCountry();
  }, []);

  const handleChange = (name, value) => {
    setUsers(prev => ({ ...prev, [name]: value }));
  };

  const nextPath = (path) => {
    setOpenClose_LogSign_Popup('')
    navigation.push(path)
  };

  const handleSubmit = async () => {
    if (!username.trim() || !password.trim()) {
      setErrorMsg("Please fill all fields");
      setTimeout(() => setErrorMsg(''), 3000);
      return;
    }
    setLoadingMsg(true);
    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          Devices: '',
          country: countryInfo?.countryName || '',
          countryFlag: countryInfo?.countryFlag || '',
        })
      });

      if (!response.ok) throw response;
      const res = await response.json();

      await AsyncStorage.setItem('loginToken', res.token);
      await AsyncStorage.setItem('userName', res.username);
      await AsyncStorage.setItem('userEmail', res.email);
      await AsyncStorage.setItem('setCountry', res.country);
      await AsyncStorage.setItem('setCountryFlag', res.countryFlag);
      if (res.referID) {
        await AsyncStorage.setItem('referID', res.referID);
      }

      setTimeout(() => {
        setLoadingMsg(false);
        //here i can redirect the user to the Dashboard page or same page Functions
        if (OpenClose_LogSign_Popup.includes("Same")) { globalFunction() }
        else {
          //close login/signup popup..
          setOpenClose_LogSign_Popup("");
          // nextPath("/User-Dashboard/Dashboard")
          alert("ok")
        }

      }, 1000);

    } catch (err) {
      setLoadingMsg(false);
      if (err.message === "Network request failed") {
        setErrorMsg("Network Error! Check your internet connection.");
      } else if (err.status === 429) {
        Alert.alert("Too Many Devices", "Try logging in with a previous device.");
      } else {
        setErrorMsg("Invalid username or password.");
      }
      setTimeout(() => setErrorMsg(''), 4000);
    }
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.closeBtn} onPress={() => setOpenClose_LogSign_Popup("")} activeOpacity={0.7}>
          <AntDesign name="close" size={16} color="#6f11f5" />
        </TouchableOpacity>

        {!!errormsg && <Text style={styles.errorText}>{errormsg}</Text>}

        <View style={styles.tabRow}>
          <TouchableOpacity style={styles.loginTab} activeOpacity={0.8}>
            <FontAwesome5 name="user" size={14} color="#fff" />
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupTab} onPress={() => setOpenClose_LogSign_Popup("Signup")} activeOpacity={0.8}>
            <AntDesign name="adduser" size={16} color="#6f11f5" />
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputWrapper}>
          <MaterialIcons name="person-outline" size={18} color="#6f11f5" style={styles.inputIcon} />
          <TextInput
            placeholder="Username or Email"
            placeholderTextColor="#999"
            style={styles.input}
            value={username}
            onChangeText={val => handleChange('username', val)}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            textContentType="username"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Feather name="lock" size={18} color="#6f11f5" style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword} // toggle secure entry
            style={[styles.input, { flex: 1 }]}
            value={password}
            onChangeText={val => handleChange('password', val)}
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
            textContentType="password"
          />
          <TouchableOpacity onPress={() => setShowPassword(prev => !prev)} style={styles.eyeIcon}>
            <Entypo name={showPassword ? "eye" : "eye-with-line"} size={16} color="#6f11f5" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => nextPath("/Forget-Password")} activeOpacity={0.7}>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={rememberMe}
            onValueChange={setRememberMe}
            color={rememberMe ? '#6f11f5' : undefined}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </View>

        <TouchableOpacity
          style={[styles.loginButton, loadingMsg && { opacity: 0.7 }]}
          onPress={handleSubmit}
          disabled={loadingMsg}
          activeOpacity={0.9}
        >
          {loadingMsg ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <View style={styles.loginBtnContent}>
              <Text style={styles.loginButtonText}>Log in</Text>
              <AntDesign name="login" size={18} color="#fff" style={{ marginLeft: 8 }} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0, left: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    paddingHorizontal: 10,
  },
  container: {
    width: '95%',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    elevation: 12,
    shadowColor: '#6f11f5',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    position: 'relative',
    alignItems: 'stretch',
    paddingTop: 50, // padding top for close button space
    marginTop: 50
  },
  closeBtn: {
    position: 'absolute',
    top: 6,
    right: 6,
    padding: 4,
    borderRadius: 20,
    backgroundColor: '#f0eaff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  errorText: {
    color: '#e63946',
    fontSize: 12,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  loginTab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6f11f5',
    paddingVertical: 12,
    borderRadius: 12,
    width: '48%',
    justifyContent: 'center',
    shadowColor: '#6f11f5',
    shadowOpacity: 0.35,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
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
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  eyeIcon: {
    paddingHorizontal: 6,
  },
  forgot: {
    fontSize: 12,
    color: '#6f11f5',
    marginBottom: 20,
    textAlign: 'right',
    fontWeight: '600',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
  },
  checkboxLabel: {
    marginLeft: 10,
    color: '#444',
    fontSize: 14,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#6f11f5',
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 6,
    shadowColor: '#6f11f5',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    alignItems: 'center',
  },
  loginBtnContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

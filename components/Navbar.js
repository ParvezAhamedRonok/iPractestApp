import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import logo from '../assets/images/Practestlogo.png';
import { useStateContext } from '@/contexts/ContextProvider';
import { startOneTimeAuthCheck } from '../utils/startOneTimeAuthCheck'; // Update path if necessary

const Navbar = ({ toggleSidebar, sidebarVisible }) => {
  const { setOpenClose_LogSign_Popup } = useStateContext();
  const [Local_UserMail, setLocalUserMail] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getAuthData = async () => {
      try {
        const { userEmail } = await startOneTimeAuthCheck();
        if (userEmail) {
          setLocalUserMail(userEmail);
        }
      } catch (err) {
        console.log("⚠️ Auth error:", err);
      }
    };
    getAuthData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navbar}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />

        <View style={styles.rightSection}>
          {!sidebarVisible && (
            <TouchableOpacity onPress={toggleSidebar} style={styles.iconBtn}>
              <FontAwesome6 name="bars-staggered" size={20} color="white" />
            </TouchableOpacity>
          )}

          {!Local_UserMail ? (
            <TouchableOpacity onPress={() => setOpenClose_LogSign_Popup("Login")} style={styles.loginBtn}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => router.push('/User-Dashboard/Dashboard')} style={styles.profileBtn}>
              <FontAwesome6 name="user-circle" size={20} color="#f5c518" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffeecc',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#000',
  },
  logo: {
    width: 100,
    height: 35,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    marginRight: 15,
  },
  loginBtn: {
    backgroundColor: '#f5c518',
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  loginText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 9,
  },
  profileBtn: {
    paddingHorizontal: 5,
  },
});

export default Navbar;

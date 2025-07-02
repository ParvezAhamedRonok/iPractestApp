import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
} from 'react-native';
import { useStateContext } from '@/contexts/ContextProvider';
import { useRouter } from 'expo-router';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import ProfileImg from '../../../assets/images/otherImgs/successpic.png';
import UserProfile from './UserProfile'; // ✅ Ensure the path is correct

const Navbar = ({ toggleSidebar, sidebarVisible}) => {
  const Router = useRouter()
  const { ShowPaymentInfo, setShowPaymentInfo ,userPaymentStatusCheck } = useStateContext();
  const [userCountryName, setUserCountryName] = useState(null);
  const [countryFlag, setCountryFlag] = useState(null);
  const [locallyUserProfileImg, setLocallyUserProfileImg] = useState(null);
  const [profileVisible, setProfileVisible] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const countryName = await AsyncStorage.getItem('setCountry');
        const flag = await AsyncStorage.getItem('setCountryFlag');
        const profileImg = await AsyncStorage.getItem('UserProfileImg');
        if (countryName) setUserCountryName(countryName);
        if (flag) setCountryFlag(flag);
        if (profileImg) setLocallyUserProfileImg(profileImg);
      } catch (error) {
        console.error('Failed to load data from AsyncStorage', error);
      }
    };

    loadData();
  }, []);

  const handleProfileToggle = () => {
    setProfileVisible(!profileVisible);
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove([
        'userName',
        'userEmail',
        'loginToken',
        'setCountry',
        'setCountryFlag',
      ]);
      Router.push("/");
    } catch (e) {
      console.warn('Error during logout:', e);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navbar}>
        {/* Menu Icon */}
        <TouchableOpacity onPress={toggleSidebar}>
          <FontAwesome6 name="bars-staggered" size={20} color="black" />
        </TouchableOpacity>

        {/* Right Actions */}
        <View style={styles.rightActions}>
          {/* Fullscreen Button if Payment is Checked */}
          {userPaymentStatusCheck && (
            <TouchableOpacity
              style={styles.fullscreenButton}
              onPress={() => { setShowPaymentInfo(e => !e) }}
            >
              <Text style={styles.fullscreenIcon}>🔥</Text>
            </TouchableOpacity>
          )}

          {/* Country Flag */}
          {countryFlag && (
            <Image
              source={{ uri: countryFlag }}
              style={styles.flag}
              resizeMode="cover"
            />
          )}

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Log-Out</Text>
          </TouchableOpacity>

          {/* Profile Toggle */}
          <View style={styles.profileContainer}>
            <TouchableOpacity style={styles.userBox} onPress={handleProfileToggle}>
              <Image source={ProfileImg} style={styles.avatar} resizeMode="cover" />
              <Text style={styles.hiWrapper}>
                <Text style={styles.hiText}>Hi, </Text>
              </Text>
              <MaterialIcons
                name={profileVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={17}
                color="#9CA3AF"
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>

            {profileVisible && (
              <View style={styles.dropdownWrapper}>
                <UserProfile onClose={handleProfileToggle} />
              </View>
            )}
          </View>
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
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    zIndex: 10,
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  flag: {
    width: 28,
    height: 20,
    borderRadius: 4,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  fullscreenButton: {
    padding: 4,
    backgroundColor: '#fce4ec',
    borderRadius: 12,
    marginRight: 6,
  },
  fullscreenIcon: {
    fontSize: 12,
    color: '#ff3d00',
  },
  logoutButton: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  logoutText: {
    color: '#fff',
    fontSize: 7,
    fontWeight: '500',
  },
  profileContainer: {
    position: 'relative',
  },
  userBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  hiWrapper: {
    marginLeft: 4,
  },
  hiText: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  dropdownIcon: {
    transform: [{ translateX: -6 }],
  },
  dropdownWrapper: {
    position: 'absolute',
    top: 40,
    right: 0,
    width: 270,
    minHeight: 300,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
    zIndex: 20,
  },
});

export default Navbar;

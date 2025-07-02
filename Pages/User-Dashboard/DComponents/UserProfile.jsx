import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import avatarPlaceholder from '../../../assets/images/Dashboard-Images/avatar.png';
import { useRouter } from 'expo-router';
import { useStateContext } from '@/contexts/ContextProvider';

const userProfileData = [
  {
    icon: 'person-outline',
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  // add more items if needed
];

const UserProfile = ({ onClose }) => {
  const Router = useRouter()
  const { ShowPaymentInfo, setShowPaymentInfo,
    ShowMentorInfo, setShowMentorInfo,
    ShowDeleteAccountInfo, setShowDeleteAccountInfo } = useStateContext();
  const [profileImg, setProfileImg] = useState(null);
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const img = await AsyncStorage.getItem('UserProfileImg');
        const em = await AsyncStorage.getItem('userEmail');
        const un = await AsyncStorage.getItem('userName');
        setProfileImg(img);
        setEmail(em || '');
        setUserName(un || '');
      } catch (e) {
        console.warn('Error loading profile data:', e);
      }
    };
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove([
        'userName',
        'userEmail',
        'loginToken',
        'setCountry',
        'setCountryFlag',
      ]);
      Router.push("/")
    } catch (e) {
      console.warn('Error during logout:', e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>User Profile</Text>
        <TouchableOpacity onPress={onClose}>
          <MaterialIcons name="cancel" size={24} color="#999" />
        </TouchableOpacity>
      </View>

      <View style={styles.userInfo}>
        <Image
          source={profileImg ? { uri: profileImg } : avatarPlaceholder}
          style={styles.avatar}
        />
        <View style={styles.userText}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>
      </View>

      <ScrollView style={styles.optionList}>
        {userProfileData.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.optionItem}
            onPress={() => console.log(item.title)}
          >
            <View
              style={[
                styles.optionIcon,
                { backgroundColor: item.iconBg },
              ]}
            >
              <MaterialIcons
                name={item.icon}
                size={24}
                color={item.iconColor}
              />
            </View>
            <View>
              <Text style={styles.optionTitle}>{item.title}</Text>
              <Text style={styles.optionDesc}>{item.desc}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, styles.logoutBtn]}
          onPress={handleLogout}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteBtn]}
          onPress={() => { 
            onClose()
            setShowDeleteAccountInfo((e) => !e);
           }}
        >
          <Text style={styles.deleteText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 7,
    backgroundColor: '#F0F8FF',
    borderRadius: 8,
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  userInfo: {
    flexDirection: 'row',
    marginVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    paddingBottom: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  userText: {
    marginLeft: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 12,
    color: '#666',
  },
  optionList: {
    maxHeight: 200,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  optionIcon: {
    marginRight: 12,
    padding: 8,
    borderRadius: 8,
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  optionDesc: {
    fontSize: 12,
    color: '#888',
  },
  actions: {
    marginTop: 20,
  },
  button: {
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
  logoutBtn: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#888',
  },
  logoutText: {
    color: '#333',
    fontWeight: '500',
  },
  deleteBtn: {
    backgroundColor: '#ff3b30',
  },
  deleteText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default UserProfile;

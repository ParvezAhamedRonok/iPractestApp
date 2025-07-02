import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import logo from '../assets/images/Practestlogo.png';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Navbar = ({ toggleSidebar, sidebarVisible }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navbar}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        {!sidebarVisible && (
          <TouchableOpacity onPress={toggleSidebar}>
            <FontAwesome6 name="bars-staggered" size={20} color="white" />
            {/* <Ionicons name="menu" size={30} color="white" /> */}
          </TouchableOpacity>
        )}
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
});

export default Navbar;

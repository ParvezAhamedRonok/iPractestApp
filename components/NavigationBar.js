import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library

export default function NavigationBars() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarAnimation] = useState(new Animated.Value(-250)); // Start with sidebar off-screen

  const toggleSidebar = () => {
    const toValue = sidebarVisible ? -250 : 0; // Slide in or out the sidebar
    setSidebarVisible(!sidebarVisible);

    Animated.timing(sidebarAnimation, {
      toValue,
      duration: 300, // Slide duration in ms
      useNativeDriver: true, // Use native driver for smooth animations
    }).start();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Navbar with Hamburger Menu */}
      <View className="flex-row justify-between items-center p-4 bg-gray-200 z-50">
        {/* Only show the hamburger menu if sidebar is not open */}
        {!sidebarVisible && (
          <TouchableOpacity onPress={toggleSidebar}>
            <Ionicons name="menu" size={30} color="black" />
          </TouchableOpacity>
        )}
        <Text className="text-xl font-bold">Home</Text>
      </View>

      {/* Sidebar (Sliding Drawer) */}
      <Animated.View
        style={[styles.sidebar, { transform: [{ translateX: sidebarAnimation }] }]}
        className="absolute top-0 left-0 bottom-0 bg-gray-800 p-6 z-50"
      >
        {/* Close Button */}
        <TouchableOpacity onPress={toggleSidebar} className="self-end mb-4">
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>

        {/* Sidebar Content */}
        <Text className="text-white text-xl mb-4">Home</Text>
        <Text className="text-white text-xl mb-4">Settings</Text>
        <Text className="text-white text-xl mb-4">Profile</Text>
        <Text className="text-white text-xl mb-4">Logout</Text>
      </Animated.View>

      {/* Main Content Area */}
      <View
        className="flex-1 "
        style={{ paddingTop: sidebarVisible ? 250 : 70 }} 
      >
        <Text>Main content goes here!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 250,
    zIndex: 50, // Ensure sidebar stays on top
  },
});

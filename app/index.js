import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FullnavigationBar from "../components/NavigationFull";
import HomeScreen from "./HomeScreen/index"

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <FullnavigationBar />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the SafeAreaView takes up the full screen
    backgroundColor: '#fff', // Light theme background color
  },
});

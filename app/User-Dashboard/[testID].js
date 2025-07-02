
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import UserDashboard from "../../Pages/User-Dashboard/Main"

export default function TestDetailsScreen() {
  const { testID } = useLocalSearchParams();


  return (
    <SafeAreaView style={styles.container}>
      <UserDashboard testID={testID} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the SafeAreaView takes up the full screen
    backgroundColor: '#fff', // Light theme background color
  },
});

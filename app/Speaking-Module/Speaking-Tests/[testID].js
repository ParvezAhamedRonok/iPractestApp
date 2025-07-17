
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import Speaking_Tests_Sections from "../../../Pages/Speaking-Module/Speaking-main/index"

export default function TestDetailsScreen() {
  const { testID } = useLocalSearchParams();
  alert(testID)

  return (
    <SafeAreaView style={styles.container}>
      {/* <Speaking_Tests_Sections /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the SafeAreaView takes up the full screen
    backgroundColor: '#fff', // Light theme background color
  },
});

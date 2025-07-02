
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import Reading_Tests_Sections from "../../../Pages/Reading-Module/Reading-All-Tests/_Importants/_Main"

export default function TestDetailsScreen() {
  const { testID } = useLocalSearchParams();


  return (
    <SafeAreaView style={styles.container}>
      <Reading_Tests_Sections />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the SafeAreaView takes up the full screen
    backgroundColor: '#fff', // Light theme background color
  },
});

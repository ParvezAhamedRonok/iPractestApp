
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Reading_Tests_Sections from "../../../Pages/Listening-Module/Listening-All-Test/_Importants/_Main"

export default function TestDetailsScreen() {

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

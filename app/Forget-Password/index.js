import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ForgotPasswordPage from "../../Pages/Forget-Password/Main"
export default function Index() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ForgotPasswordPage />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the SafeAreaView takes up the full screen
    backgroundColor: '#fff', // Light theme background color
  },
});

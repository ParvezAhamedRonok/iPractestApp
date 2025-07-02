import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import IELTSPracticeSection from './PracticeSec';
import TeamAbout from './TeamAbout';
import NavigationFull from '../../components/NavigationFull';

export default function Index() {
  return (
    <>
      {/* this is for Navbar and sidebars */}
      <NavigationFull />
      <ScrollView contentContainerStyle={styles.container}>
        <IELTSPracticeSection />
        <TeamAbout />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    backgroundColor: '#fff',
  },
});

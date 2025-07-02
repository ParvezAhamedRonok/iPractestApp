// AudioPlayerContainer.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AudioPlayer from './AudioPlayer';

const audioLinks = [
  {
    title: 'Audio 1',
    url: 'https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-01-Section1.mp3?_=1',
  },
  {
    title: 'Audio 2',
    url: 'https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-01-Section2.mp3?_=2',
  },
  {
    title: 'Audio 3',
    url: 'https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-01-Section3.mp3?_=3',
  },
  {
    title: 'Audio 4',
    url: 'https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-01-Section4.mp3?_=4',
  },
];

export default function AudioPlayerContainer() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [shouldPlay, setShouldPlay] = useState(true);

  const handleAudioPress = (index) => {
    setSelectedIndex(index);
    setShouldPlay(true);
  };

  const selectedAudio = audioLinks[selectedIndex];

  return (
    <View style={{ flex: 1 }}>
      <AudioPlayer audio={selectedAudio} shouldPlay={shouldPlay} />

      <Text style={styles.switchLabel}>Switch Audio:</Text>

      {/* MANUALLY RENDER BUTTONS BASED ON audioLinks[0], audioLinks[1] */}
      <TouchableOpacity
        style={[
          styles.audioItem,
          selectedIndex === 0 && styles.audioItemActive,
        ]}
        onPress={() => handleAudioPress(0)}
      >
        <Text
          style={[
            styles.audioText,
            selectedIndex === 0 && styles.audioTextActive,
          ]}
        >
          {audioLinks[0].title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.audioItem,
          selectedIndex === 1 && styles.audioItemActive,
        ]}
        onPress={() => handleAudioPress(1)}
      >
        <Text
          style={[
            styles.audioText,
            selectedIndex === 1 && styles.audioTextActive,
          ]}
        >
          {audioLinks[1].title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.audioItem,
          selectedIndex === 2 && styles.audioItemActive,
        ]}
        onPress={() => handleAudioPress(2)}
      >
        <Text
          style={[
            styles.audioText,
            selectedIndex === 2 && styles.audioTextActive,
          ]}
        >
          {audioLinks[2].title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  switchLabel: {
    fontSize: 16,
    fontWeight: '500',
    margin: 16,
    color: '#444',
  },
  audioItem: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#EAEAEA',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  audioItemActive: {
    backgroundColor: '#007AFF',
  },
  audioText: {
    fontSize: 16,
    color: '#333',
  },
  audioTextActive: {
    color: '#fff',
  },
});

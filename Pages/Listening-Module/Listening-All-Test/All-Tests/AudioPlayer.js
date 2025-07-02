// AudioPlayer.js

import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function AudioPlayer({ audio, shouldPlay }) {
  const soundRef = useRef(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(1);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    loadAudio();
    return () => {
      soundRef.current.unloadAsync();
    };
  }, [audio]);

  const loadAudio = async () => {
    try {
      await soundRef.current.unloadAsync();
      const { sound } = await Audio.Sound.createAsync(
        { uri: audio.url },
        { shouldPlay },
        onPlaybackStatusUpdate
      );
      soundRef.current = sound;
    } catch (error) {
      console.log('Audio load error:', error);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setDuration(status.durationMillis);
      setPosition(status.positionMillis);
      setIsPlaying(status.isPlaying);
    }
  };

  const togglePlayPause = async () => {
    const status = await soundRef.current.getStatusAsync();
    if (status.isPlaying) {
      await soundRef.current.pauseAsync();
    } else {
      await soundRef.current.playAsync();
    }
  };

  const onSeek = async (value) => {
    const newPosition = value * duration;
    await soundRef.current.setPositionAsync(newPosition);
  };

  const formatTime = (millis) => {
    const mins = Math.floor(millis / 60000);
    const secs = Math.floor((millis % 60000) / 1000);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.audioContainer}>
        <TouchableOpacity onPress={togglePlayPause}>
          <Ionicons
            name={isPlaying ? 'pause' : 'play'}
            size={24}
            color="#007AFF"
          />
        </TouchableOpacity>

        <Text style={styles.timeText}>{formatTime(position)}</Text>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={position / duration}
          onSlidingComplete={onSeek}
          minimumTrackTintColor="#007AFF"
          maximumTrackTintColor="#D3D3D3"
          thumbTintColor="#007AFF"
        />

        <Text style={styles.timeText}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: screenWidth * 0.6,
    height: 45,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 4,
    zIndex:100
  },
  audioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  slider: {
    flex: 1,
    height: 30,
  },
  timeText: {
    fontSize: 12,
    color: '#333',
    minWidth: 40,
    textAlign: 'center',
  },
});

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const ThreeBoxComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const borderAnim = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const animationRef = useRef(null);

  // Start blinking when playing
  useEffect(() => {
    if (isPlaying) {
      animationRef.current = Animated.loop(
        Animated.sequence([
          Animated.timing(borderAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: false,
          }),
          Animated.timing(borderAnim, {
            toValue: 0,
            duration: 600,
            useNativeDriver: false,
          }),
        ])
      );
      animationRef.current.start();
    } else {
      if (animationRef.current) {
        animationRef.current.stop();
      }
      borderAnim.setValue(0);
    }
  }, [isPlaying]);

  const borderColor = borderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FF0000', '#00FF00'],
  });

  const requestPermissionAndPlay = async () => {
    // Animate press
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();

    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status === 'granted') {
        alert("granter")
        setIsPlaying((prev) => !prev);
      } else {
        Alert.alert(
          'Permission Required',
          'Please allow microphone access to use this feature.'
        );
      }
    } catch (error) {
      Alert.alert('Error', 'Could not request permission.');
      console.error('Permission Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Blinking box */}
      <Animated.View style={[styles.box, isPlaying ? { borderColor } : {}]}>
        <Text style={styles.text}>📝 This is an article in Box 1.</Text>
      </Animated.View>

      {/* Play Button */}
      <TouchableOpacity onPress={requestPermissionAndPlay} activeOpacity={0.8}>
        <Animated.View style={[styles.iconContainer, { transform: [{ scale }] }]}>
          <FontAwesome
            name={isPlaying ? 'pause-circle' : 'play-circle'}
            size={70}
            color="#1D4ED8"
          />
        </Animated.View>
      </TouchableOpacity>

      {/* Static Article */}
      <View style={styles.box}>
        <Text style={styles.text}>📖 Another article in Box 3.</Text>
      </View>
    </View>
  );
};

export default ThreeBoxComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 20,
  },
  box: {
    width: 280,
    padding: 20,
    borderWidth: 3,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  iconContainer: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
});

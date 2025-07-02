import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = '0' + minutes;
  if (minutes <= 0) minutes = '';
  if (seconds <= 10) seconds = '0' + seconds;

  return `${minutes}${minutes <= 0 ? ' ' : ':'}${seconds}`;
};

function Timer({ Second }) {
  const [countDown, setCountDown] = useState(Second);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(timerId.current);
      Alert.alert("Notice", "It's taking a while, please wait");
    }
  }, [countDown]);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>{formatTime(countDown)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    // You can add animation styles here if you want
  },
});

export default Timer;

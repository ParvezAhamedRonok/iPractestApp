import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import Timer from './Timer';
import { useStateContext } from "@/contexts/ContextProvider";

const { width, height } = Dimensions.get('window');

const LoadingScreen = ({ time = 30 }) => {
  const { LoadingGlobally, global_Msz_Showing } = useStateContext();
  const rotateClock = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (LoadingGlobally) {
      rotateClock.setValue(0);
      Animated.loop(
        Animated.timing(rotateClock, {
          toValue: 1,
          duration: 6000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    }
  }, [LoadingGlobally]);

  const createHandStyle = (length, color, thickness) => ({
    position: 'absolute',
    width: thickness,
    height: length,
    backgroundColor: color,
    borderRadius: 2,
    top: 30 - length,
    left: 30 - thickness / 2,
  });

  if (!LoadingGlobally) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.fixedBox}>
        <Animated.View
          style={[
            styles.clockFace,
            {
              transform: [
                {
                  rotate: rotateClock.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={createHandStyle(15, '#facc15', 3)} />
          <View style={createHandStyle(20, '#a78bfa', 2)} />
          <View style={createHandStyle(25, '#38bdf8', 1)} />
          <View style={styles.centerDot} />
        </Animated.View>

        <View style={styles.timerWrapper}>
          <View style={styles.semiCircle}>
            <Timer Second={time} />
          </View>
        </View>

        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            {global_Msz_Showing && global_Msz_Showing}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width,
    // height,//
      ...StyleSheet.absoluteFillObject, //using this instead of height
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  fixedBox: {
    width: 120,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 6,
  },
  clockFace: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: '#4b5563',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  centerDot: {
    width: 8,
    height: 8,
    backgroundColor: '#000',
    borderRadius: 4,
    position: 'absolute',
    top: 26,
    left: 26,
  },
  timerWrapper: {
    marginTop: 10,
    width: 70,
    height: 35,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  semiCircle: {
    width: 70,
    height: 35,
    backgroundColor: '#f0f0f0',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    fontSize: 5,
    textAlign: 'center',
    color: '#333',
  },
});

export default LoadingScreen;

import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import Timer from './Timer';
import { useStateContext } from "@/contexts/ContextProvider";

const { width, height } = Dimensions.get('window');

const LoadingScreen = ({ time = 30 }) => {
  const { LoadingGlobally, global_Msz_Showing } = useStateContext();
  const rotateClock = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateClock, {
        toValue: 1,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const createHandStyle = (length, color, thickness) => ({
    position: 'absolute',
    width: thickness,
    height: length,
    backgroundColor: color,
    borderRadius: 2,
    top: 50 - length,
    left: 50 - thickness / 2,
  });

  if (!LoadingGlobally) return null; // 🔥 Hide component if false

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
          <View style={createHandStyle(25, '#facc15', 4)} />
          <View style={createHandStyle(35, '#a78bfa', 3)} />
          <View style={createHandStyle(45, '#38bdf8', 2)} />
          <View style={styles.centerDot} />
        </Animated.View>

        <Timer Second={time} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 12, textAlign: 'center', color: '#333' }}>
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
    height,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  fixedBox: {
    width: 150,
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
  },
  clockFace: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#4b5563',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  centerDot: {
    width: 12,
    height: 12,
    backgroundColor: '#000',
    borderRadius: 6,
    position: 'absolute',
    top: 44,
    left: 44,
  },
});

export default LoadingScreen;

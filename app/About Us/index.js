import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AboutUsPage from "../../Pages/Speech-To-Text/SpeechToTextInWebView"
export default function Index() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <AboutUsPage />
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



// in here i want to load these audio from parents somponent and i want to change audio from parent component in here

//  import React, { useEffect, useRef, useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   SafeAreaView,
// } from 'react-native';
// import Slider from '@react-native-community/slider';
// import { Audio } from 'expo-av';
// import { Ionicons } from '@expo/vector-icons';

// const audioLinks = [
//   { title: 'Audio 1', url: 'https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-01-Section1.mp3?_=1' },
//   { title: 'Audio 2', url: 'https://ieltstrainingonline.com/wp-content/uploads/2021/07/IELTS-Recent-Actual-Test-With-Answers-Practice-Test-01-Section2.mp3?_=2' },
// ];

// export default function AudioPlayer() {
//   const soundRef = useRef(new Audio.Sound());
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [duration, setDuration] = useState(1); // Prevent divide by 0
//   const [position, setPosition] = useState(0);
//   const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);

//   const currentAudio = audioLinks[currentAudioIndex];

//   useEffect(() => {
//     loadAudio(currentAudio.url);
//     return () => {
//       soundRef.current.unloadAsync();
//     };
//   }, [currentAudioIndex]);

//   const loadAudio = async (url) => {
//     try {
//       await soundRef.current.unloadAsync();
//       const { sound, status } = await Audio.Sound.createAsync(
//         { uri: url },
//         { shouldPlay: true },
//         onPlaybackStatusUpdate
//       );
//       soundRef.current = sound;
//       setIsLoaded(true);
//     } catch (err) {
//       console.log('Load Error:', err);
//     }
//   };

//   const onPlaybackStatusUpdate = (status) => {
//     if (status.isLoaded) {
//       setDuration(status.durationMillis);
//       setPosition(status.positionMillis);
//       setIsPlaying(status.isPlaying);
//     }
//   };

//   const togglePlayPause = async () => {
//     if (!isLoaded) return;
//     const status = await soundRef.current.getStatusAsync();
//     if (status.isPlaying) {
//       await soundRef.current.pauseAsync();
//     } else {
//       await soundRef.current.playAsync();
//     }
//   };

//   const onSeek = async (value) => {
//     const newPosition = value * duration;
//     await soundRef.current.setPositionAsync(newPosition);
//   };

//   const formatTime = (millis) => {
//     const minutes = Math.floor(millis / 60000);
//     const seconds = Math.floor((millis % 60000) / 1000);
//     return ${minutes}:${seconds < 10 ? '0' : ''}${seconds};
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>{currentAudio.title}</Text>

//       <Slider
//         style={styles.slider}
//         minimumValue={0}
//         maximumValue={1}
//         value={position / duration}
//         onSlidingComplete={onSeek}
//         minimumTrackTintColor="#007AFF"
//         maximumTrackTintColor="#E0E0E0"
//         thumbTintColor="#007AFF"
//       />

//       <View style={styles.timeContainer}>
//         <Text style={styles.timeText}>{formatTime(position)}</Text>
//         <Text style={styles.timeText}>{formatTime(duration)}</Text>
//       </View>

//       <TouchableOpacity style={styles.playButton} onPress={togglePlayPause}>
//         <Ionicons name={isPlaying ? 'pause' : 'play'} size={32} color="#fff" />
//       </TouchableOpacity>

//       <Text style={styles.switchLabel}>Switch Audio:</Text>
//       <FlatList
//         data={audioLinks}
//         keyExtractor={(_, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <TouchableOpacity
//             style={[
//               styles.audioItem,
//               currentAudioIndex === index && styles.audioItemActive,
//             ]}
//             onPress={() => setCurrentAudioIndex(index)}
//           >
//             <Text
//               style={[
//                 styles.audioText,
//                 currentAudioIndex === index && styles.audioTextActive,
//               ]}
//             >
//               {item.title}
//             </Text>
//           </TouchableOpacity>
//         )}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//     flex: 1,
//     backgroundColor: '#F9F9F9',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '600',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
//   slider: {
//     width: '100%',
//     height: 40,
//   },
//   timeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: -10,
//     marginBottom: 20,
//   },
//   timeText: {
//     color: '#666',
//     fontSize: 14,
//   },
//   playButton: {
//     backgroundColor: '#007AFF',
//     alignSelf: 'center',
//     padding: 16,
//     borderRadius: 50,
//     marginBottom: 30,
//     shadowColor: '#007AFF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4.65,
//     elevation: 8,
//   },
//   switchLabel: {
//     fontSize: 16,
//     fontWeight: '500',
//     marginBottom: 10,
//     color: '#444',
//   },
//   audioItem: {
//     padding: 12,
//     borderRadius: 8,
//     backgroundColor: '#EAEAEA',
//     marginBottom: 10,
//   },
//   audioItemActive: {
//     backgroundColor: '#007AFF',
//   },
//   audioText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   audioTextActive: {
//     color: '#fff',
//   },
// });
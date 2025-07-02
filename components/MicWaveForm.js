import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import Voice from 'react-native-voice'; // Ensure proper import
import { OpenAI } from 'openai'; // Assuming you have OpenAI integrated
import { StyleSheet } from 'react-native';

const MicWaveform = ({ size = 200, color = 'blue', textColor = 'black' }) => {
  const [micInput, setMicInput] = useState(0);
  const [response, setResponse] = useState('');

  useEffect(() => {
    // Check if Voice is available
    if (Voice) {
      Voice.onSpeechStart = onSpeechStart;
      Voice.onSpeechEnd = onSpeechEnd;
      Voice.onSpeechResults = onSpeechResults;
    } else {
      console.warn('Voice is not initialized.');
    }

    // Start listening for speech
    Voice.start('en-US').catch(error => console.error('Voice start failed:', error));

    return () => {
      // Clean up listeners when the component unmounts
      Voice.destroy().then(() => Voice.removeAllListeners());
    };
  }, []);

  const onSpeechStart = () => {
    console.log('Speech started');
  };

  const onSpeechEnd = () => {
    console.log('Speech ended');
  };

  const onSpeechResults = (e) => {
    console.log(e.value);
    const spokenText = e.value[0];
    fetchOpenAIResponse(spokenText);
  };

  const fetchOpenAIResponse = async (query) => {
    try {
      const response = await OpenAI.Completion.create({
        model: 'text-davinci-003',
        prompt: query,
        max_tokens: 150,
      });
      setResponse(response.choices[0].text);
    } catch (error) {
      console.error('OpenAI request failed:', error);
    }
  };

  // Mic waveform animation (adjust this based on mic input)
  const waveHeight = micInput * 5; // Adjust for dynamic mic level

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg height={size} width={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 10}
          stroke={color}
          strokeWidth={3}
          fill="none"
          opacity={0.5}
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={waveHeight}
          stroke={color}
          strokeWidth={3}
          fill="none"
          opacity={0.8}
        />
      </Svg>
      <Text style={[styles.text, { color: textColor }]}>
        {response || 'Waiting for response...'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    position: 'absolute',
    bottom: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default MicWaveform;

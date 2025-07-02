import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function SpeechToTextWebView() {
  const webviewRef = useRef(null);
  const [spokenText, setSpokenText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <body style="text-align:center; padding-top:40px;">
      <button onclick="startRecognition()" style="font-size:20px;">🎤 Start Speaking</button>
      <p id="output" style="font-size:18px;"></p>
      <script>
        function startRecognition() {
          const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
          recognition.lang = 'en-US';
          recognition.interimResults = true;
          recognition.continuous = false;

          window.ReactNativeWebView.postMessage('__STARTED__');
          recognition.start();

          recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById('output').innerText = transcript;
            window.ReactNativeWebView.postMessage(transcript);
          };

          recognition.onspeechstart = function() {
            window.ReactNativeWebView.postMessage('__SPEAKING__');
          };

          recognition.onspeechend = function() {
            window.ReactNativeWebView.postMessage('__STOPPED__');
          };

          recognition.onerror = function(err) {
            window.ReactNativeWebView.postMessage('__ERROR__:' + err.message);
          };
        }
      </script>
    </body>
    </html>
  `;

  const handleMessage = (event) => {
    const message = event.nativeEvent.data;

    if (message === '__SPEAKING__') {
      setIsSpeaking(true);
    } else if (message === '__STOPPED__') {
      setIsSpeaking(false);
    } else if (message.startsWith('__ERROR__')) {
      setSpokenText('Error: ' + message.split(':')[1]);
      setIsSpeaking(false);
    } else if (message !== '__STARTED__') {
      setSpokenText(message);
    }
  };

  if (Platform.OS !== 'android') {
    return (
      <View style={styles.centered}>
        <Text style={{ fontSize: 16, color: 'red' }}>
          ❌ This only works on Android via Expo WebView.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🗣️ Speak to Transcribe</Text>
      {isSpeaking ? (
        <Text style={styles.status}>🎙️ Listening...</Text>
      ) : (
        <Text style={styles.status}>🛑 Not speaking</Text>
      )}
      <WebView
        ref={webviewRef}
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        onMessage={handleMessage}
        style={styles.webview}
      />
      <Text style={styles.output}>{spokenText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  status: { fontSize: 16, color: '#2980b9', marginBottom: 10 },
  output: { fontSize: 18, marginTop: 20, color: '#2c3e50' },
  webview: { height: 220, borderRadius: 10, overflow: 'hidden' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

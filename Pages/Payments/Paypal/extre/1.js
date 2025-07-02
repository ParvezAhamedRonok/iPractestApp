import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PayPalTestScreen() {
  const [showWebView, setShowWebView] = useState(false);

  // Replace this with your real Hosted Button ID from PayPal
  const hostedButtonID = 'ABCD1234XYZ'; // 👈 Replace this
  const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=${hostedButtonID}`;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PayPal Integration Test</Text>

      <TouchableOpacity style={styles.payButton} onPress={() => setShowWebView(true)}>
        <Text style={styles.payButtonText}>💳 Pay with PayPal</Text>
      </TouchableOpacity>

      <Modal visible={showWebView} animationType="slide" transparent={false}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setShowWebView(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>❌ Close</Text>
            </TouchableOpacity>
          </View>
          <WebView
            source={{ uri: paypalUrl }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            style={{ flex: 1 }}
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: '#FFC439',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  payButtonText: {
    color: '#111',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalHeader: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    alignItems: 'flex-end',
  },
  closeButton: {
    padding: 8,
  },
  closeText: {
    fontSize: 18,
    color: '#333',
  },
});

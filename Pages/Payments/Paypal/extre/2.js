import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PayPalSDKCheckout() {
  const [showWebView, setShowWebView] = useState(false);
  const [message, setMessage] = useState('');

  const paypalHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD"></script>
        <style>
          html, body { margin: 0; padding: 0; height: 100%; display: flex; justify-content: center; align-items: center; }
          #paypal-button-container { width: 100%; max-width: 300px; }
        </style>
      </head>
      <body>
        <div id="paypal-button-container"></div>

        <script>
          paypal.Buttons({
            createOrder: function(data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: { value: '10.00' }
                }]
              });
            },
            onApprove: function(data, actions) {
              return actions.order.capture().then(function(details) {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  status: 'success',
                  name: details.payer.name.given_name,
                  id: details.id
                }));
              });
            },
            onCancel: function(data) {
              window.ReactNativeWebView.postMessage(JSON.stringify({
                status: 'cancel'
              }));
            },
            onError: function(err) {
              window.ReactNativeWebView.postMessage(JSON.stringify({
                status: 'error',
                message: err.toString()
              }));
            }
          }).render('#paypal-button-container');
        </script>
      </body>
    </html>
  `;

  const handleMessage = (event) => {
    const data = JSON.parse(event.nativeEvent.data);
    setShowWebView(false);

    switch (data.status) {
      case 'success':
        setMessage(`✅ Payment success! Welcome ${data.name}. Transaction ID: ${data.id}`);
        break;
      case 'cancel':
        setMessage('⚠️ Payment was cancelled by the user.');
        break;
      case 'error':
        setMessage(`❌ Payment failed: ${data.message}`);
        break;
      default:
        setMessage('❌ Unknown response');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native PayPal JS SDK</Text>

      <TouchableOpacity style={styles.payButton} onPress={() => setShowWebView(true)}>
        <Text style={styles.payButtonText}>Pay with PayPal</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Modal visible={showWebView} animationType="slide">
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => setShowWebView(false)} style={styles.closeButton}>
            <Text style={{ fontSize: 18 }}>❌ Close</Text>
          </TouchableOpacity>

          <WebView
            source={{ html: paypalHTML }}
            javaScriptEnabled
            domStorageEnabled
            onMessage={handleMessage}
            startInLoadingState
            style={{ flex: 1 }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: '#0070BA',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

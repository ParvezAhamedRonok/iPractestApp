import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PayPalCheckout() {
  const [visible, setVisible] = useState(false);

  // Replace this with your real sandbox client ID
  const sandboxClientId = 'AX_JFvAVryz-c4Ihz_iR4iTYN-z8IYLm0MwMPAt6N_ek8HSGtv7m2GKyZLOieda9YF19lJMOZoGGgvoR';

  const paypalHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://www.paypal.com/sdk/js?client-id=${sandboxClientId}&currency=USD"></script>
        <style>
          html, body { margin: 0; padding: 0; height: 100%; display: flex; justify-content: center; align-items: center; background-color: #fff; }
          #paypal-button-container { width: 100%; max-width: 320px; }
        </style>
      </head>
      <body>
        <div id="paypal-button-container"></div>
        <script>
          paypal.Buttons({
            createOrder: function(data, actions) {
              return actions.order.create({
                purchase_units: [{ amount: { value: '10.00' } }]
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
              window.ReactNativeWebView.postMessage(JSON.stringify({ status: 'cancel' }));
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
    setVisible(false);

    if(data.status === 'success') {
      alert(`Payment success! Welcome ${data.name}. Transaction ID: ${data.id}`);
    } else if(data.status === 'cancel') {
      alert('Payment cancelled by user.');
    } else if(data.status === 'error') {
      alert(`Payment error: ${data.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.payButton} onPress={() => setVisible(true)}>
        <Text style={styles.payButtonText}>Pay with PayPal</Text>
      </TouchableOpacity>

      <Modal visible={visible} animationType="slide">
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeButton}>
            <Text style={{ fontSize: 18 }}>❌ Close</Text>
          </TouchableOpacity>

          <WebView
            originWhitelist={['*']}
            source={{ html: paypalHTML }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowsInlineMediaPlayback={true}
            onMessage={handleMessage}
            startInLoadingState={true}
            style={{ flex: 1 }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  payButton: {
    backgroundColor: '#0070BA',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  payButtonText: { color: '#fff', fontSize: 16 },
  closeButton: {
    padding: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
});

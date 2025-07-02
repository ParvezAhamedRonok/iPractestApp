
import React, { useState } from 'react';
import { View, Button, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PayPalCheckout() {
  const [checkoutUrl, setCheckoutUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const createOrder = async () => {
    setLoading(true);
    setMessage('');
    try {
      const response = await fetch('http://YOUR_BACKEND_IP:3000/create-paypal-order', {
        method: 'POST',
      });
      const data = await response.json();
      setCheckoutUrl(data.url);
    } catch (error) {
      setMessage('Failed to create PayPal order');
      console.error(error);
    }
    setLoading(false);
  };

  // Listen to WebView navigation for success/cancel detection
  const onNavigationStateChange = (navState) => {
    if (navState.url.includes('https://your-app.com/success')) {
      setMessage('Payment Successful 🎉');
      setCheckoutUrl(null);
    }
    if (navState.url.includes('https://your-app.com/cancel')) {
      setMessage('Payment Cancelled');
      setCheckoutUrl(null);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {checkoutUrl ? (
        <WebView
          source={{ uri: checkoutUrl }}
          onNavigationStateChange={onNavigationStateChange}
          startInLoadingState
          renderLoading={() => <ActivityIndicator size="large" color="#0000ff" />}
        />
      ) : (
        <View style={styles.center}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Button title="Checkout with PayPal" onPress={createOrder} />
          )}
          {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  message: { marginTop: 20, fontSize: 16, color: 'green' },
});


//For App all Paypal codes ............

// Use your PayPal sandbox credentials here
// const CLIENT_ID = 'YOUR_PAYPAL_CLIENT_ID';
// const CLIENT_SECRET = 'YOUR_PAYPAL_SECRET';

// // Get OAuth2 token from PayPal
// async function getAccessToken() {
//   const response = await axios({
//     url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
//     method: 'post',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     auth: { username: CLIENT_ID, password: CLIENT_SECRET },
//     data: 'grant_type=client_credentials',
//   });
//   return response.data.access_token;
// }

// // Create PayPal order
// app.post('/create-paypal-order', async (req, res) => {
//   try {
//     const accessToken = await getAccessToken();

//     // You can dynamically set price from req.body if you want
//     const orderData = {
//       intent: 'CAPTURE',
//       purchase_units: [
//         {
//           amount: {
//             currency_code: 'USD',
//             value: '10.00', // fixed price, change as needed
//           },
//         },
//       ],
//       application_context: {
//         return_url: 'https://your-app.com/success', // catch this URL in your React Native WebView
//         cancel_url: 'https://your-app.com/cancel',  // catch cancel URL
//       },
//     };

//     const order = await axios({
//       url: 'https://api-m.sandbox.paypal.com/v2/checkout/orders',
//       method: 'post',
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         'Content-Type': 'application/json',
//       },
//       data: orderData,
//     });

//     // Extract approval URL to redirect user
//     const approveLink = order.data.links.find(link => link.rel === 'approve');
//     res.json({ url: approveLink.href });
//   } catch (error) {
//     console.error('PayPal order creation error:', error.message);
//     res.status(500).json({ error: 'Failed to create order' });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`PayPal backend listening on port ${PORT}`);
// });

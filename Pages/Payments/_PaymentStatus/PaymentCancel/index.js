// PaymentCancel.jsx (React Native)

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import SadImg1 from '../../../../assets/images/Payments/sad1.gif'; // adjust path as needed
import { Image } from 'expo-image'; // ✅ use expo-image for animated GIF support

const { width, height } = Dimensions.get('window');

const PaymentCancel = () => {
  const router = useRouter();

  return (
    <View style={styles.overlay}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Image source={SadImg1} style={styles.image} />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            <Text style={styles.titleHighlight}>Oops! </Text>
            Your payment has been canceled.
          </Text>

          <Text style={styles.subtitle}>
            We regret to inform you that your payment process was unsuccessful. Please try again or contact support if the issue persists.
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
            <Text style={styles.buttonText}>Go to Home Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PaymentCancel;

const styles = StyleSheet.create({
  overlay: {
    position: 'relative',
    top: 0,
    left: 0,
    width,
    height,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 50,
  },
  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    width: width * 0.9,
    maxWidth: 480,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 999,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 16,
    color: '#1f2937',
  },
  titleHighlight: {
    color: '#facc15',
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#facc15',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
});

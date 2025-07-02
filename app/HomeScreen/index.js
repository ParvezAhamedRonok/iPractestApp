import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// import PaymentScreen from "../../Pages/Payments/Payment-Slider/Payment-Card-Slider"
//    <PaymentScreen />

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/Reading-Module/Cards')}>
        <Text style={styles.buttonText}>Reading Cards</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/About Us')}>
        <Text style={styles.buttonText}>About-Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/Payment-Pages/Payment-Failed')}>
        <Text style={styles.buttonText}>Payment Success</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/User-Dashboard/Dashboard')}>
        <Text style={styles.buttonText}>Dashboard</Text>
      </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={() => router.push('/Writing-Module/Actual-Tests-Cards')}>
        <Text style={styles.buttonText}>Writing</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});




// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function HomeScreen() {
//   const router = useRouter();

// onPress={() => router.push('/aboutus')}
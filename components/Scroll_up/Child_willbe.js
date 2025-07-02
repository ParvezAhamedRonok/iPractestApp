import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ScrollButton({ onScrollUp }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onScrollUp}>
      <Text style={styles.text}>⬆️ Scroll Up 200px</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

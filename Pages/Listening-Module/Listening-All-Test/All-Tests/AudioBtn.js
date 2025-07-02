import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Pressable,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function AudioControl({ selectedIndex, handleAudioPress, ActualAudios_Test1, audioNum }) {
  const [noteVisible, setNoteVisible] = useState(false);
  const [noteText, setNoteText] = useState('');

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>{ActualAudios_Test1[audioNum].title}</Text>

      {/* Buttons Row */}
      <View style={styles.buttonRow}>
        {/* Listen Button */}
        <TouchableOpacity
          style={[
            styles.audioButton,
            styles.leftButton,
            selectedIndex === audioNum && styles.audioButtonActive,
          ]}
          onPress={() => handleAudioPress(audioNum)}
        >
          <Ionicons
            name="play-circle-outline"
            size={18}
            color={selectedIndex === audioNum ? '#fff' : '#eee'}
            style={styles.icon}
          />
          <Text
            style={[
              styles.buttonText,
              selectedIndex === 0 && styles.buttonTextActive,
            ]}
          >
            Listen
          </Text>
        </TouchableOpacity>

        {/* Note Button */}
        <TouchableOpacity
          style={[styles.audioButton, styles.rightButton, 
            selectedIndex === audioNum && styles.audioButtonActive,]}
          onPress={() => setNoteVisible(true)}
        >
          <Ionicons name="create-outline" size={18} color="#eee" style={styles.icon} />
          <Text style={styles.buttonText}>Note</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Popup */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={noteVisible}
        onRequestClose={() => setNoteVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Write your note</Text>
            <TextInput
              multiline
              placeholder="Type here..."
              value={noteText}
              onChangeText={setNoteText}
              style={styles.textArea}
              placeholderTextColor="#888"
            />
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalButton, { backgroundColor: '#ccc' }]}
                onPress={() => setNoteVisible(false)}
              >
                <Text style={{ color: '#333' }}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, { backgroundColor: '#007AFF' }]}
                onPress={() => {
                  // Save logic here if needed
                  setNoteVisible(false);
                }}
              >
                <Text style={{ color: '#fff' }}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,

  },
  title: {
    width: '50%',
    fontSize: 14,
    marginBottom: 20,
    color: '#fff',
    backgroundColor: '#4B5563', // modern gray
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    textAlign: 'left',
    fontWeight: '600',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    transform: [{ translateX: 10 }],
  },


  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth - 20,
    paddingHorizontal: 10,
  },
  audioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    width: '30%',
    backgroundColor: '#007AFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  audioButtonActive: {
    backgroundColor: 'purple',
  },
  leftButton: {
    marginRight: 10,
  },
  rightButton: {
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 12,
    color: '#eee',
    fontWeight: '600',
  },
  buttonTextActive: {
    color: '#fff',
  },
  icon: {
    marginRight: 6,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    color: '#000',
    fontSize: 14,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});

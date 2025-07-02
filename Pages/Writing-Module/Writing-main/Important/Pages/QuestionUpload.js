import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons'; // replacing BsPatchQuestion
import { WRITING_POST_UPLOAD_IMAGE_QUESTION_TO_TRANSFORM_INTO_TEXT } from '../../../../../assets/URL\'s/AllUrl';

let ImageArray = [];

export default function QuestionUpload({ setStoreQuestionText }) {
  const [userLoginEmail, setUserLoginEmail] = useState('');
  const [imagePreview, setPreview] = useState([]);
  const [imageText, setImageText] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('userEmail').then(email => {
      if (email) setUserLoginEmail(email);
    });
  }, []);

  const handleLoginCheck = () => {
    if (!userLoginEmail) {
      Alert.alert('Login Required', 'You must be logged in to upload a question.');
      setPreview([]);
      ImageArray = [];
      return false;
    }
    return true;
  };

  const getImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission Denied', 'Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      const imageObj = {
        uri: imageUri,
        type: 'image/jpeg',
        name: imageUri.split('/').pop(),
      };

      ImageArray.push(imageObj);
      setPreview([...imagePreview, imageUri]);
      setUploading(true);
      setTimeout(() => {
        if (handleLoginCheck()) {
          uploadImageGCP();
        }
      }, 1000);
    }
  };

  const deleteHandler = (uri) => {
    setPreview(prev => prev.filter(image => image !== uri));
    ImageArray = ImageArray.filter(img => img.uri !== uri);
    setStoreQuestionText('');
  };

  const uploadImageGCP = async () => {
    if (!ImageArray[0]) return;
    console.log("___QuestionUpload"+ImageArray[0])

    let imageTextCombined = '';
    for (const imageFile of ImageArray) {
      const formData = new FormData();
      formData.append('file', {
        uri: imageFile.uri,
        type: imageFile.type,
        name: imageFile.name,
      });
console.log(formData)
      try {
        const response = await fetch(WRITING_POST_UPLOAD_IMAGE_QUESTION_TO_TRANSFORM_INTO_TEXT, {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        const cleanText = data.message.replace(/['"]+/g, '');
        imageTextCombined += cleanText;
        setSuccessMsg(true);
        setTimeout(() => {
          setStoreQuestionText(imageTextCombined);
        }, 500);
      } catch (err) {
        Alert.alert('Upload Error', 'Network error, please try again.');
        setPreview([]);
        ImageArray = [];
        console.error(err);
      }
    }
    console.log(imageTextCombined)
    setImageText(imageTextCombined);
    setUploading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {imagePreview.length > 0 ? (
          successMsg ? (
            <View style={styles.previewContainer}>
              {imagePreview.map((image, index) => (
                <View key={index} style={styles.imageWrapper}>
                  <Image source={{ uri: image }} style={styles.image} />
                  <TouchableOpacity
                    style={styles.deleteBtn}
                    onPress={() => deleteHandler(image)}
                  >
                    <Text style={styles.deleteText}>X</Text>
                  </TouchableOpacity>
                </View>
              ))}
              <Text style={styles.successText}>Question Uploaded</Text>
            </View>
          ) : (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#000" />
              <Text style={styles.uploadingText}>Uploading...</Text>
            </View>
          )
        ) : (
          <View style={styles.uploadSection}>
            <TouchableOpacity style={styles.uploadBtn} onPress={getImage}>
              <MaterialIcons name="question-answer" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.uploadLabel}>Upload Question</Text>
            <Text style={styles.helperText}>Upload your question image for better scores</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    alignItems: 'center',
  },
  card: {
    width: '85%',
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: '#000',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  uploadSection: {
    alignItems: 'center',
  },
  uploadBtn: {
    backgroundColor: '#FFD710',
    padding: 12,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
    elevation: 5,
  },
  uploadLabel: {
    marginTop: 8,
    fontSize: 11,
    color: '#666',
  },
  helperText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
    color: '#777',
  },
  loadingContainer: {
    alignItems: 'center',
  },
  uploadingText: {
    marginTop: 8,
    fontSize: 13,
  },
  previewContainer: {
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    margin: 5,
  },
  image: {
    width: 75,
    height: 65,
    borderRadius: 15,
  },
  deleteBtn: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: '#fff',
    fontSize: 10,
  },
  successText: {
    marginTop: 10,
    fontSize: 12,
    color: '#333',
  },
});

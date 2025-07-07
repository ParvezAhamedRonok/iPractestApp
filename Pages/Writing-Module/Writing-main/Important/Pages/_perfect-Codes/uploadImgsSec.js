import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useStateContext } from '@/contexts/ContextProvider';
import UploadImg1 from '../../../../../../assets/images/Writing-Images/uploadImg1.png';
import { WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE } from "../../../../../../assets/URL's/AllUrl";

let ImageArray = [];

export default function uploadImagesSection({
  getUserWritinNo, setGetUserGritingNo, setIgameText, setitemsSet, setChangeImageUI,
}) {
  const {
    userPaymentStatusCheck,
    LoadingGlobally,
    setLoadingGlobally,
    setOpenClose_LogSign_Popup
  } = useStateContext();
  const [imagePreview, setPreview] = useState([]);


  useEffect(() => {
    //make the imageArray initially empty when it will come first this component 
    ImageArray = [];
    setPreview([]);

    console.log("iamges Urls_____===> " + ImageArray[0]);
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'We need permission to access your media library.');
        return;
      }

      const WritingNo = await AsyncStorage.getItem('WritingNo');
      if (WritingNo) {
        setGetUserGritingNo(WritingNo);
        alert(WritingNo);
      }
    })();
  }, []);

  const getImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: false,
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const selected = result.assets[0];
        const file = {
          uri: selected.uri,
          type: selected.type || 'image/jpeg',
          name: selected.fileName || `image_${Date.now()}.jpg`,
          url: selected.uri,
        };
        ImageArray.push(file);
        setPreview((prev) => [...prev, selected.uri]);
      }
    } catch (error) {
      console.log("Image pick error:", error);
      Alert.alert("Error", "Something went wrong while picking the image.");
    }
  };

  const deleteHandler = (image) => {
    setPreview((prev) => prev.filter((e) => e !== image));
    ImageArray = ImageArray.filter((img) => img.url !== image);
  };

  const handleUpload = () => {
    if (Number(getUserWritinNo) >= 11) {
      //here i do not need to make any in page login setup 
      // because i just need to make a login setup i can redirect it to the dashboard;
      uploadImageGCP();
     // alert("need login");
    } else {
      //can remove the localstorage from here also..or we 
      AsyncStorage.removeItem('WritingNo');
      uploadImageGCP();
    }
  };

  const uploadImageGCP = async () => {
    // alert("__ok");

    // console.log(getUserWritinNo);
    setTimeout(async () => {
      if (!ImageArray.length) return Alert.alert("Upload Error", "No image selected!");
      // console.log("__Image files====="+ImageArray)


      setLoadingGlobally(true);
      setitemsSet("uploaded-text")

      try {
        let combinedText = '';

        for (const image of ImageArray) {
          const formData = new FormData();

          formData.append('file', {
            uri: image.uri,
            type: 'image/png',
            name: `image_${Date.now()}.png`,
          });


          try {
            const res = await fetch('https://ipractest-406204.uc.r.appspot.com/GCPimageToText', {
              method: 'POST',
              body: formData,
            });

            const text = await res.text();
            console.log("🌐 Server raw response:", text);

            if (!res.ok) {

              throw new Error(`Upload failed: ${res.status}`);
            }

            const data = JSON.parse(text);
            const cleanText = data.message
             .replace(/^(Here('|’)?s\s+the\s+text\s+from\s+the\s+image:\s*)+/i, '')
              .replace(/['"]+/g, '')
              .replace(/\\n/g, ' ');

            combinedText += cleanText + ' ';
            // alert("__Success");
            // console.log("✅ Success:", cleanText);
            // console.log('1st_________' + combinedText);
            setChangeImageUI(true);


          } catch (error) {
            console.log("❌ Upload failed:", error.message);
            Alert.alert("Upload Error", error.message);
          }



        }
        // console.log('Second______________' + combinedText);
        setIgameText(combinedText.trim());
      } catch (err) {
        console.log(err);
        Alert.alert("Upload Error", "Failed to upload image. Try again.");
      } finally {
        setLoadingGlobally(false);
      }
    }, 1000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Evaluation From Image</Text>
      <View style={styles.uploadBox}>
        <View style={styles.imageContainer}>
          {imagePreview.map((image, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={{ uri: image }} style={styles.image} />
              <TouchableOpacity style={styles.deleteButton} onPress={() => deleteHandler(image)}>
                <Text style={styles.deleteText}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.uploadButton} onPress={getImage}>
          {imagePreview[0] ? (
            <Ionicons name="add-circle-outline" size={35} color="blue" />
          ) : (
            <Image source={UploadImg1} style={styles.uploadPlaceholder} />
          )}
        </TouchableOpacity>

        {imagePreview[0] ? (
          <Text style={styles.uploadLabel}>Upload Image</Text>
        ) : (
          <View style={styles.uploadTextContainer}>
            <Text style={styles.uploadTitle}>Upload Image Here, or browse</Text>
            <Text style={styles.uploadSubText}>Supports: PNG, JPG, JPEG</Text>
          </View>
        )}

        {imagePreview[0] && (
          <TouchableOpacity style={styles.convertButton} onPress={handleUpload}>
            <Ionicons name="heart" size={20} color="white" />
            <Text style={styles.convertText}> Convert image into Text</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  uploadBox: {
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    padding: 20,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  imageWrapper: {
    position: 'relative',
    margin: 5,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 15,
  },
  deleteButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  uploadButton: {
    marginTop: 10,
    borderWidth: 2,
    borderStyle: 'dotted',
    padding: 10,
    borderRadius: 10,
  },
  uploadPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  uploadLabel: {
    fontSize: 12,
    marginTop: 8,
  },
  uploadTextContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  uploadTitle: {
    fontSize: 16,
  },
  uploadSubText: {
    fontSize: 13,
    opacity: 0.6,
  },
  convertButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  convertText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 14,
  },
});

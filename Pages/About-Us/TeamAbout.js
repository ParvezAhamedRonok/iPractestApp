import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CEO_Sir = require('../../assets/images/ceo.jpg');
const CTO_Pic = require('../../assets/images/Mans/Parvez-1.jpeg');
const Researcher = require('../../assets/images/shadman.jpg');
const Co_founder = require("../../assets/images/Mans/SohelVai.jpg");

const teamMembers = [
  {
    name: "Alam AL Saud",
    role: "CEO-Founder",
    img: CEO_Sir,
    email: "mailto:Saud@ipractest.com",
    facebook: "https://www.facebook.com/saud.arian",
    linkedin: "https://www.linkedin.com/in/alam-al-saud/",
  },
  {
    name: "MD Sohel Rana",
    role: "Co-Founder",
    img: Co_founder,
    email: "mailto:rana161305ahmed@gmail.com",
    facebook: "https://www.facebook.com/rana161305",
    linkedin: "https://www.linkedin.com/in/msr-rana/",
  },
  {
    name: "Parvez Ahamed Ronok",
    role: "Front-End Developer",
    img: CTO_Pic,
    email: "mailto:parvej.rownok@ipractest.com",
    facebook: "https://www.facebook.com/profile.php?id=100009574957039",
    linkedin: "https://www.linkedin.com/in/md-parvez-993b66202/",
  },
  {
    name: "Shadman Sakib",
    role: "Language Researcher",
    img: Researcher,
    email: "mailto:Shadman.sakib@ipractest.com",
    facebook: "https://www.facebook.com/shadman.sakib.72000",
    linkedin: "#",
  },
];

const { width } = Dimensions.get('window');

const TeamAbout = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Meet Our Team Members</Text>
      <Text style={styles.subheading}>
        Collaboration sparks innovation. Explore the minds shaping our journey.
      </Text>

      <View style={styles.grid}>
        {teamMembers.map((member, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity onPress={() => setSelectedImage(member.img)}>
              <Image source={member.img} style={styles.profileImage} />
            </TouchableOpacity>
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.role}>{member.role}</Text>
            <View style={styles.socialIcons}>
              <TouchableOpacity onPress={() => Linking.openURL(member.email)}>
                <Icon name="envelope" size={26} color="#EA4335" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(member.facebook)}>
                <Icon name="facebook-square" size={26} color="#1877f2" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(member.linkedin)}>
                <Icon name="linkedin-square" size={26} color="#0a66c2" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <Modal visible={!!selectedImage} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setSelectedImage(null)}
        >
          <Image source={selectedImage} style={styles.fullImage} />
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#111827',
  },
  subheading: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  card: {
    width: width / 2 - 30,
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 6,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#d1d5db',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    color: '#111827',
    textAlign: 'center',
  },
  role: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    gap: 15,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '90%',
    height: '70%',
    borderRadius: 20,
    resizeMode: 'contain',
  },
});

export default TeamAbout;

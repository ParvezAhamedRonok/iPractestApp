import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CourseCard = ({ passDataFunc }) => {
  return (
    <View className="slider" style={styles.cardWrapper}>
      {/* Discount Badge */}
      <View style={styles.discountWrapper}>
        <View style={styles.discountRibbon}>
          <Text style={styles.discountText}>30% OFF</Text>
        </View>
      </View>

      {/* Course Details */}
      <View style={styles.courseDetails}>
        <View style={styles.courseBadge}>
          <Text style={styles.courseBadgeText}>Regular  Course</Text>
        </View>
        <Text style={styles.courseDescription}>
       A comprehensive program designed to build all four IELTS skills—listening, reading, writing, and speaking—through in-depth practice, expert guidance, and personalized feedback. This course is ideal for students aiming for steady progress and thorough preparation.
        </Text>
        <Text style={styles.price}>
          <Text style={styles.currency}>৳</Text> 5999 <Text style={styles.duration}>/ 3 Months</Text>
        </Text>
      </View>

      {/* Features */}
      <View style={styles.featuresSection}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Online Classes</Text>
        </View>

        <View style={styles.featureItem}>
          <Icon name="lightbulb-o" size={16} color="#fff" />
          <Text style={styles.featureText}><Text style={styles.bold}>3-Month Course</Text>  (3 Classes Per Week)</Text>
        </View>

        <View style={styles.featureItem}>
          <Icon name="lightbulb-o" size={16} color="#fff" />
          <Text style={styles.featureText}><Text style={styles.bold}>36 IELTS Classes</Text>(Reading, Speaking, Writing, Listening)</Text>
        </View>

        <View style={styles.featureItem}>
          <Icon name="lightbulb-o" size={16} color="#fff" />
          <Text style={styles.featureText}><Text style={styles.bold}>1</Text> Review and Exam Class</Text>
        </View>

        <View style={styles.featureItem}>
          <Icon name="lightbulb-o" size={16} color="#fff" />
          <Text style={styles.featureText}><Text style={styles.bold}>20 Mock Test Exams</Text></Text>
        </View>

        <View style={styles.featureItem}>
          <Icon name="lightbulb-o" size={16} color="#fff" />
          <Text style={styles.featureText}><Text style={styles.bold}>All Lecture Materials Provided</Text></Text>
        </View>

        {/* Contact Info */}
        <Text style={styles.contactLabel}><Text style={styles.bold}>Contact Now_</Text></Text>
        <View style={styles.contactRow}>
          <Icon name="phone" size={14} color="#fff" />
          <Text style={styles.contactText}>+880 1643914634</Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.bookButton} onPress={() => { passDataFunc('RegularCourse', 5999, "SSL") }}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: '#9333EA',
    borderRadius: 16,
    overflow: 'hidden',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    elevation: 4,
  },
  discountWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
    alignItems: 'flex-end',
    padding: 5,
  },
  discountRibbon: {
    backgroundColor: '#F3B705',
    width: 140,
    transform: [{ rotate: '45deg' }, { translateX: 40 }, { translateY: -25 }],
    paddingVertical: 2,
  },
  discountText: {
    fontSize: 10,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  courseDetails: {
    backgroundColor: '#9F48EE',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  courseBadge: {
    backgroundColor: '#9333EA',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  courseBadgeText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 11,
    color: '#fff',
    lineHeight: 15,
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  currency: {
    fontSize: 14,
    position: 'relative',
    top: -10,
  },
  duration: {
    fontSize: 10,
  },
  featuresSection: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
  },
  tag: {
    backgroundColor: '#032B43',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 9,
    color: '#fff',
    fontWeight: 'bold',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  featureText: {
    fontSize: 11,
    color: '#fff',
    flex: 1,
  },
  bold: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  contactLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 10,
    fontFamily: 'monospace',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginLeft: 20,
    marginTop: 4,
  },
  contactText: {
    fontSize: 11,
    color: '#fff',
  },
  bookButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 100,
    marginBottom: 16,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 14,
  },
});

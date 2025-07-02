import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useStateContext } from '../../../../contexts/ContextProvider';



const asianCountries = [
  "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei",
  "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq",
  "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon",
  "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman",
  "Pakistan", "Palestine", "Philippines", "Qatar", "Saudi Arabia", "Singapore",
  "South Korea", "Sri Lanka", "Syria", "Tajikistan", "Thailand", "Timor-Leste",
  "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"
];

const { height: screenHeight } = Dimensions.get('window');


const CourseCard = ({ userCountry, passDataFunc }) => {
  const { userPaymentStatusCheck } = useStateContext();

  return (
    <View className="slider" style={styles.cardWrapper}>

      {/* Course Details */}
      <View style={styles.courseDetails}>
        <View style={styles.courseBadge}>
          <Text style={styles.courseBadgeText}>Starter  Package</Text>
        </View>
        <Text style={styles.courseDescription}>
          Start your IELTS journey with essential study materials and support.
        </Text>
        <Text style={styles.price}>
          <Text style={styles.currency}>{userCountry === "Bangladesh" ? "৳" : "$"}</Text>
          {userCountry === "Bangladesh" ? 287 : (asianCountries.includes(userCountry) ? 4.5 : 6.5)}
          <Text style={styles.duration}>/ 3 Months</Text>
        </Text>
      </View>

      {/* Features */}
      <View style={styles.featuresSection}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Mock Tests</Text>
        </View>

        <View style={styles.featureItem}>
          <Icon name="lightbulb-o" size={16} color="#000" />
          <Text style={styles.featureText}><Text style={styles.bold}>20+ Speaking Mock Test</Text> </Text>
        </View>

        <View style={styles.featureItem}>
          <Icon name="lightbulb-o" size={16} color="#000" />
          <Text style={styles.featureText}><Text style={styles.bold}>44 Reading and Listening Mock Test</Text> </Text>
        </View>

        <View style={styles.featureItem}>
          <Icon name="lightbulb-o" size={16} color="#000" />
          <Text style={styles.featureText}><Text style={styles.bold}>200+  Writing Evaluation and Mock Test</Text> </Text>
        </View>

        <View style={styles.featureItem}>
          <Icon name="lightbulb-o" size={16} color="#000" />
          <Text style={styles.featureText}><Text style={styles.bold}>200+  Writing Feedback</Text> </Text>
        </View>

        <View style={styles.featureItem}>
          <Icon name="lightbulb-o" size={16} color="#000" />
          <Text style={styles.featureText}><Text style={styles.bold}>Get all Reading Explanations</Text> </Text>
        </View>
        <View style={styles.featureItem}>
          <Icon name="lightbulb-o" size={16} color="#000" />
          <Text style={styles.featureText}><Text style={styles.bold}>Unlimited SOP creation with AI</Text> </Text>
        </View>

      </View>

      {/* Button */}
      <TouchableOpacity style={styles.bookButton} onPress={() => {
        passDataFunc('Starter', 287, "Paypal")
      }}>
        <Text style={styles.bookButtonText}>
          {
            userCountry == "Bangladesh" ? 'Start Practicing' : ' Continue with Paypal'
          }
        </Text>
      </TouchableOpacity>

      {
        userCountry != "Bangladesh" && <TouchableOpacity style={styles.bookButton} onPress={() => {
          passDataFunc('Starter', 287, "Stripe")
        }}>
          <Text style={styles.bookButtonText}> {
            userCountry == "Bangladesh" ? "Start Practicing" : "Continue with Stripe"
          }</Text>
        </TouchableOpacity>
      }
    </View >
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: '#F6B323',
    borderRadius: 16,
    overflow: 'hidden',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    elevation: 4,
    minHeight: screenHeight * 0.60, // 55% of screen height
    // height: 'auto' is implicit in React Native — no need to set
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
    backgroundColor: '#F6B323',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,

    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    // Android Shadow
    elevation: 2,
  },

  courseBadge: {
    backgroundColor: '#F6B323',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  courseBadgeText: {
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 11,
    color: '#000',
    lineHeight: 15,
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
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
    paddingTop: 10,
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
    fontSize: 11,
    color: '#fff',
    fontWeight: 'bold',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 11,
    color: '#000',
    flex: 1,
  },
  bold: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  contactLabel: {
    fontSize: 12,
    color: '#000',
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
    color: '#000',
  },
  bookButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 100,
    marginBottom: 10,
    marginTop: 'auto',
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 14,
  },
});

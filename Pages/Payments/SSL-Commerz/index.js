import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Linking,
  Pressable,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Image } from "expo-image";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import Checkbox from "expo-checkbox";
import { useStateContext } from "@/contexts/ContextProvider";
import {
  SSL_COMMERZ_POST_FOR_OPEN_CHECKOUT_PAGE,
  SSL_COMMERZ_POST_FOR_UPGRADE_USER_PAYMENT_INFO_WITH_AMOUNT,
  TEACHER_PORTAL_GET_REQUEST_FOR_COLLECT_ALL_bATCH_DATA_FOR_SHOWING_TO_USERS,
} from "@/assets/URL's/AllUrl";

export default function PaymentScreen({
  setAmerPayPayment,
  productName,
  makingAmount,
}) {
  const { userPaymentStatusCheck } = useStateContext();
  const navigation = useRouter();

  const [userInfo, setUserInfo] = useState({
    cus_name: "",
    cus_email: "",
    cus_phone: "",
    currency: "BDT",
    Country: "Bangladesh",
    city: "",
    postcode: "",
    referID: "",
    productName: productName || "",
    BatchName: "",
  });

  const [userCountry, setUserCountry] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [referredID, setReferredID] = useState("");
  const [storeBatchTime, setStoreBatchTime] = useState([]);
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const country = await AsyncStorage.getItem("setCountry") || "Bangladesh";
      const email = await AsyncStorage.getItem("userEmail") || "mdpervez946@gmail.com";
      const refer = await AsyncStorage.getItem("referID");
      // alert(email)

      setUserCountry(country);
      setUserEmail(email);
      setReferredID(refer || "");

      setUserInfo((prev) => ({
        ...prev,
        cus_email: email,
        referID: refer,
        Country: country,
      }));

      try {
        const response = await fetch(
          TEACHER_PORTAL_GET_REQUEST_FOR_COLLECT_ALL_bATCH_DATA_FOR_SHOWING_TO_USERS
        );
        const json = await response.json();
        const filtered = json.data.filter((item) => item.CourseName === productName);
        setStoreBatchTime(filtered);
      } catch (err) {
        console.error(err);
        Alert.alert("Error", "Failed to load batch data.");
      }
    };

    fetchUserData();
  }, [productName]);

  const handleInput = (name, value) => {
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!userInfo.cus_name || !userInfo.cus_phone || !userInfo.city) {
      Alert.alert("Validation", "Please complete all required fields.");
      return;
    }

    if (!agreePolicy || !agreePrivacy) {
      Alert.alert("Policy Required", "Please agree to all policies to proceed.");
      return;
    }

    const data = {
      currency: userInfo.currency,
      address: userInfo.city,
      city: userInfo.city,
      cus_name: userInfo.cus_name,
      cus_email: userEmail,
      cus_phone: userInfo.cus_phone,
      Country: userInfo.Country,
      productName: userInfo.productName,
      makingAmount: makingAmount,
      referID: userInfo.referID,
      BatchName: userInfo.BatchName,
    };

    const url = userPaymentStatusCheck
      ? SSL_COMMERZ_POST_FOR_UPGRADE_USER_PAYMENT_INFO_WITH_AMOUNT
      : SSL_COMMERZ_POST_FOR_OPEN_CHECKOUT_PAGE;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.redirect) {
        const encodedURL = encodeURIComponent(result.redirect);
        navigation.push(`/redirect-paymentPage/${encodedURL}`);
      }

    } catch (error) {
      console.error("Payment error:", error);
      Alert.alert("Payment Failed", "Something went wrong with the payment.");
    }
  };

  const isButtonDisabled =
    !userInfo.cus_name ||
    !userInfo.cus_phone ||
    !userInfo.city ||
    !agreePolicy ||
    !agreePrivacy;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, zIndex: 1000, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <Pressable onPress={() => setAmerPayPayment(false)} style={styles.closeButton}>
        <Text style={styles.closeText}>×</Text>
      </Pressable>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={styles.header}>Billing Information</Text>
            <Text
              style={{
                alignSelf: 'center', // centers the text horizontally
                backgroundColor: '#E8F0FE', // subtle, professional bg
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 50,
                fontSize: 12,
                fontWeight: '600',
                color: '#2C3E50',
                overflow: 'hidden', // ensures rounded corners clip bg properly
              }}
            >
              {(productName === "Expert" || productName === "Starter" || productName === "RegularCourse") && "3"}
              {productName === "CrashCourse" && "1"}
              {productName === "FoundationCourse" && "4"} Months Package
            </Text>

            <Text style={styles.amount}>Total Amount: ৳ {makingAmount}</Text>

            <TextInput
              placeholder="Full Name"
              style={styles.input}
              onChangeText={(text) => handleInput("cus_name", text)}
            />

            <TextInput
              value={userEmail}
              placeholder={userEmail}
              editable={false}
              style={[styles.input, { backgroundColor: "#f0f0f0" }]}
            />

            <TextInput
              placeholder="Phone Number"
              keyboardType="phone-pad"
              style={styles.input}
              onChangeText={(text) => handleInput("cus_phone", text)}
            />

            <TextInput
              value={userCountry}
              editable={false}
              placeholder="Country"
              style={[styles.input, { backgroundColor: "#f0f0f0" }]}
            />

            <TextInput
              placeholder="City"
              style={styles.input}
              onChangeText={(text) => handleInput("city", text)}
            />

            <View style={styles.policyContainer}>
              <View style={styles.policyRow}>
                <Checkbox
                  value={agreePolicy}
                  onValueChange={setAgreePolicy}
                  color={agreePolicy ? "#22c55e" : "#d1d5db"} // Tailwind green-500
                  style={styles.checkbox}
                />
                <Text style={styles.policyText}>
                  I agree to the <Text style={styles.link}>Terms and Conditions</Text>
                </Text>
              </View>

              <View style={styles.policyRow}>
                <Checkbox
                  value={agreePrivacy}
                  onValueChange={setAgreePrivacy}
                  color={agreePrivacy ? "#22c55e" : "#d1d5db"}
                  style={styles.checkbox}
                />
                <Text style={styles.policyText}>
                  I agree to the <Text style={styles.link}>Privacy Policy</Text>
                </Text>
              </View>
            </View>


            <TouchableOpacity
              style={[styles.submitBtn, isButtonDisabled && { opacity: 0.5 }]}
              onPress={handleSubmit}
              disabled={isButtonDisabled}
            >
              <Text style={styles.submitText}>Pay ৳ {makingAmount}</Text>
            </TouchableOpacity>

            <View style={styles.paymentLogos}>
              <Image source={require('@/assets/images/otherImgs/masterCard.png')} style={styles.logo} />
              <Image source={require('@/assets/images/otherImgs/bkash2.webp')} style={styles.logoSmall} />
              <Image source={require('@/assets/images/otherImgs/nogod2.jpeg')} style={styles.logoSmall} />
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  closeButton: {
    position: 'absolute',
    top: -5,
    right: 10,
    zIndex: 10,
    padding: 8,
  },
  closeText: {
    fontSize: 32,
    color: 'red',
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    marginBottom: 5,
  },
  amount: {
    fontSize: 15,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 7
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  policyContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
    gap: 12,
  },

  policyRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 6,
  },

  policyText: {
    marginLeft: 12,
    fontSize: 15,
    color: "#374151", // Tailwind slate-700
    flexShrink: 1, // Handles overflow nicely
    fontWeight: "500",
  },

  link: {
    color: "#2563eb", // Tailwind blue-600
    fontWeight: "600",
  },

  submitBtn: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
  },
  paymentLogos: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: 90,
    height: 30,
    resizeMode: "contain",
  },
  logoSmall: {
    width: 50,
    height: 40,
    resizeMode: "contain",
    marginLeft: 10,
  },
});

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Animated, { FadeInDown, FadeIn, FadeOut } from "react-native-reanimated";
import { useRouter } from 'expo-router';
import { Image } from 'expo-image'; // ✅ use expo-image for animated GIF support
import EnjotImg from "../../../../assets/images/Payments/enjoy.gif";
import EnjotImg2 from "../../../../assets/images/Payments/enjoy-2.gif";

const screenWidth = Dimensions.get("window").width;

const PaymentSuccess = ({ userPaymentStatusCheck = "Expert" }) => {
  const navigation = useRouter();
  const [makeAnimations, setMakeAnimations] = useState(true);
  const starterEnjoyImgArr = [EnjotImg, EnjotImg2];

  useEffect(() => {
    const timer = setTimeout(() => {
      setMakeAnimations(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!userPaymentStatusCheck) return null;

  const handleHome = () => navigation.push("/");
  const handleClassDetails = () => {
    if (userPaymentStatusCheck === "Expert") {
      navigation.push("Dashboard");
    } else {
      navigation.push("ClassDetails");
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInDown.duration(500)} exiting={FadeOut} style={styles.card}>
        <Text style={styles.title}>🎉 Congratulations!</Text>
        <Text style={styles.subtitle}>Your payment has been successful.</Text>
        <Image
          source={starterEnjoyImgArr[Math.floor(Math.random() * starterEnjoyImgArr.length)]}
          style={styles.image}
          contentFit="cover"
          transition={300}
        />

        {userPaymentStatusCheck === "Starter" || userPaymentStatusCheck === "Expert" ? (
          <TouchableOpacity style={styles.primaryButton} onPress={handleHome}>
            <Text style={styles.buttonText}>🏠 Go to Home</Text>
          </TouchableOpacity>
        ) : (
          <Animated.View entering={FadeIn.delay(300)}>
            <Text style={styles.classTitle}>Your Class Details</Text>
            <Text style={styles.classText}>Live class details will be available in your Dashboard.</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.secondaryButton} onPress={handleClassDetails}>
                <Text style={styles.buttonText}>🔍 Check Class Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.primaryButton} onPress={handleHome}>
                <Text style={styles.buttonText}>🏠 Go to Home</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
      </Animated.View>
    </View>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: screenWidth * 0.9,
    maxWidth: 400,
    backgroundColor: "#f0f8ff",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6b21a8",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#4b5563",
    marginBottom: 12,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 999,
    marginVertical: 10,
  },
  primaryButton: {
    backgroundColor: "#7c3aed",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 10,
  },
  secondaryButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  classTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#b91c1c",
    marginTop: 16,
  },
  classText: {
    fontSize: 12,
    color: "#dc2626",
    textAlign: "center",
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 16,
    flexWrap: "wrap",
  },
});



























// "use client";

// import React, { useState, useEffect, Suspense } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { CheckPaymentStatus } from "@/components/Payments/CkeckPayment/CheckPayments.js";
// import { useStateContext } from "@/contexts/ContextProvider";

// import EnjotImg from "@assets/images/Payments/enjoy.gif";
// import EnjotImg2 from "@assets/images/Payments/enjoy-2.gif";


// function Payment_Success() {
//     const history = useRouter();
//     const { userPaymentStatusCheck } = useStateContext();
//     const [makeAnimations, setMakeAnimations] = useState(true);

//     const starterEnjoyImgArr = [EnjotImg, EnjotImg2];

//     useEffect(() => {
//         setTimeout(() => setMakeAnimations(false), 5000);
//     }, []);

//     CheckPaymentStatus();

//     if (!userPaymentStatusCheck) return null;

//     return (
//         <div className="flex items-center justify-center min-h-screen">
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.9, y: -50 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-[90%] sm:w-[400px] bg-gradient-to-b from-blue-200 to-white shadow-2xl p-6 rounded-xl text-center"
//             >
//                 {userPaymentStatusCheck === "Starter" || userPaymentStatusCheck === "Expert" ? (
//                     <>
//                         <h3 className="text-2xl font-bold text-purple-700">🎉 Congratulations!</h3>
//                         <p className="text-gray-700 mt-2">Your payment has been successful.</p>
//                         <Image
//                             src={starterEnjoyImgArr[Math.floor(Math.random() * starterEnjoyImgArr.length)]}
//                             alt="Celebrate"
//                             className="mx-auto w-32 h-32 rounded-full cursor-pointer"
//                         />
//                         <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="mt-4 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition-all"
//                             onClick={() => history.push("/")}
//                         >
//                             Go to Home
//                         </motion.button>
//                     </>
//                 ) : (
//                     <>
//                         <h3 className="text-2xl font-bold text-purple-700">🎉 Congratulations!</h3>
//                         <p className="text-gray-700 mt-2">Your payment has been successful.</p>
//                         <Image
//                             src={starterEnjoyImgArr[Math.floor(Math.random() * starterEnjoyImgArr.length)]}
//                             alt="Celebrate"
//                             className="mx-auto w-36 h-36 rounded-full cursor-pointer mt-4"
//                         />
//                         <div className="mt-4">
//                             <h4 className="text-lg font-semibold text-red-700">Your Class Details</h4>
//                             <p className="text-sm text-red-600">Live class details will be available in your Dashboard.</p>
//                             <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
//                                 <motion.button
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     transition={{ type: "spring", stiffness: 200, damping: 12 }}
//                                     className="px-6 py-3 text-sm font-medium bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-75 transition-all whitespace-nowrap"
//                                     onClick={() =>
//                                         userPaymentStatusCheck === "Expert"
//                                             ? history.push("/User-Dashboard/Dashboard")
//                                             : history.push("/User-Dashboard/Class-Details")
//                                     }
//                                 >
//                                     🔍 Check Class Details
//                                 </motion.button>

//                                 <motion.button
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     transition={{ type: "spring", stiffness: 200, damping: 12 }}
//                                     className="px-6 py-3 text-sm font-medium bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75 transition-all whitespace-nowrap"
//                                     onClick={() => history.push("/")}
//                                 >
//                                     🏠 Go to Home
//                                 </motion.button>
//                             </div>


//                         </div>
//                     </>
//                 )}
//             </motion.div>
//         </div>
//     );
// }

// export default Payment_Success;

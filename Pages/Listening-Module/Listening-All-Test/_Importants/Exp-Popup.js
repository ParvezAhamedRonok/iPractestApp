

import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useStateContext } from '@/contexts/ContextProvider';

const ExplanationsPopup = () => {
  const { setOpenPopup_ExR, explainObj_Reading } = useStateContext();
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingState(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const {
    number,
    Ans1,
    mainAns,
    keyWords,
    explain,
    hiddenWord,
    hiddenWord2,
    hiddenWord3,
  } = explainObj_Reading;

  const highlightWords = [hiddenWord, hiddenWord2, hiddenWord3].filter(Boolean);

  // Highlight words manually
  const highlightText = (text) => {
    if (highlightWords.length === 0) return <Text style={styles.explanationText}>{text}</Text>;

    const regex = new RegExp(`(${highlightWords.join('|')})`, 'gi');
    const parts = text.split(regex);

    return (
      <Text style={styles.explanationText}>
        {parts.map((part, index) => {
          const isHighlighted = highlightWords.some(
            (word) => word.toLowerCase() === part.toLowerCase()
          );
          return (
            <Text
              key={index}
              style={isHighlighted ? styles.highlightedText : undefined}
            >
              {part}
            </Text>
          );
        })}
      </Text>
    );
  };

  const explanationArray = explain.split('**');

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={() => setOpenPopup_ExR(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Close Button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setOpenPopup_ExR(false)}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>🎉 Explanation</Text>
            <Text style={styles.headerSubtitle}>
              Check out this important explanation below:
            </Text>
          </View>

          {/* Content */}
          {loadingState ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#007bff" />
            </View>
          ) : (
            <ScrollView style={styles.contentContainer}>
              {/* Question Number and Answer */}
              <View style={styles.questionInfo}>
                <View style={styles.questionNumber}>
                  <Text style={styles.questionNumberText}>{number}</Text>
                </View>
                <Text style={styles.correctAnswer}>
                  {Ans1 || mainAns}
                </Text>
              </View>

              {/* Keywords */}
              {keyWords ? (
                <View style={styles.keywordsContainer}>
                  <Text style={styles.keywordsLabel}>Keywords:</Text>
                  <Text style={styles.keywordsText}>{keyWords}</Text>
                </View>
              ) : null}

              {/* Explanation */}
              <View style={styles.explanationContainer}>
                <Text style={styles.explanationTitle}>Explanation:</Text>
                {explanationArray.map((item, index) => (
                  <View key={index}>{highlightText(item)}</View>
                ))}
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ExplanationsPopup;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    maxHeight: '90%',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#dc2626',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#6b7280',
  },
  loadingContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    marginTop: 10,
  },
  questionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  questionNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  questionNumberText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  correctAnswer: {
    fontSize: 16,
    fontWeight: '600',
    color: '#16a34a',
  },
  keywordsContainer: {
    marginBottom: 12,
  },
  keywordsLabel: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 4,
  },
  keywordsText: {
    fontSize: 13,
    color: '#374151',
  },
  explanationContainer: {
    marginTop: 8,
  },
  explanationTitle: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 6,
  },
  explanationText: {
    fontSize: 13,
    color: '#374151',
    marginBottom: 8,
    flexWrap: 'wrap',
    lineHeight: 20,
  },
  highlightedText: {
    color: 'green',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});




























// import React, { useEffect, useState } from "react";
// import { useStateContext } from "@/contexts/ContextProvider";
// import { motion, AnimatePresence } from "framer-motion";

// function ExplanationsPopup() {
//     const { setOpenPopup_ExR, explainObj_Reading } = useStateContext();

//     // Explanation array
//     let explainArry = explainObj_Reading.explain.split("**");

//     // State for loading
//     const [loadingState, setLoadingState] = useState(true);


//     // Highlight specific words
//     useEffect(() => {
//         changeColorsOfTextFunc();
//         setLoadingState(false);
//     }, []);

//     const changeColorsOfTextFunc = () => {
//         setTimeout(() => {
//             let makeWordForChangeColor = explainObj_Reading.hiddenWord || explainObj_Reading.mainAns;
//             let makeWordForChangeColor2 = explainObj_Reading.hiddenWord2 || "``````````````````";
//             let makeWordForChangeColor3 = explainObj_Reading.hiddenWord3 || "````````````````````````";
//             let p2 = document.getElementById("properWord");
//             let keys2 = [makeWordForChangeColor, makeWordForChangeColor2, makeWordForChangeColor3];

//             keys2.forEach((item) => {
//                 p2.innerHTML = p2.innerHTML.replace(
//                     new RegExp("\\b" + item + "\\b", "g"),
//                     `<span style='color:green;font-weight:900;font-size:17px;margin-right:1px;text-decoration-line:underline;'>${item}</span>`
//                 );
//             });
//         }, 1000);
//     };

//     return (
//         <>
//             {/* Background Overlay */}
//             <motion.div
//                 className="fixed inset-0 z-[1000000] bg-black/60 backdrop-blur-sm flex justify-center items-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//             >
//                 <AnimatePresence>
//                     <motion.div
//                         className="bg-white p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-full relative"
//                         style={{
//                             // minHeight: '300px',
//                             maxHeight: '93vh',
//                             overflowY: 'auto'
//                         }}
//                         initial={{ scale: 0.7, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         exit={{ scale: 0.7, opacity: 0 }}
//                         transition={{
//                             type: "spring",
//                             stiffness: 200,
//                             damping: 20,
//                         }}
//                     >
//                         {/* Close Button */}
//                         <motion.button
//                             className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-500 text-white flex justify-center items-center hover:bg-red-600"
//                             whileHover={{ rotate: 90 }}
//                             onClick={() => setOpenPopup_ExR(false)}
//                         >
//                             ✕
//                         </motion.button>

//                         {/* Advertisement Banner */}
//                         <div className="text-start mb-4">
//                             <h2 className="text-2xl font-bold text-blue-600">🎉 Explanation</h2>
//                             <p className="text-gray-500 text-sm">Check out this important explanation below:</p>
//                         </div>

//                         {/* Loading State */}
//                         {loadingState ? (
//                             <div className="flex justify-center items-center h-40">
//                                 <motion.div
//                                     className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"
//                                     initial={{ rotate: 0 }}
//                                     animate={{ rotate: 360 }}
//                                     transition={{
//                                         repeat: Infinity,
//                                         duration: 1,
//                                         ease: "linear",
//                                     }}
//                                 ></motion.div>
//                             </div>
//                         ) : (
//                             // Content Section
//                             <div className="space-y-4">
//                                 {/* Header Section */}
//                                 <div className="flex items-center gap-3">
//                                     <motion.div
//                                         className="w-8 h-8 text-sm font-bold rounded-full bg-black text-white flex justify-center items-center"
//                                         initial={{ scale: 0.8 }}
//                                         animate={{ scale: 1 }}
//                                     >
//                                         {explainObj_Reading.number}
//                                     </motion.div>
//                                     <h3 className="text-lg font-semibold text-green-500">
//                                         {explainObj_Reading.Ans1 || explainObj_Reading.mainAns}
//                                     </h3>
//                                 </div>

//                                 {/* Keywords */}
//                                 {explainObj_Reading.keyWords && (
//                                     <div>
//                                         <span className="font-bold text-md underline mr-2">Keywords:</span>
//                                         <span className="text-sm">{explainObj_Reading.keyWords}</span>
//                                     </div>
//                                 )}

//                                 {/* Explanation Content */}
//                                 <div id="properWord">
//                                     <h4 className="font-bold text-md underline mb-2">Explanation:</h4>
//                                     {explainArry.map((item, index) => (
//                                         <motion.p
//                                             key={index}
//                                             className="text-gray-700 text-sm mb-2"
//                                             initial={{ opacity: 0, y: 10 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             transition={{ delay: index * 0.1 }}
//                                         >
//                                             {item}
//                                         </motion.p>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </motion.div>
//                 </AnimatePresence>
//             </motion.div>
//         </>
//     );
// }

// export default ExplanationsPopup;

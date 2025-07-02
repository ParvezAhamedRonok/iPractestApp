
import React, { useEffect, useState } from 'react';
// import { useNavigation, useRoute } from '@react-navigation/native'; // ✅ Import both hooks
import { useLocalSearchParams, useRouter } from 'expo-router';

import { SafeAreaView, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"; // Make sure to install this
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure Ionicons is installed


// TestComponentRenderer.jsx
import {
    // Actual Tests
    ListeningTest1,
    //  ListeningTest2, ListeningTest3, ListeningTest4, ListeningTest5,
    // ListeningTest6, ListeningTest7, ListeningTest8, ListeningTest9, ListeningTest10,
    // ListeningTest11, ListeningTest12, ListeningTest13, ListeningTest14, ListeningTest15,
    // ListeningTest16, ListeningTest17, ListeningTest18, ListeningTest19, ListeningTest20,
    // ListeningTest21, ListeningTest22, ListeningTest23, ListeningTest24, ListeningTest25,
    // ListeningTest26, ListeningTest27, ListeningTest28, ListeningTest29, ListeningTest30,

    // // Cambridge
    // Cambridge_19_Test1, Cambridge_19_Test2, Cambridge_19_Test3, Cambridge_19_Test4,
    // Cambridge_18_Test1, Cambridge_18_Test2, Cambridge_18_Test3, Cambridge_18_Test4,
    // Cambridge_17_Test1, Cambridge_17_Test2, Cambridge_17_Test3, Cambridge_17_Test4,
    // Cambridge_16_Test1, Cambridge_16_Test2, Cambridge_16_Test3, Cambridge_16_Test4,
    // Cambridge_15_Test1, Cambridge_15_Test2, Cambridge_15_Test3, Cambridge_15_Test4,
} from '../All-Tests/StoreTests';

const testComponents = {
    // Actual
    "Actual-test-1": ListeningTest1,
    // "Actual-test-2": ListeningTest2,
    // "Actual-test-3": ListeningTest3,
    // "Actual-test-4": ListeningTest4,
    // "Actual-test-5": ListeningTest5,
    // "Actual-test-6": ListeningTest6,
    // "Actual-test-7": ListeningTest7,
    // "Actual-test-8": ListeningTest8,
    // "Actual-test-9": ListeningTest9,
    // "Actual-test-10": ListeningTest10,
    // "Actual-test-11": ListeningTest11,
    // "Actual-test-12": ListeningTest12,
    // "Actual-test-13": ListeningTest13,
    // "Actual-test-14": ListeningTest14,
    // "Actual-test-15": ListeningTest15,
    // "Actual-test-16": ListeningTest16,
    // "Actual-test-17": ListeningTest17,
    // "Actual-test-18": ListeningTest18,
    // "Actual-test-19": ListeningTest19,
    // "Actual-test-20": ListeningTest20,
    // "Actual-test-21": ListeningTest21,
    // "Actual-test-22": ListeningTest22,
    // "Actual-test-23": ListeningTest23,
    // "Actual-test-24": ListeningTest24,
    // "Actual-test-25": ListeningTest25,
    // "Actual-test-26": ListeningTest26,
    // "Actual-test-27": ListeningTest27,
    // "Actual-test-28": ListeningTest28,
    // "Actual-test-29": ListeningTest29,
    // "Actual-test-30": ListeningTest30,

    // // Cambridge
    // "Cambridge-19-Test1": Cambridge_19_Test1,
    // "Cambridge-19-Test2": Cambridge_19_Test2,
    // "Cambridge-19-Test3": Cambridge_19_Test3,
    // "Cambridge-19-Test4": Cambridge_19_Test4,

    // "Cambridge-18-Test1": Cambridge_18_Test1,
    // "Cambridge-18-Test2": Cambridge_18_Test2,
    // "Cambridge-18-Test3": Cambridge_18_Test3,
    // "Cambridge-18-Test4": Cambridge_18_Test4,

    // "Cambridge-17-Test1": Cambridge_17_Test1,
    // "Cambridge-17-Test2": Cambridge_17_Test2,
    // "Cambridge-17-Test3": Cambridge_17_Test3,
    // "Cambridge-17-Test4": Cambridge_17_Test4,

    // "Cambridge-16-Test1": Cambridge_16_Test1,
    // "Cambridge-16-Test2": Cambridge_16_Test2,
    // "Cambridge-16-Test3": Cambridge_16_Test3,
    // "Cambridge-16-Test4": Cambridge_16_Test4,

    // "Cambridge-15-Test1": Cambridge_15_Test1,
    // "Cambridge-15-Test2": Cambridge_15_Test2,
    // "Cambridge-15-Test3": Cambridge_15_Test3,
    // "Cambridge-15-Test4": Cambridge_15_Test4,
};











function Reading({ RightAnswers }) {
    const navigation = useRouter();
    const { testID } = useLocalSearchParams();
    const TestComponent = testComponents[testID];


    const insets = useSafeAreaInsets();
    // for Mobile Sizes states-----


    return (
        <View style={{ flex: 1, position: 'relative' }}>
            {/* all component will be here  */}
            {TestComponent ? (
                <TestComponent
                    RightAnswers={RightAnswers}
                />
            ) : (
                <Text>Test not found.</Text>
            )}

            {/* Floating Button 2 - Left */}
            <View
                style={{
                    position: 'absolute',
                    bottom: insets.bottom + 75,
                    left: 4,
                }}
            >

            </View>
        </View>
    );
};
export default Reading;


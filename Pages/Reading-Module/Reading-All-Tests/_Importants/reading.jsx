
import React, { useEffect, useState } from 'react';
// import { useNavigation, useRoute } from '@react-navigation/native'; // ✅ Import both hooks
import { useLocalSearchParams, useRouter } from 'expo-router';

import { SafeAreaView, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"; // Make sure to install this
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure Ionicons is installed
// import Testing from "../_tests/Test1"
import {
    Test1Panel1_Page1,
    Test1Panel1_Page2,
    Test1Panel2_Page1,
    Test1Panel2_Page2,
    //Cambridge tests importing....
    //Cambridge 15
    // Cambidge_15_Test1_P1_Q1, Cambidge_15_Test1_P1_Q2, Cambidge_15_Test1_P2_Q1, Cambidge_15_Test1_P2_Q2,
    // Cambidge_15_Test2_P1_Q1, Cambidge_15_Test2_P1_Q2, Cambidge_15_Test2_P2_Q1, Cambidge_15_Test2_P2_Q2,
    // Cambidge_15_Test3_P1_Q1, Cambidge_15_Test3_P1_Q2, Cambidge_15_Test3_P2_Q1, Cambidge_15_Test3_P2_Q2,
    // Cambidge_15_Test4_P1_Q1, Cambidge_15_Test4_P1_Q2, Cambidge_15_Test4_P2_Q1, Cambidge_15_Test4_P2_Q2,
    // //Cambridge 16
    // Cambidge_16_Test1_P1_Q1, Cambidge_16_Test1_P1_Q2, Cambidge_16_Test1_P2_Q1, Cambidge_16_Test1_P2_Q2,
    // Cambidge_16_Test2_P1_Q1, Cambidge_16_Test2_P1_Q2, Cambidge_16_Test2_P2_Q1, Cambidge_16_Test2_P2_Q2,
    // Cambidge_16_Test3_P1_Q1, Cambidge_16_Test3_P1_Q2, Cambidge_16_Test3_P2_Q1, Cambidge_16_Test3_P2_Q2,
    // Cambidge_16_Test4_P1_Q1, Cambidge_16_Test4_P1_Q2, Cambidge_16_Test4_P2_Q1, Cambidge_16_Test4_P2_Q2,
    // //Cambridge 17
    // Cambidge_17_Test1_P1_Q1, Cambidge_17_Test1_P1_Q2, Cambidge_17_Test1_P2_Q1, Cambidge_17_Test1_P2_Q2,
    // Cambidge_17_Test2_P1_Q1, Cambidge_17_Test2_P1_Q2, Cambidge_17_Test2_P2_Q1, Cambidge_17_Test2_P2_Q2,
    // Cambidge_17_Test3_P1_Q1, Cambidge_17_Test3_P1_Q2, Cambidge_17_Test3_P2_Q1, Cambidge_17_Test3_P2_Q2,
    // Cambidge_17_Test4_P1_Q1, Cambidge_17_Test4_P1_Q2, Cambidge_17_Test4_P2_Q1, Cambidge_17_Test4_P2_Q2,
    // //Cambridge 18
    // Cambidge_18_Test1_P1_Q1, Cambidge_18_Test1_P1_Q2, Cambidge_18_Test1_P2_Q1, Cambidge_18_Test1_P2_Q2,
    // Cambidge_18_Test2_P1_Q1, Cambidge_18_Test2_P1_Q2, Cambidge_18_Test2_P2_Q1, Cambidge_18_Test2_P2_Q2,
    // Cambidge_18_Test3_P1_Q1, Cambidge_18_Test3_P1_Q2, Cambidge_18_Test3_P2_Q1, Cambidge_18_Test3_P2_Q2,
    // Cambidge_18_Test4_P1_Q1, Cambidge_18_Test4_P1_Q2, Cambidge_18_Test4_P2_Q1, Cambidge_18_Test4_P2_Q2,
    // //Cambridge 19
    // Cambidge_19_Test1_P1_Q1, Cambidge_19_Test1_P1_Q2, Cambidge_19_Test1_P2_Q1, Cambidge_19_Test1_P2_Q2,
    // Cambidge_19_Test2_P1_Q1, Cambidge_19_Test2_P1_Q2, Cambidge_19_Test2_P2_Q1, Cambidge_19_Test2_P2_Q2,
    // Cambidge_19_Test3_P1_Q1, Cambidge_19_Test3_P1_Q2, Cambidge_19_Test3_P2_Q1, Cambidge_19_Test3_P2_Q2,
    // Cambidge_19_Test4_P1_Q1, Cambidge_19_Test4_P1_Q2, Cambidge_19_Test4_P2_Q1, Cambidge_19_Test4_P2_Q2,


} from '../All-Tests/StoreTests';








function Reading({ RightAnswers }) {
    const navigation = useRouter();
    //Test Id Names ...
    const { testID } = useLocalSearchParams();

    const insets = useSafeAreaInsets();
    // for Mobile Sizes states-----
    const [mobilePanel1Pages, setMobilePanel1Page1] = useState(true);
    const [MobilePanel2Pages, setPanel2Pages] = useState(true)
    const [ActivePanels, setActivePanels] = useState(true)

    // functions for Mobile Devices---------------->>
    const Mobilepanel1Functions = () => {
        setMobilePanel1Page1(!mobilePanel1Pages)

    }
    const Mobilepanel2Functions = () => {
        setPanel2Pages(!MobilePanel2Pages)
    }
    const ClickActivePanels = (x) => {
        setActivePanels(!ActivePanels)
    }

    // alert(testId)

    const onPress = ActivePanels ? Mobilepanel1Functions : Mobilepanel2Functions;
    const isQuestionView = ActivePanels ? mobilePanel1Pages : MobilePanel2Pages;
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <ScrollView>
                <SafeAreaView style={{ paddingBottom: 160 }}>
                    {ActivePanels ? (
                        <View style={{ padding: 16 }}>
                            {mobilePanel1Pages ? (
                                <>
                                    {/* Passages for Page-1 */}
                                    {testID === "Actual-Test-1" && <Test1Panel1_Page1 />}
                                </>
                            ) : (
                                <>
                                    {/* Questions for Page-1 */}
                                    {testID === "Actual-Test-1" && <Test1Panel2_Page1 RightAnswers={RightAnswers} />}
                                </>
                            )}
                        </View>
                    ) : (
                        <View style={{ padding: 16 }}>
                            {MobilePanel2Pages ? (
                                <>
                                    {/* Passages for Page-1 */}
                                    {testID === "Actual-Test-1" && <Test1Panel1_Page2 />}
                                </>
                            ) : (
                                <>
                                    {/* Questions for Page-1 */}
                                    {testID === "Actual-Test-1" && <Test1Panel2_Page2 RightAnswers={RightAnswers} />}
                                </>
                            )}
                        </View>
                    )}
                </SafeAreaView>
            </ScrollView>

            {/* Floating Button 1 - Right */}
            <View
                style={{
                    position: 'absolute',
                    bottom: insets.bottom + 75,
                    right: 4,
                }}
            >
                <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
                    <LinearGradient
                        colors={
                            isQuestionView
                                ? ['#2dd4bf', '#06b6d4', '#3b82f6'] // cyan-blue range
                                : ['#14b8a6', '#0891b2', '#2563eb'] // hover-like effect
                        }
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10,
                            paddingHorizontal: 14,
                            borderRadius: 16,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            elevation: 4,
                        }}
                    >
                        <Icon
                            name={isQuestionView ? 'document-text-outline' : 'book-outline'}
                            size={14}
                            color="#fff"
                            style={{ marginRight: 8 }}
                        />
                        <Text
                            style={{
                                fontSize: 11,
                                fontWeight: '600',
                                color: '#fff',
                            }}
                        >
                            {isQuestionView ? 'Questions' : 'Passages'}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            {/* Floating Button 2 - Left */}
            <View
                style={{
                    position: 'absolute',
                    bottom: insets.bottom + 75,
                    left: 4,
                }}
            >
                <TouchableOpacity onPress={ClickActivePanels} activeOpacity={0.85}>
                    <LinearGradient
                        colors={
                            ActivePanels
                                ? ['#a855f7', '#ec4899', '#ef4444']
                                : ['#9333ea', '#db2777', '#dc2626']
                        }
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10,
                            paddingHorizontal: 14,
                            borderRadius: 16,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            elevation: 4,
                        }}
                    >
                        <Icon
                            name={ActivePanels ? 'swap-horizontal' : 'swap-vertical'}
                            size={15}
                            color="#fff"
                            style={{ marginRight: 8 }}
                        />
                        <Text
                            style={{
                                fontSize: 11,
                                fontWeight: '600',
                                color: '#fff',
                            }}
                        >
                            {ActivePanels ? 'Go Section-2' : 'Go Section-1'}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Reading;


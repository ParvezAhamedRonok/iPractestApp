import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useStateContext } from '@/contexts/ContextProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // substitute for PiCrownSimpleThin
import { Linking } from 'react-native';

export default function Explain_Btn({ TestName, AnswerData, userAnswerQN }) {
    const {
        readingTestName, setReadingTestName,
        userPaymentStatusCheck, setUserPaymentStatusCheck
    } = useStateContext();

    const isAnswerDataValid = Array.isArray(AnswerData) && AnswerData.length > 0;

    return (
        <View style={styles.container}>
            {readingTestName === TestName &&
                isAnswerDataValid &&
                !AnswerData.some(answer => userAnswerQN === answer) && (
                    <Text style={styles.answerText}>({AnswerData[0]})</Text>
                )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    answerText: {
        color: 'green',
        fontWeight: 'bold',
        marginRight: 2,
        fontSize: 12
    },
});

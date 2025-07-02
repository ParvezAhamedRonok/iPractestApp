import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useStateContext } from '@/contexts/ContextProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // substitute for PiCrownSimpleThin
import { Linking } from 'react-native';

export default function Explain_Btn({ TestName, AnswerData, userAnswerQN, ExplainDataObj }) {
    const {
        openPopup_ExR, setOpenPopup_ExR,
        explainObj_Reading, setExplainObj_Reading,
        readingTestName, setReadingTestName,
        userPaymentStatusCheck, setUserPaymentStatusCheck
    } = useStateContext();
    // console.log(ExplainDataObj)

    const isAnswerDataValid = Array.isArray(AnswerData) && AnswerData.length > 0;

    const handleExplain = () => {
        setExplainObj_Reading((makeObj) => ({
            number: ExplainDataObj.number ?? '',
            Ans1: ExplainDataObj.Ans1 ?? '',
            mainAns: AnswerData[0],
            hiddenWord: ExplainDataObj.hiddenWord ?? '',
            hiddenWord2: ExplainDataObj.hiddenWord2 ?? '',
            keyWords: ExplainDataObj.keyWords ?? '',
            explain: ExplainDataObj.explain ?? '',
        }));

        if (userPaymentStatusCheck) {
            setOpenPopup_ExR(true);
        } else {
            //check here if the question number is not == 1 , so that i can make payment logics
            setOpenPopup_ExR(true);
            // Linking.openURL('https://yourdomain.com/Payment-Pages/Billing-Page');
        }
    };

    // alert( ExplainDataObj.number)

    return (
        <View style={styles.container}>
            {readingTestName === TestName &&
                isAnswerDataValid &&
                !AnswerData.some(answer => userAnswerQN === answer) && (
                    <Text style={styles.answerText}>({AnswerData[0]})</Text>
                )}

            <TouchableOpacity style={styles.button} onPress={handleExplain}>
                {!userPaymentStatusCheck && ExplainDataObj.number != 1 &&  (
                    <Icon
                        name="crown"
                        size={14}
                        color="#fff"
                        style={styles.crownIcon}
                    />
                )}
                <Text style={styles.buttonText}>Explain</Text>
            </TouchableOpacity>
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
        marginRight:2,
        fontSize:12
    },
    button: {
        backgroundColor: '#2563EB', // Tailwind blue-600
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 999,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 8,
    },
    crownIcon: {
        backgroundColor: 'linear-gradient(90deg, #FCD34D, #FBBF24, #F87171)',
        padding: 4,
        borderRadius: 999,
        textAlign: 'center',
        overflow: 'hidden',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});

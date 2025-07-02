import React , {useState} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Explain_Btn from './Explain-Btn'; // You must convert this to React Native too
import { useStateContext } from '../../../../../contexts/ContextProvider';
import { QuestionNumObj } from "../../_Importants/_Data/_TestAnswers"

export default function ReadingTextInputs({
    QNum,
    TestName,
    AnswerData = [],
    ExplainDataObj
}) {
    const { readingTestName } = useStateContext();
    const [value, setValue] = useState(QuestionNumObj[QNum]);



    const isCorrect = readingTestName === TestName &&
        value !== '' &&
        AnswerData.length > 0 &&
        AnswerData.some(answer => value === answer);

    const isIncorrect = readingTestName === TestName &&
        AnswerData.length > 0 &&
        !AnswerData.some(answer => value === answer);


    const handleChange = (text) => {
        setValue(text);
        QuestionNumObj[QNum] = text; // ✅ Dynamic property update
    };


    return (
        <View style={styles.row}>
            <TextInput
              onChangeText={handleChange}
                style={[
                    styles.input,
                    isCorrect && styles.correctText,
                    isIncorrect && styles.incorrectText,
                ]}
                placeholder=""
                value={value}
                placeholderTextColor="#888"
            />

            {readingTestName === TestName &&
                AnswerData.length > 0 &&
                !AnswerData.includes(value) && (
                    <Explain_Btn
                        TestName={TestName}
                        AnswerData={AnswerData}
                        userAnswerQN={value}
                        ExplainDataObj={ExplainDataObj}
                    />
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 4,
    },
    input: {
        fontWeight: 'bold',
        borderBottomWidth: 1.5,
        borderStyle: 'dotted',
        borderColor: 'gray',
        width: 70,
        paddingVertical: 4,
        paddingHorizontal: 5,
        fontSize: 12,
        color: '#000',
    },
    correctText: {
        color: '#15803d', // Tailwind's text-green-700
    },
    incorrectText: {
        color: '#dc2626', // Tailwind's text-red-600
    },
});

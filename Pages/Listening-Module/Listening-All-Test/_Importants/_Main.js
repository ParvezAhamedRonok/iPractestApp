// Main.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Alert, SafeAreaView } from 'react-native';
import { QuestionNumObj, Reading_Test_All_Answers_Dataobj, resetL_QuestionNumObj } from "./_Data/_TestAnswers"
import { useLocalSearchParams } from 'expo-router';
import { useStateContext } from "../../../../contexts/ContextProvider";
// Assume Reading and Footer are normal components, not dynamic loaded in React Native
import NavigationFull from '../../../../components/NavigationFull';
import Footer from './Footer';
import Reading from './reading';


const Main = () => {
    const { testID } = useLocalSearchParams();
    const { openPopup_ExR, setOpenPopup_ExR, } = useStateContext();
    // States
    const [AnswersData, setAnswersData] = useState(null);


    //set Answers data by test names 
    useEffect(() => {
      // reset all Question data first from Globally initially when user open this page fist before taking any tests
      resetL_QuestionNumObj()

        const foundKey = Object.keys(Reading_Test_All_Answers_Dataobj).find(key => testID.includes(key));
        // console.log(foundKey)
        if (foundKey) {
            // Alert.alert('⏰ Time Up');
            setAnswersData(Reading_Test_All_Answers_Dataobj[foundKey]);

        } else {
            // Alert.alert('⏰ Up');
        }
    }, []);




    return (
        <>
            <NavigationFull />
            {/* Here will be all tests components  */}
            <Reading
                RightAnswers={AnswersData}
            />


            <Footer
                AnswersData={AnswersData}
            />

        </>
    );
};

export default Main;

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

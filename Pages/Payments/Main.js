// Main.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useStateContext } from "../../contexts/ContextProvider";
import NavigationFull from '../../components/NavigationFull';

//status Pages.......
import Payment_Success from "./_PaymentStatus/PaymentSuccess/index"
import Payment_Cancel from "./_PaymentStatus/PaymentCancel/index"
import Payment_Failed from "./_PaymentStatus/PaymentFailed/index"

const Main = () => {
    const { testID } = useLocalSearchParams();



    return (
        <>
            <NavigationFull />
            {
                testID === "Payment-Success" && <Payment_Success />
            }
            {
                testID === "Payment-Cancel" && <Payment_Cancel />
            }
            {
                testID === "Payment-Failed" && <Payment_Failed />
            }
            {
                testID === "Billing-Page" && <Payment_Failed />
            }
            {
                testID === "Upgrade-Payment-Pages" && <Payment_Failed />
            }

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

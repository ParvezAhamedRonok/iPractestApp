import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import ReadingCards from "../../../Pages/Reading-Module/_Cards/index"

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <ReadingCards />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensures the SafeAreaView takes up the full screen
        backgroundColor: '#fff', // Light theme background color
    },
});

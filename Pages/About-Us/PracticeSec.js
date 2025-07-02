import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const image1 = require('../../assets/images/AboutUs/Sec1Img1.png');
const image2 = require('../../assets/images/AboutUs/Sec1Img2.png');

const { width } = Dimensions.get('window');

const IELTSPracticeSection = () => {
    return (
        <View style={styles.container}>
            {/* Image Section */}
            <View style={styles.imageWrapper}>
                <Image source={image2} resizeMode="contain" style={styles.bgImage} />
                <Image source={image1} resizeMode="cover" style={styles.fgImage} />
            </View>

            {/* Text Section */}
            <View style={styles.textSection}>
                <Text style={styles.title}>
                    Let’s Practice The world{'\n'}
                    <Text style={styles.highlight}>Together!</Text>
                </Text>
                <Text style={styles.paragraph}>
                    IELTS is a suite of English language skills for people who wish to work,
                    study, or migrate to countries where English is the native language.
                    There are different types of IELTS tests, such as IELTS Academic, which
                    is tailored for those who want to study at an English-speaking university
                    or for professional registration purposes.
                </Text>
                <Text style={styles.paragraph}>
                    To prepare for the test, you can access free IELTS study materials and
                    resources from the British Council, which will help you get familiar with
                    the test format and improve your confidence in English.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFCF3',
        borderRadius: 20,
        margin: 20,
        paddingBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        overflow: 'hidden',
        alignItems: 'center',
    },
    imageWrapper: {
        width: '100%',
        height: 240,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    bgImage: {
        position: 'absolute',
        top: 20,
        left: -10,
        width: '115%',
        height: '100%',
        transform: [{ rotate: '-4deg' }],
        zIndex: 0,
    },
    fgImage: {
        width: '85%',
        height: '100%',
        borderRadius: 16,
        zIndex: 1,
    },
    textSection: {
        paddingHorizontal: 20,
        marginTop: 20,
        width: '100%',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2d2d2d',
        marginBottom: 10,
    },
    highlight: {
        color: '#9333ea',
    },
    paragraph: {
        marginTop: 10,
        fontSize: 14,
        color: '#4b5563',
        lineHeight: 22,
        textAlign: 'center',
    },
});

export default IELTSPracticeSection;

import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const Cambridge19 = require('../../../../assets/images/listening-images/cambridge-L-19.png');
const Cambridge18 = require('../../../../assets/images/listening-images/cambridge-L-18.0.png');
const Cambridge17 = require('../../../../assets/images/listening-images/Cambridge-R-17.png');
const Cambridge16 = require('../../../../assets/images/listening-images/cambridge-L-16.png');
const Cambridge15 = require('../../../../assets/images/listening-images/cambridge-L-15.jpg');

export default function Cambridge_Test_Cards() {
    const navigation = useRouter();
    const [userEmail, setUserEmail] = useState('');
    const [userToken, setUserToken] = useState('');
    const [mainDataAll, setMainData] = useState([]);
    const testArrays = Array.from({ length: 20 }, () => []);

    const titlesArray = [
        "Urban farming , Forest management,Earth’s space",
        "Stonehenge , artificial intelligence , ideal city",
        "Materials  , steam car, The case for mixed-ability classes",
        "Green roofs , growth mindset, Mott T Greene",
        "Urban farming , Forest management,Earth’s space",
        "Stonehenge , artificial intelligence , ideal city",
        "Materials  , steam car, The case for mixed-ability classes",
        "Green roofs , growth mindset, Mott T Greene",
        "London underground railway, Stadiums, To catch a king",
        "The Dead Sea Scrolls , domesticating the tomato,innovative behavior",
        "The thylacine, Palm oil, Skyscrapers",
        "Bats to the rescue, economic growth , chess champion",
        " protect polar bears,  Pyramid of Djoser, The future of work",
        "The White Horse of Uffington, I contain multitudes, How to make wise decisions",
        " shipbuilding and navigation, Climate change’s glaciers, night-time heat",
        "Roman tunnels, Changes in Listening habits, Attitudes towards Artificial Intelligence",
        " protect polar bears,  Pyramid of Djoser, The future of work",
        "The White Horse of Uffington, I contain multitudes, How to make wise decisions",
        " shipbuilding and navigation, Climate change’s glaciers, night-time heat",
        "Roman tunnels, Changes in Listening habits, Attitudes towards Artificial Intelligence",
    ];

    useEffect(() => {
        const loadStorage = async () => {
            const email = await AsyncStorage.getItem('userEmail');
            const token = await AsyncStorage.getItem('loginTOken');
            setUserEmail(email);
            setUserToken(token);
        };
        loadStorage();
    }, []);

    useEffect(() => {
        if (!userEmail || !userToken) return;

        // axios.get(`https://node-js-express-login-example.onrender.com/api/user/AllListeningResults/${userEmail}`, {
        //     headers: {
        //         Authorization: `Bearer ${userToken}`,
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => {
        //         setMainData(res.data.data);
        //     })
        //     .catch(e => console.log(e));
    }, [userEmail, userToken]);

    const filterTests = (section) => {
        return mainDataAll.filter((item) => item.SectionName === section);
    };



    const cambridgeTestsMap = {};
    for (let i = 1; i <= 20; i++) {
        cambridgeTestsMap[`Cambridge-${Math.floor((20 - i) / 4) + 15}-Test${i % 4 === 0 ? 4 : i % 4}`] = testArrays[i - 1];
    }

    mainDataAll.forEach((item) => {
        if (cambridgeTestsMap[item.SectionName]) {
            cambridgeTestsMap[item.SectionName].push(item);
        }
    });

    const tests = [
        { series: 19, start: 1, image: Cambridge19 },
        { series: 18, start: 5, image: Cambridge18 },
        { series: 17, start: 9, image: Cambridge17 },
        { series: 16, start: 13, image: Cambridge16 },
        { series: 15, start: 17, image: Cambridge15 },
    ];

    const goBackListeningTest = (testNumber, testSeries) => {
        navigation.push(`Listening-Module/Listening-Tests-Section/Cambridge-${testSeries}-Test${testNumber % 4 === 0 ? 4 : testNumber % 4}`)
        // navigation.navigate('Listening-Tests-Section', {
        //     testId:`Cambridge-${testSeries}-Test${testNumber % 4 === 0 ? 4 : testNumber % 4}`
        //     // series: testSeries,
        //     // test: testNumber % 4 === 0 ? 4 : testNumber % 4
        // });
    };

    const UI_Array = tests.flatMap(({ series, start, image }, index) =>
        Array.from({ length: 4 }, (_, i) => {
            const testIndex = start + i;
            const scores = testArrays[testIndex - 1];
            return {
                testNames: series,
                testNumber: i + 1,
                testImage: image,
                Scores: scores.length > 0 && scores,
                Rating: (4.2 + Math.random() * 0.5).toFixed(1),
                Reviews: `(${Math.floor(Math.random() * 100) + 7} reviews)`,
                peoplesCount: `${Math.floor(Math.random() * 500) + 800}`,
                Titles: titlesArray[index * 4 + i] || `Test ${series} - ${i + 1}`,
                redirect_func: () => goBackListeningTest(testIndex, series),
            };
        })
    );
    const getBackgroundColor = (score) => {
        const num = Number(score);
        if (num === 0) return 'rgb(255, 102, 102)';
        if (num <= 5) return 'rgb(255, 221, 102)';
        if (num <= 9) return 'rgb(144, 238, 144)';
        return 'gray';
    };





    return (
        <ScrollView style={styles.container}>
            {UI_Array.map((item, index) => (
                <TouchableOpacity key={index} style={styles.card}>
                    <Image source={item.testImage} style={styles.image} resizeMode="cover" />
                    <View style={styles.cardContent}>
                        <Text style={styles.testNumber}>{item.testNumber || `#${index + 1}`}</Text>
                        <Text style={{ textAlign: 'center', transform: [{ translateY: -5 }] ,color:'purple' }}>Cambridge-{item.testNames}-{"\n"}</Text>
                        <Text style={styles.meta}>Rating: {item.Rating} ⭐ {item.Reviews}</Text>
                        <Text style={styles.tags}>{item.Titles}</Text>

                        <View style={styles.bottomRow}>
                            <View style={styles.scoreBox}>
                                <Text style={[styles.scoreText, { backgroundColor: getBackgroundColor(filterTests(`Cambridge-${item.testNames}-Test${item.testNumber}`)[0]?.score) }]}>
                                    {filterTests(`Cambridge-${item.testNames}-Test${item.testNumber}`)[0]?.score || '0'}
                                </Text>
                                <Text style={styles.scoreLabel}>Score</Text>
                            </View>

                            <TouchableOpacity onPress={item.redirect_func}>
                                <LinearGradient
                                    colors={['#34d399', '#38bdf8']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={styles.button}
                                >
                                    <Text style={styles.buttonText}>Take Test</Text>
                                    <MaterialIcons name="arrow-forward-ios" size={14} color="white" />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        marginBottom: 10
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 10,
        marginBottom: 15,
        elevation: 2,
        alignItems: 'center',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 8,
    },
    cardContent: {
        flex: 1,
        marginLeft: 10,
        position: 'relative',
    },
    testNumber: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: 'blue',
        color: 'white',
        padding: 5,
        fontWeight: '700',
        fontSize: 16,
        width: 60,
        textAlign: 'center',
        borderBottomLeftRadius: 30,
    },
    meta: {
        fontSize: 11,
        color: '#666',
        marginBottom: 5,
    },
    tags: {
        fontSize: 11,
        color: '#333',
        marginBottom: 10,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    scoreBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreText: {
        fontSize: 22,
        color: 'white',
        width: 40,
        textAlign: 'center',
        borderRadius: 50,
        overflow: 'hidden',
        paddingVertical: 2,
    },
    scoreLabel: {
        fontSize: 10,
        color: '#2b8a3e',
        marginTop: 3,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 25,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
        marginRight: 5,
    },
});
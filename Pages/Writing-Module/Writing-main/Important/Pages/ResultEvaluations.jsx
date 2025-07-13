
import React, { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import {
    View, Text, TouchableOpacity, ScrollView, StyleSheet,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
    useSharedValue,
    useAnimatedProps,
    withTiming,
} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter, useLocalSearchParams, usePathname } from 'expo-router';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const STROKE_WIDTH = 8;
const RADIUS = 30;
const CIRCLE_LENGTH = 2 * Math.PI * RADIUS;

export default function ResultEvaluations({
    storeTapContentForChangeUI,
    setchange_login_Status,
    userLoginFunction,
    //for making the condition for need to login and premium button by above props
    userTextToPassResultEvaluation,
    lexicalResWords,
    grammerMistakes,
    LexicalResourceScore,
    GrammarScore,
    storeCoherenceScore
}) {
    const router = useRouter();
    const [storeSubordinateWords, setStoringsubordinateWords] = useState([]);
    const [storeLinkingWords, setStoringLinkingWords] = useState([]);

    const [expanded, setExpanded] = useState({
        coherence: false,
        lexical: false,
        grammar: false,
    });

    const animatedCoherence = useSharedValue(CIRCLE_LENGTH);
    const animatedLexical = useSharedValue(CIRCLE_LENGTH);
    const animatedGrammar = useSharedValue(CIRCLE_LENGTH);

    const scoreToOffset = (score) => CIRCLE_LENGTH - (CIRCLE_LENGTH * (score / 10));

    const SubordianteConjuctionsArr = [
        'after', 'although', 'as', 'as if', 'as long as', 'as much as', 'as soon as', 'as though', 'because', 'before', 'by the time', 'even if', 'even though', 'if', 'in case', 'in order that', 'in the event that', 'lest', 'now that', 'once', 'only', 'only if', 'provided that', 'since', 'so', 'supposing', 'than', 'that', 'though', 'till', 'unless', 'until', 'when', 'whenever', 'where', 'whereas', 'wherever', 'whether or not', 'while',
        'should', 'teenagers', 'have', 'what', 'is', 'the', 'greatest', 'challenge', 'facing', 'teachers', 'today'
    ];

    const LinkingWords = [
        'although', 'apart from', 'but for', 'despite', 'even though', 'as', 'because', 'in so far as', 'since', 'as long as', 'if', 'provided that', 'unless', 'whether', 'in order to', 'so as to', 'so that', 'to', 'also', 'beside', 'in addition', 'moreover', 'as far as i am concern', 'in my opinion', 'to my mind', 'as a consequence', 'as a result', 'eventuallu', 'so', "that's why", 'either ..or', 'neither ..nor', 'or', 'whatever', 'whoever', 'but', 'however', 'on the one hand', 'on the other hand', 'whereas', 'while'
    ]

    const SubordinateLinkingWords = () => {
        if (userTextToPassResultEvaluation) {
            const lowerText = userTextToPassResultEvaluation.toLowerCase();
            const foundSubordinates = SubordianteConjuctionsArr.filter(word => lowerText.includes(word));
            const foundLinkings = LinkingWords.filter(word => lowerText.includes(word));
            setStoringsubordinateWords(foundSubordinates);
            setStoringLinkingWords(foundLinkings);
        }
    };

    useEffect(() => {
        console.log('Lexical Array data ------//>>>' + lexicalResWords)
        SubordinateLinkingWords();
        animatedCoherence.value = withTiming(scoreToOffset(storeCoherenceScore), { duration: 1000 });
        animatedLexical.value = withTiming(scoreToOffset(LexicalResourceScore), { duration: 1000 });
        animatedGrammar.value = withTiming(scoreToOffset(GrammarScore), { duration: 1000 });
    }, []);




    const renderCircle = (animatedValue, color, score) => {
        const animatedProps = useAnimatedProps(() => ({
            strokeDashoffset: animatedValue.value,
        }));

        return (
            <View style={styles.progressWrapper}>
                <Svg width={80} height={80}>
                    <Circle
                        cx={40}
                        cy={40}
                        r={RADIUS}
                        stroke="#e6e6e6"
                        strokeWidth={STROKE_WIDTH}
                        fill="none"
                    />
                    <AnimatedCircle
                        cx={40}
                        cy={40}
                        r={RADIUS}
                        stroke={color}
                        strokeWidth={STROKE_WIDTH}
                        strokeDasharray={CIRCLE_LENGTH}
                        animatedProps={animatedProps}
                        strokeLinecap="round"
                        fill="none"
                    />
                </Svg>
                <Text style={styles.scoreText}>{score.toFixed(1)}</Text>
            </View>
        );
    };

    const toggleSection = (section) => {
        setExpanded((prev) => ({
            ...{ coherence: false, lexical: false, grammar: false },
            [section]: !prev[section],
        }));
    };

    const ScoreBox = ({ color, title, animatedValue, score, children, sectionKey }) => (
        <View style={[styles.box, { backgroundColor: color }]}>
            <View style={styles.header}>
                <View style={styles.left}>
                    {renderCircle(animatedValue, 'white', score)}
                    <Text style={styles.boxTitle}>{title}</Text>
                </View>
                <TouchableOpacity onPress={() => toggleSection(sectionKey)}>
                    <Ionicons
                        name={expanded[sectionKey] ? 'chevron-up' : 'chevron-down'}
                        size={24}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
            {expanded[sectionKey] && (
                <View style={styles.detailBox}>
                    {children}
                </View>
            )}
        </View>
    );



    const parseGrammarData = (rawText) => {
        const sections = {};
        let currentSection = 'General';

        const lines = rawText?.join(',').split(',') || [];

        lines.forEach((line) => {
            const trimmed = line.trim();

            if (trimmed.match(/:$/) && trimmed.length < 100) {
                currentSection = trimmed.replace(/:$/, '');
                if (!sections[currentSection]) {
                    sections[currentSection] = [];
                }
            } else {
                if (!sections[currentSection]) {
                    sections[currentSection] = [];
                }
                if (trimmed.length > 0) sections[currentSection].push(trimmed);
            }
        });

        return sections;
    };


    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container} nestedScrollEnabled={true}>
                <ScoreBox
                    color="#541bac"
                    title="Coherence"
                    animatedValue={animatedCoherence}
                    score={storeCoherenceScore}
                    sectionKey="coherence"
                >
                    <Text style={styles.detailTitle}>Subordinate Words</Text>
                    {storeSubordinateWords.map((item, idx) => (
                        <Text key={idx} style={styles.detailItem}>• {item}</Text>
                    ))}
                    <Text style={styles.detailTitle}>Linking Words</Text>
                    {storeLinkingWords.map((item, idx) => (
                        <Text key={idx} style={styles.detailItem}>• {item}</Text>
                    ))}
                </ScoreBox>

                <ScoreBox
                    color="#f59e0b"
                    title="Lexical Resource"
                    animatedValue={animatedLexical}
                    score={LexicalResourceScore}
                    sectionKey="lexical"
                >
                    {lexicalResWords?.length > 0 ? (
                        lexicalResWords.map((items, index) => {
                            const isIntro = index === 0;
                            const isSectionTitle = items.match(/:$/gi) && !isIntro;
                            const isBullet = !isIntro && !isSectionTitle;

                            return (
                                <View
                                    key={index}
                                    style={[
                                        styles.bulletRow,
                                        isIntro && { marginBottom: 6 },
                                        isSectionTitle && { marginTop: 10, marginBottom: 6 },
                                        isBullet && { marginBottom: 4 },
                                    ]}
                                >
                                    {/* Bullet Dot */}
                                    {isBullet && (
                                        <View style={styles.bulletWrapper}>
                                            <View
                                                style={[
                                                    styles.dot,
                                                    items.trim() === '' && { backgroundColor: 'transparent', marginLeft: 4 },
                                                ]}
                                            />
                                        </View>
                                    )}

                                    {/* Text */}
                                    <Text
                                        style={[
                                            styles.bulletText,
                                            isIntro && { fontWeight: 'bold', fontSize: 14 },
                                            isSectionTitle && { fontWeight: 'bold', fontSize: 16 },
                                        ]}
                                    >
                                        {items}
                                    </Text>
                                </View>
                            );
                        })
                    ) : (
                        <Text>No lexical feedback found.</Text>
                    )}

                </ScoreBox>

                <ScoreBox
                    color="#3ed9ae"
                    title="Grammatical Accuracy"
                    animatedValue={animatedGrammar}
                    score={GrammarScore}
                    sectionKey="grammar"
                >
                    {grammerMistakes?.length > 0 ? (
                        Object.entries(parseGrammarData(grammerMistakes)).map(([sectionTitle, items], idx) => (
                            <View key={idx} style={{ marginBottom: 12 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 4, color: '#444' }}>
                                    📌 {sectionTitle}
                                </Text>
                                {items.map((item, i) => (
                                    <Text
                                        key={i}
                                        style={[
                                            styles.detailItem,
                                            /problem|issue|error|missing|incomplete/i.test(item) && { color: '#d32f2f', fontWeight: '500' },
                                            /correct|should be|solution|fix|clarify|suggest/i.test(item) && { color: '#2e7d32', fontStyle: 'italic' },
                                        ]}
                                    >
                                        • {item}
                                    </Text>
                                ))}
                            </View>
                        ))
                    ) : (
                        <Text>No grammar issues found.</Text>
                    )}
                </ScoreBox>
            </ScrollView>

            {/* Blurred Overlay */}
            {storeTapContentForChangeUI == "LoginFirst" && (
                <BlurView intensity={90} tint="light" style={styles.blurOverlay}>
                    <View style={styles.overlayContent}>
                        <TouchableOpacity style={styles.overlayButton}
                            onPress={() => {
                                setchange_login_Status(false)
                                userLoginFunction();
                            }
                            }>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Need to Login</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            )
            }

            {/* Blurred Overlay for premium button */}
            {storeTapContentForChangeUI == "HaveToPay" && (
                <BlurView intensity={90} tint="light" style={styles.blurOverlay}>
                    <View style={styles.overlayContent}>
                        <TouchableOpacity style={styles.overlayButton}
                            onPress={() => {
                                router.push("/Payment-Pages/Billing-Page")
                            }
                            }>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Premium</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            )
            }
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
    },
    box: {
        width: '100%',
        borderRadius: 20,
        marginVertical: 10,
        padding: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxTitle: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 12,
        fontSize: 14,
    },
    detailBox: {
        marginTop: 12,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 10,
    },
    detailTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 8,
        marginBottom: 4,
        color: '#333',
    },
    detailItem: {
        fontSize: 14,
        marginVertical: 2,
        color: '#333',
    },
    progressWrapper: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
    },
    scoreText: {
        position: 'absolute',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },

    //some lexical extra styling..
    bulletRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        paddingRight: 8, // avoid edge cut
    },

    bulletWrapper: {
        width: 25,
        alignItems: 'center',
        paddingTop: 4,
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#444',
    },

    bulletText: {
        flex: 1, // THIS ensures text wraps
        flexWrap: 'wrap',
        fontSize: 14,
        color: '#333',
    },


    //blur background er layer dewar  styling
    blurOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
    overlayContent: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        backdropFilter: 'blur(10px)', // Not used in React Native but conceptually helpful
    },
    overlayText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    overlayButton: {
        backgroundColor: '#541bac',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },

});

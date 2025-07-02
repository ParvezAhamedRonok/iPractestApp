import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";

export default function Single_Card({
    useremail,
    redirect_func,
    test_card_image,
    rating,
    count_peoples,
    Title,
    test_Scores,
    sectionNames
}) {
    const [userPaymentStatusCheck] = useState(false);
    const latestScore = test_Scores?.[test_Scores.length - 1]?.ieltsScore || 0;

    const getScoreStyle = () => {
        if (latestScore < 4) return [styles.scoreCircle, styles.redScore];
        if (latestScore >= 4 && latestScore <= 6) return [styles.scoreCircle, styles.yellowScore];
        if (latestScore > 6) return [styles.scoreCircle, styles.greenScore];
        return [styles.scoreCircle, styles.defaultScore];
    };

    return (
        <SafeAreaView style={styles.cardWrapper}>
            <TouchableOpacity onPress={redirect_func} activeOpacity={0.8}>
                <View style={styles.card}>
                    
                    {/* Left: Image */}
                    <View style={styles.imageContainer}>
                        <Image
                            source={test_card_image}
                            resizeMode="cover"
                            style={styles.image}
                        />
                    </View>

                    {/* Right: Content */}
                    <View style={styles.contentContainer}>
                        
                        {/* Top: Rating & Peoples */}
                        <View style={styles.topRow}>
                            {/* Rating */}
                            <View style={styles.ratingRow}>
                                <Text style={styles.star}>★</Text>
                                <Text style={styles.ratingText}>{parseInt(rating)}</Text>
                            </View>

                            {/* People Images */}
                            <View style={styles.peopleRow}>
                                <View style={styles.avatarGroup}>
                                    <Image
                                        source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
                                        style={styles.avatar20}
                                    />
                                    <Image
                                        source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
                                        style={styles.avatar18}
                                    />
                                    <Image
                                        source={{ uri: "https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" }}
                                        style={styles.avatar16}
                                    />
                                </View>
                                <Text style={styles.peopleCount}>{count_peoples}</Text>
                            </View>
                        </View>

                        {/* Middle: Title */}
                        <Text style={styles.titleText}>{Title}</Text>

                        {/* Bottom: Score & Button */}
                        <View style={styles.bottomRow}>
                            {/* Score */}
                            <View style={styles.scoreBox}>
                                <View style={getScoreStyle()}>
                                    <Text style={styles.scoreText}>{latestScore}</Text>
                                </View>
                                <Text style={styles.scoreLabel}>Score</Text>
                            </View>

                            {/* Section Button */}
                            <View style={styles.sectionButton}>
                                {!userPaymentStatusCheck && !rating.includes("test-1") && (
                                    <Text style={styles.emoji}>👑</Text>
                                )}
                                <Text style={styles.sectionText}>Section {sectionNames}</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cardWrapper: {
        paddingHorizontal: 10,
        marginBottom: 10
    },
    card: {
        flexDirection: 'row',
        height: 140,
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 5,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    imageContainer: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 12
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 8
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        color: '#facc15', // yellow-500
        fontSize: 18
    },
    ratingText: {
        color: '#4b5563',
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 4
    },
    peopleRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarGroup: {
        flexDirection: 'row',
        marginRight: 4
    },
    avatar20: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginLeft: -4
    },
    avatar18: {
        width: 18,
        height: 18,
        borderRadius: 9,
        marginLeft: -4
    },
    avatar16: {
        width: 16,
        height: 16,
        borderRadius: 8,
        marginLeft: -4
    },
    peopleCount: {
        color: '#4b5563',
        fontWeight: 'bold',
        fontSize: 12
    },
    titleText: {
        fontWeight: '900',
        color: '#1f2937',
        fontSize: 10,
        textAlign: 'center'
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    scoreBox: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    scoreCircle: {
        height: 28,
        width: 28,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#6b7280', // gray-500
        justifyContent: 'center',
        alignItems: 'center'
    },
    redScore: {
        backgroundColor: '#dc2626', // red-600
    },
    yellowScore: {
        backgroundColor: '#facc15' // yellow-500
    },
    greenScore: {
        backgroundColor: '#16a34a' // green-600
    },
    defaultScore: {
        backgroundColor: '#fff'
    },
    scoreText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff'
    },
    scoreLabel: {
        fontSize: 8,
        marginTop: 2,
        color: '#4b5563'
    },
    sectionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 15,
        backgroundColor: '#0ea5e9' // fallback to blue if gradient isn't used
    },
    sectionText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600'
    },
    emoji: {
        color: '#fff',
        marginRight: 4
    }
});

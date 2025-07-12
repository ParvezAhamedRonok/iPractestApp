import React from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';

export default function ResultImprovement({
  storeTapContentForChangeUI,
  setchange_login_Status,
  userLoginFunction,
  SpeakingSummary = [],
  SpeakingImprovement = [],
}) {
  const blurStyle = storeTapContentForChangeUI !== '' ? styles.blur : null;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={styles.sectionContainer}>
        <View style={[styles.card, blurStyle]}>
          <Text style={styles.sectionTitle}>General Suggessions</Text>
          {SpeakingSummary.length === 0 ? (
            <View style={styles.loaderWrapper}>
              <ActivityIndicator size="large" color="#000" />
            </View>
          ) : (
            SpeakingSummary.map((item, index) => {
              if (
                !item ||
                item.trim() === '' ||
                item.trim() === '.' ||
                item.charAt(3) === ','
              ) {
                return null;
              }
              const isHeading = item.match(/:/gi);
              return (
                <View
                  key={index}
                  style={[
                    styles.textLine,
                    isHeading ? styles.headingText : styles.bulletedText,
                  ]}>
                  {!isHeading && <View style={styles.bullet} />}
                  <Text style={styles.textContent}>{item}</Text>
                </View>
              );
            })
          )}
        </View>

        <View style={[styles.card, blurStyle]}>
          <Text style={styles.sectionTitle}>Section Wise Suggessions</Text>
          {SpeakingImprovement.length === 0 ? (
            <View style={styles.loaderWrapper}>
              <ActivityIndicator size="large" color="#000" />
            </View>
          ) : (
            SpeakingImprovement.map((item, index) => {
              const isHeading =
                index === 0 ||
                item.slice(0, 20).match(/Fluency|Coherence|Lexical|Overall/g) ||
                item.slice(0, 25).match(/Grammatical Range/g);

              if (item.trim() === '') return null;

              return (
                <View
                  key={index}
                  style={[
                    styles.textLine,
                    isHeading ? styles.subHeadingText : styles.bulletedText,
                  ]}>
                  {!isHeading && <View style={styles.bullet} />}
                  <Text style={styles.textContent}>{item}</Text>
                </View>
              );
            })
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  sectionContainer: {
    flexDirection: 'column',
    padding: 10,
    gap: 10,
  },
  card: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 3,
  },
  blur: {
    opacity: 0.5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'monospace',
    marginBottom: 10,
  },
  loaderWrapper: {
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLine: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 6,
  },
  bulletedText: {
    paddingLeft: 8,
  },
  headingText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  subHeadingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
    marginRight: 8,
    marginTop: 6,
  },
  textContent: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
});

import React from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useStateContext } from '@/contexts/ContextProvider';

const vocabularyLinks = [
  {
    title: 'Linking structures and cohesive devices',
    url: 'https://ielts-up.com/writing/ielts-linking-words.html',
  },
  {
    title: 'Academic word lists',
    url: 'https://ielts-up.com/writing/ielts-essay-vocabulary.html',
  },
  {
    title: 'Vocabulary to write letters',
    url: 'https://ielts-up.com/writing/ielts-describing-graphs.html',
  },
  {
    title: 'Vocabulary to write essays',
    url: 'https://ielts-up.com/writing/letter-vocabulary.html',
  },
  {
    title: 'Vocabulary to describe graphs',
    url: 'https://ielts-up.com/writing/ielts-academic-wordlist.html',
  },
  {
    title: 'Vocabulary For Academic IELTS Writing',
    url: 'https://www.ielts-mentor.com/48-ielts-vocabulary/vocabulary-for-academic-ielts-writing-task-1/528-vocabulary-for-academic-ielts-writing-task-1-part-1',
  },
];

const tipsLinks = [
  {
    title: 'Tips about Writing',
    url: 'https://ielts-up.com/writing/ielts-writing-tips.html',
  },
];

const VocabularyTipsModal = () => {
  const { showVocabPopup, setShowVocabPopup } = useStateContext();
  const [currentWebUrl, setCurrentWebUrl] = React.useState(null);

  if (!showVocabPopup) return null;

  if (currentWebUrl) {
    return (
      <Modal visible transparent>
        <View style={styles.fullScreenOverlay}>
          <View style={styles.webHeader}>
            <TouchableOpacity onPress={() => setCurrentWebUrl(null)}>
              <Text style={styles.closeWebBtn}>Close Web</Text>
            </TouchableOpacity>
          </View>
          <WebView source={{ uri: currentWebUrl }} style={{ flex: 1 }} />
        </View>
      </Modal>
    );
  }

  return (
    <Modal animationType="fade" transparent visible>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.header}>📚 IELTS Resources</Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Vocabulary Links</Text>
              {vocabularyLinks.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.linkButton}
                  onPress={() => setCurrentWebUrl(item.url)}>
                  <Text style={styles.linkText}>• {item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Tips</Text>
              {tipsLinks.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.linkButton}
                  onPress={() => setCurrentWebUrl(item.url)}>
                  <Text style={styles.linkText}>• {item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowVocabPopup(false)}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    maxHeight: '90%',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    elevation: 12,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6D28D9',
    marginBottom: 12,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7C3AED',
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
  linkButton: {
    marginBottom: 6,
  },
  linkText: {
    fontSize: 14,
    color: '#374151',
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: '#EF4444',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeText: {
    color: '#fff',
    fontWeight: '600',
  },
  fullScreenOverlay: {
    flex: 1,
    backgroundColor: '#000000ee',
  },
  webHeader: {
    backgroundColor: '#111827',
    padding: 14,
    alignItems: 'flex-end',
  },
  closeWebBtn: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default VocabularyTipsModal;
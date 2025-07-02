import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import ScrollButton from './ScrollButton'; // child component

export default function ParentComponent() {
  const scrollRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event) => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };

  const scrollUpBy200 = () => {
    const targetY = Math.max(scrollY - 200, 0);
    scrollRef.current?.scrollTo({ y: targetY, animated: true });
  };

  return (
    <View style={styles.container}>
      <ScrollButton onScrollUp={scrollUpBy200} />

      <ScrollView
        ref={scrollRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {Array.from({ length: 40 }, (_, i) => (
          <View key={i} style={styles.item}>
            <Text style={styles.itemText}>Item {i + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  scrollView: { flex: 1 },
  item: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemText: { fontSize: 20 },
});

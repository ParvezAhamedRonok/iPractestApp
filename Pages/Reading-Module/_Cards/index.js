import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ServicesReadingAllTest from './Actual-tests-Cards/Test-Cards';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Cambridge_Test_Cards from './Cambridge-tests-Cards/Test-Cards';
import NavigationFull from '../../../components/NavigationFull';

export default function ReadingMainScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('cambridge'); // default

  const handleCambridgePress = () => {
    setActiveTab('cambridge');
  };

  const handleActualPress = () => {
    setActiveTab('actual');
  };

  return (
    <>
      <NavigationFull />
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>Practice our sample</Text>
          <Text style={styles.subtitle}>
            {
              activeTab === "cambridge" ? "cambridge Reading-Tests" : 'Actual Reading-Tests'
            }
            </Text>
          <Text style={styles.description}>
            Give all the IELTS test and get results instantly.
          </Text>
        </View>

        {/* Button Section */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.buttonBase,
              activeTab === 'cambridge' ? styles.activeCambridge : styles.inactiveButton,
            ]}
            onPress={handleCambridgePress}
          >
            <MaterialCommunityIcons
              name="book-open-variant"
              size={18}
              color={activeTab === 'cambridge' ? '#fff' : '#999'}
              style={styles.iconSpacing}
            />
            <Text
              style={[
                styles.buttonText,
                activeTab === 'cambridge' ? styles.activeText : styles.inactiveText,
              ]}
            >
              Cambridge tests
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonBase,
              activeTab === 'actual' ? styles.activeActual : styles.inactiveButton,
            ]}
            onPress={handleActualPress}
          >
            <FontAwesome5
              name="clipboard-check"
              size={16}
              color={activeTab === 'actual' ? '#fff' : '#999'}
              style={styles.iconSpacing}
            />
            <Text
              style={[
                styles.buttonText,
                activeTab === 'actual' ? styles.activeText : styles.inactiveText,
              ]}
            >
              Actual Tests
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content Below - show only when 'cambridge' is active */}
        {activeTab === 'actual' && <ServicesReadingAllTest />}
        {activeTab === 'cambridge' && <Cambridge_Test_Cards />}
      </View>
    </>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    padding: 10
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 20,
    color: '#1E3A8A',
    fontWeight: '600',
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginTop: 8,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 5
  },
  buttonBase: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  activeCambridge: {
    backgroundColor: '#1E3A8A', // blue
  },
  activeActual: {
    backgroundColor: '#1E3A8A', // blue
  },
  inactiveButton: {
    backgroundColor: '#f2f2f2',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeText: {
    color: '#fff',
  },
  inactiveText: {
    color: '#999',
  },
  iconSpacing: {
    marginRight: 8,
  },
});

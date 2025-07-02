import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Animated,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { useStateContext } from '@/contexts/ContextProvider';
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  Feather,
  Entypo,
  FontAwesome,
} from '@expo/vector-icons';
import logo from '../../../assets/images/Practestlogo.png'; // ✅ Make sure the path is correct




const baseMenuItems = [
  { label: 'Dashboard', icon: <Ionicons name="grid-outline" size={20} />, path: "/User-Dashboard/Dashboard" },
  { label: 'LeaderBoard', icon: <FontAwesome5 name="trophy" size={20} />, path: '/User-Dashboard/LeaderBoard' },
  { label: 'Speaking-Records', icon: <Feather name="file-text" size={20} />, path: '/User-Dashboard/Speaking-Records' },
  { label: "Let's-Practice", icon: <MaterialCommunityIcons name="school-outline" size={20} />, path: `/User-Dashboard/Let's-Practice` },
  { label: 'SOPFile', icon: <FontAwesome5 name="file-audio" size={20} />, path: '/User-Dashboard/SOPFile' },
  { label: 'Referrals', icon: <MaterialCommunityIcons name="account-multiple-plus-outline" size={20} />, path: '/User-Dashboard/Referrals' },
];

const conditionalMenuItems = [
  { label: 'Zoom-link', icon: <Ionicons name="videocam-outline" size={20} />, path: '/User-Dashboard/Zoom-link' },
  { label: 'Batch-Details', icon: <MaterialCommunityIcons name="clipboard-text-outline" size={20} />, path: '/User-Dashboard/Batch-Details' },
];




const Sidebar = ({ toggleSidebar, sidebarAnimation }) => {
  const { ShowPaymentInfo, setShowPaymentInfo, userPaymentStatusCheck } = useStateContext();
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (targetPath) => pathname.includes(targetPath);

  const handleNavigate = (path) => {
    router.push(path);
    toggleSidebar(); // Close sidebar
  };
  const menuItems = [
    ...baseMenuItems,
    ...(userPaymentStatusCheck && !["", "Starter", "Expert"].includes(userPaymentStatusCheck)
      ? conditionalMenuItems
      : [])
  ];

  // alert(pathname)
  return (
    <Animated.View
      style={[styles.sidebarContainer, { transform: [{ translateX: sidebarAnimation }] }]}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleSidebar}>
            <Ionicons name="close" size={28} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Navigation */}
        <View style={styles.sidebarContent}>
          {menuItems.map((item, index) => {
            const active = isActive('/' + item.label);
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                style={[styles.menuItem, active && styles.activeMenuItem]}
                onPress={() => handleNavigate(item.path)}
              >
                <View style={styles.iconContainer}>{item.icon}</View>
                <Text style={[styles.menuText, active && styles.activeMenuText]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Social Media Icons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity>
            <FontAwesome name="facebook" size={22} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="whatsapp" size={22} color="#25D366" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="linkedin" size={22} color="#0A66C2" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="twitter" size={22} color="#1DA1F2" />
          </TouchableOpacity>
        </View>

        {/* Contact Info */}
        <View style={styles.contactInfo}>
          <Text style={styles.contactText}>📞 +123 456 7890</Text>
          <Text style={styles.contactText}>📧 contact@ipractest.com</Text>
          <Text style={styles.contactText}>🏠 123 Test Lane, London, UK</Text>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    left: 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#ffffff',
    zIndex: 10000,
    elevation: 10,
    paddingVertical: 12,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  logo: {
    width: 120,
    height: 35,
    transform: [{ translateX: -20 }],
  },
  sidebarContent: {
    flex: 1,
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 10,
    marginBottom: 8,
  },
  activeMenuItem: {
    backgroundColor: '#f0f0f5',
  },
  iconContainer: {
    width: 26,
    alignItems: 'center',
    marginRight: 12,
  },
  menuText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2c3e50',
  },
  activeMenuText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingHorizontal: 20,
  },
  contactInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  contactText: {
    fontSize: 13,
    color: '#555',
    marginBottom: 6,
  },
});

export default Sidebar;

import { useState } from 'react';
import { Animated, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function NavigationFull() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [sidebarAnimation] = useState(new Animated.Value(-250)); // Start with sidebar off-screen

    const toggleSidebar = () => {
        const toValue = sidebarVisible ? -260 : 0; // Slide in or out the sidebar
        setSidebarVisible(!sidebarVisible);

        Animated.timing(sidebarAnimation, {
            toValue,
            duration: 300, // Slide duration in ms
            useNativeDriver: true, // Use native driver for smooth animations
        }).start();
    };

    return (
        <>
            {/* Navbar with Hamburger Menu */}
            <Navbar toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
            {/* Sidebar (Sliding Drawer) */}
            <Sidebar toggleSidebar={toggleSidebar} sidebarAnimation={sidebarAnimation} />

        </>
    )
}

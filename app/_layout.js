import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform, SafeAreaView, StatusBar as RNStatusBar, useColorScheme as useNativeColorScheme, View } from 'react-native';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ContextProvider } from '../contexts/ContextProvider';
import GlobalPopUps from "../components/_Popups/Main";
import DeleteAccountPopup from "../components/_Popups/DeletePopUp"
import LoginSignupPage from "../components/LoginPage/index";
import ShowPaymentInfo from "../components/_Popups/ShowPaymentinfo";
import VocabularyPopup from "../components/_Popups/Vocabularies/Main"
import "../scripts/get-country"
import LoadingOverlay from '../components/LoadingOverlay';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme(); // Custom hook (your code)
  const nativeColorScheme = useNativeColorScheme(); // For fallback
  const currentScheme = colorScheme || nativeColorScheme || 'light';
  // CheckPaymentStatus()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  const isDark = currentScheme === 'dark';

  return (
    <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <ContextProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="About Us/index" />
          <Stack.Screen name="Reading-Module/Cards/index" />
          <Stack.Screen name="+not-found" />
        </Stack>
        {/* Show globally popups / components for showing in every pages */}
        {/* <GlobalPopUps /> */}
        <LoginSignupPage />
        <LoadingOverlay />
        <DeleteAccountPopup />
        <ShowPaymentInfo />
        <VocabularyPopup />


        <StatusBar style={isDark ? 'transparent' : 'dark'} />
      </ContextProvider>
    </ThemeProvider>
  );
}




















//fro web pages redirection handles  (added at 3/6/25  for handle payment requests)


// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack, router } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import { Platform, SafeAreaView, StatusBar as RNStatusBar, useColorScheme as useNativeColorScheme, View } from 'react-native';
// import * as Linking from 'expo-linking'; // ✅ Add this
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';
// import { ContextProvider } from '../contexts/ContextProvider';
// import GlobalPopUps from "../components/_Popups/Main";
// import LoginSignupPage from "../components/LoginPage/index";
// import "../scripts/get-country";
// import LoadingOverlay from '../components/LoadingOverlay';

// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme(); // Custom hook
//   const nativeColorScheme = useNativeColorScheme();
//   const currentScheme = colorScheme || nativeColorScheme || 'light';

//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   // ✅ Deep linking effect
//   useEffect(() => {
//     const sub = Linking.addEventListener('url', ({ url }) => {
//       const { path, queryParams } = Linking.parse(url);

//       if (path === 'payment-success') {
//         router.push({
//           pathname: '/payment-success',
//           params: {
//             orderId: queryParams.orderId,
//             amount: queryParams.amount,
//           },
//         });
//       }
//     });

//     return () => sub.remove();
//   }, []);

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) return null;

//   const isDark = currentScheme === 'dark';

//   return (
//     <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
//       <ContextProvider>
//         <Stack screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="index" />
//           <Stack.Screen name="About Us/index" />
//           <Stack.Screen name="Reading-Module/Cards/index" />
//           <Stack.Screen name="+not-found" />
//         </Stack>

//         <LoginSignupPage />
//         <LoadingOverlay />
//         <StatusBar style={isDark ? 'transparent' : 'dark'} />
//       </ContextProvider>
//     </ThemeProvider>
//   );
// }


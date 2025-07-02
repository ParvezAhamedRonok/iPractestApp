import { useLocalSearchParams, useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import { Platform, StatusBar as RNStatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function PaymentWebView() {
  const { redirect } = useLocalSearchParams();
  const router = useRouter();
  const decoded = decodeURIComponent(redirect);
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : insets.top }}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <WebView
        style={{ flex: 1 }}
        source={{ uri: decoded }}
        onNavigationStateChange={(navState) => {
          if (navState.url.startsWith('myapp://Payment-Pages/Payment-Success')) {
            const url = new URL(navState.url);
            const orderId = url.searchParams.get('orderId');
            const amount = url.searchParams.get('amount');
            router.replace(`/Payment-Pages/Payment-Success`);
          }
        }}
      />
    </View>
  );
}




//previous codes may be no need (commented same date of this component)
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { WebView } from 'react-native-webview';

// export default function PaymentWebView() {
//   const { redirect } = useLocalSearchParams();
//   const router = useRouter();
//   const decoded = decodeURIComponent(redirect);

//   return (
//     <WebView
//       source={{ uri: decoded }}
//       onNavigationStateChange={(navState) => {
//         if (navState.url.startsWith('myapp://Payment-Pages/Payment-Success')) {
//           const url = new URL(navState.url);
//           const orderId = url.searchParams.get('orderId');
//           const amount = url.searchParams.get('amount');
//           router.replace(`/Payment-Pages/Payment-Success`);
//         }
//       }}
//     />
//   );
// }

import AsyncStorage from '@react-native-async-storage/async-storage';

const asianCountries = [
  "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei",
  "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq",
  "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon",
  "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman",
  "Pakistan", "Palestine", "Philippines", "Qatar", "Saudi Arabia", "Singapore",
  "South Korea", "Sri Lanka", "Syria", "Tajikistan", "Thailand", "Timor-Leste",
  "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"
];

// ✅ Main function expects `router` to be passed from the component
export async function CheckoutButton(Product_Name, userPaymentStatusCheck, router) {
  let userWebEmail = '';
  let userWebName = '';
  let userWebCountry = '';
  let userRefered = '';
  let mainPrice = 0;
//   alert('o')

  try {
    userWebEmail = await AsyncStorage.getItem('userEmail') || '';
    userWebName = await AsyncStorage.getItem('userName') || '';
    userWebCountry = await AsyncStorage.getItem('setCountry') || '';
    userRefered = await AsyncStorage.getItem('referID') || '';
  } catch (error) {
    console.error("Error fetching data from AsyncStorage:", error);
  }

  // ✅ Determine price
  if (userPaymentStatusCheck) {
    mainPrice = asianCountries.includes(userWebCountry) ? 3 : 2;
  } else {
    if (Product_Name === "Starter") {
      mainPrice = asianCountries.includes(userWebCountry) ? 4.5 : 6.5;
    } else if (Product_Name === "Expert") {
      mainPrice = asianCountries.includes(userWebCountry) ? 6.5 : 9.5;
    }
  }

  try {
    // ✅ Call Stripe API
    const response = await fetch('https://node-js-express-login-example.onrender.com/api/user/StripePay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: mainPrice,
        PackageName: Product_Name,
        userWebEmail,
        userWebName,
        userWebCountry,
        userRefered
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    // console.log('Stripe Response:', data);

    // ✅ Navigate if success
    if (data.url) {
      const encodedURL = encodeURIComponent(data.url);
      router.push(`/redirect-paymentPage/${encodedURL}`);
    }
  } catch (error) {
    console.error('Error during Stripe checkout:', error);
  }
}

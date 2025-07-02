import AsyncStorage from '@react-native-async-storage/async-storage';

let StoreCountryData = [];
let forUpdateCountry = '';
let forUpdateCountryFlag = '';

async function fetchAndStoreCountries() {
  try {
    const response = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,flags,tld'
    ); // ✅ Corrected with fields
    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Invalid data returned from countries API');
    }

    StoreCountryData = data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    console.log('✅ Countries fetched and stored.');
  } catch (error) {
    console.error('❌ Failed to fetch country list:', error);
  }
}

async function fetchUserCountryByTimezone() {
  try {
    const response = await fetch(
      'https://node-js-express-login-example.onrender.com/getUsersCountryByTimeZone'
    );
    const data = await response.json();
    const timeZoneCityToCountry = data;

    let userTimeZone, userCity, userCountry;

    if (Intl) {
      userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const tzArr = userTimeZone.split('/');
      userCity = tzArr[tzArr.length - 1];
      userCountry = timeZoneCityToCountry[userCity];
    }

    if (!userCountry) {
      console.warn('⛔ Could not detect country by timezone. Trying IP...');
      await fetchUserCountryByIP();
    } else {
      await handleUserCountry(userCountry);
    }
  } catch (error) {
    console.error('❌ Error fetching country by timezone:', error);
    await fetchUserCountryByIP();
  }
}

async function fetchUserCountryByIP() {
  try {
    const response = await fetch('https://api.ipregistry.co/?key=bdeqqyjamj6lka91');
    const payload = await response.json();
    const { country } = payload.location;

    if (country) {
      const countryName = country.name;
      const countryFlag = country.flag.twemoji;
      const countryCode = country.tld;

      await AsyncStorage.setItem(
        'CountryInfo',
        JSON.stringify({ countryName, countryFlag, countryCode })
      );
      console.log('🌐 Country detected by IP:', { countryName, countryFlag, countryCode });
      forUpdateCountry = countryName;
      forUpdateCountryFlag = countryFlag;

      setInterval(async () => {
        const isSet = await AsyncStorage.getItem('setCountry');
        if (!isSet) {
          await updateUserCountryIfMismatch(countryName);
        }
      }, 20000);
    }
  } catch (error) {
    console.error('❌ Error fetching country by IP:', error);
  }
}

async function handleUserCountry(userCountry) {
  const itemsData = StoreCountryData.filter(
    item => item.name.common === userCountry
  );

  if (itemsData.length > 0) {
    const { name, flags, tld } = itemsData[0];
    const countryName = name.common;
    const countryFlag = flags.png;
    const countryCode = tld[0];

    await AsyncStorage.setItem(
      'CountryInfo',
      JSON.stringify({ countryName, countryFlag, countryCode })
    );
    console.log('✅ Country matched and stored:', { countryName, countryFlag, countryCode });
    forUpdateCountry = countryName;
    forUpdateCountryFlag = countryFlag;
  } else {
    console.warn('❓ Country not found in list:', userCountry);
  }

  setInterval(async () => {
    const isSet = await AsyncStorage.getItem('setCountry');
    if (!isSet) {
      await updateUserCountryIfMismatch(userCountry);
    }
  }, 20000);
}

async function updateUserCountryIfMismatch(userCountry) {
  const userEmail = await AsyncStorage.getItem('userEmail');
  const userLocalCountry = await AsyncStorage.getItem('setCountry');

  if (userEmail && userLocalCountry !== userCountry) {
    try {
      const res = await fetch(
        'https://node-js-express-login-example.onrender.com/api/auth/updateUserByCountry',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            country: forUpdateCountry,
            countryFlag: forUpdateCountryFlag,
            email: userEmail,
          }),
        }
      );
      const json = await res.json();

      if (json.message === 'Updated Successfylly') {
        await AsyncStorage.setItem('setCountry', json.country);
        await AsyncStorage.setItem('setCountryFlag', json.countryFlag);
        console.log('✅ User country updated on backend.');
      }
    } catch (error) {
      console.error('❌ Error updating user country:', error);
    }
  }
}

export async function initializeCountryTracking() {
  await fetchAndStoreCountries();
  await fetchUserCountryByTimezone();

  const interval = setInterval(async () => {
    const countryInfo = await AsyncStorage.getItem('CountryInfo');
    if (!countryInfo) {
      console.log('🔁 Retrying country detection...');
      await fetchAndStoreCountries();
      await fetchUserCountryByTimezone();
    } else {
      console.log('✅ CountryInfo found. Stopping interval.');
      clearInterval(interval);
    }
  }, 10000);
}

initializeCountryTracking();

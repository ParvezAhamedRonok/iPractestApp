import AsyncStorage from '@react-native-async-storage/async-storage';

export const startOneTimeAuthCheck = () => {
    return new Promise((resolve, reject) => {
        let intervalId = setInterval(async () => {
            try {
                const userEmail = await AsyncStorage.getItem("userEmail");
                const userToken = await AsyncStorage.getItem("loginToken");
                const userName = await AsyncStorage.getItem("userName")

                console.log("📧 Email:", userEmail);
                console.log("🔐 Token:", userToken);
                console.log("📧 Name_:", userName);


                clearInterval(intervalId);
                intervalId = null;

                // ✅ Return values via resolve
                resolve({
                    userEmail,
                    userToken,
                    userName
                });

            } catch (error) {
                clearInterval(intervalId);
                intervalId = null;
                console.error("❌ Error reading local data:", error);
                reject(error);
            }
        }, 1000);
    });
};

import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";

// ✅ Import your component for cards 1–10
import SpeakingCards from "./Cards"
import NavigationFull from "../../../components/NavigationFull";

const SpeakingAllTest = () => {
  const [mainDataAll, setMainData] = useState([]);
  const [openTestAfter10, setOpenTestsAfter10] = useState(false);
  // const [openTestAfter20, setOpenTestsAfter20] = useState(false);
  // const [openTestAfter30, setOpenTestsAfter30] = useState(false);
  // const [openTestAfter40, setOpenTestsAfter40] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://node-js-express-login-example.onrender.com/api/user/SpeakingResults/abc1234@gmail.com',
  //         {
  //           method: 'GET',
  //           headers: {
  //             Authorization: `Bearer abc1234@gmail.com`,
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const json = await response.json();
  //       setMainData(json.data); // ✅ exactly like in axios
  //     } catch (error) {
  //       console.error('Fetch error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <NavigationFull />
      <ScrollView className="flex-1 bg-white p-4">
        <SpeakingCards
          setOpenTestsAfter10={setOpenTestsAfter10}
          openTestAfter10={openTestAfter10}
          mainDataAll={mainDataAll}
        />
      </ScrollView>
    </>
  );
};

export default SpeakingAllTest;

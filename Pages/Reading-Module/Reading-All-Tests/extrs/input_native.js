import { View, Text, TextInput, Pressable } from 'react-native';
import { Explain_Btn } from './Explain_Btn'; // adjust path if needed

const Question6 = ({
  handleChange,
  ReadingShowAnswer,
  UserData,
  setExplainRLQuestions,
  setExplainObjForRL,
  userPaymentStatusCheck,
}) => {
  const showCorrect = ReadingShowAnswer === 'Actual-Test-3' && UserData.ques6 === 'J';
  const showIncorrect = ReadingShowAnswer === 'Actual-Test-3' && UserData.ques6 !== 'J' && UserData.ques6 !== '';

  return (
    <View className="flex-row flex-wrap gap-1 mb-2">
      <View className="flex-row flex-wrap items-center">
        <Text className="font-bold mr-1">6</Text>
        <Text className="mr-1">The home of creative minds and amazing landscapes.</Text>

        <TextInput
          onChangeText={(text) => handleChange('ques6', text)}
          className={`inputs font-bold ${showIncorrect ? 'text-red-600' : ''} ${showCorrect ? 'text-green-700' : ''}`}
          value={UserData.ques6}
        />

        {ReadingShowAnswer === 'Actual-Test-3' && UserData.ques6 !== 'J' && (
          <View className="flex-row items-center border border-gray-300 rounded p-1 ml-2 font-bold">
            <Text className="text-green-600 font-bold">J</Text>
            <Pressable
              onPress={() => {
                if (userPaymentStatusCheck) {
                  setExplainRLQuestions(true);
                } else {
                  // React Native alternative to navigate
                  // Example: using React Navigation
                  // navigation.navigate('BillingPage');
                  // Otherwise use deep linking or WebView
                }

                setExplainObjForRL((makeObj) => ({
                  number: 6,
                  Ans1: '',
                  mainAns: 'J',
                  hiddenWord: 'Paragraph J',
                  hiddenWord2: '',
                  hiddenWord3: '',
                  keyWords: '',
                  explain:
                    'Paragraph J: Describes a place renowned for its artistic community and beautiful scenery. San Francisco, USA, is known for its vibrant arts scene and picturesque landscapes.',
                }));
              }}
            >
              <Explain_Btn />
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default Question6;

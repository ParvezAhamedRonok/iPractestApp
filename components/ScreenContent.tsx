import { Text, View, Pressable } from 'react-native';
import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View className="w-11/12 max-w-md p-[2px] rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-xl">
        <View className="bg-black/80 backdrop-blur-md p-6 rounded-3xl space-y-5">

          {/* 🔥 Title */}
          <Text className="text-3xl font-bold text-center text-white tracking-wider">
            {title}
          </Text>

          {/* ⚡️ Separator */}
          <View className="h-[1px] w-full bg-white/20" />

          {/* 🛠️ Edit Info */}
          <EditScreenInfo path={path} />

          {/* 🧩 Optional Content */}
          {children && (
            <View className="pt-4">
              {children}
            </View>
          )}

          {/* ✨ Action Button */}
          <Pressable className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 py-3 rounded-2xl shadow-lg active:opacity-70">
            <Text className="text-center text-white font-semibold tracking-wide">amer soner bangla ami tumay onek beshi valobasi</Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
};

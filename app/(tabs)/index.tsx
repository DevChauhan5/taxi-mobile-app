import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center ">
      <Text className="text-red-500">Taxi App</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

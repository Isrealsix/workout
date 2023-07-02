import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { ScreenProps } from "../types";

const HomeScreen = () => {
  const navigation = useNavigation<ScreenProps>();
  return (
    <>
      <View>
        <Text>I am home o</Text>
      </View>
    </>
  );
};

export default HomeScreen;

import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { HomeScreenProps } from "../types";

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProps>();
  return (
    <>
      <View>
        <Text>I am home o</Text>
        <Button
          title="Go to planner"
          onPress={() => navigation.navigate('PlannerScreen')}
        />
      </View>
    </>
  );
};

export default HomeScreen;

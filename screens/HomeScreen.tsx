import { View, Text, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import { RootStackParams } from "../navigation";

type HomeScreenProps = NativeStackNavigationProp<RootStackParams>;
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

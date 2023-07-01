import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/Planner";
import { RootStackParams } from "../types";

const Stack = createNativeStackNavigator<RootStackParams>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PlannerScreen" component={PlannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

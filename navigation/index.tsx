import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/Planner";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Planner" component={PlannerScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}
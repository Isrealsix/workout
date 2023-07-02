import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/Planner";
import { RootStackParams } from "../types";

const Stack = createNativeStackNavigator<RootStackParams>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PlannerScreen" component={PlannerScreen} /> */}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootStackParams>();

function BottomTabNavigator() {
  return <BottomTab.Navigator initialRouteName="HomeScreen">
    <BottomTab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ unmountOnBlur: true }}
    />
    <BottomTab.Screen
      name="PlannerScreen"
      component={PlannerScreen}
      options={{ unmountOnBlur: true }}
    />
  </BottomTab.Navigator>
}
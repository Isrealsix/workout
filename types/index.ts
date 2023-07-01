import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParams = {
  HomeScreen: undefined;
  PlannerScreen: undefined;
  Root: undefined
}

export type ScreenProps = NativeStackNavigationProp<RootStackParams>;
// export type HomeScreenProps = NativeStackNavigationProp<RootStackParams>;
// type PlannerScreenProps = NativeStackNavigationProp<RootStackParams>;
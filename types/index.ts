import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import data from '../data.json';

export type RootStackParams = {
  HomeScreen: undefined;
  PlannerScreen: undefined;
  Root: undefined
}

type TData = typeof data
export interface Workout extends TData {}
export type ScreenProps = NativeStackNavigationProp<RootStackParams>;
// export type HomeScreenProps = NativeStackNavigationProp<RootStackParams>;
// type PlannerScreenProps = NativeStackNavigationProp<RootStackParams>;
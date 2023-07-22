import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import data from '../data.json';

export type RootStackParams = {
  HomeScreen: undefined;
  PlannerScreen: undefined;
  Root: undefined
  WorkoutDetail: undefined
}

type TData = typeof data
type MutatedTData = Array<Omit<TData[number], "difficulty"> & { difficulty: "easy" | "normal" | "hard" }>;
export type SequenceItem = TData[number]['sequence'][number]

export interface Workout extends MutatedTData {}

export type ScreenProps = NativeStackNavigationProp<RootStackParams>;
// export type HomeScreenProps = NativeStackNavigationProp<RootStackParams>;
// type PlannerScreenProps = NativeStackNavigationProp<RootStackParams>;
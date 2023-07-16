import { containsKey, getData, storeData } from '.';
import data from '../data.json';
import { Workout } from '../types';


export const getWorkouts = async (): Promise<Workout[]> => {
  const workouts = await getData('workout-data');
  return workouts;
}

export const initWorkouts = async (): Promise<boolean> => {
  const WORKOUT_KEY = 'workout-data';
  const hasWorkouts = await containsKey(WORKOUT_KEY);
  if (!hasWorkouts) {
    await storeData(WORKOUT_KEY, data);
    return true;
  }
  return false;
}
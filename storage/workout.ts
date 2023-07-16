import { containsKey, getData, removeItem, storeData } from '.';
import data from '../data.json';
import { Workout } from '../types';

const WORKOUT_KEY = 'workout-data';

export const getWorkouts = async (): Promise<Workout> => {
  const workouts = await getData('workout-data');
  return workouts;
}

export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = await containsKey(WORKOUT_KEY);
  if (!hasWorkouts) {
    await storeData(WORKOUT_KEY, data);
    return true;
  }
  return false;
}

export const clearWorkouts = async () => {
  try {
    await removeItem(WORKOUT_KEY);
  } catch (error) {
    console.error((error as Error).message);
  }
}
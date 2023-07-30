import { containsKey, getData, removeItem, storeData } from '.';
import data from '../data.json';
import { Workout } from '../types';

const WORKOUT_KEY = 'workout-data';

export const getWorkouts = async (): Promise<Workout> => {
  const workouts = await getData(WORKOUT_KEY);
  return workouts;
}

export const getWorkoutBySlug = async (slug?: string): Promise<Workout[number]> => {
  const workouts = await getWorkouts();
  const [workout] =  workouts.filter((w) => w.slug === slug);
  return workout;
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

export const storeWorkout = async (newWorkout: Workout[number]): Promise<boolean> => {
  const workouts = await getWorkouts();
  await storeData(WORKOUT_KEY, [newWorkout, ...workouts]);
  return true;
}

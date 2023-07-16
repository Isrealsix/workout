import { useEffect, useState } from "react";
import { getWorkoutBySlug } from "../storage/workout";
import { Workout } from "../types";

export const useWorkoutBySlug = (slug?: string) => {
  const [workout, setWorkout] = useState<Workout[number]>();

  useEffect(() => {
    async function getData () {
      const _workout = await getWorkoutBySlug(slug);
      setWorkout(_workout);
    }

    getData();
  }, []);

  return workout;
}
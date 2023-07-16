import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { getData, storeData, containsKey } from '../storage';
import data from '../data.json';

const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        const hasWorkouts = await containsKey('workout-data');
        if (!hasWorkouts) await storeData('workout-data', data);
        await Font.loadAsync({
          "montserrat": require('../assets/fonts/Montserrat-Regular.ttf'),
          "montserrat-bold": require('../assets/fonts/Montserrat-Bold.ttf')
        })
      } catch (error) {
        console.warn(error);
      } finally {
        const workouts = await getData('workout-data');
        console.log(workouts, 'of meee');
        setIsLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete
}

export default useCachedResources;
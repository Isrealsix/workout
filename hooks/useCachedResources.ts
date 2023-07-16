import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { getWorkouts, initWorkouts } from '../storage/workout';


const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await initWorkouts();
        await Font.loadAsync({
          "montserrat": require('../assets/fonts/Montserrat-Regular.ttf'),
          "montserrat-bold": require('../assets/fonts/Montserrat-Bold.ttf')
        })
      } catch (error) {
        console.warn(error);
      } finally {
        const workouts = await getWorkouts();
        console.log(workouts, 'of meee');
        setIsLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete
}

export default useCachedResources;
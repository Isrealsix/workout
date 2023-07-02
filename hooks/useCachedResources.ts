import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          "montserrat": require('../assets/fonts/Monstserrat-Regular.ttf'),
          "montserrat-bold": require('../assets/fonts/Monstserrat-Bold.ttf')
        })
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete
}

export default useCachedResources
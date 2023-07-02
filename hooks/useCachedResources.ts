import { useEffect, useState } from 'react'

const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  useEffect(() => {
    function loadResourcesAndDataAsync() {
      setTimeout(() => {
        setIsLoadingComplete(true);
      }, 3000);
    }
    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete
}

export default useCachedResources
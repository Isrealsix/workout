import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import Navigation from './navigation';
import useCachedResources from './hooks/useCachedResources';

export default function App() {
  const isLoaded = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoaded) return null;
  console.log(isLoaded);
  return (
    <>
      <Navigation colorScheme={colorScheme} />
      <StatusBar style="auto" />
    </>
  );
}
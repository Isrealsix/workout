import { Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { Workout, ScreenProps } from "../types";
import WorkoutItem from "../components/WorkoutItem";

const PressableItem = ({ item }: { item: Workout[number] }) => {
  const navigation = useNavigation<ScreenProps>();
  function routeTo (path: string) {
    navigation.navigate('WorkoutDetail')
  }
  return (
    <Pressable onPress={
      () => {
        routeTo('WorkoutDetail')
      }
    }>
      <WorkoutItem item={item} />
    </Pressable>
  );
};

export default PressableItem
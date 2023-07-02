import { View, Text } from 'react-native';
import { Workout } from '../types';

const WorkoutItem = ({ item }: {item: Workout[number]}) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.difficulty}</Text>
    </View>
  )
}

export default WorkoutItem
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenProps } from '../types';

const PlannerScreen= () => {
  const navigation = useNavigation<ScreenProps>();
  return (
    <View>
      <Text>I am Planner o</Text>
      <Button 
        title='Go Home'
        onPress={() => navigation.navigate('HomeScreen') }
      />
    </View>
  )
}

export default PlannerScreen
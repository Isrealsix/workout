import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { RootStackParams } from '../navigation';




type PlannerScreenProps = NativeStackNavigationProp<RootStackParams>;

const PlannerScreen= () => {
  const navigation = useNavigation<PlannerScreenProps>();
  useLayoutEffect(() => {
    if (navigation) {
      navigation.setOptions({
        title: 'Planner Screen',
      });
    }
  }, [navigation]);

  return (
    <View>
      <Text>I am Planner o</Text>
      <Button 
        title='Go Home'
        onPress={() => navigation.push('HomeScreen') }
      />
    </View>
  )
}

export default PlannerScreen
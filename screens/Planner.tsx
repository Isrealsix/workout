import { View, Text, Button } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const PlannerScreen:React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  return (
    <View>
      <Text>I am Planner o</Text>
      <Button 
        title='Go Home'
        onPress={() => navigation.push('Home')}
      />
    </View>
  )
}

export default PlannerScreen
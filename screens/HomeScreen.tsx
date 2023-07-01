import { View, Text, Button } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const HomeScreen:React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  return (
    <View>
      <Text>I am home o</Text>
      <Button 
        title='Go to planner'
        onPress={() => navigation.push('Planner')}
      />
    </View>
  )
}

export default HomeScreen
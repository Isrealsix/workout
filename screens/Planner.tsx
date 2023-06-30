import { View, Text, Button } from 'react-native'

const PlannerScreen:React.FC<any> = ({ navigation }) => {
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
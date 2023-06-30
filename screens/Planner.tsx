import { View, Text, Button } from 'react-native'

const PlannerScreen = () => {
  return (
    <View>
      <Text>I am Planner o</Text>
      <Button 
        title='Go Home'
        onPress={() => alert('Go to Home screen')}
      />
    </View>
  )
}

export default PlannerScreen
import { View, Text, Button } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Text>I am home o</Text>
      <Button 
        title='Go to planner'
        onPress={() => alert('Go to planner')}
      />
    </View>
  )
}

export default HomeScreen
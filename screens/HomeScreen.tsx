import { View, Text, Button } from 'react-native'

const HomeScreen:React.FC<any> = ({ navigation }) => {
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
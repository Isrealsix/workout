import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenProps } from '../types';
import WorkoutForm, { IExerciseForm } from '../components/WorkoutForm';

const PlannerScreen = () => {
  const navigation = useNavigation<ScreenProps>();
  
  const handleFormSubmit = (form: IExerciseForm) => {
    alert(`${form.name} - ${form.duration}`)
  }

  return (
    <View style={styles.container}>
      {/* <Text>I am Planner o</Text>
      <Button 
        title='Go Home'
        onPress={() => navigation.navigate('HomeScreen') }
      /> */}
      <WorkoutForm
        onSubmit={handleFormSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})

export default PlannerScreen
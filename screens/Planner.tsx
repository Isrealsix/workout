import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenProps, SequenceItem } from '../types';
import ExerciseForm, { IExerciseForm } from '../components/ExerciseForm';

const PlannerScreen = () => {
  const navigation = useNavigation<ScreenProps>();
  
  const handleFormSubmit = (form: IExerciseForm) => {
    const sequenceItem: SequenceItem = {
      slug: form.name + Date.now(),
      name: form.name,
      type: form.type,
      duration: Number(form.duration),
      reps: form.reps
    }

    console.log(form);
  }

  return (
    <View style={styles.container}>
      <ExerciseForm
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
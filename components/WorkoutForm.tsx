import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PressableText from "./styled/PressableText";

export interface IExerciseForm {
  name: string,
  duration: string
}
interface IProps {
  onSubmit: (form: IExerciseForm) => void
}
const WorkoutForm: React.FC<IProps> = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    duration: ''
  })

  const handleTextChange = (name: string) => (text: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: text
    }))
  }
  return (
    <View style={styles.container}>
      <Text>Excersice form</Text>
      <View>
        <TextInput
          value={form.name}
          style={styles.input}
          onChangeText={handleTextChange('name')}
        />
        <TextInput
          value={form.duration}
          style={styles.input}
          onChangeText={handleTextChange('duration')}
        />
        <PressableText
          text="Submit"
          onPress={() => onSubmit(form)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default WorkoutForm;

import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PressableText from "./styled/PressableText";
import { Controller, useForm } from "react-hook-form";
export interface IExerciseForm {
  name: string;
  duration: string;
}
interface IProps {
  onSubmit: (form: IExerciseForm) => void;
}
const WorkoutForm: React.FC<IProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
      <Text>Excersice form</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="name"
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
        />
        <PressableText
          text="Submit"
          onPress={handleSubmit((data) => {
            onSubmit(data as IExerciseForm)
            console.log(data);
          })}
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
    padding: 10,
  },
});

export default WorkoutForm;

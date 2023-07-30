import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PressableText from "./styled/PressableText";
import { Controller, useForm } from "react-hook-form";
export interface IWorkoutForm {
  name: string;
}
interface IProps {
  onSubmit: (form: IWorkoutForm) => void;
}
const WorkoutForm: React.FC<IProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm();
  return (
    <View style={styles.container}>
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
            placeholder="Workout name"
          />
        )}
      />
      <PressableText
        style={{ marginTop: 10 }}
        text="Confirm"
        onPress={handleSubmit((data) => {
          onSubmit(data as IWorkoutForm);
          console.log(data);
        })}
      />
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
    width: 200,
    margin: 2,
    borderWidth: 1,
    height: 30,
    padding: 5,
    borderRadius: 5,
    borderColor: "rgba(0,0,0,0.4)",
  },
});

export default WorkoutForm;

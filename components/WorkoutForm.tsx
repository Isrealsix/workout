import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PressableText from "./styled/PressableText";
import { Controller, useForm } from "react-hook-form";
export interface IExerciseForm {
  name: string;
  duration: string;
  type: string;
  reps?: number;
}
interface IProps {
  onSubmit: (form: IExerciseForm) => void;
}
const WorkoutForm: React.FC<IProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm();
  const [isSelectionOn, setSelectionOn] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Excersice form</Text>
      <View>
        <View style={styles.rowContainer}>
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
                placeholder="Name"
              />
            )}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="duration"
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                style={styles.input}
                placeholder="Duration"
              />
            )}
          />
        </View>
        <View style={styles.rowContainer}>
          <Controller
            control={control}
            name="reps"
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                style={styles.input}
                placeholder="Repetitions"
              />
            )}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="type"
            render={({ field: { onChange, value } }) => (
              <View style={{ flex: 1 }}>
                {isSelectionOn ? (
                  <View>
                    <PressableText text="exercise" onPressIn={() => setSelectionOn(false)} />
                    <PressableText text="break" onPressIn={() => setSelectionOn(false)} />
                    <PressableText text="stretch" onPressIn={() => setSelectionOn(false)} />
                  </View>
                ) : (
                  <TextInput
                    onPressIn={() => setSelectionOn(true)}
                    style={styles.input}
                    placeholder="Type"
                  />
                )}
              </View>
            )}
          />
        </View>
        <PressableText
          text="Submit"
          onPress={handleSubmit((data) => {
            onSubmit(data as IExerciseForm);
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
    flex: 1,
    margin: 2,
    borderWidth: 1,
    height: 30,
    padding: 5,
    borderRadius: 5,
    borderColor: "rgba(0,0,0,0.4)",
  },
  rowContainer: {
    flexDirection: "row",
  },
});

export default WorkoutForm;

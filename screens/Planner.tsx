import { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenProps, SequenceItem } from "../types";
import ExerciseForm, { IExerciseForm } from "../components/ExerciseForm";
import slugify from "slugify";
import ExerciseItem from "../components/ExerciseItem";
import PressableText from "../components/styled/PressableText";
import Modal from "../components/styled/Modal";
import WorkoutForm, { IWorkoutForm } from "../components/WorkoutForm";

const PlannerScreen = () => {
  const navigation = useNavigation<ScreenProps>();
  const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);

  const handleExerciseSubmit = (form: IExerciseForm) => {
    const sequenceItem: SequenceItem = {
      slug: slugify(form.name + " " + Date.now(), { lower: true }),
      name: form.name,
      type: form.type,
      duration: Number(form.duration),
      reps: form.reps,
    };

    console.log(form);
    setSeqItems([...seqItems, sequenceItem]);
  };

  const computeDiff = (exercisesCount: number, workoutDuration: number) => {
    const intensity = workoutDuration / exercisesCount;
    if (intensity <= 60) return "hard";
    else if (intensity <= 100) return "normal";
    return "easy";
  };

  const handleWorkoutSubmit = (form: IWorkoutForm) => {
    console.log(form);
    if (seqItems.length > 0) {
      const duration = seqItems.reduce((acc, item) => {
        return acc + item.duration;
      }, 0);
      const workout = {
        name: form.name,
        slug: slugify(form.name + " " + Date.now(), { lower: true }),
        difficulty: computeDiff(seqItems.length, duration),
        sequence: [...seqItems],
        duration,
      };

      console.log(workout, "in planner");
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={seqItems}
        keyExtractor={(item) => item.slug}
        renderItem={({ item, index }) => (
          <ExerciseItem item={item}>
            <PressableText
              text="Remove"
              onPressIn={() => {
                const items = [...seqItems];
                items.splice(index, 1);
                setSeqItems(items);
              }}
            />
          </ExerciseItem>
        )}
      />
      <ExerciseForm onSubmit={handleExerciseSubmit} />
      <View>
        <Modal
          activator={({ handleOpen }) => (
            <PressableText
              style={{ marginTop: 15 }}
              text="Create Workout"
              onPress={handleOpen}
            />
          )}
        >
          {({handleClose}) => (
            <View>
              <WorkoutForm
                onSubmit={(data) => {
                  handleWorkoutSubmit(data);
                  handleClose();
                }}
              />
            </View>
          )}
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default PlannerScreen;

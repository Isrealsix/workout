import { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenProps, SequenceItem } from "../types";
import ExerciseForm, { IExerciseForm } from "../components/ExerciseForm";
import slugify from "slugify";

const PlannerScreen = () => {
  const navigation = useNavigation<ScreenProps>();
  const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);

  const handleFormSubmit = (form: IExerciseForm) => {
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

  return (
    <View style={styles.container}>
      <FlatList
        data={seqItems}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <ExerciseForm onSubmit={handleFormSubmit} />
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

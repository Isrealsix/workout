import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import Modal from "../components/styled/Modal";
import PressableText from "../components/styled/PressableText";
import { formatSec } from "../utils/time";
import { FontAwesome } from "@expo/vector-icons";
import WorkoutItem from "../components/WorkoutItem";
import { SequenceItem } from "../types";

interface IProps {
  route?: {
    params: {
      slug: string;
    };
  };
}

const WorkoutDetailScreen = ({ route }: IProps) => {
  const [sequence, setSequence] = useState<SequenceItem[]>([]);
  const workout = useWorkoutBySlug(route?.params.slug);

  const addItemToSequence = (idx: number) => {
    setSequence([...sequence, workout!.sequence[idx]]);
  };
  if (!workout) return;
  return (
    <View style={styles.container}>
      <WorkoutItem
        item={workout}
        childStyles={{
          marginTop: 10,
        }}
      >
        <Modal
          activator={({ handleOpen }) => (
            <PressableText onPress={handleOpen} text="Check Sequence" />
          )}
        >
          <View>
            {workout.sequence.map((item, idx) => (
              <View key={item.slug} style={styles.sequenceItem}>
                <Text>
                  {item.name} | {item.type} | {formatSec(item.duration)}
                </Text>
                {idx !== workout.sequence.length - 1 && (
                  <FontAwesome name="arrow-down" size={24} />
                )}
              </View>
            ))}
          </View>
        </Modal>
      </WorkoutItem>
      <View>
        {sequence.length === 0 && (
          <FontAwesome
            name="play-circle-o"
            size={100}
            onPress={() => addItemToSequence(0)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    // fontFamily: 'montserrat-bold'
  },
  sequenceItem: {
    alignItems: "center",
  },
});
export default WorkoutDetailScreen;

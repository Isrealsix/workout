import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import Modal from "../components/styled/Modal";
import PressableText from "../components/styled/PressableText";
import { formatSec } from "../utils/time";
import { FontAwesome } from "@expo/vector-icons";
import WorkoutItem from "../components/WorkoutItem";
import { SequenceItem } from "../types";
import useCountdown from "../hooks/useCountdown";

interface IProps {
  route?: {
    params: {
      slug: string;
    };
  };
}

const WorkoutDetailScreen = ({ route }: IProps) => {
  const [sequence, setSequence] = useState<SequenceItem[]>([]);
  const [trackerIdx, setTrackerIdx] = useState(-1);

  const workout = useWorkoutBySlug(route?.params.slug);
  const countDown = useCountdown(
    trackerIdx,
    trackerIdx >= 0 ? sequence[trackerIdx].duration : -1
  );

  useEffect(() => {
    if (!workout) return;
    if (trackerIdx === workout.sequence.length - 1) return;
    if (countDown === 0) addItemToSequence(trackerIdx + 1);
  }, [countDown]);

  const addItemToSequence = (idx: number) => {
    setSequence([...sequence, workout!.sequence[idx]]);
    setTrackerIdx(idx);
  };

  if (!workout) return;

  const hasReachedEnd =
    sequence.length === workout.sequence.length && countDown === 0;
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
      <View style={styles.centerView}>
        {sequence.length === 0 && (
          <FontAwesome
            name="play-circle-o"
            size={100}
            onPress={() => addItemToSequence(0)}
          />
        )}
        {sequence.length > 0 && countDown >= 0 && (
          <View>
            <Text style={{ fontSize: 55 }}>{countDown}</Text>
          </View>
        )}
      </View>
      <View>
        <Text>
          {sequence.length === 0
            ? "Prepare"
            : hasReachedEnd
            ? "Great Job!"
            : sequence[trackerIdx].name}
        </Text>
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
  centerView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
});
export default WorkoutDetailScreen;

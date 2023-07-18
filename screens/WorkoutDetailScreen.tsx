import { View, Text, StyleSheet,Modal } from "react-native";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import PressableText from "../components/styled/PressableText";

interface IProps {
  route?: {
    params: {
      slug: string
    }
  }
}

const WorkoutDetailScreen = ({route}: IProps) => {
  const workout = useWorkoutBySlug(route?.params.slug);
  if (!workout) return;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout.name}</Text>
      <PressableText
        onPress={() => {
          alert('opening modal');
        }}
        text="Check Sequence"
      />
      <Modal
        visible={false}
        transparent={true}
        animationType="none"
      >
        <Text>Hello There!</Text>
      </Modal>
      {/* <MontserratText
        style={{fontSize: 30}}>
        New Workout
      </MontserratText> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    // fontFamily: 'montserrat-bold'
  }
});
export default WorkoutDetailScreen;

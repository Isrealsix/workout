import { View, Text, StyleSheet, Pressable } from "react-native";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";

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
      <Pressable
        onPress={() => {
          alert('opening modal');
        }}
      >
        <Text style={{textDecorationLine: 'underline'}}>
          Check Sequence
        </Text>
      </Pressable>
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

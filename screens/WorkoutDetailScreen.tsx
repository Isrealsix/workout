import { View, Text, StyleSheet } from "react-native";
import MontserratText from "../components/styled/MontserratText";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";

interface IProps {
  route?: {
    params: {
      slug: string
    }
  }
}

const WorkoutDetailScreen = ({route}: IProps) => {
  const workout = useWorkoutBySlug(route?.params.slug)
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout?.name}</Text>
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

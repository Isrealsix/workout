import { View, Text, StyleSheet, FlatList } from "react-native";
import MontserratText from "../components/styled/MontserratText";
import PressableItem from "../utils/PressableItem";
import { useWorkouts } from "../hooks/useWorkouts";

const HomeScreen = () => {
  const workouts = useWorkouts();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workoutas</Text>
      <MontserratText style={{ fontSize: 30 }}>New Workout</MontserratText>
      <FlatList
        data={workouts}
        renderItem={(items) => <PressableItem {...items} />}
        keyExtractor={(item) => item.slug}
      />
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
});
export default HomeScreen;

import { View, StyleSheet, FlatList } from "react-native";
import data from "../data.json";
import { Workout } from "../types";
import WorkoutItem from "../components/WorkoutItem";
// import { useNavigation } from "@react-navigation/core";
// import { ScreenProps } from "../types";

const HomeScreen = () => {
  // const navigation = useNavigation<ScreenProps>();
  return (
    <View style={styles.container}>
      <FlatList
        data={data as Array<Workout[number]>}
        renderItem={WorkoutItem}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
export default HomeScreen;

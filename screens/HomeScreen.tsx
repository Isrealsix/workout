import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import data from "../data.json";
import { Workout } from "../types";
import WorkoutItem from "../components/WorkoutItem";
import MontserratText from "../components/styled/MontserratText";
// import { useNavigation } from "@react-navigation/core";
// import { ScreenProps } from "../types";

const PressableItem = ({item}: {item: Workout[number]}) => (
  <Pressable
    onPress={() => alert(`I am here - ${item.name}`)}
  >
    <WorkoutItem item={item} />
  </Pressable>
);
const HomeScreen = () => {
  // const navigation = useNavigation<ScreenProps>();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workoutas</Text>
      <MontserratText
        style={{fontSize: 30}}>
        New Workout
      </MontserratText>
      <FlatList
        data={data as Array<Workout[number]>}
        renderItem={PressableItem}
        keyExtractor={(item) => item.slug}
      />
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
export default HomeScreen;

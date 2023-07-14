import { View, Text, StyleSheet, FlatList } from "react-native";
import data from "../data.json";
import { Workout } from "../types";
import MontserratText from "../components/styled/MontserratText";
import PressableItem from "../utils/PressableItem";

const HomeScreen = () => {
  // const navigation = useNavigation<ScreenProps>();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workoutas</Text>
      <MontserratText style={{ fontSize: 30 }}>New Workout</MontserratText>
      <FlatList
        data={data as Array<Workout[number]>}
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

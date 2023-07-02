import { View, Text, StyleSheet, FlatList } from "react-native";
import data from "../data.json";
import { Workout } from "../types";
// import { useNavigation } from "@react-navigation/core";
// import { ScreenProps } from "../types";

const HomeScreen = () => {
  // const navigation = useNavigation<ScreenProps>();
  const renderItem = ({ item }: {item: Workout[number]}) => (
    <View>
      <Text>{`${item.name} - ${item.difficulty}`}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {/* <Text>I am home o</Text> */}
      <FlatList
        data={data as Array<Workout[number]>}
        renderItem={renderItem}
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

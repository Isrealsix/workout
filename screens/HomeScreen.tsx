import { View, Text, StyleSheet } from "react-native";
import data from "../data.json";
// import { useNavigation } from "@react-navigation/core";
// import { ScreenProps } from "../types";

const HomeScreen = () => {
  // const navigation = useNavigation<ScreenProps>();
  return (
    <View style={styles.container}>
      <Text>I am home o</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})
export default HomeScreen;

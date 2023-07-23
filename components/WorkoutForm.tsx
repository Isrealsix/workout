import { StyleSheet, Text, View } from "react-native";

const WorkoutForm = () => {
  return (
    <View style={styles.container}>
      <Text>Excersice form</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10
  }
})

export default WorkoutForm;

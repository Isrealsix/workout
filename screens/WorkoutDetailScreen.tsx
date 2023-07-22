import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import Modal from "../components/styled/Modal";

interface IProps {
  route?: {
    params: {
      slug: string
    }
  }
}

const WorkoutDetailScreen = ({route}: IProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const workout = useWorkoutBySlug(route?.params.slug);
  if (!workout) return;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout.name}</Text>
      <Modal />
      {/* <PressableText
        onPress={() => setIsModalVisible(true)}
        text="Check Sequence"
      />
      <Modal
        visible={isModalVisible}
        transparent={false}
        animationType="slide"
      >
      <View style={styles.centerView}>
        <Text style={{ marginBottom: 100 }}>Hello There!</Text>
        {/* <PressableText
          onPress={() => setIsModalVisible(false)}
          text="Close"
        />
      </View>
      </Modal>
      <MontserratText
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

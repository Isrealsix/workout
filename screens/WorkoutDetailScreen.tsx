import { View, Text, StyleSheet } from "react-native";
import MontserratText from "../components/styled/MontserratText";
import { RootStackParams } from "../types";

interface IProps {
  route?: {
    params: {
      slug: string
    }
  }
}

const WorkoutDetailScreen = ({route}: IProps) => {
  // const navigation = useNavigation<ScreenProps>();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Slug - {route?.params.slug}</Text>
      <MontserratText
        style={{fontSize: 30}}>
        New Workout
      </MontserratText>

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

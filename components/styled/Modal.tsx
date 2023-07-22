import { useState } from "react";
import { View, Text, StyleSheet, Modal as DefaultModal } from "react-native";
import PressableText from "./PressableText";

const Modal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View>
      <DefaultModal
        visible={isModalVisible}
        transparent={false}
        animationType="slide"
      >
        <View style={styles.centerView}>
          <Text style={{ marginBottom: 100 }}>Hello There!</Text>
          <PressableText
            onPress={() => setIsModalVisible(false)}
            text="Close"
          />
        </View>
      </DefaultModal>
      <PressableText
        onPress={() => setIsModalVisible(true)}
        text="Check Sequence"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Modal;

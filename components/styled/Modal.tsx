import { useState } from "react";
import { View, Text, StyleSheet, Modal as DefaultModal } from "react-native";
import PressableText from "./PressableText";

interface IActivator {
  handleOpen: () => void;
}
interface IProps {
  activator?: React.FC<IActivator>;
  children: React.ReactNode
}

const Modal: React.FC<IProps> = ({ activator: Activator, children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View>
      <DefaultModal
        visible={isModalVisible}
        transparent={false}
        animationType="slide"
      >
        <View style={styles.centerView}>
          {children}
          {/* <Text style={{ marginBottom: 100 }}>Hello There!</Text> */}
          <PressableText
            onPress={() => setIsModalVisible(false)}
            text="Close"
          />
        </View>
      </DefaultModal>
      {Activator ? (
        <Activator handleOpen={() => setIsModalVisible(true)} />
      ) : (
        <PressableText onPress={() => setIsModalVisible(true)} text="Open" />
      )}
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

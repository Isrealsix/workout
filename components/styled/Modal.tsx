import { useState } from "react";
import { View, Text, StyleSheet, Modal as DefaultModal } from "react-native";
import PressableText from "./PressableText";

interface IActivator {
  handleOpen: () => void;
}

interface IChildren {
  handleOpen: () => void;
  handleClose: () => void
}
interface IProps {
  activator?: React.FC<IActivator>;
  children: React.FC<IChildren>
}

const Modal: React.FC<IProps> = ({ activator: Activator, children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpen = () => setIsModalVisible(true);
  const handleClose = () => setIsModalVisible(false);
  return (
    <View>
      <DefaultModal
        visible={isModalVisible}
        transparent={false}
        animationType="slide"
      >
        <View style={styles.centerView}>
          <View style={styles.contentView}>
            {children({handleOpen, handleClose})}
          </View>
          {/* <Text style={{ marginBottom: 100 }}>Hello There!</Text> */}
          <PressableText
            onPress={handleClose}
            text="Close"
          />
        </View>
      </DefaultModal>
      {Activator ? (
        <Activator handleOpen={handleOpen} />
      ) : (
        <PressableText onPress={handleOpen} text="Open" />
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
  contentView: {
    marginBottom: 20
  }
});

export default Modal;

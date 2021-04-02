import * as React from "react";
import { Modal, SafeAreaView, Text, View } from "react-native";
import { Header, HeaderBackButton } from "@react-navigation/elements";

type RnModalProps = {
  visible: boolean;
  onRequestClose: () => void;
};

export const RnModal: React.FC<RnModalProps> = ({
  visible,
  onRequestClose,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      style={{ backgroundColor: "white" }}
    >
      <View style={{ flex: 1 }}>
        <SafeAreaView>
          <Header
            title="RN Modal"
            headerLeft={() => <HeaderBackButton onPress={onRequestClose} />}
          />
        </SafeAreaView>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>MODAL CONTENT!</Text>
        </View>
      </View>
    </Modal>
  );
};

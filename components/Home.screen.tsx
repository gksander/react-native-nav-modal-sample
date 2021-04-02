import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Button, View } from "react-native";
import { RnModal } from "./RnModal";
import { RootStackNavList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenProps = {};

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [isRnModalVisible, setIsRnModalVisible] = React.useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackNavList>>();

  return (
    <React.Fragment>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View>
          <Button
            title="Open nav-based modal"
            onPress={() => navigation.navigate("NavModal")}
          />
          <Button
            title="Open RN Modal"
            onPress={() => setIsRnModalVisible(true)}
          />
        </View>
      </View>
      <RnModal
        visible={isRnModalVisible}
        onRequestClose={() => setIsRnModalVisible(false)}
      />
    </React.Fragment>
  );
};

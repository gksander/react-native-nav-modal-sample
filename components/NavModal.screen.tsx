import * as React from "react";
import { Text, View } from "react-native";

type NavModalScreenProps = {};

export const NavModalScreen: React.FC<NavModalScreenProps> = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>MODAL CONTENT!</Text>
    </View>
  );
};

import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";

type SuperImportantToastProps = {};

export const SuperImportantToast: React.FC<SuperImportantToastProps> = () => {
  return (
    <View
      style={{ position: "absolute", width: "100%", zIndex: 10 }}
      pointerEvents="none"
    >
      <SafeAreaView>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#cd1616",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Super important message!!!
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

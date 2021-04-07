import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { tw2 } from "../tw";

type SuperImportantToastProps = {};

export const SuperImportantToast: React.FC<SuperImportantToastProps> = () => {
  return (
    <View style={tw2(["absolute", "w-full", "z-10", "pointer-events-none"])}>
      <SafeAreaView>
        <View style={tw2(["p-4", "flex-row", "justify-center"])}>
          <View style={tw2(["bg-red-600", "px-4", "py-2", "rounded-full"])}>
            <Text style={tw2(["text-white", "font-bold"])}>
              Super important message!!!
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

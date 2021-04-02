import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from "@react-navigation/stack";
import { HomeScreen } from "./components/Home.screen";
import { NavModalScreen } from "./components/NavModal.screen";
import { View } from "react-native";
import { SuperImportantToast } from "./components/SuperImportantToast";

export type RootStackNavList = {
  Home: undefined;
  NavModal: undefined;
};
const RootStack = createStackNavigator<RootStackNavList>();

/**
 * Main app
 */
const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <SuperImportantToast />
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomeScreen} />
          {/*
            MAGIC SAUCE FOR MODAL ANIMATION!
            Use cardStyleInterpolator to make your own modal animation
          */}
          <RootStack.Screen
            name="NavModal"
            component={NavModalScreen}
            options={() => ({
              title: "Nav Modal",
              gestureDirection: "vertical",
              transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec,
              },
              cardOverlayEnabled: true,
              headerStyleInterpolator: HeaderStyleInterpolators.forFade,
              cardStyleInterpolator: ({ current, next, layouts }) => ({
                // Style for card itself
                cardStyle: {
                  transform: [
                    {
                      translateY: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.height, 0],
                      }),
                    },
                  ],
                  borderRadius: current.progress.interpolate({
                    inputRange: [0, 0.8, 1],
                    outputRange: [10, 10, 0],
                  }),
                  overflow: "hidden",
                },
                // Style for overlay
                overlayStyle: {
                  backgroundColor: "black",
                  opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                  }),
                },
              }),
            })}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

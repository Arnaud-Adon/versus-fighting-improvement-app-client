import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/LoginScreen";
import ImproveScreen from "../screens/ImproveScreen";
import SignupScreen from "../screens/SignupScreen";
import SigninScreen from "../screens/SigninScreen";
import StatScreen from "../screens/StatScreen";
import VideoScreen from "../screens/VideoScreen";
import SettingScreen from "../screens/SettingScreen";
import SelectCharacterScreen from "../screens/SelectCharacterScreen";
import Logout from "../components/Sign/Logout";

import { PREFIX } from "../lib/utils/helper/contants";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native";
import { navigationRef } from "../lib/utils/navigation/rootNavigation";
import { Colors } from "../lib/utils/colors";

const Stack = createStackNavigator();

const ImproveTabs = createBottomTabNavigator();

const ImproveTabsScreen = () => {
  return (
    <ImproveTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          switch (route.name) {
            case "Improve":
              iconName = focused
                ? `${PREFIX}-paper-plane`
                : `${PREFIX}-paper-plane`;
              break;
            case "Stat":
              iconName = focused ? `${PREFIX}-stats` : `${PREFIX}-stats`;
              break;
            case "Video":
              iconName = focused ? `${PREFIX}-videocam` : `${PREFIX}-videocam`;
              break;
            case "Setting":
              iconName = focused ? `${PREFIX}-options` : `${PREFIX}-options`;
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{ activeTintColor: "red", inactiveTintColor: "blue" }}
    >
      <ImproveTabs.Screen name="Improve" component={ImproveScreen} />
      <ImproveTabs.Screen name="Stat" component={StatScreen} />
      <ImproveTabs.Screen name="Video" component={VideoScreen} />
      <ImproveTabs.Screen name="Setting" component={SettingScreen} />
    </ImproveTabs.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={"Login"}
        screenOptions={({ route, navigation }) => ({
          headerTitle: false,
          headerLeft: () => {
            if (route.name === "Signup" || route.name === "Signin") {
              return (
                <Button onPress={() => navigation.goBack()} title="Retour" />
              );
            } else {
              return false;
            }
          },
          headerRight: () => {
            if (
              route.name === "SelectCharacter" ||
              route.name === "Improve" ||
              route.name === "Stat" ||
              route.name === "Video" ||
              route.name === "Setting"
            ) {
              return <Logout />;
            }
          },
        })}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectCharacter"
          component={SelectCharacterScreen}
        />
        <Stack.Screen name="Improve" component={ImproveTabsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

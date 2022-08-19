import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { COLORS, PLATFORM } from '../constants';

// import ImproveScreen from '../screens/ImproveScreen';
// import SignupScreen from '../screens/SignupScreen';
// import SigninScreen from '../screens/SigninScreen';
// import StatScreen from '../screens/StatScreen';
// import VideoScreen from '../screens/VideoScreen';
// import SettingScreen from '../screens/SettingScreen';
// import SelectCharacterScreen from '../screens/SelectCharacterScreen';
import Login from '../views/Login';
import { navigationRef } from './utils/rootNavigation';
import type {
  RootStackParamList,
  RootBottomTabParamList,
} from '../types/navigation';
import Logout from '../components/Logout';

const RootStack = createStackNavigator<RootStackParamList>();

const ImproveRootBottomTab = createBottomTabNavigator<RootBottomTabParamList>();

const ImproveBottomTabView = () => {
  return (
    <ImproveRootBottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          switch (route.name) {
            case 'Improve':
              return <FontAwesome name="level-up" size={size} color={color} />;

            case 'Stats':
              return (
                <Ionicons
                  name={`${PLATFORM}-stats-chart`}
                  size={size}
                  color={color}
                />
              );

            case 'Video':
              return <Entypo name="video" size={size} color={color} />;

            case 'Settings':
              return (
                <Ionicons
                  name={`${PLATFORM}-options`}
                  size={size}
                  color={color}
                />
              );
          }
        },
      })}
      tabBarOptions={{ activeTintColor: 'red', inactiveTintColor: 'blue' }}
    >
      {/* <ImproveRootBottomTab.Screen name="Improve" component={ImproveScreen} />
      <ImproveRootBottomTab.Screen name="Stat" component={StatScreen} />
      <ImproveRootBottomTab.Screen name="Video" component={VideoScreen} />
      <ImproveRootBottomTab.Screen name="Setting" component={SettingScreen} /> */}
    </ImproveRootBottomTab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName={'Login'}
        screenOptions={({ route, navigation }) => ({
          headerStyle: {
            backgroundColor: COLORS.DARKER_RED,
            borderWidth: undefined,
          },
          headerLeft: () =>
            ['SignUp', 'SignIn'].includes(route.name) && (
              <Button onPress={() => navigation.goBack()} title="Retour" />
            ),
          headerRight: () =>
            ['SelectCharacter', 'Improve', 'Stat', 'Video', 'Setting'].includes(
              route.name
            ) && <Logout />,
        })}
      >
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        {/* <RootStack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="SignIn"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="SelectCharacter"
          component={SelectCharacterScreen}
        /> */}
        <RootStack.Screen name="Improve" component={ImproveBottomTabView} />
        <RootStack.Screen name="Logout" component={Logout} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

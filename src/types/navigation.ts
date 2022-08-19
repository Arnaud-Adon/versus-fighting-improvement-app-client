import type { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  Logout: undefined;
  Improve: undefined;
  SignUp: undefined;
  SignIn: undefined;
  SelectCharacter: undefined;
};

export type RootBottomTabParamList = {
  Improve: undefined;
  Stats: undefined;
  Video: undefined;
  Settings: undefined;
};

export type ScreenProps = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;

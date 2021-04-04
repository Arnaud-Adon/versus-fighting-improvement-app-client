import React from "react";
import { render } from "@testing-library/react-native";
import LoginScreen from "./LoginScreen";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

describe("LoginScreen test suite", () => {
  it("should return the title on the screen", () => {
    const { getByText } = render(<LoginScreen />);

    const screenTitle = getByText(/Bienvenue sur Improve Versus Fighting/);

    expect(screenTitle).toBeTruthy();
  });

  it("should have button Signup on the screen", () => {
    const { getByText } = render(<LoginScreen />);

    const signUpButton = getByText(/S'incrire/);

    expect(signUpButton).toBeTruthy();
  });

  it("should have button Signin on the screen", () => {
    const { getByText } = render(<LoginScreen />);

    const signInButton = getByText(/Se connecter/);

    expect(signInButton).toBeTruthy();
    expect().toMatchObject;
  });
});

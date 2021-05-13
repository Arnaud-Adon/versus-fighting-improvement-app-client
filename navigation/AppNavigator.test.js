import React, { useEffect } from "react";
import { View } from "react-native";
import { render, waitFor } from "../lib/utils/test/test.utils";
import AppNavigator from "./AppNavigator";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import SigninScreen from "../screens/SigninScreen";
import ImproveScreen from "../screens/ImproveScreen";
import { useNavigation } from "@react-navigation/native";

jest.mock("../screens/LoginScreen", () => jest.fn());
jest.mock("../screens/SignupScreen", () => jest.fn());
jest.mock("../screens/SigninScreen", () => jest.fn());
jest.mock("../screens/ImproveScreen", () => jest.fn());
jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => null,
  };
});

describe("AppNavigator test suite", () => {
  it("Should render LoginScreen as default", () => {
    LoginScreen.mockReturnValueOnce(<View testID="mock-login-screen" />);
    const { getByTestId } = render(<AppNavigator />);
    expect(getByTestId("mock-login-screen")).toBeTruthy();
  });

  it("Should render SignupScreen on Signup route", async () => {
    LoginScreen.mockImplementationOnce(() => {
      const navigation = useNavigation();
      useEffect(() => {
        navigation.navigate("Signup");
      }, [navigation]);
      return null;
    });

    SignupScreen.mockReturnValueOnce(<View testID="mock-signup-screen" />);
    const { getByTestId } = render(<AppNavigator />);

    await waitFor(() => expect(getByTestId("mock-signup-screen")).toBeTruthy());
  });

  it("Should render SigninScreen on Signin route", async () => {
    LoginScreen.mockImplementationOnce(() => {
      const navigation = useNavigation();
      useEffect(() => {
        navigation.navigate("Signin");
      }, [navigation]);

      return null;
    });

    SigninScreen.mockReturnValueOnce(<View testID="mock-signin-screen" />);
    const { getByTestId } = render(<AppNavigator />);

    await waitFor(() => expect(getByTestId("mock-signin-screen")).toBeTruthy());
  });

  it("Should render ImproveScreen on Improve route", async () => {
    LoginScreen.mockImplementationOnce(() => {
      const navigation = useNavigation();
      useEffect(() => {
        navigation.navigate("Improve");
      }, [navigation]);

      return null;
    });

    ImproveScreen.mockReturnValueOnce(<View testID="mock-improve-screen" />);

    const { getByTestId } = render(<AppNavigator />);
    await waitFor(() =>
      expect(getByTestId("mock-improve-screen")).toBeTruthy()
    );
  });
});

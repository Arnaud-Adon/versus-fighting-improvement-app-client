import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import { Provider } from "react-redux";
import { store } from "../lib/state/store";

jest.useFakeTimers();

describe("AppNavigator test suite", () => {
  it("should redirect to Signup from Login", async () => {
    const getWrapper = ({ children }) => (
      <Provider store={store}>
        <NavigationContainer>{children}</NavigationContainer>
      </Provider>
    );

    const { getByText } = render(<AppNavigator />, {
      wrapper: getWrapper,
    });

    await act(async () => {
      const signUpScreenButton = await getByText(/S'incrire/);
      fireEvent(signUpScreenButton, "press");
    });

    const signUpScreenTitle = await getByText(/Inscription/);
    expect(signUpScreenTitle).toBeTruthy();
  });

  it("should redirect to SignIn from Login", async () => {
    const getWrapper = ({ children }) => (
      <Provider store={store}>
        <NavigationContainer>{children}</NavigationContainer>
      </Provider>
    );

    const { getByText } = render(<AppNavigator />, {
      wrapper: getWrapper,
    });

    await act(async () => {
      const signInScreenButton = await getByText(/Se connecter/);
      fireEvent(signInScreenButton, "press");
    });

    const signInScreenTitle = await getByText(/Connexion/);
    expect(signInScreenTitle).toBeTruthy();
  });
});

import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import LoginScreen from "./LoginScreen";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe("LoginScreen test suite", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<LoginScreen />);
    expect(getByTestId("login-screen")).toBeTruthy();
  });

  it("Should display a image on login screen", () => {
    const { getByTestId } = render(<LoginScreen />);
    expect(getByTestId("login-screen-image")).toBeTruthy();
  });

  it("should display title on the screen", () => {
    const { getByTestId } = render(<LoginScreen />);
    const title = getByTestId("login-screen-title");
    expect(title).toBeTruthy();
  });

  it("should display button Signup on login screen", () => {
    const { getByTestId, getByText } = render(<LoginScreen />);
    const button = getByTestId("signup-button");
    const title = getByText(/S'incrire/);
    expect(button).toBeTruthy();
    expect(button).toContainElement(title);
  });

  it("should display button Signin on login screen", () => {
    const { getByTestId, getByText } = render(<LoginScreen />);
    const button = getByTestId("signin-button");
    const title = getByText(/Se connecter/);
    expect(button).toBeTruthy();
    expect(button).toContainElement(title);
  });

  it("Should navigate to signup screen", () => {
    const { getByTestId } = render(<LoginScreen />);
    const button = getByTestId("signup-button");
    fireEvent.press(button);
    expect(mockNavigate).toHaveBeenCalled();
  });

  it("Should navigate to signin screen", () => {
    const { getByTestId } = render(<LoginScreen />);
    const button = getByTestId("signin-button");
    fireEvent.press(button);
    expect(mockNavigate).toHaveBeenCalled();
  });
});

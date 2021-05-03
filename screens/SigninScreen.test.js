import React from "react";
import { View } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import SignupScreen from "./SignupScreen";
import SignupForm from "../components/Sign/SignupForm";

const mockGoBack = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      goBack: mockGoBack,
    }),
  };
});

jest.mock("../components/Sign/SignupForm.js", () =>
  jest.fn().mockReturnValue(null)
);

describe("SignupScreen test suite", () => {
  it("Should render screen correctly", () => {
    const { getByTestId } = render(<SignupScreen />);
    expect(getByTestId("signup-screen")).toBeTruthy();
  });

  it("Should go back when button Retour clicked", () => {
    const { getByText } = render(<SignupScreen />);
    const button = getByText(/Retour/);
    fireEvent.press(button);
    expect(mockGoBack).toHaveBeenCalled();
  });

  it("Should contain title", () => {
    const { getByTestId } = render(<SignupScreen />);
    expect(getByTestId("signup-screen-title")).toBeTruthy();
  });

  it("Should contain a section SignupForm", () => {
    SignupForm.mockReturnValue(<View testID="mock-signup-form" />);
    const { getByTestId } = render(<SignupScreen />);
    expect(getByTestId("mock-signup-form")).toBeTruthy();
  });
});

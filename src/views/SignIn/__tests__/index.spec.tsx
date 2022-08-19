import React from "react";
import { View } from "react-native";
import { fireEvent, render } from "@testing-library/react-native";
import SigninScreen from "./SigninScreen";
import SigninForm from "../components/Sign/SigninForm";
import {} from "@react-navigation/native";
import { mockStore } from "../lib/utils/test/test.utils";
import store from "../lib/state/store";

const mockGoBack = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      goBack: mockGoBack,
    }),
  };
});

jest.mock("../components/Sign/SigninForm.js", () =>
  jest.fn().mockReturnValue(null)
);

describe("SinginScreen test suite", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<SigninScreen />);
    expect(getByTestId("signin-screen")).toBeTruthy();
  });

  it("Should call function goBack function when bouton clicked", () => {
    const { getByText } = render(<SigninScreen />);
    const button = getByText("Retour");
    fireEvent.press(button);
    expect(mockGoBack).toHaveBeenCalled();
  });

  it("Should contain a title", () => {
    const { getByTestId } = render(<SigninScreen />);
    expect(getByTestId("signin-screen-title")).toBeTruthy();
  });

  it("Should contain a section with a signin form", () => {
    SigninForm.mockReturnValueOnce(<View testID="mock-signin-form" />);
    const { getByTestId } = render(<SigninScreen />);
    expect(getByTestId("mock-signin-form")).toBeTruthy();
  });
});

import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { useNavigation } from "@react-navigation/native";
import SignupScreen from "../../screens/SignupScreen";

const mockGoBack = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      goBack: mockGoBack,
    }),
  };
});

describe("SignupForm Test suite", () => {
  it("Should render SignupForm Correctly", () => {
    const { getByTestId } = render(<SignupScreen />);
    expect(getByTestId("signup-form")).toBeTruthy();
  });

  it("Should go back when button Retour clicked", () => {
    const { getByText } = render(<SignupScreen />);
    const button = getByText(/Retour/);
    fireEvent.press(button);
    expect(mockGoBack).toHaveBeenCalled();
  });

  describe("form field", () => {
    it("Should display error when confirmPassword field is not equal to password field", () => {
      const { getByTestId, findByText } = render(<SignupScreen />);
      const password = getByTestId("password");
      const confirmPassword = getByTestId("confirmPassword");
      fireEvent.changeText(password, "mock-password");
      fireEvent.changeText(confirmPassword, "mock-another-password");

      return expect(
        findByText("les mots de passe ne sont pas identiques")
      ).resolves.toBeTruthy();
    });
    it("Should not display error when there are same password between password and confirmPassword", () => {
      const { getByTestId, findByText } = render(<SignupScreen />);
      const password = getByTestId("password");
      const confirmPassword = getByTestId("confirmPassword");
      fireEvent.changeText(password, "mock-password");
      fireEvent.changeText(confirmPassword, "mock-password");
      return expect(
        findByText("les mots de passe ne sont pas identiques")
      ).rejects.toThrow();
    });

    it("Should not display button when one only field is not empty", () => {
      const { getByTestId } = render(<SignupScreen />);
      const field = getByTestId("username");
      const button = getByTestId("submit");
      fireEvent.changeText(field, "mock-username");
      expect(button).toBeDisabled();
    });

    it("Should display button not disabled when all fields are complete", () => {
      const { getByTestId } = render(<SignupScreen />);
      const username = getByTestId("username");
      const email = getByTestId("email");
      const password = getByTestId("password");
      const confirmPassword = getByTestId("confirmPassword");
      fireEvent.changeText(username, "mock-username");
      fireEvent.changeText(email, "mock-email");
      fireEvent.changeText(password, "mock-password");
      fireEvent.changeText(confirmPassword, "mock-password");

      expect(getByTestId("submit")).not.toBeDisabled();
    });
  });
});

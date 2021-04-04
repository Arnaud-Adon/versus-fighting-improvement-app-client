import React from "react";
import { Provider } from "react-redux";
import { store } from "../../lib/state/store";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import SignupForm from "./SignupForm";

describe("SignupForm Test suite", () => {
  it("should render SignupForm component", () => {
    const getWrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    const SignupFormComponent = render(<SignupForm />, { wrapper: getWrapper });

    expect(SignupFormComponent).toBeTruthy();
  });

  it("should return all register input and submit button", () => {
    const getWrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { getByTestId } = render(<SignupForm />, {
      wrapper: getWrapper,
    });

    const pseudoInput = getByTestId(/pseudo-input/);
    const emailInput = getByTestId(/email-input/);
    const birthdayInput = getByTestId(/birthday-input/);
    const countryInput = getByTestId(/country-input/);
    const passwordInput = getByTestId(/password-input/);
    const confirmPasswordInput = getByTestId(/confirmPassword-input/);
    const submitButton = getByTestId(/submit-button/);

    expect(pseudoInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(birthdayInput).toBeTruthy();
    expect(countryInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(confirmPasswordInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });
});

it("should return 6 for input number ", () => {
  const getWrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  const { getAllByTestId } = render(<SignupForm />, {
    wrapper: getWrapper,
  });

  const textInput = getAllByTestId(/-input/);

  expect(textInput.length).toEqual(6);
});

it("should return a error when button is push and a input is empty", async () => {
  const getWrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  const { getAllByTestId, getByTestId } = render(<SignupForm />, {
    wrapper: getWrapper,
  });

  const button = getByTestId("submit-button");

  fireEvent.press(button);

  await waitFor(() => {
    const errors = getAllByTestId("error");
    expect(errors.length).toBeGreaterThanOrEqual(1);
  });
});

import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import SigninForm from "./SigninForm";

describe("SigninForm test suite", () => {
  it("Should render SigninForm correctly", () => {
    const { getByTestId } = render(<SigninForm />);
    expect(getByTestId("signin-form"));
  });

  it("Should display input label", () => {
    const { getByTestId, getByText } = render(<SigninForm />);
    const container = getByTestId("signin-form");
    const usernameLabel = getByText(/Pseudo/);
    const passwordLabel = getByText(/Mot de passe/);
    expect(container).toContainElement(usernameLabel);
    expect(container).toContainElement(passwordLabel);
  });

  it("Should display a button disabled when one field is complete ", () => {
    const { getByTestId } = render(<SigninForm />);
    const field = getByTestId("username");
    fireEvent.changeText(field, "mock-username");
    expect(getByTestId("submit")).toBeDisabled();
  });

  it("Should display a button enabled when all field in complete", () => {
    const { getByTestId } = render(<SigninForm />);
    const username = getByTestId("username");
    const password = getByTestId("password");
    fireEvent.changeText(username, "mock-username");
    fireEvent.changeText(password, "mock-password");
    expect(getByTestId("submit")).not.toBeDisabled();
  });
});

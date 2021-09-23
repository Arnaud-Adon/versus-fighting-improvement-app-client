import React from "react";
import { fetchFailure, signIn } from "../../lib/state/actions";
import {
  fireEvent,
  render,
  act,
  mockStore,
  waitFor,
} from "../../lib/utils/test/test.utils";
import SigninForm from "./SigninForm";

describe("SigninForm test suite", () => {
  it("Should render SigninForm correctly", () => {
    const { getByTestId } = render(<SigninForm />);
    expect(getByTestId("signin-form"));
  });

  it("Should display input label", () => {
    const { getByTestId, getByText } = render(<SigninForm />);
    const container = getByTestId("signin-form");
    const emailLabel = getByText(/Email/);
    const passwordLabel = getByText(/Mot de passe/);
    expect(container).toContainElement(emailLabel);
    expect(container).toContainElement(passwordLabel);
  });

  it("Should display a button disabled when one field is complete ", () => {
    const { getByTestId } = render(<SigninForm />);
    const field = getByTestId("email");
    fireEvent.changeText(field, "mock-email");
    expect(getByTestId("submit")).toBeDisabled();
  });

  it("Should display a button enabled when all field in complete", () => {
    const { getByTestId } = render(<SigninForm />);
    const email = getByTestId("email");
    const password = getByTestId("password");
    fireEvent.changeText(email, "email@mock.com");
    fireEvent.changeText(password, "mock-password");
    expect(getByTestId("submit")).not.toBeDisabled();
  });

  describe("Store/signIn", () => {
    const mockUserData = {
      email: "mock-email",
      password: "mock-password",
    };
    it("Should signIn user", async () => {
      const interceptor = jest.fn();
      const store = mockStore(interceptor);

      render(<SigninForm />, { store });

      act(() => {
        store.dispatch(signIn(mockUserData));
      });

      await waitFor(() =>
        expect(interceptor).toHaveBeenCalledWith(signIn(mockUserData))
      );
    });

    it("Should display error when dispatch sigIn is unsuccessful", () => {
      const store = mockStore();
      const { findByText } = render(<SigninForm />, { store });

      act(() => {
        store.dispatch(fetchFailure("mock-error"));
      });

      return expect(findByText("mock-error")).resolves.toBeTruthy();
    });

    it("Should display loading when signIn user", async () => {
      const store = mockStore();
      const { getByTestId } = render(<SigninForm />, { store });

      act(() => {
        store.dispatch(signIn(mockUserData));
      });

      expect(getByTestId("loading")).toBeTruthy();
    });
  });
});

import React from "react";
import SignupForm from "./SignupForm";
import {
  fireEvent,
  render,
  waitFor,
  mockStore,
  act,
} from "../../lib/utils/test/test.utils";
import { fetchFailure, signUp } from "../../lib/state/actions";

describe("SignupForm Test suite", () => {
  it("Should render SignupForm Correctly", () => {
    const { getByTestId } = render(<SignupForm />);
    expect(getByTestId("signup-form")).toBeTruthy();
  });

  describe("form field", () => {
    it("Should display error when confirmPassword field is not equal to password field", () => {
      const { getByTestId, findByText } = render(<SignupForm />);
      const password = getByTestId("password");
      const confirmPassword = getByTestId("confirmPassword");
      fireEvent.changeText(password, "mock-password");
      fireEvent.changeText(confirmPassword, "mock-another-password");

      return expect(
        findByText("les mots de passe ne sont pas identiques")
      ).resolves.toBeTruthy();
    });
    it("Should not display error when there are same password between password and confirmPassword", () => {
      const { getByTestId, findByText } = render(<SignupForm />);
      const password = getByTestId("password");
      const confirmPassword = getByTestId("confirmPassword");
      fireEvent.changeText(password, "mock-password");
      fireEvent.changeText(confirmPassword, "mock-password");
      return expect(
        findByText("les mots de passe ne sont pas identiques")
      ).rejects.toThrow();
    });

    it("Should not display button when one only field is not empty", () => {
      const { getByTestId } = render(<SignupForm />);
      const field = getByTestId("username");
      const button = getByTestId("submit");
      fireEvent.changeText(field, "mock-username");
      expect(button).toBeDisabled();
    });

    it("Should display button not disabled when all fields are complete", () => {
      const { getByTestId } = render(<SignupForm />);
      const username = getByTestId("username");
      const email = getByTestId("email");
      const password = getByTestId("password");
      const confirmPassword = getByTestId("confirmPassword");
      fireEvent.changeText(username, "mock-username");
      fireEvent.changeText(email, "mock@email.fr");
      fireEvent.changeText(password, "mock-password");
      fireEvent.changeText(confirmPassword, "mock-password");

      expect(getByTestId("submit")).not.toBeDisabled();
    });

    describe("Store", () => {
      it("Should sign up user ", async () => {
        const mockDataUser = {
          username: "mock-username",
          email: "mock@email.fr",
          birthdayDate: "mock-birthdayDate",
          country: "mock-country",
          password: "mock-password",
        };

        const interceptor = jest.fn();
        const store = mockStore(interceptor);

        render(<SignupForm />, { store });

        act(() => {
          store.dispatch(signUp(mockDataUser));
        });

        await waitFor(() =>
          expect(interceptor).toHaveBeenCalledWith(signUp(mockDataUser))
        );
      });

      it("Should display laoding when dispatch signUp", () => {
        const mockDataUser = {
          username: "mock-username",
          email: "mock@email.fr",
          birthdayDate: "mock-birthdayDate",
          country: "mock-country",
          password: "mock-password",
        };

        const store = mockStore();

        const { getByTestId } = render(<SignupForm />, { store });

        act(() => {
          store.dispatch(signUp(mockDataUser));
        });

        expect(getByTestId("loading")).toBeTruthy();
      });

      it("Should display error", async () => {
        const store = mockStore();
        const { findByText } = render(<SignupForm />, { store });

        act(() => {
          store.dispatch(fetchFailure("mock-error"));
        });

        return expect(findByText("mock-error")).resolves.toBeTruthy();
      });
    });
  });
});

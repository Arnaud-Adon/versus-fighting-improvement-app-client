import React from "react";
import { View } from "react-native";
import { render, waitFor } from "@testing-library/react-native";
import App from "./App";
import AppNavigator from "./navigation/AppNavigator.js";
import { Provider } from "react-redux";
import store from "./lib/state/store";

jest.mock("./navigation/AppNavigator.js", () => jest.fn());
jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    Provider: jest.fn(),
  };
});

jest.mock("./lib/hooks/useSetting.js", () => {
  return jest.fn(() => ({
    loading: false,
    loadConfiguration: () => null,
  }));
});
describe("App test suite", () => {
  it("Should render routes", async () => {
    Provider.mockImplementationOnce(({ children }) => children);
    AppNavigator.mockReturnValueOnce(<View testID="mock-app-navigator" />);
    const { getByTestId } = render(<App />);
    expect(getByTestId("mock-app-navigator")).toBeTruthy();
  });

  it("Should display Provider", () => {
    let providerStore = null;
    Provider.mockImplementationOnce(({ store }) => {
      providerStore = store;
      return <View testID="mock-provider" />;
    });
    const { getByTestId } = render(<App />);
    expect(getByTestId("mock-provider")).toBeTruthy();
    expect(providerStore).toEqual(store);
  });
});

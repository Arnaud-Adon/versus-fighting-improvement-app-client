import React from "react";
import { View } from "react-native";
import store from ".";
import { render } from "../../utils/test/test.utils";

describe("Store test suite", () => {
  it("Should be a valid store", () => {
    const { getByTestId } = render(<View testID="mock-component" />, { store });
    expect(getByTestId("mock-component")).toBeTruthy();
  });
});

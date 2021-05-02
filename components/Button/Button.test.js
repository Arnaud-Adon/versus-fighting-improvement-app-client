import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Button from "./Button";

describe("Button test suite", () => {
  it("Should render button correctly", () => {
    const { getByTestId } = render(
      <Button
        label=""
        onPress={jest.fn()}
        firstColor="#mockColor"
        secondColor="#mockColor"
      />
    );
    expect(getByTestId("button")).toBeTruthy();
  });

  it("Should call given onPress when clicked", () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button
        label=""
        onPress={mockOnPress}
        firstColor="#mockColor"
        secondColor="#mockColor"
      />
    );
    const button = getByTestId("button");
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it("Should render label", () => {
    const { getByText } = render(
      <Button
        label="mock-button-label"
        onPress={jest.fn()}
        firstColor="#mockColor"
        secondColor="#mockColor"
      />
    );

    expect(getByText("mock-button-label")).toBeTruthy();
  });

  it("Should display button style when style given", () => {
    const { getByTestId } = render(
      <Button
        label="mock-button-label"
        onPress={jest.fn()}
        firstColor="#mockColor"
        secondColor="#mockColor"
        style={{ color: "#000" }}
      />
    );

    const button = getByTestId("button");

    expect(button).toHaveStyle({ color: "#000" });
  });

  it("Should accept custom props", () => {
    const { getByTestId } = render(
      <Button
        label="mock-button-label"
        onPress={jest.fn()}
        firstColor="#mockColor"
        secondColor="#mockColor"
        style={{ color: "#000" }}
        testID="mock-custom-button"
      />
    );

    expect(getByTestId("mock-custom-button")).toBeTruthy();
  });
});

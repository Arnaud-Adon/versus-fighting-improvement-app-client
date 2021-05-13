import React from "react";
import { render } from "@testing-library/react-native";
import Character from "./Character";

const mockRequireImagePath = jest.fn();
jest.mock("../../lib/utils/image/RequireImageList.js", () => {
  return (name) => mockRequireImagePath(name);
});

describe("Character test suite", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<Character />);
    expect(getByTestId("character")).toBeTruthy();
  });

  it("Should content image and name", () => {
    const { getByTestId } = render(<Character />);
    const container = getByTestId("character");
    const image = getByTestId("character-image");
    const name = getByTestId("character-name");

    expect(container).toContainElement(image);
    expect(container).toContainElement(name);
  });

  it("Should render image path", () => {
    render(<Character name="Ryu" />);
    expect(mockRequireImagePath).toHaveBeenCalledWith("Ryu");
  });
});

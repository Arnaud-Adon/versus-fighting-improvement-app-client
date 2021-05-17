import React from "react";
import { render } from "@testing-library/react-native";
import Skills from "./Skills";

describe("Skills test suite", () => {
  const mockCharacter = {
    _id: "mock-id",
    name: "mock-name",
    skills: {
      power: 2,
      health: 3,
      mobility: 3,
      technical: 2,
      scope: 4,
    },
  };
  it("Should render correctly", () => {
    const { getByTestId } = render(<Skills character={mockCharacter} />);
    expect(getByTestId("skills")).toBeTruthy();
  });

  it("Should render all skills titles", () => {
    const { getByText } = render(<Skills character={mockCharacter} />);
    expect(getByText("Technique")).toBeTruthy();
    expect(getByText("Portée")).toBeTruthy();
    expect(getByText("Mobilité")).toBeTruthy();
    expect(getByText("Santé")).toBeTruthy();
    expect(getByText("Puissance")).toBeTruthy();
  });

  it("Should display 25 stars for character on screen", () => {
    const { getAllByTestId } = render(<Skills character={mockCharacter} />);

    expect(getAllByTestId("star").length).toEqual(25);
  });
});

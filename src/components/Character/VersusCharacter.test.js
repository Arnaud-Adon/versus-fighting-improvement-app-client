import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import VersusCharacter from "./VersusCharacter";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe("VersusCharacter test suite", () => {
  const mockCharacter = {
    name: "mock-name",
  };
  it("Should render correctly", () => {
    const { getByTestId } = render(
      <VersusCharacter character={mockCharacter} opponent={mockCharacter} />
    );
    expect(getByTestId("versus-character")).toBeTruthy();
  });

  it("Should display user character", () => {
    const { getByTestId } = render(
      <VersusCharacter character={mockCharacter} opponent={mockCharacter} />
    );
    expect(getByTestId("character-selected-user")).toBeTruthy();
  });

  it("Should display opponent character", () => {
    const { getByTestId } = render(
      <VersusCharacter character={mockCharacter} opponent={mockCharacter} />
    );
    expect(getByTestId("character-selected-opponent")).toBeTruthy();
  });

  it("Should display versus logo", () => {
    const { getByTestId } = render(
      <VersusCharacter character={mockCharacter} opponent={mockCharacter} />
    );
    expect(getByTestId("versus-logo")).toBeTruthy();
  });

  it("Should return to SelectCharacterScreen ", () => {
    const { getByTestId } = render(
      <VersusCharacter character={mockCharacter} opponent={mockCharacter} />
    );

    fireEvent.press(getByTestId("character-selected-user"));
    expect(mockNavigate).toHaveBeenCalled();

    fireEvent.press(getByTestId("character-selected-opponent"));
    expect(mockNavigate).toHaveBeenCalled();
  });
});

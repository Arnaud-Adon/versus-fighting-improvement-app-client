import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { withCharacterContext } from "./useCharacter";
import { customRenderCharacterContext } from "../utils/test/test.utils";

describe("useCharacter test suite", () => {
  const mockCharacters = [
    {
      _id: 1,
      name: "character1",
    },
    { _id: 2, name: "character2" },
  ];
  it("Should render correctly", () => {
    const { getByTestId } = customRenderCharacterContext(
      <View testID="mock-component" />,
      {
        providerProps: { characters: mockCharacters },
      }
    );
    expect(getByTestId("mock-component")).toBeTruthy();
  });

  it("Should return character selected by default", () => {
    const { getByText } = customRenderCharacterContext(
      withCharacterContext(({ character }) => {
        return (
          <View>
            <Text>{character.name}</Text>
          </View>
        );
      }),
      {
        providerProps: { characters: mockCharacters },
      }
    );

    expect(getByText("character1")).toBeTruthy();
  });

  it("Should return character selected by handleCharacterChange", () => {
    const { getByText } = customRenderCharacterContext(
      withCharacterContext(({ character, handleCharacterChange }) => {
        useEffect(() => {
          handleCharacterChange(2);
        }, []);
        return (
          <View>
            <Text>{character.name}</Text>
          </View>
        );
      }),
      {
        providerProps: { characters: mockCharacters },
      }
    );
    expect(getByText("character2")).toBeTruthy();
  });
});

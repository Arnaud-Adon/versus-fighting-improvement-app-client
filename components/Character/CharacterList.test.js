import React from "react";
import CharacterList from "./CharacterList";
import { render } from "@testing-library/react-native";

describe("CharacterList test suite", () => {
  const mockCharacter = {
    name: "character1",
  };
  it("Should render correctly", () => {
    const { getByTestId } = render(
      <CharacterList
        character={mockCharacter}
        characters={[]}
        handleCharacter={jest.fn()}
      />
    );
    expect(getByTestId("character-list")).toBeTruthy();
  });

  it("Should render FlatList Character", () => {
    const { getByTestId } = render(
      <CharacterList
        character={mockCharacter}
        characters={[]}
        handleCharacter={jest.fn()}
      />
    );
    expect(getByTestId("characters")).toBeTruthy();
  });

  it("Should render character name selected", () => {
    const { getByTestId } = render(
      <CharacterList
        character={mockCharacter}
        characters={[]}
        handleCharacter={jest.fn()}
      />
    );
    expect(getByTestId("character-selected-name")).toBeTruthy();
  });

  it("Should handle handleCharacter function", () => {
    const { getByTestId } = render(
      <CharacterList
        character={mockCharacter}
        characters={[]}
        handleCharacter={jest.fn()}
      />
    );
  });
});

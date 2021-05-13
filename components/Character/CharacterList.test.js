import React from "react";
import CharacterList from "./CharacterList";
import {
  customRenderCharacterContext,
  mockStore,
} from "../../lib/utils/test/test.utils";

describe("CharacterList test suite", () => {
  it("Should render correctly", () => {
    const { getByTestId } = customRenderCharacterContext(<CharacterList />, {});
    expect(getByTestId("character-list")).toBeTruthy();
  });

  it("Should render FlatList Character", () => {
    const { getByTestId } = customRenderCharacterContext(<CharacterList />, {});
    expect(getByTestId("characters")).toBeTruthy();
  });

  it("Should render character name selected", () => {
    const { getByTestId } = customRenderCharacterContext(<CharacterList />, {});
    expect(getByTestId("character-selected-name")).toBeTruthy();
  });
});

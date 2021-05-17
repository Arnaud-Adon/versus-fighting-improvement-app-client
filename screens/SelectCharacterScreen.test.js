import React from "react";
import { View } from "react-native";
import CharacterList from "../components/Character/CharacterList";
import Skills from "../components/Character/Skills";
import { addCharacter } from "../lib/state/actions";
import { mockStore, act, waitFor, render } from "../lib/utils/test/test.utils";
import SelectCharacterScreen from "./SelectCharacterScreen";

jest.mock("../components/Character/CharacterList.js", () =>
  jest.fn().mockReturnValue(null)
);
jest.mock("../components/Character/Skills.js", () =>
  jest.fn().mockReturnValue(null)
);

describe("SelectCharacterScreen test suite", () => {
  beforeEach(() => jest.clearAllMocks());

  it("Should render correctly", () => {
    const { getByTestId } = render(<SelectCharacterScreen />);
    expect(getByTestId("select-character-screen")).toBeTruthy();
  });

  it("Should display character list", () => {
    CharacterList.mockReturnValue(<View testID="character-list" />);
    const { getByTestId } = render(<SelectCharacterScreen />);
    expect(getByTestId("character-list")).toBeTruthy();
  });

  it("Should display character skills for the character selected", () => {
    Skills.mockReturnValue(<View testID="skills" />);
    const { getByTestId } = render(<SelectCharacterScreen />);
    expect(getByTestId("skills")).toBeTruthy();
  });

  it("Should display button", () => {
    const { getByTestId } = render(<SelectCharacterScreen />);
    expect(getByTestId("button")).toBeTruthy();
  });

  describe("Store", () => {
    it("Should handle addCharacters action", async () => {
      const interceptor = jest.fn();
      const store = mockStore(interceptor);
      render(<SelectCharacterScreen />, { store });

      act(() => {
        store.dispatch(addCharacter("mock-data"));
      });

      await waitFor(() =>
        expect(interceptor).toHaveBeenCalledWith(addCharacter("mock-data"))
      );
    });
  });
});

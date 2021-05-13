import React from "react";
import { addCharacter } from "../lib/state/actions";
import {
  mockStore,
  act,
  waitFor,
  customRenderCharacterContext,
} from "../lib/utils/test/test.utils";
import SelectCharacterScreen from "./SelectCharacterScreen";

describe("SelectCharacterScreen test suite", () => {
  beforeEach(() => jest.clearAllMocks());

  const mockCharacters = [
    { _id: 1, name: "character1" },
    { _id: 2, name: "character2" },
  ];

  it("Should render correctly", () => {
    const { getByTestId } = customRenderCharacterContext(
      <SelectCharacterScreen />,
      {}
    );
    expect(getByTestId("select-character-screen")).toBeTruthy();
  });

  it("Should display character list", () => {
    const { getByTestId } = customRenderCharacterContext(
      <SelectCharacterScreen />,
      {}
    );
    expect(getByTestId("character-list")).toBeTruthy();
  });

  it("Should display character skills for the character selected", () => {
    const { getByTestId } = customRenderCharacterContext(
      <SelectCharacterScreen />,
      {}
    );
    expect(getByTestId("skills")).toBeTruthy();
  });

  it("Should display button", () => {
    const { getByTestId } = customRenderCharacterContext(
      <SelectCharacterScreen />,
      {}
    );
    expect(getByTestId("button")).toBeTruthy();
  });

  describe("Store", () => {
    it("Should handle addCharacters action", async () => {
      const interceptor = jest.fn();
      const store = mockStore(interceptor);
      customRenderCharacterContext(<SelectCharacterScreen />, {
        providerProps: { characters: mockCharacters },
        store,
      });

      act(() => {
        store.dispatch(addCharacter("mock-data"));
      });

      await waitFor(() =>
        expect(interceptor).toHaveBeenCalledWith(addCharacter("mock-data"))
      );
    });
  });
});

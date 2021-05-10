import nock from "nock";
import React from "react";
import { act } from "react-test-renderer";
import { addUserCharacterResponse } from "../dto/addUserCharacter.dto";
import { fetchCharacters } from "../lib/state/actions";
import { mockStore, render, waitFor } from "../lib/utils/test/test.utils";
import SelectCharacterScreen from "./SelectCharacterScreen";

describe("SelectCharacter test suite", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<SelectCharacterScreen />);
    expect(getByTestId("select-character-screen")).toBeTruthy();
  });

  it("Should display select characterScreen", () => {});

  it("Should display character list", () => {
    const { getByTestId } = render(<SelectCharacterScreen />);
    expect(getByTestId("character-list")).toBeTruthy();
  });

  describe("Store", () => {
    it("Should contain characters from store", async () => {
      const store = mockStore();
      render(<SelectCharacterScreen />, { store });

      nock("http://localhost:3090")
        .get("/characters")
        .reply(200, addUserCharacterResponse);

      act(() => {
        store.dispatch(fetchCharacters());
      });

      await waitFor(() => console.log(store.getState()));

      //   expect(store.getState())
    });
  });
});

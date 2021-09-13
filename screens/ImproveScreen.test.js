import React from "react";
import { View } from "react-native";
import { render, waitFor } from "../lib/utils/test/test.utils";
import ImproveScreen from "./ImproveScreen";
import UserInfo from "../components/User/UserInfo";
import VersusCharacter from "../components/Character/VersusCharacter";
import OpponentNote from "../components/Note/OpponentNote";

jest.mock("../components/User/UserInfo.js", () =>
  jest.fn().mockReturnValue(null)
);
jest.mock("../components/Character/VersusCharacter.js", () =>
  jest.fn().mockReturnValue(null)
);
jest.mock("../components/Note/OpponentNote.js", () =>
  jest.fn().mockReturnValue(null)
);

jest.mock("../lib/context/selectCharacterContext", () => {
  return {
    useSelectCharacterContext: () => ({
      userCharacter: {},
      opponentCharacter: {},
      setUserCharacter: () => null,
      setOpponentCharacter: () => null,
    }),
  };
});

describe("ImproveScreen test suite", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<ImproveScreen />);
    expect(getByTestId("improve-screen")).toBeTruthy();
  });

  it("Should display UserInfo section", () => {
    UserInfo.mockReturnValueOnce(<View testID="user-info" />);
    const { getByTestId } = render(<ImproveScreen />);
    expect(getByTestId("user-info")).toBeTruthy();
  });

  it("Should display VersusCharacter section", () => {
    VersusCharacter.mockReturnValueOnce(<View testID="versus-character" />);
    const { getByTestId } = render(<ImproveScreen />);
    expect(getByTestId("versus-character")).toBeTruthy();
  });

  it("Should display OpponentNote", () => {
    OpponentNote.mockReturnValueOnce(<View testID="opponent-note" />);
    const { getByTestId } = render(<ImproveScreen />);
    expect(getByTestId("opponent-note")).toBeTruthy();
  });
});

import React from "react";
import { View } from "react-native";
import CharacterList from "../components/Character/CharacterList";
import Skills from "../components/Character/Skills";
import { waitFor, render } from "../lib/utils/test/test.utils";
import SelectCharacterScreen from "./SelectCharacterScreen";
import { useRoute } from "@react-navigation/native";
import Button from "../components/Button/Button";

const mockNavigate = jest.fn();

jest.mock("../components/Character/CharacterList.js", () =>
  jest.fn().mockReturnValue(null)
);
jest.mock("../components/Character/Skills.js", () =>
  jest.fn().mockReturnValue(null)
);

jest.mock("../components/Button/Button", () => jest.fn().mockReturnValue(null));

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ goBack: mockNavigate }),
  useRoute: jest.fn().mockImplementation(() => jest.fn()),
}));

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

describe("SelectCharacterScreen test suite", () => {
  it("Should display loading when character is not already loaded", () => {
    const { getByTestId } = render(<SelectCharacterScreen />);
    expect(getByTestId("loading-select-character")).toBeTruthy();
  });

  it("Should render correctly", async () => {
    useRoute.mockImplementationOnce(() => ({ params: "opponent" }));
    const { getByTestId } = render(<SelectCharacterScreen />);
    await waitFor(() =>
      expect(getByTestId("select-character-screen")).toBeTruthy()
    );
  });

  it("Should display character list", async () => {
    useRoute.mockImplementationOnce(() => ({ params: "opponent" }));
    CharacterList.mockReturnValue(<View testID="character-list" />);
    const { getByTestId } = render(<SelectCharacterScreen />);
    await waitFor(() => expect(getByTestId("character-list")).toBeTruthy());
  });

  it("Should display character skills for the character selected", async () => {
    useRoute.mockImplementationOnce(() => ({ params: "opponent" }));
    Skills.mockReturnValue(<View testID="skills" />);
    const { getByTestId } = render(<SelectCharacterScreen />);

    await waitFor(() => expect(getByTestId("skills")).toBeTruthy());
  });

  it("Should display button", async () => {
    useRoute.mockImplementationOnce(() => ({ params: "opponent" }));
    Button.mockReturnValueOnce(<View testID="button" />);
    const { getByTestId } = render(<SelectCharacterScreen />);

    await waitFor(() => expect(getByTestId("button")).toBeTruthy());
  });

  it("Should display back button when you choose a character from improve screen", async () => {
    Button.mockReturnValueOnce(<View testID="back-button" />);
    useRoute.mockImplementationOnce(() => ({ params: "opponent" }));
    const { getByTestId } = render(<SelectCharacterScreen />);
    await waitFor(() => expect(getByTestId("back-button")).toBeTruthy());
  });
});

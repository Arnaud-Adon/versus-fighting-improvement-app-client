import React from "react";
import { render } from "@testing-library/react-native";
import OpponentNote from "./OpponentNote";
import { useDispatch } from "react-redux";

jest.mock("react-native/Libraries/LayoutAnimation/LayoutAnimation");
jest.mock("react-redux", () => ({
  useDispatch: jest.fn().mockReturnValue(null),
}));

describe("OpponentNote test suite", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<OpponentNote />);
    expect(getByTestId("opponent-note")).toBeTruthy();
  });

  it("Should display add note section", () => {
    const { getByTestId, getByText } = render(<OpponentNote />);
    expect(getByTestId("add-note")).toBeTruthy();
    expect(getByTestId("add-icon")).toBeTruthy();
    expect(getByText(/Ajouter une note/g)).toBeTruthy();
  });

  it("Should display a note flatlist ", () => {
    const { getByTestId } = render(<OpponentNote />);
    expect(getByTestId("note-flatlist")).toBeTruthy();
  });

  it("Should display paper clip on each note", () => {
    const { getAllByTestId } = render(<OpponentNote />);
    expect(getAllByTestId("paper-clip-icon").length).toBeGreaterThanOrEqual(1);
  });

  //TODO: Tester le composant lorsque le store reçoit ou non des notes
});

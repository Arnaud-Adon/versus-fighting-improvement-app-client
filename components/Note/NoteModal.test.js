import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import NoteModal from "./NoteModal";

jest.mock("react-native/Libraries/LayoutAnimation/LayoutAnimation");

describe("Note modal test suite", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<NoteModal isVisible={true} />);
    expect(getByTestId("note-modal")).toBeTruthy();
  });

  it("Should display a blur", () => {
    const { getByTestId } = render(<NoteModal isVisible={true} />);
    expect(getByTestId("note-form")).toBeTruthy();
  });
  it("Should display paper clip icon to the note form", () => {
    const { getByTestId } = render(<NoteModal isVisible={true} />);
    expect(getByTestId("paper-clip-icon")).toBeTruthy();
  });

  it("Should display a textInput in note form", () => {
    const { getByTestId } = render(<NoteModal isVisible={true} />);
    expect(getByTestId("note-input")).toBeTruthy();
  });

  it("Should content blur on screen", () => {
    const { getByTestId } = render(<NoteModal isVisible={true} />);
    expect(getByTestId("note-blur")).toBeTruthy();
  });

  it("Should display few tags icon added to note", () => {
    const { getByTestId } = render(<NoteModal isVisible={true} />);
    expect(getByTestId("tag-note-list")).toBeTruthy();
  });

  it("Should display a close button", () => {
    const { getByTestId } = render(<NoteModal isVisible={true} />);
    expect(getByTestId("close-modal")).toBeTruthy();
  });

  it("Should call closeModal function when closeModal button clicked", () => {
    const closeModal = jest.fn();
    const { getByTestId } = render(
      <NoteModal isVisible={true} setModal={closeModal} />
    );
    fireEvent.press(getByTestId("close-modal"));
    expect(closeModal).toBeCalled();
  });
});

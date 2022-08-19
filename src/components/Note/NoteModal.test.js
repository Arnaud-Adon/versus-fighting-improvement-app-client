import React from "react";
import {
  fireEvent,
  render,
  mockStore,
  act,
  waitFor,
} from "../../lib/utils/test/test.utils";
import NoteModal from "./NoteModal";
import { addNote } from "../../lib/state/actions/index";

jest.mock("react-native/Libraries/LayoutAnimation/LayoutAnimation");
jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => jest.fn(),
  };
});

describe("Note modal test suite", () => {
  it("Should render correctly", () => {
    const store = mockStore();
    const { getByTestId } = render(
      <NoteModal isVisible={true} setModal={jest.fn()} />
    );
    expect(getByTestId("note-modal")).toBeTruthy();
  });

  it("Should display a blur", () => {
    const { getByTestId } = render(
      <NoteModal isVisible={true} setModal={jest.fn()} />
    );
    expect(getByTestId("note-form")).toBeTruthy();
  });
  it("Should display paper clip icon to the note form", () => {
    const { getByTestId } = render(
      <NoteModal isVisible={true} setModal={jest.fn()} />
    );
    expect(getByTestId("paper-clip-icon")).toBeTruthy();
  });

  it("Should display a textInput in note form", () => {
    const { getByTestId } = render(
      <NoteModal isVisible={true} setModal={jest.fn()} />
    );
    expect(getByTestId("note-input")).toBeTruthy();
  });

  it("Should content blur on screen", () => {
    const { getByTestId } = render(
      <NoteModal isVisible={true} setModal={jest.fn()} />
    );
    expect(getByTestId("note-blur")).toBeTruthy();
  });

  it("Should display few tags icon added to note", () => {
    const { getByTestId } = render(
      <NoteModal isVisible={true} setModal={jest.fn()} />
    );
    expect(getByTestId("tag-note-list")).toBeTruthy();
  });

  it("Should display a close button", () => {
    const { getByTestId } = render(
      <NoteModal isVisible={true} setModal={jest.fn()} />
    );
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

  describe("Store", () => {
    it("Should call addNote action", async () => {
      const mockNote = {
        text: "mock-text",
        tags: ["mock-tag1", "mock-tag2"],
      };
      const interceptor = jest.fn();
      const store = mockStore(interceptor);
      render(<NoteModal isVisible={true} setModal={jest.fn()} />, { store });
      act(() => {
        store.dispatch(addNote(mockNote));
      });

      await waitFor(() =>
        expect(interceptor).toHaveBeenCalledWith(addNote(mockNote))
      );
    });
  });
});

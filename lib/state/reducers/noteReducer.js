import * as types from "../../../lib/state/actions/ActionTypes";
import _ from "lodash";

const initialState = {
  selectedNoteId: null,
  notes: [],
};

export const note = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NOTE:
      return {
        ...state,
        notes: action.payload,
      };
    case types.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case types.UPDATE_NOTE:
      let updatedNote = action.payload;
      let notes = state.notes.map((n) => {
        if (n._id === updatedNote._id) {
          n = updatedNote;
        }
      });
      return {
        ...state,
        notes: notes,
      };
    case types.DELETE_NOTE:
      let deletedNote = action.payload;
      let notesNotDeleted = state.notes.filter(
        (n) => n._id !== deletedNote._id
      );
      return {
        ...state,
        notes: notesNotDeleted,
      };
    case types.GET_NOTE_ID:
      console.log("GET_NOTE_ID reducer", action.payload);
      return {
        ...state,
        selectedNoteId: action.payload,
      };
    default:
      return state;
  }
};

import { actionTypes as types } from "../../../lib/state/actions/ActionTypes";

const initialState = {
  notes: {},
};

const updateNote = (note, payload) => {
  return note.id === payload.id ? { ...note, description: payload } : note;
};

const filterNote = (note, payload) => note.id !== payload.id;

const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_NOTES:
      return {
        ...state,
        notes: payload,
      };
    case types.ADD_NOTE:
      return {
        ...state,
        notes: { ...state.notes, payload },
      };
    case types.UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => updateNote(note, payload)),
      };

    case types.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => filterNote(note, payload)),
      };
    default:
      return state;
  }
};

export default noteReducer;

import { actionTypes as types } from "../../../lib/state/actions/ActionTypes";

const initialState = {
  characters: [],
};

const characterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    default:
      return state;
  }
};

export default characterReducer;

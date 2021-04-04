import * as types from "../../../lib/state/actions/ActionTypes";

const initialState = {
  charactersList: [],
};

export const characters = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CHARACTERS:
      return {
        ...state,
        charactersList: action.payload,
      };
    default:
      return state;
  }
};

import { actionTypes as types } from "../../../lib/state/actions/ActionTypes";

const initialState = {
  isLogged: false,
};

export const authentification = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SIGN_UP:
      return {
        ...state,
        isLogged: payload,
      };
    default:
      return state;
  }
};

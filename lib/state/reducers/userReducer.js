import * as types from "../../../lib/state/actions/ActionTypes";

const initialState = {
  informations: {},
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        informations: action.payload,
      };
      break;
    case types.LOGOUT:
      return {
        ...state,
        informations: {},
      };
      break;
    default:
      return state;
  }
};

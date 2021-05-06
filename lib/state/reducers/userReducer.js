import { actionTypes as types } from "../../../lib/state/actions/ActionTypes";

const initialState = {
  infos: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_USER:
      return {
        ...state,
        infos: payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        infos: {},
      };
    default:
      return state;
  }
};

export default userReducer;

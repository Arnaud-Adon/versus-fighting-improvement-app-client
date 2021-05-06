import { actionTypes as types } from "../../../lib/state/actions/ActionTypes";

const initialState = {
  error: "",
};

const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default errorReducer;

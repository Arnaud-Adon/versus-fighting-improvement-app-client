import { actionTypes as types } from "../../../lib/state/actions/ActionTypes";
import { Status } from "../../utils/types/status";

const initialState = {
  status: Status.START,
  infos: {},
  error: "",
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SIGN_UP:
      return {
        ...state,
        status: Status.LOADING,
        error: "",
      };
    case types.SIGN_IN:
      return {
        ...state,
        status: Status.LOADING,
        error: "",
      };
    case types.FETCH_USER:
      return {
        ...state,
        status: Status.SUCCESS,
        infos: payload,
      };
    case types.FETCH_FAILURE:
      return {
        ...state,
        status: Status.FAILURE,
        error: payload,
      };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;

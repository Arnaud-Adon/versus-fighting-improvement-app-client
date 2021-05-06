import { combineReducers } from "redux";
import character from "./characterReducer";
import error from "./errorReducer";
import user from "./userReducer";
import note from "./noteReducer";

const rootReducer = combineReducers({
  character,
  error,
  user,
  note,
});

export default rootReducer;

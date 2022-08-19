import { combineReducers } from "redux";
import character from "./characterReducer";
import user from "./userReducer";
import note from "./noteReducer";

const rootReducer = combineReducers({
  character,
  user,
  note,
});

export default rootReducer;

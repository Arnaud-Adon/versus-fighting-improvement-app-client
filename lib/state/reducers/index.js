import { combineReducers } from "redux";
import { authentification } from "./authentificationReducer";
import { characters } from "./characterReducer";
import { error } from "./errorReducer";
import { user } from "./userReducer";
import { note } from "./noteReducer";

const rootReducer = combineReducers({
  authentification,
  characters,
  error,
  user,
  note,
});

export default rootReducer;

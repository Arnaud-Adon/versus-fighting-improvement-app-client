import { all, fork, spawn } from "redux-saga/effects";
import characterSaga from "./characterSaga";
import userSaga from "./userSaga";

export default function* () {
  yield all([characterSaga(), userSaga()]);
}

// export default function* () {
//   yield fork(bootstrap);
// }

// function* bootstrap() {
//   try {
//     yield all([characterSaga]);
//   } catch (error) {
//     console.log(`Saga error: ${error}`);
//   }
// }

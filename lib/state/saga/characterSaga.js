import { call, put, takeLatest } from "redux-saga/effects";
import ApiService from "../../service";
import { fetchFailure, setCharacters } from "../actions";
import { actionTypes as actions } from "../actions/ActionTypes";

export default function* characterSaga() {
  yield takeLatest(actions.FETCH_CHARACTERS, getCharactersWorker);
}

export function* getCharactersWorker() {
  try {
    const characters = yield call(ApiService.getCharacters);
    yield put(setCharacters(characters));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

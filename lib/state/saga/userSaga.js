import { call, put, takeLatest } from "@redux-saga/core/effects";
import {} from "redux-saga";
import ApiService from "../../service";
import { fetchFailure, fetchUser } from "../actions";
import { actionTypes as action } from "../actions/ActionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as rootNavigation from "../../utils/navigation/rootNavigation";

export default function* userSaga() {
  yield takeLatest(action.SIGN_UP, userRegisterWorker);
  yield takeLatest(action.SIGN_IN, userConnectWorker);
  yield takeLatest(action.LOGOUT, userLogoutWorker);
}

export function* userRegisterWorker(action) {
  try {
    const { user, token } = yield call(ApiService.userRegister, action.payload);
    yield put(fetchUser(user));
    yield AsyncStorage.setItem("token", JSON.stringify(token));
    yield rootNavigation.navigate("SelectCharacter");
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export function* userConnectWorker(action) {
  try {
    const { user, token } = yield call(ApiService.userConnect, action.payload);
    yield put(fetchUser(user));
    yield AsyncStorage.setItem("token", JSON.stringify(token));
    yield user.characters?.length > 0
      ? rootNavigation.navigate("Improve")
      : rootNavigation.navigate("SelectCharacter");
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export function* userLogoutWorker() {
  yield AsyncStorage.getItem("token") && AsyncStorage.removeItem("token");
  yield rootNavigation.navigate("Login");
}

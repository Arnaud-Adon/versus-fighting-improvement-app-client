import { call, put, takeLatest } from "@redux-saga/core/effects";
import {} from "redux-saga";
import ApiService from "../../service";
import { fetchFailure, fetchUser } from "../actions";
import { actionTypes as action } from "../actions/ActionTypes";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function* userSaga() {
  yield takeLatest(action.SIGN_UP, userRegisterWorker);
}

export function* userRegisterWorker(action) {
  try {
    const { navigate } = useNavigation();
    const { user, token } = yield call(ApiService.userRegister, action.payload);
    yield put(fetchUser(user));
    yield AsyncStorage.setItem("token", JSON.stringify(token));
    yield navigate("SelectCharacter");
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

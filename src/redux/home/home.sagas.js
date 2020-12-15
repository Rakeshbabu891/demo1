import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";

import { fetchUserSuccess, fetchUserError } from "./home.actions";
import HomeActionType from "./home.types";

export function* fetchUserAsync() {
  try {
    const response = yield axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = yield response.data;
    yield put(fetchUserSuccess(users));
  } catch (error) {
    yield put(fetchUserError(error));
  }
}

export function* fetchUserStart() {
  yield takeLatest(HomeActionType.FETCH_USERS_START, fetchUserAsync);
}

export function* homeSagas() {
  yield all([call(fetchUserStart)]);
}

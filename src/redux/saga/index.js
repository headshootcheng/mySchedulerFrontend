import { LOGIN, REGISTER_USER, GET_USER_DATA } from "../actions/auth";
import { all, takeLatest } from "redux-saga/effects";

import { loginSaga, registerUserSaga, getUserInfoSaga } from "./auth";

export default function* sagaWatcher() {
  yield all([
    takeLatest(LOGIN, loginSaga),
    takeLatest(REGISTER_USER, registerUserSaga),
    takeLatest(GET_USER_DATA, getUserInfoSaga),
  ]);
}

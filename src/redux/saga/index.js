import {LOGIN, REGISTER_USER} from "../actions/auth";
import {
    all,
    takeLatest,
  } from "redux-saga/effects";

  import {loginSaga, registerUserSaga} from "./auth";

  export default function* sagaWatcher(){
      yield all([
          takeLatest(LOGIN, loginSaga),
          takeLatest(REGISTER_USER, registerUserSaga)
      ]);
  }
import {
    delay,
    put,
    call,
  } from "redux-saga/effects";

import authService from "../../service/auth"
import {storeUserInfo, showAuthErrorBox, showAuthSuccessBox, clearAuthBox, loginOn} from "../actions/auth"

export function* loginSaga(action){
    try{
        const {token, userInfo} = yield call(authService.login, action.content);
        yield put(storeUserInfo(userInfo));
        yield put(clearAuthBox());
        yield put(loginOn());
        authService.storeToken(token);
    } 
    catch(error){
        yield put(showAuthErrorBox(error.response.data.message));
    }    
}

export function* registerUserSaga(action){
  try{
      const {message} = yield call(authService.registerUser, action.content);
      yield put(showAuthSuccessBox(message));
  } 
  catch(error){
      yield put(showAuthErrorBox(error.response.data.message));
  }    
}
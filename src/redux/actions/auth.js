export const REGISTER_USER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const STORE_USER_INFO = "STORE_USER_INFO";
export const SHOW_ERROR_BOX = "SHOW_ERROR";
export const SHOW_SUCCESS_BOX = "SHOW_SUCCESS";
export const CLEAR_BOX = "CLEAR_BOX";
export const GET_USER_DATA = "GET_USER_DATA";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const registerUserAction = (username, email, password) => {
  return {
    type: REGISTER_USER,
    content: { username, email, password },
  };
};

export const loginAction = (username, password) => {
  return {
    type: LOGIN,
    content: { username, password },
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export const storeUserInfo = (userInfo) => {
  return {
    type: STORE_USER_INFO,
    content: userInfo,
  };
};

export const showAuthErrorBox = (msg) => {
  return {
    type: SHOW_ERROR_BOX,
    content: msg,
  };
};

export const showAuthSuccessBox = (msg) => {
  return {
    type: SHOW_SUCCESS_BOX,
    content: msg,
  };
};

export const clearAuthBox = () => {
  return {
    type: CLEAR_BOX,
  };
};

export const getUserData = () => {
  return {
    type: GET_USER_DATA,
  };
};

export const getUserSuccess = () => {
  return {
    type: GET_USER_SUCCESS,
  };
};

export const getUserFailed = () => {
  return {
    type: GET_USER_FAILED,
  };
};

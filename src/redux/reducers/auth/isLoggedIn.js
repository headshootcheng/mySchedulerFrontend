import {
  LOGIN,
  LOGOUT,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../../actions/auth";
import authService from "../../../service/auth";
const initStatus = false;

const isLoggedIn = (state = initStatus, actions) => {
  switch (actions.type) {
    case LOGIN: {
      return true;
    }
    case LOGOUT: {
      authService.logout();
      return false;
    }
    case GET_USER_SUCCESS: {
      return true;
    }
    case GET_USER_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default isLoggedIn;

import { STORE_USER_INFO, LOGOUT, GET_USER_FAILED } from "../../actions/auth";

const initUserInfo = null;

const userInfo = (state = initUserInfo, actions) => {
  switch (actions.type) {
    case STORE_USER_INFO: {
      return actions.content;
    }
    case LOGOUT: {
      return null;
    }
    case GET_USER_FAILED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

export default userInfo;

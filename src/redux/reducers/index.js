import {combineReducers} from "redux";
import userInfo from "./auth/userInfo"
import authMessageBox from "./auth/authMessageBox";
import isLoggedIn from "./auth/isLoggedIn";

const rootReducer = combineReducers({
    userInfo,
    authMessageBox,
    isLoggedIn
});

export default rootReducer;
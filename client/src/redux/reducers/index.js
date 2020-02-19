import { combineReducers } from "redux";
import authReducers from "./authReducers/authReducer";
import messageReducer from "./messageReducers/messageReduser";

export default combineReducers({
  auth: authReducers,
  message: messageReducer
});

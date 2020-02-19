import * as actions from "./auth.actions";
import axios from "axios";
import { setStorage, removeItem, getStorage } from "../../../utils/storage";
const SERVER_URL = "http://localhost:5000";

export const auth = formValues => async dispatch => {
  try {
    const result = await axios.post(`${SERVER_URL}/auth`, formValues);
    setStorage("isAuth", true);
    setStorage("name", result.data.name);
    setStorage("id", result.data.id);
    dispatch(actions.loginSuccess(result.data));
  } catch (error) {
    dispatch(actions.loginFailure());
    alert("Check the input of name and password");
  }
};

export const logout = () => dispatch => {
  removeItem("isAuth");
  removeItem("name");
  removeItem("id");
  dispatch(actions.logout());
};

export const checkAuth = () => dispatch => {
  const isAuth = getStorage("isAuth");
  if (isAuth) {
    dispatch(actions.checkAuthSuccess());
  } else {
    dispatch(actions.checkAuthFailure());
  }
};

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILURE
} from "../../actionTypes";

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const logout = () => ({
  type: LOGOUT
});

export const checkAuthSuccess = () => ({
  type: CHECK_AUTH_SUCCESS
});

export const checkAuthFailure = () => ({
  type: CHECK_AUTH_FAILURE
});

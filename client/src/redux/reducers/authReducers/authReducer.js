import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILURE
} from "../../actionTypes";

const initialState = {
  loginError: false,
  isAuthenticated: false,
  user: {
    id: "",
    name: ""
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        loginError: false,
        user: { ...action.payload }
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginError: true,
        isAuthenticated: false
      };
    }
    case CHECK_AUTH_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true
      };
    }
    case CHECK_AUTH_FAILURE: {
      return {
        ...state,
        isAuthenticated: false
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isAuthenticated: false
      };
    }
    default:
      return state;
  }
};

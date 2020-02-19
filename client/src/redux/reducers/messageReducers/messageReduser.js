import {
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  NEW_MESSAGE
} from "../../actionTypes";

const initialState = { isSend: false, messages: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_SUCCESS: {
      return {
        ...state,
        isSend: true
      };
    }
    case SEND_MESSAGE_FAILURE: {
      return {
        ...state,
        isSend: false
      };
    }
    case NEW_MESSAGE: {
      return {
        ...state,
        messages: [...action.payload]
      };
    }
    default:
      return state;
  }
};

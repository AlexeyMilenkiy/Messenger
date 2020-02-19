import {
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  NEW_MESSAGE
} from "../../actionTypes";

export const sendMessageSuccess = () => ({
  type: SEND_MESSAGE_SUCCESS
});

export const sendMessageFailure = () => ({
  type: SEND_MESSAGE_FAILURE
});
export const getMessage = data => ({
  type: NEW_MESSAGE,
  payload: data
});

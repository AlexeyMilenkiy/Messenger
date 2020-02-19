import * as actions from "./message.actions";
import axios from "axios";

const SERVER_URL = "http://localhost:5000";

export const sendMessage = formValues => async dispatch => {
  try {
    await axios.post(`${SERVER_URL}/send`, formValues);
    dispatch(actions.sendMessageSuccess());
  } catch (error) {
    dispatch(actions.sendMessageFailure());
    alert("An error occurred");
  }
};

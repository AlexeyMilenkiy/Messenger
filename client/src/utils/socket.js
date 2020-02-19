import openSocket from "socket.io-client";

const SERVER_URL = "http://localhost:5000";
export const socket = openSocket(SERVER_URL);

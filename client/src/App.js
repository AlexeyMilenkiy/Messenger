import React from "react";
import { connect } from "react-redux";

import { auth, checkAuth, logout } from "./redux/actions/auth/auth.thunk";
import { sendMessage } from "./redux/actions/message/message.thunk";
import { getMessage } from "./redux/actions/message/message.actions";
import Auth from "./components/Auth/";
import Chat from "./components/Chat";
import "./App.css";

const mapStateToProps = state => ({
  isAuth: state.auth.isAuthenticated,
  user: state.auth.user,
  messages: state.message.messages
});

const mapDispatchToProps = dispatch => ({
  auth: data => dispatch(auth(data)),
  logout: () => dispatch(logout()),
  checkAuth: () => dispatch(checkAuth()),
  sendMessage: data => dispatch(sendMessage(data)),
  getMessage: data => dispatch(getMessage(data))
});

function App(props) {
  const {
    auth,
    isAuth,
    logout,
    checkAuth,
    sendMessage,
    user,
    messages,
    getMessage
  } = props;
  checkAuth();

  return (
    <div className="App">
      {isAuth ? (
        <Chat
          logout={logout}
          send={sendMessage}
          user={user}
          messages={messages}
          getMessage={getMessage}
        />
      ) : (
        <Auth auth={auth} />
      )}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

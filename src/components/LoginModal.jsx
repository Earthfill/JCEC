import { useState } from "react";

const LoginModal = ({ handleUsernameChange, handlePasswordChange, handleLogin, username, password }) => {
  return (
    <div className="login">
      <h1>Login</h1>
      <div>
        <form onSubmit={handleLogin}>
          <div className="login--field">
            Username:  <input 
              className="login--input"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="login--field">
            Password: <input 
              className="login--input"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="log--button">LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default LoginModal
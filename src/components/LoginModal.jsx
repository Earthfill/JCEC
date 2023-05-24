import { Switch } from "@mui/material";

const LoginModal = ({ handleUsernameChange, handlePasswordChange, handleLogin, username, password, showHint, isDarkMode, toggleDarkMode }) => {
  return (
    <div className="log">
      <div className="login--header--button">
        <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        <Switch
          checked={isDarkMode} 
          onChange={toggleDarkMode}
          className="header--switch"
        />
      </div>
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
                type="password"
              />
            </div>
            <button className="log--button">LOGIN</button>
          </form>
          {showHint && (
              <div className="login--hint">
                <p>Username: jecetech</p>
                <p>Password: 1234</p>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default LoginModal
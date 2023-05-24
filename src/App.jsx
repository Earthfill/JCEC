import { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import LoginModal from './components/LoginModal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showHint, setShowHint] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setShowHint(false)
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setShowHint(false)
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === 'jecetech' && password === '1234') {
      setIsLoggedIn(true)
    } else {
      setUsername('')
      setPassword('')
      setShowHint(true)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
    setPassword('')
  }

  if (!isLoggedIn) {
    return (
      <div className={isDarkMode ? 'dark--mode' : 'light--mode'}>
        <LoginModal
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          username={username}
          password={password}
          showHint={showHint}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
      />
      </div>
    )
  }

  if (isLoggedIn) {
    return (
      <div className={isDarkMode ? 'dark--mode' : 'light--mode'}>
        <Header 
          toggleDarkMode={toggleDarkMode} 
          isDarkMode={isDarkMode}
          handleLogout={handleLogout}
        />
        <Body />
      </div>
    )
  }
}

export default App

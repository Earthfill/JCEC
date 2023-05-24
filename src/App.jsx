import { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import LoginModal from './components/LoginModal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === 'jecetech' && password === '1234') {
      setIsLoggedIn(true)
    } else {
      alert('Invalid username or password')
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

import { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? 'dark--mode' : 'light--mode'}>
      <Header 
        toggleDarkMode={toggleDarkMode} 
        isDarkMode={isDarkMode}  
      />
      <Body />
    </div>
  )
}

export default App

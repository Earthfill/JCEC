import { Switch } from "@mui/material"

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className="header">
      <div className="header--header">
        <h1>My Skill Level (Desktop view only)</h1>
        <p className="header--text">Answer the following questions to begin your plan</p>
      </div>
      {/* <button 
        onClick={toggleDarkMode}
        className="header--button"  
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button> */}
      <div className="header--button">
        <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        <Switch 
          checked={isDarkMode} 
          onChange={toggleDarkMode}
          className="header--switch"
        />
      </div>
      <hr />
    </div>
  )
}

export default Header

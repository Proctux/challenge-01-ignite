import '../styles/header.scss'
import { FaCloudSun, FaCloudMoonRain } from "react-icons/fa"
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider';

export function Header() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div>
        <img src="/logo.svg" alt="to.do"/>
        <button type="button" onClick={toggleTheme}>
          {isDark === "light" ? <FaCloudMoonRain color="#000" size={18} /> : <FaCloudSun color="#000" size={18} />}
        </button>
      </div>
    </header>
  )
}
import { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import { GlobalStyles } from './styles/global';
import { lightTheme, darkTheme } from "./styles/Theme";
import { ToggleTheme } from "./context/ThemeProvider";

export function App() {
  const [theme, setTheme] = useState('light')

  const handleToggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  };



  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme: darkTheme}>
      <ToggleTheme toggleTheme={handleToggleTheme} isDark={theme}>
        <Header />
        <TaskList />
        <GlobalStyles />
      </ToggleTheme>
    </ThemeProvider>
  )
}
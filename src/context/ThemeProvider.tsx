import { createContext, ReactNode } from "react";

interface ToggleThemeProps {
  toggleTheme: () => void;
  isDark: string,
  children: ReactNode;
}

interface ThemeContextData {
  toggleTheme: () => void;
  isDark: string;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ToggleTheme = ({ children, toggleTheme, isDark }: ToggleThemeProps) => {
  return (
    <ThemeContext.Provider value={{
      toggleTheme,
      isDark
    }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
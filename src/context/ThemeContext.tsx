/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, createContext, useContext, useMemo } from "react";
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { THEME } from "@/constants";
import { darkTheme, lightTheme } from "@/styles/themes";

const ThemeContext = createContext({} as any);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(THEME);

  const themeObject = useMemo(() => {
    return theme === 'light' ? lightTheme : darkTheme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={themeObject}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
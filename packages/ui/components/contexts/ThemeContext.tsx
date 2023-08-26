import React, { createContext, useEffect, useState, useContext } from "react";
import { LightTheme, DarkTheme } from "../foundations/theming/theme";

type ThemeContextProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const lightTheme = LightTheme();
  const darkTheme = DarkTheme();

  type Theme = "dark" | "light";
  const [themes, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);

    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // const prefersDarkMode = window.matchMedia(
    //   "(prefers-color-scheme: dark)"
    // ).matches;
    // setIsDarkMode(prefersDarkMode);

    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme && storedTheme == "light") {
      setIsDarkMode(false);
    }
  }, []);

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme.colors.background,
          color: theme.colors.text,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext) as ThemeContextProps;
};

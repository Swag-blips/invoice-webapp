import { createContext, useContext, useEffect, useState } from "react";

type Provider = {
  children: React.ReactNode;
};

interface ThemeContextType {
  theme: string;
  handleThemeSwitch: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("an error occured");
  }
  return context;
};

const ThemeProvider = ({ children }: Provider) => {
  const [theme, setTheme] = useState<string>(() => {
    try {
      const savedTheme = window.localStorage.getItem("theme");
      return savedTheme ? JSON.parse(savedTheme) : "light";
    } catch (error) {
      console.error("Failed to parse the theme from local storage");
      return "light";
    }
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ handleThemeSwitch, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

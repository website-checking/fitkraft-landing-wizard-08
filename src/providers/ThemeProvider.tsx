
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "gold";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for theme in localStorage
    const savedTheme = localStorage.getItem("fitkraft-theme");
    return (savedTheme as Theme) || "dark";
  });

  useEffect(() => {
    // Update body class when theme changes
    document.body.className = `theme-${theme}`;
    
    // Save theme to localStorage
    localStorage.setItem("fitkraft-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

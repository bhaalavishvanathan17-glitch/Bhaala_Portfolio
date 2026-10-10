import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContextValue';



export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('bv-theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bv-theme', theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

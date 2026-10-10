import { useContext } from 'react';
import { ThemeContext } from './ThemeContextValue';

// Separated from ThemeContext.jsx to satisfy react-refresh/only-export-components lint rule.
export const useTheme = () => useContext(ThemeContext);

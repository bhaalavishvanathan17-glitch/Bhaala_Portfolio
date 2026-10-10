import { createContext } from 'react';

// ThemeContext object — exported separately from ThemeProvider to satisfy
// react-refresh/only-export-components which requires JSX files to only export components.
export const ThemeContext = createContext();

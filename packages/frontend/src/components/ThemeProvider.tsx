'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { theme, componentStyles } from '@/styles/theme';

// Create context with default values
const ThemeContext = createContext({ theme, componentStyles });

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ theme, componentStyles }}>
      {children}
    </ThemeContext.Provider>
  );
}
/**
 * Global theme configuration for Zhiar Naghsh
 * This file centralizes all color, spacing, and design tokens
 */

export const theme = {
  colors: {
    // Primary palette
    primary: {
      50: '#eef2ff',  // indigo-50
      100: '#e0e7ff', // indigo-100
      200: '#c7d2fe', // indigo-200
      300: '#a5b4fc', // indigo-300
      400: '#818cf8', // indigo-400
      500: '#6366f1', // indigo-500
      600: '#4f46e5', // indigo-600
      700: '#4338ca', // indigo-700
      800: '#3730a3', // indigo-800
      900: '#312e81', // indigo-900
      950: '#1e1b4b', // indigo-950
    },
    
    // Secondary palette
    secondary: {
      50: '#f5f3ff',  // purple-50
      100: '#ede9fe', // purple-100
      200: '#ddd6fe', // purple-200
      300: '#c4b5fd', // purple-300
      400: '#a78bfa', // purple-400
      500: '#8b5cf6', // purple-500
      600: '#7c3aed', // purple-600
      700: '#6d28d9', // purple-700
      800: '#5b21b6', // purple-800
      900: '#4c1d95', // purple-900
      950: '#2e1065', // purple-950
    },
    
    // Accent palette
    accent: {
      50: '#f0fdfa',  // teal-50
      100: '#ccfbf1', // teal-100
      200: '#99f6e4', // teal-200
      300: '#5eead4', // teal-300
      400: '#2dd4bf', // teal-400
      500: '#14b8a6', // teal-500
      600: '#0d9488', // teal-600
      700: '#0f766e', // teal-700
      800: '#115e59', // teal-800
      900: '#134e4a', // teal-900
      950: '#042f2e', // teal-950
    },
    
    // Highlight palette
    highlight: {
      50: '#fdf2f8',  // pink-50
      100: '#fce7f3', // pink-100
      200: '#fbcfe8', // pink-200
      300: '#f9a8d4', // pink-300
      400: '#f472b6', // pink-400
      500: '#ec4899', // pink-500
      600: '#db2777', // pink-600
      700: '#be185d', // pink-700
      800: '#9d174d', // pink-800
      900: '#831843', // pink-900
      950: '#500724', // pink-950
    },
    
    // Neutral palette
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
    
    // Semantic colors
    success: '#10b981', // emerald-500
    warning: '#f59e0b', // amber-500
    error: '#ef4444',   // red-500
    info: '#3b82f6',    // blue-500
  },
  
  // Gradients
  gradients: {
    primary: 'from-indigo-900 via-purple-900 to-indigo-800',
    secondary: 'from-purple-600 to-pink-600',
    accent: 'from-cyan-400 via-blue-500 to-purple-600',
    button: 'from-blue-600 via-purple-600 to-pink-700',
    card: 'from-white to-gray-50',
    subtle: 'from-gray-50 to-gray-100',
    hero: 'from-gray-50 to-gray-100',
    form: 'from-indigo-50 via-purple-50 to-pink-50',
  },
  
  // Shadows
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    inner: 'shadow-inner',
    button: 'shadow-lg hover:shadow-blue-500/25',
    card: 'shadow-lg hover:shadow-2xl',
    glow: 'shadow-[0_0_15px_rgba(99,102,241,0.5)]',
  },
  
  // Border radius
  borderRadius: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
  },
  
  // Transitions
  transitions: {
    fast: 'transition-all duration-200',
    normal: 'transition-all duration-300',
    slow: 'transition-all duration-500',
    extraSlow: 'transition-all duration-700',
  },
  
  // Effects
  effects: {
    hover: {
      scale: 'hover:scale-[1.02]',
      glow: 'hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]',
      lift: 'hover:-translate-y-1',
    },
    glassmorphism: 'bg-white/80 backdrop-blur-xl',
    subtleGlass: 'bg-white/50 backdrop-blur-sm',
  },
  
  // Typography
  typography: {
    fontFamily: {
      sans: 'var(--font-geist-sans)',
      mono: 'var(--font-geist-mono)',
    },
    heading: {
      h1: 'text-4xl md:text-5xl font-bold',
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-bold',
      h4: 'text-xl font-semibold',
      h5: 'text-lg font-semibold',
      h6: 'text-base font-semibold',
    },
    gradient: {
      primary: 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent',
      secondary: 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent',
    }
  },
  
  // Layout
  layout: {
    container: 'container mx-auto px-6',
    section: 'py-12 md:py-20',
  },
};

// Common component styles
export const componentStyles = {
  button: {
    primary: `px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg 
              hover:from-blue-600 hover:to-blue-700 ${theme.transitions.fast} 
              shadow-md hover:shadow-blue-500/25 font-medium`,
    secondary: `px-6 py-3 border border-gray-300 text-gray-700 rounded-lg 
                hover:bg-gray-50 hover:border-gray-400 ${theme.transitions.fast} font-medium`,
    accent: `group relative inline-flex items-center justify-center px-8 py-3 
             overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl`,
  },
  card: `bg-gradient-to-br ${theme.gradients.card} rounded-2xl overflow-hidden 
         ${theme.shadows.card} ${theme.transitions.normal} border border-gray-100`,
  input: `appearance-none block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm 
          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 
          focus:border-purple-500 ${theme.transitions.fast} bg-white/50 backdrop-blur-sm`,
  badge: `px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium`,
  glasspanel: `${theme.effects.glassmorphism} py-8 px-6 shadow-xl rounded-xl border border-gray-100`,
};

// Export both for use in components
export default { theme, componentStyles };
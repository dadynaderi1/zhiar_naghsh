'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'fa';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage: Language = 'fa';

// Create the context
const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  direction: 'rtl',
  setLanguage: () => {},
  t: (key) => key,
});

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    'home': 'Home',
    'models': 'Models',
    'about': 'About',
    'contact': 'Contact',
    'signin': 'Sign In',
    'signup': 'Sign Up',
    'browse_models': 'Browse Models',
    'create_account': 'Create Account',
    // Add more translations as needed
  },
  fa: {
    'home': 'خانه',
    'models': 'مدل‌ها',
    'about': 'درباره ما',
    'contact': 'تماس با ما',
    'signin': 'ورود',
    'signup': 'ثبت نام',
    'browse_models': 'مشاهده مدل‌ها',
    'create_account': 'ایجاد حساب کاربری',
    // Add more translations as needed
  }
};

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const direction = language === 'fa' ? 'rtl' : 'ltr';
  
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  };
  
  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  // Initialize from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fa')) {
      setLanguage(savedLanguage);
    } else {
      setLanguage(defaultLanguage);
    }
  }, []);
  
  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
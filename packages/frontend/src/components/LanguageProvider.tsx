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
    'categories': 'Categories',
    'search': 'Search',
    'latest_models': 'Latest Models',
    'top_models': 'Top Models',
    'my_models': 'My Models',
    'create_model': 'Create Model',
    'edit_model': 'Edit Model',
    'delete_model': 'Delete Model',
    'view_model': 'View Model',
    'download_model': 'Download Model',
    'share_model': 'Share Model',
    'settings': 'Settings',
    'logout': 'Logout',
    'terms_of_service': 'Terms of Service',
    'privacy_policy': 'Privacy Policy',
    'profile': 'Profile',
    'username': 'Username',
    'email': 'Email',
    'password': 'Password',
    'confirm_password': 'Confirm Password',
    'submit': 'Submit',
    'cancel': 'Cancel',
    'edit': 'Edit',
    'delete': 'Delete',
    'view': 'View',
    'download': 'Download',
    // Add more translations as needed
  },
  fa: {
    'home': 'خانه',
    'models': 'مدل‌',
    'about': 'درباره ما',
    'contact': 'تماس با ما',
    'signin': 'ورود',
    'signup': 'ثبت نام',
    'browse_models': 'مشاهده مدل‌ها',
    'create_account': 'ایجاد حساب کاربری',
    'categories': 'دسته‌بندی‌ها',
    'search': 'جستجو',
    'latest_models': 'آخرین مدل‌ها',
    'top_models': 'مودل‌های برتر',
    'my_models': 'مدل‌های من',
    'view_all': 'مشاهده همه',
    'recent_models': 'مدل‌های اخیر',
    'create_model': 'افزودن مدل',
    'edit_model': 'ویرایش مدل',
    'delete_model': 'حذف مدل',
    'view_model': 'مشاهده مدل',
    'download_model': 'دانلود مدل',
    'top_categories': 'دسته‌بندی های محبوب',
    'total_models': 'تعداد کل مدل‌ها',
    'no_models': 'موردی یافت نشد',
    'share_model': 'اشتراک گذاری مدل',
    'settings': 'تنظیمات',
    'logout': 'خروج',
    'terms_of_service': 'قوانین استفاده',
    'privacy_policy': 'سیاست حفظ حریم خصوصی',
    'profile': 'پروفایل',
    'username': 'نام کاربری',
    'published_models': 'مدل‌های منتشر شده',
    'start_creating_models': 'شروع کنید',
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
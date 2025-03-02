'use client';

import { useLanguage } from './LanguageProvider';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="text-sm font-medium">
          {language === 'fa' ? 'فارسی' : 'English'}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in">
          <button
            onClick={() => {
              setLanguage('fa');
              setIsOpen(false);
            }}
            className={`w-full text-right px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
              language === 'fa' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
            }`}
          >
            فارسی
          </button>
          <button
            onClick={() => {
              setLanguage('en');
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
              language === 'en' ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
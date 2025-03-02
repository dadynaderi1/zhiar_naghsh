'use client';

import { ReactNode, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';

interface LanguageWrapperProps {
  children: ReactNode;
}

export function LanguageWrapper({ children }: LanguageWrapperProps) {
  const { language, direction } = useLanguage();
  
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);
  
  return (
    <div className={direction === 'rtl' ? 'rtl' : 'ltr'}>
      {children}
    </div>
  );
}
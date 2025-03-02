'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 backdrop-blur-lg shadow-xl border-b border-indigo-700/30">
      <div className="container mx-auto px-6 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Link href="/" className="relative block">
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                  ژیار نقش
                </h1>
              </Link>
            </div>
          </div>
          
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center space-x-1 md:space-x-2">
              {[
                { path: '/', label: 'خانه' },
                { path: '/models', label: 'مدل ها' },
                { path: '/about', label: 'درباره ما' },
                { path: '/contact', label: 'ارتباط با ما' }
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link 
                    href={path} 
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(path) 
                        ? 'text-white font-medium bg-white/10 backdrop-blur-sm' 
                        : 'text-indigo-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {label}
                    {isActive(path) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-4 md:mt-0">
            <Link 
              href="/login" 
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white font-semibold">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
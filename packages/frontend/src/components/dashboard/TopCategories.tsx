import Link from 'next/link';
import { DashboardCategoryDto } from '@zhiarnaghsh/shared';
import { useLanguage } from '@/components/LanguageProvider';

interface TopCategoriesProps {
  categories: DashboardCategoryDto[];
}

export default function TopCategories({ categories }: TopCategoriesProps) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">{t('top_categories')}</h2>
        <Link 
          href="/categories" 
          className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          {t('view_all')}
        </Link>
      </div>
      
      {categories.length === 0 ? (
        <div className="text-center py-8">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">{t('no_categories')}</h3>
          <p className="mt-1 text-sm text-gray-500">{t('start_creating_categories')}</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category.id}>
              <Link 
                href={`/categories/${category.id}`}
                className="block p-4 rounded-lg border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{category.name}</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {category.modelCount} {category.modelCount === 1 ? t('model') : t('models')}
                  </span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full" 
                    style={{ 
                      width: `${Math.min(100, (category.modelCount / Math.max(...categories.map(c => c.modelCount))) * 100)}%` 
                    }}
                  ></div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
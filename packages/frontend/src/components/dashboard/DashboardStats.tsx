import { DashboardStatsDto } from '@zhiarnaghsh/shared';
import { useLanguage } from '@/components/LanguageProvider';

interface DashboardStatsProps {
  stats: DashboardStatsDto;
}

export default function DashboardStats({ stats }: DashboardStatsProps) {
  const { t } = useLanguage();
  
  const statItems = [
    {
      label: t('total_models'),
      value: stats.totalModels,
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      label: t('published_models'),
      value: stats.publishedModelCount,
      icon: (
        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
    },
    {
      label: t('categories'),
      value: stats.totalCategories,
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700',
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statItems.map((item, index) => (
        <div key={index} className={`${item.bgColor} rounded-xl p-6 shadow-sm border border-gray-100`}>
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              {item.icon}
            </div>
            <div className="ms-4">
              <p className="text-sm font-medium text-gray-600">{item.label}</p>
              <p className={`text-2xl font-bold ${item.textColor}`}>{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
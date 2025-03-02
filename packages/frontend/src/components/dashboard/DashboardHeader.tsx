import { DashboardUserDto } from '@zhiarnaghsh/shared';
import { useLanguage } from '@/components/LanguageProvider';

interface DashboardHeaderProps {
  user: DashboardUserDto;
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {t('خوش آمدی')}, {user.firstName || user.username}!
          </h1>
          <p className="mt-1 text-gray-600">
            {t('این یک متن آزمایشی است!')}
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium">
            {t(user.role.toLowerCase().toLocaleUpperCase())}
          </div>
        </div>
      </div>
    </div>
  );
}
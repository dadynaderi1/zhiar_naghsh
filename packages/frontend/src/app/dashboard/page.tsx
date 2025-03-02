'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardResponseDto } from '@zhiarnaghsh/shared';
import apiClient from '@/lib/api-client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardStats from '@/components/dashboard/DashboardStats';
import RecentModels from '@/components/dashboard/RecentModels';
import TopCategories from '@/components/dashboard/TopCategories';
import { useLanguage } from '@/components/LanguageProvider';

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState<DashboardResponseDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { t } = useLanguage();

  useEffect(() => {
    // Update the fetchDashboardData function
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        // Use the request method directly since getDashboardData isn't recognized
        const data = await apiClient.request<DashboardResponseDto>('/api/dashboard', 'GET');
        setDashboardData(data);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching dashboard data:', err);
        setError(err.message || t('dashboard_fetch_error'));
        
        // If unauthorized, redirect to login
        if (err.message === 'Authentication required') {
          router.push('/login?returnUrl=/dashboard');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [router, t]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <Header />
        <div className="container mx-auto px-6 py-16 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600 mb-4"></div>
            <h2 className="text-xl font-medium text-gray-700">{t('loading_dashboard')}</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <Header />
        <div className="container mx-auto px-6 py-16">
          <div className="bg-red-50 border-s-4 border-red-500 p-6 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ms-3">
                <h3 className="text-lg font-medium text-red-800">{t('error_occurred')}</h3>
                <p className="mt-2 text-red-700">{error}</p>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => router.push('/login')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    {t('back_to_login')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!dashboardData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <DashboardHeader user={dashboardData.user} />
        
        <div className="mt-8">
          <DashboardStats stats={dashboardData.stats} />
        </div>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RecentModels models={dashboardData.recentModels} />
          </div>
          <div>
            <TopCategories categories={dashboardData.topCategories} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Premium <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">مدل سه بعدی</span> برای واقع گرایان
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover high-quality 3D models for architecture, interior design, and visualization projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/models" className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 font-medium">
                  گالری مدل ها
                </Link>
                <Link href="/signup" className="px-8 py-3.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium">
                  حساب کاربری بسازید
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl h-96 flex items-center justify-center shadow-lg border border-gray-100 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10"></div>
                <p className="text-gray-500 text-lg relative z-10">پیش نمایش مدل 3 بعدی</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">چرا باید مدل های ما را انتخاب کنید؟</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">وجود مدل های سه بعدی کالا های ساخت و موجود در بازار ایران</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">High Quality</h3>
              <p className="text-gray-600">All models are created by professional 3D artists with attention to detail and precision.</p>
            </div>
            
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Regular Updates</h3>
              <p className="text-gray-600">New models are added weekly to keep our collection fresh and up-to-date with industry trends.</p>
            </div>
            
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Licensing</h3>
              <p className="text-gray-600">Choose from various license types to suit your project needs and budget requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
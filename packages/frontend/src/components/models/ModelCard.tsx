import Link from 'next/link';
import Image from 'next/image';
import { Model } from '@zhiarnaghsh/shared';

interface ModelCardProps {
  model: Model;
}

export default function ModelCard({ model }: ModelCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-purple-600/20 rounded-bl-3xl z-0"></div>
      
      {/* Image container with overlay effects */}
      <div className="h-64 relative overflow-hidden">
        <Image 
          src="https://placehold.co/1920x1920"
          alt={model.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Platform badges that slide in on hover */}
        <div className="absolute bottom-4 left-0 w-full px-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-wrap gap-2 z-10">
          {model.platform.map(platform => (
            <span key={platform} className="px-3 py-1 bg-blue-600/90 text-white text-xs rounded-full font-medium backdrop-blur-sm">
              {platform}
            </span>
          ))}
          <span className="px-3 py-1 bg-purple-600/90 text-white text-xs rounded-full font-medium backdrop-blur-sm">
            {model.styles}
          </span>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
            {model.name}
          </h3>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-2 py-1 rounded-md font-medium">
            New
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">By Zhiar Naghsh</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {model.platform.map(platform => (
            <span key={platform} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
              {platform}
            </span>
          ))}
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium">
            {model.styles}
          </span>
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <span className="font-bold text-lg text-gray-900">0</span>
          <Link 
            href={`/models/${model.id}`}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-blue-500/25"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
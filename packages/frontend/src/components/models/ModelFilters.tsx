import { Materials, Platforms, Styles } from '@zhiarnaghsh/shared';

interface ModelFiltersProps {
  searchTerm: string;
  selectedStyle: string;
  selectedPlatform: string;
  selectedMaterial: string;
  onSearchChange: (value: string) => void;
  onStyleChange: (value: string) => void;
  onPlatformChange: (value: string) => void;
  onMaterialChange: (value: string) => void;
}

export default function ModelFilters({...props}: ModelFiltersProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search</label>
          <div className="relative">
            <input
              type="text"
              id="search"
              placeholder="Search models..."
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 pl-10"
              value={props.searchTerm}
              onChange={(e) => props.onSearchChange(e.target.value)}
            />
            <svg className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* Filter Selects with consistent styling */}
        <div>
          <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-2">Style</label>
          <select
            id="style"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 appearance-none bg-white"
            value={props.selectedStyle}
            onChange={(e) => props.onStyleChange(e.target.value)}
          >
            <option value="">All Styles</option>
            {Object.values(Styles).map(style => (
              <option key={style} value={style}>{style}</option>
            ))}
          </select>
        </div>
        
        {/* Similar styling for Platform and Material selects */}
        {/* ... rest of the selects with the same styling ... */}
      </div>
    </div>
  );
}
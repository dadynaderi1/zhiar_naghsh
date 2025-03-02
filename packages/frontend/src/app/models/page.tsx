'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Materials, Platforms, Styles, Model } from '@zhiarnaghsh/shared';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModelFilters from '@/components/models/ModelFilters';
import ModelCard from '@/components/models/ModelCard';

export default function ModelsPage() {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [filteredModels, setFilteredModels] = useState<Model[]>([]);
  // Fetch models from API with filters
  useEffect(() => {
    const fetchModels = async () => {
      setLoading(true);
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';
        
        // Build query parameters for filtering
        const params = new URLSearchParams();
        if (searchTerm) params.append('search', searchTerm);
        if (selectedStyle) params.append('style', selectedStyle);
        if (selectedPlatform) params.append('platform', selectedPlatform);
        if (selectedMaterial) params.append('material', selectedMaterial);
        
        const queryString = params.toString();
        const url = `${API_URL}/model${queryString ? `?${queryString}` : ''}`;
        
        console.log('Fetching from:', url);
        
        const response = await fetch(url, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Response not OK:', response.status, errorText);
          throw new Error(`Failed to fetch models: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received data:', data);
        setModels(data);
        setFilteredModels(data);
      } catch (err) {
        console.error('Error details:', err);
        setError('Failed to load models. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    // Call the fetch function
    fetchModels();
    
  }, [searchTerm, selectedStyle, selectedPlatform, selectedMaterial]);
  // Filter models based on search and filters
  useEffect(() => {
    let result = [...models];
    
    if (searchTerm) {
      result = result.filter(model => 
        model.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedStyle) {
      result = result.filter(model => 
        model.styles === selectedStyle
      );
    }
    
    if (selectedPlatform) {
      result = result.filter(model => 
        model.platform.includes(selectedPlatform as Platforms)
      );
    }
    
    if (selectedMaterial) {
      result = result.filter(model => 
        model.materials.includes(selectedMaterial as Materials)
      );
    }
    
    setFilteredModels(result);
  }, [models, searchTerm, selectedStyle, selectedPlatform, selectedMaterial]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">3D Models</h1>
        <p className="text-gray-600 mb-8">Explore our collection of premium 3D models</p>
        
        <ModelFilters
          searchTerm={searchTerm}
          selectedStyle={selectedStyle}
          selectedPlatform={selectedPlatform}
          selectedMaterial={selectedMaterial}
          onSearchChange={setSearchTerm}
          onStyleChange={setSelectedStyle}
          onPlatformChange={setSelectedPlatform}
          onMaterialChange={setSelectedMaterial}
        />
        
        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600 font-medium">Loading amazing models...</p>
          </div>
        )}
        
        {/* Error State with enhanced styling */}
        {error && !loading && (
          <div className="text-center py-16 bg-red-50 rounded-xl border border-red-100">
            <svg className="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-xl font-medium text-red-800">{error}</h3>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Try Again
            </button>
          </div>
        )}
        
        {/* Models Grid with enhanced spacing */}
        {!loading && !error && (
          <>
            {models.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {models.map(model => (
                  <ModelCard key={model.id} model={model} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-600">No models found matching your criteria</h3>
                <p className="mt-2 text-gray-500">Try adjusting your filters or search term</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedStyle('');
                    setSelectedPlatform('');
                    setSelectedMaterial('');
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
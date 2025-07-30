'use client';

import { useEffect, useState } from 'react';

interface LoadingOptimizerProps {
  children: React.ReactNode;
}

export default function LoadingOptimizer({ children }: LoadingOptimizerProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      try {
        // Preload background video
        const video = new Audio('/videos/background-video.mp4');
        video.preload = 'metadata';
        
        // Preload critical images
        const criticalImages = [
          '/assets/jwayyeds-homepage.webp',
          '/assets/service-page.webp',
          '/assets/estatePlanning.webp',
          '/assets/businessLaw.webp',
          '/assets/criminal.jpg'
        ];

        await Promise.all(
          criticalImages.map(src => {
            return new Promise((resolve) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = resolve; // Continue even if image fails
              img.src = src;
            });
          })
        );

        // Small delay to ensure smooth transition
        setTimeout(() => setIsLoading(false), 100);
      } catch (error) {
        console.warn('Preloading failed:', error);
        setIsLoading(false);
      }
    };

    preloadResources();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
} 
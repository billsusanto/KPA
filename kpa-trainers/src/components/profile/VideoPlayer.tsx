'use client';

import { useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  posterImage?: string;
  trainerName: string;
}

export function VideoPlayer({ videoUrl, posterImage, trainerName }: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false);
  const initials = trainerName.split(' ').map(n => n[0]).join('');

  return (
    <section className="py-16 lg:py-20 bg-cream-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-fusion-200/30 to-transparent blur-3xl" />
      
      <div className="container-mobile relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-fusion-900 mb-2">
            Watch <span className="font-accent text-3xl lg:text-4xl">{trainerName}&apos;s</span> Story
          </h2>
          <p className="text-fusion-600 font-body">Discover what drives their passion for Pilates</p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-br from-fusion-300/20 to-fusion-400/10 rounded-[2rem] blur-xl opacity-50" />
          
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-fusion-700 via-fusion-800 to-fusion-900 shadow-2xl shadow-fusion-900/30 ring-1 ring-fusion-600/20">
            {hasError ? (
              <div className="aspect-video flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-fusion-600/40 to-transparent" />
                <div className="relative z-10 text-center p-8">
                  <div className="w-20 h-20 rounded-xl bg-cream-200/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm ring-1 ring-cream-200/20">
                    <svg className="w-10 h-10 text-cream-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-cream-200 text-lg font-body">Video coming soon</p>
                  <p className="text-cream-300 text-sm mt-2 font-body">Check back later to see {initials}&apos;s introduction</p>
                </div>
              </div>
            ) : (
              <video
                className="w-full aspect-video"
                controls
                poster={posterImage}
                preload="metadata"
                onError={() => setHasError(true)}
              >
                <source src={videoUrl} type="video/mp4" />
                <p className="text-cream-100 text-center p-8 font-body">
                  Your browser does not support the video tag.
                </p>
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

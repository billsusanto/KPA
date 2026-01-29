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
    <section className="py-16 lg:py-20 bg-charcoal-950 relative overflow-hidden">
      {/* Subtle spotlight effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-charcoal-800/50 to-transparent blur-3xl" />
      
      <div className="container-mobile relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-2">
            Watch {trainerName}&apos;s Story
          </h2>
          <p className="text-white/60 font-body">Discover what drives their passion for Pilates</p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Glow effect around video */}
          <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-[2rem] blur-xl opacity-50" />
          
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950 shadow-2xl shadow-black/50 ring-1 ring-white/10">
            {hasError ? (
              <div className="aspect-video flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-charcoal-700/40 to-transparent" />
                <div className="relative z-10 text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm ring-1 ring-white/20">
                    <svg className="w-10 h-10 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-lg font-body">Video coming soon</p>
                  <p className="text-white/60 text-sm mt-2 font-body">Check back later to see {initials}&apos;s introduction</p>
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
                <p className="text-white text-center p-8 font-body">
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

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
    <section className="py-12 lg:py-16 bg-charcoal-950">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-6">
          Meet {trainerName}
        </h2>
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950 shadow-xl shadow-black/20">
          {hasError ? (
            <div className="aspect-video flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal-700/40 to-transparent" />
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
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
    </section>
  );
}

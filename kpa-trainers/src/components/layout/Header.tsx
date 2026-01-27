'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass border-b border-gray-100/50 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-mobile py-5">
        <Link href="/trainers" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-maroon-600 to-maroon-800 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-maroon-500/20">
            <span className="text-white font-bold text-xl font-display">K</span>
          </div>
          <div>
            <h1 className="font-display font-semibold text-lg text-maroon-800 leading-tight group-hover:text-maroon-700 transition-colors">
              Kaizen Pilates
            </h1>
            <p className="text-xs text-gray-500 tracking-wider uppercase font-body">Academy</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

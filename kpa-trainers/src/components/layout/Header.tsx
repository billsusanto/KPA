'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export function Header() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current + 10) {
        setVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled 
          ? 'bg-gradient-to-br from-maroon-700 to-maroon-800 shadow-lg shadow-maroon-900/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-mobile py-4">
        <Link href="/trainers" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-white/25">
            <span className="text-gold-400 font-bold text-xl font-display">K</span>
          </div>
          <div>
            <h1 className="font-display font-semibold text-lg text-white leading-tight group-hover:text-gold-300 transition-colors">
              Kaizen Pilates
            </h1>
            <p className="text-xs text-white/60 tracking-wider uppercase font-body">Academy</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

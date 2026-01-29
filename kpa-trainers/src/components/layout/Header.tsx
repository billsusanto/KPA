'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function Header() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  
  const isProfilePage = pathname.startsWith('/trainers/') && pathname !== '/trainers';

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
          ? 'bg-fusion-900/80 backdrop-blur-md shadow-lg shadow-black/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-mobile py-4 flex items-center justify-between">
        <Link href="/trainers" className="flex items-center gap-3 group">
          <Image 
            src="/logo-kaizen.png" 
            alt="Kaizen Pilates Academy" 
            width={120} 
            height={40} 
            className={`h-10 w-auto transition-all duration-300 ${
              isProfilePage || scrolled ? 'logo-white' : ''
            }`}
          />
        </Link>
        
        <Link 
          href="/trainers" 
          className={`text-sm font-body transition-colors duration-300 ${
            isProfilePage || scrolled 
              ? 'text-cream-200 hover:text-cream-100' 
              : 'text-fusion-700 hover:text-fusion-900'
          }`}
        >
          Trainers
        </Link>
      </div>
    </header>
  );
}

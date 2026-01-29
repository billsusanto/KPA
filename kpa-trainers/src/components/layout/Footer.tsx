import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-700 mt-auto">
      <div className="container-mobile py-10 text-center">
        <div className="flex justify-center mb-4">
          <Image 
            src="/KPA-Logo-White.png" 
            alt="KPA Logo" 
            width={120} 
            height={40} 
            className="h-12 w-auto"
          />
        </div>
        <p className="text-sm text-white/60 mt-2 font-body">
          Master Trainer Showcase
        </p>
        <p className="text-xs text-white/40 mt-6 font-body">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}

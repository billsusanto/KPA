import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-fusion-900 border-t border-fusion-800 mt-auto">
      <div className="container-mobile py-10 text-center">
        <div className="flex justify-center mb-4">
          <Image 
            src="/logo-kaizen.png" 
            alt="Kaizen Pilates Academy" 
            width={120} 
            height={40} 
            className="h-12 w-auto logo-white"
          />
        </div>
        <p className="text-sm text-cream-300 mt-2 font-body">
          Master Trainer Showcase
        </p>
        <p className="text-xs text-cream-400 mt-6 font-body">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}

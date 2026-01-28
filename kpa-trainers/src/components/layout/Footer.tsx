import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-cream border-t border-gray-100 mt-auto">
      <div className="container-mobile py-10 text-center">
        <div className="flex justify-center mb-4">
          <Image 
            src="/KPA-Logo.jpeg" 
            alt="KPA Logo" 
            width={120} 
            height={40} 
            className="h-12 w-auto"
          />
        </div>
        <p className="text-sm text-gray-500 mt-2 font-body">
          Master Trainer Showcase
        </p>
        <p className="text-xs text-gray-400 mt-6 font-body">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-mobile py-4">
        <Link href="/trainers" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-maroon-700 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <div>
            <h1 className="font-bold text-maroon-800 leading-tight group-hover:text-maroon-700 transition-colors">Kaizen Pilates</h1>
            <p className="text-xs text-gray-500">Academy</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

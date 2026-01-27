export function Footer() {
  return (
    <footer className="bg-cream border-t border-gray-100 mt-auto">
      <div className="container-mobile py-10 text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-maroon-600 to-maroon-800 rounded-xl flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-lg font-display">K</span>
        </div>
        <p className="font-display text-lg text-gray-800">
          Kaizen Pilates Academy
        </p>
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

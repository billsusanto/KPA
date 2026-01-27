export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="container-mobile py-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Kaizen Pilates Academy
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Master Trainer Showcase
        </p>
      </div>
    </footer>
  );
}

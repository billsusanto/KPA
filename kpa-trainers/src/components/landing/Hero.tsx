export function Hero() {
  return (
    <section className="relative min-h-[70vh] bg-charcoal-950 pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* Dark background with concentric circles */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/dark-bg.png)' }}
      />
      
      {/* Subtle radial overlays for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-charcoal-700/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-charcoal-600/20 via-transparent to-transparent" />
      
      <div className="container-mobile relative z-10 text-center flex flex-col items-center justify-center min-h-[50vh]">
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mb-8 opacity-0 animate-fade-in" />
        
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight opacity-0 animate-fade-in-up">
          Meet Our
          <span className="block mt-2 text-white/90">Master Trainers</span>
        </h1>
        
        <p className="mt-8 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl opacity-0 animate-fade-in-up animation-delay-200 font-body">
          Discover the dedicated professionals behind Kaizen Pilates Academy.
          Our certified trainers bring years of experience and passion to every session.
        </p>
        
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mt-10 opacity-0 animate-fade-in animation-delay-400" />
      </div>
      
      {/* Bottom gradient fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-950 to-transparent" />
    </section>
  );
}

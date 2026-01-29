export function Hero() {
  return (
    <section className="relative bg-cream-100 pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fusion-200/40 via-transparent to-transparent" />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 800 800"
          className="w-[600px] h-[600px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] opacity-[0.08]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="60" fill="#5B7B8C" />
          
          {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
            <ellipse
              key={`inner-${rotation}`}
              cx="400"
              cy="280"
              rx="45"
              ry="100"
              fill="#5B7B8C"
              transform={`rotate(${rotation} 400 400)`}
            />
          ))}
          
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((rotation) => (
            <ellipse
              key={`outer-${rotation}`}
              cx="400"
              cy="220"
              rx="55"
              ry="140"
              fill="#7A99A8"
              transform={`rotate(${rotation} 400 400)`}
            />
          ))}
          
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((rotation) => (
            <ellipse
              key={`accent-${rotation}`}
              cx="400"
              cy="150"
              rx="20"
              ry="180"
              fill="#9FB5C2"
              transform={`rotate(${rotation} 400 400)`}
            />
          ))}
        </svg>
      </div>
      
      <div className="container-mobile relative z-10 text-center flex flex-col items-center justify-center min-h-[50vh]">
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-fusion-400/40 to-transparent mb-8 opacity-0 animate-fade-in" />
        
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-fusion-900 leading-tight tracking-tight opacity-0 animate-fade-in-up">
          Meet Our
          <span className="block mt-3 font-accent text-4xl md:text-5xl lg:text-6xl text-fusion-600">Master Trainers</span>
        </h1>
        
        <p className="mt-8 text-fusion-700 text-lg md:text-xl leading-relaxed max-w-2xl opacity-0 animate-fade-in-up animation-delay-200 font-body">
          Discover the dedicated professionals behind Kaizen Pilates Academy.
          Our certified trainers bring years of experience and passion to every session.
        </p>
        
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-fusion-400/30 to-transparent mt-10 opacity-0 animate-fade-in animation-delay-400" />
      </div>
    </section>
  );
}

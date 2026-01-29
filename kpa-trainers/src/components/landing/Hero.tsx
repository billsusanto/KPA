const outerPetals = [
  { rotation: 0, rx: 55, ry: 180 },
  { rotation: 22.5, rx: 45, ry: 120 },
  { rotation: 45, rx: 60, ry: 190 },
  { rotation: 67.5, rx: 40, ry: 100 },
  { rotation: 90, rx: 58, ry: 185 },
  { rotation: 112.5, rx: 42, ry: 110 },
  { rotation: 135, rx: 52, ry: 170 },
  { rotation: 157.5, rx: 38, ry: 95 },
  { rotation: 180, rx: 56, ry: 175 },
  { rotation: 202.5, rx: 48, ry: 130 },
  { rotation: 225, rx: 54, ry: 165 },
  { rotation: 247.5, rx: 36, ry: 90 },
  { rotation: 270, rx: 62, ry: 195 },
  { rotation: 292.5, rx: 44, ry: 115 },
  { rotation: 315, rx: 50, ry: 155 },
  { rotation: 337.5, rx: 42, ry: 105 },
];

const innerPetals = [
  { rotation: 0, rx: 50, ry: 85 },
  { rotation: 45, rx: 42, ry: 70 },
  { rotation: 90, rx: 55, ry: 90 },
  { rotation: 135, rx: 38, ry: 65 },
  { rotation: 180, rx: 48, ry: 80 },
  { rotation: 225, rx: 44, ry: 75 },
  { rotation: 270, rx: 52, ry: 88 },
  { rotation: 315, rx: 40, ry: 68 },
];

const midPetals = [
  { rotation: 22.5, rx: 58, ry: 120 },
  { rotation: 67.5, rx: 48, ry: 95 },
  { rotation: 112.5, rx: 62, ry: 130 },
  { rotation: 157.5, rx: 45, ry: 90 },
  { rotation: 202.5, rx: 56, ry: 115 },
  { rotation: 247.5, rx: 52, ry: 105 },
  { rotation: 292.5, rx: 60, ry: 125 },
  { rotation: 337.5, rx: 46, ry: 92 },
];

const accentPetals = [
  { rotation: 11.25, rx: 35, ry: 140 },
  { rotation: 33.75, rx: 28, ry: 100 },
  { rotation: 56.25, rx: 32, ry: 125 },
  { rotation: 78.75, rx: 25, ry: 85 },
  { rotation: 101.25, rx: 38, ry: 150 },
  { rotation: 123.75, rx: 26, ry: 90 },
  { rotation: 146.25, rx: 30, ry: 110 },
  { rotation: 168.75, rx: 24, ry: 80 },
  { rotation: 191.25, rx: 36, ry: 145 },
  { rotation: 213.75, rx: 29, ry: 105 },
  { rotation: 236.25, rx: 33, ry: 130 },
  { rotation: 258.75, rx: 27, ry: 95 },
  { rotation: 281.25, rx: 40, ry: 155 },
  { rotation: 303.75, rx: 28, ry: 100 },
  { rotation: 326.25, rx: 31, ry: 115 },
  { rotation: 348.75, rx: 26, ry: 88 },
];

export function Hero() {
  return (
    <section className="relative bg-cream-100 pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fusion-200/25 via-cream-100 to-cream-100" />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 800 800"
          className="w-[700px] h-[700px] md:w-[850px] md:h-[850px] lg:w-[1000px] lg:h-[1000px] opacity-[0.20] blur-[0.5px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="outerGradient" cx="50%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#8AA8B6" />
              <stop offset="70%" stopColor="#6B8A9A" />
              <stop offset="100%" stopColor="#5B7B8C" />
            </radialGradient>
          </defs>
          {outerPetals.map((petal) => (
            <ellipse
              key={`bold-outer-${petal.rotation}`}
              cx="400"
              cy={400 - petal.ry * 0.65}
              rx={petal.rx}
              ry={petal.ry}
              fill="url(#outerGradient)"
              transform={`rotate(${petal.rotation} 400 400)`}
            />
          ))}
        </svg>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 800 800"
          className="w-[580px] h-[580px] md:w-[680px] md:h-[680px] lg:w-[780px] lg:h-[780px] opacity-[0.12]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#9FB5C2" />
              <stop offset="100%" stopColor="#7A99A8" />
            </radialGradient>
            <radialGradient id="innerGradient" cx="50%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#A8C0CC" />
              <stop offset="100%" stopColor="#7A99A8" />
            </radialGradient>
            <radialGradient id="midGradient" cx="50%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#B5CAD5" />
              <stop offset="100%" stopColor="#8AA8B6" />
            </radialGradient>
            <radialGradient id="accentGradient" cx="50%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#C2D4DD" />
              <stop offset="100%" stopColor="#9FB5C2" />
            </radialGradient>
          </defs>
          
          <circle cx="400" cy="400" r="45" fill="url(#centerGradient)" />
          
          {innerPetals.map((petal) => (
            <ellipse
              key={`inner-${petal.rotation}`}
              cx="400"
              cy={400 - petal.ry * 0.7}
              rx={petal.rx}
              ry={petal.ry}
              fill="url(#innerGradient)"
              transform={`rotate(${petal.rotation} 400 400)`}
            />
          ))}
          
          {midPetals.map((petal) => (
            <ellipse
              key={`mid-${petal.rotation}`}
              cx="400"
              cy={400 - petal.ry * 0.65}
              rx={petal.rx}
              ry={petal.ry}
              fill="url(#midGradient)"
              transform={`rotate(${petal.rotation} 400 400)`}
            />
          ))}
          
          {accentPetals.map((petal) => (
            <ellipse
              key={`accent-${petal.rotation}`}
              cx="400"
              cy={400 - petal.ry * 0.6}
              rx={petal.rx}
              ry={petal.ry}
              fill="url(#accentGradient)"
              transform={`rotate(${petal.rotation} 400 400)`}
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

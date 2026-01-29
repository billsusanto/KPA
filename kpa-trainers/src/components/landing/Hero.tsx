import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-cream-100 pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] opacity-[0.25]">
          <Image
            src="/blue-flower.jpg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      <div className="container-mobile relative z-10 text-center flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-fusion-900 leading-tight tracking-tight opacity-0 animate-fade-in-up">
          Meet Our
          <span className="block mt-3 font-accent text-4xl md:text-5xl lg:text-6xl text-fusion-600">Master Trainers</span>
        </h1>
        
        <p className="mt-8 text-fusion-700 text-lg md:text-xl leading-relaxed max-w-2xl opacity-0 animate-fade-in-up animation-delay-200 font-body">
          Discover the dedicated professionals behind Kaizen Pilates Academy.
          Our certified trainers bring years of experience and passion to every session.
        </p>
      </div>
    </section>
  );
}

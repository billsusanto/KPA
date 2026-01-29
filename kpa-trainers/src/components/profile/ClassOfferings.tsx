interface ClassOfferingsProps {
  classOfferings: string[];
}

export function ClassOfferings({ classOfferings }: ClassOfferingsProps) {
  return (
    <section className="py-16 lg:py-20 bg-charcoal-950">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-10 text-center">
          Available Classes
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 max-w-3xl mx-auto">
          {classOfferings.map((offering, index) => (
            <div 
              key={offering}
              className="group bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-5 lg:p-6 border border-white/10 hover:from-white/15 hover:to-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <span className="text-white/90 text-base lg:text-lg font-body font-medium">{offering}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

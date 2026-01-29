interface ClassOfferingsProps {
  classOfferings: string[];
}

export function ClassOfferings({ classOfferings }: ClassOfferingsProps) {
  return (
    <section className="py-16 lg:py-20 bg-cream-200/50">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-fusion-900 mb-10 text-center">
          Available Classes
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 max-w-3xl mx-auto">
          {classOfferings.map((offering, index) => (
            <div 
              key={offering}
              className="group bg-cream-50 rounded-2xl p-5 lg:p-6 border border-cream-300 hover:border-fusion-400/30 hover:shadow-xl hover:shadow-fusion-900/10 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-fusion-500 to-fusion-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-cream-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <span className="text-fusion-800 text-base lg:text-lg font-body font-medium">{offering}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

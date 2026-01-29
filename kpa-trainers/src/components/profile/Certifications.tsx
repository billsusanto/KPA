interface CertificationsProps {
  certifications: string[];
  specializations: string[];
}

export function Certifications({ certifications, specializations }: CertificationsProps) {
  return (
    <section className="py-12 lg:py-16 bg-charcoal-800 animate-fade-in">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-8">
          Certifications & Specializations
        </h2>

        <div className="space-y-10">
          {/* Certifications */}
          <div>
            <h3 className="text-sm font-medium text-white/50 mb-4 uppercase tracking-wider font-body">Certifications</h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors duration-200 font-body"
                >
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="text-sm font-medium text-white/50 mb-4 uppercase tracking-wider font-body">Specializations</h3>
            <div className="flex flex-wrap gap-3">
              {specializations.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors duration-200 font-body"
                >
                  <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

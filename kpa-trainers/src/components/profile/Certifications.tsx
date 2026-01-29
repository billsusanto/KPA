interface CertificationsProps {
  certifications: string[];
  specializations: string[];
}

export function Certifications({ certifications, specializations }: CertificationsProps) {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-10 text-center">
          Credentials & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Certifications with gold accent */}
          <div className="bg-gradient-to-br from-amber-900/20 via-charcoal-800/50 to-charcoal-900/50 rounded-3xl p-6 lg:p-8 border border-amber-700/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-amber-200 font-display">Certifications</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center px-3 lg:px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-100 border border-amber-500/30 hover:from-amber-500/30 hover:to-amber-600/30 transition-all duration-200 font-body"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Specializations with blue accent */}
          <div className="bg-gradient-to-br from-blue-900/20 via-charcoal-800/50 to-charcoal-900/50 rounded-3xl p-6 lg:p-8 border border-blue-700/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-blue-200 font-display">Specializations</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {specializations.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center px-3 lg:px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-100 border border-blue-500/30 hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-200 font-body"
                >
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

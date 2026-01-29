interface CertificationsProps {
  certifications: string[];
  specializations: string[];
}

export function Certifications({ certifications, specializations }: CertificationsProps) {
  return (
    <section className="py-16 lg:py-20 bg-cream-100">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-fusion-900 mb-10 text-center">
          Credentials & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-cream-50 rounded-2xl p-6 lg:p-8 border border-fusion-300/30 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fusion-500 to-fusion-700 flex items-center justify-center shadow-lg shadow-fusion-500/20">
                <svg className="w-5 h-5 text-cream-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-fusion-800 font-display">Certifications</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center px-3 lg:px-4 py-2 rounded-lg text-sm font-medium bg-fusion-500/10 text-fusion-700 border border-fusion-500/20 hover:bg-fusion-500/20 transition-all duration-200 font-body"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-cream-50 rounded-2xl p-6 lg:p-8 border border-fusion-300/30 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fusion-400 to-fusion-600 flex items-center justify-center shadow-lg shadow-fusion-500/20">
                <svg className="w-5 h-5 text-cream-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-fusion-800 font-display">Specializations</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {specializations.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center px-3 lg:px-4 py-2 rounded-lg text-sm font-medium bg-fusion-400/10 text-fusion-600 border border-fusion-400/20 hover:bg-fusion-400/20 transition-all duration-200 font-body"
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

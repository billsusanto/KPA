interface CertificationsProps {
  certifications: string[];
  specializations: string[];
}

export function Certifications({ certifications, specializations }: CertificationsProps) {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container-mobile">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Certifications & Specializations
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-maroon-700 text-white"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {specializations.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gold-400 text-gray-900"
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

interface BiographyProps {
  biography: string;
  name: string;
}

export function Biography({ biography, name }: BiographyProps) {
  const paragraphs = biography.split('\n\n').filter(Boolean);

  return (
    <section className="py-16 lg:py-20 bg-charcoal-900">
      <div className="container-mobile max-w-3xl">
        {/* Section header with decorative lines */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white">
            About {name}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        
        {/* Content card */}
        <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] rounded-3xl p-6 lg:p-10 border border-white/10 shadow-xl">
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-white/80 text-lg leading-relaxed font-body first:first-letter:text-3xl first:first-letter:font-display first:first-letter:font-bold first:first-letter:text-white first:first-letter:mr-1 first:first-letter:float-left"
                style={{ lineHeight: '1.85' }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

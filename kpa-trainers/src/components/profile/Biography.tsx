interface BiographyProps {
  biography: string;
  name: string;
}

export function Biography({ biography, name }: BiographyProps) {
  const paragraphs = biography.split('\n\n').filter(Boolean);

  return (
    <section className="py-16 lg:py-20 bg-cream-200/50">
      <div className="container-mobile max-w-3xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-fusion-400/30 to-transparent" />
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-fusion-900">
            About <span className="font-accent text-3xl lg:text-4xl">{name}</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-fusion-400/30 to-transparent" />
        </div>
        
        <div className="bg-cream-50 rounded-2xl p-6 lg:p-10 border border-cream-300 shadow-lg">
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-fusion-800 text-lg leading-relaxed font-body first:first-letter:text-3xl first:first-letter:font-display first:first-letter:font-bold first:first-letter:text-fusion-900 first:first-letter:mr-1 first:first-letter:float-left"
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

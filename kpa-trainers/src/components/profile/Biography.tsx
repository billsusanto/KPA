interface BiographyProps {
  biography: string;
  name: string;
}

export function Biography({ biography, name }: BiographyProps) {
  const paragraphs = biography.split('\n\n').filter(Boolean);

  return (
    <section className="py-12 lg:py-16 bg-charcoal-950 animate-fade-in">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-6">
          About {name}
        </h2>
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-white/80 text-lg leading-relaxed font-body" style={{ lineHeight: '1.8' }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

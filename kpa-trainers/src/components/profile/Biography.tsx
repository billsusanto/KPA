interface BiographyProps {
  biography: string;
  name: string;
}

export function Biography({ biography, name }: BiographyProps) {
  const paragraphs = biography.split('\n\n').filter(Boolean);

  return (
    <section className="py-12 lg:py-16 animate-fade-in">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
          About {name}
        </h2>
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-lg leading-relaxed font-body" style={{ lineHeight: '1.8' }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

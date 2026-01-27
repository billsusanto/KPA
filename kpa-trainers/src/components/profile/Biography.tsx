interface BiographyProps {
  biography: string;
  name: string;
}

export function Biography({ biography, name }: BiographyProps) {
  const paragraphs = biography.split('\n\n').filter(Boolean);

  return (
    <section className="py-8">
      <div className="container-mobile">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          About {name}
        </h2>
        <div className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

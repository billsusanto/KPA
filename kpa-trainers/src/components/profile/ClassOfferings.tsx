interface ClassOfferingsProps {
  classOfferings: string[];
}

export function ClassOfferings({ classOfferings }: ClassOfferingsProps) {
  return (
    <section className="py-8">
      <div className="container-mobile">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Class Offerings
        </h2>
        <ul className="space-y-3">
          {classOfferings.map((offering) => (
            <li key={offering} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{offering}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

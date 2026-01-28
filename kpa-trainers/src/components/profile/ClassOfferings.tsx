interface ClassOfferingsProps {
  classOfferings: string[];
}

export function ClassOfferings({ classOfferings }: ClassOfferingsProps) {
  return (
    <section className="py-12 lg:py-16">
      <div className="container-mobile">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-gray-900 mb-8">
          Class Offerings
        </h2>
        <ul className="space-y-4">
          {classOfferings.map((offering) => (
            <li key={offering} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0 mt-0.5 ring-1 ring-accent-200/50">
                <svg
                  className="w-4 h-4 text-accent-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-700 text-lg font-body">{offering}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TrustFeatures() {
  const features = [
    {
      id: 'hallmarked',
      title: '100% HALLMARKED JEWELLERY',
      subtitle: 'BIS 916 Certified Purity',
      icon: (
        <svg className="w-9 h-9 stroke-[#B8863D]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Diamond / Gemstone icon matching reference */}
          <path d="M6 3h12l4 7-10 11L2 10l4-7z" />
          <path d="M2 10h20" />
          <path d="M12 21L8 10l4-7 4 7-4 11z" />
        </svg>
      ),
    },
    {
      id: 'certified',
      title: 'CERTIFIED QUALITY',
      subtitle: 'Laboratory Grade Authenticity',
      icon: (
        <svg className="w-9 h-9 stroke-[#B8863D]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Shield with checkmark matching reference */}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'trusted',
      title: 'TRUSTED SINCE GENERATIONS',
      subtitle: 'Time-Honoured Integrity',
      icon: (
        <svg className="w-9 h-9 stroke-[#B8863D]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Hands holding / caring heart matching reference */}
          <path d="M12 8.5c1.5-2.5 5.5-2.5 7 0 1.5 2.5-.5 5-7 9.5-6.5-4.5-8.5-7-7-9.5 1.5-2.5 5.5-2.5 7 0z" />
          <path d="M4 17c1.5 2 3.5 3 6 3" />
          <path d="M20 17c-1.5 2-3.5 3-6 3" />
        </svg>
      ),
    },
    {
      id: 'wide-range',
      title: 'WIDE RANGE OF EXCLUSIVE DESIGNS',
      subtitle: 'Unmatched Royal Craftsmanship',
      icon: (
        <svg className="w-9 h-9 stroke-[#B8863D]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Sparkling gem / collection array */}
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      id: 'customised',
      title: 'CUSTOMISED JEWELLERY AVAILABLE',
      subtitle: 'Bespoke Heirloom Creations',
      icon: (
        <svg className="w-9 h-9 stroke-[#B8863D]" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Crossed artisan crafting tools */}
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          <path d="M4 4l5 5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="trust" className="py-10 sm:py-14 bg-[#FBF8F2] border-t border-b border-[#DFC493]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop 5-Column Grid with Vertical Gold Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-[#DFC493]/60">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center px-3 sm:px-4 py-2 group"
            >
              {/* Antique Gold Line Icon */}
              <div className="mb-3.5 p-2 rounded-full bg-[#FAF5EB] group-hover:bg-[#F3EBDD] transition-colors duration-200">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif-luxury text-xs sm:text-sm font-semibold tracking-wider text-[#25130A] uppercase max-w-[180px] leading-snug">
                {feature.title}
              </h3>

              {/* Muted Subtitle */}
              <p className="text-[11px] text-[#785947] mt-1 tracking-wide font-normal">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

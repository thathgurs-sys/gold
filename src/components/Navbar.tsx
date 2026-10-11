interface NavbarProps {
  onOpenBooking: () => void;
  onScrollTo: (id: string) => void;
}

export function Navbar({ onOpenBooking, onScrollTo }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF8F2]/95 backdrop-blur-md border-b border-[#DFC493]/35 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in luxury display serif) */}
        <button
          onClick={() => onScrollTo('hero')}
          className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B8863D]"
        >
          <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold tracking-wider text-[#2A160E] whitespace-nowrap shrink-0 group-hover:text-[#8C6226] transition-colors">
            Ganesh Jewellers
          </span>
        </button>

        {/* Zone 2: 4-5 Clean single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9 text-xs lg:text-sm font-medium tracking-widest uppercase text-[#54382B]"
        >
          <button
            onClick={() => onScrollTo('categories')}
            className="whitespace-nowrap shrink-0 hover:text-[#8C6226] transition-colors cursor-pointer py-1 border-b border-transparent hover:border-[#B8863D]"
          >
            Collections
          </button>
          <button
            onClick={() => onScrollTo('trust')}
            className="whitespace-nowrap shrink-0 hover:text-[#8C6226] transition-colors cursor-pointer py-1 border-b border-transparent hover:border-[#B8863D]"
          >
            Hallmark & Purity
          </button>
          <button
            onClick={() => onScrollTo('categories')}
            className="whitespace-nowrap shrink-0 hover:text-[#8C6226] transition-colors cursor-pointer py-1 border-b border-transparent hover:border-[#B8863D]"
          >
            Custom Craft
          </button>
          <button
            onClick={() => onScrollTo('visit')}
            className="whitespace-nowrap shrink-0 hover:text-[#8C6226] transition-colors cursor-pointer py-1 border-b border-transparent hover:border-[#B8863D]"
          >
            Visit Showroom
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#FBF8F2] bg-[#2A160E] hover:bg-[#402316] rounded-none border border-[#B8863D] shadow-sm hover:shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B8863D]"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
}

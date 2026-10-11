import { GaneshEmblem } from './GaneshEmblem';
import { FloralOrnament } from './FloralOrnament';
import { FiligreeFlourish } from './FiligreeFlourish';

interface HeroProps {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export function Hero({ onExploreClick, onBookClick }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-16 bg-[#FBF8F2]">
      {/* Top Left Delicate Floral Illustration */}
      <div className="absolute top-0 left-0 pointer-events-none select-none z-10 opacity-80 sm:opacity-90 max-w-[200px] sm:max-w-[280px] lg:max-w-[340px]">
        <FloralOrnament className="w-full h-auto drop-shadow-sm" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Lockup & Editorial Headline (55% desktop width) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left pt-6 sm:pt-4">
            
            {/* Ganesh Brand Emblem */}
            <div className="mb-2 flex items-center justify-center">
              <GaneshEmblem className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_2px_10px_rgba(184,134,61,0.2)]" />
            </div>

            {/* Wordmark: Ganesh */}
            <h1 className="font-serif-luxury text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-[#25130A] leading-none mb-1">
              Ganesh
            </h1>

            {/* Horizontal Gold Rule with JEWELLERS */}
            <div className="flex items-center justify-center lg:justify-start gap-4 my-2.5 w-full max-w-md">
              <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#C49F64] to-[#B8863D]" />
              <span className="font-serif-luxury text-lg sm:text-xl font-semibold tracking-[0.38em] text-[#2A160E] uppercase pl-1">
                Jewellers
              </span>
              <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#C49F64] to-[#B8863D]" />
            </div>

            {/* Subtitle: TRUSTED SINCE GENERATIONS */}
            <p className="text-xs sm:text-sm tracking-[0.3em] font-semibold text-[#664635] uppercase mb-8 sm:mb-10">
              Trusted Since Generations
            </p>

            {/* Editorial Two-Line Headline */}
            <div className="space-y-1 mb-6">
              <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.15] text-[#25130A] font-normal">
                Timeless <span className="font-serif-luxury italic text-[#996F2E] font-medium">Beauty.</span>
              </h2>
              <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.15] text-[#25130A] font-normal">
                Infinite <span className="font-serif-luxury italic text-[#996F2E] font-medium">Memories.</span>
              </h2>
            </div>

            {/* Supporting Description */}
            <p className="font-cormorant text-xl sm:text-2xl text-[#523A2C] max-w-xl font-normal leading-relaxed mb-4">
              Exquisite jewellery crafted to celebrate every precious moment.
            </p>

            {/* Delicate Gold Scroll Flourish Ornament */}
            <div className="flex items-center justify-center lg:justify-start my-2">
              <FiligreeFlourish className="w-36 h-6 sm:w-44 sm:h-7" />
            </div>

            {/* Interactive Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <button
                onClick={onExploreClick}
                className="px-7 py-3 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-[#25130A] hover:bg-[#3E2113] text-[#FBF8F2] border border-[#B8863D] shadow-[0_4px_14px_rgba(37,19,10,0.18)] hover:shadow-[0_6px_20px_rgba(184,134,61,0.25)] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B8863D]"
              >
                View 5 Master Collections
              </button>
              <button
                onClick={onBookClick}
                className="px-6 py-3 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-[#FAF5EB] hover:bg-[#F3EBDD] text-[#25130A] border border-[#C49F64] shadow-sm transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B8863D]"
              >
                Book VIP Viewing
              </button>
            </div>

          </div>

          {/* Right Column: High-Res Indian Bridal Portrait (45% desktop width) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Soft decorative golden backdrop glow */}
              <div className="absolute -inset-4 bg-radial from-[#DFB876]/20 via-[#B8863D]/5 to-transparent rounded-full filter blur-2xl pointer-events-none" />

              {/* Portrait Container with Soft Natural Blending */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_40px_-10px_rgba(42,22,14,0.18)] border border-[#DFC493]/60 bg-[#F5ECE0]">
                <img
                  src="/images/hero-bridal.jpg"
                  alt="Indian bride wearing Ganesh Jewellers traditional royal gold bridal jewelry set"
                  className="w-full h-auto object-cover object-top aspect-[3/4] transition-transform duration-700 hover:scale-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle luxury edge vignette */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#25130A]/20 via-transparent to-transparent" />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#DFC493]/40 rounded-2xl" />
              </div>

              {/* Floating Hallmark Authenticity Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-[#FBF8F2] border border-[#B8863D] shadow-lg py-2.5 px-4 rounded-none hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF3E5] border border-[#B8863D]/60 flex items-center justify-center text-[#B8863D]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#25130A]">BIS 916 Hallmarked</div>
                  <div className="text-[10px] text-[#785947]">22 Karat Pure Indian Gold</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { OrnamentalFlourishWing, CategoryFlourish } from './FiligreeFlourish';

interface CallToActionProps {
  onOpenBooking: () => void;
  onScrollToFooter: () => void;
}

export function CallToAction({ onOpenBooking, onScrollToFooter }: CallToActionProps) {
  return (
    <section id="visit" className="py-14 sm:py-20 bg-[#FBF8F2] relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Heading flanked by Ornamental Gold Flourishes */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-3">
          <OrnamentalFlourishWing className="w-8 sm:w-12 h-6 text-[#B8863D]" />
          
          <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.16em] uppercase text-[#25130A]">
            Visit Ganesh Jewellers Today
          </h2>

          <OrnamentalFlourishWing flip={true} className="w-8 sm:w-12 h-6 text-[#B8863D]" />
        </div>

        {/* Thin Gold Divider with Italic Subtitle */}
        <div className="flex items-center justify-center gap-4 my-2.5 max-w-lg mx-auto">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C49F64] to-[#B8863D]" />
          <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#8C6226] px-2 font-medium">
            Where Elegance Meets Purity
          </p>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C49F64] to-[#B8863D]" />
        </div>

        {/* Delicate Gold Flourish below the subtitle */}
        <div className="flex items-center justify-center mt-2 mb-6">
          <CategoryFlourish className="w-20 h-4 text-[#B8863D]" />
        </div>

        {/* Supporting description */}
        <p className="font-cormorant text-lg sm:text-xl text-[#523A2C] max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Experience the splendour of bespoke bridal suites, private viewing salons, and generational craftsmanship in an ambiance of timeless hospitality.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-[#25130A] hover:bg-[#3D2012] text-[#FBF8F2] border border-[#B8863D] shadow-md hover:shadow-lg transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B8863D]"
          >
            Schedule Showroom Visit
          </button>
          <button
            onClick={onScrollToFooter}
            className="px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-[#FAF5EB] hover:bg-[#F3EBDD] text-[#25130A] border border-[#C49F64] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B8863D]"
          >
            Showroom Directions & Hours
          </button>
        </div>

      </div>
    </section>
  );
}

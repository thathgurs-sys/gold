import { CategoryFlourish } from './FiligreeFlourish';

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  description: string;
  piecesCount: string;
  purity: string;
  craftsmanship: string;
  featuredWeight: string;
}

export const JEWELLERY_CATEGORIES: CategoryItem[] = [
  {
    id: 'necklaces',
    name: 'NECKLACES',
    image: '/images/necklaces.jpg',
    description: 'Regal bridal chokers, raani haars, and polki kundan necklace sets encrusted with certified gemstones and south sea pearls.',
    piecesCount: '80+ Exclusive Designs',
    purity: '22K (916 BIS Hallmarked) & Polki Diamond',
    craftsmanship: 'Handcrafted Jadau & Temple Filigree',
    featuredWeight: '35g – 180g',
  },
  {
    id: 'bangles',
    name: 'BANGLES',
    image: '/images/bangles.jpg',
    description: 'Timeless kadas, patlis, and ornate bridal bangles crafted in 22-karat gold with ruby and emerald gemstone accents.',
    piecesCount: '120+ Artisanal Pairs',
    purity: '22K Hallmarked Indian Yellow Gold',
    craftsmanship: 'Traditional Meenakari & Nakshi Embossing',
    featuredWeight: '20g – 65g per pair',
  },
  {
    id: 'rings',
    name: 'RINGS',
    image: '/images/rings.jpg',
    description: 'Statement royal cocktail rings featuring untreated Burmese rubies, uncut polki diamonds, and antique floral bezels.',
    piecesCount: '95+ Handpicked Pieces',
    purity: '22K Gold & Natural Uncut Gemstones',
    craftsmanship: 'Imperial Kundan Setting with Floral Halo',
    featuredWeight: '8g – 24g',
  },
  {
    id: 'earrings',
    name: 'EARRINGS',
    image: '/images/earrings.jpg',
    description: 'Architectural jhumkas, chandbalis, and temple drop earrings adorned with tiered pearls and ruby florets.',
    piecesCount: '110+ Signature Pairs',
    purity: '22K BIS Hallmarked Gold',
    craftsmanship: 'Traditional Filigree with Cluster Pearls',
    featuredWeight: '12g – 45g per pair',
  },
  {
    id: 'pendants',
    name: 'PENDANTS',
    image: '/images/pendants.jpg',
    description: 'Auspicious heritage mangalsutra pendants and emerald medallion lockets paired with delicate beaded chains.',
    piecesCount: '70+ Heritage Motifs',
    purity: '22K Gold & Natural Zambian Emeralds',
    craftsmanship: 'Fine Jaali Work & Enamel Inlay',
    featuredWeight: '10g – 32g',
  },
];

interface JewelleryCategoriesProps {
  onSelectCategory: (category: CategoryItem) => void;
}

export function JewelleryCategories({ onSelectCategory }: JewelleryCategoriesProps) {
  return (
    <section id="categories" className="py-12 sm:py-16 bg-[#FBF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs tracking-[0.3em] uppercase font-semibold text-[#8C6226]">
            Signature Collections
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#25130A] mt-1 mb-2 font-normal">
            Heritage Jewellery Categories
          </h2>
          <div className="w-16 h-[1.5px] bg-[#B8863D] mx-auto mt-2" />
        </div>

        {/* 5 Jewellery Category Panels in Exact Specified Order */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {JEWELLERY_CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="group cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-[#B8863D] rounded-t-[55px] sm:rounded-t-[75px] overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCategory(cat);
                }
              }}
              aria-label={`View ${cat.name} Collection`}
            >
              {/* Arched Top Image Container with Gold Border */}
              <div className="relative rounded-t-[55px] sm:rounded-t-[75px] overflow-hidden border-[1.5px] border-[#C49F64] border-b-0 bg-[#F4EFE6] shadow-[0_4px_16px_rgba(42,22,14,0.06)] group-hover:border-[#996F2E] group-hover:shadow-[0_8px_24px_rgba(184,134,61,0.22)] transition-all duration-300">
                
                {/* Image */}
                <div className="aspect-[3/4] w-full overflow-hidden bg-[#FAF6EE]">
                  <img
                    src={cat.image}
                    alt={`${cat.name} collection by Ganesh Jewellers`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    loading={index < 2 ? 'eager' : 'lazy'}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Subtle sheen highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick inspect hint badge */}
                <div className="absolute top-4 right-4 bg-[#25130A]/85 text-[#DFC493] text-[10px] tracking-widest uppercase px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
                  View Specs
                </div>
              </div>

              {/* Lower Ivory Label Strip with Gold Border and Flourish */}
              <div className="bg-[#FAF7F0] border-[1.5px] border-[#C49F64] border-t-0 p-3 sm:p-4 text-center transition-colors group-hover:bg-[#F5EEDF]">
                <h3 className="font-serif-luxury text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-[#25130A] group-hover:text-[#8C6226] transition-colors">
                  {cat.name}
                </h3>
                
                {/* Delicate Gold Flourish below the label */}
                <div className="flex items-center justify-center mt-1.5 mb-1">
                  <CategoryFlourish className="w-14 sm:w-16 h-3 text-[#B8863D]" />
                </div>

                <div className="text-[11px] text-[#6E4E3C] hidden sm:block font-medium">
                  {cat.piecesCount}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative footnote / custom consultation note */}
        <div className="mt-8 text-center text-xs text-[#7A5B49]">
          <span>Each ornament is individually hallmarked by the Bureau of Indian Standards (BIS). Custom bridal sets crafted upon consultation.</span>
        </div>

      </div>
    </section>
  );
}

import { CategoryItem } from './JewelleryCategories';
import { CategoryFlourish } from './FiligreeFlourish';

interface CategoryDetailModalProps {
  category: CategoryItem | null;
  onClose: () => void;
  onBookInquiry: (categoryName: string) => void;
}

export function CategoryDetailModal({ category, onClose, onBookInquiry }: CategoryDetailModalProps) {
  if (!category) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-category-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative bg-[#FBF8F2] border-[1.5px] border-[#B8863D] max-w-2xl w-full shadow-2xl rounded-none overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#FAF5EB] border-b border-[#DFC493] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6226]">
              Master Collection
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#6E4E3C] hover:text-[#25130A] p-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B8863D]"
            aria-label="Close dialog"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            
            {/* Arched Image Container */}
            <div className="rounded-t-[60px] overflow-hidden border-[1.5px] border-[#C49F64] shadow-md bg-[#F5ECE0] aspect-[3/4]">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Information */}
            <div className="space-y-4">
              <div>
                <h3 id="modal-category-title" className="font-serif-luxury text-2xl font-bold uppercase tracking-wider text-[#25130A]">
                  {category.name}
                </h3>
                <div className="mt-1">
                  <CategoryFlourish className="w-16 h-3 text-[#B8863D]" />
                </div>
              </div>

              <p className="text-sm text-[#54382B] leading-relaxed">
                {category.description}
              </p>

              {/* Specifications Box */}
              <div className="bg-[#FAF5EC] border border-[#DFC493]/70 p-3.5 space-y-2 text-xs">
                <div className="flex justify-between border-b border-[#DFC493]/30 pb-1.5">
                  <span className="text-[#7A5B49] font-medium">Standard Purity:</span>
                  <span className="text-[#25130A] font-semibold">{category.purity}</span>
                </div>
                <div className="flex justify-between border-b border-[#DFC493]/30 pb-1.5">
                  <span className="text-[#7A5B49] font-medium">Craft Technique:</span>
                  <span className="text-[#25130A] font-semibold">{category.craftsmanship}</span>
                </div>
                <div className="flex justify-between border-b border-[#DFC493]/30 pb-1.5">
                  <span className="text-[#7A5B49] font-medium">Weight Range:</span>
                  <span className="text-[#25130A] font-semibold">{category.featuredWeight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A5B49] font-medium">Certification:</span>
                  <span className="text-[#8C6226] font-semibold">100% BIS Hallmarked</span>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-[#F6EFE2] p-4 border border-[#DFC493]/60 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#B8863D] text-white flex items-center justify-center shrink-0 text-xs">
              ✓
            </div>
            <p className="text-xs text-[#523A2C]">
              Every piece in this category is customisable according to your preference of gold weight, gemstone selection, and budget.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF5EB] border-t border-[#DFC493] px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#6E4E3C] hover:text-[#25130A] cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookInquiry(category.name);
            }}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-widest bg-[#25130A] hover:bg-[#3D2012] text-[#FBF8F2] border border-[#B8863D] shadow-sm cursor-pointer"
          >
            Enquire For {category.name}
          </button>
        </div>

      </div>
    </div>
  );
}

import { useState } from 'react';

export function GoldRateTicker() {
  const [showRates, setShowRates] = useState(false);

  return (
    <div className="bg-[#25130A] text-[#DFC493] text-[11px] border-b border-[#8C6226]/40 py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: Assurance statement */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DFC493]" />
          <span className="font-medium tracking-wider uppercase text-[#E8DCCB]">
            BIS 916 Hallmark Certified Jewellery
          </span>
          <span className="hidden sm:inline text-[#8C6226]">|</span>
          <span className="hidden sm:inline text-[#C49F64]">
            Trusted Since Generations for Uncompromised Purity
          </span>
        </div>

        {/* Right: Indicative Purity Guide */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowRates(!showRates)}
            className="text-[11px] text-[#DFC493] hover:text-white underline underline-offset-2 cursor-pointer transition-colors"
          >
            {showRates ? 'Hide Purity Guide' : "Today's Hallmark Rates"}
          </button>
        </div>

      </div>

      {/* Expandable Rate Guide */}
      {showRates && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-[#8C6226]/30 grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-[11px] text-[#E8DCCB] animate-fade-in pb-1">
          <div className="bg-[#1C0E07] py-1 px-2 border border-[#8C6226]/30">
            <span className="text-[#DFC493] font-semibold">22 Karat (BIS 916):</span> ₹6,850 / gram
          </div>
          <div className="bg-[#1C0E07] py-1 px-2 border border-[#8C6226]/30">
            <span className="text-[#DFC493] font-semibold">24 Karat (999 Pure):</span> ₹7,470 / gram
          </div>
          <div className="bg-[#1C0E07] py-1 px-2 border border-[#8C6226]/30">
            <span className="text-[#DFC493] font-semibold">18 Karat (Diamond Jewellery):</span> ₹5,600 / gram
          </div>
        </div>
      )}
    </div>
  );
}

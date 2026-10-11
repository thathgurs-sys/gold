export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#1A0C06] text-[#F5ECE0] border-t border-[#8C6226]/50">
      
      {/* Primary 3-Group Strip Matching Reference */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-[#8C6226]/40 items-center text-center">
          
          {/* Group 1: Address */}
          <div className="flex items-center justify-center gap-3 px-4">
            <div className="w-8 h-8 rounded-full bg-[#2A160E] border border-[#8C6226]/60 flex items-center justify-center text-[#DFC493] shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
            </div>
            <address className="not-italic text-xs sm:text-sm font-medium tracking-wide text-[#E8DCCB] text-left">
              123, Main Road, Your City – 000000
            </address>
          </div>

          {/* Group 2: Phone */}
          <div className="flex items-center justify-center gap-3 px-4">
            <div className="w-8 h-8 rounded-full bg-[#2A160E] border border-[#8C6226]/60 flex items-center justify-center text-[#DFC493] shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <a
              href="tel:01234567890"
              className="text-xs sm:text-sm font-medium tracking-wider text-[#E8DCCB] hover:text-[#DFC493] transition-colors"
            >
              0123 456 7890
            </a>
          </div>

          {/* Group 3: Website */}
          <div className="flex items-center justify-center gap-3 px-4">
            <div className="w-8 h-8 rounded-full bg-[#2A160E] border border-[#8C6226]/60 flex items-center justify-center text-[#DFC493] shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <a
              href="https://www.ganeshjewellers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-medium tracking-wider text-[#E8DCCB] hover:text-[#DFC493] transition-colors"
            >
              www.ganeshjewellers.com
            </a>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Brand & Timings Bar */}
      <div className="border-t border-[#8C6226]/25 py-4 px-4 bg-[#140804] text-center text-[11px] text-[#A8947E] flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-2">
        <div>
          Showroom Timings: <span className="text-[#DFC493]">Mon – Sun: 10:30 AM – 8:30 PM</span> (Valet Parking Available)
        </div>
        <div>
          © {currentYear} Ganesh Jewellers. All Rights Reserved. Pure BIS 916 Hallmark.
        </div>
      </div>

    </footer>
  );
}

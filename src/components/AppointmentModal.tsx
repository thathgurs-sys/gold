import { useState, useEffect } from 'react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
}

export function AppointmentModal({ isOpen, onClose, preselectedCategory = '' }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (11:00 AM – 1:00 PM)',
    category: preselectedCategory || 'Bridal Jewellery Consultation',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preselectedCategory) {
      setFormData((prev) => ({ ...prev, category: preselectedCategory }));
    }
  }, [preselectedCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refNum = 'GJ-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refNum);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-[#FBF8F2] border-[1.5px] border-[#B8863D] max-w-lg w-full shadow-2xl rounded-none overflow-hidden z-10 max-h-[95vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#FAF5EB] border-b border-[#DFC493] px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C6226]">
              Private Viewing & Consultation
            </span>
            <h3 id="booking-modal-title" className="font-serif-luxury text-xl font-bold text-[#25130A]">
              Visit Ganesh Jewellers
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#6E4E3C] hover:text-[#25130A] p-1 cursor-pointer"
            aria-label="Close appointment modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-[#FAF5EB] border-2 border-[#B8863D] rounded-full mx-auto flex items-center justify-center text-[#B8863D]">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>

              <h4 className="font-serif-luxury text-2xl font-bold text-[#25130A]">
                Appointment Reserved
              </h4>

              <p className="text-sm text-[#523A2C]">
                Thank you, <span className="font-semibold text-[#25130A]">{formData.name}</span>. Your VIP consultation token has been generated:
              </p>

              <div className="inline-block bg-[#FAF5EB] border border-[#B8863D] px-5 py-2.5 font-mono text-base font-bold text-[#8C6226] tracking-wider">
                {bookingRef}
              </div>

              <div className="text-xs text-[#7A5B49] bg-[#F5ECE0] p-3 text-left space-y-1">
                <div><strong>Category:</strong> {formData.category}</div>
                <div><strong>Preferred Slot:</strong> {formData.timeSlot}</div>
                <div><strong>Contact:</strong> {formData.phone}</div>
                <div><strong>Showroom Address:</strong> 123, Main Road, Your City – 000000</div>
              </div>

              <p className="text-xs text-[#7A5B49] italic">
                Our Senior Jewellery Consultant will reach out at {formData.phone} to confirm your appointment time and bespoke preferences.
              </p>

              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#25130A] text-[#FBF8F2] hover:bg-[#3D2012] border border-[#B8863D] cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-[#523A2C] font-semibold mb-1" htmlFor="fullname">
                  Full Name *
                </label>
                <input
                  id="fullname"
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-[#C49F64] bg-[#FAF7F2] text-[#25130A] focus:outline-none focus:border-[#8C6226]"
                />
              </div>

              <div>
                <label className="block text-[#523A2C] font-semibold mb-1" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="e.g. 0123 456 7890"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-[#C49F64] bg-[#FAF7F2] text-[#25130A] focus:outline-none focus:border-[#8C6226]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#523A2C] font-semibold mb-1" htmlFor="date">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 border border-[#C49F64] bg-[#FAF7F2] text-[#25130A] focus:outline-none focus:border-[#8C6226]"
                  />
                </div>

                <div>
                  <label className="block text-[#523A2C] font-semibold mb-1" htmlFor="timeslot">
                    Preferred Slot
                  </label>
                  <select
                    id="timeslot"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 border border-[#C49F64] bg-[#FAF7F2] text-[#25130A] focus:outline-none focus:border-[#8C6226]"
                  >
                    <option value="Morning (11:00 AM – 1:00 PM)">Morning (11:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:30 PM – 4:30 PM)">Afternoon (1:30 PM – 4:30 PM)</option>
                    <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#523A2C] font-semibold mb-1" htmlFor="category">
                  Jewellery Collection of Interest
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-[#C49F64] bg-[#FAF7F2] text-[#25130A] focus:outline-none focus:border-[#8C6226]"
                >
                  <option value="Bridal Jewellery Consultation">Bridal Jewellery Consultation</option>
                  <option value="NECKLACES">Necklaces & Chokers</option>
                  <option value="BANGLES">Bangles & Kadas</option>
                  <option value="RINGS">Cocktail & Heritage Rings</option>
                  <option value="EARRINGS">Jhumkas & Earrings</option>
                  <option value="PENDANTS">Heritage Pendants & Mangalsutras</option>
                  <option value="Custom Heirloom Design">Custom Heirloom Design</option>
                </select>
              </div>

              <div>
                <label className="block text-[#523A2C] font-semibold mb-1" htmlFor="notes">
                  Special Notes / Custom Requirements
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  placeholder="e.g. Looking for a 22k antique bridal choker set with matching jhumkas"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 border border-[#C49F64] bg-[#FAF7F2] text-[#25130A] focus:outline-none focus:border-[#8C6226]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-[#25130A] hover:bg-[#3E2113] text-[#FBF8F2] border border-[#B8863D] shadow-md transition-all cursor-pointer"
                >
                  Confirm Showroom Reservation
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

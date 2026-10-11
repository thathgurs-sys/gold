/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { GoldRateTicker } from './components/GoldRateTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JewelleryCategories, CategoryItem } from './components/JewelleryCategories';
import { TrustFeatures } from './components/TrustFeatures';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { CategoryDetailModal } from './components/CategoryDetailModal';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingCategoryInterest, setBookingCategoryInterest] = useState('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (categoryName?: string) => {
    if (categoryName) {
      setBookingCategoryInterest(categoryName);
    } else {
      setBookingCategoryInterest('');
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F2] text-[#25130A]">
      {/* Indicative Purity & Hallmark Ticker */}
      <GoldRateTicker />

      {/* Top Navigation Bar adhering to Top Bar Contract */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onScrollTo={scrollToSection}
      />

      {/* Main Editorial Content reproducing the Reference Ad Layout */}
      <main className="flex-grow">
        {/* Hero Section: Brand Lockup, Ganesh Emblem, Two-Line Headline & Bridal Portrait */}
        <Hero
          onExploreClick={() => scrollToSection('categories')}
          onBookClick={() => handleOpenBooking('Bridal Jewellery')}
        />

        {/* 5 Jewellery Category Arched Cards */}
        <JewelleryCategories
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 5 Trust and Quality Features */}
        <TrustFeatures />

        {/* Centered Closing Call-To-Action */}
        <CallToAction
          onOpenBooking={() => handleOpenBooking()}
          onScrollToFooter={() => scrollToSection('contact')}
        />
      </main>

      {/* Dark Chocolate-Brown Footer Strip */}
      <Footer />

      {/* Interactive Category Details Modal */}
      <CategoryDetailModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onBookInquiry={(catName) => handleOpenBooking(catName)}
      />

      {/* VIP Viewing & Consultation Reservation Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedCategory={bookingCategoryInterest}
      />
    </div>
  );
}

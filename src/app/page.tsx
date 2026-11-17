"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import MenuSection from "@/components/MenuSection";
import YakitoriTheaterSection from "@/components/YakitoriTheaterSection";
import DiningExperiencesSection from "@/components/DiningExperiencesSection";
import DrinksSection from "@/components/DrinksSection";
import AwardsSection from "@/components/AwardsSection";
import CommunityWallSection from "@/components/CommunityWallSection";
import InstagramFeedSection from "@/components/InstagramFeedSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";

export default function HomePage() {
  const [reserveOpen, setReserveOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#0b0a09] text-[#f5efe6]">
        <Navbar onOpenReserve={() => setReserveOpen(true)} />
        <main className="flex-1">
          <HeroSection onOpenReserve={() => setReserveOpen(true)} />
          <ExperienceSection />
          <MenuSection />
          <YakitoriTheaterSection />
          <DiningExperiencesSection onOpenReserve={() => setReserveOpen(true)} />
          <DrinksSection />
          <AwardsSection />
          <CommunityWallSection />
          <InstagramFeedSection />
          <LocationSection />
        </main>
        <Footer />
        <ReservationModal
          isOpen={reserveOpen}
          onClose={() => setReserveOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}

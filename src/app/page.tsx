"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { ArticlesProvider } from "@/context/ArticlesContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import ExperienceSection from "@/components/ExperienceSection";
import DiningExperiencesSection from "@/components/DiningExperiencesSection";
import DrinksSection from "@/components/DrinksSection";
import JournalSection from "@/components/JournalSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";

export default function HomePage() {
  const [reserveOpen, setReserveOpen] = useState(false);

  return (
    <LanguageProvider>
      <ArticlesProvider>
        <div className="min-h-screen flex flex-col bg-[#F2E9D9] text-[#171717]">
          <Navbar onOpenReserve={() => setReserveOpen(true)} />
          <main className="flex-1">
            <HeroSection onOpenReserve={() => setReserveOpen(true)} />
            <MenuSection />
            <ExperienceSection />
            <DiningExperiencesSection onOpenReserve={() => setReserveOpen(true)} />
            <DrinksSection />
            <JournalSection />
            <LocationSection />
          </main>
          <Footer />
          <ReservationModal
            isOpen={reserveOpen}
            onClose={() => setReserveOpen(false)}
          />
        </div>
      </ArticlesProvider>
    </LanguageProvider>
  );
}

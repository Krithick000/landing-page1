"use client";
import ComingSoonSection from "@/components/CommingSoon";
import FeaturesSection from "@/components/FeaturesSelection";
import FinalCTA from "@/components/FinalCTA";
import HeroSection from "@/components/HeroSection";
import HumanTouchSection from "@/components/HumanTouch";
import IntroSection from "@/components/IntroSection";
import PricingCallout from "@/components/PricingCallout";
import ReminderSection from "@/components/ReminderSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import Image from "next/image";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  const handleJoinWaitlist = () => {
    setShowWaitlistModal(true);
  };
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation onJoinWaitlist={handleJoinWaitlist} />
      <HeroSection onJoinWaitlist={handleJoinWaitlist} />
      <IntroSection />
      <FeaturesSection />
      <PricingCallout />
      <ComingSoonSection />
      <HumanTouchSection />
      <ReminderSection />
      <FinalCTA onJoinWaitlist={handleJoinWaitlist} />
      <Footer />
      <WaitlistModal
        isOpen={showWaitlistModal}
        onClose={() => setShowWaitlistModal(false)}
      />
      <Toaster />
    </div>
  );
}

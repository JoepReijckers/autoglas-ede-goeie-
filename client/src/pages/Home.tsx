/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive
 * Main home page assembling all sections
 * Dark theme, blue accents, Outfit + DM Sans typography
 * Mascot Dennis appears throughout the page as scroll-triggered pop-ups
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import AdasSection from "@/components/AdasSection";
import InsuranceSection from "@/components/InsuranceSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import CtaBanner from "@/components/CtaBanner";
import PartnerSection from "@/components/PartnerSection";
import FaqSection from "@/components/FaqSection";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";
import { InitialLoader } from "@/components/MascotLoader";
import MascotPopup, { FloatingMascot } from "@/components/MascotPopup";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mascot loading screen on initial page load */}
      <InitialLoader />

      {/* Floating mascot in corner (appears after scrolling) */}
      <FloatingMascot />

      <Navbar />
      <HeroSection />
      
      <ServicesSection />
      
      {/* Mascot pops up after services section */}
      <MascotPopup
        message="Wij fixen het! 💪"
        direction="right"
        delay={0.2}
      />
      
      <ProcessSection />
      <AdasSection />
      
      {/* Mascot pops up near insurance section */}
      <MascotPopup
        message="Eigen risico vanaf €0!"
        direction="left"
        delay={0.3}
      />
      
      <InsuranceSection />
      <AboutSection />
      <ReviewsSection />
      
      {/* Mascot with van pops up at CTA */}
      <MascotPopup
        message="Wij komen ook bij u! 🚐"
        direction="bottom-right"
        delay={0.2}
        variant="van"
      />
      
      <CtaBanner />
      <PartnerSection />
      <FaqSection />
      
      {/* Mascot pops up near appointment section */}
      <MascotPopup
        message="Plan nu uw afspraak!"
        direction="left"
        delay={0.3}
      />
      
      <AppointmentSection />
      <Footer />
    </div>
  );
}

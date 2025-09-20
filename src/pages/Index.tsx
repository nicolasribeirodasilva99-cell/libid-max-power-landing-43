import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { LeadSection } from "@/components/LeadSection";
import { TestimonialsCarouselSection } from "@/components/TestimonialsCarouselSection";
import { PitchSection } from "@/components/PitchSection";
import { HowToUseSection } from "@/components/HowToUseSection";
import { TestimonialsSimpleSection } from "@/components/TestimonialsSimpleSection";
import { OfferCards } from "@/components/OfferCards";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { AgreementSection } from "@/components/AgreementSection";
import { SafetySection } from "@/components/SafetySection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SocialProofPopup } from "@/components/SocialProofPopup";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <LeadSection />
      <TestimonialsCarouselSection />
      <PitchSection />
      <HowToUseSection />
      <OfferCards />
      <AgreementSection />
      <SafetySection />
      
      {/* CTA Flutuante */}
      <div className="sticky bottom-2 z-50 px-2 sm:px-4">
        <div className="container mx-auto max-w-md sm:max-w-full">
          <CTAButton 
            variant="cta" 
            size="lg" 
            className="w-full shadow-2xl animate-glow hover-lift"
            onClick={scrollToTop}
          />
        </div>
      </div>
      
      <FAQSection />
      <Footer />
      
      {/* Popup de Prova Social */}
      <SocialProofPopup />
    </div>
  );
};

export default Index;

"use client";

import React, { useState } from "react";
import { HeaderNav } from "./HeaderNav";
import { HeroSection } from "./HeroSection";
import { TrustLogoMarquee } from "./TrustLogoMarquee";
import { ServicesSection } from "./ServicesSection";
import { PricingSection } from "./PricingSection";
import { BrochureSection } from "./BrochureSection";
import { FaqSection } from "./FaqSection";
import { RoadmapSection } from "./RoadmapSection";
import { ContactSection } from "./ContactSection";
import { SocialChannelsSection } from "./SocialChannelsSection";
import { Footer } from "./Footer";
import { ServicesDrawer } from "./ServicesDrawer";
import { AuditModal } from "./AuditModal";
import { RegisterBrandModal } from "./RegisterBrandModal";
import { ChatbotWidget } from "./ChatbotWidget";

export interface TekhportalLandingProps {
  initialService?: string;
}

export const TekhportalLanding: React.FC<TekhportalLandingProps> = ({
  initialService = "Search Engine Optimization (SEO)"
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [selectedAuditService, setSelectedAuditService] = useState(initialService);
  
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedRegisterPackage, setSelectedRegisterPackage] = useState("Complete 360° Growth Package");

  const handleOpenAuditWithService = (serviceName: string) => {
    setSelectedAuditService(serviceName);
    setIsAuditOpen(true);
  };

  const handleOpenRegister = (packageName: string = "Complete 360° Growth Package") => {
    setSelectedRegisterPackage(packageName);
    setIsRegisterOpen(true);
  };

  return (
    <div id="top" className="min-h-screen bg-[#edf5ef] text-[#131f1c] font-sans antialiased">
      {/* 1. Header Navigation - Sticky on top with big logo */}
      <HeaderNav
        onOpenAudit={() => handleOpenAuditWithService("Search Engine Optimization (SEO)")}
        onOpenServices={() => setIsServicesOpen(true)}
      />

      {/* 2. Hero Section - Soft grid lines & services search bar */}
      <HeroSection
        onOpenAudit={(service) =>
          handleOpenAuditWithService(service || "Complete 360° Growth Package")
        }
        onOpenServices={() => setIsServicesOpen(true)}
        onSelectService={(serviceTitle) =>
          handleOpenAuditWithService(serviceTitle)
        }
      />

      {/* 3. Dark Forest Green Trust / Clients Marquee Banner */}
      <TrustLogoMarquee
        onOpenRegisterModal={() => handleOpenRegister("Complete 360° Growth Package")}
      />

      {/* 4. Complete 12 Tekhportal Services Matrix (Below Hero) */}
      <ServicesSection
        onSelectServiceForAudit={(serviceTitle) =>
          handleOpenAuditWithService(serviceTitle)
        }
      />

      {/* 5. Pricing & Growth Packages Section */}
      <PricingSection
        onSelectPlan={(planName) => handleOpenRegister(planName)}
      />

      {/* 6. Official PDF Brochure Section */}
      <BrochureSection />

      {/* 7. FAQ Section (Below Brochure Section) */}
      <FaqSection
        onOpenAudit={() => handleOpenAuditWithService("Digital Marketing Consultation")}
      />

      {/* 8. Premium Animated Client Roadmap / How We Work (Below FAQ) */}
      <RoadmapSection
        onOpenAudit={() => handleOpenAuditWithService("Roadmap Stage 01 Discussion")}
      />

      {/* 9. Interactive Strategy Consultation & Contact Form */}
      <ContactSection />

      {/* 10. Official Social Media Channels Strip */}
      <SocialChannelsSection />

      {/* 11. Authority Forest Green Footer */}
      <Footer
        onOpenAudit={() => handleOpenAuditWithService("General Inquiry")}
        onOpenServices={() => setIsServicesOpen(true)}
      />

      {/* Green 3D Animated BotAvatar Floating Icon */}
      <ChatbotWidget
        onOpenAudit={() => handleOpenAuditWithService("Register Brand")}
      />

      {/* Modals & Drawers */}
      <ServicesDrawer
        isOpen={isServicesOpen}
        onClose={() => setIsServicesOpen(false)}
        onSelectServiceForAudit={(serviceTitle) => {
          handleOpenAuditWithService(serviceTitle);
        }}
      />

      <AuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        defaultService={selectedAuditService}
      />

      <RegisterBrandModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultPackage={selectedRegisterPackage}
      />
    </div>
  );
};

export default TekhportalLanding;

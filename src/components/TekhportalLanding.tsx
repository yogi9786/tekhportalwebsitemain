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
  onNavigateToService?: (serviceSlug: string) => void;
}

export const TekhportalLanding: React.FC<TekhportalLandingProps> = ({
  initialService = "Search Engine Optimization (SEO)",
  onNavigateToService
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
    <div id="top" className="min-h-screen bg-[#edf5ef] text-[#131f1c] font-sans antialiased relative">
      {/* 1. Sticky Floating Header Navigation */}
      <HeaderNav
        onOpenAudit={() => handleOpenAuditWithService("Search Engine Optimization (SEO)")}
        onOpenServices={() => setIsServicesOpen(true)}
        onNavigateToService={onNavigateToService}
      />

      {/* 2. Hero Section */}
      <HeroSection
        onOpenAudit={(service) =>
          handleOpenAuditWithService(service || "Complete 360° Growth Package")
        }
        onOpenServices={() => setIsServicesOpen(true)}
        onSelectService={(serviceTitle) => {
          if (onNavigateToService) {
            // Find slug if possible or fallback to audit
            onNavigateToService(serviceTitle);
          } else {
            handleOpenAuditWithService(serviceTitle);
          }
        }}
        onNavigateToService={onNavigateToService}
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
        onNavigateToService={onNavigateToService}
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
        onNavigateToService={onNavigateToService}
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
        onNavigateToService={onNavigateToService}
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

import React, { useState } from "react";
import type { DetailedServiceData } from "../../types/serviceDetail";
import { DETAILED_SERVICES } from "../../data/servicesDetailedData";
import { RegisterBrandModal } from "../RegisterBrandModal";
import { Footer } from "../Footer";
import { ServiceHeaderNav } from "./ServiceHeaderNav";
import { ServiceHero } from "./ServiceHero";
import { ServiceMediaShowcase } from "./ServiceMediaShowcase";
import { ServiceDeliverablesGrid } from "./ServiceDeliverablesGrid";
import { ServiceContactCta } from "./ServiceContactCta";

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigateHome: () => void;
  onNavigateService: (serviceSlug: string) => void;
  onOpenRegisterWithPackage?: (packageName: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onNavigateHome,
  onNavigateService,
  onOpenRegisterWithPackage
}) => {
  const service: DetailedServiceData = DETAILED_SERVICES[serviceId] || DETAILED_SERVICES["seo"]!;
  
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenRegister = () => {
    if (onOpenRegisterWithPackage) {
      onOpenRegisterWithPackage(`${service.title} Package`);
    } else {
      setIsRegisterModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#edf5ef] text-[#131f1c] font-sans antialiased relative selection:bg-[#10b981] selection:text-[#07382c]">
      
      {/* STICKY TOP NAVIGATION BAR & SERVICE SWITCHER */}
      <ServiceHeaderNav
        currentServiceId={service.id}
        currentServiceTitle={service.shortTitle || service.title}
        onNavigateHome={onNavigateHome}
        onNavigateService={onNavigateService}
        onOpenRegister={handleOpenRegister}
      />

      {/* ─────────────────────────────────────────────────────────────────────────
          SECTION 1: DEDICATED SERVICE HERO (SHORT TITLE & CLEAN METRICS)
      ───────────────────────────────────────────────────────────────────────── */}
      <ServiceHero
        service={service}
        onOpenRegister={handleOpenRegister}
      />

      {/* ─────────────────────────────────────────────────────────────────────────
          SECTION 2: STRUCTURED PROOF OF WORK & VISUAL EVIDENCE (VIDEO & IMAGES)
      ───────────────────────────────────────────────────────────────────────── */}
      <ServiceMediaShowcase
        videoProof={service.videoProof}
        imageProofs={service.imageProofs}
        serviceTitle={service.shortTitle || service.title}
        onOpenRegister={handleOpenRegister}
      />

      {/* ─────────────────────────────────────────────────────────────────────────
          SECTION 3: WHAT WE DELIVER (SCOPE & KEY OUTPUTS)
      ───────────────────────────────────────────────────────────────────────── */}
      <ServiceDeliverablesGrid
        deliverables={service.deliverables}
        serviceTitle={service.shortTitle || service.title}
      />

      {/* ─────────────────────────────────────────────────────────────────────────
          SECTION 4: STRATEGY & REGISTRATION CTA
      ───────────────────────────────────────────────────────────────────────── */}
      <ServiceContactCta
        serviceTitle={service.shortTitle || service.title}
        onOpenRegister={handleOpenRegister}
      />

      {/* FOOTER */}
      <Footer
        onOpenAudit={handleOpenRegister}
        onOpenServices={onNavigateHome}
      />

      {/* REGISTER BRAND MODAL (PRE-FILLED WITH THIS SERVICE) */}
      <RegisterBrandModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        defaultPackage={`${service.title} Package`}
      />

    </div>
  );
};

export default ServiceDetailPage;

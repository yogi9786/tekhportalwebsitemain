import React from "react";
import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";

export interface ServicePageProps {
  onNavigateHome: () => void;
  onNavigateService: (slug: string) => void;
  onOpenRegisterWithPackage?: (packageName: string) => void;
}

export const SeoPage: React.FC<ServicePageProps> = (props) => {
  return <ServiceDetailPage serviceId="seo" {...props} />;
};

export default SeoPage;

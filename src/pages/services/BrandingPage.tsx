import React from "react";
import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import type { ServicePageProps } from "./SeoPage";

export const BrandingPage: React.FC<ServicePageProps> = (props) => {
  return <ServiceDetailPage serviceId="branding" {...props} />;
};

export default BrandingPage;

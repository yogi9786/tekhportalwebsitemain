import React from "react";
import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import type { ServicePageProps } from "./SeoPage";

export const PpcPage: React.FC<ServicePageProps> = (props) => {
  return <ServiceDetailPage serviceId="ppc" {...props} />;
};

export default PpcPage;

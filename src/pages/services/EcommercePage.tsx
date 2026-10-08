import React from "react";
import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import type { ServicePageProps } from "./SeoPage";

export const EcommercePage: React.FC<ServicePageProps> = (props) => {
  return <ServiceDetailPage serviceId="ecommerce" {...props} />;
};

export default EcommercePage;

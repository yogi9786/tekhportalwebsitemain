import React from "react";
import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import type { ServicePageProps } from "./SeoPage";

export const LeadGenPage: React.FC<ServicePageProps> = (props) => {
  return <ServiceDetailPage serviceId="lead-generation" {...props} />;
};

export default LeadGenPage;

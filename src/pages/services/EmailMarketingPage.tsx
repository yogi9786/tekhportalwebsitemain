import React from "react";
import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import type { ServicePageProps } from "./SeoPage";

export const EmailMarketingPage: React.FC<ServicePageProps> = (props) => {
  return <ServiceDetailPage serviceId="email-marketing" {...props} />;
};

export default EmailMarketingPage;

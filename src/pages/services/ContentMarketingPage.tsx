import React from "react";
import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import type { ServicePageProps } from "./SeoPage";

export const ContentMarketingPage: React.FC<ServicePageProps> = (props) => {
  return <ServiceDetailPage serviceId="content" {...props} />;
};

export default ContentMarketingPage;

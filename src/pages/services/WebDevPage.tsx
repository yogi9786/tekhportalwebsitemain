import React from "react";
import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import type { ServicePageProps } from "./SeoPage";

export const WebDevPage: React.FC<ServicePageProps> = (props) => {
  return <ServiceDetailPage serviceId="web-dev" {...props} />;
};

export default WebDevPage;

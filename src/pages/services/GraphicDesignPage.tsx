import React from "react";
import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import type { ServicePageProps } from "./SeoPage";

export const GraphicDesignPage: React.FC<ServicePageProps> = (props) => {
  return <ServiceDetailPage serviceId="graphic-design" {...props} />;
};

export default GraphicDesignPage;

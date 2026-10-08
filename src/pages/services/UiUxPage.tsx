import React from "react";
import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import type { ServicePageProps } from "./SeoPage";

export const UiUxPage: React.FC<ServicePageProps> = (props) => {
  return <ServiceDetailPage serviceId="ui-ux" {...props} />;
};

export default UiUxPage;

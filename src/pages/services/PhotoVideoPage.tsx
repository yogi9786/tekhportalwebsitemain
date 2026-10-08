import React from "react";
import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import type { ServicePageProps } from "./SeoPage";

export const PhotoVideoPage: React.FC<ServicePageProps> = (props) => {
  return <ServiceDetailPage serviceId="photo-video" {...props} />;
};

export default PhotoVideoPage;

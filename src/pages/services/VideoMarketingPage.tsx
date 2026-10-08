import React from "react";
import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import type { ServicePageProps } from "./SeoPage";

export const VideoMarketingPage: React.FC<ServicePageProps> = (props) => {
  return <ServiceDetailPage serviceId="video-marketing" {...props} />;
};

export default VideoMarketingPage;

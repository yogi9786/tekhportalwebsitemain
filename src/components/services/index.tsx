import React from "react";
import { ServiceDetailPage } from "./ServiceDetailPage";

export interface IndividualServicePageProps {
  onNavigateHome: () => void;
  onNavigateService: (slug: string) => void;
  onOpenRegisterWithPackage?: (packageName: string) => void;
}

export const SeoServicePage: React.FC<IndividualServicePageProps> = (props) => (
  <ServiceDetailPage serviceId="seo" {...props} />
);

export const PpcServicePage: React.FC<IndividualServicePageProps> = (props) => (
  <ServiceDetailPage serviceId="ppc" {...props} />
);

export const WebDevServicePage: React.FC<IndividualServicePageProps> = (props) => (
  <ServiceDetailPage serviceId="web-dev" {...props} />
);

export const ContentServicePage: React.FC<IndividualServicePageProps> = (props) => (
  <ServiceDetailPage serviceId="content" {...props} />
);

export const GraphicDesignServicePage: React.FC<IndividualServicePageProps> = (props) => (
  <ServiceDetailPage serviceId="graphic-design" {...props} />
);

export const VideoMarketingServicePage: React.FC<IndividualServicePageProps> = (props) => (
  <ServiceDetailPage serviceId="video-marketing" {...props} />
);

export const EmailMarketingServicePage: React.FC<IndividualServicePageProps> = (props) => (
  <ServiceDetailPage serviceId="email-marketing" {...props} />
);

export const LeadGenServicePage: React.FC<IndividualServicePageProps> = (props) => (
  <ServiceDetailPage serviceId="lead-generation" {...props} />
);

export const BrandingServicePage: React.FC<IndividualServicePageProps> = (props) => (
  <ServiceDetailPage serviceId="branding" {...props} />
);

export const EcommerceServicePage: React.FC<IndividualServicePageProps> = (props) => (
  <ServiceDetailPage serviceId="ecommerce" {...props} />
);

export const UiUxServicePage: React.FC<IndividualServicePageProps> = (props) => (
  <ServiceDetailPage serviceId="ui-ux" {...props} />
);

export const PhotoVideoServicePage: React.FC<IndividualServicePageProps> = (props) => (
  <ServiceDetailPage serviceId="photo-video" {...props} />
);

export { ServiceDetailPage } from "./ServiceDetailPage";

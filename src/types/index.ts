export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  kicker: string;
  description: string;
  link: string;
  subServices: string[];
  metrics?: string;
  tag: string;
  badge?: string;
  accentColor: string;
}

export interface ClientProof {
  id: string;
  name: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
  avatar: string;
  verified?: boolean;
}

export interface HeroArtCardData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  metric: string;
  image: string;
  className: string;
  lightLogo?: boolean;
}

export interface PartnerBrand {
  name: string;
  symbol?: string;
  category: string;
}

export interface ClientBrand {
  id: string;
  name: string;
  category: string;
  tagline?: string;
  accent?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

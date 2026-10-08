export interface ServiceVideoProof {
  title: string;
  duration: string;
  videoType: string;
  thumbnailUrl: string;
  caption: string;
  highlights: {
    time: string;
    label: string;
  }[];
  placeholderNote: string;
  videoUrl?: string;
}

export interface ServiceImageProof {
  id: string;
  title: string;
  category: string;
  metricBadge: string;
  description: string;
  imageUrl: string;
  slotType:
    | "Live Performance Telemetry"
    | "Architecture & Code Specification"
    | "UI & UX Design System"
    | "Campaign Deliverable"
    | "High-Resolution Output"
    | "Conversion Funnel"
    | "ROAS & Revenue Dashboard";
}

export interface ServiceDeliverable {
  title: string;
  description: string;
  iconName: string;
  checkpoints: string[];
}

export interface ServiceProcessStep {
  stepNumber: string;
  title: string;
  duration: string;
  description: string;
  keyOutputs: string[];
}

export interface ServiceCodeSnippet {
  language: string;
  filename: string;
  title: string;
  description: string;
  code: string;
  highlights: string[];
}

export interface DetailedServiceData {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  kicker: string;
  heroHeadline: string;
  heroHighlightWord: string;
  tagline: string;
  description: string;
  accentColor: string;
  badge?: string;
  tag: string;
  primaryStat: {
    value: string;
    label: string;
    sublabel: string;
  };
  keyStats: {
    value: string;
    label: string;
  }[];
  codeSnippet: ServiceCodeSnippet;
  videoProof: ServiceVideoProof;
  imageProofs: ServiceImageProof[];
  deliverables: ServiceDeliverable[];
  processSteps: ServiceProcessStep[];
  techStack: {
    name: string;
    category: string;
  }[];
  externalUrl: string;
  recommendedPlanId: string;
}

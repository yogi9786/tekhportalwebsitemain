import type { ServiceItem, ClientProof, HeroArtCardData, PartnerBrand, ClientBrand, PricingPlan } from '../types';

export const CLIENT_BRANDS: ClientBrand[] = [
  { id: "sirisamruddhi", name: "SiriSamruddhi Gold Palace", category: "Jewellery & Luxury Retail", tagline: "Fine Gold & Diamonds" },
  { id: "bharathvasi", name: "Bharathvasi Properties", category: "Real Estate & Development", tagline: "Prime Living Spaces" },
  { id: "gembikes", name: "Gembikes", category: "EV & Smart Mobility", tagline: "Next-Gen Two-Wheelers" },
  { id: "incredebles", name: "Incredebles", category: "Consumer Brands & Tech", tagline: "Innovative Lifestyle" },
  { id: "varahi", name: "Varahi", category: "Traditional Silks & Couture", tagline: "Timeless Heritage" },
  { id: "chithrasante", name: "Chithrasante", category: "Art & Cultural Marketplace", tagline: "Creative Community" },
  { id: "just-shop", name: "Just Shop", category: "E-Commerce & Retail", tagline: "Multi-Brand Store" },
  { id: "telecom-housing", name: "Telecom Housing Welfare Trust", category: "Community Infrastructure", tagline: "Housing & Welfare" }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "For brands just getting started",
    price: "₹25,000",
    period: "per month",
    features: [
      "Brand Identity Design",
      "Social Media Graphics",
      "Basic Website Design",
      "Content Strategy",
      "Basic SEO Setup",
      "Monthly Consultation"
    ],
    ctaText: "Get Started",
    ctaLink: "https://tekhportal.com/#contact"
  },
  {
    id: "turbo",
    name: "Turbo",
    subtitle: "For brands ready to accelerate",
    price: "₹55,000",
    period: "per month",
    badge: "Most Popular",
    popular: true,
    features: [
      "Complete Brand Suite",
      "Social Media Management",
      "Full Website Development",
      "Content Creation & Marketing",
      "SEO & Analytics",
      "Paid Ads Management",
      "Video Editing (Short-form)",
      "Bi-weekly Strategy Sessions",
      "Lead Generation Campaigns"
    ],
    ctaText: "Start Growing",
    ctaLink: "https://tekhportal.com/#contact"
  },
  {
    id: "supersonic",
    name: "Supersonic",
    subtitle: "Premium, fully custom solution",
    price: "Custom",
    period: "Tailored to your needs",
    features: [
      "Everything in Turbo",
      "Advanced SEO & Performance",
      "Video Production & Photography",
      "Creative Design & Ad Creatives",
      "Branding & Rebranding Strategy",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Quarterly Brand Audits",
      "Custom Marketing Automation"
    ],
    ctaText: "Request Quote",
    ctaLink: "https://tekhportal.com/#contact"
  }
];

export const TEKHPORTAL_SERVICES: ServiceItem[] = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO & Rankings",
    kicker: "Organic Visibility",
    description:
      "Dominate high-intent Google rankings with full-spectrum technical SEO, data-backed keyword strategy, and local search supremacy.",
    link: "https://tekhportal.com/seo-services-in-yelahanka-bengaluru/",
    subServices: [
      "Website SEO audit",
      "Keyword research & mapping",
      "On-page SEO optimization",
      "Technical SEO & schema markup",
      "Local SEO (Google Business Profile)",
      "SEO content writing",
      "Competitor gap analysis"
    ],
    metrics: "+420% Organic Search Surge",
    tag: "Search Engine",
    badge: "High Intent",
    accentColor: "#9ac776"
  },
  {
    id: "ppc",
    title: "Paid Advertising (PPC)",
    shortTitle: "PPC & Paid Ads",
    kicker: "ROAS Focused",
    description:
      "High-converting paid media campaigns across Google, Meta, and YouTube with laser precision, AI audience targeting, and ROAS optimization.",
    link: "https://tekhportal.com/paid-advertising-in-yelahanka-bengaluru/",
    subServices: [
      "Google Ads (Search & Display)",
      "YouTube Video & Shorts Ads",
      "Facebook & Instagram Ads",
      "WhatsApp Direct-to-Chat Ads"
    ],
    metrics: "4.8x Average Return on Ad Spend",
    tag: "Paid Media",
    badge: "Google Partner",
    accentColor: "#ff9b5c"
  },
  {
    id: "web-dev",
    title: "Website Design & Development",
    shortTitle: "Web Development",
    kicker: "Lightning Fast",
    description:
      "Ultra-modern, conversion-engineered digital platforms built with modern tech stacks, headless CMS, and responsive UX architectures.",
    link: "https://tekhportal.com/website-development-service-in-yelahanka-bangalore/",
    subServices: [
      "Business website design",
      "High-converting landing pages",
      "Custom WordPress development",
      "E-commerce storefronts",
      "Website redesign & UX audit",
      "Website speed optimization",
      "UI/UX interaction design"
    ],
    metrics: "98+ PageSpeed & Core Web Vitals",
    tag: "Engineering",
    badge: "Next.js / WordPress",
    accentColor: "#60a5fa"
  },
  {
    id: "content",
    title: "Content Marketing",
    shortTitle: "Content Strategy",
    kicker: "Authority & Reach",
    description:
      "Compelling, research-backed narratives and editorial strategy that build market authority, educate prospects, and drive organic conversions.",
    link: "https://tekhportal.com/content-marketing/",
    subServices: [
      "Industry blog writing",
      "Website & landing page copy",
      "SEO content clusters",
      "Sales copywriting",
      "Thought leadership articles",
      "Comprehensive content strategy",
      "Editorial marketing roadmaps"
    ],
    metrics: "3.2x Lead-to-Sale Velocity",
    tag: "Editorial",
    accentColor: "#f472b6"
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Creatives",
    shortTitle: "Graphic Design",
    kicker: "Visual Identity",
    description:
      "Magnetic brand assets, scroll-stopping social creatives, and unified design systems tailored to stand out across all digital touchpoints.",
    link: "https://tekhportal.com/graphic-design-service-in-yelahanka-bengaluru/",
    subServices: [
      "Social media post designs",
      "Digital posters & banners",
      "Logo & brand mark design",
      "Complete brand identity systems",
      "Corporate brochures & decks",
      "High-CTR ad creatives",
      "Data-rich infographics"
    ],
    metrics: "+68% Higher Click-Through Rates",
    tag: "Creative",
    accentColor: "#a78bfa"
  },
  {
    id: "video-marketing",
    title: "Video Marketing & Reels",
    shortTitle: "Video Production",
    kicker: "Viral Motion",
    description:
      "Dynamic short-form reels, high-production commercial edits, motion graphics, and cinematic video ads that captivate attention instantly.",
    link: "https://tekhportal.com/video-marketing-service-in-yelahanka-bengaluru/",
    subServices: [
      "Instagram reels & TikTok editing",
      "YouTube long-form video editing",
      "Brand promotional videos",
      "Product showcase videos",
      "2D/3D motion graphics",
      "High-impact video ad creatives"
    ],
    metrics: "12.5M+ Video Views Generated",
    tag: "Motion",
    accentColor: "#f87171"
  },
  {
    id: "email-marketing",
    title: "Email Marketing & Automation",
    shortTitle: "Email & CRM",
    kicker: "Lifecycle Growth",
    description:
      "Automated customer journeys, intelligent retention flows, and segmented email newsletters that maximize customer lifetime value.",
    link: "https://tekhportal.com/email-marketing-service-in-yelahanka-bengaluru/",
    subServices: [
      "Email campaign setup & strategy",
      "Custom responsive newsletter design",
      "Behavioral automation & drip flows",
      "Lead nurturing sequences",
      "CRM & ESP integration"
    ],
    metrics: "42.8% Average Open Rate",
    tag: "Retention",
    accentColor: "#34d399"
  },
  {
    id: "lead-generation",
    title: "Lead Generation & Funnels",
    shortTitle: "Lead Generation",
    kicker: "B2B & B2C Pipeline",
    description:
      "End-to-end customer acquisition engines combining high-converting sales funnels, WhatsApp automations, and targeted qualification workflows.",
    link: "https://tekhportal.com/lead-generation-service-in-yelahanka-bengaluru/",
    subServices: [
      "B2B targeted lead generation",
      "Conversion-optimized landing pages",
      "Multi-step sales funnel building",
      "Automated WhatsApp marketing",
      "Inbound pipeline qualification"
    ],
    metrics: "+180k Qualified Inquiries",
    tag: "Acquisition",
    badge: "High Growth",
    accentColor: "#fbbf24"
  },
  {
    id: "branding",
    title: "Branding & Strategic Identity",
    shortTitle: "Brand Identity",
    kicker: "Market Positioning",
    description:
      "Crafting unmistakable brand personas, distinctive color architectures, typography rules, and strategic market positioning.",
    link: "https://tekhportal.com/branding-services-in-yelahanka-bengaluru/",
    subServices: [
      "Brand strategy & positioning",
      "Brand identity & style direction",
      "Logo suite & color palette",
      "Complete brand guidelines book"
    ],
    metrics: "Top-Tier Brand Valuation",
    tag: "Branding",
    accentColor: "#e879f9"
  },
  {
    id: "ecommerce",
    title: "E-commerce Marketing",
    shortTitle: "E-Commerce",
    kicker: "Revenue Scaling",
    description:
      "Scale Shopify and WooCommerce stores with multi-channel performance funnels, product page SEO, and relentless conversion optimization.",
    link: "https://tekhportal.com/e-commerce-marketing-service-in-yelahanka-bengaluru/",
    subServices: [
      "Shopify store growth marketing",
      "WooCommerce scaling & optimization",
      "Product-level SEO & rich snippets",
      "Conversion rate optimization (CRO)"
    ],
    metrics: "+280% Store GMV Growth",
    tag: "Commerce",
    accentColor: "#38bdf8"
  },
  {
    id: "ui-ux",
    title: "UX/UI Design & Prototyping",
    shortTitle: "UX/UI Design",
    kicker: "User Experience",
    description:
      "Intuitive, friction-free digital product interfaces rooted in deep user research, interactive Figma prototyping, and modern design heuristics.",
    link: "https://tekhportal.com/ux-ui-designing-in-yelahanka-bengaluru/",
    subServices: [
      "User research & behavioral analysis",
      "Low/High-fidelity wireframing",
      "Interactive UI component design",
      "UX strategy & journey mapping",
      "Interactive design prototyping"
    ],
    metrics: "3.4x Checkout Conversion",
    tag: "Product UX",
    accentColor: "#818cf8"
  },
  {
    id: "photo-video",
    title: "Commercial Photography & Video",
    shortTitle: "Media Production",
    kicker: "Visual Storytelling",
    description:
      "Studio-grade product photography, executive brand shoots, and cinematic storytelling captures that elevate brand prestige.",
    link: "https://tekhportal.com/photography-videography-services-in-yelahanka-bangalore/",
    subServices: [
      "Commercial product photography",
      "Corporate brand shoot production",
      "Studio & on-location cinematography",
      "Post-production color grading"
    ],
    metrics: "4K Cinema Quality",
    tag: "Production",
    accentColor: "#facc15"
  }
];

export const CLIENT_PROOFS: ClientProof[] = [
  {
    id: "1",
    name: "Aakash Varma",
    role: "Founder, Zenith Health",
    company: "Zenith Health Bengaluru",
    metric: "+380% ROAS",
    metricLabel: "Google & Meta Ads",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    verified: true
  },
  {
    id: "2",
    name: "Pooja Hegde",
    role: "CMO, Urban Living",
    company: "Urban Living Real Estate",
    metric: "4,200+ Leads",
    metricLabel: "B2B Sales Funnel",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
    verified: true
  },
  {
    id: "3",
    name: "Rohan Nair",
    role: "CEO, Nexa FinTech",
    company: "Nexa Tech Hub",
    metric: "#1 Ranking",
    metricLabel: "Keywords in Bengaluru",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    verified: true
  },
  {
    id: "4",
    name: "Sneha Rao",
    role: "VP Growth, Aura Silk",
    company: "Aura E-commerce",
    metric: "₹1.48 Cr",
    metricLabel: "Monthly Revenue Scaled",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
    verified: true
  }
];

export const HERO_SHOWCASE_CARDS: HeroArtCardData[] = [
  {
    id: "card-seo",
    title: "SEO Domination",
    subtitle: "Bengaluru & Global SERPs",
    category: "Organic Growth",
    metric: "+512% Organic Inflow",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&q=88&w=1800",
    className: "card-coral",
    lightLogo: false
  },
  {
    id: "card-ppc",
    title: "High-ROAS Paid Ads",
    subtitle: "Google, Meta & LinkedIn",
    category: "Performance Marketing",
    metric: "5.4x Average ROAS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=88&w=1800",
    className: "card-green",
    lightLogo: false
  },
  {
    id: "card-brand",
    title: "Brand & Creative Identity",
    subtitle: "Design Systems & Visuals",
    category: "Creative Direction",
    metric: "100% Bespoke Identity",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&fm=jpg&q=88&w=1800",
    className: "card-black",
    lightLogo: true
  },
  {
    id: "card-web",
    title: "High-Speed Web Platforms",
    subtitle: "Next.js, UX & Headless CMS",
    category: "Web Engineering",
    metric: "Sub-Second Page Load",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1800",
    className: "card-orange",
    lightLogo: true
  }
];

export const PARTNERS: PartnerBrand[] = [
  { name: "Google Partner", symbol: "★", category: "Search & Ads" },
  { name: "Meta Business", symbol: "∞", category: "Social Ads" },
  { name: "Shopify Plus", symbol: "🛍", category: "E-commerce" },
  { name: "HubSpot Certified", symbol: "◉", category: "CRM & Funnels" },
  { name: "Semrush Agency", symbol: "▲", category: "SEO Intelligence" },
  { name: "WordPress VIP", symbol: "W", category: "CMS & Web" },
  { name: "LinkedIn Marketing", symbol: "in", category: "B2B Lead Gen" }
];

export const MOSAIC_ASSETS = {
  seoAnalytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&q=88&w=1800",
  growthChart: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=88&w=1800",
  abstractDesign: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&fm=jpg&q=88&w=1800",
  laptopWorkspace: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&fm=jpg&q=88&w=1800",
  studioProduction: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&fm=jpg&q=88&w=1800",
  neonCreative: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&fm=jpg&q=88&w=1800",
  bengaluruHub: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&fm=jpg&q=88&w=1800"
};

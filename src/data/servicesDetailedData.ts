import type { DetailedServiceData } from '../types/serviceDetail';

export const DETAILED_SERVICES: Record<string, DetailedServiceData> = {
  "web-dev": {
    id: "web-dev",
    slug: "web-dev",
    title: "Website Design & Development",
    shortTitle: "Web Development",
    kicker: "High-Performance Web",
    heroHeadline: "Fast, High-Converting",
    heroHighlightWord: "WEBSITES.",
    tagline: "Lightning-fast, responsive digital platforms engineered to turn visitors into paying clients.",
    description: "Sub-second load times, modern UX, and robust engineering to maximize conversions.",
    accentColor: "#60a5fa",
    badge: "Next.js 15 / React 19",
    tag: "Engineering",
    recommendedPlanId: "turbo",
    externalUrl: "https://tekhportal.com/website-development-service-in-yelahanka-bangalore/",
    primaryStat: {
      value: "98+",
      label: "PageSpeed & Core Web Vitals Score",
      sublabel: "Across mobile & desktop devices"
    },
    keyStats: [
      { value: "< 0.8s", label: "Average Page Load Speed" },
      { value: "3.4x", label: "Conversion Rate Lift" },
      { value: "100%", label: "Mobile-First Responsive" },
      { value: "Enterprise", label: "Security & DDoS Shield" }
    ],
    codeSnippet: {
      language: "typescript",
      filename: "app/page.tsx",
      title: "High-Performance Edge Server Component with Dynamic Caching",
      description: "Next.js 15 App Router Server Component with zero-bundle overhead, edge caching, and semantic HTML5.",
      code: `import type { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { ServicesGrid } from '@/components/ServicesGrid';
import { TelemetryTracker } from '@/lib/telemetry';

export const metadata: Metadata = {
  title: 'Next-Gen High Speed Digital Web Platforms | Tekhportal',
  description: 'Sub-second page load times with 99+ Core Web Vitals score.',
  openGraph: { type: 'website', locale: 'en_IN' }
};

export const revalidate = 3600; // Edge ISR cache 1 hour

export default async function Page() {
  const performanceMetrics = await TelemetryTracker.getEdgeVitals();

  return (
    <main className="min-h-screen bg-[#edf5ef] text-[#07382c] antialiased">
      <HeroSection lcpTarget={performanceMetrics.lcp} />
      <ServicesGrid priorityLoading={true} />
    </main>
  );
}`,
      highlights: [
        "Server Components (RSC) with 0kb Client JS Overhead",
        "Edge Incremental Static Regeneration (ISR)",
        "Automated OpenGraph & JSON-LD Injection",
        "100/100 Google Core Web Vitals Guaranteed"
      ]
    },
    videoProof: {
      title: "Interactive Web Experience, Fluid Micro-Animations & Lighthouse Speed Showcase",
      duration: "3:45 min",
      videoType: "Interactive Prototype Demo",
      thumbnailUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1600",
      caption: "Experience the fluid interactions, headless architecture, and instant sub-second page transitions we build into every web platform.",
      highlights: [
        { time: "0:00", label: "Design System & Figma Component Tokens" },
        { time: "1:10", label: "Next.js 15 Server-Side Rendering (SSR)" },
        { time: "2:15", label: "Mobile Checkout UX & Micro-Interactions" },
        { time: "3:20", label: "Live 100/100 Google PageSpeed Benchmark" }
      ],
      placeholderNote: "Video Demo Canvas: Embed live website walkthroughs, responsive preview recordings, and performance audits."
    },
    imageProofs: [
      {
        id: "speed-benchmark",
        title: "Google Lighthouse 99/100 Core Web Vitals Audit",
        category: "Performance Benchmarking",
        metricBadge: "0.5s First Contentful Paint",
        description: "Zero render-blocking scripts, modern WebP/AVIF image pipeline, and server-side edge rendering.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Live Performance Telemetry"
      },
      {
        id: "luxury-brand-ui",
        title: "Luxury Responsive Web Storefront Interface",
        category: "UI/UX Engineering",
        metricBadge: "+240% Time On Page",
        description: "Editorial typography, high-res product galleries, and friction-free mobile navigation.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "UI & UX Design System"
      },
      {
        id: "headless-cms-stack",
        title: "Custom Headless Architecture & Content Hub",
        category: "Headless CMS Integration",
        metricBadge: "Instant Search & Filter",
        description: "Dynamic property listings with interactive map filtering, instant brochure downloads, and lead capture hooks.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Architecture & Code Specification"
      },
      {
        id: "cro-checkout-flow",
        title: "Conversion-Rate Optimized Single-Step Checkout",
        category: "Conversion Engineering",
        metricBadge: "3.4x Booking Lift",
        description: "Streamlined 2-step booking flow with SMS verification, calendar slot selection, and instant confirmation.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Conversion Funnel"
      }
    ],
    deliverables: [
      {
        title: "Bespoke Corporate & Brand Web Platforms",
        description: "Crafted from scratch to represent your brand's prestige with bespoke layout design, typography, and interactive components.",
        iconName: "Layout",
        checkpoints: [
          "Custom UI/UX designed in Figma",
          "Next.js / React or WordPress VIP implementation",
          "Responsive mobile-first adaptive layout",
          "Semantic SEO HTML5 structure & accessibility"
        ]
      },
      {
        title: "High-Converting Landing Pages & Funnels",
        description: "Dedicated conversion engines built for paid ad traffic, product launches, and high-ticket service lead generation.",
        iconName: "Zap",
        checkpoints: [
          "Direct-response persuasion hierarchy",
          "Sticky conversion bars & floating CTA widgets",
          "A/B split testing readiness",
          "Instant CRM & WhatsApp webhook triggers"
        ]
      },
      {
        title: "E-Commerce & Digital Storefront Engineering",
        description: "High-volume Shopify and WooCommerce builds optimized for average order value (AOV) and seamless checkout.",
        iconName: "ShoppingBag",
        checkpoints: [
          "Custom collection & product page layouts",
          "Cart upsells & 1-click checkout flows",
          "Payment gateway (Razorpay/Stripe/UPI) integration",
          "Inventory & ERP automation sync"
        ]
      },
      {
        title: "Speed Optimization & Core Web Vitals Fixes",
        description: "Refactoring legacy codebases to achieve sub-second load times and flawless Google PageSpeed scores.",
        iconName: "Gauge",
        checkpoints: [
          "Image optimization & AVIF conversion pipeline",
          "Edge CDN caching & asset minification",
          "Cumulative Layout Shift (CLS) eradication",
          "Database indexing & query caching"
        ]
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Discovery, Wireframing & Information Architecture",
        duration: "Week 1",
        description: "We map out user flows, content hierarchy, conversion paths, and create interactive Figma wireframes.",
        keyOutputs: ["Interactive Figma Wireframes", "Site Architecture Map", "Tech Stack Specification"]
      },
      {
        stepNumber: "02",
        title: "High-Fidelity UI Design & Component Tokens",
        duration: "Weeks 2 - 3",
        description: "We craft every screen with bespoke typography, glassmorphic accents, brand color tokens, and micro-animations.",
        keyOutputs: ["Complete Figma UI Prototype", "Responsive Tablet & Mobile Screens", "Design System Assets"]
      },
      {
        stepNumber: "03",
        title: "Full-Stack Development & CMS Integration",
        duration: "Weeks 3 - 5",
        description: "Our engineers build clean, reusable components, integrate CMS fields, configure forms, and integrate payment gateways.",
        keyOutputs: ["Production Codebase", "Headless CMS Setup", "Automated Forms & Webhooks"]
      },
      {
        stepNumber: "04",
        title: "QA Testing, Speed Optimization & Edge Launch",
        duration: "Week 6",
        description: "Cross-browser testing, Core Web Vitals optimization, SSL certification, SEO redirects, and zero-downtime deployment.",
        keyOutputs: ["98+ PageSpeed Verification", "Live Production Launch", "Post-Launch Staff Training"]
      }
    ],
    techStack: [
      { name: "React 19 & Next.js", category: "Modern Frontend Framework" },
      { name: "Tailwind CSS", category: "Utility-First Design System" },
      { name: "TypeScript", category: "Type-Safe Architecture" },
      { name: "WordPress VIP / Strapi", category: "Headless Content Management" },
      { name: "Vercel Edge Network", category: "Global Cloud Deployment" },
      { name: "Cloudflare", category: "Enterprise CDN & Security" }
    ]
  },

  "seo": {
    id: "seo",
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO & Rankings",
    kicker: "Top Google Rankings",
    heroHeadline: "Dominate Organic Search &",
    heroHighlightWord: "RANK #1.",
    tagline: "Data-driven SEO strategies that drive high-intent organic traffic and qualified inbound leads.",
    description: "Technical SEO, keyword dominance, and authoritative backlinks for sustainable growth.",
    accentColor: "#10b981",
    badge: "High Intent",
    tag: "Search Engine",
    recommendedPlanId: "turbo",
    externalUrl: "https://tekhportal.com/seo-services-in-yelahanka-bengaluru/",
    primaryStat: {
      value: "+420%",
      label: "Organic Traffic Surge",
      sublabel: "Average 6-month client trajectory"
    },
    keyStats: [
      { value: "#1", label: "Page 1 Keyword Rankings" },
      { value: "98/100", label: "Core Web Vitals Health" },
      { value: "4.6x", label: "Organic Inbound Lead Lift" },
      { value: "100%", label: "White-Hat Proven SEO" }
    ],
    codeSnippet: {
      language: "html",
      filename: "schema-markup.jsonld",
      title: "Advanced JSON-LD Structured Data Entity Architecture",
      description: "Semantic JSON-LD schema linking organizational entities, local business geo-coordinates, and high-intent services.",
      code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://tekhportal.com/#organization",
      "name": "Tekhportal Digital Agency",
      "url": "https://tekhportal.com",
      "logo": "https://tekhportal.com/logo.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560064",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0998,
        "longitude": 77.5963
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128"
      }
    }
  ]
}
</script>`,
      highlights: [
        "Rich Snippet & Knowledge Graph Qualification",
        "Geo-Coordinates for Google Maps 3-Pack Supremacy",
        "Verified Service Schema with Aggregate Rating",
        "Canonical Entity Disambiguation"
      ]
    },
    videoProof: {
      title: "Live Google Search Console Traffic Surge & Technical Audit Breakdown",
      duration: "4:32 min",
      videoType: "Loom Walkthrough",
      thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&q=88&w=1600",
      caption: "Watch how we scaled organic search impressions to 142,000+ monthly clicks with zero ad spend.",
      highlights: [
        { time: "0:00", label: "Initial Site Audit & Crawl Bottlenecks" },
        { time: "1:15", label: "Schema Markup & Entity Architecture" },
        { time: "2:40", label: "Local 3-Pack Google Maps Dominance" },
        { time: "3:55", label: "Live GSC Revenue & Traffic Dashboard" }
      ],
      placeholderNote: "Video Player Canvas Slot: Embed your client case walkthrough, Loom breakdown, or live screen capture here."
    },
    imageProofs: [
      {
        id: "gsc-growth",
        title: "Google Search Console Organic Traffic Inflow",
        category: "Search Console Telemetry",
        metricBadge: "+512% Clicks in 90 Days",
        description: "Exponential organic traffic expansion following deep technical schema fixes, index bloat cleanup, and intent-focused content clustering.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Live Performance Telemetry"
      },
      {
        id: "local-seo-pack",
        title: "Google Business Profile Local 3-Pack Supremacy",
        category: "Local Map Search",
        metricBadge: "#1 For 34 Local Keywords",
        description: "Dominating local map searches in North Bengaluru with geo-tagged citations, high review velocity, and localized landing pages.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Live Performance Telemetry"
      },
      {
        id: "core-web-vitals",
        title: "Lighthouse 100/100 Core Web Vitals Optimization",
        category: "Technical Speed Audit",
        metricBadge: "0.4s LCP Score",
        description: "Google algorithm speed pass with sub-second page loads, zero Cumulative Layout Shift (CLS), and structured data entity validation.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "UI & UX Design System"
      },
      {
        id: "keyword-cluster-serp",
        title: "High-Volume Commercial Keyword Cluster Rankings",
        category: "SERP Dominance",
        metricBadge: "Page 1 For 80+ Terms",
        description: "Comprehensive competitive gap analysis outranking established national players for high-intent search terms.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Live Performance Telemetry"
      }
    ],
    deliverables: [
      {
        title: "Comprehensive Technical SEO & Crawl Audit",
        description: "Exhaustive diagnostics covering canonicalization, crawl budget, robots directives, JS rendering, and internal linking graph.",
        iconName: "Search",
        checkpoints: [
          "Full site architecture & status code crawl",
          "Core Web Vitals performance audit",
          "Indexation and canonical tag reconciliation",
          "Structured data & JSON-LD schema injection"
        ]
      },
      {
        title: "High-Intent Keyword Intelligence & Gap Mapping",
        description: "Pinpointing commercial, transactional, and informational search queries that convert into paying customers.",
        iconName: "Target",
        checkpoints: [
          "Competitor search share & gap discovery",
          "Search volume, difficulty, and intent categorization",
          "Keyword-to-URL topic cluster architecture",
          "SERP feature & rich snippet targeting"
        ]
      },
      {
        title: "On-Page Optimization & Content Engineering",
        description: "Surgically refining title tags, semantic headings (H1-H6), meta descriptions, internal anchor text, and entity depth.",
        iconName: "FileText",
        checkpoints: [
          "Entity-rich content optimization",
          "Strategic heading hierarchy & anchor linking",
          "Image compression & alt attribute tuning",
          "Conversion-focused call-to-action placement"
        ]
      },
      {
        title: "Local SEO & Google Business Profile Domination",
        description: "Securing the top 3 spots on Google Maps for local commercial searches in Bengaluru and surrounding territories.",
        iconName: "MapPin",
        checkpoints: [
          "GBP profile optimization & geo-tagging",
          "High-authority local NAP citation building",
          "Review generation & sentiment framework",
          "Localized city and suburb landing pages"
        ]
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Deep Technical Audit & Baseline Benchmark",
        duration: "Week 1",
        description: "We analyze your website architecture, crawl errors, indexing roadblocks, and competitor ranking profiles.",
        keyOutputs: ["36-Point Technical Audit Report", "Keyword Opportunity Matrix", "Competitor Benchmark Report"]
      },
      {
        stepNumber: "02",
        title: "On-Page Architecture & Schema Deployment",
        duration: "Weeks 2 - 3",
        description: "We optimize all core pages, inject rich JSON-LD schemas, fix speed bottlenecks, and align content with search intent.",
        keyOutputs: ["Optimized Meta Architecture", "JSON-LD Schema Implementation", "Core Web Vitals Remediation"]
      },
      {
        stepNumber: "03",
        title: "Content Clustering & Authority Backlink Surge",
        duration: "Month 2 onwards",
        description: "We roll out authoritative topic cluster articles, secure high-domain-authority contextual backlinks, and build local citations.",
        keyOutputs: ["4-8 SEO Pillar Articles / Month", "High-DA Contextual Backlinks", "Local Citation Building"]
      },
      {
        stepNumber: "04",
        title: "Continuous Rank Tracking & Revenue Optimization",
        duration: "Ongoing",
        description: "Weekly SERP monitoring, search console analysis, conversion tracking, and ongoing content freshness updates.",
        keyOutputs: ["Live Executive SERP Dashboard", "Monthly ROI & Traffic Reports", "Continuous CRO Tuning"]
      }
    ],
    techStack: [
      { name: "Google Search Console", category: "Indexing & Verification" },
      { name: "Ahrefs Enterprise", category: "Backlinks & Competitor Intel" },
      { name: "Semrush Pro", category: "Keyword & Rank Tracking" },
      { name: "Screaming Frog", category: "Technical Site Crawling" },
      { name: "Schema App", category: "Structured Data Engine" },
      { name: "Google Analytics 4", category: "Conversion Tracking" }
    ]
  },

  "ppc": {
    id: "ppc",
    slug: "ppc",
    title: "Paid Advertising (PPC & Performance)",
    shortTitle: "PPC & Paid Ads",
    kicker: "Paid Ads & ROAS",
    heroHeadline: "Scale Revenue with High-ROI",
    heroHighlightWord: "PAID ADS.",
    tagline: "Data-backed Meta and Google Ads campaigns engineered for predictable returns.",
    description: "Hyper-targeted ad creatives and conversion tracking that maximize every rupee spent.",
    accentColor: "#ff9b5c",
    badge: "Google Partner",
    tag: "Paid Media",
    recommendedPlanId: "turbo",
    externalUrl: "https://tekhportal.com/paid-advertising-in-yelahanka-bengaluru/",
    primaryStat: {
      value: "4.8x",
      label: "Average Return on Ad Spend (ROAS)",
      sublabel: "Across active client portfolios"
    },
    keyStats: [
      { value: "₹18.5 Cr+", label: "Client Revenue Generated" },
      { value: "3.2x", label: "Average CTR Lift" },
      { value: "< ₹14", label: "Average Cost Per Lead" },
      { value: "24/7", label: "Automated Bid Management" }
    ],
    codeSnippet: {
      language: "typescript",
      filename: "lib/meta-conversions-api.ts",
      title: "Server-Side Meta Conversions API (CAPI) & Pixel Telemetry",
      description: "Server-to-server conversion dispatch bypassing iOS browser cookie restrictions with SHA-256 hashed customer parameters.",
      code: `import crypto from 'crypto';

interface PurchaseEvent {
  eventId: string;
  email: string;
  value: number;
  currency: string;
}

export async function sendMetaCAPIEvent(event: PurchaseEvent) {
  const hashedEmail = crypto.createHash('sha256').update(event.email.trim().toLowerCase()).digest('hex');

  const payload = {
    data: [{
      event_name: 'Purchase',
      event_time: Math.floor(Date.now() / 1000),
      event_id: event.eventId,
      user_data: { em: [hashedEmail] },
      custom_data: { currency: event.currency, value: event.value },
      action_source: 'website'
    }]
  };

  return fetch(\`https://graph.facebook.com/v19.0/\${process.env.META_PIXEL_ID}/events?access_token=\${process.env.META_CAPI_TOKEN}\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}`,
      highlights: [
        "100% Signal Match Quality with SHA-256 Hashing",
        "iOS 14.5+ Cookie Blocker Bypass via Server CAPI",
        "Deduplicated Browser & Server Conversion Event ID",
        "Direct Value Attribution for Smart Bidding Engines"
      ]
    },
    videoProof: {
      title: "Live Meta Ads Manager & Google Ads 5.4x ROAS Campaign Breakdown",
      duration: "5:18 min",
      videoType: "Dashboard Screen Recording",
      thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=88&w=1600",
      caption: "Step-by-step walkthrough of how we scaled ad spend while dropping Customer Acquisition Cost (CAC) by 46%.",
      highlights: [
        { time: "0:00", label: "Campaign Structure & Account Architecture" },
        { time: "1:30", label: "Creative Testing Framework (Hook vs Body vs CTA)" },
        { time: "3:10", label: "CBO Scaling & Lookalike Audience Stacks" },
        { time: "4:45", label: "Live ROAS Dashboard & Revenue Attribution" }
      ],
      placeholderNote: "Video Proof Canvas: Show live Ads Manager dashboards, ROAS milestones, and campaign scaling walkthroughs."
    },
    imageProofs: [
      {
        id: "meta-ads-roas",
        title: "Meta Ads 5.4x Blended ROAS Scaling Dashboard",
        category: "Paid Media Telemetry",
        metricBadge: "5.4x Blended ROAS",
        description: "Multi-campaign CBO scaling generating qualified property buyer inquiries at unbeatable acquisition costs.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "ROAS & Revenue Dashboard"
      },
      {
        id: "google-search-ads",
        title: "Google Search High-Intent Commercial Campaign",
        category: "Search Performance",
        metricBadge: "8.6% Conversion Rate",
        description: "Exact match high-intent search terms driving qualified walk-ins and high-ticket inquiries.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Live Performance Telemetry"
      },
      {
        id: "creative-ab-matrix",
        title: "Dynamic Creative Variations & High-CTR Ad Testing",
        category: "Ad Creative Matrix",
        metricBadge: "+68% Higher CTR",
        description: "Multi-angle hook testing comparing static carousel, 3D motion renders, and video testimonials.",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Campaign Deliverable"
      },
      {
        id: "b2b-linkedin-pipeline",
        title: "LinkedIn B2B Enterprise Lead Pipeline Funnel",
        category: "B2B Lead Pipeline",
        metricBadge: "₹42L Pipeline Value",
        description: "Precision job-title and company-size account targeting delivering decision-maker demos.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Conversion Funnel"
      }
    ],
    deliverables: [
      {
        title: "Google Search & Performance Max Campaigns",
        description: "Intercepting buyers ready to purchase with high-converting search ad copy, smart bidding, and negative keyword filtering.",
        iconName: "Search",
        checkpoints: [
          "High-intent keyword grouping and match types",
          "Dynamic search ads & automated asset extensions",
          "Performance Max feed integration & asset tuning",
          "Conversion tracking & offline revenue import"
        ]
      },
      {
        title: "Meta (Facebook & Instagram) Funnel Scaling",
        description: "Cold audience acquisition, dynamic retargeting, custom audience lookalikes, and interactive WhatsApp ad funnels.",
        iconName: "Share2",
        checkpoints: [
          "Advantage+ audience segmentation & testing",
          "Scroll-stopping visual & video ad creative sets",
          "Dynamic product ads (DPA) catalog setup",
          "WhatsApp direct-to-chat qualification ads"
        ]
      },
      {
        title: "LinkedIn B2B Account-Based Advertising",
        description: "Laser-targeting CXOs, directors, and enterprise decision-makers with message ads, document ads, and lead gen forms.",
        iconName: "TrendingUp",
        checkpoints: [
          "ABM account list & firmographic targeting",
          "Native lead generation forms with CRM sync",
          "Thought leadership sponsored content",
          "High-ticket B2B pipeline retargeting"
        ]
      },
      {
        title: "Ruthless Creative Testing & ROAS Optimization",
        description: "Rapidly iterating visual hooks, headlines, and calls-to-action to scale winning creatives and cut underperforming ad sets.",
        iconName: "Zap",
        checkpoints: [
          "Weekly creative sprints (static, video, carousel)",
          "Real-time bid and budget management",
          "Multi-touch attribution & pixel telemetry",
          "Landing page CRO recommendations"
        ]
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Account Audit & Tracking Infrastructure Setup",
        duration: "Days 1 - 4",
        description: "We audit historical ad accounts, install advanced pixel/CAPI tracking, set up custom conversions, and benchmark CPA.",
        keyOutputs: ["Tracking & Pixel Verification", "Historical Ad Audit", "Campaign Architecture Blueprint"]
      },
      {
        stepNumber: "02",
        title: "Creative Production & Copywriting Sprint",
        duration: "Days 5 - 8",
        description: "We create 12-20 high-converting ad variations (motion banners, direct-response copy) for all target personas.",
        keyOutputs: ["High-CTR Ad Creatives", "Direct-Response Ad Copy Suite", "Dedicated Landing Page Alignment"]
      },
      {
        stepNumber: "03",
        title: "Campaign Launch & Algorithmic Calibration",
        duration: "Weeks 2 - 3",
        description: "We launch structured ad sets, feed signals to ad algorithms, test bidding strategies, and identify winning audiences.",
        keyOutputs: ["Multi-Channel Ad Activation", "Hook Rate & Hold Rate Analysis", "Initial ROAS Calibration"]
      },
      {
        stepNumber: "04",
        title: "Aggressive Budget Scaling & Retention Retargeting",
        duration: "Ongoing",
        description: "We scale high-performing ad sets, deploy automated retargeting flows, and maintain weekly creative refresh cycles.",
        keyOutputs: ["Weekly Creative Refreshes", "Scale Without Fatigue", "Daily ROAS & Budget Management"]
      }
    ],
    techStack: [
      { name: "Google Ads Editor", category: "Search & Display Engine" },
      { name: "Meta Ads Manager", category: "Social Paid Media" },
      { name: "LinkedIn Campaign Manager", category: "B2B Advertising" },
      { name: "Triple Whale", category: "Attribution Telemetry" },
      { name: "Zapier", category: "Instant CRM Dispatch" },
      { name: "Hotjar", category: "Landing Page CRO" }
    ]
  },

  "ui-ux": {
    id: "ui-ux",
    slug: "ui-ux",
    title: "UX/UI Design & Interactive Prototyping",
    shortTitle: "UX/UI Design",
    kicker: "User Experience",
    heroHeadline: "Intuitive, Modern",
    heroHighlightWord: "USER EXPERIENCES.",
    tagline: "Research-backed web and mobile interfaces designed for effortless user engagement.",
    description: "Figma design systems and interactive prototypes tested for maximum usability.",
    accentColor: "#818cf8",
    tag: "Product UX",
    recommendedPlanId: "turbo",
    externalUrl: "https://tekhportal.com/ux-ui-designing-in-yelahanka-bengaluru/",
    primaryStat: {
      value: "3.4x",
      label: "Checkout & Goal Conversion Lift",
      sublabel: "Driven by heuristic UX redesign"
    },
    keyStats: [
      { value: "0.2s", label: "Faster Task Completion" },
      { value: "100%", label: "Atomic Component System" },
      { value: "85+", label: "System Usability Scale (SUS)" },
      { value: "Figma", label: "Interactive Clickable Prototypes" }
    ],
    codeSnippet: {
      language: "css",
      filename: "design-system/tokens.css",
      title: "Atomic Design System CSS Variables & Tokenized Theme",
      description: "Production design tokens mapping color spaces, micro-interaction cubic-beziers, and responsive spacing units.",
      code: `:root {
  /* Color Tokens */
  --color-primary-forest: #07382c;
  --color-primary-emerald: #10b981;
  --color-accent-gold: #fbb753;
  --color-canvas-sage: #edf5ef;
  
  /* Typography Scale */
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-editorial: 'Newsreader', serif;
  
  /* Radii & Micro-Transitions */
  --radius-button: 9999px;
  --radius-card: 1.5rem;
  --transition-snappy: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  --shadow-glow: 0 20px 25px -5px rgba(16, 185, 129, 0.15);
}`,
      highlights: [
        "Consistent Design Tokens across Web & Mobile",
        "Micro-Animation Curves with Cubic-Bezier Timing",
        "Dark & Light Mode Variable Mapping",
        "AutoLayout 5.0 Component Synchronized"
      ]
    },
    videoProof: {
      title: "Interactive Figma Click-Through Prototype & Micro-Interaction Showcase",
      duration: "3:40 min",
      videoType: "Interactive Prototype Demo",
      thumbnailUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1600",
      caption: "Experience our clickable Figma prototypes featuring responsive navigation, modal flows, and fluid micro-interactions.",
      highlights: [
        { time: "0:00", label: "Design Token Architecture (Color, Type, Spacing)" },
        { time: "1:05", label: "Mobile App Navigation & Bottom Sheet Drawer UX" },
        { time: "2:10", label: "Complex Data Table & Filter Interaction" },
        { time: "3:00", label: "Developer Handoff Specs & Design System" }
      ],
      placeholderNote: "Video Proof Canvas: Embed Figma interactive prototype click-throughs, Loom design reviews, and usability test recordings."
    },
    imageProofs: [
      {
        id: "figma-design-tokens",
        title: "Atomic Design System & Component Library",
        category: "Figma Component Library",
        metricBadge: "120+ Components",
        description: "Dark and light mode tokens, responsive layout grids, buttons, inputs, modals, and comprehensive states.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "UI & UX Design System"
      },
      {
        id: "user-journey-wireframe",
        title: "Low-Fidelity Wireframes & User Journey Flowchart",
        category: "User Flow Mapping",
        metricBadge: "Friction-Free Flow",
        description: "Mapping out Bluetooth vehicle pairing, battery telemetry display, and service booking paths.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Campaign Deliverable"
      },
      {
        id: "mobile-app-screens",
        title: "High-Fidelity Mobile App UI (iOS & Android)",
        category: "Native App UI",
        metricBadge: "88 SUS Usability Score",
        description: "Clean medical record cards, instant doctor appointment booking, and diagnostic test tracking.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "UI & UX Design System"
      },
      {
        id: "dashboard-data-visualization",
        title: "B2B Analytics Dashboard UI & Data Visualization",
        category: "Enterprise UX",
        metricBadge: "3.2x Task Velocity",
        description: "Intuitive tenant ledger tables, automated revenue charts, and instant document approval workflows.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Live Performance Telemetry"
      }
    ],
    deliverables: [
      {
        title: "User Research & Customer Journey Mapping",
        description: "Uncovering user pain points, conducting behavioral interviews, and mapping end-to-end task flows.",
        iconName: "Users",
        checkpoints: [
          "Qualitative user interviews & persona profiles",
          "Current-state heuristic usability audit",
          "Information architecture (IA) tree structuring",
          "Competitive product benchmark analysis"
        ]
      },
      {
        title: "Interactive High-Fidelity Figma Prototyping",
        description: "Clickable, testable prototypes that look and feel like a real native app before a single line of code is written.",
        iconName: "Smartphone",
        checkpoints: [
          "Realistic micro-interactions & screen transitions",
          "Desktop, tablet, and mobile viewport responsive screens",
          "Error states, empty states, and loading skeletons",
          "Shareable click-through links for user testing"
        ]
      },
      {
        title: "Scalable Atomic Design Systems",
        description: "Building production-ready component libraries with reusable variants, autolayout, and design tokens.",
        iconName: "Layers",
        checkpoints: [
          "Typography, color, spacing, and shadow tokens",
          "Button, input, dropdown, and modal component states",
          "Dark mode / Light mode color mapping",
          "Figma Variables & AutoLayout 5.0 architecture"
        ]
      },
      {
        title: "Developer Handoff & Usability Verification",
        description: "Delivering pixel-perfect CSS specs, asset exports, and developer documentation to accelerate engineering.",
        iconName: "Code",
        checkpoints: [
          "Complete Dev Mode annotations in Figma",
          "SVG icon packages & asset export folders",
          "Responsive breakpoint guidelines",
          "Post-implementation visual QA review"
        ]
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Research, Personas & Information Architecture",
        duration: "Week 1",
        description: "We map out user flows, conduct heuristic evaluations of existing interfaces, and establish core task flows.",
        keyOutputs: ["User Flow Diagrams", "Heuristic Evaluation Report", "Information Architecture Map"]
      },
      {
        stepNumber: "02",
        title: "Low-Fidelity Wireframes & Rapid Prototyping",
        duration: "Weeks 2 - 3",
        description: "We create structural wireframes for all primary product screens and validate navigation efficiency.",
        keyOutputs: ["Complete Low-Fi Wireframe Deck", "Navigation Validation", "Stakeholder Alignment"]
      },
      {
        stepNumber: "03",
        title: "High-Fidelity UI Design & Design System",
        duration: "Weeks 3 - 5",
        description: "We craft polished visual screens, create reusable component tokens, and link micro-interactions.",
        keyOutputs: ["Pixel-Perfect UI Prototype", "Figma Design System", "Interactive Clickable Demo"]
      },
      {
        stepNumber: "04",
        title: "Usability Testing & Developer Handoff",
        duration: "Week 6",
        description: "We test the prototype with real users, refine friction points, and provide comprehensive developer specs.",
        keyOutputs: ["Usability Testing Findings", "Developer Handoff Documentation", "Production Asset Package"]
      }
    ],
    techStack: [
      { name: "Figma", category: "Core UI/UX & Interactive Prototyping" },
      { name: "FigJam", category: "User Journey & Flow Mapping" },
      { name: "Principle", category: "Advanced Micro-Interactions" },
      { name: "Maze", category: "Remote Usability Testing & Heatmaps" },
      { name: "Storybook", category: "Frontend Component Alignment" }
    ]
  },

  "lead-generation": {
    id: "lead-generation",
    slug: "lead-generation",
    title: "Lead Generation & Sales Funnels",
    shortTitle: "Lead Generation",
    kicker: "Pipeline Growth",
    heroHeadline: "Consistent Stream of",
    heroHighlightWord: "QUALIFIED LEADS.",
    tagline: "Multi-channel outbound and inbound funnels that fill your calendar with ready buyers.",
    description: "Hyper-targeted prospecting and qualification systems built to accelerate sales.",
    accentColor: "#fbbf24",
    badge: "High Growth",
    tag: "Acquisition",
    recommendedPlanId: "turbo",
    externalUrl: "https://tekhportal.com/lead-generation-service-in-yelahanka-bengaluru/",
    primaryStat: {
      value: "180k+",
      label: "Qualified Customer Inquiries",
      sublabel: "Generated across client funnels"
    },
    keyStats: [
      { value: "84%", label: "WhatsApp Chat Open Rate" },
      { value: "₹11.20", label: "Average Cost Per Lead" },
      { value: "4.2x", label: "Sales Team Close Rate Lift" },
      { value: "Instant", label: "SMS & CRM Alert Dispatch" }
    ],
    codeSnippet: {
      language: "json",
      filename: "api/whatsapp-webhook.json",
      title: "Meta WhatsApp Cloud API Automated Lead Qualification Payload",
      description: "Interactive button payload qualifying customer budget and dispatching instant CRM booking link.",
      code: `{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+919066234321",
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": { "type": "text", "text": "Tekhportal Growth Consultation" },
    "body": { "text": "Welcome! Please select your target monthly growth budget to proceed:" },
    "action": {
      "buttons": [
        { "type": "reply", "reply": { "id": "budget_starter", "title": "₹25k - ₹50k / mo" } },
        { "type": "reply", "reply": { "id": "budget_turbo", "title": "₹55k - ₹1.5L / mo" } },
        { "type": "reply", "reply": { "id": "budget_enterprise", "title": "Custom Enterprise" } }
      ]
    }
  }
}`,
      highlights: [
        "Official Meta WhatsApp Cloud API Integration",
        "Instant Budget Qualification Buttons",
        "Zero Latency Webhook Dispatch to HubSpot/Zoho CRM",
        "Automated OTP & Verified Phone Number Check"
      ]
    },
    videoProof: {
      title: "Full-Funnel Architecture & Automated WhatsApp Lead Qualification Walkthrough",
      duration: "4:40 min",
      videoType: "Interactive Walkthrough",
      thumbnailUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&fm=jpg&q=88&w=1600",
      caption: "See how our interactive WhatsApp funnels qualify buyer budgets in real-time and send instant meeting links to top sales reps.",
      highlights: [
        { time: "0:00", label: "High-Converting Multi-Step Form Logic" },
        { time: "1:20", label: "WhatsApp Official Cloud API Bot Integration" },
        { time: "2:45", label: "Instant Lead Scoring & Budget Qualification" },
        { time: "3:50", label: "HubSpot & Zoho CRM Pipeline Sync" }
      ],
      placeholderNote: "Video Proof Canvas: Embed funnel screen recordings, WhatsApp bot demos, and real estate / B2B pipeline walkthroughs."
    },
    imageProofs: [
      {
        id: "multi-step-lead-funnel",
        title: "Multi-Step Interactive Qualification Funnel",
        category: "Funnel Architecture",
        metricBadge: "24.8% Form Completion",
        description: "Interactive step-by-step questionnaire capturing buyer budget, preferred location, and investment timeframe.",
        imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Conversion Funnel"
      },
      {
        id: "whatsapp-chatbot-flow",
        title: "Official WhatsApp Cloud API Automated Qualification Bot",
        category: "WhatsApp Automation",
        metricBadge: "84% Instant Response",
        description: "Automated WhatsApp chatbot answering site queries, dispatching PDFs, and scheduling in-person visits.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "ROAS & Revenue Dashboard"
      },
      {
        id: "crm-pipeline-integration",
        title: "Real-Time CRM Pipeline & Lead Scoring Dashboard",
        category: "CRM Pipeline Sync",
        metricBadge: "₹82L Pipeline Value",
        description: "Automatic lead enrichment, company domain validation, and instant salesperson notification dispatch.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Live Performance Telemetry"
      },
      {
        id: "booked-calendar-schedule",
        title: "Automated Calendar Scheduling & SMS Confirmation",
        category: "Meeting Automation",
        metricBadge: "92% Show-Up Rate",
        description: "Automated SMS/WhatsApp appointment reminders eliminating no-shows for high-ticket consultations.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Conversion Funnel"
      }
    ],
    deliverables: [
      {
        title: "High-Converting Sales Funnels & Landing Pages",
        description: "Custom conversion-focused funnels with multi-step interactive questions that increase completion rates.",
        iconName: "Filter",
        checkpoints: [
          "Micro-commitment interactive question steps",
          "Dynamic question branching based on budget",
          "Mobile-first lightning load speed (<0.5s)",
          "Social proof & trust-building badges embedded"
        ]
      },
      {
        title: "Automated WhatsApp Chatbot & Marketing",
        description: "Connecting your funnel directly to WhatsApp via official API for instant 2-way qualification and nurture.",
        iconName: "MessageSquare",
        checkpoints: [
          "Official Meta WhatsApp Green Tick verification support",
          "Interactive button & quick reply message flows",
          "Automated brochure & pricing PDF dispatch",
          "Human agent escalation trigger"
        ]
      },
      {
        title: "Inbound Pipeline Qualification & CRM Sync",
        description: "Instantly feeding leads into your CRM (HubSpot, Zoho, Salesforce, Google Sheets) with full attribution data.",
        iconName: "Database",
        checkpoints: [
          "Real-time webhook integration via Zapier/Make",
          "Lead scoring based on budget and urgency",
          "Automatic salesperson lead round-robin assignment",
          "UTM source, ad set, and keyword attribution logging"
        ]
      },
      {
        title: "Instant SMS & Notification Dispatch Engine",
        description: "Ensuring your sales reps reach out within 60 seconds of form submission to capture maximum buyer intent.",
        iconName: "PhoneCall",
        checkpoints: [
          "Instant SMS to client and salesperson",
          "Automated WhatsApp confirmation to the buyer",
          "Google Calendar / Calendly appointment sync",
          "Automated 24h & 1h appointment reminders"
        ]
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Funnel Strategy & Buyer Qualification Criteria",
        duration: "Days 1 - 3",
        description: "We define your Ideal Customer Profile (ICP), set up qualifying questions, and design the funnel architecture.",
        keyOutputs: ["ICP Definition & Budget Thresholds", "Funnel Wireframe", "WhatsApp Conversation Script"]
      },
      {
        stepNumber: "02",
        title: "Funnel Build & WhatsApp API Integration",
        duration: "Days 4 - 8",
        description: "We build the high-speed landing page, connect the WhatsApp chatbot, and configure CRM lead scoring.",
        keyOutputs: ["Live Interactive Funnel", "WhatsApp Cloud Bot Setup", "CRM & Webhook Connection"]
      },
      {
        stepNumber: "03",
        title: "Traffic Activation & Lead Quality Testing",
        duration: "Weeks 2 - 3",
        description: "We drive paid traffic from Google and Meta, monitor form drop-offs, and adjust qualification hurdles.",
        keyOutputs: ["First Cohort of Qualified Leads", "Form Conversion Rate Benchmark", "Sales Rep Feedback Loop"]
      },
      {
        stepNumber: "04",
        title: "Scale, Optimization & Show-Up Maximization",
        duration: "Ongoing",
        description: "We scale lead volume while maintaining strict cost-per-acquisition targets and optimizing appointment show-up rates.",
        keyOutputs: ["Weekly Lead Quality Reports", "Automated Nurture Sequencing", "Continuous Funnel CRO"]
      }
    ],
    techStack: [
      { name: "HubSpot CRM", category: "Inbound Pipeline Management" },
      { name: "Wati / Interakt", category: "Official WhatsApp Cloud API" },
      { name: "Zoho CRM", category: "Sales Team Distribution" },
      { name: "Zapier Enterprise", category: "Real-Time Webhook Routing" },
      { name: "Typeform / Custom React", category: "Interactive Multi-Step Forms" },
      { name: "Calendly", category: "Automated Calendar Scheduling" }
    ]
  },

  "ecommerce": {
    id: "ecommerce",
    slug: "ecommerce",
    title: "E-Commerce Marketing (Shopify & WooCommerce)",
    shortTitle: "E-Commerce",
    kicker: "Store Scaling",
    heroHeadline: "Scale Your Online Store &",
    heroHighlightWord: "BOOST SALES.",
    tagline: "End-to-end Shopify growth engineering, cart optimization, and retention marketing.",
    description: "Optimized storefronts and profitable acquisition funnels built for rapid scaling.",
    accentColor: "#38bdf8",
    tag: "Commerce",
    recommendedPlanId: "turbo",
    externalUrl: "https://tekhportal.com/e-commerce-marketing-service-in-yelahanka-bengaluru/",
    primaryStat: {
      value: "+280%",
      label: "Average Store GMV Growth",
      sublabel: "Across active e-commerce brands"
    },
    keyStats: [
      { value: "3.8x", label: "Blended Return on Ad Spend (ROAS)" },
      { value: "4.1%", label: "Average Checkout Conversion Rate" },
      { value: "+32%", label: "Average Order Value (AOV) Lift" },
      { value: "₹1.48 Cr", label: "Monthly Revenue Scaled" }
    ],
    codeSnippet: {
      language: "graphql",
      filename: "shopify/storefront-queries.graphql",
      title: "Shopify Storefront API High-Conversion Product & Cart Query",
      description: "Optimized GraphQL query retrieving product variants, real-time inventory levels, and custom checkout attributes.",
      code: `query getHighConvertingProduct($handle: String!) {
  product(handle: $handle) {
    id
    title
    descriptionHtml
    variants(first: 10) {
      edges {
        node {
          id
          title
          price { amount currencyCode }
          availableForSale
          quantityAvailable
        }
      }
    }
    metafields(identifiers: [{ namespace: "custom", key: "urgency_badge" }]) {
      value
    }
  }
}`,
      highlights: [
        "Direct Headless Storefront GraphQL Execution",
        "Real-Time Dynamic Inventory & Urgency Badge",
        "Sub-100ms Cart Mutation Response Speed",
        "1-Click UPI & Instant Checkout Integration"
      ]
    },
    videoProof: {
      title: "Shopify Backend Growth & Omnichannel Scaling Walkthrough",
      duration: "4:12 min",
      videoType: "Dashboard Screen Recording",
      thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=88&w=1600",
      caption: "Watch how we scaled an e-commerce store from ₹15L/month to over ₹1.48 Cr/month with Google Shopping, Meta DPA ads, and checkout CRO.",
      highlights: [
        { time: "0:00", label: "Shopify Backend Live Revenue Graph" },
        { time: "1:10", label: "Product Page Conversion Uplift Architecture" },
        { time: "2:20", label: "Google Merchant Center & PMax Scaling" },
        { time: "3:30", label: "Klaviyo Automated Post-Purchase Cross-Sells" }
      ],
      placeholderNote: "Video Proof Canvas: Embed Shopify / WooCommerce live sales recordings, Google Shopping dashboards, and AOV scaling breakdowns."
    },
    imageProofs: [
      {
        id: "shopify-revenue-growth",
        title: "Shopify Analytics Dashboard (₹1.48 Cr Monthly Scale)",
        category: "GMV Revenue Telemetry",
        metricBadge: "₹1.48 Cr / Month",
        description: "Sustained revenue scaling with healthy 3.8x blended ROAS and 34% repeat customer purchase rate.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "ROAS & Revenue Dashboard"
      },
      {
        id: "pdp-cro-redesign",
        title: "Product Detail Page (PDP) Conversion Rate Optimization",
        category: "PDP CRO Architecture",
        metricBadge: "4.2% Conversion Rate",
        description: "Optimized sticky add-to-cart, trust badges, urgency triggers, and size/spec comparison tables.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "UI & UX Design System"
      },
      {
        id: "google-shopping-pmax",
        title: "Google Shopping & Performance Max Feed Optimization",
        category: "Google Shopping Feeds",
        metricBadge: "5.2x Google ROAS",
        description: "Optimized product titles, custom feed labels, high-res lifestyle imagery, and automated bidding.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Live Performance Telemetry"
      },
      {
        id: "cohort-retention-analysis",
        title: "Customer Cohort Retention & Repeat Purchase Rate",
        category: "LTV Retention Analysis",
        metricBadge: "+38% Repeat Buyers",
        description: "Intelligent re-order reminder notifications and loyalty rewards driving high customer lifetime value (LTV).",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "ROAS & Revenue Dashboard"
      }
    ],
    deliverables: [
      {
        title: "Google Shopping & Performance Max Campaigns",
        description: "Dominating high-intent search feeds with optimized product catalogs, custom labels, and smart ROAS bidding.",
        iconName: "ShoppingBag",
        checkpoints: [
          "Google Merchant Center feed optimization",
          "Product title & description keyword injection",
          "High-margin SKU prioritization",
          "Dynamic remarketing with viewed products"
        ]
      },
      {
        title: "Meta Dynamic Product Ads (DPA) & Catalog Sales",
        description: "Automatically serving personalized product carousels to users who browsed specific SKUs on your store.",
        iconName: "Share2",
        checkpoints: [
          "Meta Commerce Manager product catalog setup",
          "Dynamic carousel & collection ad creative sets",
          "Abandoned cart dynamic retargeting flows",
          "Advantage+ shopping campaign scaling"
        ]
      },
      {
        title: "Conversion Rate Optimization (CRO) & AOV Boost",
        description: "Auditing and upgrading your product pages, checkout steps, and cart upsells to turn more visitors into buyers.",
        iconName: "TrendingUp",
        checkpoints: [
          "Sticky add-to-cart & 1-click buy buttons",
          "Post-purchase 1-click upsells & volume discounts",
          "Heatmap analysis & user session recording review",
          "Mobile checkout speed & UPI gateway tuning"
        ]
      },
      {
        title: "Product-Level SEO & Rich Product Schema",
        description: "Capturing free organic e-commerce traffic with product schema markup, review star ratings, and collection SEO.",
        iconName: "Search",
        checkpoints: [
          "Product JSON-LD schema (price, availability, reviews)",
          "Collection page internal link architecture",
          "High-ranking category buying guides",
          "Image SEO & WebP compression pipeline"
        ]
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "E-Commerce Funnel & Unit Economics Audit",
        duration: "Days 1 - 4",
        description: "We analyze your margins, Customer Acquisition Cost (CAC), cart abandonment drop-offs, and product feed health.",
        keyOutputs: ["Unit Economics Breakdown", "Catalog Feed Health Audit", "CRO Action Plan"]
      },
      {
        stepNumber: "02",
        title: "Feed Optimization & Product Page Overhaul",
        duration: "Days 5 - 10",
        description: "We optimize product titles, install cart upsell apps, inject product schema, and configure tracking pixels.",
        keyOutputs: ["Google Merchant Feed Approval", "Optimized Product Detail Pages", "Pixel & CAPI Verification"]
      },
      {
        stepNumber: "03",
        title: "Omnichannel Acquisition Campaign Launch",
        duration: "Weeks 2 - 3",
        description: "We launch Google Shopping, Meta Dynamic Catalog Ads, and search campaigns to drive qualified shoppers.",
        keyOutputs: ["Active Shopping Campaigns", "First Revenue Surges", "CPA & ROAS Calibration"]
      },
      {
        stepNumber: "04",
        title: "AOV Expansion & Retention Scaling",
        duration: "Ongoing",
        description: "We deploy automated post-purchase cross-sells, scale winning SKU budgets, and run seasonal promotion blitzes.",
        keyOutputs: ["Increased Average Order Value", "Repeat Purchase Expansion", "Weekly GMV Growth Reports"]
      }
    ],
    techStack: [
      { name: "Shopify Plus", category: "Enterprise E-Commerce Platform" },
      { name: "WooCommerce", category: "Open-Source Store Management" },
      { name: "Google Merchant Center", category: "Shopping Feed Engine" },
      { name: "Triple Whale", category: "D2C Attribution & Profit Telemetry" },
      { name: "Klaviyo", category: "Automated E-Commerce Retention" },
      { name: "Hotjar", category: "Cart & PDP Heatmap CRO" }
    ]
  },

  "email-marketing": {
    id: "email-marketing",
    slug: "email-marketing",
    title: "Email Marketing & CRM Automation",
    shortTitle: "Email & CRM",
    kicker: "Retention & CRM",
    heroHeadline: "Automated Funnels that",
    heroHighlightWord: "DRIVE REORDERS.",
    tagline: "High-converting lifecycle emails and WhatsApp automation flows that boost customer LTV.",
    description: "Personalized drip sequences, win-back flows, and VIP broadcast campaigns.",
    accentColor: "#34d399",
    tag: "Retention",
    recommendedPlanId: "turbo",
    externalUrl: "https://tekhportal.com/email-marketing-service-in-yelahanka-bengaluru/",
    primaryStat: {
      value: "42.8%",
      label: "Average Email Open Rate",
      sublabel: "Across segmented automated flows"
    },
    keyStats: [
      { value: "₹2.8 Cr+", label: "Email Revenue Recovered" },
      { value: "6.2%", label: "Average Click-Through Rate" },
      { value: "99.4%", label: "Inbox Primary Placement" },
      { value: "38%", label: "Store GMV from Automations" }
    ],
    codeSnippet: {
      language: "json",
      filename: "klaviyo/webhook-abandoned-checkout.json",
      title: "Klaviyo Automated Event Trigger & Segmentation Payload",
      description: "Automated JSON webhook payload triggering dynamic abandoned cart sequence with item discount codes.",
      code: `{
  "event": "Started Checkout",
  "customer_properties": {
    "$email": "customer@domain.com",
    "$first_name": "Rohan"
  },
  "properties": {
    "Items": ["Next-Gen Smart Scooter", "Fast Charger"],
    "CheckoutURL": "https://store.com/checkout?recover=token123",
    "ItemNames": ["Smart Scooter"],
    "$value": 84999.00,
    "DiscountCodeEligible": "VIPRECOVER10"
  },
  "time": 1728384920
}`,
      highlights: [
        "Event-Triggered 30-Minute Abandoned Cart Window",
        "Dynamic Product Image & Item Re-injection",
        "100% SPF/DKIM Verified Custom Sending Domain",
        "Segmented VIP vs First-Time Customer Routing"
      ]
    },
    videoProof: {
      title: "Klaviyo & CRM Automated Drip Flow Architecture & Revenue Attribution Demo",
      duration: "3:58 min",
      videoType: "Dashboard Screen Recording",
      thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&q=88&w=1600",
      caption: "Step-by-step breakdown of how our automated Klaviyo flows generated 38% of total monthly revenue on autopilot.",
      highlights: [
        { time: "0:00", label: "Core Flow Architecture (Welcome vs Cart vs Winback)" },
        { time: "1:15", label: "Dynamic Segmentation & Purchase Frequency Triggers" },
        { time: "2:30", label: "Mobile-First Dark-Mode Email Template Design" },
        { time: "3:25", label: "Live Deliverability & Revenue Attribution Analytics" }
      ],
      placeholderNote: "Video Proof Canvas: Embed live Klaviyo flow walkthroughs, drip sequence logic, and revenue attribution metrics."
    },
    imageProofs: [
      {
        id: "klaviyo-revenue-dashboard",
        title: "Klaviyo 38% Automated Revenue Attribution Report",
        category: "Lifecycle Revenue Telemetry",
        metricBadge: "₹48L Recovered in 90D",
        description: "Breakdown of Welcome Series, Abandoned Checkout, and VIP Post-Purchase flows driving direct conversions.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "ROAS & Revenue Dashboard"
      },
      {
        id: "responsive-email-design",
        title: "Custom Responsive Dark/Light Newsletter Templates",
        category: "HTML Email Architecture",
        metricBadge: "52% Open Rate",
        description: "Editorial layout, high-contrast CTAs, and dynamic customer name personalization.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "UI & UX Design System"
      },
      {
        id: "drip-sequence-workflow",
        title: "Behavioral Automation & Segmentation Tree",
        category: "Flow Logic Tree",
        metricBadge: "4.8x Re-booking Rate",
        description: "Behavior-based follow-ups, diagnostic reminder sequences, and quarterly wellness checkup alerts.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Conversion Funnel"
      },
      {
        id: "inbox-deliverability-audit",
        title: "100% DKIM / SPF / DMARC Deliverability Health",
        category: "Deliverability Compliance",
        metricBadge: "99.8% Inbox Placement",
        description: "Domain reputation warming and spam filter bypass ensuring emails land directly in the primary inbox.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Live Performance Telemetry"
      }
    ],
    deliverables: [
      {
        title: "High-Converting Automated Drip Sequences",
        description: "Setting up behavioral email sequences that trigger automatically based on user actions.",
        iconName: "Zap",
        checkpoints: [
          "High-converting 4-part Welcome series",
          "Multi-touch Abandoned Cart & Checkout recovery",
          "Post-Purchase review generation & cross-sell",
          "Customer Winback & re-engagement sequence"
        ]
      },
      {
        title: "Bespoke Responsive Newsletter Design",
        description: "Handcrafted HTML email templates tested across Apple Mail, Gmail, Outlook, and mobile dark modes.",
        iconName: "Mail",
        checkpoints: [
          "Mobile-first responsive fluid grid layout",
          "Brand-consistent typography & button styling",
          "Dark mode color-shift testing",
          "Figma source templates & reusable block modularity"
        ]
      },
      {
        title: "Deliverability, SPF/DKIM & Domain Warming",
        description: "Ensuring 99%+ of your emails land in the primary inbox and never touch the spam or promotions tab.",
        iconName: "ShieldCheck",
        checkpoints: [
          "SPF, DKIM, and DMARC record configuration",
          "Google & Yahoo compliance verification",
          "Custom sending domain authentication",
          "Automated spam-score and bounce mitigation"
        ]
      },
      {
        title: "Advanced Segmentation & CRM Synchronization",
        description: "Grouping subscribers by purchase behavior, engagement tier, location, and lifetime value.",
        iconName: "Users",
        checkpoints: [
          "VIP high-AOV customer segment isolation",
          "Unengaged contact scrubbing & sunset flows",
          "Real-time CRM contact property syncing",
          "Predictive churn prevention alerts"
        ]
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Audit, Deliverability Setup & Domain Authentication",
        duration: "Days 1 - 3",
        description: "We configure DNS records (SPF, DKIM, DMARC), warm the sending domain, and audit existing subscriber lists.",
        keyOutputs: ["100% Deliverability Pass", "List Hygiene Scrubbing", "ESP Setup (Klaviyo/Mailchimp)"]
      },
      {
        stepNumber: "02",
        title: "Core Flow Architecture & Template Design",
        duration: "Days 4 - 8",
        description: "We design custom brand email templates and write persuasive copy for the 5 fundamental revenue flows.",
        keyOutputs: ["5 Core Automated Sequences", "Responsive Master Templates", "Persuasive Copy Suite"]
      },
      {
        stepNumber: "03",
        title: "Flow Activation & Split Testing",
        duration: "Weeks 2 - 3",
        description: "We turn on the automations, test subject line variants, trigger timings, and track direct conversion attribution.",
        keyOutputs: ["Live Automated Revenue", "Subject Line A/B Test Results", "Revenue Tracking Calibration"]
      },
      {
        stepNumber: "04",
        title: "Weekly Campaign Broadcasts & Ongoing Optimization",
        duration: "Ongoing",
        description: "We write, design, and dispatch weekly promotional newsletters while continuously refining flow triggers.",
        keyOutputs: ["Weekly Newsletter Dispatches", "Monthly Retention Reports", "Continuous Flow Tuning"]
      }
    ],
    techStack: [
      { name: "Klaviyo", category: "E-Commerce Lifecycle Marketing" },
      { name: "Mailchimp", category: "Email Campaign Management" },
      { name: "ActiveCampaign", category: "Complex B2B CRM Automation" },
      { name: "HubSpot", category: "Enterprise Inbound CRM" },
      { name: "Litmus", category: "Cross-Client Inbox Rendering" },
      { name: "Brevo", category: "Transactional SMTP Infrastructure" }
    ]
  },

  "graphic-design": {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design & Brand Creatives",
    shortTitle: "Graphic Design",
    kicker: "Visual Identity",
    heroHeadline: "Striking Visuals that",
    heroHighlightWord: "CAPTIVATE.",
    tagline: "Bespoke social media graphics, marketing collaterals, and high-conversion ad creatives.",
    description: "Distinctive, pixel-perfect visual designs tailored for your brand's unique identity.",
    accentColor: "#a78bfa",
    tag: "Creative",
    recommendedPlanId: "turbo",
    externalUrl: "https://tekhportal.com/graphic-design-service-in-yelahanka-bengaluru/",
    primaryStat: {
      value: "+68%",
      label: "Higher Ad Click-Through Rate",
      sublabel: "Compared to standard creative benchmarks"
    },
    keyStats: [
      { value: "1,500+", label: "Brand Assets Designed" },
      { value: "100%", label: "Vector & Print Ready" },
      { value: "24-48h", label: "Fast Creative Turnaround" },
      { value: "50+", label: "Brands Elevated" }
    ],
    codeSnippet: {
      language: "css",
      filename: "creative-grid/ad-matrix.css",
      title: "High-CTR Social Ad Aspect Ratio & Grid Construction",
      description: "Responsive CSS container specifications for multi-surface ad creatives (9:16 Story, 4:5 Feed, 1:1 Square, 16:9 Display).",
      code: `/* Multi-Ratio Performance Ad Grid */
.ad-canvas-story {
  aspect-ratio: 9 / 16;
  max-width: 1080px;
  background: radial-gradient(circle at 50% 20%, #10b981 0%, #07382c 70%);
}

.ad-canvas-feed {
  aspect-ratio: 4 / 5;
  padding: clamp(1rem, 3vw, 2.5rem);
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.ad-badge-urgency {
  background-color: #fbb753;
  color: #07382c;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}`,
      highlights: [
        "Strict IAB Standard Ad Aspect Ratios",
        "Vector Crispness at 300DPI Print & 4K Digital",
        "High-Contrast Color Ratios (> 7:1 Accessibility)",
        "Direct-Response CTA Visual Hierarchy"
      ]
    },
    videoProof: {
      title: "Brand Creative Reel, Motion Posters & Ad Asset Showcase",
      duration: "3:15 min",
      videoType: "4K Showreel",
      thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&fm=jpg&q=88&w=1600",
      caption: "Explore our dynamic portfolio of luxury branding suites, high-CTR performance ad sets, and packaging systems.",
      highlights: [
        { time: "0:00", label: "Luxury Brand Mark Geometry & Color Systems" },
        { time: "0:55", label: "High-CTR Social Ad Variations (Static + Motion)" },
        { time: "1:45", label: "Corporate Decks & Print-Ready Brochures" },
        { time: "2:35", label: "E-Commerce Product Packaging & 3D Renders" }
      ],
      placeholderNote: "Video Proof Canvas: Embed agency showreels, motion graphics reels, and Figma design asset walkthroughs."
    },
    imageProofs: [
      {
        id: "luxury-brand-palette",
        title: "Bespoke Brand Identity & Color Architecture",
        category: "Visual Identity System",
        metricBadge: "Full Brand Suite",
        description: "Royal gold foil, emerald green accents, and bespoke serif typography designed for luxury packaging and store displays.",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "UI & UX Design System"
      },
      {
        id: "social-grid-system",
        title: "High-Aesthetic Social Media Grid & Carousels",
        category: "Social Design Grid",
        metricBadge: "+380% Saves & Shares",
        description: "Seamless 10-slide educational carousels with ornate borders, micro-typography, and high-impact hero frames.",
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Campaign Deliverable"
      },
      {
        id: "high-ctr-performance-ads",
        title: "High-Converting Paid Ad Creative Matrix",
        category: "Ad Creative Matrix",
        metricBadge: "5.8% CTR on Meta",
        description: "Multi-variation ad creatives testing architectural renders, lifestyle shots, price anchors, and urgency tags.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "ROAS & Revenue Dashboard"
      },
      {
        id: "corporate-brochure-deck",
        title: "Corporate PDF Brochure & Pitch Deck System",
        category: "Corporate Decks",
        metricBadge: "28-Page Master Deck",
        description: "Executive presentation decks, printed annual report covers, and clean data visualization graphs.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "UI & UX Design System"
      }
    ],
    deliverables: [
      {
        title: "Social Media Post & Carousel Design",
        description: "Scroll-stopping Instagram posts, multi-slide carousels, and LinkedIn graphics that build engagement and brand recall.",
        iconName: "Palette",
        checkpoints: [
          "Consistent grid aesthetics & color system",
          "Educational & promotional carousel templates",
          "Story & Reel cover graphic suites",
          "Source Figma files & organized asset exports"
        ]
      },
      {
        title: "High-CTR Digital Ad Creatives",
        description: "Direct-response ad banners engineered with high contrast, clear visual hierarchies, and compelling action triggers.",
        iconName: "Target",
        checkpoints: [
          "Google Display Network standard IAB ad sizes",
          "Meta Feed & Story 9:16 / 1:1 / 4:5 ratios",
          "Dynamic A/B testing variations per campaign",
          "Proven direct-response typography guidelines"
        ]
      },
      {
        title: "Corporate Brochures & Presentation Pitch Decks",
        description: "Investor-ready slide decks, digital PDF brochures, and company profile books that win high-ticket contracts.",
        iconName: "FileText",
        checkpoints: [
          "Print-ready CMYK 300DPI PDF layouts",
          "Interactive digital PDF with clickable hyperlinks",
          "Custom vector infographics & financial charts",
          "Master PowerPoint / Google Slides / Keynote templates"
        ]
      },
      {
        title: "Logo & Visual Brand Identity Systems",
        description: "Memorable logo marks, typography pairings, color palette guides, and comprehensive brand books.",
        iconName: "Sparkles",
        checkpoints: [
          "Primary, secondary, and sub-mark logo variations",
          "Complete typography pairing specifications",
          "Digital HEX / RGB and Print CMYK / Pantone palettes",
          "Brand guidelines rulebook PDF"
        ]
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Creative Brief & Brand Aesthetic Moodboard",
        duration: "Days 1 - 2",
        description: "We define the visual tone, review competitor aesthetics, and establish a curated moodboard of textures and typography.",
        keyOutputs: ["Curated Brand Moodboard", "Color Palette Direction", "Creative Concept Brief"]
      },
      {
        stepNumber: "02",
        title: "Concept Exploration & Initial Design Iterations",
        duration: "Days 3 - 5",
        description: "Our designers craft 3 distinct visual directions with real content to showcase how the brand lives across touchpoints.",
        keyOutputs: ["3 Distinct Design Directions", "Real Mockups on Mobile & Print", "Feedback Review Round"]
      },
      {
        stepNumber: "03",
        title: "Refinement & Asset Generation Sprint",
        duration: "Days 6 - 8",
        description: "We refine the chosen direction and build out the full asset suite across all required dimensions and formats.",
        keyOutputs: ["Complete Asset Matrix", "Figma Design System", "High-Resolution Exports"]
      },
      {
        stepNumber: "04",
        title: "Master File Delivery & Brand Guidelines Handoff",
        duration: "Day 9",
        description: "Delivery of all vector AI, SVG, PNG, PDF, and editable Figma source files with complete usage guidelines.",
        keyOutputs: ["Source Files & Vector Packs", "Brand Guidelines PDF", "Cloud Asset Folder Access"]
      }
    ],
    techStack: [
      { name: "Figma", category: "Collaborative Design Systems" },
      { name: "Adobe Illustrator", category: "Vector Precision & Logo Design" },
      { name: "Adobe Photoshop", category: "Photo Manipulation & Retouching" },
      { name: "Adobe InDesign", category: "Multi-Page Editorial Layout" },
      { name: "Blender 3D", category: "3D Product Renders & Mockups" }
    ]
  },

  "video-marketing": {
    id: "video-marketing",
    slug: "video-marketing",
    title: "Video Marketing, Commercials & Reels",
    shortTitle: "Video Production",
    kicker: "Video & Reels",
    heroHeadline: "High-Retention Video",
    heroHighlightWord: "COMMERCIALS.",
    tagline: "Cinematic short-form reels, 3D motion graphics, and high-converting video ads.",
    description: "Engaging video content engineered to capture attention and stop the scroll.",
    accentColor: "#f87171",
    tag: "Motion",
    recommendedPlanId: "turbo",
    externalUrl: "https://tekhportal.com/video-marketing-service-in-yelahanka-bengaluru/",
    primaryStat: {
      value: "12.5M+",
      label: "Total Video Views Generated",
      sublabel: "Across Instagram, YouTube & Meta Ads"
    },
    keyStats: [
      { value: "+320%", label: "Average View Retention Lift" },
      { value: "4K Cinema", label: "Production Resolution" },
      { value: "3.8x", label: "Higher Conversion on Video Ads" },
      { value: "24h", label: "Rapid Trend Turnaround" }
    ],
    codeSnippet: {
      language: "bash",
      filename: "pipeline/transcode-reel.sh",
      title: "FFmpeg 4K Cinema to 9:16 Vertical Transcoding Pipeline",
      description: "Automated video optimization pipeline preserving 60fps frame rate and applying Rec.709 color matrix.",
      code: `#!/usr/bin/env bash
# High-Quality 9:16 Short-Form Video Encoder
ffmpeg -i master_4k.mov \\
  -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920" \\
  -c:v libx264 -preset slow -crf 18 \\
  -pix_fmt yuv420p -colorspace bt709 \\
  -r 60 -c:a aac -b:a 320k \\
  -movflags +faststart \\
  output_viral_reel_60fps.mp4`,
      highlights: [
        "Crisp 1080x1920 60FPS Fluid Motion",
        "FastStart Moov Atom for Instant Playback",
        "Lossless AAC 320kbps Audio Mastering",
        "Color Space Matrix Calibrated for Mobile OLED Displays"
      ]
    },
    videoProof: {
      title: "4K Showreel: Viral Instagram Reels, Product Commercials & Motion Typography",
      duration: "2:48 min",
      videoType: "4K Showreel",
      thumbnailUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&fm=jpg&q=88&w=1600",
      caption: "Experience our high-octane editing style, cinematic sound design, and viral short-form retention pacing.",
      highlights: [
        { time: "0:00", label: "Commercial Auto Shoot: Dynamic Camera Moves" },
        { time: "0:45", label: "Viral Reel Edits: Sound Design & Motion Graphics" },
        { time: "1:30", label: "E-Commerce 3D Product Breakdown" },
        { time: "2:15", label: "YouTube Long-Form Retention Pacing" }
      ],
      placeholderNote: "Video Proof Canvas: Embed YouTube showreels, Instagram reel embeds, or client commercial videos."
    },
    imageProofs: [
      {
        id: "viral-reel-reach",
        title: "Instagram Reel Viral Reach Dashboard (1.8M Views)",
        category: "Short-Form Analytics",
        metricBadge: "1.8M Organic Views",
        description: "Viral short-form hook pacing driving 1,200+ direct test ride inquiries from urban commuters.",
        imageUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Live Performance Telemetry"
      },
      {
        id: "studio-commercial-shoot",
        title: "4K Cinema Commercial Production & Grading",
        category: "Cinema Post-Production",
        metricBadge: "DaVinci Color Grade",
        description: "High-speed macro lens captures highlighting diamond clarity, gold luster, and bridal elegance.",
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "High-Resolution Output"
      },
      {
        id: "motion-typography-ads",
        title: "Dynamic Motion Graphics & 3D Explainer Stills",
        category: "3D Motion Design",
        metricBadge: "94% 3-Second Hook Rate",
        description: "Abstract 3D motion typography and UI animation explaining complex cloud data security.",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "UI & UX Design System"
      },
      {
        id: "youtube-retention-curve",
        title: "YouTube Long-Form Audience Retention Curve",
        category: "Audience Retention Telemetry",
        metricBadge: "68% Average Retention",
        description: "Optimized B-roll pacing, sound design accents, and chapter markers keeping viewers watching past 10 minutes.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Live Performance Telemetry"
      }
    ],
    deliverables: [
      {
        title: "Instagram Reels, Shorts & TikTok Viral Editing",
        description: "Fast-paced, hook-optimized short-form video editing with kinetic typography, sound effects, and color grading.",
        iconName: "Film",
        checkpoints: [
          "Scroll-stopping 3-second hook crafting",
          "Dynamic kinetic captions & motion emojis",
          "Licensed trending background audio selection",
          "Exported in crisp 1080x1920 60FPS"
        ]
      },
      {
        title: "High-Production Commercials & Brand Films",
        description: "Cinematic brand promotional videos capturing the soul, mission, and premium positioning of your business.",
        iconName: "Video",
        checkpoints: [
          "Concept storyboard & scriptwriting",
          "4K cinema camera shoot direction",
          "Professional voiceover recording & licensing",
          "DaVinci Resolve cinematic color grading"
        ]
      },
      {
        title: "High-Converting Paid Video Ad Variations",
        description: "Direct-response video ads structured to test multiple hooks, problem angles, and call-to-actions.",
        iconName: "Target",
        checkpoints: [
          "Multi-hook testing matrix (3 hooks x 2 bodies x 2 CTAs)",
          "UGC (User Generated Content) curation & edits",
          "Product feature callout animations",
          "WhatsApp & website direct traffic optimization"
        ]
      },
      {
        title: "YouTube Long-Form Video Editing & Packaging",
        description: "Full YouTube channel post-production, including retention-driven editing, custom high-CTR thumbnails, and sound design.",
        iconName: "PlayCircle",
        checkpoints: [
          "Pacing optimization & dead-air removal",
          "Custom B-roll insertion & graphics overlays",
          "Sound effect layering & audio mastering",
          "High-CTR 3D thumbnail design"
        ]
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Concept, Scriptwriting & Hook Architecture",
        duration: "Days 1 - 2",
        description: "We research trending formats in your niche, write word-for-word scripts, and design magnetic visual hooks.",
        keyOutputs: ["Script Breakdown", "Visual Storyboard", "Hook & Audio Angle Blueprint"]
      },
      {
        stepNumber: "02",
        title: "Filming & Raw Footage Ingestion",
        duration: "Days 3 - 4",
        description: "On-location commercial filming or remote ingestion of client assets and raw recordings.",
        keyOutputs: ["4K Raw Footage Library", "Audio Sync & File Logging", "A-Roll / B-Roll Organization"]
      },
      {
        stepNumber: "03",
        title: "Post-Production, Motion Graphics & Sound Design",
        duration: "Days 5 - 7",
        description: "Our editors assemble the cut, layer SFX, animate typography, and apply cinematic color grades.",
        keyOutputs: ["First Cut Review Link", "Kinetic Subtitles & Sound Design", "Color Graded Master"]
      },
      {
        stepNumber: "04",
        title: "Final Export & Multi-Platform Delivery",
        duration: "Day 8",
        description: "We export in optimal bitrates and aspect ratios (9:16 vertical, 16:9 widescreen, 1:1 square) ready for publishing.",
        keyOutputs: ["4K & 1080p Master Files", "Multi-Ratio Social Cuts", "Thumbnail Packages"]
      }
    ],
    techStack: [
      { name: "Adobe Premiere Pro", category: "Non-Linear Video Editing" },
      { name: "DaVinci Resolve Studio", category: "Color Grading & Mastering" },
      { name: "Adobe After Effects", category: "2D/3D Motion Graphics" },
      { name: "CapCut Pro", category: "Mobile Viral Pacing" },
      { name: "Cinema 4D", category: "3D Product Animation" }
    ]
  },

  "branding": {
    id: "branding",
    slug: "branding",
    title: "Branding & Strategic Identity Direction",
    shortTitle: "Brand Identity",
    kicker: "Brand Architecture",
    heroHeadline: "Build a Memorable,",
    heroHighlightWord: "ICONIC BRAND.",
    tagline: "Distinctive brand positioning, visual style guides, and premium identity systems.",
    description: "Elevate your market position with timeless design and cohesive brand guidelines.",
    accentColor: "#e879f9",
    tag: "Branding",
    recommendedPlanId: "supersonic",
    externalUrl: "https://tekhportal.com/branding-services-in-yelahanka-bengaluru/",
    primaryStat: {
      value: "100%",
      label: "Bespoke Brand Identity Systems",
      sublabel: "Never templated, always timeless"
    },
    keyStats: [
      { value: "50+", label: "Brand Books Delivered" },
      { value: "3.5x", label: "Perceived Value & Pricing Power" },
      { value: "100%", label: "Trademark Ready Assets" },
      { value: "360°", label: "Touchpoint Consistency" }
    ],
    codeSnippet: {
      language: "typescript",
      filename: "brand-architecture/brand-tokens.ts",
      title: "Comprehensive Brand Identity Architecture & Golden-Ratio Geometry",
      description: "TypeScript token definitions ensuring brand geometry, color harmonies, and typography scales across all mediums.",
      code: `export const BrandArchitecture = {
  name: "Tekhportal",
  geometry: {
    goldenRatio: 1.618,
    symbolGrid: "16x16 modular grid",
    minClearSpace: "0.5x symbol diameter",
    minPrintSize: "15mm"
  },
  palette: {
    primary: { name: "Forest Authority", hex: "#07382c", cmyk: "87, 45, 78, 55", pantone: "560 C" },
    accent: { name: "Emerald Signal", hex: "#10b981", cmyk: "72, 0, 68, 0", pantone: "7724 C" },
    gold: { name: "Warm Amber", hex: "#fbb753", cmyk: "0, 32, 75, 0", pantone: "136 C" }
  },
  typography: {
    headline: "Plus Jakarta Sans, font-black, uppercase",
    editorial: "Newsreader, serif",
    body: "Plus Jakarta Sans, font-normal"
  }
} as const;`,
      highlights: [
        "Exact Pantone & CMYK Print Matching",
        "Golden-Ratio Geometry Vector Scale Rules",
        "Digital HEX & CSS Custom Property Sync",
        "100% Trademark-Ready Master Formats"
      ]
    },
    videoProof: {
      title: "Comprehensive Brand Identity System & Guidelines Reel Walkthrough",
      duration: "3:30 min",
      videoType: "Case Study Video",
      thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&fm=jpg&q=88&w=1600",
      caption: "Explore how we repositioned a traditional luxury house into a contemporary brand commanding 40% higher price points.",
      highlights: [
        { time: "0:00", label: "Brand Positioning & Category Archetypes" },
        { time: "1:05", label: "Logo Geometry & Golden Ratio Construction" },
        { time: "2:10", label: "Color Harmony & Print CMYK / Pantone Tuning" },
        { time: "3:00", label: "Digital & Physical Brand Guidelines Manual" }
      ],
      placeholderNote: "Video Proof Canvas: Embed full brand story reels, logo construction videos, and brand guidelines walkthroughs."
    },
    imageProofs: [
      {
        id: "brand-guidelines-book",
        title: "Complete 48-Page Brand Guidelines Manual",
        category: "Brand Guidelines PDF",
        metricBadge: "Full Brand Book",
        description: "Official typography specifications, minimum clear space rules, incorrect usage guides, and gold foil print parameters.",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "UI & UX Design System"
      },
      {
        id: "logo-mark-geometry",
        title: "Precision Vector Logo Mark & Symbolism",
        category: "Vector Geometry",
        metricBadge: "Trademark Ready",
        description: "Geometric construction combining forward motion, lightning energy, and sleek aerodynamic curves.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Campaign Deliverable"
      },
      {
        id: "stationery-packaging-suite",
        title: "Luxury Stationery, Box Packaging & Signage Mockups",
        category: "Packaging Suite",
        metricBadge: "Physical Packaging Suite",
        description: "Embossed business cards, luxury garment tags, shopping bags, and illuminated store facade signage.",
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "High-Resolution Output"
      },
      {
        id: "brand-tone-matrix",
        title: "Brand Voice, Messaging Framework & Tagline Architecture",
        category: "Tone of Voice Matrix",
        metricBadge: "Positioning Matrix",
        description: "Tone of voice guidelines across social, formal press, customer support, and commercial advertisements.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "UI & UX Design System"
      }
    ],
    deliverables: [
      {
        title: "Brand Strategy & Market Positioning Matrix",
        description: "Defining your unique value proposition, target buyer archetypes, and market whitespace to stand apart from competitors.",
        iconName: "Compass",
        checkpoints: [
          "Competitor landscape & perceptual gap mapping",
          "Brand mission, vision, and core pillars",
          "Audience persona empathy mapping",
          "Category point-of-difference articulation"
        ]
      },
      {
        title: "Logo Design Suite & Symbolic Mark",
        description: "Crafting timeless, versatile logo lockups engineered to scale seamlessly from 16px favicons to massive roadside billboards.",
        iconName: "Sparkles",
        checkpoints: [
          "Primary logo lockup (horizontal & vertical)",
          "Secondary sub-mark & monogram favicon",
          "Golden-ratio vector geometric construction",
          "Dark & light background color adaptations"
        ]
      },
      {
        title: "Color Harmony & Typography Hierarchy",
        description: "A cohesive color and font system that evokes instant trust, sophistication, and brand recognition.",
        iconName: "Palette",
        checkpoints: [
          "Primary, secondary, and accent color hex codes",
          "CMYK & Pantone color matching for print",
          "Primary editorial font & web body font pairings",
          "Digital accessibility contrast validation"
        ]
      },
      {
        title: "Comprehensive Brand Guidelines Book (PDF)",
        description: "The official master manual containing all rules, dos and don'ts, spacing regulations, and collateral mockups.",
        iconName: "BookOpen",
        checkpoints: [
          "Clear space & minimum scale requirements",
          "Approved & forbidden logo modifications",
          "Physical stationery & merchandise guidelines",
          "Digital web & social media application specs"
        ]
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Strategic Brand Discovery & Competitor Audit",
        duration: "Week 1",
        description: "We conduct executive stakeholder interviews, analyze competitor identities, and define the brand positioning strategy.",
        keyOutputs: ["Brand Discovery Deck", "Competitor Matrix", "Aesthetic Moodboards"]
      },
      {
        stepNumber: "02",
        title: "Logo Concepts & Visual Identity Exploration",
        duration: "Weeks 2 - 3",
        description: "Our design team presents 3 distinctive brand identity directions complete with typography, color, and real-world mockups.",
        keyOutputs: ["3 Complete Brand Directions", "Real Mockup Demonstrations", "Client Feedback Alignment"]
      },
      {
        stepNumber: "03",
        title: "Refinement & Brand Guidelines Authoring",
        duration: "Weeks 3 - 4",
        description: "We refine the chosen direction, standardize vector scales, and compile the exhaustive brand guidelines manual.",
        keyOutputs: ["Master Brand Guidelines PDF", "Typography Licensing & Pairing Guide", "Print & Digital Specs"]
      },
      {
        stepNumber: "04",
        title: "Collateral Rollout & Master Asset Delivery",
        duration: "Week 5",
        description: "We design all business cards, packaging, social banners, and provide master vector packages ready for trademarking.",
        keyOutputs: ["Complete Vector AI/SVG/PDF Pack", "Stationery & Packaging Print Files", "Trademark Ready Identity"]
      }
    ],
    techStack: [
      { name: "Adobe Illustrator", category: "Vector Precision & Construction" },
      { name: "Figma", category: "Digital Component Tokenization" },
      { name: "Adobe InDesign", category: "Master Editorial Brand Books" },
      { name: "Pantone Color Bridge", category: "Physical Print Color Standards" },
      { name: "FontLab", category: "Custom Typographic Customization" }
    ]
  },

  "content": {
    id: "content",
    slug: "content",
    title: "Content Marketing & Strategy",
    shortTitle: "Content Strategy",
    kicker: "Authority Content",
    heroHeadline: "Persuasive Storytelling that",
    heroHighlightWord: "BUILDS TRUST.",
    tagline: "High-impact editorial content and copy that turns casual readers into loyal buyers.",
    description: "SEO blogs, landing page copy, and thought leadership engineered to rank and convert.",
    accentColor: "#f472b6",
    tag: "Editorial",
    recommendedPlanId: "turbo",
    externalUrl: "https://tekhportal.com/content-marketing/",
    primaryStat: {
      value: "3.2x",
      label: "Lead-to-Sale Velocity Lift",
      sublabel: "Driven by authoritative content"
    },
    keyStats: [
      { value: "250k+", label: "Organic Article Readers" },
      { value: "64%", label: "Lower Cost Per Acquisition" },
      { value: "100%", label: "Original Research & Data" },
      { value: "4.8x", label: "Average Time On Page" }
    ],
    codeSnippet: {
      language: "markdown",
      filename: "content-strategy/topic-cluster-map.md",
      title: "Topical Authority Cluster & Search Intent Hierarchy",
      description: "Structured markdown blueprint mapping high-intent search nodes to parent pillar articles and lead magnets.",
      code: `# Pillar: Enterprise Cloud Infrastructure Architecture
## Cluster Node 1: Zero-Trust Security Compliance Framework
- Search Intent: Commercial Investigation (Volume: 14.8k)
- Primary Entities: IAM, SOC2 Type II, TLS 1.3, Kubernetes Ingress
- Target Word Count: 2,800 words (Original Research Data Included)

## Cluster Node 2: Multi-Cloud Latency & Edge Cost Optimization
- Search Intent: Transactional / Problem-Solving (Volume: 8.2k)
- Lead Magnet Gated Asset: "Cloud Cost Calculator Excel & PDF"
- Internal Link Path: Connects to Node 1 & Demo Booking Page`,
      highlights: [
        "Semantic Entity Graph Density (NLP Optimization)",
        "Internal Link Bridge Architecture",
        "High-Converting Lead Magnet Placement",
        "Original Research & Benchmark Data Infusion"
      ]
    },
    videoProof: {
      title: "Content Cluster Strategy & Search Intent Funnel Blueprint Walkthrough",
      duration: "4:05 min",
      videoType: "Loom Walkthrough",
      thumbnailUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&fm=jpg&q=88&w=1600",
      caption: "Discover our proprietary topic cluster methodology that drove 180k+ organic readers to an emerging lifestyle brand.",
      highlights: [
        { time: "0:00", label: "Semantic Keyword Cluster Mapping" },
        { time: "1:20", label: "Thought Leadership vs SEO Pillar Strategy" },
        { time: "2:30", label: "Lead Magnet & Content Funnel Architecture" },
        { time: "3:40", label: "Multi-Platform Repurposing (LinkedIn + Newsletter)" }
      ],
      placeholderNote: "Video Proof Canvas: Embed editorial walkthroughs, content performance metrics, and organic readership growth recordings."
    },
    imageProofs: [
      {
        id: "editorial-cluster-map",
        title: "Comprehensive Topic Cluster & Pillar Strategy",
        category: "Editorial Strategy",
        metricBadge: "180k+ Readers",
        description: "Interlinked pillar articles and sub-topics capturing high-intent searches across all buyer stages.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Campaign Deliverable"
      },
      {
        id: "thought-leadership-article",
        title: "Executive Thought Leadership Article Performance",
        category: "Thought Leadership",
        metricBadge: "14.2k Shares & Reads",
        description: "In-depth industry whitepaper published across LinkedIn Pulse and medium driving enterprise B2B inbound leads.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Live Performance Telemetry"
      },
      {
        id: "lead-magnet-funnel",
        title: "Interactive Guide & Ebook Lead Capture Funnel",
        category: "Lead Magnet Funnel",
        metricBadge: "2,400+ Downloads",
        description: "Property Investment Guide capturing qualified investor contact information.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Conversion Funnel"
      },
      {
        id: "repurposed-carousel-content",
        title: "Multi-Channel Content Repurposing Engine",
        category: "Repurposing Engine",
        metricBadge: "4.8x Engagement",
        description: "Transforming long-form guides into viral Instagram carousels and bite-sized reels.",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "UI & UX Design System"
      }
    ],
    deliverables: [
      {
        title: "SEO Pillar & Cluster Content Writing",
        description: "In-depth, beautifully formatted 2,000+ word guides that answer customer questions comprehensively.",
        iconName: "BookOpen",
        checkpoints: [
          "Comprehensive industry research & outline",
          "Semantic entity optimization (NLP keyword density)",
          "Custom graphical assets & infographic headers",
          "Strategic lead capture call-to-actions"
        ]
      },
      {
        title: "Website & High-Converting Sales Copywriting",
        description: "Persuasive, customer-centric copy for homepages, service offerings, landing pages, and brochures.",
        iconName: "Feather",
        checkpoints: [
          "Customer pain-point & benefit articulation",
          "Value proposition & UVP refinement",
          "Hero section copy and headline variants",
          "Frictionless checkout and lead form copy"
        ]
      },
      {
        title: "Executive Thought Leadership & Ghostwriting",
        description: "Elevating founders and CXOs on LinkedIn with industry perspectives, data studies, and commentary.",
        iconName: "Award",
        checkpoints: [
          "Founder interview & voice profiling",
          "Weekly LinkedIn long-form articles & posts",
          "Industry trend breakdown & market analysis",
          "Media pitch & guest contribution articles"
        ]
      },
      {
        title: "Lead Magnets, Whitepapers & Case Studies",
        description: "High-value downloadable resources that capture high-intent emails and phone numbers.",
        iconName: "Download",
        checkpoints: [
          "E-book & PDF guide creation & styling",
          "Customer success story case study formats",
          "Email opt-in gate & thank you sequence copy",
          "Data-driven industry benchmark reports"
        ]
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Audience Persona & Content Gap Audit",
        duration: "Week 1",
        description: "We analyze what your prospective buyers are searching for, what competitors are missing, and where authority gaps lie.",
        keyOutputs: ["Audience Intent Map", "Competitor Content Gap Matrix", "90-Day Editorial Roadmap"]
      },
      {
        stepNumber: "02",
        title: "Topic Cluster Architecture & Content Creation",
        duration: "Weeks 2 - 4",
        description: "We draft authoritative articles, infuse them with proprietary insights, and format them with compelling visual assets.",
        keyOutputs: ["Optimized Pillar Articles", "Custom Infographics & Diagrams", "SEO Meta & Schema Alignment"]
      },
      {
        stepNumber: "03",
        title: "Distribution & Multi-Channel Repurposing",
        duration: "Month 2 onwards",
        description: "We publish content across your website, repurpose insights into LinkedIn carousels, newsletter blasts, and video scripts.",
        keyOutputs: ["Social Carousels & Snippets", "Email Newsletter Broadcasts", "Syndication & Backlink Inflow"]
      },
      {
        stepNumber: "04",
        title: "Readership Analytics & Conversion Optimization",
        duration: "Ongoing",
        description: "We track dwell time, scroll depth, backlink accrual, and email lead captures to continually refine content topics.",
        keyOutputs: ["Live Engagement Reporting", "Lead Capture Attribution", "Content Refresh & Update Cycles"]
      }
    ],
    techStack: [
      { name: "SurferSEO", category: "NLP Content Optimization" },
      { name: "Clearscope", category: "Search Relevance Analysis" },
      { name: "Grammarly Enterprise", category: "Tone & Voice Consistency" },
      { name: "BuzzSumo", category: "Viral Topic Discovery" },
      { name: "Notion", category: "Editorial Calendar Management" },
      { name: "Google Analytics 4", category: "Dwell Time & Goal Tracking" }
    ]
  },

  "photo-video": {
    id: "photo-video",
    slug: "photo-video",
    title: "Commercial Photography & Video Production",
    shortTitle: "Media Production",
    kicker: "Studio Shoots",
    heroHeadline: "High-Definition Visual",
    heroHighlightWord: "ASSETS.",
    tagline: "Professional studio product photography, corporate headshots, and editorial shoots.",
    description: "High-resolution imagery crafted to showcase your products and brand at their finest.",
    accentColor: "#facc15",
    tag: "Production",
    recommendedPlanId: "supersonic",
    externalUrl: "https://tekhportal.com/photography-videography-services-in-yelahanka-bangalore/",
    primaryStat: {
      value: "4K Cinema",
      label: "Broadcast-Grade Capture Quality",
      sublabel: "Sony Cinema & Profoto lighting"
    },
    keyStats: [
      { value: "500+", label: "Product SKUs Photographed" },
      { value: "100%", label: "High-End Retouching & Grading" },
      { value: "Studio", label: "In-House & On-Location Shoot" },
      { value: "48h", label: "Preview Gallery Delivery" }
    ],
    codeSnippet: {
      language: "json",
      filename: "studio-spec/lighting-exif-profile.json",
      title: "Commercial Studio Lighting & Cinema Color Calibration Profile",
      description: "Color-calibrated camera sensor metadata and 3-point Profoto strobe power ratios.",
      code: `{
  "camera_sensor": {
    "model": "Sony FX6 Cinema 4K",
    "shutter_angle": "180.0 deg (1/50s)",
    "base_iso": "800 / 12800 Dual Native",
    "color_profile": "S-Log3 / S-Gamut3.Cine"
  },
  "studio_lighting": {
    "key_light": "Profoto D2 1000W (Softbox Octa 5ft, Power 7.8)",
    "fill_light": "Profoto 500W (White Umbrella, Power 5.2)",
    "rim_light": "Stripbox 1x4ft with Honeycomb Grid (Power 6.5)",
    "color_temperature": "5600K Daylight Balanced"
  }
}`,
      highlights: [
        "Calibrated 5600K True-to-Life Color Accuracy",
        "Dual Native ISO Low-Noise Capture",
        "Focus-Stacked Macro Texture Clarity",
        "Broadcast 10-Bit 4:2:2 Color Science"
      ]
    },
    videoProof: {
      title: "Cinematic Product Shoot Behind-the-Scenes & Final 4K Commercial Reel",
      duration: "3:05 min",
      videoType: "4K Showreel",
      thumbnailUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&fm=jpg&q=88&w=1600",
      caption: "Take a behind-the-scenes look at our lighting setups, cinema rigs, and final retouched commercial stills.",
      highlights: [
        { time: "0:00", label: "Studio Lighting Setup (Profoto 3-Point System)" },
        { time: "0:50", label: "Macro Jewellery Capture & Diamond Sparkle" },
        { time: "1:40", label: "On-Location Real Estate 4K Drone Passes" },
        { time: "2:30", label: "High-End Retouching & Color Grading Demo" }
      ],
      placeholderNote: "Video Proof Canvas: Embed studio behind-the-scenes videos, commercial camera reels, and 4K aerial drone showcases."
    },
    imageProofs: [
      {
        id: "luxury-jewellery-macro",
        title: "Studio Macro Luxury Jewellery & Diamond Photography",
        category: "Macro Studio Capture",
        metricBadge: "High-Res Macro Stills",
        description: "Focus-stacked high-resolution captures showing authentic gemstone cuts, 22K gold reflections, and bridal necklaces.",
        imageUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "High-Resolution Output"
      },
      {
        id: "executive-leadership-portraits",
        title: "Corporate Executive Leadership & Team Lifestyle Shoot",
        category: "Executive Portraiture",
        metricBadge: "Executive Brand Suite",
        description: "Natural-light portraits of founders and engineers for website about pages, press kits, and LinkedIn profiles.",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "Campaign Deliverable"
      },
      {
        id: "real-estate-drone-4k",
        title: "Architectural & Real Estate 4K Aerial Drone Capture",
        category: "4K Drone Cinematography",
        metricBadge: "4K Aerial Cinematography",
        description: "Sweeping aerial footage and golden-hour exterior stills of luxury villa developments.",
        imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "High-Resolution Output"
      },
      {
        id: "ecommerce-product-packshots",
        title: "E-Commerce Pure White Packshots & Lifestyle Flat-Lays",
        category: "E-Commerce Packshots",
        metricBadge: "Amazon / Shopify Ready",
        description: "Pure white 255 RGB background packshots, detail close-ups, and aesthetic lifestyle environmental shots.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&fm=jpg&q=88&w=1200",
        slotType: "High-Resolution Output"
      }
    ],
    deliverables: [
      {
        title: "Commercial Product Photography for E-Commerce",
        description: "Flawlessly lit product packshots, 360-degree views, and macro texture details ready for Shopify, Amazon, and print catalogs.",
        iconName: "Camera",
        checkpoints: [
          "Pure white (RGB 255) Amazon/Shopify packshots",
          "Focus-stacked macro detail close-ups",
          "Creative lifestyle contextual staging",
          "High-end dust, scratch, and reflection removal"
        ]
      },
      {
        title: "Corporate Brand Shoots & Leadership Portraits",
        description: "Modern, professional portraits and candid team photography that humanize your brand and build trust.",
        iconName: "Users",
        checkpoints: [
          "Executive headshots & leadership portraits",
          "Office environment & company culture captures",
          "Press kit & PR publication image packages",
          "Color-graded high-resolution JPEG and TIFF delivery"
        ]
      },
      {
        title: "On-Location Commercial Cinematography",
        description: "4K cinema camera production capturing the scale of your facilities, manufacturing lines, and retail storefronts.",
        iconName: "Video",
        checkpoints: [
          "Sony FX6 / FX3 Cinema Camera rigs",
          "Professional wireless boom & lavalier audio",
          "Motorized slider & gimbal stabilization",
          "Broadcast-standard 10-bit 4:2:2 color profiles"
        ]
      },
      {
        title: "Real Estate & Infrastructure Drone 4K Capture",
        description: "Licensed aerial drone footage and photography capturing architecture, land parcels, and neighborhood connectivity.",
        iconName: "Compass",
        checkpoints: [
          "DJI 4K cinema aerial video passes",
          "Golden-hour sunrise/sunset architectural stills",
          "Site boundary & landmark overlay graphics",
          "High-altitude 360-degree interactive panorama"
        ]
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Shot List Architecture & Moodboard Styling",
        duration: "Days 1 - 2",
        description: "We prepare a detailed shot list, coordinate props, scouting locations, and establish the lighting direction.",
        keyOutputs: ["Detailed Production Shot List", "Lighting & Moodboard Direction", "Shoot Day Schedule"]
      },
      {
        stepNumber: "02",
        title: "Production Shoot Day (Studio or On-Location)",
        duration: "Day 3",
        description: "Our photography and cinema crew executes the shoot with live tethered monitor review for client sign-off.",
        keyOutputs: ["Complete Raw Image Roster", "4K Video Footage Log", "Tethered On-Set Verification"]
      },
      {
        stepNumber: "03",
        title: "High-End Retouching & Color Grading",
        duration: "Days 4 - 6",
        description: "We perform frequency separation retouching, color calibration, skin tone balancing, and background cleaning.",
        keyOutputs: ["First Look Proofing Gallery", "High-Resolution Retouched Stills", "Color Graded Video Clips"]
      },
      {
        stepNumber: "04",
        title: "Final High-Resolution Asset Delivery",
        duration: "Day 7",
        description: "Delivery of full-resolution TIFF print files and optimized WebP/JPEG digital assets organized by product SKU.",
        keyOutputs: ["Print-Ready High-Res TIFFs", "Web-Optimized JPEG/WebP", "Commercial Usage Rights"]
      }
    ],
    techStack: [
      { name: "Sony FX6 & A7R V", category: "61MP 4K Cinema Optics" },
      { name: "Profoto Studio Lighting", category: "High-Speed Sync Flash" },
      { name: "Capture One Pro", category: "Live Tethered Shooting & Color" },
      { name: "DaVinci Resolve Studio", category: "Cinematic 10-Bit Color Grading" },
      { name: "DJI Mavic 3 Pro", category: "4K Cinema Aerial Drone" }
    ]
  }
};

export const ALL_DETAILED_SERVICES_LIST = Object.values(DETAILED_SERVICES);

export function getServiceBySlug(slug: string): DetailedServiceData | undefined {
  const normalized = slug.toLowerCase().trim();
  return DETAILED_SERVICES[normalized] || ALL_DETAILED_SERVICES_LIST.find(s => s.slug === normalized || s.id === normalized);
}

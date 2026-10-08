import { useState, useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { AllServicesPage } from "./pages/AllServicesPage";
import {
  SeoPage,
  PpcPage,
  WebDevPage,
  ContentMarketingPage,
  GraphicDesignPage,
  VideoMarketingPage,
  EmailMarketingPage,
  LeadGenPage,
  BrandingPage,
  EcommercePage,
  UiUxPage,
  PhotoVideoPage
} from "./pages/services";
import { DETAILED_SERVICES } from "./data/servicesDetailedData";

export type RouteState = {
  type: "home" | "all-services" | "service";
  slug?: string;
};

// Pure helper function to parse route from location
function parseRouteFromLocation(): RouteState {
  if (typeof window === "undefined") return { type: "home" };

  const hash = window.location.hash.toLowerCase();
  const searchParams = new URLSearchParams(window.location.search);
  const queryService = searchParams.get("service")?.toLowerCase();

  if (queryService) {
    if (queryService === "all") {
      return { type: "all-services" };
    }
    if (DETAILED_SERVICES[queryService]) {
      return { type: "service", slug: queryService };
    }
  }

  // Check for all-services hub
  if (hash === "#/services" || hash === "#/all-services" || hash === "#all-services") {
    return { type: "all-services" };
  }

  // Match patterns like #/services/seo or #/service/seo
  const serviceMatch = hash.match(/^#\/?(?:services|service)\/([a-z0-9-]+)/i);
  if (serviceMatch && serviceMatch[1] && DETAILED_SERVICES[serviceMatch[1]]) {
    return { type: "service", slug: serviceMatch[1] };
  }

  // Check direct match like #seo
  const directSlug = hash.replace(/^#\/?/, "");
  if (DETAILED_SERVICES[directSlug]) {
    return { type: "service", slug: directSlug };
  }

  return { type: "home" };
}

export function App() {
  const [currentRoute, setCurrentRoute] = useState<RouteState>(() => parseRouteFromLocation());

  // Listen to hashchange & popstate events
  useEffect(() => {
    const handleHashChange = () => {
      const route = parseRouteFromLocation();
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  const handleNavigateHome = () => {
    setCurrentRoute({ type: "home" });
    window.location.hash = "#top";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateAllServices = () => {
    setCurrentRoute({ type: "all-services" });
    window.location.hash = "/services";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateService = (slug: string) => {
    const normalized = slug.toLowerCase();
    if (DETAILED_SERVICES[normalized]) {
      setCurrentRoute({ type: "service", slug: normalized });
      window.location.hash = `/services/${normalized}`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Render All Services Hub Page
  if (currentRoute.type === "all-services") {
    return (
      <AllServicesPage
        onNavigateHome={handleNavigateHome}
        onNavigateService={handleNavigateService}
      />
    );
  }

  // Render Individual Dedicated Service Page
  if (currentRoute.type === "service" && currentRoute.slug) {
    const slug = currentRoute.slug;
    const commonProps = {
      onNavigateHome: handleNavigateHome,
      onNavigateService: handleNavigateService
    };

    switch (slug) {
      case "seo":
        return <SeoPage {...commonProps} />;
      case "ppc":
        return <PpcPage {...commonProps} />;
      case "web-dev":
        return <WebDevPage {...commonProps} />;
      case "content":
        return <ContentMarketingPage {...commonProps} />;
      case "graphic-design":
        return <GraphicDesignPage {...commonProps} />;
      case "video-marketing":
        return <VideoMarketingPage {...commonProps} />;
      case "email-marketing":
        return <EmailMarketingPage {...commonProps} />;
      case "lead-generation":
        return <LeadGenPage {...commonProps} />;
      case "branding":
        return <BrandingPage {...commonProps} />;
      case "ecommerce":
        return <EcommercePage {...commonProps} />;
      case "ui-ux":
        return <UiUxPage {...commonProps} />;
      case "photo-video":
        return <PhotoVideoPage {...commonProps} />;
      default:
        return <SeoPage {...commonProps} />;
    }
  }

  // Render Home Landing Page
  return (
    <HomePage
      onNavigateToService={(slug) => {
        if (slug === "all") {
          handleNavigateAllServices();
        } else {
          handleNavigateService(slug);
        }
      }}
    />
  );
}

export default App;

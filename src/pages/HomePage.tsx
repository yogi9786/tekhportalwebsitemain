import React from "react";
import TekhportalLanding from "../components/TekhportalLanding";

export interface HomePageProps {
  onNavigateToService?: (serviceSlug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateToService }) => {
  return <TekhportalLanding onNavigateToService={onNavigateToService} />;
};

export default HomePage;

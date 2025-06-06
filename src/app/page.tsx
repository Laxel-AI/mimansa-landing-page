import { HeroBanner } from "@/components/hero-banner";
import { CoreValues } from "@/components/core-values";
import { PracticeAreas } from "@/components/practice-areas";
import RecentNews from "@/components/recent-news";
import CrossBorder from "@/components/cross-border";
import { ResourcesSection } from "@/components/resources-section";
import { SidebarColor } from "@/components/sidebarcolor";
import { LegalDisclaimer } from "@/components/legal-disclaimer";

export default function Home() {
  return (
    <div className="w-full">
      <LegalDisclaimer />
      <SidebarColor />
      <HeroBanner />
      <CoreValues />
      <PracticeAreas />
      <CrossBorder />
      <RecentNews />
      <ResourcesSection />
    </div>
  );
}

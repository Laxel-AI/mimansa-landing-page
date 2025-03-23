import { HeroBanner } from "@/components/hero-banner";
import { CoreValues } from "@/components/core-values";
import { PracticeAreas } from "@/components/practice-areas";
import { RecentNews } from "@/components/recent-news";
import { CrossBorderCapabilities } from "@/components/cross-border";
import { ResourcesSection } from "@/components/resources-section";
import { SidebarColor } from "@/components/sidebarcolor";

export default function Home() {
  return (
    <div className="w-full">
      <SidebarColor />
      <HeroBanner />
      <CoreValues />
      <PracticeAreas />
      <CrossBorderCapabilities />
      <RecentNews />
      <ResourcesSection />
    </div>
  );
}

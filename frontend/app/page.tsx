import NewsTicker from "@/components/NewsTicker";
import HeroSection from "@/components/HeroSection";
import MemeBentoGrid from "@/components/MemeBentoGrid";
import EditorialSection from "@/components/EditorialSection";
import ConstitutionSection from "@/components/ConstitutionSection";
import AgencyPortal from "@/components/AgencyPortal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NewsTicker />
      <HeroSection />
      <MemeBentoGrid />
      <EditorialSection />
      <ConstitutionSection />
      <AgencyPortal />
    </main>
  );
}

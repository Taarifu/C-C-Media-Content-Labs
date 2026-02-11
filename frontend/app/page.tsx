import HeroSection from "@/components/HeroSection";
import MemeBentoGrid from "@/components/MemeBentoGrid";
import EditorialSection from "@/components/EditorialSection";
import ConstitutionSection from "@/components/ConstitutionSection";
import AgencyPortal from "@/components/AgencyPortal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MemeBentoGrid limit={3} />
      <EditorialSection limit={2} />
      <ConstitutionSection />
      <AgencyPortal />
    </main>
  );
}

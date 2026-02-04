import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IkigaiSection from "./components/IkigaiSection";
import HadoPanel from "./components/HadoPanel";
import IkigaiPhilosophy from "./components/IkigaiPhilosophy";
import DubaiIslandsSection from "./components/DubaiIsland";
import DubaiMapSection from "./components/DubaiMapSection";
import DeveloperSection from "./components/DeveloperSection";
import GetInTouchSection from "./components/GetInTouchSection";
import FooterSection from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function Home() {
  return (
    <div className="font-haffer">
      <Navbar />
      <Hero />
      <IkigaiSection />
      <HadoPanel />
      <IkigaiPhilosophy />
      <DubaiIslandsSection />
      <DubaiMapSection />
      <DeveloperSection />
      <GetInTouchSection />
      <FooterSection />
      <FloatingCTA />
    </div>
  );
}

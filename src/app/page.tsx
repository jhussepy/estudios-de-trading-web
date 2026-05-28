import AnalysisAssistant from "@/components/AnalysisAssistant";
import BacktestingSection from "@/components/BacktestingSection";
import BotArchitecture from "@/components/BotArchitecture";
import ConceptLibrary from "@/components/ConceptLibrary";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import JournalSection from "@/components/JournalSection";
import Navbar from "@/components/Navbar";
import ProgressDashboard from "@/components/ProgressDashboard";
import READMESection from "@/components/READMESection";
import RoadmapSection from "@/components/RoadmapSection";

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />
      <HeroSection />
      <READMESection />
      <ProgressDashboard />
      <RoadmapSection />
      <ConceptLibrary />
      <BotArchitecture />
      <AnalysisAssistant />
      <BacktestingSection />
      <JournalSection />
      <Footer />
    </main>
  );
}

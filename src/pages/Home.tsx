import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DualModeToggle from "@/components/landing/DualModeToggle";
import CoreFeatures from "@/components/landing/CoreFeatures";
import BentoGrid from "@/components/landing/BentoGrid";
import StatsBar from "@/components/landing/StatsBar";
import HowItWorks from "@/components/landing/HowItWorks";
import DownloadCTA from "@/components/landing/DownloadCTA";
import Footer from "@/components/landing/Footer";
import CoverageMap from "@/components/landing/CoverageMap"
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col font-sans overflow-x-hidden selection:bg-primary/20">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <DualModeToggle />
        <CoreFeatures />
        <CoverageMap/>
        <BentoGrid />
        <HowItWorks />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}

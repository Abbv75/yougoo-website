import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import FleetSection from "@/sections/FleetSection";
import StorySection from "@/sections/StorySection";
import Features from "@/sections/Features";
import InteractiveShowcase from "@/sections/InteractiveShowcase";
import DriverCTA from "@/sections/DriverCTA";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";

export function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FleetSection />
        <StorySection />
        <Features />
        <InteractiveShowcase />
        <DriverCTA />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Index;

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import FlowSection from "@/components/FlowSection";
import TrustSection from "@/components/TrustSection";
import DetailsSection from "@/components/DetailsSection";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import FixedCta from "@/components/FixedCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <FlowSection />
        <TrustSection />
        <DetailsSection />
        <FaqSection />
        <ContactForm />
      </main>
      <Footer />
      <FixedCta />
    </>
  );
}

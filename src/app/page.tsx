import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import FlowSection from "@/components/FlowSection";
import TrustSection from "@/components/TrustSection";
import ProfileSection from "@/components/ProfileSection";
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
        <SocialProofBar />
        <ProblemSection />
        <FeaturesSection />
        <FlowSection />
        <TrustSection />
        <ProfileSection />
        <DetailsSection />
        <FaqSection />
        <ContactForm />
      </main>
      <Footer />
      <FixedCta />
    </>
  );
}

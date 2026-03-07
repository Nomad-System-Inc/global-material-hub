import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import NetworkSection from "@/components/sections/NetworkSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ContactSection from "@/components/sections/ContactSection";
import WaveDivider from "@/components/WaveDivider";

const colors = {
  background: "hsl(210, 20%, 98%)",
  secondary: "hsl(215, 15%, 92%)",
  surfaceDark: "hsl(220, 25%, 12%)",
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Hero → About (asset: waveSmooth — organic flowing curves) */}
      <WaveDivider
        topColor={colors.surfaceDark}
        bottomColor={colors.background}
        variant="waveSmooth"
      />

      <AboutSection />

      {/* About → Industries (asset: accentBottom — angular energy) */}
      <WaveDivider
        topColor={colors.background}
        bottomColor={colors.secondary}
        variant="accentBottom"
      />

      <IndustriesSection />

      {/* Industries → Products (asset: waveSharp — dramatic peaks) */}
      <WaveDivider
        topColor={colors.secondary}
        bottomColor={colors.background}
        variant="waveSharp"
      />

      <ProductsSection />

      {/* Products → Services (asset: waveJagged — bold industrial feel) */}
      <WaveDivider
        topColor={colors.background}
        bottomColor={colors.surfaceDark}
        variant="waveJagged"
      />

      <ServicesSection />

      {/* Services → Network (asset: waveSmooth — organic flowing) */}
      <WaveDivider
        topColor={colors.surfaceDark}
        bottomColor={colors.background}
        variant="waveSmooth"
      />

      <NetworkSection />

      {/* Network → Why Choose Us (inline: gentle) */}
      <WaveDivider
        topColor={colors.background}
        bottomColor={colors.secondary}
        variant="gentle"
      />

      <WhyChooseUsSection />

      {/* Why Choose Us → Contact (asset: accentBottom) */}
      <WaveDivider
        topColor={colors.secondary}
        bottomColor={colors.surfaceDark}
        variant="accentBottom"
      />

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

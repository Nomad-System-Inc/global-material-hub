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

// CSS variable colors as computed HSL strings for SVG fills
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

      {/* Hero → About */}
      <WaveDivider
        topColor={colors.surfaceDark}
        bottomColor={colors.background}
        variant="gentle"
      />

      <AboutSection />

      {/* About → Industries */}
      <WaveDivider
        topColor={colors.background}
        bottomColor={colors.secondary}
        variant="subtle"
      />

      <IndustriesSection />

      {/* Industries → Products */}
      <WaveDivider
        topColor={colors.secondary}
        bottomColor={colors.background}
        variant="smooth"
      />

      <ProductsSection />

      {/* Products → Services */}
      <WaveDivider
        topColor={colors.background}
        bottomColor={colors.surfaceDark}
        variant="asymmetric"
      />

      <ServicesSection />

      {/* Services → Network */}
      <WaveDivider
        topColor={colors.surfaceDark}
        bottomColor={colors.background}
        variant="layered"
      />

      <NetworkSection />

      {/* Network → Why Choose Us */}
      <WaveDivider
        topColor={colors.background}
        bottomColor={colors.secondary}
        variant="gentle"
      />

      <WhyChooseUsSection />

      {/* Why Choose Us → Contact */}
      <WaveDivider
        topColor={colors.secondary}
        bottomColor={colors.surfaceDark}
        variant="smooth"
      />

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

import { Globe, BarChart3, Truck, Warehouse, HeadphonesIcon, TestTube } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerChildren, { staggerItem } from "@/components/StaggerChildren";
import SectionBackground from "@/components/SectionBackground";
import lubricantImg from "@/assets/products/lubricant-1.jpg";

const services = [
  { icon: Globe, name: "Global Raw Material Sourcing", description: "Connecting manufacturers with reliable global suppliers of raw materials and industrial chemicals." },
  { icon: BarChart3, name: "Supply Chain Optimization", description: "Strategic management of procurement, inventory and supplier relationships to improve efficiency." },
  { icon: Truck, name: "Logistics & Distribution", description: "Coordination of transportation and delivery from international suppliers to customer facilities." },
  { icon: Warehouse, name: "Warehousing Solutions", description: "Secure storage and inventory management services for industrial raw materials." },
  { icon: HeadphonesIcon, name: "Technical Product Support", description: "Expert guidance on selecting and applying raw materials for industrial processes." },
  { icon: TestTube, name: "Sampling & Product Testing", description: "Providing sample materials to evaluate product performance before large orders." },
];

const ServicesSection = () => {
  return (
    <SectionBackground
      pattern="bg-pattern-hex"
      imageSrc={lubricantImg}
      imageOpacity={0.28}
      overlay="linear-gradient(135deg, hsl(220 25% 12% / 0.82) 0%, hsl(220 25% 12% / 0.7) 50%, hsl(220 25% 12% / 0.82) 100%)"
      className="section-padding section-dark"
    >
      <section id="services">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Our Services
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              End-to-End Supply Solutions
            </h2>
            <p className="text-surface-dark-foreground/60 max-w-2xl mx-auto">
              From sourcing to delivery, we manage every step of the supply chain.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {services.map(({ icon: Icon, name, description }) => (
              <motion.div
                key={name}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="rounded-lg p-8 border border-surface-dark-foreground/10 hover:border-accent/30 transition-shadow group bg-surface-dark-foreground/5 backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                  <Icon size={28} className="text-accent mb-5" />
                </motion.div>
                <h3 className="font-heading font-semibold text-lg mb-2">{name}</h3>
                <p className="text-surface-dark-foreground/60 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </SectionBackground>
  );
};

export default ServicesSection;

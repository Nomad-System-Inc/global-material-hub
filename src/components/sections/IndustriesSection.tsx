import { Building2, Fuel, Paintbrush, Layers, Factory, Tractor, Droplets, GlassWater, Hammer, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerChildren, { staggerItem } from "@/components/StaggerChildren";
import SectionBackground from "@/components/SectionBackground";
import compositeImg from "@/assets/products/composite-1.jpg";

const industries = [
  { icon: Building2, name: "Construction & Building" },
  { icon: Fuel, name: "Oil & Gas" },
  { icon: Paintbrush, name: "Paints & Coatings" },
  { icon: Layers, name: "Adhesives & Sealants" },
  { icon: FlaskConical, name: "Plastics & Polymers" },
  { icon: GlassWater, name: "Ceramics & Refractories" },
  { icon: Hammer, name: "Steel & Foundry" },
  { icon: Tractor, name: "Agriculture" },
  { icon: Droplets, name: "Water Treatment" },
  { icon: Factory, name: "Glass & Industrial Mfg" },
];

const IndustriesSection = () => {
  return (
    <SectionBackground
      pattern="bg-pattern-grid"
      imageSrc={compositeImg}
      imageOpacity={0.08}
      imagePosition="center"
      overlay="linear-gradient(180deg, hsl(215 15% 92% / 0.95) 0%, hsl(215 15% 92% / 0.92) 50%, hsl(215 15% 92% / 0.95) 100%)"
      className="section-padding bg-secondary"
    >
      <section id="industries">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Industries Served
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Supplying Materials Across Sectors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From construction to water treatment, we deliver industrial-grade raw materials to the sectors that keep the world running.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {industries.map(({ icon: Icon, name }) => (
              <motion.div
                key={name}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-card/80 backdrop-blur-sm rounded-lg p-6 text-center border border-border hover:border-accent/50 hover:shadow-md transition-shadow group cursor-default"
              >
                <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                  <Icon size={24} className="text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">{name}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </SectionBackground>
  );
};

export default IndustriesSection;

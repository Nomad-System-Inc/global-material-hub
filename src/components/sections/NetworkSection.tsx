import networkImg from "@/assets/global-network.jpg";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionBackground from "@/components/SectionBackground";

const regions = ["Africa", "Europe", "Middle East", "Asia", "North America"];

const NetworkSection = () => {
  return (
    <SectionBackground
      pattern="bg-pattern-topography"
      className="section-padding bg-background"
    >
      <section id="network">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Global Network
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sourcing From Every Continent
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Mayriads Oryktos works with a global network of suppliers and manufacturers across multiple regions, ensuring reliable access to the materials you need.
              </p>
              <div className="flex flex-wrap gap-3">
                {regions.map((region, i) => (
                  <motion.span
                    key={region}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    whileHover={{ scale: 1.08 }}
                    className="px-4 py-2 rounded-md bg-accent/10 text-accent font-medium text-sm border border-accent/20"
                  >
                    {region}
                  </motion.span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden border border-border shadow-lg"
              >
                <img src={networkImg} alt="Global supply network map" className="w-full h-auto" />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
};

export default NetworkSection;

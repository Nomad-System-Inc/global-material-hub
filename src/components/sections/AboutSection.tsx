import { Shield, Globe, Lightbulb, Handshake, Award, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerChildren, { staggerItem } from "@/components/StaggerChildren";
import SectionBackground from "@/components/SectionBackground";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  { icon: Shield, label: "Integrity", desc: "Upholding the highest ethical standards, transparency, and accountability" },
  { icon: Award, label: "Excellence", desc: "Delivering premium-quality products that meet industrial standards" },
  { icon: Users, label: "Customer Centricity", desc: "Exceeding client expectations through tailored solutions" },
  { icon: Lightbulb, label: "Innovation", desc: "Leveraging advanced technologies to optimize processes and supply chain efficiency" },
  { icon: Leaf, label: "Sustainability", desc: "Minimizing environmental impact while contributing to community development" },
  { icon: Handshake, label: "Collaboration", desc: "Building mutually beneficial partnerships with stakeholders" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <SectionBackground
        pattern="bg-pattern-dots"
        imageSrc={heroBg}
        imageOpacity={0.08}
        imagePosition="center top"
        overlay="linear-gradient(180deg, hsl(210 20% 98% / 0.95) 0%, hsl(210 20% 98% / 0.92) 50%, hsl(210 20% 98% / 0.95) 100%)"
        className="section-padding bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                About Us
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Partner in Industrial Minerals & Chemicals
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mayriads Oryktos is a premier Nigerian industrial minerals and chemicals company, specializing in the sourcing, processing, and distribution of high-quality mineral resources and industrial chemicals. We serve critical sectors including manufacturing, construction, energy, and agriculture, delivering competitively priced, premium-grade products to both domestic and international markets.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Strategically situated within Nigeria's resource-rich mineral landscape, we leverage partnerships with licensed mining operators, state-of-the-art processing facilities, and global distribution networks to ensure a reliable, scalable, and efficient supply chain.
              </p>

              {/* Vision & Mission */}
              <div className="space-y-4 mt-6">
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-heading font-semibold text-accent text-sm uppercase tracking-wider mb-2">Our Vision</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To be Africa's premier industrial minerals and chemicals company, recognized for driving industrial growth, innovation, and sustainable economic development.
                  </p>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-heading font-semibold text-accent text-sm uppercase tracking-wider mb-2">Our Mission</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To responsibly source, process, and supply industrial minerals and chemicals through advanced technologies and strategic partnerships, enabling industrial sectors to achieve operational excellence and sustainable growth.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm backdrop-blur-sm">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-6">
                  Our Core Values
                </h3>
                <StaggerChildren className="space-y-4">
                  {values.map(({ icon: Icon, label, desc }) => (
                    <motion.div
                      key={label}
                      variants={staggerItem}
                      whileHover={{ x: 8, transition: { duration: 0.2 } }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-md gradient-accent flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={20} className="text-primary-foreground" />
                      </div>
                      <div>
                        <span className="font-medium text-foreground block">{label}</span>
                        <span className="text-muted-foreground text-sm">{desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </StaggerChildren>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </SectionBackground>
    </section>
  );
};

export default AboutSection;

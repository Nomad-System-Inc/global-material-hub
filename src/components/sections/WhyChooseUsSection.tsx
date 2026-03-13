import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerChildren, { staggerItem } from "@/components/StaggerChildren";
import SectionBackground from "@/components/SectionBackground";
import oilfieldImg from "@/assets/products/oilfield-2.jpg";

const reasons = [
  "Trusted global sourcing from verified suppliers",
  "Competitive pricing through direct partnerships",
  "End-to-end logistics and supply chain management",
  "Technical expertise and product guidance",
  "Flexible order quantities and sampling services",
  "Dedicated account management and support",
];

const WhyChooseUsSection = () => {
  return (
    <SectionBackground
      pattern="bg-pattern-diagonal"
      imageSrc={oilfieldImg}
      imageOpacity={0.04}
      imagePosition="center"
      overlay="linear-gradient(135deg, hsl(215 15% 92%) 0%, hsl(215 15% 92% / 0.92) 50%, hsl(215 15% 92%) 100%)"
      className="section-padding bg-secondary"
    >
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Why Choose Us
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for Industrial Reliability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We provide more than materials — we deliver confidence. Our team ensures quality, consistency and on-time delivery for every order.
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="accent" size="lg" asChild>
                  <a href="#contact">Partner With Us</a>
                </Button>
              </motion.div>
            </AnimatedSection>

            <StaggerChildren className="space-y-4" staggerDelay={0.1}>
              {reasons.map((reason) => (
                <motion.div
                  key={reason}
                  variants={staggerItem}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 bg-card/80 backdrop-blur-sm rounded-lg p-5 border border-border"
                >
                  <CheckCircle2 size={22} className="text-accent shrink-0 mt-0.5" />
                  <p className="font-medium text-foreground">{reason}</p>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
};

export default WhyChooseUsSection;

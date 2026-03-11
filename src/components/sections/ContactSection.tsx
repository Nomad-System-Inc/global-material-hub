import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionBackground from "@/components/SectionBackground";
import heroBg from "@/assets/hero-bg.jpg";

const ContactSection = () => {
  return (
    <SectionBackground
      pattern="bg-pattern-circuit"
      imageSrc={heroBg}
      imageOpacity={0.06}
      imagePosition="center bottom"
      overlay="linear-gradient(180deg, hsl(220 25% 12% / 0.96) 0%, hsl(220 25% 12% / 0.9) 50%, hsl(220 25% 12% / 0.96) 100%)"
      className="section-padding section-dark"
    >
      <section id="contact">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Source Your Materials?
            </h2>
            <p className="text-surface-dark-foreground/60 max-w-2xl mx-auto">
              Reach out for quotes, product inquiries or partnership opportunities.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-12">
            <AnimatedSection direction="left" className="lg:col-span-2 space-y-6">
              {[
                { icon: Mail, title: "Email", text: "info@mayriadsoryktos.com" },
                { icon: Phone, title: "Phone", text: "+0000000000" },
                { icon: MapPin, title: "Address", text: "Global Headquarters – To Be Announced" },
              ].map(({ icon: Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-md gradient-accent flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">{title}</h4>
                    <p className="text-surface-dark-foreground/60 text-sm">{text}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="bg-surface-dark-foreground/5 border-surface-dark-foreground/10 text-surface-dark-foreground placeholder:text-surface-dark-foreground/30" />
                  <Input type="email" placeholder="Your Email" className="bg-surface-dark-foreground/5 border-surface-dark-foreground/10 text-surface-dark-foreground placeholder:text-surface-dark-foreground/30" />
                </div>
                <Input placeholder="Subject" className="bg-surface-dark-foreground/5 border-surface-dark-foreground/10 text-surface-dark-foreground placeholder:text-surface-dark-foreground/30" />
                <Textarea placeholder="Your Message" rows={5} className="bg-surface-dark-foreground/5 border-surface-dark-foreground/10 text-surface-dark-foreground placeholder:text-surface-dark-foreground/30 resize-none" />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="accent" size="lg" type="submit" className="w-full sm:w-auto">
                    Send Message <Send size={18} />
                  </Button>
                </motion.div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
};

export default ContactSection;

import { Suspense } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";
import HeroGlobe from "@/components/HeroGlobe";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Industrial minerals and raw materials"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/80 to-surface-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full pt-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-accent font-heading font-semibold text-sm tracking-[0.3em] uppercase mb-6"
            >
              Industrial Minerals & Chemicals
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-surface-dark-foreground leading-[1.1] mb-6"
            >
              Powering Industry.{" "}
              <span className="text-gradient-accent">Driving Sustainable Growth.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-surface-dark-foreground/70 max-w-xl mb-10"
            >
              An integrated platform delivering critical industrial minerals, chemicals and solutions across high-growth African markets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="accent" size="lg" asChild>
                <a href="#products">
                  Explore Products <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </motion.div>
          </div>

          {/* 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="hidden lg:block h-[500px]"
          >
            <Suspense fallback={<div className="w-full h-full" />}>
              <HeroGlobe />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

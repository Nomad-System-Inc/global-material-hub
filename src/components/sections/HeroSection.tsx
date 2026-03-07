import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";


const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
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
        <div className="max-w-3xl">
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up">
            Global Raw Material Solutions
          </p>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-surface-dark-foreground leading-[1.1] mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Powering Industries with{" "}
            <span className="text-gradient-accent">Premium Raw Materials</span>
          </h1>
          <p
            className="text-lg md:text-xl text-surface-dark-foreground/70 max-w-xl mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Reliable sourcing, global distribution and supply chain expertise
            for industrial chemicals, minerals and specialty materials.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="accent" size="lg" asChild>
              <a href="#products">
                Explore Products <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 gradient-accent" /> */}
      {/* <img
        src={HeroSecDiv}
        alt="Decorative divider"
        className="absolute bottom-0 left-0 w-full -z-0 pointer-events-none"
      /> */}
    </section>
  );
};

export default HeroSection;

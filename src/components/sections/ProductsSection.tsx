import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerChildren, { staggerItem } from "@/components/StaggerChildren";
import SectionBackground from "@/components/SectionBackground";

import coatingImg from "@/assets/products/coating-1.jpg";
import oilfieldImg from "@/assets/products/oilfield-1.jpg";
import plasticImg from "@/assets/products/plastic-1.jpg";
import sealantImg from "@/assets/products/sealant-1.jpg";
import paintImg from "@/assets/products/paint-1.jpg";
import adhesivesImg from "@/assets/products/adhesives-1.jpg";
import compositeImg from "@/assets/products/composite-2.jpg";
import filtrationImg from "@/assets/products/filtration-1.jpg";
import lubricantImg from "@/assets/products/lubricant-1.jpg";
import hiiImg from "@/assets/products/hii-1.jpg";
import agricultureImg from "@/assets/products/agriculture-1.jpg";
import inksImg from "@/assets/products/inks-1.jpg";

const categories = [
  { slug: "coating", name: "Coating", image: coatingImg },
  { slug: "oilfield", name: "Oilfield", image: oilfieldImg },
  { slug: "plastic", name: "Plastic", image: plasticImg },
  { slug: "sealant", name: "Sealant", image: sealantImg },
  { slug: "paint", name: "Paint", image: paintImg },
  { slug: "adhesives", name: "Adhesives", image: adhesivesImg },
  { slug: "composite", name: "Composite", image: compositeImg },
  { slug: "filtration", name: "Filtration", image: filtrationImg },
  { slug: "lubricant", name: "Lubricant", image: lubricantImg },
  { slug: "hii", name: "HI&I", image: hiiImg },
  { slug: "agriculture", name: "Agriculture", image: agricultureImg },
  { slug: "inks", name: "Inks", image: inksImg },
];

const ProductsSection = () => {
  return (
    <SectionBackground
      pattern="bg-pattern-cross"
      imageSrc={coatingImg}
      imageOpacity={0.1}
      imagePosition="center"
      overlay="linear-gradient(180deg, hsl(210 20% 98% / 0.85) 0%, hsl(210 20% 98% / 0.78) 50%, hsl(210 20% 98% / 0.85) 100%)"
      className="section-padding bg-background"
    >
      <section id="products">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Our Products
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Material Portfolio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse range of industrial raw materials sourced from trusted global suppliers.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5" staggerDelay={0.06}>
            {categories.map(({ slug, name, image }) => (
              <motion.div key={slug} variants={staggerItem}>
                <Link
                  to={`/products/${slug}`}
                  className="group relative rounded-lg overflow-hidden border border-border hover:border-accent/40 transition-all hover:shadow-xl block"
                >
                  <motion.div
                    className="aspect-[4/3] overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                    <h3 className="font-heading font-semibold text-sm md:text-base text-surface-dark-foreground">
                      {name}
                    </h3>
                    <ArrowRight
                      size={16}
                      className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </SectionBackground>
  );
};

export default ProductsSection;

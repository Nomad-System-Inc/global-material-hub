import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { productCategories } from "@/data/productCategories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import SectionBackground from "@/components/SectionBackground";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

// Image imports
import coating1 from "@/assets/products/coating-1.jpg";
import coating2 from "@/assets/products/coating-2.jpg";
import oilfield1 from "@/assets/products/oilfield-1.jpg";
import oilfield2 from "@/assets/products/oilfield-2.jpg";
import plastic1 from "@/assets/products/plastic-1.jpg";
import plastic2 from "@/assets/products/plastic-2.jpg";
import sealant1 from "@/assets/products/sealant-1.jpg";
import sealant2 from "@/assets/products/sealant-2.jpg";
import paint1 from "@/assets/products/paint-1.jpg";
import paint2 from "@/assets/products/paint-2.jpg";
import adhesives1 from "@/assets/products/adhesives-1.jpg";
import adhesives2 from "@/assets/products/adhesives-2.jpg";
import composite1 from "@/assets/products/composite-1.jpg";
import composite2 from "@/assets/products/composite-2.jpg";
import filtration1 from "@/assets/products/filtration-1.jpg";
import filtration2 from "@/assets/products/filtration-2.jpg";
import lubricant1 from "@/assets/products/lubricant-1.jpg";
import lubricant2 from "@/assets/products/lubricant-2.jpg";
import hii1 from "@/assets/products/hii-1.jpg";
import hii2 from "@/assets/products/hii-2.jpg";
import agriculture1 from "@/assets/products/agriculture-1.jpg";
import agriculture2 from "@/assets/products/agriculture-2.jpg";
import inks1 from "@/assets/products/inks-1.jpg";
import inks2 from "@/assets/products/inks-2.jpg";

const categoryImages: Record<string, string[]> = {
  coating: [coating1, coating2],
  oilfield: [oilfield1, oilfield2],
  plastic: [plastic1, plastic2],
  sealant: [sealant1, sealant2],
  paint: [paint1, paint2],
  adhesives: [adhesives1, adhesives2],
  composite: [composite1, composite2],
  filtration: [filtration1, filtration2],
  lubricant: [lubricant1, lubricant2],
  hii: [hii1, hii2],
  agriculture: [agriculture1, agriculture2],
  inks: [inks1, inks2],
};

const colors = {
  background: "hsl(210, 20%, 98%)",
  secondary: "hsl(215, 15%, 92%)",
  surfaceDark: "hsl(220, 25%, 12%)",
};

const ProductCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  const category = productCategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Category Not Found</h1>
          <Button variant="accent" asChild>
            <Link to="/#products">Back to Products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const images = categoryImages[category.slug] || [];
  const currentIndex = productCategories.findIndex((c) => c.slug === slug);
  const prevCategory = currentIndex > 0 ? productCategories[currentIndex - 1] : null;
  const nextCategory = currentIndex < productCategories.length - 1 ? productCategories[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative">
        <div className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img
            src={images[0]}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/90 via-surface-dark/70 to-surface-dark/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3"
              >
                Product Category
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-surface-dark-foreground mb-4"
              >
                {category.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl text-surface-dark-foreground/70 max-w-2xl"
              >
                {category.subtitle}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero → Overview divider */}
      <WaveDivider
        topColor={colors.surfaceDark}
        bottomColor={colors.background}
        variant="waveSmooth"
      />

      {/* Description + Images */}
      <SectionBackground
        pattern="bg-pattern-dots"
        imageSrc={images[0]}
        imageOpacity={0.2}
        imagePosition="center"
        overlay="linear-gradient(180deg, hsl(210 20% 98% / 0.85) 0%, hsl(210 20% 98% / 0.75) 50%, hsl(210 20% 98% / 0.85) 100%)"
        className="section-padding bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {category.description}
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="rounded-lg overflow-hidden shadow-lg border border-border"
                >
                  <img
                    src={img}
                    alt={`${category.title} - Image ${i + 1}`}
                    className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Overview → Applications divider */}
      <WaveDivider
        topColor={colors.background}
        bottomColor={colors.secondary}
        variant="accentBottom"
      />

      {/* Applications & Offerings */}
      <SectionBackground
        pattern="bg-pattern-grid"
        imageSrc={images[1] || images[0]}
        imageOpacity={0.2}
        imagePosition="center"
        overlay="linear-gradient(180deg, hsl(215 15% 92% / 0.82) 0%, hsl(215 15% 92% / 0.68) 50%, hsl(215 15% 92% / 0.82) 100%)"
        className="section-padding bg-secondary"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border shadow-sm"
            >
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-10 h-10 rounded-md gradient-accent flex items-center justify-center">
                  <ArrowRight size={20} className="text-primary-foreground" />
                </span>
                Applications
              </h3>
              <ul className="space-y-3">
                {category.applications.map((app) => (
                  <li key={app} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Offerings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border shadow-sm"
            >
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-10 h-10 rounded-md gradient-accent flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-primary-foreground" />
                </span>
                Our Offerings
              </h3>
              <ul className="space-y-3">
                {category.offerings.map((offering) => (
                  <li key={offering} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>{offering}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </SectionBackground>

      {/* Applications → CTA divider */}
      <WaveDivider
        topColor={colors.secondary}
        bottomColor={colors.surfaceDark}
        variant="waveSharp"
      />

      {/* CTA Section */}
      <SectionBackground
        pattern="bg-pattern-hex"
        imageSrc={images[1] || images[0]}
        imageOpacity={0.25}
        overlay="linear-gradient(135deg, hsl(220 25% 12% / 0.8) 0%, hsl(220 25% 12% / 0.7) 100%)"
        className="section-padding section-dark"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Ready to Order?
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Get a Quote for {category.title}
            </h2>
            <p className="text-surface-dark-foreground/60 max-w-xl mx-auto mb-8">
              Contact our team for pricing, samples, and technical specifications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="lg" asChild>
                <a href="/#contact">
                  Request a Quote <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/#products">View All Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionBackground>

      {/* CTA → Nav divider */}
      <WaveDivider
        topColor={colors.surfaceDark}
        bottomColor={colors.background}
        variant="waveSmooth"
      />

      {/* Navigation between categories */}
      <SectionBackground
        pattern="bg-pattern-cross"
        className="section-padding bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-muted-foreground text-sm mb-6 font-heading uppercase tracking-widest">
            Browse More Categories
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevCategory ? (
              <Button variant="outline" asChild>
                <Link to={`/products/${prevCategory.slug}`}>
                  <ArrowLeft size={16} /> {prevCategory.title}
                </Link>
              </Button>
            ) : (
              <div />
            )}

            <Button variant="accent" asChild>
              <Link to="/#products">All Products</Link>
            </Button>

            {nextCategory ? (
              <Button variant="outline" asChild>
                <Link to={`/products/${nextCategory.slug}`}>
                  {nextCategory.title} <ArrowRight size={16} />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default ProductCategoryPage;

import { FlaskConical, Mountain, Beaker, Pipette, CircuitBoard } from "lucide-react";

const categories = [
  {
    icon: FlaskConical,
    name: "Industrial Chemicals",
    description: "Specialty chemicals for manufacturing, coatings, lubricants and construction.",
  },
  {
    icon: Mountain,
    name: "Performance Minerals",
    description: "High-quality minerals for ceramics, glass, refractories and construction.",
  },
  {
    icon: Beaker,
    name: "Additives & Compounds",
    description: "Chemical additives for improved durability, stability and performance.",
  },
  {
    icon: Pipette,
    name: "Resins & Binders",
    description: "Materials for coatings, adhesives, sealants and polymer manufacturing.",
  },
  {
    icon: CircuitBoard,
    name: "Metals & Alloys",
    description: "Bulk industrial metals and alloys for steel mills and manufacturers.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Our Products
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Material Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse range of industrial raw materials sourced from trusted global suppliers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ icon: Icon, name, description }, i) => (
            <div
              key={name}
              className={`rounded-lg p-8 border border-border hover:border-accent/40 transition-all hover:shadow-lg group ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              } bg-card`}
            >
              <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-5">
                <Icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

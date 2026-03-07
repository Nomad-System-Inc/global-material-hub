import { Globe, BarChart3, Truck, Warehouse, HeadphonesIcon, TestTube } from "lucide-react";

const services = [
  { icon: Globe, name: "Global Raw Material Sourcing", description: "Connecting manufacturers with reliable global suppliers of raw materials and industrial chemicals." },
  { icon: BarChart3, name: "Supply Chain Optimization", description: "Strategic management of procurement, inventory and supplier relationships to improve efficiency." },
  { icon: Truck, name: "Logistics & Distribution", description: "Coordination of transportation and delivery from international suppliers to customer facilities." },
  { icon: Warehouse, name: "Warehousing Solutions", description: "Secure storage and inventory management services for industrial raw materials." },
  { icon: HeadphonesIcon, name: "Technical Product Support", description: "Expert guidance on selecting and applying raw materials for industrial processes." },
  { icon: TestTube, name: "Sampling & Product Testing", description: "Providing sample materials to evaluate product performance before large orders." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Our Services
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            End-to-End Supply Solutions
          </h2>
          <p className="text-surface-dark-foreground/60 max-w-2xl mx-auto">
            From sourcing to delivery, we manage every step of the supply chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, name, description }) => (
            <div
              key={name}
              className="rounded-lg p-8 border border-surface-dark-foreground/10 hover:border-accent/30 transition-all group bg-surface-dark-foreground/5"
            >
              <Icon size={28} className="text-accent mb-5" />
              <h3 className="font-heading font-semibold text-lg mb-2">{name}</h3>
              <p className="text-surface-dark-foreground/60 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

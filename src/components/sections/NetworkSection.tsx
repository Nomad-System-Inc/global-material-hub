import networkImg from "@/assets/global-network.jpg";

const regions = ["Africa", "Europe", "Middle East", "Asia", "North America"];

const NetworkSection = () => {
  return (
    <section id="network" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
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
              {regions.map((region) => (
                <span
                  key={region}
                  className="px-4 py-2 rounded-md bg-accent/10 text-accent font-medium text-sm border border-accent/20"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-border shadow-lg">
            <img src={networkImg} alt="Global supply network map" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;

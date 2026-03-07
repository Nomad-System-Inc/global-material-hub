import { Shield, Globe, Lightbulb, Handshake, Award } from "lucide-react";


const values = [
  { icon: Shield, label: "Integrity" },
  { icon: Globe, label: "Global Partnerships" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Handshake, label: "Reliability" },
  { icon: Award, label: "Operational Excellence" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                About Us
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Partner in Industrial Raw Materials
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mayriads Oryktos is an international raw materials sourcing and
                distribution company providing industrial chemicals, minerals
                and specialty materials to manufacturers across multiple
                sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We connect global suppliers with industrial buyers through
                reliable sourcing, logistics coordination and supply chain
                expertise — delivering high-quality materials where and when
                they're needed.
              </p>
            </div>

            <div>
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-6">
                  Our Core Values
                </h3>
                <div className="space-y-4">
                  {values.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-md gradient-accent flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-primary-foreground" />
                      </div>
                      <span className="font-medium text-foreground">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Source Your Materials?
          </h2>
          <p className="text-surface-dark-foreground/60 max-w-2xl mx-auto">
            Reach out for quotes, product inquiries or partnership opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md gradient-accent flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-1">Email</h4>
                <p className="text-surface-dark-foreground/60 text-sm">info@mayriadsoryktos.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md gradient-accent flex items-center justify-center shrink-0">
                <Phone size={18} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-1">Phone</h4>
                <p className="text-surface-dark-foreground/60 text-sm">+0000000000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md gradient-accent flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-1">Address</h4>
                <p className="text-surface-dark-foreground/60 text-sm">Global Headquarters – To Be Announced</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="lg:col-span-3 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="bg-surface-dark-foreground/5 border-surface-dark-foreground/10 text-surface-dark-foreground placeholder:text-surface-dark-foreground/30" />
              <Input type="email" placeholder="Your Email" className="bg-surface-dark-foreground/5 border-surface-dark-foreground/10 text-surface-dark-foreground placeholder:text-surface-dark-foreground/30" />
            </div>
            <Input placeholder="Subject" className="bg-surface-dark-foreground/5 border-surface-dark-foreground/10 text-surface-dark-foreground placeholder:text-surface-dark-foreground/30" />
            <Textarea placeholder="Your Message" rows={5} className="bg-surface-dark-foreground/5 border-surface-dark-foreground/10 text-surface-dark-foreground placeholder:text-surface-dark-foreground/30 resize-none" />
            <Button variant="accent" size="lg" type="submit" className="w-full sm:w-auto">
              Send Message <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

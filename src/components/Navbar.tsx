import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Global Network", href: "#network" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-md border-b border-border/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-heading text-xl font-bold tracking-tight text-surface-dark-foreground">
          MAYRIADS<span className="text-gradient-accent"> ORYKTOS</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-surface-dark-foreground/70 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="accent" size="sm" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-surface-dark-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-surface-dark border-t border-border/10 px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-surface-dark-foreground/70 hover:text-accent transition-colors border-b border-border/5"
            >
              {link.label}
            </a>
          ))}
          <Button variant="accent" size="sm" className="mt-4 w-full" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

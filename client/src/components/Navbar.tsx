/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive
 * Sticky navigation with glass-morphism effect
 * Green accent for CTA button, Outfit font for brand
 */
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const navLinks: { label: string; href: string; isPage?: boolean }[] = [
  { label: "Ruitschade", href: "#ruitschade" },
  { label: "Kalibratie", href: "#adas" },
  { label: "Verzekering", href: "#verzekering" },
  { label: "Zakelijk", href: "#zakelijk" },
  { label: "123 Ruit", href: "/123ruit", isPage: true },
  { label: "Over Autoglas Ede", href: "#over-ons" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    if (href.startsWith("/")) {
      setLocation(href);
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.13_0.005_260/90%)] backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="font-[var(--font-display)] text-xl lg:text-2xl font-bold tracking-tight text-white">
            Autoglas<span className="text-gradient-green">Ede</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:0318630039"
            className="flex items-center gap-2 text-sm font-mono font-medium text-white/80 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>0318 63 00 39</span>
          </a>
          <Button
            onClick={() => handleNavClick("#afspraak")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green-sm font-semibold px-5"
          >
            Afspraak Maken
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[oklch(0.13_0.005_260/95%)] backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/5 space-y-3">
            <a
              href="tel:0318630039"
              className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-white/80"
            >
              <Phone className="w-4 h-4 text-primary" />
              0318 63 00 39
            </a>
            <Button
              onClick={() => handleNavClick("#afspraak")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-green-sm font-semibold"
            >
              Afspraak Maken
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

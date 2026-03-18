/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive
 * Sticky navigation with glass-morphism effect
 * Green accent for CTA button, Outfit font for brand
 */
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

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
  const [location, setLocation] = useLocation();
  const pendingHashRef = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    // Hash navigation: go to homepage and then scroll to the section.
    if (href.startsWith("#")) {
      pendingHashRef.current = href;
      if (window.location.pathname !== "/") {
        setLocation("/");
      } else {
        // Already on homepage; scroll now (with retries below).
        const hash = href;
        pendingHashRef.current = null;

        let attempts = 0;
        const maxAttempts = 18;
        const step = () => {
          if (window.location.pathname !== "/") return;
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
          }
          attempts += 1;
          if (attempts < maxAttempts) setTimeout(step, 50);
        };
        step();
      }
      return;
    }

    pendingHashRef.current = null;
    setLocation(href);
  };

  useEffect(() => {
    if (pendingHashRef.current && window.location.pathname === "/") {
      const hash = pendingHashRef.current;
      pendingHashRef.current = null;

      let attempts = 0;
      const maxAttempts = 18;
      const step = () => {
        if (window.location.pathname !== "/") return;
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        attempts += 1;
        if (attempts < maxAttempts) setTimeout(step, 50);
      };
      step();
    }
    // If the user navigates via a plain URL like "/#contact",
    // ensure we still retry-scrolld when the homepage DOM is ready.
    if (
      window.location.pathname === "/" &&
      window.location.hash?.startsWith("#") &&
      !pendingHashRef.current
    ) {
      pendingHashRef.current = window.location.hash;

      let attempts = 0;
      const maxAttempts = 18;
      const step = () => {
        if (window.location.pathname !== "/") return;
        const el = document.querySelector(window.location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        attempts += 1;
        if (attempts < maxAttempts) setTimeout(step, 50);
      };
      step();
      pendingHashRef.current = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

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
            onClick={() => handleNavClick("#contact")}
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
          {navLinks.map((link) =>
            (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            )
          )}
          <div className="pt-3 border-t border-white/5 space-y-3">
            <a
              href="tel:0318630039"
              className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-white/80"
            >
              <Phone className="w-4 h-4 text-primary" />
              0318 63 00 39
            </a>
            <Button
              onClick={() => handleNavClick("#contact")}
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

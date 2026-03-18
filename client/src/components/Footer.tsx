/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive (Blue accent)
 * Professional footer with links, contact info, van driving animation, and branding
 * The van drives from right to left across the screen and parks on the left when footer is in view
 */
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const VAN_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438639607/fhLmWjZo9Z4FGfTeR4Aehu/footer-car_532a9ec2.png";

const serviceLinks = [
  { label: "Autoruit vervangen", href: "#ruitschade" },
  { label: "Sterretje repareren", href: "#ruitschade" },
  { label: "ADAS Kalibratie", href: "#adas" },
  { label: "Camperruiten", href: "#ruitschade" },
  { label: "Vrachtwagenruiten", href: "#ruitschade" },
  { label: "Mobiele service", href: "#ruitschade" },
];

const infoLinks = [
  { label: "Verzekering", href: "#verzekering" },
  { label: "Over ons", href: "#over-ons" },
  { label: "Reviews", href: "#reviews" },
  { label: "Veelgestelde vragen", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Afspraak maken", href: "#contact" },
];

export default function Footer() {
  const driveAreaRef = useRef<HTMLDivElement>(null);
  const [driveActive, setDriveActive] = useState(false);
  const hasTriggered = useRef(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered.current) {
            hasTriggered.current = true;
            setTimeout(() => setDriveActive(true), 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (driveAreaRef.current) {
      observer.observe(driveAreaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="border-t border-white/5 bg-[oklch(0.1_0.005_260)]">
      {/* Van driving lane - clearly visible above footer content */}
      <div ref={driveAreaRef} className="relative w-full overflow-hidden" style={{ height: '160px' }}>
        {/* Subtle road surface */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[oklch(0.08_0.005_260)]" />
        {/* Road dashed line */}
        <div 
          className="absolute bottom-6 left-0 right-0 h-[3px]"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 30px, transparent 30px, transparent 60px)',
          }}
        />

        {/* The van - CSS transition based animation */}
        <img
          src={VAN_URL}
          alt="Autoglas Ede servicewagen"
          className="absolute bottom-2"
          style={{
            height: '130px',
            width: 'auto',
            opacity: 0.9,
            transform: driveActive 
              ? 'translateX(20px)' 
              : 'translateX(calc(100vw + 100px)) scaleX(-1)',
            transition: driveActive ? 'transform 10s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none',
          }}
        />
      </div>

      <div className="container py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-[var(--font-display)] text-xl font-bold text-white mb-4 block">
              Autoglas<span className="text-gradient-blue">Ede</span>
            </span>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Dé specialist in autoruitreparatie en -vervanging in regio Ede. Met vakkundige monteurs en een nuchtere aanpak helpen we je weer veilig op weg.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs text-white/30">Aangesloten bij</span>
              <span className="text-xs font-semibold text-primary">123RUIT.nl</span>
              <span className="text-xs text-white/20">•</span>
              <span className="text-xs font-semibold text-primary">Glasgarant</span>
            </div>
            {/* Opening hours */}
            <div className="flex items-start gap-2 text-sm text-white/40">
              <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed">
                <p>Ma-Vr: 08:00 - 17:00</p>
                <p>Za: Op afspraak</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[var(--font-display)] text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Diensten
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/40 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-[var(--font-display)] text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Informatie
            </h4>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/40 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[var(--font-display)] text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:0318630039"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="font-mono">0318 63 00 39</span>
              </a>
              <a
                href="mailto:info@autoglas-ede.nl"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary shrink-0" />
                info@autoglas-ede.nl
              </a>
              <div className="flex items-start gap-3 text-sm text-white/40">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Kryptonstraat 41
                  <br />
                  6718 WR Ede
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <p className="text-xs text-white/30 mb-1">Direct hulp nodig?</p>
              <a
                href="tel:0318630039"
                className="text-sm font-mono font-semibold text-primary hover:underline"
              >
                Bel 0318 63 00 39
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 relative z-10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Autoglas Ede. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/20">KvK: 56789012</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

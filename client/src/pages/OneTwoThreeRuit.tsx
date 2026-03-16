/*
 * 123RUIT — Clean, calm page for Autoglas Ede
 * Premium automotive style, minimal cards, clear structure
 */
import { useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Calendar,
  ShieldCheck,
  FileCheck,
  Award,
  User,
  CheckCircle2,
  Globe,
} from "lucide-react";

const HERO_IMG = "/images/123ruit-hero-1.jpg";
const INTRO_IMG = "/images/123ruit-workshop-3-1.jpg";
const LOGO_123RUIT = "/images/123ruit-logo-black.png";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Geselecteerde vakbedrijven",
    description: "Alleen erkende specialisten met bewezen kwaliteit.",
  },
  {
    icon: FileCheck,
    title: "Transparante werkwijze",
    description: "Duidelijke communicatie en eerlijke prijzen.",
  },
  {
    icon: Award,
    title: "OEM kwaliteit en veiligheid",
    description: "Originele ruiten en professionele montage.",
  },
  {
    icon: User,
    title: "Persoonlijke service",
    description: "Lokale aandacht met landelijke ondersteuning.",
  },
];

const customerBenefits = [
  {
    title: "Eenvoudige schadeafhandeling",
    text: "Wij regelen de afhandeling met uw verzekeraar. U hoeft zich nergens druk over te maken.",
  },
  {
    title: "Duidelijkheid over eigen risico",
    text: "Geen verrassingen: u weet vooraf wat er van u wordt verwacht en wat uw verzekering vergoedt.",
  },
  {
    title: "Snelle afspraak",
    text: "Snel een afspraak op een moment dat u schikt. Bij ons of bij u ter plaatse.",
  },
];

function FadeIn({
  children,
  className = "",
  transition,
}: {
  children: React.ReactNode;
  className?: string;
  transition?: { duration?: number; delay?: number };
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ...transition }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function OneTwoThreeRuit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToAfspraak = () => {
    document.getElementById("afspraak")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* 1. Hero */}
      <section className="relative min-h-[70vh] flex items-start justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="123RUIT - Autoruitspecialisten"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 pt-24 pb-20 lg:pt-28 lg:pb-28">
          <div className="flex flex-col sm:flex-row items-start gap-8 lg:gap-12 text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="shrink-0"
            >
              <img
                src={LOGO_123RUIT}
                alt="123RUIT.nl"
                className="h-[250px] w-[250px] object-contain opacity-90"
              />
            </motion.div>
            <div className="flex-1 min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
              >
                Aangesloten bij 123RUIT.nl
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg lg:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
              >
                Landelijke dekking, lokale service. Autoglas Ede is uw vaste adres in de regio voor
                professionele autoruitreparatie en -vervanging binnen het 123RUIT-netwerk.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-3"
              >
                <Button
                  size="lg"
                  onClick={scrollToAfspraak}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-blue-sm font-semibold px-6 h-12"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Afspraak maken
                </Button>
                <a href="tel:0318630039">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 font-semibold px-6 h-12"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Bel direct
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro — text + image */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={INTRO_IMG}
                  alt="Werkplaats Autoglas Ede"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
                Samenwerking
              </span>
              <h2 className="font-[var(--font-display)] text-2xl lg:text-4xl font-bold text-white leading-tight mb-6">
                Lokaal vakmanschap, nationaal netwerk
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Autoglas Ede is onderdeel van het 123RUIT-netwerk. Dat betekent: de persoonlijke
                  service en expertise van een lokaal bedrijf, gecombineerd met de voordelen van een
                  landelijk netwerk van onafhankelijke autoruitspecialisten.
                </p>
                <p>
                  Of u nu in Ede of daarbuiten woont — via 123RUIT.nl vindt u altijd een vakbedrijf
                  bij u in de buurt. Bij ons in de regio bent u aan het juiste adres.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. What is 123RUIT */}
      <section className="py-20 lg:py-28 bg-white/[0.02]">
        <div className="container max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="flex justify-center mb-6">
              <img
                src={LOGO_123RUIT}
                alt="123RUIT.nl"
                className="h-12 w-auto object-contain opacity-90"
              />
            </div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
              Het netwerk
            </span>
            <h2 className="font-[var(--font-display)] text-2xl lg:text-4xl font-bold text-white leading-tight mb-6">
              Wat is 123RUIT?
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-left">
              <p>
                123RUIT.nl is een netwerk van onafhankelijke autoruitspecialisten in Nederland. Geen
                keten, maar vakbedrijven die zelfstandig opereren en zijn geselecteerd op kwaliteit,
                professionaliteit en klantgerichtheid.
              </p>
              <p>
                Via 123RUIT.nl kunnen klanten met ruitschade eenvoudig een erkend specialist in hun
                regio vinden. Elk aangesloten bedrijf werkt met hoogwaardige materialen en
                volgt dezelfde kwaliteitsstandaarden, zodat u overal op dezelfde professionele
                service kunt rekenen.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Benefits — 4 items with icons */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <FadeIn className="text-center mb-14 lg:mb-16">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
              Waarom 123RUIT
            </span>
            <h2 className="font-[var(--font-display)] text-2xl lg:text-4xl font-bold text-white leading-tight">
              Kwaliteit en vertrouwen
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {benefits.map((item, i) => (
              <FadeIn key={item.title} transition={{ delay: i * 0.08 }}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-[var(--font-display)] font-semibold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Customer benefits — 3 rows */}
      <section className="py-20 lg:py-28 bg-white/[0.02]">
        <div className="container max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
              Voor u als klant
            </span>
            <h2 className="font-[var(--font-display)] text-2xl lg:text-4xl font-bold text-white leading-tight">
              Wat het u oplevert
            </h2>
          </FadeIn>
          <div className="space-y-10 lg:space-y-12">
            {customerBenefits.map((item, i) => (
              <FadeIn key={item.title}>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-display)] font-semibold text-lg text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. International support */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-3xl mx-auto">
          <FadeIn className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="font-[var(--font-display)] text-xl lg:text-2xl font-bold text-white leading-tight mb-3">
                Ook ondersteuning in het buitenland
              </h2>
              <p className="text-white/70 leading-relaxed">
                Heeft u ruitschade opgelopen tijdens een trip in het buitenland? Via 123RUIT.nl en
                onze partners kan ondersteuning ook in het buitenland beschikbaar zijn. Neem bij
                ruitschade onderweg contact op met uw verzekeraar of 123RUIT.nl voor de mogelijkheden.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section
        id="afspraak"
        className="py-20 lg:py-28 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
        <div className="container relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="font-[var(--font-display)] text-2xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Ruitschade? Neem direct contact op.
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Bel voor een afspraak of plan direct online. Wij helpen u graag verder.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:0318630039">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-blue-sm font-semibold px-6 h-12"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel 0318 63 00 39
                </Button>
              </a>
              <a href="/#afspraak">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 font-semibold px-6 h-12"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Afspraak maken
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}

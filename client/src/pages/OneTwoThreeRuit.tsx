/*
 * 123RUIT — Clean, high-end & low-clutter page
 * Persistent route: `/123ruit`
 */
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Calendar, CheckCircle2, FileCheck, Phone, ShieldCheck, User } from "lucide-react";

const HERO_BG = "/images/123ruit-hero-1.jpg";
const INTRO_IMG = "/images/123ruit-workshop-3-1.jpg";
const NETWORK_IMG = "/images/123ruit-network-2.jpg";
const WORKSHOP_IMG = "/images/123ruit-workshop-3.jpg";
const LOGO_IMG = "/images/123ruit-logo-black.png";

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
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ...transition }}
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* 1. Hero */}
      <section id="ruitschade" className="scroll-mt-24 relative min-h-[72vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt="123RUIT - Autoruitspecialisten"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
        </div>

        <div className="container relative z-10 pt-8 pb-20 lg:pt-12 lg:pb-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div className="max-w-2xl">
              <FadeIn>
                <h1 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                  Aangesloten bij 123RUIT.nl
                </h1>
                <p className="text-xl lg:text-2xl text-white/80 mb-10 leading-relaxed">
                  Landelijke dekking, lokale service. Autoglas Ede is uw vaste adres in de regio voor
                  professionele autoruitreparatie en -vervanging binnen het 123RUIT-netwerk.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/#contact">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 glow-blue-sm font-semibold px-6 h-12"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Afspraak maken
                    </Button>
                  </a>
                  <a href="tel:0318630039">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/25 text-white hover:bg-white/10 font-semibold px-6 h-12"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Bel direct
                    </Button>
                  </a>
                </div>
              </FadeIn>
            </div>

            <div className="hidden lg:block">
              <FadeIn>
                <div className="flex justify-end">
                  <img
                    src={LOGO_IMG}
                    alt="123RUIT.nl"
                    className="h-[300px] w-auto object-contain opacity-90 -translate-x-6"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro section (text + image layout) */}
      <section id="over-ons" className="scroll-mt-24 py-20 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img src={INTRO_IMG} alt="Werkplaats Autoglas Ede" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </FadeIn>

            <FadeIn>
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

      {/* 3. Benefits section */}
      <section id="adas" className="scroll-mt-24 py-20 lg:py-24">
        <div className="container">
          <FadeIn className="text-center mb-14 lg:mb-16">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
              Waarom 123RUIT
            </span>
            <h2 className="font-[var(--font-display)] text-2xl lg:text-4xl font-bold text-white leading-tight">
              Kwaliteit en vertrouwen
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {benefits.map((item, i) => (
              <FadeIn key={item.title} transition={{ delay: i * 0.06 }}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-[var(--font-display)] font-semibold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What is 123RUIT section */}
      <section className="py-20 lg:py-24 bg-white/[0.02]">
        <div className="container">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
            <FadeIn>
              <div className="mb-6">
                <img src={LOGO_IMG} alt="123RUIT.nl" className="h-12 w-auto object-contain opacity-90 invert" />
              </div>
              <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
                Het netwerk
              </span>
              <h2 className="font-[var(--font-display)] text-2xl lg:text-3xl font-bold text-white leading-tight mb-5">
                Wat is 123RUIT.nl?
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  123RUIT.nl is een netwerk van onafhankelijke autoruitspecialisten in Nederland. Geen
                  keten, maar vakbedrijven die zelfstandig opereren en zijn geselecteerd op kwaliteit,
                  professionaliteit en klantgerichtheid.
                </p>
                <p>
                  Via 123RUIT.nl kunnen klanten met ruitschade eenvoudig een erkend specialist in hun
                  regio vinden. Elk aangesloten bedrijf werkt met hoogwaardige materialen en volgt
                  dezelfde kwaliteitsstandaarden.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn>
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10]">
                  <img src={NETWORK_IMG} alt="123RUIT netwerk" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Customer benefits section */}
      <section id="verzekering" className="scroll-mt-24 py-20 lg:py-24">
        <div className="container max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
              Voor u als klant
            </span>
            <h2 className="font-[var(--font-display)] text-2xl lg:text-4xl font-bold text-white leading-tight">
              Wat het u oplevert
            </h2>
          </FadeIn>

          <div className="space-y-9 lg:space-y-10">
            {customerBenefits.map((item) => (
              <FadeIn key={item.title}>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-display)] font-semibold text-lg text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm lg:text-base">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. International support section */}
      <section id="zakelijk" className="scroll-mt-24 py-20 lg:py-24">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <FadeIn>
              <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
                Buiten Nederland
              </span>
              <h2 className="font-[var(--font-display)] text-2xl lg:text-4xl font-bold text-white leading-tight mb-4">
                Ook ondersteuning in het buitenland
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Heeft u ruitschade opgelopen tijdens een trip in het buitenland? Via 123RUIT.nl en onze
                partners kan ondersteuning ook in het buitenland beschikbaar zijn. Neem bij ruitschade
                onderweg contact op met uw verzekeraar of 123RUIT.nl voor de mogelijkheden.
              </p>
              <p className="text-white/70 leading-relaxed">
                We regelen het met aandacht, zodat u snel weer veilig de weg op kunt.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10]">
                <img
                  src={NETWORK_IMG}
                  alt="Internationale ondersteuning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. Final CTA section */}
      <section id="afspraak" className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/12 via-primary/6 to-transparent" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[110px]" />

        {/* Extra anchor so navbar '#contact' also scrolls here */}
        <div id="contact" className="scroll-mt-24 h-1 relative z-10" />

        <div className="container relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="font-[var(--font-display)] text-2xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Ruitschade? Neem direct contact op.
            </h2>
            <p className="text-white/70 text-lg mb-10">
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
              <a href="/#contact">
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


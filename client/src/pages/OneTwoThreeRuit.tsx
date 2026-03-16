<<<<<<< HEAD
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
=======
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  PhoneCall,
  CalendarCheck,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Globe2,
  FileCheck2,
  Users,
} from "lucide-react";

const HERO_TECHNICIAN_IMG = "/images/123ruit-hero-1.jpg";
const NETWORK_TECHNICIAN_IMG = "/images/123ruit-network-2.jpg";
const WORKSHOP_IMG = "/images/123ruit-workshop-3.jpg";
const LOGO_123RUIT = "/images/123ruit-logo-black.png";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function OneTwoThreeRuit() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-foreground">
      <Navbar />

      <main className="pt-24 pb-20 lg:pt-28">
        {/* 1. Hero section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_55%)]" />
            <img
              src={HERO_TECHNICIAN_IMG}
              alt="Autoglasspecialist aan het werk aan een premium voorruit"
              className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/90 to-slate-950" />
          </div>

          <motion.div
            className="container relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-14 lg:py-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={sectionVariants} className="flex-1 max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary/90 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
                123RUIT.nl partner
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
                Aangesloten bij <span className="text-primary">123RUIT.nl</span>
              </h1>
              <h2 className="text-lg md:text-xl text-slate-100/90 mb-4 max-w-xl">
                Landelijke dekking, met de persoonlijke service van uw lokale autoruitspecialist in Ede.
              </h2>
              <p className="text-sm md:text-base text-slate-300/90 max-w-xl mb-8">
                Autoglas Ede is onderdeel van het 123RUIT.nl netwerk. Zo combineren we vakkundig lokaal vakmanschap
                met een krachtige landelijke organisatie voor snelle, zorgeloze afhandeling van ruitschade.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                <motion.a
                  href="/#afspraak"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 hover:bg-primary/90 hover:shadow-primary/40 transition-all"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CalendarCheck className="w-4 h-4 mr-2" />
                  Afspraak maken
                </motion.a>
                <motion.a
                  href="tel:0318630039"
                  className="inline-flex items-center justify-center rounded-full border border-slate-500/70 bg-slate-950/60 px-6 py-3 text-sm font-medium text-slate-50 hover:bg-slate-900 hover:border-primary/70 hover:text-primary-100 transition-all"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Bel direct
                </motion.a>
              </div>

              <motion.div
                className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-300/90"
                variants={sectionVariants}
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Verzekeringsafhandeling geregeld</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Lokale specialist in Ede</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Onderdeel van landelijk netwerk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Vakkundige montage &amp; kalibratie</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              className="flex-1 w-full max-w-lg lg:max-w-xl"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/40 via-sky-400/30 to-transparent opacity-50 blur-2xl" />
                <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.85)]">
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 relative">
                    <img
                      src={NETWORK_TECHNICIAN_IMG}
                      alt="Autoglas Ede specialist werkt aan een voorruit in een premium showroom"
                      className="h-full w-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,_rgba(59,130,246,0.5),_transparent_55%),radial-gradient(circle_at_90%_100%,_rgba(37,99,235,0.55),_transparent_55%)]" />
                    <div className="absolute inset-0 flex items-end justify-between p-4 md:p-6">
                      <div className="max-w-[60%]">
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-200/80 mb-1">
                          Autoglas Ede
                        </p>
                        <p className="text-sm md:text-base font-medium text-slate-50">
                          Premium ruitherstel in samenwerking met 123RUIT.nl
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="inline-flex items-center rounded-full bg-slate-950/70 px-3 py-1 text-[11px] font-medium text-slate-100 border border-white/10">
                          123RUIT.nl partnerlocatie
                        </span>
                        <span className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-[11px] font-semibold text-slate-950 shadow-md shadow-primary/40">
                          Vandaag nog een afspraak mogelijk*
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                *Beschikbaarheid afhankelijk van schade en planning. Neem telefonisch contact op voor actuele mogelijkheden.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* 2. Intro / netwerk section */}
        <motion.section
          className="container mt-20 lg:mt-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-center">
            <div className="order-2 lg:order-1 space-y-5 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                De kracht van een landelijk netwerk, met de service van een lokale specialist
              </h2>
              <p className="text-sm md:text-base text-slate-300/90">
                Met 123RUIT.nl achter ons staat u er nooit alleen voor bij ruitschade. U krijgt het
                vertrouwde aanspreekpunt van Autoglas Ede, gecombineerd met de schaalgrootte en
                processen van een professionele landelijke organisatie.
              </p>
              <p className="text-sm md:text-base text-slate-300/90">
                Dat merkt u aan de snelheid van handelen, de duidelijke communicatie en de manier
                waarop wij uw schade samen met de verzekeraar afwikkelen. U houdt het persoonlijke
                contact, wij regelen de rest.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative max-w-xl ml-auto">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/40 via-sky-400/30 to-transparent opacity-70 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
                  <div className="aspect-[16/10] bg-slate-900">
                    <img
                      src={WORKSHOP_IMG}
                      alt="Monteur in de werkplaats bezig met een autoruit"
                      className="h-full w-full object-cover"
                    />
                    <div className="h-full w-full bg-gradient-to-tr from-slate-950/80 via-slate-950/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex items-center justify-between gap-4 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300/80 mb-1">
                        Lokaal vakmanschap
                      </p>
                      <p className="text-sm md:text-base font-medium text-slate-50">
                        Gecertificeerde monteur, gespecialiseerd in autoruiten en ADAS-kalibratie.
                      </p>
                    </div>
                    <div className="flex flex-col items-end text-[11px] text-slate-200">
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 border border-primary/40">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                        Gecertificeerde montage
                      </span>
                      <span className="mt-1 text-[10px] text-slate-400">
                        Volgens richtlijnen autofabrikanten
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. Wat is 123RUIT.nl */}
        <motion.section
          className="relative mt-20 lg:mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionVariants}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="container relative">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] items-start">
              <div className="space-y-4 max-w-xl">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Wat is 123RUIT.nl?
                </h2>
                <p className="text-sm md:text-base text-slate-300/90">
                  123RUIT.nl is een onafhankelijk netwerk van geselecteerde autoruitspecialisten in
                  Nederland. De deelnemende bedrijven delen kennis, systemen en kwaliteitsnormen,
                  zodat ruitschade overal volgens dezelfde hoge standaard wordt hersteld.
                </p>
                <p className="text-sm md:text-base text-slate-300/90">
                  Als aangesloten specialist profiteert Autoglas Ede van deze gezamenlijke kracht,
                  terwijl u nog steeds geholpen wordt door een vertrouwd adres in de regio.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-primary mb-2">
                    Heldere belofte
                  </p>
                  <p className="text-sm md:text-base text-slate-50 leading-relaxed">
                    “Met 123RUIT.nl achter ons krijgt u de persoonlijke aandacht van Autoglas Ede
                    én de zekerheid van een professioneel landelijk netwerk.”
                  </p>
                  <div className="mt-4 flex items-center justify-end">
                    <img
                      src={LOGO_123RUIT}
                      alt="123RUIT.nl partnerlogo"
                      className="h-10 w-auto opacity-90"
                    />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-700/70 bg-slate-950/80 px-4 py-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-1">
                      Netwerk
                    </p>
                    <p className="text-sm font-medium text-slate-50">Onafhankelijke ruitspecialisten</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Geen dealergroep, maar vakbedrijven met focus op autoruiten.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-700/70 bg-slate-950/80 px-4 py-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-1">
                      Processen
                    </p>
                    <p className="text-sm font-medium text-slate-50">Gestroomlijnde schadeafhandeling</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Schademelding, facturatie en afstemming met verzekeraars efficiënt geregeld.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. Benefits section */}
        <motion.section
          className="container mt-20 lg:mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={sectionVariants} className="max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Waarom kiezen voor een 123RUIT.nl specialist?
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300/90">
              Als 123RUIT.nl specialist voldoet Autoglas Ede aan strenge eisen voor montage,
              materialen en service. U merkt dat in elk contactmoment.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Geselecteerde vakbedrijven",
                text: "Alleen gespecialiseerde ruitherstellers met aantoonbare ervaring en vakmanschap maken deel uit van het netwerk.",
              },
              {
                icon: FileCheck2,
                title: "Transparante werkwijze",
                text: "Heldere afspraken, duidelijke tarieven en vooraf inzicht in de mogelijkheden met of zonder verzekering.",
              },
              {
                icon: CheckCircle2,
                title: "OEM-kwaliteit & veiligheid",
                text: "Ruiten en materialen van hoge kwaliteit, met oog voor moderne veiligheidssystemen en ADAS-kalibratie.",
              },
              {
                icon: Users,
                title: "Persoonlijke service",
                text: "Direct contact met een lokaal team dat uw auto én uw situatie kent – zonder anonieme callcenters.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={sectionVariants}
                  className="group relative overflow-hidden rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-950/95 via-slate-900/95 to-slate-950/95 p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.95)]"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
                  <div className="relative flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/50 text-primary shadow-[0_0_25px_rgba(59,130,246,0.45)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-slate-50 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-300/90">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* 5. Customer impact section */}
        <motion.section
          className="container mt-20 lg:mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionVariants}
        >
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Wat betekent dit voor u als klant?
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300/90">
              Dankzij onze samenwerking met 123RUIT.nl ervaart u minder regelwerk en meer gemak bij
              ruitschade – of u nu particulier, zakelijk rijder of wagenparkbeheerder bent.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 px-5 py-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary">
                <FileCheck2 className="w-5 h-5" />
                <h3 className="text-sm font-semibold text-slate-50">
                  Eenvoudige schadeafhandeling
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300/90">
                Wij helpen u met de melding bij uw verzekeraar en nemen de administratieve afhandeling
                zoveel mogelijk uit handen.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 px-5 py-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-sm font-semibold text-slate-50">
                  Duidelijkheid over eigen risico
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300/90">
                Vooraf bespreken we wat uw eventuele eigen risico is en welke vergoedingen binnen uw
                polis gelden, zodat u niet voor verrassingen komt te staan.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 px-5 py-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary">
                <CalendarCheck className="w-5 h-5" />
                <h3 className="text-sm font-semibold text-slate-50">
                  Snelle, flexibele planning
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300/90">
                Dankzij de kracht van het netwerk is er vaak snel een passend moment te vinden, in onze
                werkplaats of op locatie.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 6. International support section */}
        <motion.section
          className="container mt-20 lg:mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionVariants}
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-center">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary/90 mb-2">
                <Globe2 className="w-3.5 h-3.5" />
                Internationaal netwerk
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Ook hulp bij ruitschade in het buitenland
              </h2>
              <p className="text-sm md:text-base text-slate-300/90">
                Heeft u in het buitenland ruitschade opgelopen of rijdt u met een buitenlands
                kenteken? Via het 123RUIT.nl netwerk is in veel gevallen internationale ondersteuning
                mogelijk, in samenwerking met gespecialiseerde partners.
              </p>
              <p className="text-sm md:text-base text-slate-300/90">
                Neem in dit soort situaties altijd eerst contact op met Autoglas Ede. Wij bekijken
                samen met u welke oplossingen er binnen het netwerk beschikbaar zijn en hoe uw
                verzekeringsdekking daarbij aansluit.
              </p>
            </div>

            <div>
              <div className="relative max-w-xl ml-auto">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/40 via-sky-400/20 to-transparent opacity-70 blur-3xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/75 backdrop-blur-xl shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
                  <div className="aspect-[16/10] bg-slate-900">
                    <img
                      src={NETWORK_TECHNICIAN_IMG}
                      alt="Premium voertuigen in showroom tijdens autoruitservice"
                      className="h-full w-full object-cover"
                    />
                    <div className="h-full w-full bg-gradient-to-br from-slate-950/85 via-slate-950/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex items-center justify-between gap-4 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300/80 mb-1">
                        Onderweg in Europa
                      </p>
                      <p className="text-sm font-medium text-slate-50">
                        Advies en ondersteuning bij ruitschade op reis.
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-medium text-slate-100 border border-primary/60">
                      Internationaal coördinatiepunt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 7. Final CTA banner */}
        <motion.section
          className="container mt-20 lg:mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionVariants}
        >
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-slate-950 to-slate-950 px-6 py-8 md:px-10 md:py-10 shadow-[0_30px_80px_rgba(15,23,42,0.9)]">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute left-10 bottom-0 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  Ruitschade? Neem direct contact op.
                </h2>
                <p className="text-sm md:text-base text-slate-100/90 max-w-xl">
                  Twijfelt u of uw ruit gerepareerd of vervangen moet worden, of hoe dit via uw
                  verzekering loopt? Bel ons gerust. Wij kijken met u mee en plannen indien gewenst
                  direct een afspraak in.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 min-w-[230px]">
                <motion.a
                  href="tel:0318630039"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 hover:bg-primary/90 hover:shadow-primary/40 transition-all"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Bel direct
                </motion.a>
                <motion.a
                  href="/#afspraak"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-primary/70 bg-slate-950/60 px-6 py-3 text-sm font-medium text-slate-50 hover:bg-slate-900 hover:text-white transition-all"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CalendarCheck className="w-4 h-4 mr-2" />
                  Afspraak maken
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
>>>>>>> c78c886f630316714de8935617efd658efd92f5a

      <Footer />
    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> c78c886f630316714de8935617efd658efd92f5a

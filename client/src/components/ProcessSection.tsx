/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive
 * Step-by-step process section showing how the service works
 */
import { motion } from "framer-motion";
import { Phone, Search, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Neem contact op",
    description: "Bel ons of vul het online formulier in. Wij zijn direct bereikbaar — geen antwoordapparaat.",
  },
  {
    icon: Search,
    step: "02",
    title: "Schade beoordeling",
    description: "Wij beoordelen de schade en geven eerlijk advies: reparatie of vervanging. Geen onnodige kosten.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Vakkundig herstel",
    description: "Onze ervaren monteurs repareren of vervangen je ruit met O.E.M.-materialen en professioneel gereedschap.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Klaar & gegarandeerd",
    description: "Je rijdt weer veilig de weg op. Met levenslange garantie op montage en ADAS-kalibratie indien nodig.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="section-divider mb-20" />
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block"
          >
            Hoe het werkt
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-display)] text-3xl lg:text-5xl font-bold text-white mb-4"
          >
            In 4 stappen{" "}
            <span className="text-gradient-green">weer op weg</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30" />

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center relative"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 relative z-10">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-mono text-xs text-primary/60 mb-2 block">{item.step}</span>
              <h3 className="font-[var(--font-display)] text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

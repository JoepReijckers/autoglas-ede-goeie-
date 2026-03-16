/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive
 * Insurance section showing partnerships and handling
 */
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, HandshakeIcon, BadgeCheck } from "lucide-react";

const INSURANCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438639607/fhLmWjZo9Z4FGfTeR4Aehu/insurance-handshake-27LDnRkYz6WN9r6u7uXbNt.webp";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Alle verzekeraars",
    description: "Wij werken samen met vrijwel alle verzekeringsmaatschappijen, o.a. Centraal Beheer, Univé, en meer.",
  },
  {
    icon: FileCheck,
    title: "Wij regelen alles",
    description: "Wij nemen je het regelwerk uit handen en handelen de schade snel en correct voor je af.",
  },
  {
    icon: HandshakeIcon,
    title: "Glasgarant",
    description: "Autoglas Ede is aangesloten bij Glasgarant voor gegarandeerde kwaliteit en service.",
  },
  {
    icon: BadgeCheck,
    title: "Eigen risico vanaf €0",
    description: "In de meeste gevallen is een sterreparatie gratis en een voorruitvervanging vanaf €0 eigen risico.",
  },
];

export default function InsuranceSection() {
  return (
    <section id="verzekering" className="py-20 lg:py-28 relative">
      <div className="section-divider mb-20" />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img
              src={INSURANCE_IMG}
              alt="Verzekering afhandeling bij Autoglas Ede"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block"
            >
              Verzekering
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-[var(--font-display)] text-3xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              Wij regelen de{" "}
              <span className="text-gradient-green">verzekering</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed mb-8"
            >
              Schade aan je autoruit? Wij nemen je het regelwerk uit handen. Eén belletje en je bent geholpen — zonder antwoordapparaat.
            </motion.p>

            {/* Benefits grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="glass-card rounded-xl p-4 group hover:bg-white/[0.08] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-[var(--font-display)] text-sm font-semibold text-white mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

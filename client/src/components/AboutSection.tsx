/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive
 * About section with team info, workshop image, and key stats
 */
import { motion } from "framer-motion";
import { Award, Clock, Users, MapPin } from "lucide-react";

const WORKSHOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438639607/fhLmWjZo9Z4FGfTeR4Aehu/workshop-team-LXftpmqFcmSZee5GeRUjTe.webp";

const stats = [
  { icon: Clock, value: "25+", label: "Jaar ervaring" },
  { icon: Award, value: "∞", label: "Levenslange garantie" },
  { icon: Users, value: "1000+", label: "Tevreden klanten" },
  { icon: MapPin, value: "Ede", label: "Regio Gelderland" },
];

export default function AboutSection() {
  return (
    <section id="over-ons" className="py-20 lg:py-28 relative">
      <div className="section-divider mb-20" />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] order-2 lg:order-1"
          >
            <img
              src={WORKSHOP_IMG}
              alt="Werkplaats Autoglas Ede"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block"
            >
              Over ons
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-[var(--font-display)] text-3xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              Vakmanschap zonder{" "}
              <span className="text-gradient-green">fratsen</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-white/60 leading-relaxed mb-8"
            >
              <p>
                Autoglas Ede is gevestigd aan de Kryptonstraat 41 in Ede. Onze monteurs — Dennis Jansen en Arno Budding — hebben samen meer dan 40 jaar ervaring in het repareren en vervangen van autoruiten, truckruiten en ruiten van klassiekers.
              </p>
              <p>
                Bij Autoglas Ede draait alles om kwaliteit, snelheid en eerlijkheid. Wij werken uitsluitend met O.E.M.-autoruiten en verlijmingsproducten. Geen poespas, geen verrassingen — gewoon goed vakwerk met glasheldere service.
              </p>
              <p>
                Wij werken voor particulieren en bedrijven en zijn aangesloten bij <strong className="text-white">Glasgarant</strong>, <strong className="text-white">123RUIT.nl</strong>, Stichting Duurzaam Repareren, ABZ en Euromotive.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-[var(--font-display)] text-xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-white/50">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

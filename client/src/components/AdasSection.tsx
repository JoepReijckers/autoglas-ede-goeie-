/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive
 * ADAS calibration section with image and description
 */
import { motion } from "framer-motion";
import { Cpu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ADAS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438639607/fhLmWjZo9Z4FGfTeR4Aehu/adas-calibration-nuwU8RP9LFxfJKWnyfHAjK.webp";

export default function AdasSection() {
  return (
    <section id="adas" className="py-20 lg:py-28 relative">
      <div className="section-divider mb-20" />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">ADAS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-[var(--font-display)] text-3xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              ADAS-kalibratie?{" "}
              <span className="text-gradient-green">Dat fixen we.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-white/60 leading-relaxed mb-8"
            >
              <p>
                Veel moderne auto's zitten vol slimme systemen die je helpen veiliger te rijden, zoals rijstrookassistentie en noodremhulp. Dat heet ADAS.
              </p>
              <p>
                <strong className="text-white">Na het vervangen van een voorruit moeten die systemen opnieuw gekalibreerd worden.</strong> Gelukkig doen wij dat gewoon in-house, met de juiste apparatuur én de juiste mensen. Snel, precies en volgens fabrieksspecificaties.
              </p>
              <p>
                Zo weet jij zeker dat alles werkt zoals het hoort. Veiligheid staat bij ons op nummer één.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={() => document.querySelector("#afspraak")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green-sm font-semibold px-6"
              >
                Plan kalibratie
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-[16/10]"
          >
            <img
              src={ADAS_IMG}
              alt="ADAS kalibratie bij Autoglas Ede"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

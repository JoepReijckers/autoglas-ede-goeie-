/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive
 * Full-width CTA banner with green glow effect
 */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="font-[var(--font-display)] text-2xl lg:text-4xl font-bold text-white mb-3">
              Ruitschade? Wacht niet langer.
            </h2>
            <p className="text-white/50 text-lg max-w-xl">
              Bel ons direct of maak online een afspraak. Wij regelen alles — snel, vakkundig en zonder gedoe.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button
              size="lg"
              onClick={() => document.querySelector("#afspraak")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-semibold text-base px-7 h-12"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Afspraak Maken
            </Button>
            <a href="tel:0318630039">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 font-semibold text-base px-7 h-12"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-mono">Bel ons</span>
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive (Blue accent)
 * Full-screen hero with background image, bold tagline, CTA buttons
 * Mascot Dennis appears on the right side with a wave animation
 */
import { Phone, Calendar, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438639607/fhLmWjZo9Z4FGfTeR4Aehu/hero-autoglas-Cxpe85jsaf8xPUjNcBzApR.webp";
const MASCOT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438639607/fhLmWjZo9Z4FGfTeR4Aehu/mascot-dennis_8c91dea2.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Autoglas Ede - Professionele autoruitreparatie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.005_260/95%)] via-[oklch(0.1_0.005_260/80%)] to-[oklch(0.08_0.005_260/60%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.005_260)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/80">Levenslange garantie op montage</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Dé autoruit&shy;specialist in{" "}
              <span className="text-gradient-blue">regio Ede</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg lg:text-xl text-white/70 max-w-xl mb-8 leading-relaxed"
            >
              Van sterretje tot complete voorruitvervanging. Transparante service, glashelder advies en{" "}
              <strong className="text-white">meer dan 25 jaar ervaring</strong>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Button
                size="lg"
                onClick={() => document.querySelector("#afspraak")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-blue font-semibold text-base px-7 h-12"
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
                  <span className="font-mono">0318 63 00 39</span>
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">4.9 sterren</p>
                  <p className="text-xs text-white/50">Google Reviews</p>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-sm font-semibold text-white">25+ jaar</p>
                <p className="text-xs text-white/50">Ervaring</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-sm font-semibold text-white">Eigen risico</p>
                <p className="text-xs text-white/50">Vanaf €0,00</p>
              </div>
            </motion.div>
          </div>

          {/* Mascot Dennis - appears on the right side on larger screens */}
          <motion.div
            initial={{ x: 100, opacity: 0, rotate: 10 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 150, damping: 15 }}
            className="hidden lg:block shrink-0 relative"
          >
            {/* Speech bubble */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.6, type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -top-16 -left-8 whitespace-nowrap z-10"
            >
              <div className="bg-white text-gray-900 text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg">
                Ruitschade? Wij fixen het! 👍
                <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-white" />
              </div>
            </motion.div>

            <motion.img
              src={MASCOT_URL}
              alt="Dennis - Autoglas Ede mascotte"
              className="w-36 xl:w-44 h-auto drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

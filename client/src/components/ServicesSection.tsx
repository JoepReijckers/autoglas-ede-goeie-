/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive
 * Services section with card grid, icons, and descriptions
 * Inspired by Carwin's service blocks
 */
import { motion } from "framer-motion";
import { Car, Truck, Caravan, Wrench, ChevronRight } from "lucide-react";

const STAR_REPAIR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438639607/fhLmWjZo9Z4FGfTeR4Aehu/star-repair-T7Cjts8tpTELDYo6aRcyFv.webp";

const services = [
  {
    icon: Car,
    title: "Autoruiten",
    description:
      "Van sterretje tot complete voorruitvervanging: wij repareren autoruiten van álle merken en modellen. Snel, netjes en zonder gedoe.",
  },
  {
    icon: Caravan,
    title: "Camperruiten",
    description:
      "Niets zo vervelend als een gebarsten camperruit onderweg. Gelukkig weten wij precies hoe we dat snel en veilig oplossen.",
  },
  {
    icon: Truck,
    title: "Vrachtwagenruiten",
    description:
      "Truck- of vrachtwagenruit beschadigd? Wij hebben de kennis en het gereedschap om ook grote voertuigen vakkundig te helpen.",
  },
  {
    icon: Wrench,
    title: "Speciale voertuigen",
    description:
      "Oldtimer, landbouwvoertuig of bijzonder voertuig? Wij hebben de expertise om ook bijzondere ruiten te repareren of vervangen.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section id="ruitschade" className="py-20 lg:py-28 relative">
      <div className="container">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block"
            >
              Onze diensten
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-[var(--font-display)] text-3xl lg:text-5xl font-bold text-white leading-tight mb-4"
            >
              Ruitschade? Wij regelen het{" "}
              <span className="text-gradient-green">snel en vakkundig</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed"
            >
              Van personenauto tot camper of speciaal voertuig, bij Autoglas Ede ben je verzekerd van vakkundige service. Direct geregeld met je verzekeraar. Heldere communicatie, eerlijk advies en strak vakwerk.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img
              src={STAR_REPAIR_IMG}
              alt="Sterreparatie bij Autoglas Ede"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>
        </div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group glass-card rounded-xl p-6 hover:bg-white/[0.08] transition-all duration-300 hover:glow-green-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-[var(--font-display)] text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                Meer info <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

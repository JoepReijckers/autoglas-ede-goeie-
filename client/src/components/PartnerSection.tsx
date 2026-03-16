/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive
 * Partnership section for 123RUIT and certifications
 */
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Award, Users } from "lucide-react";

const partners = [
  { name: "123RUIT.nl", description: "Landelijk netwerk van ruitspecialisten" },
  { name: "Glasgarant", description: "Kwaliteitsgarantie autoruiten" },
  { name: "BOVAG", description: "Branchevereniging automotive" },
  { name: "Stichting Duurzaam Repareren", description: "Duurzaam herstellen" },
];

export default function PartnerSection() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="section-divider mb-20" />
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block"
          >
            Partners & certificeringen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-display)] text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Aangesloten bij{" "}
            <span className="text-gradient-green">123RUIT.nl</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg leading-relaxed"
          >
            Autoglas Ede is onderdeel van 123ruit.nl, een landelijk netwerk van meer dan 50 gecertificeerde ruitenspecialisten. Zo ben je verzekerd van betrouwbare service, vakkundige montage en heldere garanties.
          </motion.p>
        </div>

        {/* Partner badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="glass-card rounded-xl p-5 text-center hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                {index === 0 && <Globe className="w-5 h-5 text-primary" />}
                {index === 1 && <ShieldCheck className="w-5 h-5 text-primary" />}
                {index === 2 && <Award className="w-5 h-5 text-primary" />}
                {index === 3 && <Users className="w-5 h-5 text-primary" />}
              </div>
              <h3 className="font-[var(--font-display)] text-sm font-semibold text-white mb-1">
                {partner.name}
              </h3>
              <p className="text-xs text-white/40">{partner.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

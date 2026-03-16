/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive
 * Appointment booking form with multi-step wizard inspired by Autotaalglas
 * Combined with contact info section
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Car,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

type DamageLocation = "voorruit" | "achterruit" | "zijruit" | "dakraam" | "";
type DamageType = "sterretje" | "barst" | "vervanging" | "";

const damageLocations = [
  { value: "voorruit" as DamageLocation, label: "Voorruit", icon: "🚗" },
  { value: "achterruit" as DamageLocation, label: "Achterruit", icon: "🚙" },
  { value: "zijruit" as DamageLocation, label: "Zijruit", icon: "🚘" },
  { value: "dakraam" as DamageLocation, label: "Dakraam", icon: "☀️" },
];

const damageTypes = [
  { value: "sterretje" as DamageType, label: "Sterretje repareren", description: "Klein beschadigd plekje (< 3cm)" },
  { value: "barst" as DamageType, label: "Barst / grote schade", description: "Barst of grotere beschadiging" },
  { value: "vervanging" as DamageType, label: "Ruit vervangen", description: "Complete ruit moet vervangen worden" },
];

export default function AppointmentSection() {
  const [step, setStep] = useState(1);
  const [damageLocation, setDamageLocation] = useState<DamageLocation>("");
  const [damageType, setDamageType] = useState<DamageType>("");
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    kenteken: "",
    datum: "",
    opmerking: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.naam || !formData.telefoon) {
      toast.error("Vul minimaal je naam en telefoonnummer in.");
      return;
    }
    setSubmitted(true);
    toast.success("Bedankt! We nemen zo snel mogelijk contact met je op.");
  };

  const nextStep = () => {
    if (step === 1 && !damageLocation) {
      toast.error("Selecteer waar de schade zit.");
      return;
    }
    if (step === 2 && !damageType) {
      toast.error("Selecteer het type schade.");
      return;
    }
    setStep((s) => Math.min(s + 1, 3));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <section id="afspraak" className="py-20 lg:py-28 relative">
      <div className="section-divider mb-20" />
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block"
            >
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-[var(--font-display)] text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
            >
              Maak een{" "}
              <span className="text-gradient-green">afspraak</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-lg leading-relaxed mb-8"
            >
              Neem gerust contact met ons op. Of je nu direct je autoruit wilt laten repareren of meer wilt weten over de mogelijkheden — we helpen je graag verder.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              <a
                href="tel:0318630039"
                className="flex items-center gap-4 glass-card rounded-xl p-4 hover:bg-white/[0.08] transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">Bel ons</p>
                  <p className="font-mono font-semibold text-white">0318 63 00 39</p>
                </div>
              </a>

              <a
                href="mailto:info@autoglas-ede.nl"
                className="flex items-center gap-4 glass-card rounded-xl p-4 hover:bg-white/[0.08] transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">E-mail</p>
                  <p className="font-medium text-white">info@autoglas-ede.nl</p>
                </div>
              </a>

              <div className="flex items-center gap-4 glass-card rounded-xl p-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">Adres</p>
                  <p className="font-medium text-white">Kryptonstraat 41, 6718 WR Ede</p>
                </div>
              </div>

              <div className="flex items-center gap-4 glass-card rounded-xl p-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">Openingstijden</p>
                  <p className="font-medium text-white">Ma-Vr: 08:00 - 17:30</p>
                  <p className="text-xs text-white/40">Za: op afspraak</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Appointment Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            id="contact"
            className="glass-card rounded-2xl p-6 lg:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-[var(--font-display)] text-2xl font-bold text-white mb-3">
                  Bedankt voor je aanvraag!
                </h3>
                <p className="text-white/50 max-w-sm">
                  We nemen zo snel mogelijk contact met je op om een afspraak in te plannen.
                </p>
              </div>
            ) : (
              <>
                {/* Progress bar */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex-1 flex items-center gap-2">
                      <div
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                          s <= step ? "bg-primary" : "bg-white/10"
                        }`}
                      />
                    </div>
                  ))}
                  <span className="text-xs text-white/40 ml-2 font-mono">
                    Stap {step}/3
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-[var(--font-display)] text-xl font-bold text-white mb-2">
                        Waar zit de schade?
                      </h3>
                      <p className="text-sm text-white/40 mb-6">
                        Selecteer de locatie van de schade aan je voertuig.
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {damageLocations.map((loc) => (
                          <button
                            key={loc.value}
                            onClick={() => setDamageLocation(loc.value)}
                            className={`p-5 rounded-xl border text-center transition-all duration-200 ${
                              damageLocation === loc.value
                                ? "border-primary bg-primary/10 glow-green-sm"
                                : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                            }`}
                          >
                            <span className="text-3xl mb-2 block">{loc.icon}</span>
                            <span
                              className={`text-sm font-semibold ${
                                damageLocation === loc.value ? "text-primary" : "text-white/70"
                              }`}
                            >
                              {loc.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-[var(--font-display)] text-xl font-bold text-white mb-2">
                        Wat voor schade?
                      </h3>
                      <p className="text-sm text-white/40 mb-6">
                        Selecteer het type schade zodat we je beter kunnen helpen.
                      </p>
                      <div className="space-y-3 mb-8">
                        {damageTypes.map((type) => (
                          <button
                            key={type.value}
                            onClick={() => setDamageType(type.value)}
                            className={`w-full p-4 rounded-xl border text-left transition-all duration-200 ${
                              damageType === type.value
                                ? "border-primary bg-primary/10 glow-green-sm"
                                : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                            }`}
                          >
                            <span
                              className={`text-sm font-semibold block mb-0.5 ${
                                damageType === type.value ? "text-primary" : "text-white/80"
                              }`}
                            >
                              {type.label}
                            </span>
                            <span className="text-xs text-white/40">{type.description}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-[var(--font-display)] text-xl font-bold text-white mb-2">
                        Jouw gegevens
                      </h3>
                      <p className="text-sm text-white/40 mb-6">
                        Vul je gegevens in en we nemen snel contact op.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs text-white/50 mb-1.5 block">Naam *</label>
                            <input
                              type="text"
                              value={formData.naam}
                              onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
                              placeholder="Je naam"
                              className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                              required
                            />
                          </div>
                          <div>
                            <label className="text-xs text-white/50 mb-1.5 block">Telefoon *</label>
                            <input
                              type="tel"
                              value={formData.telefoon}
                              onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })}
                              placeholder="06 1234 5678"
                              className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-mono"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-xs text-white/50 mb-1.5 block">E-mail</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="je@email.nl"
                            className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                          />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs text-white/50 mb-1.5 block">Kenteken</label>
                            <input
                              type="text"
                              value={formData.kenteken}
                              onChange={(e) => setFormData({ ...formData, kenteken: e.target.value.toUpperCase() })}
                              placeholder="AB-123-CD"
                              className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-mono uppercase"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-white/50 mb-1.5 block">Voorkeursdatum</label>
                            <input
                              type="date"
                              value={formData.datum}
                              onChange={(e) => setFormData({ ...formData, datum: e.target.value })}
                              className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-xs text-white/50 mb-1.5 block">Opmerking</label>
                          <textarea
                            value={formData.opmerking}
                            onChange={(e) => setFormData({ ...formData, opmerking: e.target.value })}
                            placeholder="Eventuele opmerkingen..."
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-semibold h-12 text-base"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Afspraak aanvragen
                        </Button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation buttons */}
                <div className="flex justify-between mt-6">
                  {step > 1 ? (
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      className="border-white/10 text-white/70 hover:bg-white/5"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Vorige
                    </Button>
                  ) : (
                    <div />
                  )}
                  {step < 3 && (
                    <Button
                      onClick={nextStep}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                    >
                      Volgende
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive
 * Customer reviews section with testimonial cards
 */
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marco V.",
    location: "Ede",
    title: "Snelle en vakkundige service",
    text: "Sterretje in mijn voorruit gemeld en dezelfde dag nog geholpen. Vriendelijk personeel en alles netjes afgehandeld met de verzekering. Top!",
    rating: 5,
  },
  {
    name: "Sandra K.",
    location: "Wageningen",
    title: "Uitstekende communicatie",
    text: "Van begin tot eind goed geïnformeerd over het proces. De voorruit is vakkundig vervangen en de ADAS-kalibratie was dezelfde dag klaar. Aanrader!",
    rating: 5,
  },
  {
    name: "Peter de J.",
    location: "Veenendaal",
    title: "Professioneel en eerlijk",
    text: "Eerlijk advies gekregen over of reparatie of vervanging nodig was. Geen onnodige kosten. De monteurs weten echt wat ze doen. Levenslange garantie geeft extra vertrouwen.",
    rating: 5,
  },
  {
    name: "Lisa M.",
    location: "Bennekom",
    title: "Camperruit snel geregeld",
    text: "Onze camperruit was beschadigd vlak voor vakantie. Autoglas Ede heeft het binnen twee dagen opgelost. Geweldige service, zeker voor campers!",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 relative">
      <div className="section-divider mb-20" />
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-display)] text-3xl lg:text-5xl font-bold text-white mb-4"
          >
            Klanten beoordelen ons met een{" "}
            <span className="text-gradient-green">9,5</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            Lees wat onze klanten over ons zeggen
          </motion.p>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 lg:p-8 hover:bg-white/[0.08] transition-all duration-300 group"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />
              <h3 className="font-[var(--font-display)] text-lg font-semibold text-white mb-2">
                {review.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {review.text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-white/40">{review.location}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

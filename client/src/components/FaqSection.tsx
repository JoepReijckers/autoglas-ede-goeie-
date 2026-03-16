/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive
 * FAQ accordion section using shadcn/ui Accordion
 */
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wat is een sterretje in je autoruit?",
    answer:
      "Een sterretje is een klein beschadigd plekje in de voorruit (meestal tot ongeveer 3 cm, vergelijkbaar met een 2-euromunt). Vaak kunnen we dit snel repareren met speciale hars. Is het groter of is het een barst? Dan moet de ruit worden vervangen.",
  },
  {
    question: "Wat moet ik direct doen bij een sterretje?",
    answer:
      "Plak het sterretje af met een stukje tape om te voorkomen dat er vuil of water in komt. Bel ons zo snel mogelijk op 0318 63 00 39 zodat we de schade kunnen beoordelen en snel kunnen repareren. Hoe sneller je belt, hoe groter de kans dat we het sterretje kunnen repareren in plaats van de hele ruit te vervangen.",
  },
  {
    question: "Wanneer moet een autoruit worden vervangen in plaats van gerepareerd?",
    answer:
      "Een ruit moet worden vervangen als de schade groter is dan een 2-euromunt, als er een barst in zit die doorloopt, of als de schade in het zichtveld van de bestuurder zit. Onze experts beoordelen dit ter plekke en geven eerlijk advies.",
  },
  {
    question: "Wat kost autoruitschade herstellen en hoe zit het met eigen risico?",
    answer:
      "Een sterreparatie is in de meeste gevallen gratis via je verzekering, zonder eigen risico. Bij vervanging van de voorruit is het eigen risico afhankelijk van je polis, maar bij ons start dit vanaf €0,00. Wij handelen alles direct af met je verzekeraar.",
  },
  {
    question: "Regelen jullie de verzekering en zijn jullie aangesloten bij Glasgarant?",
    answer:
      "Ja, wij zijn aangesloten bij Glasgarant en werken samen met vrijwel alle verzekeringsmaatschappijen. Wij regelen de volledige schadeafhandeling voor je. Je hoeft alleen maar te bellen, wij doen de rest.",
  },
  {
    question: "Hoe lang duurt een ruitvervanging of sterreparatie?",
    answer:
      "Een sterreparatie duurt gemiddeld 30 minuten. Een complete ruitvervanging duurt ongeveer 1 tot 2 uur, afhankelijk van het type voertuig. Na vervanging moet de lijm uitharden, dus je kunt na minimaal 1 uur weer rijden.",
  },
  {
    question: "Komen jullie ook aan huis?",
    answer:
      "Ja! Onze mobiele service komt bij u aan huis of op het werk. U verliest geen tijd en kunt verder werken terwijl wij de autoruitschade herstellen. Neem contact op om een afspraak te plannen.",
  },
  {
    question: "Wat is ADAS-kalibratie en heb ik dat nodig?",
    answer:
      "ADAS staat voor Advanced Driver Assistance Systems — denk aan rijstrookassistentie, noodremhulp en adaptieve cruise control. Na het vervangen van een voorruit moeten deze systemen opnieuw gekalibreerd worden. Wij doen dit in-house met professionele apparatuur, volgens fabrieksspecificaties.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="section-divider mb-20" />
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left side */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block"
            >
              Veelgestelde vragen
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-[var(--font-display)] text-3xl lg:text-5xl font-bold text-white leading-tight mb-4"
            >
              Vragen die we{" "}
              <span className="text-gradient-green">vaker krijgen</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-lg leading-relaxed"
            >
              Staat jouw vraag hier niet tussen? Bel ons gerust op{" "}
              <a href="tel:0318630039" className="text-primary font-mono hover:underline">
                0318 63 00 39
              </a>{" "}
              of stuur een bericht via het contactformulier.
            </motion.p>
          </div>

          {/* Right side - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-xl border-0 px-6 data-[state=open]:glow-green-sm transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-white hover:text-primary font-[var(--font-display)] font-semibold text-base py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

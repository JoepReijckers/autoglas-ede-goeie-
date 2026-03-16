/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive (Blue accent)
 * Mascot loading screen - shows Dennis the mascot bouncing while page loads
 * Used as a transition between sections/tabs
 */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MASCOT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438639607/fhLmWjZo9Z4FGfTeR4Aehu/mascot-dennis_8c91dea2.png";

interface MascotLoaderProps {
  isLoading?: boolean;
  minDuration?: number;
}

export default function MascotLoader({ isLoading = true, minDuration = 1500 }: MascotLoaderProps) {
  const [show, setShow] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
    setShow(true);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          {/* Glow background effect */}
          <div className="absolute w-64 h-64 rounded-full bg-primary/10 blur-[80px]" />
          
          {/* Mascot */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img
              src={MASCOT_URL}
              alt="Autoglas Ede mascotte"
              className="w-28 h-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center relative z-10"
          >
            <p className="font-[var(--font-display)] text-lg font-semibold text-white">
              Autoglas<span className="text-gradient-blue">Ede</span>
            </p>
            <div className="flex items-center gap-1 mt-3 justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Initial page loader - used on first page load */
export function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return <MascotLoader isLoading={isLoading} />;
}

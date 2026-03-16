/*
 * DESIGN: "Midnight Workshop" — Dark Luxury Automotive (Blue accent)
 * Mascot pop-up component - Dennis appears at various scroll positions
 * He peeks from the side, bottom, or corner with speech bubbles
 */
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const MASCOT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438639607/fhLmWjZo9Z4FGfTeR4Aehu/mascot-dennis_8c91dea2.png";
const VAN_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438639607/fhLmWjZo9Z4FGfTeR4Aehu/footer-car_532a9ec2.png";

type PeekDirection = "right" | "left" | "bottom-right" | "bottom-left";

interface MascotPopupProps {
  message?: string;
  direction?: PeekDirection;
  delay?: number;
  showOnce?: boolean;
  variant?: "dennis" | "van";
  className?: string;
}

export default function MascotPopup({
  message,
  direction = "right",
  delay = 0.3,
  showOnce = true,
  variant = "dennis",
  className = "",
}: MascotPopupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: showOnce, amount: 0.3 });
  const [hasShown, setHasShown] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (isInView && !hasShown) {
      setHasShown(true);
      if (message) {
        const timer = setTimeout(() => setShowBubble(true), delay * 1000 + 600);
        return () => clearTimeout(timer);
      }
    }
  }, [isInView, hasShown, message, delay]);

  const getPositionClasses = () => {
    switch (direction) {
      case "right":
        return "right-0 bottom-0 translate-x-[20%]";
      case "left":
        return "left-0 bottom-0 -translate-x-[20%]";
      case "bottom-right":
        return "right-4 -bottom-4";
      case "bottom-left":
        return "left-4 -bottom-4";
      default:
        return "right-0 bottom-0";
    }
  };

  const getAnimationVariants = () => {
    switch (direction) {
      case "right":
        return {
          hidden: { x: 80, opacity: 0, rotate: 10 },
          visible: { x: 0, opacity: 1, rotate: 0 },
        };
      case "left":
        return {
          hidden: { x: -80, opacity: 0, rotate: -10 },
          visible: { x: 0, opacity: 1, rotate: 0 },
        };
      case "bottom-right":
      case "bottom-left":
        return {
          hidden: { y: 60, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      default:
        return {
          hidden: { y: 60, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
    }
  };

  const getBubblePosition = () => {
    switch (direction) {
      case "right":
      case "bottom-right":
        return "right-full mr-3 bottom-[60%]";
      case "left":
      case "bottom-left":
        return "left-full ml-3 bottom-[60%]";
      default:
        return "right-full mr-3 bottom-[60%]";
    }
  };

  const variants = getAnimationVariants();
  const imgSrc = variant === "van" ? VAN_URL : MASCOT_URL;
  const imgSize = variant === "van" ? "w-40 lg:w-52" : "w-20 lg:w-24";

  return (
    <div ref={ref} className={`relative ${className}`}>
      <AnimatePresence>
        {hasShown && (
          <motion.div
            className={`absolute ${getPositionClasses()} z-30 pointer-events-none`}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{
              delay,
              duration: 0.7,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            {/* Speech bubble */}
            <AnimatePresence>
              {showBubble && message && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`absolute ${getBubblePosition()} whitespace-nowrap`}
                >
                  <div className="bg-white text-gray-900 text-xs lg:text-sm font-semibold px-3 py-2 rounded-xl shadow-lg relative">
                    {message}
                    {/* Bubble tail */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-[6px] border-transparent ${
                        direction === "left" || direction === "bottom-left"
                          ? "-left-3 border-r-white"
                          : "-right-3 border-l-white"
                      }`}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mascot image */}
            <motion.img
              src={imgSrc}
              alt="Autoglas Ede mascotte"
              className={`${imgSize} h-auto drop-shadow-xl`}
              animate={variant === "dennis" ? { rotate: [0, -3, 3, -3, 0] } : {}}
              transition={{ delay: delay + 0.8, duration: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Floating mascot that stays in corner */
export function FloatingMascot() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Show after scrolling past the first viewport
      if (scrollY > windowHeight * 0.8 && !hasInteracted) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasInteracted]);

  const handleDismiss = () => {
    setHasInteracted(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 cursor-pointer group"
          onClick={handleDismiss}
        >
          <div className="relative">
            {/* Speech bubble */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-14 right-0 whitespace-nowrap"
            >
              <div className="bg-white text-gray-900 text-xs font-semibold px-3 py-2 rounded-xl shadow-lg">
                Hulp nodig? Bel ons! 📞
                <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-white" />
              </div>
            </motion.div>

            {/* Mascot */}
            <motion.img
              src={MASCOT_URL}
              alt="Autoglas Ede mascotte"
              className="w-16 h-auto drop-shadow-xl group-hover:scale-110 transition-transform"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

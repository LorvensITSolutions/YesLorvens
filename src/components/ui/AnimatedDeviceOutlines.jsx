import { motion, useReducedMotion } from "framer-motion";

/**
 * Subtle floating laptop + mouse line art — same motif as the home hero,
 * reusable across page heroes for a consistent brand motion language.
 */
export function AnimatedLaptopOutline({
  className = "",
  duration = 5.5,
  delay = 0,
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.svg
      className={className}
      viewBox="0 0 160 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
      transition={
        reduceMotion
          ? undefined
          : {
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }
      }
    >
      <rect x="28" y="12" width="104" height="62" rx="8" stroke="currentColor" strokeWidth="3" />
      <path d="M16 86H144" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M66 80H94" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </motion.svg>
  );
}

export function AnimatedMouseOutline({
  className = "",
  duration = 6.2,
  delay = 0.45,
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.svg
      className={className}
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
      transition={
        reduceMotion
          ? undefined
          : {
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }
      }
    >
      <rect x="16" y="10" width="48" height="84" rx="24" stroke="currentColor" strokeWidth="3" />
      <path d="M40 24V40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </motion.svg>
  );
}

/** Layer behind hero copy (z-[1]); keep main content at z-10+ */
export function PageHeroDeviceAccents({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[1] overflow-hidden ${className}`.trim()}
      aria-hidden="true"
    >
      <AnimatedLaptopOutline
        className="absolute right-4 top-20 md:right-10 md:top-28 w-24 h-16 md:w-36 md:h-24 text-orange-200/50"
        delay={0}
      />
      <AnimatedMouseOutline
        className="absolute right-8 bottom-14 md:right-20 md:bottom-20 w-12 h-16 md:w-16 md:h-24 text-white/35"
        delay={0.35}
      />
    </div>
  );
}

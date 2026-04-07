import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useSplash } from "../context/SplashContext.jsx";

const yesContainer = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.08, staggerChildren: 0.07 },
  },
};

const lorvensContainer = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.32, staggerChildren: 0.055 },
  },
};

const letterFlip = {
  hidden: {
    opacity: 0,
    y: 44,
    rotateX: -76,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 22,
      stiffness: 200,
    },
  },
};

const letterPop = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.62,
    rotateZ: -14,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateZ: 0,
    transition: {
      type: "spring",
      damping: 19,
      stiffness: 280,
    },
  },
};

function Letters({ word, variants, containerVariants, className }) {
  return (
    <motion.span
      className="flex justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      aria-hidden
    >
      {word.split("").map((char, i) => (
        <motion.span key={`${word}-${i}`} variants={variants} className={`inline-block ${className}`}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function IntroSplash() {
  const reduceMotion = useReducedMotion();
  const { completeSplash } = useSplash();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduceMotion === true) {
      setVisible(false);
      completeSplash();
    }
  }, [reduceMotion, completeSplash]);

  useEffect(() => {
    if (!visible || reduceMotion === true) return;
    const timer = window.setTimeout(() => setVisible(false), 2600);
    return () => window.clearTimeout(timer);
  }, [visible, reduceMotion]);

  const splash = (
    <AnimatePresence mode="wait" onExitComplete={completeSplash}>
      {visible && (
        <motion.div
          key="intro-splash"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#fafaf9]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(10px)",
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          }}
          aria-hidden
        >
          {reduceMotion !== true && (
            <>
              <motion.div
                className="pointer-events-none absolute -left-[18%] top-[12%] h-[min(52vw,400px)] w-[min(52vw,400px)] rounded-full bg-orange-400/30 blur-[88px]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: [0, 28, -14, 0],
                  y: [0, 20, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.75 },
                  scale: { duration: 0.75 },
                  x: { duration: 11, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 8.5, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="pointer-events-none absolute -right-[12%] bottom-[18%] h-[min(42vw,340px)] w-[min(42vw,340px)] rounded-full bg-amber-300/25 blur-[76px]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: [0, -24, 16, 0],
                  y: [0, -24, 12, 0],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.08 },
                  scale: { duration: 0.8, delay: 0.08 },
                  x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 9.5, repeat: Infinity, ease: "easeInOut" },
                }}
              />
            </>
          )}

          <motion.div
            className="relative flex flex-col items-center gap-7 px-6 text-center [perspective:1200px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-6 [transform-style:preserve-3d]">
              <Letters
                word="YES"
                variants={letterFlip}
                containerVariants={yesContainer}
                className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl sm:tracking-tighter"
              />

              <span className="relative inline-flex">
                <motion.span
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-r from-orange-400/35 via-amber-300/45 to-orange-500/35 blur-2xl"
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                />
                <Letters
                  word="LORVENS"
                  variants={letterPop}
                  containerVariants={lorvensContainer}
                  className="bg-gradient-to-b from-orange-400 via-orange-500 to-orange-700 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl sm:tracking-tighter"
                />
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.88, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md text-[10px] font-semibold uppercase leading-relaxed tracking-[0.28em] text-slate-500 sm:text-xs sm:tracking-[0.32em]"
            >
              Solutions Private Limited
            </motion.p>

            <motion.div
              className="relative h-1 w-36 overflow-hidden rounded-full bg-slate-200 sm:w-44"
              initial={{ opacity: 0, scaleX: 0.2 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1, type: "spring", damping: 26, stiffness: 220 }}
              style={{ originX: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-600" />
              {reduceMotion !== true && (
                <motion.div
                  className="absolute inset-y-0 w-2/5 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/45 to-transparent"
                  initial={{ left: "-40%" }}
                  animate={{ left: ["-40%", "140%"] }}
                  transition={{
                    delay: 1.15,
                    duration: 1.6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />
              )}
            </motion.div>
          </motion.div>

          {reduceMotion !== true &&
            [0, 1, 2, 3, 4, 5].map((i) => (
              <motion.span
                key={i}
                className="pointer-events-none absolute bottom-0 h-1.5 w-1.5 rounded-full bg-orange-500/50 shadow-[0_0_12px_rgba(249,115,22,0.6)]"
                style={{ left: `${12 + i * 14}%` }}
                initial={{ y: 40, opacity: 0 }}
                animate={{
                  y: [0, -420],
                  opacity: [0, 0.85, 0],
                  scale: [0.4, 1, 0.2],
                }}
                transition={{
                  duration: 2.8 + i * 0.25,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (typeof document === "undefined") return null;
  return createPortal(splash, document.body);
}

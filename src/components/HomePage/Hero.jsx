import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSplash } from "../../context/SplashContext.jsx";

const heroBg = "/hero-background.png";

const easeOut = [0.22, 1, 0.36, 1];
/** Softer, longer fades for reduced-motion hero copy */
const easeSoft = [0.25, 0.1, 0.25, 1];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { splashComplete } = useSplash();
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 640px)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const onChange = (event) => setIsMobile(event.matches);
    setIsMobile(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const paragraph =
    "At YES LORVENS, we help startups and enterprises launch websites, apps, and full-stack digital solutions tailored for real results.".split(
      " "
    );

  /** Stagger after splash: line 1 → line 2 → paragraph words */
  const headlineLine1Delay = 0.2;
  const headlineLine2Delay = 0.38;
  const paragraphStart = 0.9;
  const stepP = 0.028;
  const mobileParagraphStart = 0.66;

  if (reduceMotion) {
    return (
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 sm:px-6 lg:px-8"
        style={{
          paddingTop: "calc(5.5rem + env(safe-area-inset-top, 0px))",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
          paddingLeft: "max(0.5rem, env(safe-area-inset-left, 0.5rem))",
          paddingRight: "max(0.5rem, env(safe-area-inset-right, 0.5rem))",
        }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: splashComplete ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <img src={heroBg} alt="" className="h-full w-full object-cover" loading="eager" aria-hidden />
          <div className="absolute inset-0 bg-slate-950/68" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/52 to-slate-950/82" />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background: `
              radial-gradient(ellipse 85% 60% at 50% 38%, rgba(249, 115, 22, 0.14) 0%, transparent 58%),
              radial-gradient(ellipse 70% 50% at 50% 48%, rgba(255, 255, 255, 0.05) 0%, transparent 55%),
              radial-gradient(ellipse 120% 90% at 50% 50%, transparent 35%, rgba(2, 6, 23, 0.55) 100%)
            `,
            }}
          />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <h1 className="mx-auto max-w-4xl text-balance text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl sm:leading-[1.12] lg:text-6xl lg:leading-[1.1]">
            <motion.span
              className="block text-white [text-shadow:0_2px_48px_rgba(0,0,0,0.35)]"
              initial={{ opacity: 0, filter: "brightness(0.85)" }}
              animate={
                splashComplete
                  ? { opacity: 1, filter: "brightness(1)" }
                  : { opacity: 0, filter: "brightness(0.85)" }
              }
              transition={{
                duration: 0.72,
                ease: easeSoft,
                delay: splashComplete ? headlineLine1Delay : 0,
              }}
            >
              Digital solutions built
            </motion.span>
            <motion.span
              className="mt-1 block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text pb-[0.1em] text-transparent [text-shadow:none] sm:mt-0 sm:leading-[1.2]"
              initial={{ opacity: 0 }}
              animate={{ opacity: splashComplete ? 1 : 0 }}
              transition={{
                duration: 0.78,
                ease: easeSoft,
                delay: splashComplete ? headlineLine2Delay : 0,
              }}
            >
              for growth & scale
            </motion.span>
          </h1>
          <motion.p
            className="mx-auto mt-3 max-w-3xl text-pretty text-xs leading-relaxed text-slate-200/95 sm:mt-8 sm:text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: splashComplete ? 1 : 0 }}
            transition={{
              duration: 0.8,
              ease: easeSoft,
              delay: splashComplete ? paragraphStart : 0,
            }}
          >
            At YES LORVENS, we help startups and enterprises launch websites, apps, and full-stack digital
            solutions tailored for real results.
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 sm:px-6 lg:px-8"
      style={{
        paddingTop: "calc(5.5rem + env(safe-area-inset-top, 0px))",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        paddingLeft: "max(0.5rem, env(safe-area-inset-left, 0.5rem))",
        paddingRight: "max(0.5rem, env(safe-area-inset-right, 0.5rem))",
      }}
    >
      <motion.div
        className="absolute inset-0"
        initial={isMobile ? { opacity: 0 } : { scale: 1.08, opacity: 0 }}
        animate={
          splashComplete
            ? isMobile
              ? { opacity: 1 }
              : { scale: 1, opacity: 1 }
            : isMobile
              ? { opacity: 0 }
              : { scale: 1.08, opacity: 0 }
        }
        transition={{ duration: isMobile ? 0.7 : 1.15, ease: easeOut }}
      >
        <img src={heroBg} alt="" className="h-full w-full object-cover" loading="eager" aria-hidden />
        <div className="absolute inset-0 bg-slate-950/68" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/52 to-slate-950/82" />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 85% 60% at 50% 38%, rgba(249, 115, 22, 0.14) 0%, transparent 58%),
              radial-gradient(ellipse 70% 50% at 50% 48%, rgba(255, 255, 255, 0.05) 0%, transparent 55%),
              radial-gradient(ellipse 120% 90% at 50% 50%, transparent 35%, rgba(2, 6, 23, 0.55) 100%)
            `,
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {isMobile ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={splashComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: splashComplete ? headlineLine1Delay : 0, duration: 0.5, ease: easeOut }}
          >
            <h1 className="mx-auto max-w-[21.5rem] text-[1.72rem] font-extrabold leading-[1.08] tracking-tight text-white [text-shadow:0_2px_48px_rgba(0,0,0,0.35)]">
              <span className="block whitespace-nowrap">Digital solutions built</span>
              <span className="mt-1 block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text pb-[0.1em] text-transparent [text-shadow:none]">
                for growth & scale
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-[31ch] text-pretty text-xs leading-relaxed text-slate-200/95">
              At YES LORVENS, we help startups and enterprises launch websites, apps, and full-stack digital
              solutions tailored for real results.
            </p>
          </motion.div>
        ) : (
          <>
            <h1 className="mx-auto max-w-4xl text-balance text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl sm:leading-[1.12] lg:text-6xl lg:leading-[1.1]">
              <motion.span
                className="block text-white [text-shadow:0_2px_48px_rgba(0,0,0,0.35)]"
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                animate={
                  splashComplete
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: 28, filter: "blur(10px)" }
                }
                transition={{
                  delay: splashComplete ? headlineLine1Delay : 0,
                  duration: 0.75,
                  ease: easeOut,
                }}
              >
                Digital solutions built
              </motion.span>
              <motion.span
                className="mt-1 block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text pb-[0.1em] text-transparent [text-shadow:none] sm:mt-0 sm:leading-[1.2]"
                initial={{ opacity: 0, y: 22, scale: 0.97 }}
                animate={
                  splashComplete
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 22, scale: 0.97 }
                }
                transition={{
                  delay: splashComplete ? headlineLine2Delay : 0,
                  duration: 0.72,
                  ease: easeOut,
                }}
              >
                for growth & scale
              </motion.span>
            </h1>

            <p className="mx-auto mt-3 max-w-3xl text-pretty text-xs leading-relaxed text-slate-200/95 sm:mt-8 sm:text-sm md:text-base">
              {paragraph.map((word, i) => (
                <motion.span
                  key={word + i}
                  className="inline"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    splashComplete
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 10 }
                  }
                  transition={{
                    delay: splashComplete ? paragraphStart + i * stepP : 0,
                    duration: 0.4,
                    ease: easeOut,
                  }}
                >
                  {word}
                  {i < paragraph.length - 1 ? " " : ""}
                </motion.span>
              ))}
            </p>
          </>
        )}
      </div>
    </section>
  );
}

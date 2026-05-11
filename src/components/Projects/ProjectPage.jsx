import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const school =
  "https://res.cloudinary.com/durbtkhbz/image/upload/f_auto,q_auto,w_800/v1765349313/edureachweb_rbcuwg.png";
const lumiere1 =
  "https://res.cloudinary.com/durbtkhbz/image/upload/w_800,f_auto,q_auto/v1765169181/ChatGPT_Image_Dec_8_2025_10_15_15_AM_ghors1.png";
const smiles1 =
  "https://res.cloudinary.com/durbtkhbz/image/upload/w_800,f_auto,q_auto/v1765169442/ChatGPT_Image_Dec_8_2025_10_20_32_AM_e1ot2u.png";
const slim1 =
  "https://res.cloudinary.com/durbtkhbz/image/upload/w_800,f_auto,q_auto/v1765169560/ChatGPT_Image_Dec_8_2025_10_22_29_AM_q09vhf.png";
const machines1 =
  "https://res.cloudinary.com/do8cpljrz/image/upload/f_auto,q_auto,w_800/v1766379251/5ce7960d-fb0f-4693-8c80-800e26fcac92_ipd4il_oahm6k.png";
const Scrapdig =
  "https://res.cloudinary.com/durbtkhbz/image/upload/f_auto,q_auto,w_800/v1771588561/WhatsApp_Image_2026-02-20_at_5.19.19_PM_rixs6d.jpg";
const amvifoodsLogo =
  "https://res.cloudinary.com/dnvpasppl/image/upload/f_auto,q_auto,w_800/v1773392136/Screenshot_2026-03-04_114703-removebg-preview_a5xoie.png";
const ariseDelhi ="https://res.cloudinary.com/dabmwltsh/image/upload/v1777097315/BLUE_300x_u3unex.png"
const mbprime ="https://res.cloudinary.com/durbtkhbz/image/upload/v1773638223/mb_smwjsa_paldaw.png"

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const projects = [
  {
    id: "lumiere",
    title: "Lumiere Luxe",
    subtitle: "Premium Salon Booking Platform",
    description:
      "A sophisticated online booking system designed exclusively for high-end salons, providing seamless appointment scheduling, service management, and client relationship tools. The platform features real-time availability, automated reminders, and a personalized client portal. Our solution increased booking conversions by 65% and reduced no-shows by 50% through smart notifications and a user-friendly interface.",
    images: [lumiere1],
    category: "Web Development",
    link: "https://lumiereluxe.in/",
  },
  {
    id: "sasha-smiles",
    title: "Sasha Smiles",
    subtitle: "Dental Clinic Booking System",
    description:
      "A comprehensive online booking system for Sasha Smiles Dental Clinic, featuring appointment scheduling, service catalog, dentist profiles, and patient management. The platform includes automated reminders, secure payment processing, and a patient portal for managing appointments.",
    images: [smiles1],
    category: "Web Development",
    link: "https://sashasmiles.com/",
  },
  {
    id: "sasha-slimming",
    title: "Sasha Slimming",
    subtitle: "Slimming Care Clinic Website",
    description:
      "A modern, responsive website for Sasha Slimming Care Clinic showcasing their weight loss programs, treatments, and success stories. Features include online consultations, program booking, progress tracking, and a blog section.",
    images: [slim1],
    category: "Web Development",
    link: "https://sashaslimming.com/",
  },
  {
    id: "edu-reach",
    title: "Edu Reach",
    subtitle: "Smart Learning Environment",
    description:
      "A comprehensive educational platform serving over 5,000+ students and 200+ faculty members. The system features automated attendance tracking, grade management, assignment submission, and real-time communication tools. Our solution reduced administrative workload by 60% and improved parent-teacher engagement by 75% through its intuitive interface and mobile responsiveness.",
    images: [school],
    category: ["App Development", "Web Development"],
    link: "https://edureachapp.com/",
  },
  {
    id: "andhra-machines",
    title: "Andhra Machines Agencies",
    subtitle: "Industrial Machinery Supplier Website",
    description:
      "A professional, responsive online platform for Andhra Machines Agencies, showcasing a full range of industrial machines, product categories, and detailed product specs. The website includes an intuitive browsing experience, contact forms for inquiries, dealer information, and an easy quote request system. Built for seamless navigation and optimal performance across devices.",
    images: [machines1],
    category: "Web Development",
    link: "https://andhramachinesagencies.com/",
  },
  {
    id: "scrap-dig",
    title: "Scrap Dig",
    subtitle: "Scrap Dig Website & App",
    description:
      "ScrapDig is an end-to-end scrap management and recycling platform designed to modernize the traditional scrap collection process. The platform connects customers with verified scrap vendors through an intuitive web application and Android mobile app.",
    images: [Scrapdig],
    category: ["Web Development", "App Development"],
    link: "https://scrapdig.in/",
  },
  {
    id: "mb-prime-projects",
    title: "MB Prime Projects",
    subtitle: "Real Estate Business Website",
    description:
      "MB Prime Projects is a modern real estate platform developed to showcase premium residential and commercial properties with a seamless user experience. The project includes a powerful admin panel for managing property listings and inquiries, along with automated form-to-email integration to ensure customer inquiries are instantly delivered to the management team. The website features responsive property browsing, dynamic content management, and a clean professional interface optimized for engagement and lead generation.",
    images: [mbprime],
    category: "Web Development",
    link: "https://mbprimeprojects.com/",
  },
  {
    id: "amvi-foods",
    title: "AMVI Foods",
    subtitle: "Dehydrated Food Processing & Export Platform",
    description:
      "AMVI Foods is a modern food processing and export company specializing in high-quality dehydrated powders and agricultural products sourced from the fertile Godavari delta region. With a production capacity exceeding one ton per day, the company leverages advanced processing techniques to preserve natural flavor, nutrition, and shelf life. The platform showcases a wide range of products, streamlined sourcing, and efficient supply chain operations, connecting local farmers to broader domestic and international markets. Designed for reliability and scalability, AMVI Foods emphasizes quality, consistency, and sustainable agricultural practices.",
    images: [amvifoodsLogo],
    category: "Web Development",
    link: "https://amvifoods.com/",
  },
  {
    id: "arise-delhi",
    title: "Arise Delhi",
    subtitle: "Medical Education & FMGE Preparation Platform",
    description:
      "Arise Delhi is a modern medical education and FMGE preparation platform dedicated to helping aspiring doctors achieve academic excellence through structured learning programs, expert mentorship, and advanced preparation resources. The platform offers comprehensive course information, student-focused learning support, interactive guidance, and a streamlined digital experience for medical aspirants preparing for competitive examinations. Designed with a clean and professional interface, the website enhances accessibility, engagement, and trust for students across India.",
    images: [ariseDelhi],
    category: "Web Development",
    link: "https://arisedelhi.com/",
  },
  
];

function categoryList(project) {
  return Array.isArray(project.category) ? project.category : [project.category];
}

/** Split title so the last word can use brand orange (matches home hero pattern). */
function titleParts(title) {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) return { lead: title, accent: null };
  const accent = words.pop();
  return { lead: `${words.join(" ")} `, accent };
}

/** Short enough to feel snappy; image sits under overlay so it can decode while name shows */
const NAME_HOLD_MS = 480;
const REVEAL_EASE = [0.22, 1, 0.36, 1];

const projectGridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

const projectGridContainerVariantsReduced = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0,
    },
  },
};

const projectGridItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 26, mass: 0.9 },
  },
};

const projectGridItemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.28 } },
};

const ProjectGridCard = ({ project, index, itemVariants, reduceMotion }) => {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, amount: 0.22 });
  const categories = categoryList(project);
  const img = project.images?.[0];
  const href = project.link;
  const { lead, accent } = titleParts(project.title);

  const [showSite, setShowSite] = useState(() => Boolean(reduceMotion));

  useEffect(() => {
    if (reduceMotion) {
      setShowSite(true);
      return;
    }
    if (!inView) return;
    setShowSite(false);
    const id = window.setTimeout(() => setShowSite(true), NAME_HOLD_MS);
    return () => window.clearTimeout(id);
  }, [inView, reduceMotion]);

  const cardSpring = { type: "spring", stiffness: 420, damping: 26 };
  const hoverLift = reduceMotion ? {} : { y: -6 };
  const tapScale = reduceMotion ? {} : { scale: 0.985 };

  const shell =
    "group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-slate-200/90 bg-white text-left shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-orange-200/70 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

  const mediaBlock = (
    <div className="relative aspect-[5/3] shrink-0 overflow-hidden bg-white">
      <motion.div
        className="absolute inset-0 z-[3] flex items-center justify-center bg-white/95 px-5 text-center"
        aria-hidden
        initial={false}
        animate={
          showSite
            ? {
                opacity: 0,
                y: -10,
                transition: { duration: 0.42, ease: REVEAL_EASE },
              }
            : {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, type: "spring", stiffness: 260, damping: 26 },
              }
        }
        style={{ pointerEvents: showSite ? "none" : "auto" }}
      >
        <motion.p
          className="max-w-[95%] text-pretty font-extrabold leading-tight tracking-tight text-slate-900 text-xl sm:text-2xl"
          initial={false}
          animate={
            showSite
              ? { opacity: 0, scale: 0.97 }
              : { opacity: 1, scale: 1, transition: { delay: 0.06, duration: 0.4, ease: REVEAL_EASE } }
          }
        >
          {lead}
          {accent ? <span className="text-orange-600">{accent}</span> : null}
        </motion.p>
      </motion.div>

      {img ? (
        <div className="absolute inset-2 z-[2] overflow-hidden sm:inset-2.5">
          <img
            src={img}
            alt=""
            className="h-full w-full object-contain object-center motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-[1.05]"
            loading={index < 6 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index < 4 ? "high" : "low"}
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="flex h-full items-center justify-center text-xs text-slate-400">No preview</div>
      )}
    </div>
  );

  const inner = (
    <>
      {mediaBlock}
      <motion.div
        className="flex flex-1 flex-col p-4 sm:p-5"
        initial={false}
        animate={
          showSite
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.42, ease: REVEAL_EASE, delay: 0.06 },
              }
            : {
                opacity: 0,
                y: 12,
                transition: { duration: 0.25 },
              }
        }
        style={{ pointerEvents: showSite ? "auto" : "none" }}
      >
        <div className="flex flex-wrap gap-1">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-md bg-orange-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-orange-800"
            >
              {c}
            </span>
          ))}
        </div>
        <h3 className="sr-only">{project.title}</h3>
        <p className="mt-2.5 text-base font-bold text-slate-900 sm:text-lg" aria-hidden>
          {project.title}
        </p>
        <p className="mt-1 text-xs text-orange-600 sm:text-sm">{project.subtitle}</p>
        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
          {project.description}
        </p>
        {href ? (
          <div className="mt-auto border-t border-slate-100 pt-3">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 transition-[gap,color] duration-200 group-hover:gap-2 group-hover:text-orange-600">
              Visit site
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-orange-500 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                aria-hidden
              />
            </span>
          </div>
        ) : null}
      </motion.div>
    </>
  );

  return (
    <motion.li ref={cardRef} variants={itemVariants} className="flex h-full list-none">
      {href ? (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={shell}
          whileHover={hoverLift}
          whileTap={tapScale}
          transition={cardSpring}
        >
          {inner}
        </motion.a>
      ) : (
        <motion.div className={shell} whileHover={hoverLift} whileTap={tapScale} transition={cardSpring}>
          {inner}
        </motion.div>
      )}
    </motion.li>
  );
};

const PRELOAD_IMAGE_COUNT = 6;

const ProjectsPage = () => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, []);

  useEffect(() => {
    const hrefs = projects
      .slice(0, PRELOAD_IMAGE_COUNT)
      .map((p) => p.images?.[0])
      .filter(Boolean);
    const nodes = hrefs.map((href) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = href;
      link.setAttribute("fetchpriority", "high");
      document.head.appendChild(link);
      return link;
    });
    return () => {
      nodes.forEach((node) => {
        if (node.parentNode) node.parentNode.removeChild(node);
      });
    };
  }, []);

  const gridContainerVariants = reduceMotion ? projectGridContainerVariantsReduced : projectGridContainerVariants;
  const gridItemVariants = reduceMotion ? projectGridItemVariantsReduced : projectGridItemVariants;

  return (
    <div className="relative min-h-screen overflow-hidden bg-white md:pt-18">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(at 0% 0%, rgba(251,146,60,0.12) 0px, transparent 50%), radial-gradient(at 100% 20%, rgba(148,163,184,0.15) 0px, transparent 45%), radial-gradient(at 50% 100%, rgba(251,146,60,0.08) 0px, transparent 50%)",
        }}
      />

      <section
        className="relative flex min-h-[56vh] items-end overflow-hidden pb-16 pt-24 sm:items-center sm:pb-20 sm:pt-28 lg:min-h-[58vh]"
        style={{
          backgroundImage:
            "linear-gradient(118deg, rgb(15,23,42) 0%, rgb(30,41,59) 42%, rgb(154,52,18) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <motion.div
              className="lg:col-span-7"
              variants={fadeInUp}
              initial="hidden"
              animate="show"
            >
          
              <h1 className="mt-4 max-w-xl text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.2rem]">
                Work that blends craft with outcomes.
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base lg:text-[1.02rem]">
                Product-grade websites and platforms — from booking flows to education systems — built
                for clarity, speed, and scale.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-3 sm:grid-cols-3 lg:col-span-5 lg:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {[
                { k: `${projects.length}+`, l: "Shipped projects", s: "Live client work" },
                { k: "Web. App", l: "Full stack", s: "End-to-end delivery" },
                { k: "100%", l: "Custom builds", s: "No cookie-cutter templates" },
              ].map((item) => (
                <div
                  key={item.l}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-md"
                >
                  <p className="text-[19px] font-bold tabular-nums text-white sm:text-[21px]">{item.k}</p>
                  <p className="mt-1 text-xs font-semibold text-orange-200/90 sm:text-sm">{item.l}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400 sm:text-xs">{item.s}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <motion.div
          className="mb-12 flex flex-col gap-8 border-b border-slate-200/90 pb-12 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={
            reduceMotion
              ? { duration: 0.2 }
              : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <div className="max-w-xl">
            <h2 className="mt-4 font-extrabold leading-tight tracking-tight text-balance text-slate-900 text-2xl sm:text-3xl">
              Selected <span className="text-orange-600">work</span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
              Live client sites and products — shipped end to end.
            </p>
          </div>
          <div className="flex flex-col items-start gap-0.5 border-l-2 border-orange-500 pl-5 lg:items-end lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-5 lg:text-right">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">YES LORVENS</p>
            <p className="text-sm font-semibold tabular-nums text-slate-700">
              {String(projects.length).padStart(2, "0")} projects
            </p>
          </div>
        </motion.div>

        <motion.ul
          className="m-0 grid list-none gap-5 p-0 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-7"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08, margin: "0px 0px -60px 0px" }}
        >
          {projects.map((p, i) => (
            <ProjectGridCard
              key={p.id}
              project={p}
              index={i}
              itemVariants={gridItemVariants}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.ul>
      </div>

      <section className="relative overflow-hidden border-t border-slate-200/80 bg-slate-950 py-20 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-600/20 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your product could be next.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Share your roadmap — we’ll respond with a clear path from idea to launch.
          </p>
          <Link
            to="/contact#contact-form"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-orange-400"
          >
            Start a conversation
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] rounded-full bg-primary-2/10 blur-[100px]" />
      </div>

      <div className="section-container w-full grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 order-2 lg:order-1">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-2 mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-tight text-text"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight tracking-tight gradient-text mt-1"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              View my work <ArrowRight size={16} />
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-text font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
              >
                <Download size={16} /> Resume
              </a>
            )}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-10 flex items-center gap-4"
          >
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full border border-border text-muted hover:text-primary hover:border-primary transition-colors"
              >
                <FaGithub size={18} />
              </a>
            )}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full border border-border text-muted hover:text-primary hover:border-primary transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="p-2.5 rounded-full border border-border text-muted hover:text-primary hover:border-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {profile.avatar && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="order-1 lg:order-2 lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-2 opacity-25 blur-3xl" />
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-[2rem] object-cover border border-border shadow-2xl ring-1 ring-primary/20"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}

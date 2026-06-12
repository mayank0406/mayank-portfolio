import { motion } from "framer-motion";
import { profile, skills } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 scroll-mt-16">
      <div className="section-container">
        <SectionHeading index="01" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-3 space-y-4 text-muted leading-relaxed text-base sm:text-lg"
          >
            {profile.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="font-display font-semibold text-lg text-text mb-4">
              Skills & Tools
            </h3>
            <div className="space-y-5">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-2 mb-2">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm px-3 py-1.5 rounded-lg bg-surface border border-border text-text"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

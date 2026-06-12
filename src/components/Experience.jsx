import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-16">
      <div className="section-container">
        <SectionHeading index="03" title="Experience" />

        <div className="mt-12 relative">
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <motion.div
                key={`${item.title}-${i}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                className="relative pl-16 sm:pl-20"
              >
                <span className="absolute left-0 top-0 flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-surface border border-border text-primary">
                  {item.type === "education" ? (
                    <GraduationCap size={20} />
                  ) : (
                    <Briefcase size={20} />
                  )}
                </span>

                <div className="rounded-2xl border border-border bg-surface p-6 hover:border-primary/50 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display font-semibold text-lg text-text">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-primary-2 px-2.5 py-1 rounded-full bg-primary/10">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {item.organization}
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                  {item.highlights && (
                    <ul className="mt-4 space-y-2 text-sm text-muted leading-relaxed list-disc list-outside pl-5 marker:text-primary">
                      {item.highlights.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

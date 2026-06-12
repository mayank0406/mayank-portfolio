import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col h-full rounded-2xl border border-border bg-surface p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="p-3 rounded-xl bg-primary/10 text-primary">
          <Folder size={22} />
        </div>
        <div className="flex items-center gap-3 text-muted">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Repository"
              className="hover:text-primary transition-colors"
            >
              <FaGithub size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Live demo"
              className="hover:text-primary transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display font-semibold text-lg text-text group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-muted">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 scroll-mt-16">
      <div className="section-container">
        <SectionHeading index="02" title="Projects" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

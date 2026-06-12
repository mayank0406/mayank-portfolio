import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { contact, profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;
    window.location.href = `mailto:${profile.email}?subject=Portfolio contact from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-24 scroll-mt-16">
      <div className="section-container">
        <SectionHeading index="04" title="Contact" />

        <div className="mt-12 grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-text">
              {contact.heading}
            </h3>
            <p className="mt-4 text-muted leading-relaxed">
              {contact.description}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 text-sm text-text hover:text-primary transition-colors"
              >
                <Mail size={18} /> {profile.email}
              </a>
              {profile.phone && (
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-3 text-sm text-text hover:text-primary transition-colors"
                >
                  <Phone size={18} /> {profile.phone}
                </a>
              )}
              {profile.location && (
                <p className="inline-flex items-center gap-3 text-sm text-muted">
                  <MapPin size={18} /> {profile.location}
                </p>
              )}
            </div>

            <div className="mt-8 flex items-center gap-4">
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
              {profile.social.twitter && (
                <a
                  href={profile.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="p-2.5 rounded-full border border-border text-muted hover:text-primary hover:border-primary transition-colors"
                >
                  <FaXTwitter size={18} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 grid gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg bg-surface-2 border border-border px-4 py-2.5 text-sm text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg bg-surface-2 border border-border px-4 py-2.5 text-sm text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project or just say hi..."
                className="w-full rounded-lg bg-surface-2 border border-border px-4 py-2.5 text-sm text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors w-fit"
            >
              Send message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

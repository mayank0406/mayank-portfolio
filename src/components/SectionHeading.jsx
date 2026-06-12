import { motion } from "framer-motion";

export default function SectionHeading({ index, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-4"
    >
      <span className="font-display font-bold text-primary text-lg">
        {index}
      </span>
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-text whitespace-nowrap">
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </motion.div>
  );
}

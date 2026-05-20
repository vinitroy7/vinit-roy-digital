import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent mb-4">
              <span className="h-px w-8 bg-accent" /> {eyebrow}
            </div>
          )}
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

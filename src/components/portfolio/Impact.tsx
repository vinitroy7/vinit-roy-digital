import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section } from "./Section";

const stats = [
  { v: 50, suffix: "+", label: "Websites Delivered" },
  { v: 10, suffix: "+", label: "Years Experience" },
  { v: 25, suffix: "+", label: "Global Clients" },
  { v: 100, suffix: "%", label: "On-Time Shipping" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  useEffect(() => {
    if (inView) {
      const c = animate(mv, to, { duration: 2, ease: "easeOut" });
      const u = mv.on("change", (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix; });
      return () => { c.stop(); u(); };
    }
  }, [inView, to, suffix, mv]);
  return <span ref={ref}>0{suffix}</span>;
}

export function Impact() {
  return (
    <Section
      id="impact"
      eyebrow="Impact"
      title={<>Numbers that <span className="gradient-text">compound.</span></>}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-8 text-center"
          >
            <div className="font-display text-5xl md:text-6xl font-bold gradient-text">
              <Counter to={s.v} suffix={s.suffix} />
            </div>
            <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {["SEO & Paid Ads Expertise", "High-Conversion Funnels", "Scalable Business Systems"].map((t) => (
          <div key={t} className="glass rounded-2xl p-6 text-center text-sm font-medium">{t}</div>
        ))}
      </div>
    </Section>
  );
}

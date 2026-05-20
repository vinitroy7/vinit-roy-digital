import { motion } from "framer-motion";
import { Section } from "./Section";
import { Star } from "lucide-react";

const items = [
  { n: "Aarav Mehta", r: "Founder, D2C Brand", q: "Vinit rebuilt our storefront and our conversion rate jumped 38% in the first month. He thinks like a partner, not a vendor." },
  { n: "Sarah Williams", r: "Marketing Director, UK", q: "The rare developer who actually understands paid media. Our funnels finally make sense — and convert." },
  { n: "Rohan Kapoor", r: "CEO, SaaS Startup", q: "Shipped a complex platform in half the timeline we'd budgeted. Communication was flawless across time zones." },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title={<>What clients <span className="gradient-text">say.</span></>}
    >
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((t, i) => (
          <motion.div
            key={t.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-7"
          >
            <div className="flex gap-1 mb-4 text-accent">
              {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-sm leading-relaxed mb-6">"{t.q}"</p>
            <div>
              <div className="font-semibold text-sm">{t.n}</div>
              <div className="text-xs text-muted-foreground">{t.r}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

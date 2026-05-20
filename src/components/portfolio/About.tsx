import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, TrendingUp, Globe2, Rocket } from "lucide-react";

const pillars = [
  { Icon: Code2, label: "Full-Stack Engineering", text: "From pixel to production — WordPress, Shopify, PHP, custom web apps." },
  { Icon: TrendingUp, label: "Growth Systems", text: "SEO, paid ads, funnels & conversion engines that move real numbers." },
  { Icon: Globe2, label: "Remote-First", text: "Global clients across US, UK, EU & APAC. Async by default." },
  { Icon: Rocket, label: "Scale Mindset", text: "Building systems that grow with the business, not against it." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>A developer who <span className="gradient-text">thinks like a founder.</span></>}
      description="For over a decade I've sat at the intersection of code and growth — shipping production-grade web platforms and engineering the marketing systems that make them perform. I work remotely with founders, agencies and enterprises who need an operator, not just a contractor."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {pillars.map(({ Icon, label, text }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-7 group hover:border-accent/40 transition"
          >
            <div className="h-12 w-12 rounded-xl gradient-accent grid place-items-center mb-5 group-hover:scale-110 transition-transform">
              <Icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{label}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

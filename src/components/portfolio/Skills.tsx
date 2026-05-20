import { motion } from "framer-motion";
import { Section } from "./Section";

const dev = [
  { n: "HTML5 / CSS3", v: 98 },
  { n: "JavaScript", v: 92 },
  { n: "PHP", v: 90 },
  { n: "WordPress", v: 96 },
  { n: "Shopify", v: 88 },
  { n: "MySQL", v: 90 },
  { n: "Git / APIs / CRM", v: 92 },
  { n: "Page Speed & Technical SEO", v: 94 },
];

const marketing = [
  { cat: "SEO", items: ["On-Page SEO", "Technical SEO", "Keyword Research"] },
  { cat: "Social Media", items: ["Meta Ads", "Instagram", "LinkedIn"] },
  { cat: "Paid Advertising", items: ["Google Ads", "Meta Lead Gen"] },
  { cat: "Performance", items: ["Funnel Building", "Conversion Optimization"] },
  { cat: "Creative", items: ["Canva", "Ad Creatives", "Landing Pages"] },
];

function Bar({ n, v, i }: { n: string; v: number; i: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{n}</span>
        <span className="text-muted-foreground">{v}%</span>
      </div>
      <div className="h-2 rounded-full bg-glass overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${v}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
          className="h-full gradient-accent rounded-full"
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>Engineering stack <span className="gradient-text">+ growth stack.</span></>}
      description="A rare combination. The same person who ships your codebase also owns your conversion rate."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-3xl p-8">
          <h3 className="font-display text-2xl font-semibold mb-6">Development</h3>
          <div className="space-y-5">
            {dev.map((s, i) => <Bar key={s.n} {...s} i={i} />)}
          </div>
        </div>

        <div className="glass rounded-3xl p-8">
          <h3 className="font-display text-2xl font-semibold mb-6">Digital Marketing</h3>
          <div className="space-y-5">
            {marketing.map((m, i) => (
              <motion.div
                key={m.cat}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="text-xs uppercase tracking-widest text-accent mb-2">{m.cat}</div>
                <div className="flex flex-wrap gap-2">
                  {m.items.map((it) => (
                    <span key={it} className="px-3 py-1.5 rounded-lg bg-glass border border-border text-sm">
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

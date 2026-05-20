import { motion } from "framer-motion";
import { Section } from "./Section";

const jobs = [
  {
    co: "DigiTace Tech Solutions Pvt. Ltd.",
    role: "Director / Lead Developer & Growth Strategist",
    when: "Feb 2021 – Present",
    bullets: [
      "Delivered 50+ websites and custom applications",
      "Built scalable WordPress, Shopify, and PHP solutions",
      "Developed automation systems",
      "Managed SEO + paid advertising strategies",
      "Led full development-to-scaling lifecycle",
    ],
  },
  {
    co: "TechStoreBN",
    role: "Branch Head / Technical & Marketing Lead",
    when: "Feb 2020 – Feb 2021",
    bullets: [
      "Managed development and marketing operations",
      "Improved website performance",
      "Enhanced lead generation systems",
    ],
  },
  {
    co: "DigiTech Talks",
    role: "Founder / Web & Marketing Consultant",
    when: "Apr 2019 – Feb 2020",
    bullets: [
      "Built startup websites and web solutions",
      "Delivered SEO-focused platforms",
      "Managed projects independently",
    ],
  },
  {
    co: "Tata Consultancy Services",
    role: "Web Developer",
    when: "Sep 2017 – Dec 2019",
    bullets: [
      "Developed enterprise-level applications",
      "Worked on PHP backend systems",
      "Database optimization at scale",
      "Structured large-team environments",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A decade of <span className="gradient-text">shipping & scaling.</span></>}
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="space-y-12">
          {jobs.map((j, i) => (
            <motion.div
              key={j.co}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6`}
            >
              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full gradient-accent ring-4 ring-background z-10" />
              <div className="hidden md:block w-1/2" />
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className="glass rounded-2xl p-6 hover:border-accent/40 transition">
                  <div className="text-xs uppercase tracking-widest text-accent mb-2">{j.when}</div>
                  <h3 className="font-display text-xl font-semibold">{j.co}</h3>
                  <div className="text-sm text-muted-foreground mb-4">{j.role}</div>
                  <ul className="space-y-1.5 text-sm">
                    {j.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                        <span className="text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

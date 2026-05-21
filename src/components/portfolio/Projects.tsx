import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink } from "lucide-react";

const projects = [
  { name: "DigiTace Tech Solutions", url: "https://digitacetechsolutions.com/", cat: "Agency", desc: "Flagship agency platform — services, lead capture & content engine.", tech: ["WordPress", "PHP", "SEO"] },
  { name: "SPARKS & ASSOCIATES ", url: "https://sparks-golden-guide.vercel.app/", cat: "Education", desc: "Modern educational guide platform with structured content delivery.", tech: ["React", "Next.js", "Tailwind"] },
  { name: "Strike Films", url: "https://www.strikefilmss.com/", cat: "Media", desc: "Cinematic production house portfolio with immersive showreel.", tech: ["WordPress", "Custom Theme"] },
  { name: "NXTMobility", url: "https://nxtemobility.com/", cat: "EV / Mobility", desc: "EV mobility brand site with product showcase & lead funnels.", tech: ["WordPress", "Performance"] },
  { name: "Peharava", url: "https://peharava.com/", cat: "Lifestyle", desc: "Lifestyle e-commerce experience with custom storefront.", tech: ["Shopify", "Liquid"] },
  { name: "FITSA", url: "https://fitsa.in/", cat: "Fitness", desc: "Fitness brand site optimized for conversions & local SEO.", tech: ["WordPress", "SEO"] },
  { name: "Tolo India", url: "https://toloindia.com/", cat: "E-commerce", desc: "Indian D2C commerce site with payment & catalog systems.", tech: ["Shopify", "PHP"] },
  { name: "Tarash Designs", url: "http://tarashdesigns.vercel.app/", cat: "Design", desc: "Premium design studio portfolio with editorial layout.", tech: ["React", "Vercel"] },
  { name: "Home N Earth", url: "https://homenearth.in/", cat: "Home & Decor", desc: "Home decor commerce platform with rich product storytelling.", tech: ["WordPress", "WooCommerce"] },
  { name: "Evalgator", url: "https://www.evalgator.com/en-in/", cat: "SaaS", desc: "Assessment & evaluation SaaS marketing site, multi-region.", tech: ["WordPress", "i18n"] },
  { name: "Manali Haven", url: "https://manali-mountain-haven.vercel.app/", cat: "Hotel", desc: "Premium design for hotel Booking in Manali.", tech: ["React", "Hostinger"] },
  { name: "Atherma", url: "https://atherma-homes.vercel.app/", cat: "Real Estate", desc: "Real Estate Proporty Listing Portal", tech: ["React", "Hostinger"] },
];

const filters = ["All", "Agency", "Education", "Media", "EV / Mobility", "Lifestyle", "Fitness", "E-commerce", "Design", "Home & Decor", "SaaS"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title={<>Selected <span className="gradient-text">work.</span></>}
      description="10 live projects across agencies, e-commerce, SaaS and lifestyle brands. Each one built to perform — not just look good."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-xs font-medium border transition ${
              filter === f
                ? "gradient-accent text-primary-foreground border-transparent"
                : "border-border hover:bg-glass"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {list.map((p, i) => (
          <motion.a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
            className="group glass rounded-2xl p-7 hover:border-accent/50 hover:-translate-y-1 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-accent">{p.cat}</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2 group-hover:gradient-text transition">{p.name}</h3>
            <p className="text-sm text-muted-foreground mb-5">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-glass border border-border">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

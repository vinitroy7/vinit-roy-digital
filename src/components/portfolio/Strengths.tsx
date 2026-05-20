import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Award } from "lucide-react";

const strengths = [
  "Full-Stack Development", "WordPress Development", "Shopify Development",
  "Web Applications", "Performance Marketing", "Lead Generation",
  "Funnel Optimization", "Remote Collaboration", "SEO Strategy", "Conversion Optimization",
];

export function Strengths() {
  return (
    <Section
      id="strengths"
      eyebrow="Credentials"
      title={<>Strengths, education <span className="gradient-text">& certifications.</span></>}
    >
      <div className="grid lg:grid-cols-3 gap-5 mb-8">
        <div className="glass rounded-2xl p-7 lg:col-span-2">
          <h3 className="font-display text-xl font-semibold mb-5">Core Strengths</h3>
          <div className="flex flex-wrap gap-2">
            {strengths.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="px-4 py-2 rounded-xl border border-border bg-glass text-sm font-medium hover:border-accent/50 hover:text-accent transition"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6">
            <GraduationCap className="h-6 w-6 text-accent mb-3" />
            <div className="font-semibold">Bachelor of Engineering</div>
            <div className="text-sm text-muted-foreground">Computer Science</div>
            <div className="text-xs text-muted-foreground mt-1">Nagpur University · 2012–2016</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <Award className="h-6 w-6 text-accent mb-3" />
            <div className="font-semibold">Certifications</div>
            <div className="text-sm text-muted-foreground mt-1">Google Ads Certified</div>
            <div className="text-sm text-muted-foreground">SEO & Digital Marketing Specialist</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

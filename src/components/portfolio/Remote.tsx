import { motion } from "framer-motion";
import { Section } from "./Section";
import { Users, MessageSquare, Clock, Shield, CheckCircle2, Brain } from "lucide-react";

const items = [
  { Icon: Users, t: "Global clients", d: "Years of experience executing across cultures and continents." },
  { Icon: MessageSquare, t: "Async communication", d: "Fluent in Slack, Zoom, Notion, Email — clear, concise, documented." },
  { Icon: Clock, t: "US / UK time zones", d: "Flexible overlap windows. Reliable handoffs. No dropped balls." },
  { Icon: Shield, t: "Ownership mindset", d: "I treat your roadmap as mine. Outcomes over hours." },
  { Icon: CheckCircle2, t: "On-time delivery", d: "Predictable shipping cadence with weekly check-ins." },
  { Icon: Brain, t: "Independent problem solving", d: "Senior judgment — I unblock myself before I unblock you." },
];

export function Remote() {
  return (
    <Section
      id="remote"
      eyebrow="Remote Capabilities"
      title={<>Built for <span className="gradient-text">distributed teams.</span></>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(({ Icon, t, d }, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass rounded-2xl p-6 hover:bg-glass/60 transition"
          >
            <Icon className="h-6 w-6 text-accent mb-4" />
            <h3 className="font-semibold mb-1">{t}</h3>
            <p className="text-sm text-muted-foreground">{d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

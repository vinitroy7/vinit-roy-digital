import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, MessageCircle, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message received! I'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="gradient-text">that performs.</span></>}
      description="Send a brief about your project. I respond within 24 hours, usually faster."
    >
      <div className="grid lg:grid-cols-5 gap-6" >
        <form onSubmit={onSubmit} className="glass rounded-3xl p-7 md:p-9 lg:col-span-3 space-y-4" action="https://formspree.io/f/meedeyeg" method="POST" >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your full name" required />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Phone" name="phone" placeholder="+1 555 000 000" />
            <Field label="Budget" name="budget" placeholder="$2k – $10k+" />
          </div>
          <Field label="Project Requirement" name="req" placeholder="E.g. Shopify rebuild + paid ads" />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about the project, timeline, and goals…"
              className="mt-2 w-full rounded-xl bg-glass border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition resize-none"
            />
          </div>
          <button
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl gradient-accent text-primary-foreground font-semibold hover:scale-[1.01] transition disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send Message"} <Send className="h-4 w-4" />
          </button>
        </form>

        <div className="lg:col-span-2 space-y-4">
          {[
            { Icon: Mail, label: "Email", value: "vinitroy7@gmail.com", href: "mailto:vinitroy7@gmail.com" },
            { Icon: MessageCircle, label: "WhatsApp", value: "+91 92056 00434", href: "https://wa.me/919205600434" },
            { Icon: Phone, label: "Phone", value: "+91 92056 00434", href: "tel:+919205600434" },
            { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vinitvaibhavroy", href: "https://linkedin.com/in/vinitvaibhavroy" },
            { Icon: MapPin, label: "Based in", value: "Noida, India · Remote worldwide" },
          ].map(({ Icon, label, value, href }, i) => {
            const C: any = href ? "a" : "div";
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <C
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-accent/50 transition group"
                >
                  <div className="h-11 w-11 rounded-xl gradient-accent grid place-items-center shrink-0 group-hover:scale-110 transition">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                    <div className="font-medium text-sm truncate">{value}</div>
                  </div>
                </C>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: any) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-glass border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
      />
    </div>
  );
}

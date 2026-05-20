import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MessageCircle, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* floating blobs */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-accent/30 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-highlight/30 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for remote projects worldwide
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            <span className="block text-foreground">Full-Stack Developer</span>
            <span className="block gradient-text">& Digital Growth</span>
            <span className="block text-foreground">Specialist.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Building scalable websites, web applications & digital growth systems
            for modern businesses worldwide. <span className="text-foreground">10+ years</span> turning ideas into measurable impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl gradient-accent text-primary-foreground font-semibold hover:scale-[1.03] transition-transform shadow-lg glow"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass font-semibold hover:bg-glass/60 transition"
            >
              <Sparkles className="h-4 w-4" />
              Hire Me
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border font-semibold hover:bg-glass transition"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            {[
              { Icon: Linkedin, href: "https://linkedin.com/in/vinitvaibhavroy", label: "LinkedIn" },
              { Icon: Github, href: "https://github.com/", label: "GitHub" },
              { Icon: Mail, href: "mailto:vinitroy7@gmail.com", label: "Email" },
              { Icon: MessageCircle, href: "https://wa.me/919205600434", label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 grid place-items-center rounded-xl glass hover:text-accent hover:scale-110 transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            ["50+", "Websites Delivered"],
            ["10+", "Years Experience"],
            ["100%", "Remote Workflow"],
            ["∞", "Coffee Consumed"],
          ].map(([num, label]) => (
            <div key={label} className="glass rounded-2xl p-5">
              <div className="font-display text-3xl font-bold gradient-text">{num}</div>
              <div className="text-xs text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display font-bold text-lg mb-3">
              <span className="inline-block h-8 w-8 rounded-lg gradient-accent" />
              <span className="gradient-text">Vinit Vaibhav Roy</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Full-Stack Developer & Digital Growth Specialist — building scalable websites
              and growth systems for global teams from Noida, India.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Linkedin, href: "https://linkedin.com/in/vinitvaibhavroy" },
                { Icon: Github, href: "https://github.com/" },
                { Icon: Mail, href: "mailto:vinitroy7@gmail.com" },
                { Icon: MessageCircle, href: "https://wa.me/919205600434" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="h-10 w-10 grid place-items-center rounded-xl glass hover:text-accent transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Experience", "#experience"], ["Contact", "#contact"]].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-accent transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Noida, India</li>
              <li><a href="mailto:vinitroy7@gmail.com" className="hover:text-accent">vinitroy7@gmail.com</a></li>
              <li><a href="tel:+919205600434" className="hover:text-accent">+91 92056 00434</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Vinit Vaibhav Roy. All rights reserved.</div>
          <div>Designed & Developed by <span className="gradient-text font-semibold">Vinit Vaibhav Roy</span></div>
        </div>
      </div>
    </footer>
  );
}

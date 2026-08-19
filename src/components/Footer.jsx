<<<<<<< HEAD
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { name: "About",    href: "#about"    },
  { name: "Skills",   href: "#skills"   },
  { name: "Journey",  href: "#journey"  },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact"  },
];

const socials = [
  { href: "https://www.linkedin.com/in/ronaldo-flores-nazario", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/ronaldoflores9",                  icon: Github,   label: "GitHub"   },
  { href: "mailto:ronaldo.flores@upr.edu",                      icon: Mail,     label: "Email"    },
];

export const Footer = () => {
  return (
    <footer className="relative mt-12 px-4 pt-14 pb-8 overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px cosmic-edge-glow pointer-events-none" />
      <div
        aria-hidden="true"
        className="nebula-orb absolute -bottom-20 left-1/2 -translate-x-1/2 w-[40rem] h-40 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(265 80% 55% / 0.08) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto max-w-5xl relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2.5 font-display font-bold text-lg">
              <span className="relative flex items-center justify-center w-8 h-8">
                <span className="absolute inset-0 rounded-full border border-primary/40 animate-ring-spin-slow" />
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-subtle"
                  style={{ boxShadow: "0 0 8px 2px hsl(var(--primary) / 0.7)" }} />
              </span>
              <span><span className="text-foreground">Ronaldo</span><span className="text-primary">.Flores</span></span>
            </a>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              Software engineer · Collins Aerospace co-op · NASA RASC-AL member — building at the frontier of software and space.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.name}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="p-2.5 rounded-full glass-card hover:bg-primary/10 hover:border-primary/40 text-primary transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            &copy; {new Date().getFullYear()} Ronaldo Flores. All rights reserved.
            {[0, 1, 2].map((i) => (
              <span key={i} aria-hidden="true" className="inline-block w-1 h-1 rounded-full bg-primary/60 animate-twinkle"
                style={{ animationDelay: i * 0.8 + "s" }} />
            ))}
          </p>
          <a href="#hero" aria-label="Back to top"
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-full glass-card hover:bg-primary/10 hover:border-primary/40 text-primary transition-all">
            Back to top <ArrowUp size={15} />
=======
import { ArrowUp, Radio } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 px-4 pb-6 pt-8">
      <div className="container mx-auto flex max-w-6xl flex-col gap-5 border-t border-border py-6 text-left sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-xs font-black text-primary">RF</span>
          <div>
            <p className="text-sm font-semibold">Ronaldo Flores</p>
            <p className="mt-0.5 text-xs text-foreground/35">Software engineering · Puerto Rico</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-6 sm:justify-end">
          <span className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-foreground/35">
            <Radio size={10} className="text-emerald-400" />
            © {new Date().getFullYear()} · Systems online
          </span>
          <a href="#hero" aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/55 text-foreground/45 transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary">
            <ArrowUp size={16} />
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
          </a>
        </div>
      </div>
    </footer>
  );
};

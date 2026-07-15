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
          </a>
        </div>
      </div>
    </footer>
  );
};

export const SectionHeader = ({ num, label, title, accent, subtitle }) => (
  <div className="mb-14 text-center">
    <div data-reveal className="flex items-center justify-center gap-3 mb-4">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
      <span className="eyebrow">{num} — {label}</span>
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" />
    </div>
    <h2 data-reveal data-reveal-delay="80" className="text-3xl md:text-5xl font-bold tracking-tight">
      {title} {accent && <span className="text-gradient-cosmic">{accent}</span>}
    </h2>
    {subtitle && (
      <p data-reveal data-reveal-delay="140" className="mt-4 text-muted-foreground max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

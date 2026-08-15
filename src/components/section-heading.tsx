type SectionHeadingProps = {
  vi: string;
  en: string;
  /** Rendered inside the dark ceremony panel, where text sits on deep green. */
  onDark?: boolean;
  className?: string;
};

/**
 * The reference invitation labels every block twice — Vietnamese on top,
 * a smaller English line beneath. Both lines are letterspaced small caps.
 */
export function SectionHeading({ vi, en, onDark = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <p
        className={`font-body text-[11px] font-semibold tracking-[0.18em] uppercase lg:text-[13px] ${
          onDark ? "text-cream" : "text-ink"
        }`}
      >
        {vi}
      </p>
      <p
        className={`font-body mt-1 text-[9px] tracking-[0.16em] uppercase lg:text-[10.5px] ${
          onDark ? "text-cream/55" : "text-ink-soft"
        }`}
      >
        {en}
      </p>
    </div>
  );
}

/** Thin rule with a diamond in the middle — the panel's section separator. */
export function Divider({ onDark = false }: { onDark?: boolean }) {
  const tone = onDark ? "bg-cream/25" : "bg-line";
  return (
    <div className="my-8 flex items-center justify-center gap-2 lg:my-11">
      <span className={`h-px w-10 ${tone} lg:w-16`} />
      <span className={`h-1 w-1 rotate-45 ${onDark ? "bg-cream/50" : "bg-accent"}`} />
      <span className={`h-px w-10 ${tone} lg:w-16`} />
    </div>
  );
}

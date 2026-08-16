type SectionHeadingProps = {
  /** English display line — the bigger, italic headline in the invitation. */
  en: string;
  /** Vietnamese line underneath, set smaller and upright. */
  vi: string;
  /** Rendered on the dark closing panel (Thank You), where text sits on deep green. */
  onDark?: boolean;
  className?: string;
};

/**
 * Every section title in the invitation is a two-line pair: the English name
 * large and italic, the Vietnamese translation smaller and upright beneath —
 * both in the display serif, both the same dark-olive ink.
 */
export function SectionHeading({ en, vi, onDark = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center ${onDark ? "text-cream" : "text-heading"} ${className}`}>
      <p className="font-display text-[30px] italic lg:text-[44px]">{en}</p>
      <p className="font-display mt-1 text-[17px] lg:text-[20px]">{vi}</p>
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

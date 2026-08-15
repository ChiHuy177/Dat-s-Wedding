import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  /** Sections alternate light and deep green down the page. */
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
};

/**
 * Every section on the page goes through here, so horizontal padding, content
 * width and vertical rhythm are identical from top to bottom — nothing juts in
 * or out. Backgrounds are solid so content never sinks into the page.
 */
export function Section({ id, tone = "light", className = "", children }: SectionProps) {
  const toneClass = tone === "dark" ? "bg-deep text-cream" : "bg-paper text-ink";

  return (
    <section id={id} className={`relative overflow-hidden px-6 py-14 lg:px-8 lg:py-22 ${toneClass} ${className}`}>
      <div className="relative mx-auto w-full max-w-xl">{children}</div>
    </section>
  );
}

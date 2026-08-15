type LeafDecorProps = {
  /** Corner the sprig grows from. */
  corner: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  opacity?: number;
};

const cornerClass: Record<LeafDecorProps["corner"], string> = {
  "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
  "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4 -scale-x-100",
  "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4 -scale-y-100",
  "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4 -scale-100",
};

/**
 * Botanical sprig used to bleed greenery in from the page edges, standing in for
 * the watercolour art in the reference invitation. Purely decorative.
 */
export function LeafDecor({ corner, className = "", opacity = 0.5 }: LeafDecorProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      style={{ opacity }}
      className={`pointer-events-none absolute h-40 w-40 lg:h-64 lg:w-64 ${cornerClass[corner]} ${className}`}
    >
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none">
        <path d="M18,182 C60,150 96,110 128,58" />
        <path d="M60,140 C74,116 78,92 70,70" />
        <path d="M96,96 C118,86 136,64 140,36" />
      </g>
      <g fill="currentColor">
        {[
          { x: 36, y: 160, r: -32 },
          { x: 58, y: 136, r: -18 },
          { x: 78, y: 116, r: -40 },
          { x: 96, y: 96, r: -26 },
          { x: 114, y: 74, r: -48 },
          { x: 128, y: 54, r: -34 },
          { x: 70, y: 74, r: 24 },
          { x: 138, y: 40, r: -12 },
        ].map(({ x, y, r }, i) => (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="17"
            ry="7"
            transform={`rotate(${r} ${x} ${y})`}
            opacity={0.34 + (i % 3) * 0.12}
          />
        ))}
      </g>
    </svg>
  );
}

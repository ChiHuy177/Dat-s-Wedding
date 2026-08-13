import { weddingConfig } from "@/lib/wedding-config";
import { TimelineIcon, type TimelineIconName } from "@/components/timeline-icons";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";

type TimelineItem = { time: string; label: string; icon: TimelineIconName };

function IconCircle({ icon }: { icon: TimelineIconName }) {
  return (
    <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full border border-accent bg-surface text-accent">
      <TimelineIcon name={icon} />
    </div>
  );
}

function Leaf({ top, left, flip = false }: { top: string; left: string; flip?: boolean }) {
  return (
    <svg
      className="absolute h-5 w-4 -translate-x-1/2 -translate-y-1/2"
      style={{ top, left, transform: `translate(-50%, -50%) scaleX(${flip ? -1 : 1})` }}
      viewBox="0 0 16 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8,1 C13,3 15,8 12,13 C10,17 5,18 8,20 C5,18 1,17 -1,13 C-4,8 -2,3 8,1 Z"
        fill="var(--wed-accent)"
        opacity="0.5"
      />
      <path d="M8,2 C9,7 9,15 8,19" stroke="var(--wed-accent)" strokeWidth="0.6" />
    </svg>
  );
}

function MobileTimelinePath() {
  return (
    <>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 400"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M26,50 C50,75 44,125 68,150 C92,175 0,225 24,250 C48,275 44,325 68,350"
          stroke="var(--wed-accent)"
          strokeWidth="1.3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <Leaf top="25%" left="64%" />
      <Leaf top="50%" left="16%" flip />
      <Leaf top="75%" left="64%" />
    </>
  );
}

export function Timeline() {
  const items: TimelineItem[] = [...weddingConfig.timeline];

  return (
    <section className="bg-paper/80 px-7 py-9 backdrop-blur-sm lg:py-16">
      <Reveal>
        <h3 className="font-script mb-10 flex items-center justify-center gap-3 text-center text-[34px] leading-none text-accent lg:mb-14 lg:text-6xl">
          <span className="h-px w-8 bg-accent-soft lg:hidden" />
          Timeline
          <span className="h-px w-8 bg-accent-soft lg:hidden" />
        </h3>
      </Reveal>

      <div className="relative lg:hidden">
        <MobileTimelinePath />
        <RevealStagger className="relative flex flex-col gap-16">
          {items.map((item, i) => {
            const right = i % 2 === 1;
            return (
              <RevealItem
                key={item.time}
                className={`flex flex-col ${right ? "items-end pl-[42%] text-right" : "items-start pr-[42%] text-left"}`}
              >
                <span className="font-display text-xl font-semibold text-ink">{item.time.replace(":", "h")}</span>
                <span className="font-body mt-1 text-[10px] tracking-[0.14em] text-ink-soft uppercase">
                  {item.label}
                </span>
                <span className="mt-3 text-accent">
                  <TimelineIcon name={item.icon} size={30} />
                </span>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>

      <RevealStagger className="mx-auto hidden max-w-4xl lg:flex lg:items-start lg:justify-between">
        {items.map((item, i) => (
          <RevealItem key={item.time} className="relative flex flex-1 flex-col items-center text-center">
            {i < items.length - 1 && (
              <svg
                className="absolute top-6 left-[calc(50%+28px)] h-8 w-[calc(100%-56px)]"
                viewBox="0 0 100 24"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0,12 C25,-6 75,30 100,12"
                  stroke="var(--wed-accent)"
                  strokeWidth="1.5"
                  strokeDasharray="1 7"
                  strokeLinecap="round"
                />
              </svg>
            )}
            <IconCircle icon={item.icon} />
            <div className="font-body mt-4">
              <div className="text-sm font-bold tracking-[0.08em]">{item.time}</div>
              <div className="mt-1 text-sm text-ink-soft">{item.label}</div>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}

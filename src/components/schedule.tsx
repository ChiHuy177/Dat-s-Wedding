import { RevealStagger, RevealItem } from "@/components/reveal";
import { weddingConfig } from "@/lib/wedding-config";

/** Wedding-day running order: times on the left, bilingual labels on the right. */
export function Schedule() {
  const items = weddingConfig.schedule;

  return (
    <RevealStagger className="relative mx-auto max-w-sm">
      {items.map((item, i) => (
        <RevealItem key={item.time} className="relative flex gap-4 pb-7 last:pb-0 lg:gap-6">
          <span className="font-display w-12 flex-none pt-px text-right text-[13px] tabular-nums lg:w-14 lg:text-[15px]">
            {item.time}
          </span>

          <span className="relative flex flex-none flex-col items-center">
            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-cream" />
            {i < items.length - 1 && <span className="mt-1 w-px flex-1 bg-cream/25" />}
          </span>

          <span className="flex-1 pb-1 text-left">
            <span className="font-body block text-[13px] lg:text-[15px]">{item.label}</span>
            <span className="font-body mt-0.5 block text-[9.5px] tracking-[0.12em] text-cream/55 uppercase lg:text-[11px]">
              {item.labelEn}
            </span>
          </span>
        </RevealItem>
      ))}
    </RevealStagger>
  );
}

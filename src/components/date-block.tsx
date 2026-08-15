import { weddingConfig } from "@/lib/wedding-config";

/**
 * The invitation's signature date row: weekday and month flank the day number,
 * each stacked Vietnamese-over-English, with hairline rules between them.
 */
export function DateBlock() {
  const { weekday, weekdayEn, day, month, monthEn, year } = weddingConfig.dateParts;

  return (
    <div className="text-center">
      <div className="flex items-stretch justify-center gap-4 lg:gap-7">
        <Side vi={weekday} en={weekdayEn} />
        <span className="w-px self-stretch bg-cream/30" />
        <span className="font-display self-center text-[40px] leading-none lg:text-6xl">{day}</span>
        <span className="w-px self-stretch bg-cream/30" />
        <Side vi={month} en={monthEn} />
      </div>
      <p className="font-display mt-3 text-lg tracking-[0.1em] lg:mt-4 lg:text-2xl">{year}</p>
      <p className="font-body mt-2.5 text-[10px] tracking-[0.1em] text-cream/60 uppercase lg:text-[11.5px]">
        ({weddingConfig.lunarDateLabel})
      </p>
    </div>
  );
}

function Side({ vi, en }: { vi: string; en: string }) {
  return (
    <span className="font-body flex flex-col justify-center">
      <span className="text-[10px] font-semibold tracking-[0.12em] uppercase lg:text-xs">{vi}</span>
      <span className="mt-0.5 text-[8.5px] tracking-[0.12em] text-cream/55 uppercase lg:text-[10px]">{en}</span>
    </span>
  );
}

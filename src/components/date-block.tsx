import { weddingConfig } from "@/lib/wedding-config";

/**
 * The invitation's signature date row: weekday and month flank the day number,
 * each stacked Vietnamese-over-English, with hairline rules between them.
 */
export function DateBlock() {
  const { weekday, weekdayEn, day, month, monthEn, year } = weddingConfig.dateParts;

  return (
    <div className="text-center text-heading">
      <div className="flex items-stretch justify-center gap-4 lg:gap-7">
        <Side vi={weekday} en={weekdayEn} />
        <span className="w-px self-stretch bg-line" />
        <span className="font-display self-center text-[48px] leading-none lg:text-7xl">{day}</span>
        <span className="w-px self-stretch bg-line" />
        <Side vi={month} en={monthEn} />
      </div>
      <p className="font-display mt-3 text-lg tracking-[0.1em] lg:mt-4 lg:text-2xl">{year}</p>
      <p className="font-display mt-2.5 text-[15px] lg:text-[17px]">({weddingConfig.lunarDateLabel})</p>
    </div>
  );
}

function Side({ vi, en }: { vi: string; en: string }) {
  return (
    <span className="font-display flex flex-col justify-center">
      <span className="text-[14px] lg:text-[16px]">{vi}</span>
      <span className="mt-0.5 text-[14px] lg:text-[16px]">{en}</span>
    </span>
  );
}

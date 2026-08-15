import { Heart } from "@/components/heart";
import { WEEKDAY_LABELS, addToCalendarUrl, weddingMonthGrid } from "@/lib/calendar";

/** Every cell — header and day alike — is this exact box, so columns line up. */
const CELL = "flex h-9 w-9 items-center justify-center lg:h-10 lg:w-10";

export function MiniCalendar() {
  const { cells, monthLabel } = weddingMonthGrid();

  return (
    <div className="mx-auto w-fit">
      <div className="rounded-md border border-cream/25 bg-cream/5 px-4 py-5 lg:px-6 lg:py-6">
        <p className="font-display mb-4 text-center text-base tracking-[0.08em] lg:text-lg">{monthLabel}</p>

        <div className="grid grid-cols-7 gap-x-1 gap-y-1">
          {WEEKDAY_LABELS.map((label) => (
            <span
              key={label}
              className={`${CELL} font-body text-[9.5px] tracking-[0.06em] text-cream/50 uppercase lg:text-[11px]`}
            >
              {label}
            </span>
          ))}

          {cells.map((cell, i) =>
            cell === null ? (
              <span key={`blank-${i}`} className={CELL} />
            ) : cell.isWeddingDay ? (
              <span key={cell.day} aria-current="date" className={`${CELL} relative`}>
                <Heart className="absolute inset-0 h-full w-full text-cream" />
                {/* Nudged up: the heart's visual centre sits above its bounding box centre. */}
                <span className="font-body relative -mt-0.5 text-[12px] font-bold text-deep lg:text-[13px]">
                  {cell.day}
                </span>
              </span>
            ) : (
              <span key={cell.day} className={`${CELL} font-body text-[12px] text-cream/75 lg:text-[13.5px]`}>
                {cell.day}
              </span>
            ),
          )}
        </div>
      </div>

      <a
        href={addToCalendarUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="font-body mt-4 block text-center text-[10.5px] tracking-[0.1em] text-cream/75 uppercase underline underline-offset-4 transition-colors hover:text-cream lg:text-[11.5px]"
      >
        Thêm vào lịch / Add to Calendar
      </a>
    </div>
  );
}

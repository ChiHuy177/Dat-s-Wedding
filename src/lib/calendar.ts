import { weddingConfig } from "@/lib/wedding-config";

/** Google Calendar's template URL wants UTC basic-format stamps: 20260920T040000Z */
function toGoogleStamp(iso: string) {
  return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function addToCalendarUrl() {
  const { reception, groomFullName, brideFullName } = weddingConfig;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Tiệc cưới ${groomFullName} & ${brideFullName}`,
    dates: `${toGoogleStamp(reception.startISO)}/${toGoogleStamp(reception.endISO)}`,
    details: `Đón khách ${reception.welcomeTime} · Khai tiệc ${reception.startTime}`,
    location: `${reception.venue}, ${reception.address}`,
  });

  return `https://calendar.google.com/calendar/render?${params}`;
}

export type CalendarCell = { day: number; isWeddingDay: boolean } | null;

/**
 * Month grid for the wedding's month, Monday-first (Vietnamese convention).
 * Leading/trailing blanks are `null` so the grid stays a clean 7-column layout.
 */
export function weddingMonthGrid(): { cells: CalendarCell[]; monthLabel: string } {
  // Read the calendar date off the ISO string rather than a Date, so the grid
  // doesn't shift when the server's timezone sits behind the +07:00 offset.
  const [year, monthNumber, weddingDay] = weddingConfig.weddingDateISO
    .slice(0, 10)
    .split("-")
    .map(Number);
  const month = monthNumber - 1;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // getDay() is Sunday-first; shift so Monday === 0.
  const leadingBlanks = (new Date(year, month, 1).getDay() + 6) % 7;

  const cells: CalendarCell[] = [
    ...Array.from({ length: leadingBlanks }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      isWeddingDay: i + 1 === weddingDay,
    })),
  ];

  return {
    cells,
    monthLabel: `${weddingConfig.dateParts.month} / ${year}`,
  };
}

export const WEEKDAY_LABELS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

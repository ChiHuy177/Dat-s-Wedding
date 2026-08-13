import { cloneElement } from "react";

const icons = {
  car: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 16h16M6 16V9a2 2 0 012-2h8a2 2 0 012 2v7M3 16h18M7 19v-3M17 19v-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  rings: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="15" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="15" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  plate: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 9v6M14 9v2.5a1.5 1.5 0 01-1 1.4V15"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  music: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18V6l11-2v12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
} as const;

export type TimelineIconName = keyof typeof icons;

export function TimelineIcon({ name, size = 18 }: { name: TimelineIconName; size?: number }) {
  return cloneElement(icons[name], { width: size, height: size });
}

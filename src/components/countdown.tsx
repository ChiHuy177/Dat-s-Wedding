"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { weddingConfig } from "@/lib/wedding-config";

function getTimeLeft() {
  const diff = new Date(weddingConfig.weddingDateISO).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / 86_400_000),
    hours: Math.floor((clamped / 3_600_000) % 24),
    minutes: Math.floor((clamped / 60_000) % 60),
    seconds: Math.floor((clamped / 1_000) % 60),
  };
}

/** Sub-block of the love story section. */
export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft());
    const immediate = window.setTimeout(tick, 0);
    const interval = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(immediate);
      window.clearInterval(interval);
    };
  }, []);

  const units: Array<{ key: keyof ReturnType<typeof getTimeLeft>; label: string; labelEn: string }> = [
    { key: "days", label: "Ngày", labelEn: "Days" },
    { key: "hours", label: "Giờ", labelEn: "Hours" },
    { key: "minutes", label: "Phút", labelEn: "Minutes" },
    { key: "seconds", label: "Giây", labelEn: "Seconds" },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.08 }}
      className="flex justify-center gap-6 lg:gap-12"
    >
      {units.map(({ key, label, labelEn }) => (
        <motion.div
          key={key}
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="font-display block text-[32px] leading-none tabular-nums lg:text-6xl">
            {timeLeft ? String(timeLeft[key]).padStart(2, "0") : "--"}
          </span>
          <span className="font-body mt-1.5 block text-[10px] tracking-[0.12em] text-ink uppercase lg:mt-3 lg:text-xs">
            {label}
          </span>
          <span className="font-body mt-0.5 block text-[8.5px] tracking-[0.12em] text-ink-soft uppercase lg:text-[10px]">
            {labelEn}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

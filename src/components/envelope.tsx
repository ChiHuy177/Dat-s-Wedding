"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { weddingConfig } from "@/lib/wedding-config";

const PETAL_COUNT = 10;
const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

export function Envelope({ targetId }: { targetId: string }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    if (open) return;
    setOpen(true);
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1250);
  }

  return (
    <section className="relative flex h-dvh min-h-140 flex-col items-center justify-center overflow-hidden bg-[radial-gradient(120%_90%_at_50%_0%,#9a4a35_0%,#6b2f22_60%,#3d1912_100%)] px-8 text-center text-[#f8ece2] lg:h-screen">
      <span className="absolute top-6 right-6 flex h-14 w-11 items-center justify-center border border-dashed border-white/40 text-[9px] tracking-wide text-white/55 lg:top-10 lg:right-10">
        Bưu
        <br />
        thiếp
      </span>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display mb-5 text-xs font-semibold tracking-[0.3em] text-accent-soft uppercase lg:text-sm"
      >
        Welcome to our wedding
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-script mb-8 text-5xl leading-none lg:mb-12 lg:text-7xl"
      >
        Save the Date
      </motion.h2>

      {/* envelope graphic */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="relative mb-9 h-42 w-66 lg:h-52 lg:w-80"
        style={{ perspective: 1200 }}
      >
        <button
          type="button"
          onClick={handleOpen}
          aria-label="Mở thiệp mời"
          className="absolute inset-0 z-30 cursor-pointer"
          style={{ pointerEvents: open ? "none" : "auto" }}
        >
          <span className="sr-only">Mở thiệp mời</span>
        </button>

        {/* body */}
        <div
          className="pointer-events-none absolute inset-0 rounded-md border border-white/15 shadow-2xl"
          style={{ background: "linear-gradient(155deg, #9a4a35, #5c281d 75%)" }}
        />

        {/* card sliding out */}
        <motion.div
          className="pointer-events-none absolute inset-x-3 top-3 z-10 flex h-32 flex-col items-center justify-center gap-1 rounded-sm bg-[#fdf9ee] shadow-lg lg:h-40"
          initial={false}
          animate={open ? { y: -58, scale: 1.04, opacity: 1 } : { y: 16, scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.7, delay: open ? 0.45 : 0, ease: EASE_SMOOTH }}
        >
          <p className="font-display text-sm text-ink lg:text-lg">
            {weddingConfig.groom} <span className="font-script text-accent">&amp;</span> {weddingConfig.bride}
          </p>
          <p className="font-display text-[9px] font-semibold tracking-[0.16em] text-ink-soft uppercase lg:text-[10px]">
            {weddingConfig.weddingDateShort}
          </p>
        </motion.div>

        {/* flap */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-26 origin-top lg:h-32"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            background: "linear-gradient(160deg, #6b2f22 20%, #9a4a35)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
          animate={{ rotateX: open ? -155 : 0 }}
          transition={{ duration: 0.65, ease: [0.45, 0, 0.55, 1] }}
        />

        {/* petal burst */}
        {Array.from({ length: PETAL_COUNT }, (_, i) => {
          const angle = (i / PETAL_COUNT) * Math.PI * 2;
          const distance = 70 + (i % 3) * 14;
          return (
            <motion.span
              key={i}
              className="pointer-events-none absolute top-1/2 left-1/2 z-40 h-1.5 w-1.5 rounded-full bg-accent-soft"
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={
                open
                  ? {
                      x: Math.cos(angle) * distance,
                      y: Math.sin(angle) * distance * 0.7 - 10,
                      opacity: [1, 1, 0],
                      scale: [0, 1, 0.6],
                    }
                  : { x: 0, y: 0, opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            />
          );
        })}

        {/* seal */}
        <motion.div
          className="pointer-events-none absolute top-1/2 left-1/2 z-30 flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-[#4a2015] shadow-lg lg:h-16 lg:w-16 lg:text-2xl"
          style={{
            marginTop: "-1.75rem",
            marginLeft: "-1.75rem",
            background:
              "radial-gradient(circle at 35% 30%, var(--wed-accent-soft), var(--wed-accent) 60%, #7a5a25 100%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={open ? { scale: 0.4, rotate: 25, opacity: 0 } : { scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: open ? 0.4 : 0.6, delay: open ? 0 : 0.5, ease: EASE_SMOOTH }}
        >
          囍
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={handleOpen}
        className="font-display rounded-full border border-white/50 px-8 py-3 text-sm font-semibold tracking-[0.14em] text-[#f8ece2] uppercase lg:px-10 lg:py-4 lg:text-base"
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        style={{ pointerEvents: open ? "none" : "auto" }}
        whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        Mở thiệp
      </motion.button>
    </section>
  );
}

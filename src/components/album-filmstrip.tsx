"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

/** Pixels per second the reel travels on its own. */
const SCROLL_SPEED = 34;

type AlbumFilmstripProps = {
  photos: readonly string[];
  /** Frame to scroll to when the strip opens. */
  startIndex: number;
  onClose: () => void;
};

/** Punched sprocket holes running along the edge of the film. */
function Perforations({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 h-3.5 ${className}`}
      style={{
        backgroundImage: "repeating-linear-gradient(to right, #ded9cc 0 14px, transparent 14px 32px)",
        backgroundPosition: "center",
      }}
    />
  );
}

export function AlbumFilmstrip({ photos, startIndex, onClose }: AlbumFilmstripProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  // Close on Escape, and hold the page still behind the strip.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  // Open on the frame the guest tapped.
  useEffect(() => {
    frameRefs.current[startIndex]?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [startIndex]);

  // The reel runs by itself, wrapping back to the first frame at the end.
  // Touching, hovering or scrolling the strip pauses it.
  useEffect(() => {
    if (paused || reducedMotion) return;

    const strip = stripRef.current;
    if (!strip) return;

    let frame = 0;
    let previous: number | null = null;

    function step(now: number) {
      if (!strip) return;
      const elapsed = previous === null ? 0 : (now - previous) / 1000;
      previous = now;

      const maxScroll = strip.scrollWidth - strip.clientWidth;
      if (maxScroll > 0) {
        const next = strip.scrollLeft + SCROLL_SPEED * elapsed;
        strip.scrollLeft = next >= maxScroll - 0.5 ? 0 : next;
      }

      frame = requestAnimationFrame(step);
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [paused, reducedMotion]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Album ảnh cưới"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/88 px-0 py-8 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Đóng album"
        className="font-body absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-lg text-white/80 transition-colors hover:bg-white/10 lg:top-8 lg:right-8"
      >
        ×
      </button>

      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 16, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
        className="relative w-full bg-[#15140f] py-3.5 shadow-2xl"
      >
        <Perforations className="top-1" />
        <Perforations className="bottom-1" />

        <div
          ref={stripRef}
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onPointerDown={() => setPaused(true)}
          onPointerUp={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="flex gap-3 overflow-x-auto px-4 py-5 [scrollbar-width:none] lg:gap-5 lg:px-8 [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((src, i) => (
            <div
              key={src}
              ref={(node) => {
                frameRefs.current[i] = node;
              }}
              className="relative aspect-3/4 h-64 flex-none overflow-hidden border border-white/12 bg-black sm:h-80 lg:h-[26rem]"
            >
              <Image
                src={src}
                alt={`Ảnh cưới ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 312px, 240px"
                className="object-cover"
              />
              <span className="font-body absolute bottom-1.5 left-2 text-[9px] tracking-[0.14em] text-white/45 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <p className="font-body mt-5 text-[10px] tracking-[0.14em] text-white/45 uppercase">
        {reducedMotion
          ? "Kéo ngang để xem / Swipe to browse"
          : "Cuộn phim tự chạy · chạm để dừng / Auto-playing · touch to pause"}
      </p>
    </motion.div>
  );
}

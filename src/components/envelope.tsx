"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { weddingConfig } from "@/lib/wedding-config";

const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

/**
 * Screen one: a full-viewport overlay showing nothing but the closed-invitation
 * photo. The rest of the site stays behind it, locked, until `onOpened` fires.
 */
export function Envelope({ onOpened }: { onOpened: () => void }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    if (open) return;
    setOpen(true);
    window.setTimeout(onOpened, 900);
  }

  return (
    <motion.section
      className="fixed inset-0 z-50 overflow-hidden bg-deep-2 text-[#f8ece2]"
      animate={open ? { opacity: 0 } : { opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65, ease: EASE_SMOOTH }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- full-bleed static photo, not an optimizable content image */}
      <img src="/img/open-it.png" alt="" aria-hidden className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/0 to-black/25" />

      <div className="relative flex min-h-full flex-col items-center justify-between px-8 py-14 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body text-[11px] font-semibold tracking-[0.3em] text-accent-soft uppercase lg:text-xs"
        >
          Welcome to our wedding
        </motion.p>

        <motion.button
          type="button"
          onClick={handleOpen}
          aria-label="Mở thiệp mời"
          className="font-display rounded-full border border-[#f8ece2]/60 px-8 py-3 text-sm font-semibold tracking-[0.14em] uppercase transition-colors hover:bg-[#f8ece2]/10 lg:px-10 lg:py-4 lg:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: open ? 0 : 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ pointerEvents: open ? "none" : "auto" }}
        >
          Mở thiệp
        </motion.button>
      </div>
    </motion.section>
  );
}

"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { weddingConfig } from "@/lib/wedding-config";

export function Thanks() {
  return (
    <section className="px-7 py-8.5 text-center lg:py-16">
      <Reveal>
        <p className="font-script mb-1 text-4xl leading-none text-accent lg:mb-2 lg:text-6xl">Thank You</p>
        <p className="font-body mx-auto mb-4.5 max-w-md text-[13px] leading-relaxed text-ink-soft lg:mb-7 lg:text-base">
          Sự hiện diện của bạn là món quà quý giá nhất với chúng mình. Hẹn gặp bạn trong ngày trọng đại!
        </p>
        <div className="flex justify-center gap-3.5">
          {weddingConfig.socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-7.5 w-7.5 items-center justify-center rounded-full border border-line text-[11px] text-ink-soft lg:h-9 lg:w-9"
            >
              {social.label[0]}
            </motion.a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

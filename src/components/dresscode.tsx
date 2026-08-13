"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { weddingConfig } from "@/lib/wedding-config";

export function Dresscode() {
  return (
    <section className="bg-paper/80 px-7 pt-2 pb-8.5 text-center backdrop-blur-sm lg:pb-16">
      <Reveal>
        <p className="font-body mb-3.5 text-[10.5px] tracking-[0.14em] text-ink-soft uppercase lg:mb-5 lg:text-xs">
          Dresscode gợi ý
        </p>
        <div className="flex justify-center gap-3 lg:gap-5">
          {weddingConfig.dresscodeColors.map((color) => (
            <motion.span
              key={color}
              className="h-6.5 w-6.5 rounded-full border border-line lg:h-10 lg:w-10"
              style={{ background: color }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

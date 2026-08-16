"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { weddingConfig } from "@/lib/wedding-config";

export function Dresscode() {
  return (
    <Section tone="light">
      <Reveal>
        <SectionHeading en="Dress code" vi="Màu sắc Trang Phục" />

        <div className="mt-7 flex justify-center gap-3 lg:mt-10 lg:gap-5">
          {weddingConfig.dresscodeColors.slice(0, 4).map((color) => (
            <motion.span
              key={color}
              className="h-7 w-7 rounded-full border border-line lg:h-10 lg:w-10"
              style={{ background: color }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

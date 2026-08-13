"use client";

import { motion } from "motion/react";
import { Photo } from "@/components/photo";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { weddingConfig } from "@/lib/wedding-config";

const tileShapes = ["aspect-3/4", "aspect-square", "aspect-4/5", "aspect-3/4"];

function splitColumns(photos: string[], columns: number) {
  return Array.from({ length: columns }, (_, col) => photos.filter((_, i) => i % columns === col));
}

function AlbumColumn({ photos, offset, startIndex }: { photos: string[]; offset: number; startIndex: number }) {
  return (
    <div className="flex flex-col gap-2 lg:gap-4">
      {photos.map((src, i) => (
        <RevealItem key={src}>
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Photo
              src={src}
              alt={`Ảnh cưới ${startIndex + i + 1}`}
              className={`${tileShapes[(offset + i) % tileShapes.length]} rounded`}
            />
          </motion.div>
        </RevealItem>
      ))}
    </div>
  );
}

export function Album() {
  const mobileColumns = splitColumns(weddingConfig.photos.album, 2);
  const desktopColumns = splitColumns(weddingConfig.photos.album, 3);

  return (
    <section className="px-7 py-8.5 text-center lg:py-16">
      <Reveal className="mb-5 flex items-center justify-center gap-3 lg:mb-10">
        <span
          className="font-display flex h-9 w-9 -rotate-6 items-center justify-center rounded-sm text-base text-accent-soft shadow-md lg:h-12 lg:w-12 lg:text-lg"
          style={{ background: "linear-gradient(155deg, #9a4a35, #5c281d 75%)" }}
        >
          囍
        </span>
        <h3 className="font-script text-[34px] leading-none text-accent lg:text-6xl">The Album</h3>
      </Reveal>

      <RevealStagger className="grid grid-cols-2 gap-2 lg:hidden">
        {mobileColumns.map((photos, col) => (
          <AlbumColumn key={col} photos={photos} offset={col} startIndex={col} />
        ))}
      </RevealStagger>

      <RevealStagger className="mx-auto hidden max-w-4xl grid-cols-3 gap-4 lg:grid">
        {desktopColumns.map((photos, col) => (
          <AlbumColumn key={col} photos={photos} offset={col} startIndex={col} />
        ))}
      </RevealStagger>
    </section>
  );
}

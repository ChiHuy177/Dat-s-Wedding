"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlbumFilmstrip } from "@/components/album-filmstrip";
import { Photo } from "@/components/photo";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { weddingConfig } from "@/lib/wedding-config";

const PREVIEW_COUNT = 4;

/** Sub-block of the love story section — the preview grid opens a film strip. */
export function Album() {
  const photos = weddingConfig.photos.album;
  const [openAt, setOpenAt] = useState<number | null>(null);

  const preview = photos.slice(0, PREVIEW_COUNT);
  const hiddenCount = photos.length - PREVIEW_COUNT;

  return (
    <>
      <Reveal>
        <SectionHeading vi="Album ảnh" en="Photo gallery" />
      </Reveal>

      <RevealStagger className="mt-8 grid grid-cols-2 gap-2.5 lg:mt-11 lg:gap-4">
        {preview.map((src, i) => {
          const isLast = i === PREVIEW_COUNT - 1 && hiddenCount > 0;

          return (
            <RevealItem key={src}>
              <motion.button
                type="button"
                onClick={() => setOpenAt(i)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                aria-label={isLast ? `Xem tất cả ${photos.length} ảnh` : `Xem ảnh ${i + 1}`}
                className="relative block w-full cursor-pointer overflow-hidden rounded"
              >
                <Photo
                  src={src}
                  alt={`Ảnh cưới ${i + 1}`}
                  className="aspect-4/5 w-full"
                  sizes="(min-width: 1024px) 280px, 45vw"
                />

                {isLast && (
                  <span className="font-display absolute inset-0 flex items-center justify-center bg-deep-2/55 text-2xl text-white backdrop-blur-[1px] lg:text-3xl">
                    +{hiddenCount}
                  </span>
                )}
              </motion.button>
            </RevealItem>
          );
        })}
      </RevealStagger>

      <Reveal className="mt-5 text-center lg:mt-7">
        <button
          type="button"
          onClick={() => setOpenAt(0)}
          className="font-body text-[10.5px] tracking-[0.12em] text-ink-soft uppercase underline underline-offset-4 transition-colors hover:text-ink lg:text-[11.5px]"
        >
          Xem cuộn phim / View film strip
        </button>
      </Reveal>

      <AnimatePresence>
        {openAt !== null && (
          <AlbumFilmstrip photos={photos} startIndex={openAt} onClose={() => setOpenAt(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

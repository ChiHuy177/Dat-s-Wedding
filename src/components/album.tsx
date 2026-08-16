import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { weddingConfig } from "@/lib/wedding-config";

export function Album() {
  const { groom, bride } = weddingConfig;

  return (
    <Section tone="light">
      <Reveal>
        <SectionHeading en="Photo gallery" vi="Album ảnh" />
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 w-72 lg:mt-11 lg:w-96">
        {/* eslint-disable-next-line @next/next/no-img-element -- flattened floral-wreath export */}
        <img src="/decor/album/album-1.png" alt={`${groom} & ${bride}`} className="w-full" />
      </Reveal>

      <Reveal delay={0.2} className="relative mx-auto mt-10 w-80 lg:mt-14 lg:w-108">
        <div className="relative" style={{ aspectRatio: "320 / 440" }}>
          {/* Sparkle accents echo the corner marks in the Hero frame. */}
          <span
            aria-hidden
            className="absolute top-[4%] right-[10%] size-2.5 rotate-45 border border-heading/60 lg:size-3"
          />
          <span
            aria-hidden
            className="absolute bottom-[6%] left-[6%] size-2 rotate-45 border border-heading/60 lg:size-2.5"
          />

          <div className="absolute top-0 left-0 w-[70%] -rotate-2 rounded-full p-2 ring-1 ring-heading/25">
            {/* eslint-disable-next-line @next/next/no-img-element -- flattened circular photo export */}
            <img src="/decor/album/album-2.png" alt={`${groom} & ${bride}`} className="w-full rounded-full" />
          </div>
          <div className="absolute right-0 bottom-0 w-[78%] rotate-2 rounded-full p-2 ring-1 ring-heading/25">
            {/* eslint-disable-next-line @next/next/no-img-element -- flattened circular photo export */}
            <img src="/decor/album/album-3.png" alt={`${groom} & ${bride}`} className="w-full rounded-full" />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

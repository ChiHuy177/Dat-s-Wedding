import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { weddingConfig } from "@/lib/wedding-config";

export function Hero() {
  const { groom, bride, dateParts } = weddingConfig;
  const dateSpaced = weddingConfig.weddingDateShort.split(".").join(" . ");

  return (
    <section id="hero" className="relative overflow-hidden bg-paper px-6 pt-16 pb-14 text-center lg:pt-24 lg:pb-20">
      <Reveal>
        <SectionHeading en="The Wedding" vi="Đám Cưới" />
      </Reveal>

      <Reveal delay={0.1} className="relative mx-auto mt-6 w-72 lg:mt-9 lg:w-108">
        {/* eslint-disable-next-line @next/next/no-img-element -- flattened Figma export (frame + photo + florals), not an optimizable photo */}
        <img src="/decor/hero/mockup.png" alt={`${groom} & ${bride}`} className="w-full" />
      </Reveal>

      <Reveal delay={0.2} className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-2 lg:mt-12 lg:gap-4">
        <div className="font-display justify-self-end text-center text-[22px] leading-tight text-heading lg:text-[34px]">
          {groom.split(" ").map((word) => (
            <p key={word}>{word}</p>
          ))}
        </div>
        <div className="text-heading">
          <p className="font-display text-[22px] leading-none lg:text-[34px]">&amp;</p>
          <p className="mt-1.5 text-[13px] lg:text-[15px]">{dateParts.weekday}</p>
          <p className="text-[13px] lg:text-[15px]">{dateSpaced}</p>
        </div>
        <div className="font-display justify-self-start text-center text-[22px] leading-tight text-heading lg:text-[34px]">
          {bride.split(" ").map((word) => (
            <p key={word}>{word}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

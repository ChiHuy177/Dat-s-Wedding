import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { weddingConfig } from "@/lib/wedding-config";

export function Hero() {
  const src = weddingConfig.photos.hero;

  return (
    <section
      id="hero"
      className="relative flex h-dvh min-h-140 w-full items-center justify-center overflow-hidden bg-deep lg:h-screen"
    >
      <div className="relative h-full w-full lg:aspect-1772/2480 lg:h-full lg:w-auto">
        {src ? (
          <Image
            src={src}
            alt={`${weddingConfig.groom} và ${weddingConfig.bride}`}
            fill
            priority
            sizes="(min-width: 1024px) 90vh, 100vw"
            className="object-cover"
            style={{ objectPosition: "50% 18%" }}
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-deep-2 to-deep" />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/5" />

        <div className="absolute inset-x-0 bottom-0 px-7 pb-12 text-white lg:px-10 lg:pb-14">
          <Reveal>
            <p className="font-body mb-3 text-[10.5px] font-bold tracking-[0.2em] text-white/80 uppercase lg:text-xs">
              Trân trọng kính mời
            </p>
            <p className="font-script text-[clamp(44px,14vw,68px)] leading-[1.15] lg:text-8xl">
              {weddingConfig.groom}
              <em className="my-0.5 block text-[0.5em] text-accent-soft not-italic lg:my-2">and</em>
              {weddingConfig.bride}
            </p>
            <p className="font-body mt-4 text-[11.5px] tracking-[0.22em] text-white/80 uppercase lg:mt-6 lg:text-xs">
              {weddingConfig.weddingDateLabel}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

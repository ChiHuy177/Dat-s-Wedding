import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { weddingConfig } from "@/lib/wedding-config";

type PortraitRowProps = {
  src: string;
  alt: string;
  label: string;
  name: string;
  order: string;
  /** Bride's row mirrors the groom's: caption on the left, polaroid on the right. */
  flip?: boolean;
};

/** Portrait already comes pre-tilted with its own white border/shadow baked in — just place it. */
function PortraitRow({ src, alt, label, name, order, flip = false }: PortraitRowProps) {
  // eslint-disable-next-line @next/next/no-img-element -- flattened polaroid export (border + shadow + tilt baked in)
  const portrait = <img src={src} alt={alt} className="w-40 shrink-0 lg:w-52" />;

  const caption = (
    <div className={flip ? "text-right" : "text-left"}>
      <p className="font-display text-[24px] text-heading italic lg:text-[30px]">{label}</p>
      <p className="font-display mt-1 text-[15px] text-heading lg:text-[18px]">{name}</p>
      <p
        className={`font-script mt-3 text-[30px] leading-[0.85] text-heading lg:text-[38px] ${flip ? "-rotate-3" : "rotate-3"}`}
      >
        {order.split(" ").map((word) => (
          <span key={word} className="block">
            {word}
          </span>
        ))}
      </p>
    </div>
  );

  return (
    <RevealItem className={`relative z-10 flex items-center gap-5 lg:gap-8 ${flip ? "flex-row-reverse" : ""}`}>
      {portrait}
      {caption}
    </RevealItem>
  );
}

export function LoveStory() {
  const { groomFamily, brideFamily, photos } = weddingConfig;

  return (
    <Section tone="light">
      <Reveal>
        <SectionHeading en="The Story of Love" vi="Chuyện tình của chúng mình" />
      </Reveal>

      <div className="relative mt-10 lg:mt-14">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative floral, sits behind the portraits */}
        <img
          src="/the-story-of-love/decor-groom.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-10 -left-10 z-0 w-40 lg:-top-14 lg:-left-14 lg:w-56"
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative floral, sits behind the portraits */}
        <img
          src="/the-story-of-love/decor-bride.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-8 -bottom-10 z-0 w-28 lg:-right-10 lg:-bottom-14 lg:w-40"
        />

        <RevealStagger className="flex flex-col gap-10 lg:gap-14">
          <PortraitRow
            src={photos.groomPortrait}
            alt={groomFamily.child.name}
            label="Groom"
            name={groomFamily.child.name}
            order={groomFamily.child.order}
          />
          <PortraitRow
            src={photos.bridePortrait}
            alt={brideFamily.child.name}
            label="Bride"
            name={brideFamily.child.name}
            order={brideFamily.child.order}
            flip
          />
        </RevealStagger>
      </div>

      <Reveal className="mt-10 text-center lg:mt-14">
        <p className="mx-auto max-w-md text-[13px] leading-relaxed text-ink lg:text-[15px]">
          {weddingConfig.loveStory}
        </p>
      </Reveal>
    </Section>
  );
}

import { Album } from "@/components/album";
import { Countdown } from "@/components/countdown";
import { Photo } from "@/components/photo";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading, Divider } from "@/components/section-heading";
import { weddingConfig } from "@/lib/wedding-config";

type PortraitRowProps = {
  src?: string;
  alt: string;
  order: string;
  orderEn: string;
  name: string;
  /** Bride's row mirrors the groom's: name on the left, portrait on the right. */
  flip?: boolean;
};

/** Portrait and name sit in two equal columns, squared up so the pair reads as parallel. */
function PortraitRow({ src, alt, order, orderEn, name, flip = false }: PortraitRowProps) {
  const portrait = (
    <div className="justify-self-center rounded-sm border border-line bg-surface p-2 pb-5 shadow-md lg:p-2.5 lg:pb-7">
      <Photo
        src={src}
        alt={alt}
        label="Ảnh"
        className="h-42 w-30 lg:h-62 lg:w-44"
        sizes="(min-width: 1024px) 176px, 120px"
      />
    </div>
  );

  const caption = (
    <div className={flip ? "text-right" : "text-left"}>
      <p className="font-body text-[9px] tracking-[0.16em] text-ink-soft uppercase lg:text-[10.5px]">
        {order} / {orderEn}
      </p>
      <p className="font-display mt-2 text-[24px] leading-tight text-ink lg:text-4xl">{name}</p>
      <span className={`mt-3 block h-px w-10 bg-accent lg:w-14 ${flip ? "ml-auto" : ""}`} />
    </div>
  );

  return (
    <RevealItem className="grid grid-cols-2 items-center gap-5 lg:gap-9">
      {flip ? (
        <>
          {caption}
          {portrait}
        </>
      ) : (
        <>
          {portrait}
          {caption}
        </>
      )}
    </RevealItem>
  );
}

export function LoveStory() {
  const { groomFamily, brideFamily, photos } = weddingConfig;

  return (
    <Section tone="light">
      <Reveal>
        <SectionHeading vi="Chuyện tình của chúng mình" en="The story of love" />
      </Reveal>

      <RevealStagger className="mt-9 flex flex-col gap-8 lg:mt-14 lg:gap-12">
        <PortraitRow
          src={photos.groomPortrait}
          alt={groomFamily.child.name}
          order={groomFamily.child.order}
          orderEn={groomFamily.child.orderEn}
          name={weddingConfig.groom}
        />
        <PortraitRow
          src={photos.bridePortrait}
          alt={brideFamily.child.name}
          order={brideFamily.child.order}
          orderEn={brideFamily.child.orderEn}
          name={weddingConfig.bride}
          flip
        />
      </RevealStagger>

      <Reveal className="mt-10 text-center lg:mt-14">
        <p className="mx-auto max-w-md text-[13px] leading-relaxed text-ink lg:text-[15px]">
          {weddingConfig.loveStory}
        </p>
      </Reveal>

      <Divider />
      <Countdown />

      <Divider />
      <Album />
    </Section>
  );
}

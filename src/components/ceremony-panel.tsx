import { Countdown } from "@/components/countdown";
import { DateBlock } from "@/components/date-block";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { weddingConfig } from "@/lib/wedding-config";

/** "Ông Lê Quang Hưng" → "Ông" + "Lê Quang Hưng", rendered as "Ông: Lê Quang Hưng". */
function ParentLine({ name }: { name: string }) {
  const [title, ...rest] = name.split(" ");
  return (
    <p>
      {title}: {rest.join(" ")}
    </p>
  );
}

/** Who's marrying whom — parents, hometown, read as one block per side. */
function FamilyBlock({ family }: { family: typeof weddingConfig.groomFamily }) {
  return (
    <RevealItem>
      <p className="font-display text-[19px] text-heading lg:text-[23px]">{family.label}</p>
      <div className="font-display mt-1.5 space-y-0.5 text-[14px] leading-snug text-heading lg:text-[16px]">
        {family.parents.map((name) => (
          <ParentLine key={name} name={name} />
        ))}
      </div>
      <p className="font-display mt-1.5 text-[14px] text-heading lg:text-[16px]">{family.address}</p>
    </RevealItem>
  );
}

/**
 * Ceremony Info — who's marrying, the countdown, and when/where the
 * ceremony itself (at the family home) takes place. Light card, same as
 * every other section in the reference invitation.
 */
export function CeremonyPanel() {
  const { groomFamily, brideFamily, ceremony } = weddingConfig;

  return (
    <Section id="ceremony" tone="light">
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative floral sprig */}
      <img
        src="/decor/ceremony-info/flower-left.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-13 -left-6 w-24 lg:-top-14 lg:-left-8 lg:w-32"
      />
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative floral sprig */}
      <img
        src="/decor/ceremony-info/flower-right.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-5 -right-6 w-28 lg:-top-6 lg:-right-8 lg:w-36"
      />

      <Reveal className="flex items-center justify-center gap-3 text-heading">
        <span className="h-px w-10 bg-heading/50 lg:w-14" />
        <svg viewBox="0 0 24 24" className="size-4 lg:size-5" fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M12 20.5s-8-5.1-8-11.2C4 5.9 6.2 4 8.7 4c1.6 0 3 .8 3.8 2.1.8-1.3 2.2-2.1 3.8-2.1 2.5 0 4.7 1.9 4.7 5.3 0 6.1-8 11.2-8 11.2Z" />
        </svg>
        <span className="h-px w-10 bg-heading/50 lg:w-14" />
      </Reveal>

      <div className="mt-3">
        <SectionHeading en="Ceremony Info" vi="Thông tin Lễ Cưới" />
      </div>

      <RevealStagger className="relative mt-9 grid grid-cols-2 gap-5 text-center lg:mt-12 lg:gap-10">
        <FamilyBlock family={groomFamily} />
        <FamilyBlock family={brideFamily} />
      </RevealStagger>

      <Reveal delay={0.1} className="mx-auto mt-6 w-40 lg:mt-8 lg:w-52">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative floral sprig */}
        <img src="/decor/ceremony-info/flower-center.png" alt="" aria-hidden className="w-full" />
      </Reveal>

      <Reveal className="mt-6 text-center lg:mt-10">
        <p className="font-display text-[15px] text-heading lg:text-[18px]">Trân trọng báo tin</p>
        <p className="font-display text-[15px] text-heading lg:text-[18px]">Lễ thành hôn của con chúng tôi</p>
      </Reveal>

      <div className="mt-10 lg:mt-14">
        <Countdown />
      </div>

      <Reveal className="mt-10 text-center lg:mt-14">
        <p className="font-display text-[16px] text-heading lg:text-[19px]">Lễ thành hôn được cử hành tại</p>
        <p className="font-display mt-2 text-[30px] text-heading lg:text-[40px]">{ceremony.venue}</p>

        <p className="font-display mt-6 text-[16px] text-heading lg:text-[19px]">Vào lúc / At</p>
        <p className="font-display mt-1 text-[42px] leading-none text-heading lg:text-[56px]">{ceremony.time}</p>

        <div className="mt-6">
          <DateBlock />
        </div>
      </Reveal>
    </Section>
  );
}

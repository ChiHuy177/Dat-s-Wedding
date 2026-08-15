import { DateBlock } from "@/components/date-block";
import { LeafDecor } from "@/components/leaf-decor";
import { MiniCalendar } from "@/components/mini-calendar";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { Schedule } from "@/components/schedule";
import { Section } from "@/components/section";
import { SectionHeading, Divider } from "@/components/section-heading";
import { weddingConfig } from "@/lib/wedding-config";

/**
 * The dark green heart of the invitation. Everything a guest needs — who is
 * marrying, when, where, and the running order — lives in one continuous block.
 */
export function CeremonyPanel() {
  const { groomFamily, brideFamily, ceremony, reception } = weddingConfig;
  const mapQuery = encodeURIComponent(`${reception.venue}, ${reception.address}`);

  return (
    <Section id="ceremony" tone="dark">
      <LeafDecor corner="top-left" className="text-cream" opacity={0.14} />
      <LeafDecor corner="bottom-right" className="text-cream" opacity={0.14} />

      <Reveal>
        <SectionHeading vi="Thông tin lễ cưới" en="Ceremony info" onDark />
      </Reveal>

      {/* Two families */}
      <RevealStagger className="mt-9 grid grid-cols-2 gap-5 text-center lg:mt-12 lg:gap-10">
        {[groomFamily, brideFamily].map((side) => (
          <RevealItem key={side.label}>
            <p className="font-body text-[9px] tracking-[0.16em] text-cream/55 uppercase lg:text-[10.5px]">
              Ông Bà / Mr. &amp; Mrs.
            </p>
            <div className="font-display mt-2.5 space-y-0.5 text-[15px] leading-snug lg:text-lg">
              {side.parents.map((name) => (
                <p key={name}>{name}</p>
              ))}
            </div>
            <p className="font-body mt-2 text-[10.5px] text-cream/60 lg:text-xs">{side.address}</p>
          </RevealItem>
        ))}
      </RevealStagger>

      {/* Announcement */}
      <Reveal className="mt-10 text-center lg:mt-14">
        <p className="font-body text-[11px] tracking-[0.14em] uppercase lg:text-[13px]">Trân trọng báo tin</p>
        <p className="font-body mt-1 text-[11px] tracking-[0.14em] uppercase lg:text-[13px]">
          Lễ thành hôn của con chúng tôi
        </p>
        <p className="font-body mt-2.5 text-[9px] tracking-[0.14em] text-cream/50 uppercase lg:text-[10.5px]">
          We joyfully announce
          <br />
          the wedding of our children
        </p>
      </Reveal>

      {/* The couple */}
      <RevealStagger className="mt-9 text-center lg:mt-12">
        <RevealItem>
          <p className="font-display text-[30px] leading-tight lg:text-5xl">{groomFamily.child.name}</p>
          <p className="font-body mt-1.5 text-[9px] tracking-[0.18em] text-cream/55 uppercase lg:text-[10.5px]">
            {groomFamily.child.order} / {groomFamily.child.orderEn}
          </p>
        </RevealItem>
        <RevealItem>
          <p className="font-script my-4 text-3xl leading-none text-accent-soft lg:my-6 lg:text-5xl">&amp;</p>
        </RevealItem>
        <RevealItem>
          <p className="font-display text-[30px] leading-tight lg:text-5xl">{brideFamily.child.name}</p>
          <p className="font-body mt-1.5 text-[9px] tracking-[0.18em] text-cream/55 uppercase lg:text-[10.5px]">
            {brideFamily.child.order} / {brideFamily.child.orderEn}
          </p>
        </RevealItem>
      </RevealStagger>

      {/* Ceremony — at the family home */}
      <Reveal className="mt-10 text-center lg:mt-14">
        <p className="font-body text-[10px] tracking-[0.14em] text-cream/70 uppercase lg:text-[11.5px]">
          Lễ thành hôn được cử hành tại
        </p>
        <p className="font-display mt-2 text-xl lg:text-2xl">{ceremony.venue}</p>
        <p className="font-body mt-1 text-[9px] tracking-[0.14em] text-cream/50 uppercase lg:text-[10.5px]">
          Wedding ceremony at {ceremony.venueEn}
        </p>

        <p className="font-body mt-6 text-[10px] tracking-[0.14em] text-cream/70 uppercase lg:text-[11.5px]">
          Vào lúc / At
        </p>
        <p className="font-display mt-1.5 mb-6 text-[34px] leading-none lg:text-5xl">{ceremony.time}</p>

        <DateBlock />
      </Reveal>

      <Divider onDark />

      {/* Reception */}
      <Reveal>
        <SectionHeading vi="Thông tin tiệc cưới" en="Reception info" onDark />
      </Reveal>

      <Reveal className="mt-8 text-center lg:mt-11">
        <p className="font-body text-[10px] tracking-[0.14em] text-cream/70 uppercase lg:text-[11.5px]">
          Tiệc cưới sẽ diễn ra vào lúc
        </p>
        <p className="font-body mt-1 text-[9px] tracking-[0.14em] text-cream/50 uppercase lg:text-[10.5px]">
          The reception will take place at
        </p>
        <p className="font-display mt-3 mb-6 text-[34px] leading-none lg:text-5xl">{reception.startTime}</p>

        <DateBlock />

        <div className="mt-7 flex justify-center gap-9 lg:mt-9 lg:gap-14">
          {[
            { vi: "Đón khách", en: "Welcome", time: reception.welcomeTime },
            { vi: "Khai tiệc", en: "Reception", time: reception.startTime },
          ].map((slot) => (
            <div key={slot.vi}>
              <p className="font-body text-[9px] tracking-[0.14em] text-cream/55 uppercase lg:text-[10.5px]">
                {slot.vi} / {slot.en}
              </p>
              <p className="font-display mt-1.5 text-xl lg:text-2xl">{slot.time}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-9 lg:mt-12">
        <MiniCalendar />
      </Reveal>

      <Divider onDark />

      {/* Venue + map */}
      <Reveal>
        <SectionHeading vi="Tiệc cưới sẽ tổ chức tại" en="Wedding reception venue" onDark />
        <p className="font-display mt-5 text-center text-xl lg:text-2xl">{reception.venue}</p>
        <p className="font-body mx-auto mt-2 max-w-sm text-center text-[11.5px] leading-relaxed text-cream/65 lg:text-[13px]">
          {reception.address}
        </p>

        <div className="mt-6 aspect-4/3 w-full overflow-hidden rounded-md border border-cream/25 lg:aspect-16/9">
          <iframe
            title="Bản đồ địa điểm tổ chức tiệc cưới"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href={reception.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body mt-4 block text-center text-[10.5px] tracking-[0.1em] text-cream/75 uppercase underline underline-offset-4 transition-colors hover:text-cream lg:text-[11.5px]"
        >
          Mở Google Maps / Open in Maps
        </a>
      </Reveal>

      <Divider onDark />

      {/* Running order */}
      <Reveal className="mb-8 lg:mb-11">
        <SectionHeading vi="Lịch trình ngày cưới" en="Wedding day schedule" onDark />
      </Reveal>
      <Schedule />
    </Section>
  );
}

import { DateBlock } from "@/components/date-block";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { weddingConfig } from "@/lib/wedding-config";

/**
 * Reception info — when the party starts, the welcome/opening times, and the
 * venue. Sits right after Ceremony Info, same light card.
 */
export function Schedule() {
  const { reception } = weddingConfig;

  const slots = [
    { vi: "Đón khách", en: "Welcome", time: reception.welcomeTime },
    { vi: "Khai tiệc", en: "Reception", time: reception.startTime },
  ];

  return (
    <Section id="reception" tone="light">
      <Reveal>
        <p className="font-display text-center text-[17px] text-heading lg:text-[20px]">
          Thông tin tiệc cưới
        </p>
      </Reveal>

      <div className="relative mt-8 lg:mt-11">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative vertical flourish */}
        <img
          src="/decor/ceremony-info/gate.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-3 lg:w-4"
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative vertical flourish, mirrored */}
        <img
          src="/decor/ceremony-info/gate.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-3 -scale-x-100 lg:w-4"
        />

        <Reveal className="text-center">
          <p className="font-display text-[16px] text-heading lg:text-[19px]">Vào lúc / At</p>
          <p className="font-display mt-1 text-[42px] leading-none text-heading lg:text-[56px]">
            {reception.startTime}
          </p>

          <div className="mt-6">
            <DateBlock />
          </div>

          <div className="mt-8 flex justify-center gap-10 lg:mt-11 lg:gap-16">
            {slots.map((slot) => (
              <div key={slot.vi}>
                <p className="font-display text-[16px] text-heading lg:text-[19px]">{slot.vi}</p>
                <p className="font-display mt-1.5 text-[20px] text-heading lg:text-[24px]">{slot.time}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-10 text-center lg:mt-14">
        <p className="font-display text-[22px] text-heading lg:text-[26px]">{reception.venue}</p>
        <p className="mx-auto mt-2 max-w-xs text-[13px] leading-relaxed text-ink lg:text-[14px]">
          {reception.address}
        </p>
      </Reveal>

      <Reveal className="mt-6 text-center lg:mt-8">
        <a
          href={reception.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-[11px] tracking-[0.1em] text-ink-soft uppercase underline underline-offset-4 transition-colors hover:text-ink lg:text-[12px]"
        >
          Mở Google Maps / Open in Maps
        </a>
      </Reveal>
    </Section>
  );
}

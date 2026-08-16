import Image from "next/image";
import { DateBlock } from "@/components/date-block";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { weddingConfig } from "@/lib/wedding-config";

/**
 * Reception info — when the party starts, the welcome/opening times, and a
 * couple of venue photos. Sits right after Ceremony Info, same light card.
 */
export function Schedule() {
  const { reception, photos } = weddingConfig;
  const venuePhotos = [photos.album[0], photos.album[1]];

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

      <Reveal className="mt-8 text-center lg:mt-11">
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

      <RevealStagger className="mt-10 space-y-4 lg:mt-14">
        <RevealItem className="relative aspect-16/9 w-full overflow-hidden rounded-sm">
          <Image
            src={venuePhotos[0]}
            alt={reception.venue}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </RevealItem>

        <RevealItem className="text-center">
          <p className="font-display text-[22px] text-heading lg:text-[26px]">{reception.venue}</p>
          <p className="mx-auto mt-2 max-w-xs text-[13px] leading-relaxed text-ink lg:text-[14px]">
            {reception.address}
          </p>
        </RevealItem>

        <RevealItem className="relative aspect-4/3 w-full overflow-hidden rounded-sm">
          <Image
            src={venuePhotos[1]}
            alt={reception.venue}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </RevealItem>
      </RevealStagger>

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

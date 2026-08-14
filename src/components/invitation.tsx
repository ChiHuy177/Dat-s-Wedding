import { Reveal } from "@/components/reveal";
import { weddingConfig } from "@/lib/wedding-config";

export function Invitation() {
  return (
    <section className="border-y border-line bg-paper/80 px-7 py-9 text-center backdrop-blur-sm lg:py-16">
      <Reveal className="mx-auto max-w-xl">
        <p className="font-body mb-5.5 text-xs leading-relaxed tracking-wide text-ink-soft uppercase lg:text-sm">
          Trân trọng kính mời bạn tới tham dự bữa tiệc cưới cùng gia đình chúng tôi
        </p>
        <p className="font-display mb-5.5 text-[26px] leading-snug lg:text-4xl">
          {weddingConfig.groom} <em className="font-script mx-0.5 text-[1.3em] text-accent not-italic">&amp;</em>{" "}
          {weddingConfig.bride}
        </p>
        <div className="font-body mb-5 inline-flex items-center gap-3.5 rounded-[10px] border border-line px-5 py-3 text-[13.5px] font-semibold lg:px-7 lg:py-4 lg:text-base">
          <span>{weddingConfig.ceremony.time}</span>
        </div>
        <p className="font-body mb-5 text-[13.5px] leading-relaxed text-ink-soft lg:text-base">
          {weddingConfig.ceremony.venue}
          <br />
          {weddingConfig.ceremony.address}
        </p>
        <a
          href={weddingConfig.ceremony.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body inline-block rounded-full bg-highlight px-6.5 py-2.5 text-[12.5px] font-bold tracking-[0.06em] text-surface uppercase transition-opacity hover:opacity-85 lg:px-8 lg:py-3.5 lg:text-sm"
        >
          Xem chỉ đường
        </a>
      </Reveal>
    </section>
  );
}

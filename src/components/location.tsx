import { Reveal } from "@/components/reveal";
import { weddingConfig } from "@/lib/wedding-config";

export function Location() {
  const query = encodeURIComponent(`${weddingConfig.ceremony.venue}, ${weddingConfig.ceremony.address}`);

  return (
    <section className="bg-paper/80 px-7 py-8.5 text-center backdrop-blur-sm lg:py-16">
      <Reveal className="mx-auto max-w-2xl">
        <p className="font-script mb-5 text-4xl leading-none text-accent lg:mb-8 lg:text-6xl">Chỉ đường</p>
        <div className="mb-5 aspect-4/3 w-full overflow-hidden rounded-lg border border-line shadow-md lg:mb-7 lg:aspect-16/7">
          <iframe
            title="Bản đồ địa điểm tổ chức"
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href={weddingConfig.ceremony.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body inline-block rounded-full bg-highlight px-6.5 py-2.5 text-[12.5px] font-bold tracking-[0.06em] text-surface uppercase transition-opacity hover:opacity-85 lg:px-8 lg:py-3.5 lg:text-sm"
        >
          Mở Google Maps
        </a>
      </Reveal>
    </section>
  );
}

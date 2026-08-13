import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { weddingConfig } from "@/lib/wedding-config";

export function LoveStory() {
  return (
    <section className="mt-2 lg:mt-4 lg:grid lg:grid-cols-2 lg:items-center">
      <Reveal className="px-7 pt-8 pb-6 text-center lg:px-16 lg:py-10 lg:text-left">
        <p className="font-script mb-1 text-[40px] leading-none text-accent lg:text-6xl">Our Love Story</p>
        <p className="mx-auto max-w-85 text-sm leading-relaxed text-ink-soft lg:mx-0 lg:max-w-md lg:text-base">
          {weddingConfig.loveStory}
        </p>
      </Reveal>
      <Photo
        src={weddingConfig.photos.loveStory}
        alt="Kỷ niệm của hai bạn"
        className="h-70 w-full lg:h-125"
        objectPosition="50% 20%"
      />
    </section>
  );
}

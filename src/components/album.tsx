import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { weddingConfig } from "@/lib/wedding-config";

// Intrinsic pixel size of each album photo, so next/image can lay it out at
// its natural aspect ratio in the masonry grid below (no cropping/zooming).
const GALLERY = [
  { src: "/img/album-01.jpg", width: 1772, height: 2480 },
  { src: "/img/album-02.jpg", width: 1772, height: 2480 },
  { src: "/img/album-03.jpg", width: 1772, height: 2480 },
  { src: "/img/album-04.jpg", width: 1772, height: 2480 },
  { src: "/img/album-05.jpg", width: 1772, height: 2480 },
  { src: "/img/album-06.jpg", width: 1772, height: 2480 },
  { src: "/img/album-07.jpg", width: 1772, height: 2480 },
  { src: "/img/album-08.jpg", width: 1772, height: 2480 },
  { src: "/img/album-09.jpg", width: 1772, height: 2480 },
  { src: "/img/album-10.jpg", width: 1707, height: 2560 },
  { src: "/img/album-11.jpg", width: 1707, height: 2560 },
  { src: "/img/album-12.jpg", width: 1772, height: 2480 },
];

// Mobile grid indices that go full-width — irregular on purpose (0, 3, 7, 9),
// so the rhythm doesn't read as a repeating pattern.
const MOBILE_SPAN = new Set([0, 3, 7, 9]);

export function Album() {
  const { groom, bride } = weddingConfig;

  return (
    <Section tone="light">
      <Reveal>
        <SectionHeading en="Photo gallery" vi="Album ảnh" />
      </Reveal>

      <Reveal delay={0.1} className="mt-8 w-screen mx-[calc(50%-50vw)] lg:mt-11">
        {/* eslint-disable-next-line @next/next/no-img-element -- flattened floral-wreath export */}
        <img src="/decor/album/album-1.png" alt={`${groom} & ${bride}`} className="w-full" />
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-10 w-80 lg:mt-14 lg:w-108">
        {/* eslint-disable-next-line @next/next/no-img-element -- flattened photo export */}
        <img src="/decor/album/album-2.png" alt={`${groom} & ${bride}`} className="w-full" />
      </Reveal>

      <RevealStagger className="mt-12 grid grid-flow-dense grid-cols-2 gap-3 lg:mt-16 lg:block lg:columns-3 lg:gap-4">
        {GALLERY.map((photo, i) => (
          <RevealItem
            key={photo.src}
            className={`overflow-hidden rounded-sm lg:mb-4 lg:break-inside-avoid ${MOBILE_SPAN.has(i) ? "col-span-2" : ""}`}
          >
            <Image
              src={photo.src}
              alt={`${groom} & ${bride}`}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="h-auto w-full"
            />
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}

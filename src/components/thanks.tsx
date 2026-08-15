import { Heart } from "@/components/heart";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export function Thanks() {
  return (
    <Section tone="dark">
      <Reveal className="text-center">
        <p className="font-script mb-1 text-4xl leading-none text-accent-soft lg:mb-2 lg:text-6xl">Thank You</p>
        <p className="font-body mb-5 text-[9px] tracking-[0.16em] text-cream/55 uppercase lg:text-[10.5px]">
          Cảm ơn / Thank you
        </p>
        <p className="font-body mx-auto mb-9 max-w-md text-[13px] leading-relaxed text-cream/80 lg:mb-12 lg:text-[15px]">
          Sự hiện diện của bạn là món quà quý giá nhất với chúng mình. Hẹn gặp bạn trong ngày trọng đại!
        </p>

        {/* Author mark */}
        <span className="mx-auto mb-5 block h-px w-12 bg-cream/25 lg:w-16" />
        <p className="font-body flex items-center justify-center gap-1.5 text-[9.5px] tracking-[0.16em] text-cream/50 uppercase lg:text-[11px]">
          From IIC 4.0 with love
          <Heart className="h-2.5 w-2.5 text-accent-soft lg:h-3 lg:w-3" />
        </p>
      </Reveal>
    </Section>
  );
}

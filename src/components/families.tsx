import { RevealStagger, RevealItem } from "@/components/reveal";
import { weddingConfig } from "@/lib/wedding-config";

export function Families() {
  const { groomFamily, brideFamily } = weddingConfig;
  return (
    <RevealStagger className="mx-auto grid max-w-3xl grid-cols-2 gap-px bg-line">
      {[groomFamily, brideFamily].map((side) => (
        <RevealItem key={side.label} className="bg-surface/90 px-4.5 py-5.5 text-center backdrop-blur-sm lg:py-10">
          <h4 className="font-body mb-2.5 text-[10px] font-bold tracking-[0.14em] text-accent uppercase lg:text-xs">
            {side.label}
          </h4>
          <p className="text-[13.5px] leading-relaxed lg:text-base">
            {side.parents.map((name, i) => (
              <span key={name}>
                {name}
                {i < side.parents.length - 1 && <br />}
              </span>
            ))}
          </p>
        </RevealItem>
      ))}
    </RevealStagger>
  );
}

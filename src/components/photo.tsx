import Image from "next/image";

type PhotoProps = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
};

export function Photo({
  src,
  alt,
  label,
  className = "",
  priority = false,
  objectPosition = "center",
}: PhotoProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-end justify-center bg-linear-to-br from-deep-2 to-deep ${className}`}
    >
      <span className="mb-4 rounded-full border border-dashed border-white/50 px-3.5 py-1.5 text-[11px] tracking-widest text-white/85 uppercase">
        {label ?? "Ảnh cưới của bạn"}
      </span>
    </div>
  );
}

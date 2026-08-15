"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { MAX_WISH_MESSAGE, MAX_WISH_NAME, type Wish } from "@/lib/wishes";

export function Guestbook() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  // Refresh after a successful post. Called from an event handler, never an effect.
  const loadWishes = useCallback(async () => {
    try {
      const res = await fetch("/api/wishes");
      if (!res.ok) return;
      const data = (await res.json()) as { wishes?: Wish[] };
      setWishes(data.wishes ?? []);
    } catch {
      // leave the list as-is — the form still works
    }
  }, []);

  useEffect(() => {
    let active = true;

    fetch("/api/wishes")
      .then((res) => (res.ok ? (res.json() as Promise<{ wishes?: Wish[] }>) : { wishes: [] }))
      .then((data) => {
        if (!active) return;
        setWishes(data.wishes ?? []);
        setLoaded(true);
      })
      .catch(() => {
        if (active) setLoaded(true);
      });

    return () => {
      active = false;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("loading");
    try {
      const res = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("done");
      form.reset();
      void loadWishes();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="guestbook" tone="dark">
      <Reveal>
        <SectionHeading vi="Sổ lưu bút" en="Guestbook" onDark />
      </Reveal>

      <Reveal className="mt-8 lg:mt-11">
        <form onSubmit={handleSubmit} className="rounded-lg border border-cream/25 bg-cream/5 p-4 lg:p-5">
            <input
              required
              type="text"
              name="name"
              maxLength={MAX_WISH_NAME}
              placeholder="Tên của bạn / Your name"
              className={inputClass}
            />
            <textarea
              required
              name="message"
              maxLength={MAX_WISH_MESSAGE}
              placeholder="Gửi lời chúc đến cô dâu chú rể / Your wishes..."
              className={`${inputClass} mt-2.5 min-h-22 resize-y`}
            />

            {status === "error" && (
              <p className="font-body mt-2.5 text-[11.5px] text-rose-300">
                Gửi không thành công, vui lòng thử lại sau ít phút.
              </p>
            )}
            {status === "done" && (
              <p className="font-body mt-2.5 text-[11.5px] text-accent-soft">
                Cảm ơn bạn đã gửi lời chúc!
              </p>
            )}

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={status === "loading" ? undefined : { scale: 1.02 }}
              whileTap={status === "loading" ? undefined : { scale: 0.97 }}
              className="font-body mt-3 ml-auto block rounded-full bg-highlight px-6 py-2.5 text-[10.5px] font-bold tracking-[0.1em] text-surface uppercase disabled:opacity-60 lg:text-[11.5px]"
            >
              {status === "loading" ? "Đang gửi..." : "Gửi lời chúc / Send wish"}
            </motion.button>
        </form>
      </Reveal>

      <div className="mt-5 space-y-2.5 lg:mt-7">
        <AnimatePresence initial={false}>
          {wishes.map((wish, i) => (
            <motion.div
              key={`${wish.at}-${i}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-lg border border-cream/20 bg-cream/5 px-4 py-3.5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-body text-[12.5px] font-semibold text-cream">{wish.name}</p>
                {wish.at && (
                  <time
                    dateTime={wish.at}
                    className="font-body flex-none text-[9.5px] tracking-[0.06em] text-cream/50 uppercase"
                  >
                    {formatDate(wish.at)}
                  </time>
                )}
              </div>
              <p className="font-body mt-1.5 text-[12.5px] leading-relaxed whitespace-pre-line text-cream/75">
                {wish.message}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>

        {loaded && wishes.length === 0 && (
          <p className="font-body py-4 text-center text-[12px] text-cream/60">
            Chưa có lời chúc nào — hãy là người đầu tiên nhé!
          </p>
        )}
      </div>
    </Section>
  );
}

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

const inputClass =
  "w-full rounded-md border border-cream/30 bg-cream/8 px-3 py-2.5 text-[13px] text-cream outline-none placeholder:text-cream/45 focus-visible:border-accent-soft";

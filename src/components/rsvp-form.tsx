"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/reveal";

export function RsvpForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      wish: String(data.get("wish") ?? ""),
      attending: String(data.get("attending") ?? ""),
      guests: String(data.get("guests") ?? ""),
      side: String(data.get("side") ?? ""),
    };

    setStatus("loading");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-deep px-7 py-9 pb-7.5 text-[#f4efe0] lg:py-16">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <h3 className="font-body mb-5.5 text-center text-[13px] leading-relaxed font-normal text-white/85 lg:mb-9 lg:text-base">
            Vui lòng xác nhận sự tham dự của bạn để chúng mình chuẩn bị đón tiếp một cách chu đáo nhất.
            Trân trọng cảm ơn!
          </h3>
        </Reveal>

        <AnimatePresence mode="wait">
          {status === "done" ? (
            <motion.p
              key="done"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-body rounded-lg border border-white/25 bg-white/5 px-5 py-6 text-center text-sm text-white/90 lg:py-9 lg:text-base"
            >
              Đã nhận được xác nhận của bạn. Hẹn gặp bạn trong ngày trọng đại!
            </motion.p>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="font-body space-y-3.5 text-sm lg:space-y-5"
            >
              <Field label="Tên của bạn">
                <input required type="text" name="name" placeholder="Nguyễn Văn A" className={inputClass} />
              </Field>
              <Field label="Gửi lời chúc đến cô dâu chú rể">
                <textarea name="wish" placeholder="Lời chúc của bạn..." className={`${inputClass} min-h-16 resize-y`} />
              </Field>
              <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:space-y-0 space-y-3.5">
                <Field label="Xác nhận tham dự?">
                  <select name="attending" className={inputClass}>
                    <option>Có, tôi sẽ tham dự</option>
                    <option>Rất tiếc, tôi không thể tham dự</option>
                  </select>
                </Field>
                <Field label="Đi cùng ai không?">
                  <select name="guests" className={inputClass}>
                    <option>Đi một mình</option>
                    <option>Đi cùng 1 người</option>
                    <option>Đi cùng 2 người</option>
                  </select>
                </Field>
                <Field label="Khách mời của ai?">
                  <select name="side" className={inputClass}>
                    <option>Nhà trai</option>
                    <option>Nhà gái</option>
                  </select>
                </Field>
              </div>

              {status === "error" && (
                <p className="font-body text-center text-xs text-rose-300">
                  Gửi không thành công, vui lòng thử lại sau ít phút.
                </p>
              )}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={status === "loading" ? undefined : { scale: 1.02 }}
                whileTap={status === "loading" ? undefined : { scale: 0.97 }}
                className="mt-1.5 w-full rounded-full bg-accent py-3.5 text-[13px] font-bold tracking-[0.08em] text-[#2a1e0d] uppercase disabled:opacity-60 lg:py-4 lg:text-sm"
              >
                {status === "loading" ? "Đang gửi..." : "Xác nhận"}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-white/30 bg-white/8 px-3 py-2.5 text-[14px] text-[#f4efe0] outline-none placeholder:text-white/40 focus-visible:border-accent-soft";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] tracking-[0.06em] text-accent-soft uppercase">{label}</span>
      {children}
    </label>
  );
}

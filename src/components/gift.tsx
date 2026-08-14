"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Photo } from "@/components/photo";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { weddingConfig } from "@/lib/wedding-config";

function CopyNumberButton({ number }: { number: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(number.replace(/\s/g, ""));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — no-op
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={{ scale: 0.96 }}
      className="mt-3 rounded-full border border-line px-4 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-ink uppercase transition-colors hover:bg-highlight hover:text-surface"
    >
      {copied ? "Đã sao chép" : "Sao chép số TK"}
    </motion.button>
  );
}

export function Gift() {
  const { note, accounts } = weddingConfig.gift;

  return (
    <section className="px-7 py-8.5 text-center lg:py-16">
      <Reveal className="mx-auto max-w-2xl">
        <p className="font-script mb-4 text-4xl leading-none text-accent lg:mb-6 lg:text-6xl">Mừng cưới</p>
        <p className="font-body mx-auto mb-7 max-w-md text-[13px] leading-relaxed text-ink-soft lg:mb-10 lg:text-base">
          {note}
        </p>
      </Reveal>

      <RevealStagger className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {accounts.map((account) => (
          <RevealItem
            key={account.owner}
            className="rounded-lg border border-line bg-surface/90 px-5 py-6 backdrop-blur-sm"
          >
            <Photo
              src={account.qr}
              alt={`Mã QR chuyển khoản ${account.owner}`}
              label="Mã QR"
              className="mx-auto mb-4 h-40 w-40 rounded"
            />
            <p className="font-body text-[10px] font-bold tracking-[0.14em] text-accent uppercase">{account.owner}</p>
            <p className="font-display mt-1 text-lg text-ink">{account.name}</p>
            <p className="font-body mt-1 text-[13px] text-ink-soft">
              {account.bank} · {account.number}
            </p>
            <CopyNumberButton number={account.number} />
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}

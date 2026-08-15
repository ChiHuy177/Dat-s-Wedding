"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { LeafDecor } from "@/components/leaf-decor";
import { Photo } from "@/components/photo";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
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
      className="font-body mt-3 rounded-full border border-line px-4 py-1.5 text-[10px] font-semibold tracking-[0.08em] text-ink uppercase transition-colors hover:bg-highlight hover:text-surface lg:text-[11px]"
    >
      {copied ? "Đã sao chép / Copied" : "Sao chép số TK / Copy"}
    </motion.button>
  );
}

export function Gift() {
  const { note, noteEn, accounts } = weddingConfig.gift;

  return (
    <Section tone="light">
      <LeafDecor corner="bottom-right" className="text-accent" opacity={0.18} />

      <Reveal>
        <SectionHeading vi="Hộp quà mừng" en="Gift box" />
        <p className="font-body mx-auto mt-6 max-w-md text-center text-[12.5px] leading-relaxed text-ink lg:mt-8 lg:text-[14px]">
          {note}
        </p>
        <p className="font-body mx-auto mt-2 max-w-md text-center text-[10px] tracking-[0.06em] text-ink-soft uppercase lg:text-[11px]">
          {noteEn}
        </p>
      </Reveal>

      <RevealStagger className="mt-8 grid gap-4 text-center sm:grid-cols-2 lg:mt-11">
        {accounts.map((account) => (
          <RevealItem
            key={account.owner}
            className="rounded-lg border border-line bg-surface px-5 py-6"
          >
            <Photo
              src={account.qr}
              alt={`Mã QR chuyển khoản ${account.owner}`}
              label="Mã QR"
              className="mx-auto mb-4 h-36 w-36 rounded lg:h-40 lg:w-40"
              sizes="160px"
            />
            <p className="font-body text-[9px] tracking-[0.16em] text-accent uppercase lg:text-[10.5px]">
              {account.owner} / {account.ownerEn}
            </p>
            <p className="font-display mt-1.5 text-lg text-ink">{account.name}</p>
            <p className="font-body mt-1 text-[12px] text-ink-soft lg:text-[13px]">
              {account.bank} · {account.number}
            </p>
            <CopyNumberButton number={account.number} />
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}

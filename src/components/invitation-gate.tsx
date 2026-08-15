"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence } from "motion/react";
import { Envelope } from "@/components/envelope";

/**
 * Holds the site behind the invitation card. Until the guest opens the card the
 * page underneath can't be scrolled, focused, or read by assistive tech.
 */
export function InvitationGate({ children }: { children: ReactNode }) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) return;

    // A refresh can restore a previous scroll position — start at the top.
    window.scrollTo(0, 0);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [opened]);

  return (
    <>
      <AnimatePresence>
        {!opened && <Envelope key="envelope" onOpened={() => setOpened(true)} />}
      </AnimatePresence>

      <div inert={!opened}>{children}</div>
    </>
  );
}

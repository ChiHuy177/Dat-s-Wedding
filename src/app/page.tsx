import { MotionProvider } from "@/components/motion-provider";
import { InvitationGate } from "@/components/invitation-gate";
import { Hero } from "@/components/hero";
import { LoveStory } from "@/components/love-story";
import { CeremonyPanel } from "@/components/ceremony-panel";
import { Dresscode } from "@/components/dresscode";
import { Guestbook } from "@/components/guestbook";
import { Gift } from "@/components/gift";
import { Thanks } from "@/components/thanks";

export default function Home() {
  return (
    <MotionProvider>
      <InvitationGate>
        {/* Sections alternate light / deep green all the way down. */}
        <main>
          <Hero />
          <LoveStory />
          <CeremonyPanel />
          <Dresscode />
          <Guestbook />
          <Gift />
          <Thanks />
        </main>
      </InvitationGate>
    </MotionProvider>
  );
}

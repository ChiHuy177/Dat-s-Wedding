import { MotionProvider } from "@/components/motion-provider";
import { InvitationGate } from "@/components/invitation-gate";
import { Hero } from "@/components/hero";
import { LoveStory } from "@/components/love-story";
import { CeremonyPanel } from "@/components/ceremony-panel";
import { Schedule } from "@/components/schedule";
import { Album } from "@/components/album";
import { Guestbook } from "@/components/guestbook";
// Temporarily disabled — re-enable when ready.
// import { Gift } from "@/components/gift";
// import { Dresscode } from "@/components/dresscode";
import { Thanks } from "@/components/thanks";

export default function Home() {
  return (
    <MotionProvider>
      <InvitationGate>
        {/* Light cream cards all the way down; only Thanks closes on deep green. */}
        <main>
          <Hero />
          <LoveStory />
          <CeremonyPanel />
          <Schedule />
          <Album />
          <Guestbook />
          {/* <Gift /> */}
          {/* <Dresscode /> */}
          <Thanks />
        </main>
      </InvitationGate>
    </MotionProvider>
  );
}

import { MotionProvider } from "@/components/motion-provider";
import { Envelope } from "@/components/envelope";
import { Hero } from "@/components/hero";
import { LoveStory } from "@/components/love-story";
import { Countdown } from "@/components/countdown";
import { Invitation } from "@/components/invitation";
import { Location } from "@/components/location";
import { Families } from "@/components/families";
import { Timeline } from "@/components/timeline";
import { Dresscode } from "@/components/dresscode";
import { Gift } from "@/components/gift";
import { Album } from "@/components/album";
import { RsvpForm } from "@/components/rsvp-form";
import { Thanks } from "@/components/thanks";

export default function Home() {
  return (
    <MotionProvider>
      <main>
        <Envelope targetId="hero" />
        <Hero />
        <LoveStory />
        <Countdown />
        <Invitation />
        <Location />
        <Families />
        <Timeline />
        <Dresscode />
        <Gift />
        <Album />
        <RsvpForm />
        <Thanks />
      </main>
    </MotionProvider>
  );
}

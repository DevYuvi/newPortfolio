import { Hero } from "@/components/sections/Hero";
import { SceneBackdrop } from "@/components/ui/SceneBackdrop";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { About } from "@/components/sections/About";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Expertise } from "@/components/sections/Expertise";
import { Impact } from "@/components/sections/Impact";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { HomeJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <SceneBackdrop />
      <Hero />
      <ProofStrip />
      <About />
      <SelectedWork />
      <Expertise />
      <Impact />
      <Journey />
      <Contact />
    </>
  );
}

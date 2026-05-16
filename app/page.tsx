"use client";

import { Navbar } from "./components/navbar";
import { AboutWedding } from "./components/sections/about-wedding";
import { IntroSection } from "./components/sections/intro-section";
import { useVisibilityObserver } from "@/src/lib/hooks";
import { GallerySection } from "./components/sections/gallery-section";
import { LastInfoSection } from "./components/sections/last-info-section";
import { OurStory } from "./components/sections/our-story";
import { GoToGiftsSection } from "./components/sections/go-to-gifts-section";

export default function Home() {
  const { ref, isVisible: isIntroVisible } =
    useVisibilityObserver<HTMLDivElement>({
      options: { threshold: 0.3, keepObersving: true },
    });

  return (
    <div>
      <Navbar isTrasnparent={isIntroVisible} />
      <div ref={ref}>
        <IntroSection />
      </div>
      <AboutWedding />
      <GoToGiftsSection />
      <OurStory />
      {/* <GallerySection />  TODO: defeito aqui */}
      <LastInfoSection />
    </div>
  );
}

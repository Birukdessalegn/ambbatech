import WelcomeIntro from "@/components/WelcomeIntro";
import ScrollObserver from "@/components/ScrollObserver";
import Hero from "@/components/Hero";
import ProductProof from "@/components/ProductProof";
import HowWeWork from "@/components/HowWeWork";
import WhatWeBuild from "@/components/WhatWeBuild";
import FinalCta from "@/components/FinalCta";

export default function HomePage() {
  return (
    <>
      {/* Cinematic Welcome Splash Animation on Initial Visit */}
      <WelcomeIntro />

      {/* Intersection Observer for Smooth Scroll-Driven Reveal Animations */}
      <ScrollObserver />

      {/* Section 01 — Hero with 3D Dual Isometric Mockups */}
      <Hero />

      {/* Section 02 — Our Flagship Products (Kasina HMS & The Oak Club) */}
      <ProductProof />

      {/* Section 03 — Our Process (01. Discover -> 05. Support) */}
      <HowWeWork />

      {/* Section 04 — What We Do (Custom Software, Web Apps, Mobile, Business Systems) */}
      <WhatWeBuild />

      {/* Section 05 — Action Banner (Have a business problem worth solving?) */}
      <FinalCta />
    </>
  );
}

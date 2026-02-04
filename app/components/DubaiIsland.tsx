"use client";

import BlurReveal from "./BlurReveal";

export default function DubaiIslandsSection() {
  return (
    <section className="h-[50vh] md:h-screen flex items-center justify-center bg-gradient-to-b from-beige-primary to-white">
      <div className="w-[85%] md:w-[70%] text-center h-[30%] flex flex-col gap-5 items-center justify-center">
        <BlurReveal delay={0.25}>
          <h1 className="mx-auto uppercase text-xl md:text-3xl font-medium tracking-[0.3em] text-brown-dark md:w-[80%]">
            Dubai Islands Crafted Around the Coast, Defined by Distinction
          </h1>
        </BlurReveal>

        <BlurReveal delay={0.35}>
          <p className="md:w-[60%] text-brown-medium-1 mt-2 mx-auto text-para">
            Dubai Islands is one of Dubai's most distinguished mixed-use
            destinations, bringing together upscale residences, world-class
            hospitality, dynamic marinas, and over 20kms of pristine shoreline.
          </p>
        </BlurReveal>
      </div>
    </section>
  );
}

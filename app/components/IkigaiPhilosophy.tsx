"use client";

import BlurReveal from "./BlurReveal";

export default function IkigaiPhilosophy() {
  return (
    <section className="relative w-full min-h-screen flex items-start pt-20 justify-center text-white overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/philosophy-siora.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center px-8 text-center py-12">
        <BlurReveal delay={0.15}>
          <p className="text-sm tracking-[0.3em]">PHILOSOPHY</p>
        </BlurReveal>

        <BlurReveal delay={0.25}>
          <h1 className="mt-4 text-3xl font-medium md:text-nowrap tracking-[0.3em]">
            LIVING WITH PURPOSE – IKIGAI
          </h1>
        </BlurReveal>

        <BlurReveal delay={0.35}>
          <p className="mt-6 max-w-4xl text-para">
            Ikigai is the guiding philosophy of the masterplan, shaping how people live, feel, and connect. Inspired by the Japanese concept of purposeful living, it unites architecture, nature, wellness, and community into a single, human-centred experience. Redefining luxury beyond spectacle, Ikigai shifts the focus from excess to intention. , offering more than a home it offers balance, belonging, and a way of life.
          </p>
        </BlurReveal>
      </div>
    </section>
  );
}

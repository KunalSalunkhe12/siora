"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurReveal from "./BlurReveal";

gsap.registerPlugin(ScrollTrigger);

export default function IkigaiSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          snap: {
            snapTo: [0, 0.25, 0.5, 0.75, 1],
            duration: 0.7,
            ease: "power2.out",
          },
        },
      });

      tl.to({}, { duration: 1 });

      tl.to(sectionRef.current, {
        backgroundColor: "var(--color-beige-medium)",
        duration: 1,
      });

      tl.to(cardRef.current, {
        y: "100vh",
        ease: "none",
        duration: 3,
      });

      tl.fromTo(
        cardRef.current,
        { y: "100vh", rotationY: 0 },
        {
          y: "0vh",
          rotationY: 0,
          ease: "power1.out",
          duration: 3,
        }
      );

      tl.to({}, { duration: 1 });

      tl.to(cardRef.current, {
        rotationY: 180,
        width: "100vw",
        height: "100dvh",
        ease: "none",
        duration: 5,
      });

      tl.to({}, { duration: 1 });
      tl.to({}, { duration: 1 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center bg-beige-light overflow-hidden relative"
      style={{ perspective: "1400px" }}
    >
      <div className="absolute inset-0 bg-black opacity-0 z-10" />

      <div className="absolute w-[85%] md:w-[65%] text-center h-[30%] flex gap-5 flex-col items-center justify-center">
        <BlurReveal>
          <h1 className="mx-auto text-brown-darker text-2xl md:text-[32px] font-haffer font-normal tracking-widest md:w-[80%]">
            SIORA IS MORE THAN A NAME — IT IS THE INVISIBLE ARCHITECTURE OF THE
            MASTERPLAN
          </h1>
        </BlurReveal>
        <BlurReveal delay={1}>
          <p className="mx-auto md:w-[70%] mt-3 text-brown-medium-2 text-para font-haffer font-normal">
            From Japanese thought, Sior evokes "the veil of the tide" — a delicate
            intersection of movement and stillness. Rooted in Shio, meaning tide,
            and Ra, symbolizing silk and a refined weave, the name embodies the
            ocean's graceful rhythm and quiet power. Like silk shaped by water,
            the architecture flows with intention, where nature and design
            dissolve into one another.
          </p>
        </BlurReveal>
      </div>

      <div
        ref={cardRef}
        className="relative z-6"
        style={{
          width: "20vw",
          height: "30vw",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src="/images/ikigai.jpg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg) translateZ(1px)",
          }}
        />

        <img
          src="/images/ikigai.jpg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(1px)",
          }}
        />
      </div>
    </section>
  );
}

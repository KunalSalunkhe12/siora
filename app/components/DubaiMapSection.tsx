"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function DubaiMapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 0.3,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(".overlayimg", {
        opacity: 0.5,
        duration: 0.5,
      });

      tl.to(".toplayer", {
        scale: 1.05,
        opacity: 1,
        ease: "power1.out",
        duration: 0.5,
      });

      tl.to(".toplayer2", {
        opacity: 1,
        ease: "power1.out",
        duration: 0.5,
      });

      tl.to({}, { duration: 0.5 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Mobile layout */}
      <section
        id="location"
        className="md:hidden min-h-screen relative overflow-hidden py-12"
      >
        <Image
          src="/images/map.png"
          alt="map"
          width={1000}
          height={1000}
          className="w-full h-full object-cover absolute inset-0"
        />

        <div className="relative z-10 px-6">
          <div className="text-white text-center mb-8">
            <p className="text-sm leading-relaxed mb-6">
              A COASTAL REALM DEFINED BY ELEGANCE AND EFFORTLESS CONNECTION.
            </p>
            <p className="text-sm leading-relaxed">
              LOCATED ON ISLAND B OF DUBAI ISLANDS, SIORA MASTERPLAN IS A PREMIER
              WATERFRONT DESTINATION.
            </p>
          </div>

          <div className="mt-2 flex justify-center">
            <Image
              src="/images/box-mob-1.svg"
              alt="box"
              width={1000}
              height={1000}
              className="w-full h-full object-cover z-3"
            />
          </div>
        </div>
      </section>

      {/* Desktop layout */}
      <section
        ref={sectionRef}
        className="hidden md:block h-screen relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black overlayimg z-2 opacity-0" />

        <Image
          src="/images/map.png"
          alt="map"
          width={1000}
          height={1000}
          className="backimage w-full h-full object-cover absolute inset-0"
        />

        <Image
          src="/images/box.svg"
          alt="box"
          width={1000}
          height={1000}
          className="toplayer w-full h-full object-cover absolute inset-0 opacity-0 z-3"
        />

        <div className="toplayer2 opacity-0 absolute z-3 text-white right-[10vw] top-[18vh] w-[30%] leading-snug">
          A COASTAL REALM DEFINED BY ELEGANCE AND EFFORTLESS CONNECTION.
        </div>

        <div className="toplayer2 opacity-0 absolute z-3 text-white right-[15vw] bottom-[15vh] w-[25%] leading-snug">
          LOCATED ON ISLAND B OF DUBAI ISLANDS, SIORA MASTERPLAN IS A PREMIER
          WATERFRONT DESTINATION.
        </div>
      </section>
    </>
  );
}

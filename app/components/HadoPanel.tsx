"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HadoPanel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "150%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        videoWrapRef.current,
        {
          width: "70vw",
          height: "10vh",
          transformOrigin: "left bottom",
        },
        {
          width: "70vw",
          height: "87vh",
          ease: "power1.out",
          duration: 1.2,
        },
        0
      );

      tl.fromTo(
        ".info2",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        0.3
      );

      tl.fromTo(
        ".hado-blur",
        {
          opacity: 0,
          y: -6,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
        },
        1.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Mobile layout */}
      <section className="bg-white md:hidden py-10">
        <div className="uppercase text-black flex flex-col items-center justify-center mb-6">
          <h2 className="text-xl tracking-[0.2em] font-haffer">
            Introducing hado
          </h2>
        </div>

        <div className="w-[80vw] max-w-sm mx-auto aspect-square overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hado-thumbnail.webm" type="video/webm" />
          </video>
        </div>

        <div className="w-11/12 max-w-md mx-auto mt-6">
          <div className="py-4">
            <h3 className="w-full uppercase text-center text-xl font-semibold text-black">
              A sanctuary where light and stillness inspire life
            </h3>
            <p className="mt-2 text-gray-700 text-center">
              There are places that speak without words, where beauty is both
              seen and felt. HADO is such a place — an unseen resonance where
              movement and stillness exist in harmony, a quiet pulse flowing
              through every space, connecting people to the energy of the sea
              and the warmth of sunlight.
            </p>
            <div className="w-full mx-auto info3 mt-6 flex">
              <button className="btn-secondary w-[60%] mx-auto text-[10px]">
                Explore Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop layout */}
      <section
        ref={sectionRef}
        className="hidden md:block h-screen relative overflow-hidden bg-white"
      >
        <div className="info2 heading absolute top-6 left-1/2 -translate-x-1/2 uppercase opacity-0 text-black flex flex-col items-center justify-center">
          <h2 className="text-3xl tracking-[0.2em] font-haffer">
            Introducing hado
          </h2>
        </div>

        <div className="absolute top-[20%] right-[4vw] -translate-y-1/2 w-[22vw] hado-blur">
          <div className="py-4">
            <button className="w-full flex justify-start items-center uppercase text-left text-xl font-semibold text-black">
              <div>A sanctuary where light and stillness inspire life</div>
            </button>
            <div className="transition-all duration-300 overflow-hidden text-left mt-2 opacity-100">
              <div>
                <p className="mt-2 text-gray-700">
                  There are places that speak without words, where beauty is
                  both seen and felt. HADO is such a place — an unseen
                  resonance where movement and stillness exist in harmony, a
                  quiet pulse flowing through every space, connecting people to
                  the energy of the sea and the warmth of sunlight.
                </p>
              </div>
            </div>
            <div className="w-full mx-auto info3 mt-6 flex">
              <button className="btn-secondary w-[160px] text-[11px]">
                Explore Project
              </button>
            </div>
          </div>
        </div>

        <div
          ref={videoWrapRef}
          className="absolute bottom-0 left-0 overflow-hidden w-[70vw] h-[10vh]"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hado-thumbnail.webm" type="video/webm" />
          </video>
        </div>
      </section>
    </>
  );
}

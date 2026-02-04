"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function DeveloperSection() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".dev-anim", {
        opacity: 0,
        y: 30,
        duration: 2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="developer"
      className="w-full bg-[#F0EEED] text-black flex flex-col items-center justify-center gap-8 px-10 py-24"
    >
      <div className="w-full lg:w-[40%] mb-8 lg:mb-0 text-center">
        <h5 className="dev-anim uppercase mb-4 tracking-widest">
          About the Developer
        </h5>

        <div className="flex justify-center">
          <img
            src="/logos/beyond-logo.svg"
            alt="beyond logo"
            className="dev-anim w-55 md:w-90"
          />
        </div>
      </div>

      <div className="w-[80%] lg:w-[50%] text-center space-y-4 text-[14px] leading-relaxed">
        <p className="dev-anim">
          Beyond is a new premium real estate brand under Omniyat group,
          specializing in wider luxury markets and creating homes that blend
          innovation, nature, and luxury.
        </p>

        <p className="dev-anim">
          Our commitment to quality and design ensures that every development is
          more than just a place to live; it’s an experience that redefines
          modern living. With a focus on delivering on-time, thoughtfully
          designed homes, we provide spaces that resonate with the personal
          values of our residents, enhancing their quality of life.
        </p>

        <p className="dev-anim">
          From lush landscapes to state-of-the-art technology, BEYOND offers a
          lifestyle where every detail has been curated to provide unparalleled
          comfort, convenience, and well-being. Our mission is to go beyond
          expectations and deliver homes that inspire, uplift, and resonate with
          modern urban values.
        </p>
      </div>
    </section>
  );
}

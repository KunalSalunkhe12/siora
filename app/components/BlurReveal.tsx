"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BlurReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
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
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      }
    );
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}

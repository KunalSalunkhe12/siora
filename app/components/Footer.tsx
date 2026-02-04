"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-reveal", {
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={ref}
      className="relative text-white font-haffer overflow-hidden px-8 md:px-20 pb-10"
    >
      <Image
        width={1000}
        height={1000}
        src="/images/footerbg.png"
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="footer-reveal relative z-10 max-w-350 mx-auto pt-14 md:pt-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 md:gap-24 items-start">
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <Image
              width={1000}
              height={1000}
              src="/logos/siorawhite.png"
              alt="Siora"
              className="w-80"
            />

            <div className="flex gap-6 md:gap-4 xl:gap-10">
              <Social icon="/icons/whatsapp.png" />
              <Social icon="/icons/facebook-white.svg" />
              <Social icon="/icons/instagram.png" />
              <Social icon="/icons/linkedin.png" />
              <Social icon="/icons/youtube.png" />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start md:grid md:grid-cols-2 gap-y-6 gap-x-10 text-center md:text-left">
            <div className="flex flex-col gap-5 items-center md:items-start w-[80%]">
              <h4 className="tracking-widest uppercase">Channel Partner</h4>
              <p className="para">Join us as our registered Channel Partner</p>

              <div className="group btn-secondary btn-shimmer text-[11px]">
                <span className="btn-shimmer-effect" />
                <a
                  href="https://beyondproperties.my.salesforce-sites.com/AgentOnboarding"
                  target="_blank"
                  className="relative z-10"
                >
                  Become an Agent
                </a>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-3 items-center md:items-start">
              <h4 className="tracking-widest">EXPLORE</h4>
              <button className="text-white/70 hover:text-white transition">
                Projects
              </button>
              <button className="text-white/70 hover:text-white transition">
                Location
              </button>
              <button className="text-white/70 hover:text-white transition">
                Developer
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              width={300}
              height={30}
              src="/logos/beyondwhite.png"
              alt="Beyond"
              className="w-44"
            />
          </div>
        </div>

        <p className="para text-[12px] mt-10 text-center md:text-justify">
          Interior renders: These renders are non-binding, for illustrative
          purposes only, and subject to change without notice. Final materials,
          finishes, and configurations may differ based on availability, design
          updates, and approvals. Loose furniture, fixtures, lighting, wall
          cladding, and mounted items are NOT included. In case of conflict,
          contractual documents, including the Sale and Purchase Agreement
          (SPA), will prevail. THE DEVELOPER SHALL NOT BE HELD RESPONSIBLE FOR
          ANY DISCREPANCIES, INACCURACIES, ERRORS, OR OMISSIONS IN THE RENDERS,
          NOR FOR ANY CONSEQUENCES, LOSSES, OR DAMAGES RESULTING FROM RELIANCE
          ON THEM AND MAKES NO GUARANTEES OF THEIR ACCURACY OR COMPLETENESS.
        </p>

        <div className="border-t border-white/20 my-8" />

        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 text-xs text-white/50">
          <p>© 2025 | Siora. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <span>Language</span>
            <span className="text-white">English ⌄</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({ icon }: { icon: string }) {
  return (
    <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition">
      <Image
        width={20}
        height={20}
        src={icon}
        className="w-4 h-4"
        alt="Social Icon"
      />
    </div>
  );
}

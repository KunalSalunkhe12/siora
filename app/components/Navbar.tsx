"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavItems, setShowNavItems] = useState(false);
  const hasMountedNavLinks = useRef(false);
  const mobileMenuTlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.to("#navbar", {
      top: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    const linksSelector = "#mobile-menu .mobile-nav-link";

    if (mobileMenuTlRef.current) {
      mobileMenuTlRef.current.kill();
      mobileMenuTlRef.current = null;
    }

    const tl = gsap.timeline();
    mobileMenuTlRef.current = tl;

    if (isMenuOpen) {
      tl.fromTo(
        "#mobile-menu",
        { left: "-100%", autoAlpha: 0 },
        {
          left: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      ).fromTo(
        linksSelector,
        { x: -40, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.3"
      );
    } else {
      tl.to(linksSelector, {
        x: -40,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.in",
      }).to("#mobile-menu", {
        left: "-100%",
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });
    }

    return () => {
      if (mobileMenuTlRef.current) {
        mobileMenuTlRef.current.kill();
        mobileMenuTlRef.current = null;
      }
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const navLinksSelector = "#navbar .nav-links";

    if (!hasMountedNavLinks.current) {
      gsap.set(navLinksSelector, { opacity: 0, y: -20 });
      hasMountedNavLinks.current = true;
      return;
    }

    if (showNavItems) {
      gsap.to(navLinksSelector, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(navLinksSelector, {
        opacity: 0,
        y: -20,
        duration: 0.7,
        ease: "power2.out",
      });
    }
  }, [showNavItems]);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const direction = self.direction;
        const scrollPos = self.scroll();

        if (direction === 1 && scrollPos > 80) {
          gsap.to("#navbar", {
            y: -80,
            autoAlpha: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        } else if (direction === -1) {
          gsap.to("#navbar", {
            y: 0,
            autoAlpha: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className="h-17.5 lg:h-18.75 flex flex-col items-center justify-center w-screen fixed left-0 z-40 -top-23.5 backdrop-blur-[10px] bg-black/30"
        onMouseLeave={() => setShowNavItems(false)}
      >
        <div className="container w-11/12 h-12.5 lg:h-13.75 flex items-center justify-start lg:justify-end letter-spaced text-sm relative">
          <div className="flex items-center gap-5 lg:hidden">
            <Image
              onClick={() => setIsMenuOpen(true)}
              height={2180}
              width={1280}
              alt="menu"
              className="cursor-pointer lg:hidden h-6 lg:h-6.25 z-40 w-auto text-white"
              src="/icons/menu-icon.png"
            />
          </div>

          <Image
            height={2180}
            width={1280}
            alt="logo"
            className="cursor-pointer absolute ml-4 md:ml-0 z-50 left-1/2 lg:left-1/12 -translate-x-1/2 top-1/2 -translate-y-1/2 h-8.75 lg:h-9.75 w-auto text-white"
            src="/logos/siorawhite.png"
          />

          <div className="absolute md:block hidden z-10 top-1/2 -translate-y-1/2 left-[21%] w-px h-8.5 bg-gray-500"></div>

          <Image
            onMouseEnter={() => setShowNavItems(true)}
            height={2180}
            width={1280}
            alt="menu"
            className="cursor-pointer md:block hidden absolute z-10 left-1/2 lg:left-1/4 -translate-x-1/2 top-1/2 -translate-y-1/2 h-6 lg:h-6.25 w-auto text-white"
            src="/icons/menu-icon.png"
          />

          <div className="hidden lg:flex items-center text-sm font-light text-white">
            <div className="flex items-center gap-12">
              <div className="nav-links flex items-center gap-8 transition-all duration-700 ease-in-out">
                <a
                  href="/hado"
                  className="cursor-pointer transition-transform duration-300 hover:scale-[0.97]"
                >
                  <button className="tracking-[0.2em] uppercase font-primary font-light cursor-pointer">
                    PROJECT
                  </button>
                </a>
                <a
                  href="#location"
                  className="cursor-pointer transition-transform duration-300 hover:scale-[0.97]"
                >
                  <button className="tracking-[0.2em] uppercase font-primary font-light cursor-pointer">
                    LOCATION
                  </button>
                </a>
                <a
                  href="#developer"
                  className="cursor-pointer transition-transform duration-300 hover:scale-[0.97]"
                >
                  <button className="tracking-[0.2em] uppercase font-primary font-light cursor-pointer">
                    DEVELOPER
                  </button>
                </a>
              </div>
              <a
                href="#register"
                className="cursor-pointer transition-transform duration-300 hover:scale-[0.98]"
              >
                <button className="uppercase px-6 py-2 bg-[#CCBCAD] text-black rounded-3xl cursor-pointer font-haffer whitespace-nowrap font-normal tracking-[0.2em]">
                  REGISTER INTEREST
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className="fixed top-0 h-screen -left-full w-screen lg:w-[45vw] bg-[#302E2D33] z-50 backdrop-blur-lg text-white ease-in-out"
      >
        <svg
          onClick={() => setIsMenuOpen(false)}
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 absolute left-[5%] lg:left-[20%] top-4 lg:top-6 cursor-pointer"
        >
          <path
            d="M8.09245 6.95382L13.6443 1.78635C13.8431 1.60133 13.8431 1.32379 13.6443 1.13877C13.4455 0.953744 13.1473 0.953744 12.9485 1.13877L7.39669 6.30623L1.84485 1.13877C1.66026 0.96696 1.34788 0.96696 1.14909 1.13877C0.950303 1.32379 0.950303 1.60133 1.14909 1.78635L6.70094 6.95382L1.14909 12.1213C0.950303 12.3063 0.950303 12.5838 1.14909 12.7689C1.24848 12.8614 1.37628 12.901 1.48987 12.901C1.60346 12.901 1.74545 12.8614 1.83065 12.7689L7.39669 7.6014L12.9485 12.7689C13.0479 12.8614 13.1757 12.901 13.2893 12.901C13.4029 12.901 13.5449 12.8614 13.6301 12.7689C13.8289 12.5838 13.8289 12.3063 13.6301 12.1213L8.09245 6.95382Z"
            fill="currentColor"
            stroke="currentColor"
          />
        </svg>

        <div className="flex flex-col justify-center items-end h-full uppercase">
          <div className="w-[85%] lg:w-[80%] relative">
            <div className="flex flex-col items-start gap-6 relative z-2 text-xl font-light *:cursor-pointer">
              <a
                href="/hado"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-nav-link"
              >
                <button className="uppercase letter-spaced">PROJECT</button>
              </a>
              <a
                href="#location"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-nav-link"
              >
                <button className="uppercase letter-spaced">LOCATION</button>
              </a>
              <a
                href="#developer"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-nav-link"
              >
                <button className="uppercase letter-spaced">DEVELOPER</button>
              </a>
              <a
                href="#register"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-nav-link"
              >
                <button className="uppercase border px-6 py-2 text-sm bg-transparent letter-spaced w-full max-w-xs font-primary font-light transition-transform duration-300 hover:scale-110 whitespace-nowrap">
                  REGISTER INTEREST
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

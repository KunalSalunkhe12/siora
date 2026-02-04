"use client";

import { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRefDesktop = useRef<HTMLVideoElement>(null);
  const videoRefMobile = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section id="home" className="h-screen relative">
      <div className="absolute inset-0 bg-black/30 z-5" />

      <div className="h-screen relative">
        <img
          src="/images/hero.png"
          alt="Siora Hero"
          className={`absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-1000 ${isVideoLoaded ? "opacity-0" : "opacity-100"
            }`}
          loading="eager"
        />

        {shouldLoadVideo && (
          <video
            ref={videoRefDesktop}
            src="/videos/siora-hero-video.webm"
            autoPlay
            loop
            playsInline
            muted
            poster="/images/hero.png"
            preload="metadata"
            onLoadedData={handleVideoLoaded}
            onCanPlay={handleVideoLoaded}
            className={`hidden md:block w-full h-full object-cover object-bottom transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
          />
        )}

        {shouldLoadVideo && (
          <video
            ref={videoRefMobile}
            src="/videos/siora-hero-video.webm"
            autoPlay
            loop
            playsInline
            muted
            poster="/images/hero.png"
            preload="metadata"
            onLoadedData={handleVideoLoaded}
            onCanPlay={handleVideoLoaded}
            className={`md:hidden block w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;

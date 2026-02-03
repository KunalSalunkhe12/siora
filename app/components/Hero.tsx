const Hero = () => {
  return (
    <section id="home" className="h-screen relative">
      <div className="absolute inset-0 bg-black/30 z-5" />

      <div className="h-screen">
        <video
          src="/videos/philosophy-siora.webm"
          autoPlay
          loop
          playsInline
          muted
          poster=""
          className="hidden md:block w-full h-full object-cover object-bottom"
        />

        <video
          src="/videos/philosophy-siora.webm"
          autoPlay
          loop
          playsInline
          muted
          poster=""
          className="md:hidden block w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;

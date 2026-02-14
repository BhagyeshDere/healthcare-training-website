import { useEffect, useRef, useState } from "react";

export default function IntroVideo() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // SCROLL PROGRESS TRACKING
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      let visible = 1 - rect.top / windowH;
      visible = Math.max(0, Math.min(1.2, visible));

      setProgress(visible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ANIMATION VALUES
  const scale = 0.9 + progress * 0.15;
  const blur = 6 - progress * 6;
  const rotate = 1.5 - progress * 1.5;
  const textOpacity = progress * 1.2;
  const textY = 50 - progress * 50;

  return (
    <section
      ref={sectionRef}
      className="
        py-14 sm:py-20 md:py-28 lg:py-32
        bg-gradient-to-b from-white via-blue-50 to-white
        overflow-hidden
      "
    >

      {/* HEADER */}
      <div className="text-center mb-10 sm:mb-14 md:mb-16 px-4 sm:px-6">
        <span className="
          text-brandRed font-semibold uppercase tracking-wider
          text-xs sm:text-sm
        ">
          About VIDA
        </span>

        <h2 className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-bold text-brandBlue mt-4
          leading-tight
        ">
          Transforming Healthcare Through Excellence
        </h2>

        <p className="
          text-gray-600 mt-4 max-w-2xl mx-auto
          text-sm sm:text-base
        ">
          Discover how VIDA Life Sciences empowers healthcare professionals
          through world-class education and certification.
        </p>
      </div>

      {/* VIDEO CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div
          style={{
            transform: `scale(${scale}) rotate(${rotate}deg)`,
            filter: `blur(${blur}px)`,
          }}
          className="
            relative
            rounded-xl sm:rounded-2xl md:rounded-3xl
            overflow-hidden
            shadow-2xl
            transition-all duration-300 ease-out
          "
        >

          {/* VIDEO */}
          <video
            src="/videos/vida-intro.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="
              w-full
              h-[220px] 
              sm:h-[320px] 
              md:h-[420px]
              lg:h-[520px]
              xl:h-[600px]
              object-cover
            "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"/>

          {/* COLOR OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-brandBlue/20 to-brandRed/20"/>

          {/* FLOATING BADGE */}
          <div className="
            absolute top-3 sm:top-5 left-3 sm:left-6
            bg-white/20 backdrop-blur-md
            px-3 sm:px-5 py-1.5 sm:py-2
            rounded-full text-white
            text-[10px] sm:text-sm
            border border-white/30
          ">
            VIDA Life Sciences
          </div>

         

        </div>

      </div>

    </section>
  );
}

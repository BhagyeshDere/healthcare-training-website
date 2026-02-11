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
  const scale = 0.85 + progress * 0.25;
  const blur = 8 - progress * 8;
  const rotate = 2 - progress * 2;
  const textOpacity = progress * 1.4;
  const textY = 60 - progress * 60;

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
    >

      {/* HEADER */}
      <div className="text-center mb-16 px-6">
        <span className="text-brandRed font-semibold uppercase tracking-wider">
          About VIDA
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-brandBlue mt-4">
          Transforming Healthcare Through Excellence
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover how VIDA Life Sciences empowers healthcare professionals
          through world-class education and certification.
        </p>
      </div>

      {/* VIDEO CONTAINER */}
      <div className="max-w-6xl mx-auto px-6">

        <div
          style={{
            transform: `
              scale(${scale})
              rotate(${rotate}deg)
            `,
            filter: `blur(${blur}px)`,
          }}
          className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ease-out"
        >

          {/* VIDEO */}
          <video
            src="/videos/vida-intro.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[520px] object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* COLOR OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-brandBlue/20 to-brandRed/20"></div>

          {/* FLOATING BADGE */}
          <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-white text-sm border border-white/30">
            VIDA Life Sciences
          </div>

          {/* GLASS TEXT CARD */}
          <div
            style={{
              opacity: textOpacity,
              transform: `translateY(${textY}px)`,
            }}
            className="absolute bottom-10 left-10 bg-white/15 backdrop-blur-lg p-8 rounded-2xl text-white max-w-md border border-white/20 shadow-xl transition-all duration-300"
          >
            <h3 className="text-3xl font-bold mb-3">
              Shaping the Future of Healthcare
            </h3>

            <p className="text-gray-200 mb-4">
              Education • Certification • Research • Global Impact
            </p>

            <button className="bg-gradient-to-r from-brandBlue to-brandRed px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Learn More
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

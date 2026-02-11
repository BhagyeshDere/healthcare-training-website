import { useEffect, useState } from "react";

export default function HeroSlider() {
  const slides = [
    {
      image: "/images/home/hero/slide1.png",
      title: "Advancing Healthcare Excellence",
      subtitle:
        "Professional training and certification programs for modern medical leaders.",
    },
    {
      image: "/images/home/hero/slide2.png",
      title: "Empowering Medical Professionals",
      subtitle:
        "World-class healthcare education designed for real impact.",
    },
    {
      image: "/images/home/hero/slide3.png",
      title: "Innovating Life Sciences",
      subtitle:
        "Research, innovation and training for a healthier tomorrow.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-black">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* IMAGE */}
          <img
            src={slide.image}
            alt="slide"
            className="w-full h-full object-cover object-center"
          />

          {/* SOFT COLOR OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-brandBlue/30 via-black/20 to-brandRed/30"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

              {/* LEFT TEXT */}
              <div className="text-white space-y-6">

                <span className="bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm">
                  VIDA Life Sciences
                </span>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>

                <p className="text-lg text-gray-200 max-w-lg">
                  {slide.subtitle}
                </p>

                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-brandBlue to-brandRed px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                    Explore Programs
                  </button>

                  <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
                    Contact Us
                  </button>
                </div>
              </div>

              {/* RIGHT GLASS CARD */}
              <div className="hidden md:block">
                <div className="
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                  p-10 rounded-3xl
                  text-white
                  shadow-2xl
                ">
                  <h3 className="text-2xl font-semibold mb-4">
                    Why VIDA?
                  </h3>

                  <ul className="space-y-3 text-gray-200">
                    <li>✔ Global healthcare standards</li>
                    <li>✔ Certified training programs</li>
                    <li>✔ 40,000+ professionals trained</li>
                    <li>✔ International collaborations</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* PROGRESS BAR INDICATOR */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-brandBlue to-brandRed transition-all duration-[6000ms]"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-brandRed scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </div>
  );
}

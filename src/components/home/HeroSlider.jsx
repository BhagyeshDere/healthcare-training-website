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
    <div className="
      relative 
      h-[85vh] sm:h-[90vh] md:h-screen
      w-full 
      overflow-hidden 
      bg-black
    ">

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
            className="
              w-full h-full 
              object-cover object-center
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="
              max-w-4xl 
              mx-auto 
              px-4 sm:px-6 md:px-8
              text-center 
              text-white 
              space-y-6 md:space-y-8
            ">

              <span className="
                bg-white/20 
                backdrop-blur 
                px-4 py-2 sm:px-5 
                rounded-full 
                text-xs sm:text-sm
              ">
                VIDA Life Sciences
              </span>

              <h1 className="
                text-3xl sm:text-4xl 
                md:text-6xl lg:text-7xl
                font-bold 
                leading-tight 
                drop-shadow-lg
              ">
                {slide.title}
              </h1>

              <p className="
                text-base sm:text-lg md:text-xl
                text-gray-200 
                max-w-2xl 
                mx-auto 
                drop-shadow-md
              ">
                {slide.subtitle}
              </p>

              {/* BUTTONS */}
              <div className="
                flex 
                flex-col sm:flex-row
                gap-4 sm:gap-6 
                justify-center
              ">

                <button className="
                  bg-gradient-to-r from-brandBlue to-brandRed 
                  px-6 sm:px-8 md:px-10
                  py-3 sm:py-4
                  rounded-full 
                  font-semibold 
                  shadow-lg 
                  hover:scale-105 
                  transition
                  w-full sm:w-auto
                ">
                  Explore Programs
                </button>

                <button className="
                  border border-white 
                  px-6 sm:px-8 md:px-10
                  py-3 sm:py-4
                  rounded-full 
                  hover:bg-white hover:text-black 
                  transition
                  w-full sm:w-auto
                ">
                  Contact Us
                </button>

              </div>

            </div>
          </div>
        </div>
      ))}

      {/* PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="
            h-full 
            bg-gradient-to-r from-brandBlue to-brandRed 
            transition-all duration-[6000ms]
          "
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

      {/* DOTS */}
      <div className="
        absolute 
        bottom-4 sm:bottom-6 
        w-full 
        flex justify-center 
        gap-2 sm:gap-3
      ">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
              current === i
                ? "bg-brandRed scale-125"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </div>
  );
}

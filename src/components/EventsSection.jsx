import { useEffect, useState } from "react";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

export default function EventsSection() {
  const annualEvents = [
    { title: "DIAGNOSTICON", place: "Bangalore (Karnataka)", date: "January 2027" },
    { title: "VIDACON 2026", place: "Chennai (Tamil Nadu)", date: "10–12 April 2026" },
    { title: "SAKCON", place: "Noida (Uttar Pradesh)", date: "11–12 Sept 2026" },
    { title: "VIDA TECH", place: "Vizag (Andhra Pradesh)", date: "14–15 Nov 2026" },
  ];

  const partnerEvents = [
    {
      title: "ISO 7101:2023 Healthcare Quality Management",
      date: "21 Feb 2026",
      mode: "Virtual",
      img: "/images/events/partner1.png",
    },
    {
      title: "Healthcare Supply Chain Masterclass",
      date: "10 Mar 2026",
      mode: "Hybrid",
      img: "/images/events/partner2.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % partnerEvents.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="
      py-16 sm:py-20 md:py-28
      relative overflow-hidden
      bg-gradient-to-b from-white via-blue-50/40 to-white
    ">

      {/* GLOWS */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-brandBlue/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brandRed/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-brandRed uppercase font-semibold tracking-widest text-xs sm:text-sm">
            EVENTS
          </span>

          <h2 className="
            text-3xl sm:text-4xl md:text-5xl
            font-bold text-brandBlue mt-4
          ">
            Conferences & Global Programs
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-brandBlue to-brandRed mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">

          {/* LEFT — PARTNER SLIDER */}
          <div className="relative">

            <h3 className="text-xl sm:text-2xl font-bold text-brandBlue mb-6 sm:mb-8">
              Partner Events
            </h3>

            <div className="
              relative 
              h-[300px] sm:h-[360px] md:h-[420px]
              rounded-3xl overflow-hidden
              shadow-[0_25px_80px_rgba(11,28,45,0.35)]
            ">

              {partnerEvents.map((event, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    i === current ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  }`}
                >
                  <img
                    src={event.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  <div className="
                    absolute bottom-0
                    p-4 sm:p-6 md:p-8
                    text-white max-w-lg
                  ">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      {event.title}
                    </h4>

                    <p className="mt-2 text-gray-200 text-sm sm:text-base">
                      {event.date} • {event.mode}
                    </p>

                    <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-5">
                      <button className="
                        bg-white/20 backdrop-blur
                        px-4 sm:px-6 py-2
                        rounded-full
                        hover:scale-105 transition
                        text-sm sm:text-base
                      ">
                        Explore
                      </button>

                      <button className="
                        bg-gradient-to-r from-brandBlue to-brandRed
                        px-4 sm:px-6 py-2
                        rounded-full font-semibold
                        hover:scale-105 transition
                        text-sm sm:text-base
                      ">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-3 mt-5 sm:mt-6">
              {partnerEvents.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                    current === i ? "bg-brandRed" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — TIMELINE */}
          <div>

            <h3 className="text-xl sm:text-2xl font-bold text-brandBlue mb-8 sm:mb-10">
              Annual Events
            </h3>

            <div className="space-y-8 sm:space-y-10">
              {annualEvents.map((event, i) => (
                <div key={i} className="group flex gap-4 sm:gap-6 items-start">

                  {/* NUMBER BADGE */}
                  <div className="
                    flex-shrink-0
                    w-12 h-12 sm:w-14 sm:h-14
                    rounded-full
                    bg-gradient-to-br from-brandBlue to-brandRed
                    text-white
                    flex items-center justify-center
                    font-bold text-base sm:text-lg
                    shadow-[0_10px_30px_rgba(11,28,45,0.3)]
                  ">
                    {i + 1}
                  </div>

                  {/* GLASS CARD */}
                  <div className="
                    flex-1
                    bg-white/70 backdrop-blur-xl
                    p-4 sm:p-6
                    rounded-2xl border border-white/40
                    shadow-[0_20px_60px_rgba(11,28,45,0.25)]
                    hover:shadow-[0_30px_90px_rgba(11,28,45,0.35)]
                    hover:-translate-y-2 transition
                  ">

                    <h4 className="font-bold text-lg sm:text-xl text-gray-800">
                      {event.title}
                    </h4>

                    <p className="text-gray-600 flex items-center gap-2 mt-2 text-sm sm:text-base">
                      <MapPin size={16} /> {event.place}
                    </p>

                    <p className="text-gray-500 flex items-center gap-2 mt-1 text-sm sm:text-base">
                      <CalendarDays size={16} /> {event.date}
                    </p>

                    <ArrowRight className="mt-3 text-brandRed group-hover:translate-x-2 transition" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

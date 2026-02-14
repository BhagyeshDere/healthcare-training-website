"use client";

import { useEffect, useState } from "react";
import {
  HeartPulse,
  Handshake,
  Building2,
  Users,
  ArrowUpRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VidaConnectSection() {

  /* ================= TESTIMONIAL DATA ================= */
  const testimonials = [
    {
      text: `“CAHO as a professional organisation has opened up to me the world of quality training in healthcare standards along with providing me with wonderful learning opportunities.”`,
      name: "Dr. Geetopam Bordoloi",
      role: "Consultant & HOD",
    },
    {
      text: `“It’s giving me a pleasure to say with pride that I have become Life Member of CAHO. It is the most valued form to discuss Healthcare Quality and Accreditation. Through its diversified areas of education, certification, CMEs, webinar, CAHO plays a major role in the Indian healthcare industry.”`,
      name: "Mr. Justin Babu",
      role: "Asst. Professor & Program Coordinator",
    },
    {
      text: `“CAHO is a very professional organization and has been continuously striving to improve healthcare standards by raising concerns, helping to reach out and working on solutions with the industry experts and also by coordinating ample training opportunities that includes sharing best practices.”`,
      name: "Dr. Rajesh Nair",
      role: "Armed Forces Medical Services (AFMS), New Delhi",
    },
  ];

  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-[#F5F9FF] to-[#EEF3FF]">

      {/* soft background glows */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-red-200/40 blur-[120px] sm:blur-[160px] rounded-full -z-10" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-blue-200/40 blur-[120px] sm:blur-[160px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-28 space-y-16 sm:space-y-20 md:space-y-24">

        {/* ================= TESTIMONIAL SLIDER ================= */}
        <div className="relative h-[420px] sm:h-[460px] md:h-[420px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden shadow-xl">

          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/common/backgrounds/medical-bg.png')",
            }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B3C49]/95 via-[#0B3C49]/80 to-transparent" />

          {/* SLIDING TEXT */}
          <div className="relative h-full flex items-center px-6 sm:px-10 md:px-14 lg:px-20 text-white max-w-4xl">

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8 }}
              >
                <Sparkles className="text-cyan-300 mb-4 sm:mb-6" size={24} />

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8">
                  {testimonials[index].text}
                </p>

                <h4 className="text-xl sm:text-2xl font-semibold">
                  {testimonials[index].name}
                </h4>

                <p className="text-cyan-300 mt-2 text-sm sm:text-base">
                  {testimonials[index].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DOT INDICATORS */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 sm:w-8 bg-cyan-400"
                    : "w-3 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= COLLABORATIONS ================= */}
        <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10 sm:mb-12 md:mb-14">
            Collaborations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {[
              { icon: <HeartPulse size={34} />, title: "Centers for Quality Promotion" },
              { icon: <Users size={34} />, title: "Associations / Societies" },
              { icon: <Building2 size={34} />, title: "Institutions" },
              { icon: <Handshake size={34} />, title: "Industries" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-blue-200 via-cyan-200 to-red-200 hover:scale-105 transition"
              >
                <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 h-full flex flex-col gap-4 sm:gap-6 items-start shadow-lg">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center text-blue-600 group-hover:rotate-6 group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <ArrowUpRight className="text-gray-500 opacity-70 group-hover:translate-x-2 group-hover:-translate-y-2 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CTA STRIP ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

          <div className="rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-8 sm:p-10 md:p-12 bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-xl">
            <h4 className="text-2xl sm:text-3xl font-bold mb-4">
              Stay Connected with VIDA
            </h4>
            <p className="opacity-95 max-w-lg text-sm sm:text-base">
              Subscribe to receive updates on VIDA’s initiatives driving
              excellence in patient safety and healthcare quality.
            </p>
            <button className="mt-6 sm:mt-8 bg-white text-red-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-105 transition">
              SUBSCRIBE
            </button>
          </div>

          <div className="rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-8 sm:p-10 md:p-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-xl">
            <div className="flex items-center gap-3 sm:gap-4">
              <MessageCircle size={36} />
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold">
                  Feedback / Suggestion
                </h4>
                <p className="opacity-95 text-sm sm:text-base">We value your thoughts</p>
              </div>
            </div>
            <button className="mt-8 sm:mt-10 bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-105 transition">
              Click Here
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
